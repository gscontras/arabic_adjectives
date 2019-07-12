import pandas as pd
def convert_json_to_df(json):
  """
  This functions takes in a (nested) json object as input and converts it into a dataframe.
  """

  from flatten_json import flatten_preserve_lists
  from pandas.io.json import json_normalize
  

  json_flattened = flatten_preserve_lists(json, max_list_index=100)
  df = json_normalize(json_flattened)
  
  return df

#load data and name it json_trials1
json_trials1 = {"trials":[{"response":0.68,"noun":"couch","gender":"feminine","nounclass":"furniture","predicate1":"fresh","predicate2":"huge","class1":"age","class2":"size","slide_number":3},{"response":0.3,"noun":"apple","gender":"feminine","nounclass":"food","predicate1":"blue","predicate2":"soft","class1":"color","class2":"texture","slide_number":4},{"response":0.66,"noun":"banana","gender":"feminine","nounclass":"food","predicate1":"smooth","predicate2":"green","class1":"texture","class2":"color","slide_number":5},{"response":0.34,"noun":"apple","gender":"feminine","nounclass":"food","predicate1":"rotten","predicate2":"brown","class1":"age","class2":"color","slide_number":6}],"catch_trials":[],"system":{"Browser":"Safari","OS":"Mac","screenH":1440,"screenW":2560},"subject_information":{"language":"sd","enjoyment":"-1","asses":"Confused","age":"12","gender":"Other","education":"-1","comments":"GREG0","describe":"-1","lived":"both","years":"-1","dialect":"-1","proficiency":"-1","test1":"-1","test2":"correct","test3":"-1"},"time_in_minutes":0.52715},{"trials":[{"response":0.66,"noun":"TV","gender":"masculine","nounclass":"furniture","predicate1":"bad","predicate2":"rotten","class1":"quality","class2":"age","slide_number":3},{"response":0.19,"noun":"apple","gender":"feminine","nounclass":"food","predicate1":"old","predicate2":"small","class1":"age","class2":"size","slide_number":4},{"response":0.75,"noun":"fan","gender":"feminine","nounclass":"furniture","predicate1":"smooth","predicate2":"metal","class1":"texture","class2":"material","slide_number":5},{"response":0.48,"noun":"desk","gender":"masculine","nounclass":"furniture","predicate1":"smooth","predicate2":"good","class1":"texture","class2":"quality","slide_number":6},{"response":0.35,"noun":"chair","gender":"masculine","nounclass":"furniture","predicate1":"smooth","predicate2":"round","class1":"texture","class2":"shape","slide_number":7}],"catch_trials":[],"system":{"Browser":"Safari","OS":"Mac","screenH":1440,"screenW":2560},"subject_information":{"language":"asdffds","enjoyment":"-1","asses":"Confused","age":"23","gender":"Female","education":"-1","comments":"GREG1","describe":"-1","lived":"before","years":"-1","dialect":"-1","proficiency":"intermediate","test1":"-1","test2":"correct","test3":"-1"},"time_in_minutes":0.4175833333333333},

df_trials1 = pd.DataFrame() #this creates an empty dataframe
for x in json_trials1:
  df_ = convert_json_to_df(x)
  df_trials1 = pd.concat([df_trials1, df_])

df_trials1
