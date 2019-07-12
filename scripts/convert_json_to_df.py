import pandas as pd
import json

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
with open('new_map_data.json') as json_file:
    # put "[" as first element of string
    # delete "," from end of string
    # add "]" to end of string

    json_trials1 = json.load(json_file)

df_trials1 = pd.DataFrame() #this creates an empty dataframe
for x in json_trials1:
  df_ = convert_json_to_df(x)
  df_trials1 = pd.concat([df_trials1, df_])

df_trials1.to_csv("results.csv")

# print(json_trials1)