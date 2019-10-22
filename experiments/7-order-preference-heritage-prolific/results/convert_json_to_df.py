import pandas as pd
import json

def convert_json_to_df(json_obj):
  """
  This functions takes in a (nested) json object as input and converts it into a dataframe.
  """

  from flatten_json import flatten_preserve_lists
  from pandas.io.json import json_normalize
  
  # default index for json flatten is 3
  json_flattened = flatten_preserve_lists(json_obj, max_list_index=1000, max_depth=3)
  df = json_normalize(json_flattened)
  
  return df



#load data and name it json_trials1
with open('new_map_data.json') as json_file:
    
    # add "[" as first element, remove last comma from end of string, then add "]" to end of string
    # json_file is an _io.textiowrapper object and the .read() method is converting it to a string
    json_file_string = '[' + json_file.read()[:-1] + ']'

    #json.loads expects a string as an iput 
    json_trials1 = json.loads(json_file_string)

df_trials1 = pd.DataFrame() #this creates an empty dataframe
for x in json_trials1:
  df_ = convert_json_to_df(x)
  df_trials1 = pd.concat([df_trials1, df_])

df_trials1.to_csv("results.csv")

# print(json_trials1)