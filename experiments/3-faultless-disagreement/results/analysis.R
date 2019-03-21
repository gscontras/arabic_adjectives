library(ggplot2)
library(lme4)
library(hydroGOF)
library(dplyr)
source("../results/helpers.R")

setwd("~/git/arabic_adjectives/experiments/3-faultless-disagreement/Submiterator-master")

num_round_dirs =15
df1 = do.call(rbind, lapply(1:num_round_dirs, function(i) {
  return (read.csv(paste(
    'round', i, '/arabic-faultless-disagreement.csv', sep=''),stringsAsFactors=FALSE) %>% 
      mutate(workerid = (workerid + (i-1)*9)))}))
df1$workerid = paste("vi.",df1$workerid)

d1 = subset(df1, select=c("workerid","noun","gender","nounclass","slide_number", "predicate", "class","response","language","comments","asses","test1","test2","test3","dialect","lived","describe","years","proficiency"))

d <- d1

# got all the test questions correct
d = d[d$test1=="correct"&d$test2=="correct"&d$test3=="correct",]
# lived more than 5 years both before and after age 8 in arabic country
d = d[d$lived=="both"&d$years=="5+",]
# describe as arabic-arabic
d = d[d$describe=="arabic-arabic",]

unique(d$language)

d = d[d$language != "Arabic English",]
#d = d[d$asses=="Yes",]

length(unique(d$workerid)) #n=16

t <- d

#####
## duplicate observations by first predicate
#####

library(tidyr)

d$response = 1-d$response

class_agr = aggregate(response~class,FUN=mean,data=d)

class_s = bootsSummary(data=d, measurevar="response", groupvars=c("class"))
#write.csv(class_s,"../results/tagalog_class_s.csv")

ggplot(data=class_s,aes(x=reorder(class,-response,mean),y=response))+
  geom_bar(stat="identity",fill="lightgray",color="black")+
  geom_errorbar(aes(ymin=bootsci_low, ymax=bootsci_high, x=reorder(class,-response,mean), width=0.1))+
  geom_hline(yintercept=0.5,linetype="dashed") + 
  xlab("\nadjective class")+
  ylab("faultless disagreement\n")+
  ylim(0,1)+
  #labs("order\npreference")+
  theme_bw()#+
#theme(axis.text.x=element_text(angle=90,vjust=0.35,hjust=1))
#ggsave("../results/class_distance.pdf",height=3)
#ggsave("../results/LSA_class_distance.png",height=2,width=4.3)