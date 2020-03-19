from nltk import StanfordPOSTagger
import re
from tqdm import tqdm #in jupyter notebook instead use from tqdm.notebook import tqdm


def ArabicTaggerGrabber(tagger_path, jar_path):
	"""
	this function grabs the arabic stanford tagger 
	"""

	path_to_model = (tagger_path)

	path_to_jar = (jar_path)

	artagger = StanfordPOSTagger(path_to_model, path_to_jar, encoding='utf8')

	artagger._SEPARATOR = "/"

	return artagger


def PunctuationPadder(s):
    """
    Input
    -----
    it takes in any string
    
    Output
    ------
    it adds spaces around punctuations before and after 
    """

    s = re.sub('([.,!?()])', r' \1 ', s)
    s = re.sub('\s{2,}', ' ', s)

    return s

def NounAdjAdjChecker(three_tuples_list_tagged):
    """
    Input
    -----
    three_tuples_list_tagged is a list of 3 tuples and each tuple contains the word and POS
    e.g. three_tuples_list_tagged = [('الحديقة', 'DTNN'), ('الخضراء', 'DTJJ'), ('الجميلة', 'DTJJ')]
    
    Output
    ------
    boolean: True iff we have noun adj adj string
    """

    # check if the 0-th word is a noun or not
    check_0 = three_tuples_list_tagged[0][1] in ['DTNN', 'NN']

    # check if the 1-th word is a adjective or not
    check_1 = three_tuples_list_tagged[1][1] in ['DTJJ', 'JJ']

    # check if the 2-th word is a adjective or not
    check_2 = three_tuples_list_tagged[2][1] in ['DTJJ', 'JJ']
    
    full_check = check_0 and check_1 and check_2
    
    word_0 = three_tuples_list_tagged[0][0]
    
    word_1 = three_tuples_list_tagged[1][0]
    
    word_2 = three_tuples_list_tagged[2][0]
    
    phrase = word_0 + "," + word_1 + "," + word_2 
    
    return full_check, phrase

def NounAdjAdjGenerator(tagged_sent):
    """
    Input: 
    ------
    tagged sentence of any length; example: [('وجدت', 'VBD'), ('طابة', 'NN'), ('دائريةً', 'JJ'), ('زرقاء', 'JJ'), ('على', 'IN'), ('الطاولة', 'DTNN')]
    and iterates through the sentence in 3-grams. If the tagged sentence contains adjadjnouns, it appends it to a list that eventually is returned. 
    
    Output:
    ------
    adj adj noun phrases
    """

    adjadjnouns = []
    for n in range(3,len(tagged_sent)+1):
        check,phrase = NounAdjAdjChecker(tagged_sent[n-3:n])
        if check:
             adjadjnouns.append(phrase)
    return adjadjnouns
    

def NounAdjAdjParser(phrase, artagger):
    """
    Input:
    ------
    takes in any phrase
    
    Output:
    ------
    returns the phrase only if it's an adjadjnoun phrase, otherwise returns an empty list
    """
    
    phrase_list = phrase.split()

    phrase_tagged = artagger.tag(phrase_list)
    
    return NounAdjAdjGenerator(phrase_tagged)


def TaggerRunner(source_path, destination_path, tagger_path, jar_path):
	"""
	Input
	-----
	this function takes in path to the common corpus being processed, 
								   the the file to which the extracted phrases are saved (preferably a .csv file because the data is being saved in a table form),
								   the Arabic tagger,
								   and the jar (another path needed for the Satnford tagger)

	Output
	------
	wraps all the previous functions and is the primary function that is called, and returns only the adj adj noun phrases we are interested in 
	"""

	ar_tagger = ArabicTaggerGrabber(tagger_path, jar_path)

	with open(source_path ,'r') as lines:
	    with open(destination_path,'w') as AdjAdjNounPhrases:
	        AdjAdjNounPhrases.write("Noun,Adj1,Adj2\n")
	        for line in tqdm(lines):
	            line = PunctuationPadder(line)
	            NewPhrases = NounAdjAdjParser(line, ar_tagger)
	            for phrase in NewPhrases:
	                AdjAdjNounPhrases.write(phrase+"\n")


if __name__ == "__main__":
	print("running from command line")

	import argparse  #this is a library used to run pyhton code from command line

	parser = argparse.ArgumentParser() #this initializes the argument parser
	parser.add_argument("--source_path") #this allows us to pass an argument a 
	parser.add_argument("--destination_path") #this allows us to pass an argument b 
	parser.add_argument("--tagger_path") #this allows us to pass an argument c
	parser.add_argument("--jar_path") #this allows us to pass an argument d
	args = parser.parse_args() #this allows us to use these arguments in python

	TaggerRunner(args.source_path, args.destination_path, args.tagger_path, args.jar_path)

