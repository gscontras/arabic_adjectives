library(ggplot2)
library(lme4)
library(hydroGOF)
library(dplyr)
source("../results/helpers.R")

setwd("~/git/arabic_adjectives/experiments/1-order-preference/Submiterator-master")

num_round_dirs = 5
df1 = do.call(rbind, lapply(1:num_round_dirs, function(i) {
  return (read.csv(paste(
    'round', i, '/arabic-order.csv', sep=''),stringsAsFactors=FALSE) %>% 
      mutate(workerid = (workerid + (i-1)*9)))}))
df1$workerid = paste("vi.",df1$workerid)

d1 = subset(df1, select=c("workerid","noun","gender","nounclass","slide_number", "predicate1", "predicate2", "class1","class2","response","language","comments","asses"))

unique(d1$language)

d <- d1

d = d[d$language == "العربية"|d$language == "العربية"|d$language == "العربيه"|d$language == "العربیه"|d$language == "Arabic"|d$language == "Arabic "|d$language == "العربية Arabic"|d$language == "arabic"|d$language == "Arebic"|d$language == "عربى",]
d = d[d$asses=="Yes",]

length(unique(d$workerid)) # n=15

t <- d

#####
## duplicate observations by first predicate
#####

library(tidyr)

o <- t
o$rightpredicate1 = o$predicate2
o$rightpredicate2 = o$predicate1
o$rightresponse = 1-o$response
agr = o %>% 
  select(predicate1,rightpredicate1,response,rightresponse,workerid,noun,nounclass,class1,class2) %>%
  gather(predicateposition,predicate,predicate1:rightpredicate1,-workerid,-noun,-nounclass,-class1,-class2)
agr$correctresponse = agr$response
agr[agr$predicateposition == "rightpredicate1",]$correctresponse = agr[agr$predicateposition == "rightpredicate1",]$rightresponse
agr$correctclass = agr$class1
agr[agr$predicateposition == "rightpredicate1",]$correctclass = agr[agr$predicateposition == "rightpredicate1",]$class2
head(agr[agr$predicateposition == "rightpredicate1",])
agr$response = NULL
agr$rightresponse = NULL
agr$class1 = NULL
agr$class2 = NULL
nrow(agr) #XXX
#write.csv(agr,"~/git/tagalog_adjectives/experiments/2-tagalog-preference/results/naturalness-duplicated.csv")
agr$correctresponse = 1 - agr$correctresponse

agr = agr[!is.na(agr$correctresponse),]

adj_agr = aggregate(correctresponse~predicate*correctclass,FUN=mean,data=agr)
adj_agr

class_agr = aggregate(correctresponse~correctclass,FUN=mean,data=agr)

class_s = bootsSummary(data=agr, measurevar="correctresponse", groupvars=c("correctclass"))
#write.csv(class_s,"../results/tagalog_class_s.csv")

ggplot(data=class_s,aes(x=reorder(correctclass,-correctresponse,mean),y=correctresponse))+
  geom_bar(stat="identity",fill="lightgray",color="black")+
  geom_errorbar(aes(ymin=bootsci_low, ymax=bootsci_high, x=reorder(correctclass,-correctresponse,mean), width=0.1))+
  geom_hline(yintercept=0.5,linetype="dashed") + 
  xlab("\nadjective class")+
  ylab("preferred\ndistance from noun\n")+
  ylim(0,1)+
  #labs("order\npreference")+
  theme_bw()#+
#theme(axis.text.x=element_text(angle=90,vjust=0.35,hjust=1))
#ggsave("../results/class_distance.pdf",height=3)
#ggsave("../results/LSA_class_distance.png",height=2,width=4.3)