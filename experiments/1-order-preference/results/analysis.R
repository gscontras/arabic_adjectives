library(ggplot2)
library(lme4)
library(hydroGOF)
library(dplyr)

setwd("~/git/arabic_adjectives/experiments/1-order-preference/Submiterator-master")

num_round_dirs = 5
df1 = do.call(rbind, lapply(1:num_round_dirs, function(i) {
  return (read.csv(paste(
    'round', i, '/arabic-order.csv', sep=''),stringsAsFactors=FALSE) %>% 
      mutate(workerid = (workerid + (i-1)*9)))}))
df1$workerid = paste("vi.",df1$workerid)

d1 = subset(df1, select=c("workerid","noun","gender","nounclass","slide_number", "predicate1", "predicate2", "class1","class2","response","language","comments","asses"))

unique(d1$language)
