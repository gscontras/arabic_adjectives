// 40 most frequent noun-predicate combinations in the BNC

//[
//		{"Sentence": "box red", "Predicate": "red", "Noun": "box"},
//		{"Sentence": "box big", "Predicate": "big", "Noun": "box"}
//		]

var adjectives = _.shuffle([ 
		{"Predicate":"������", "Class":"color", "Translation":"red"},
		{"Predicate":"������", "Class":"color", "Translation":"yellow"},
		{"Predicate":"������", "Class":"color", "Translation":"green"},
		{"Predicate":"������", "Class":"color", "Translation":"blue"},
		{"Predicate":"��������", "Class":"color", "Translation":"purple"},
		{"Predicate":"�����", "Class":"color", "Translation":"brown"},											
		{"Predicate":"������", "Class":"size", "Translation":"big"},
		{"Predicate":"������", "Class":"size", "Translation":"small"},					
		{"Predicate":"�����", "Class":"size", "Translation":"huge"},					
		//{"Predicate":"tiny", "Class":"size", "Translation":"tiny"},					
		{"Predicate":"������", "Class":"size", "Translation":"short"},					
		{"Predicate":"������", "Class":"size", "Translation":"long"},							
		{"Predicate":"������", "Class":"material", "Translation":"wooden"},
		{"Predicate":"����������", "Class":"material", "Translation":"plastic"},
		{"Predicate":"�������", "Class":"material", "Translation":"metal"},
		{"Predicate":"������", "Class":"texture", "Translation":"smooth"},
		{"Predicate":"�����", "Class":"texture", "Translation":"hard"},
		{"Predicate":"������", "Class":"texture", "Translation":"soft"},
		{"Predicate":"������", "Class":"age", "Translation":"old"},
		{"Predicate":"������", "Class":"age", "Translation":"new"},
		{"Predicate":"������", "Class":"age", "Translation":"rotten"},
		{"Predicate":"������", "Class":"age", "Translation":"fresh"},
		{"Predicate":"�����", "Class":"quality", "Translation":"good"},
		{"Predicate":"�����", "Class":"quality", "Translation":"bad"},
		{"Predicate":"��������", "Class":"shape", "Translation":"round"},						
		{"Predicate":"������", "Class":"shape", "Translation":"square"}
]);

// var she_adjectives = _.shuffle([
// 		{"Predicate":"�������", "Class":"color", "Translation":"red"},
// 		{"Predicate":"�������", "Class":"color", "Translation":"yellow"},
// 		{"Predicate":"�������", "Class":"color", "Translation":"green"},
// 		{"Predicate":"�������", "Class":"color", "Translation":"blue"},
// 		{"Predicate":"���������", "Class":"color", "Translation":"purple"},
// 		{"Predicate":"������", "Class":"color", "Translation":"brown"},											
// 		{"Predicate":"�������", "Class":"size", "Translation":"big"},
// 		{"Predicate":"�������", "Class":"size", "Translation":"small"},					
// 		{"Predicate":"������", "Class":"size", "Translation":"huge"},					
// 		//{"Predicate":"tiny", "Class":"size", "Translation":"tiny"},					
// 		{"Predicate":"�������", "Class":"size", "Translation":"short"},					
// 		{"Predicate":"�������", "Class":"size", "Translation":"long"},							
// 		{"Predicate":"�������", "Class":"material", "Translation":"wooden"},
// 		{"Predicate":"�����������", "Class":"material", "Translation":"plastic"},
// 		{"Predicate":"��������", "Class":"material", "Translation":"metal"},
// 		{"Predicate":"������� ", "Class":"texture", "Translation":"smooth"},
// 		{"Predicate":"������", "Class":"texture", "Translation":"hard"},
// 		{"Predicate":"�������", "Class":"texture", "Translation":"soft"},
// 		{"Predicate":"�������", "Class":"age", "Translation":"old"},
// 		{"Predicate":"�������", "Class":"age", "Translation":"new"},
// 		{"Predicate":"�������", "Class":"age", "Translation":"rotten"},
// 		{"Predicate":"�������", "Class":"age", "Translation":"fresh"},
// 		{"Predicate":"������", "Class":"quality", "Translation":"good"},
// 		{"Predicate":"������", "Class":"quality", "Translation":"bad"},
// 		{"Predicate":"���������", "Class":"shape", "Translation":"round"},						
// 		{"Predicate":"�������", "Class":"shape", "Translation":"square"}
// ]);

var nouns = [
		{"Noun":"�����", "NounClass":"food", "Translation":"cheese"},
		{"Noun":"������", "NounClass":"furniture", "Translation":"chair"},								
		{"Noun":"�������", "NounClass":"furniture", "Translation":"TV"},								
		{"Noun":"������", "NounClass":"furniture", "Translation": "desk"},								
		{"Noun":"�������", "NounClass":"food", "Translation":"apple"},
		{"Noun":"������", "NounClass":"food", "Translation":"banana" },
		{"Noun":"������", "NounClass":"food", "Translation":"carrot"},
		{"Noun":"�������", "NounClass":"food", "Translation":"tomato"},								
		{"Noun":"������", "NounClass":"furniture", "Translation":"couch"},								
		{"Noun":"�������", "NounClass":"furniture", "Translation":"fan"}								
];

// var nouns = [
// 		{"Noun":"�����", "NounClass":"food", "Translation":"cheese"},
// 		{"Noun":"������", "NounClass":"furniture", "Translation":"chair"},								
// 		{"Noun":"�������", "NounClass":"furniture", "Translation":"TV"},								
// 		{"Noun":"������", "NounClass":"furniture", "Translation": "desk"}								
// ];

// var she_nouns = [
// 		{"Noun":"�������", "NounClass":"food", "Translation":"apple"},
// 		{"Noun":"������", "NounClass":"food", "Translation":"banana" },
// 		{"Noun":"������", "NounClass":"food", "Translation":"carrot"},
// 		{"Noun":"�������", "NounClass":"food", "Translation":"tomato"},								
// 		{"Noun":"������", "NounClass":"furniture", "Translation":"couch"},								
// 		{"Noun":"�������", "NounClass":"furniture", "Translation":"fan"}								
// ];

var stimuli =  makeStims();

function makeStims() {
	stims = [];

	while (stims.length < 26) {
		noun = _.sample(nouns);
		pred1 = _.sample(adjectives);
		pred2 = _.sample(adjectives);
		if (pred1.Class!=pred2.Class) {
			stims.push(
				{
					"Predicate1":pred1.Predicate,
					"Class1":pred1.Class,	
					"Predicate2":pred2.Predicate,
					"Class2":pred2.Class,			
					"Noun":noun.Noun,
					"NounClass":noun.NounClass
				}			
			);
		}
	}
		
	return stims;
	
}