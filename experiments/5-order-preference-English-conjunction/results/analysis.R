library(ggplot2)
library(lme4)
library(hydroGOF)
library(dplyr)

setwd("~/git/arabic_adjectives/experiments/5-order-preference-english-conjunction/Submiterator-master")
source("../results/helpers.R")

d = read.csv("5-preference-english-conjunction-trials.csv",header=T)
s = read.csv("5-preference-english-conjunction-subject_information.csv",header=T)

d$language = s$language[match(d$workerid,s$workerid)]
d$age = s$age[match(d$workerid,s$workerid)]
d$gender = s$gender[match(d$workerid,s$workerid)]
d$comments = s$comments[match(d$workerid,s$workerid)]
d$assess = s$assess[match(d$workerid,s$workerid)]

unique(d$language)

d = d[d$language != "United States",]

length(unique(d$workerid)) #n=49 (50)

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
nrow(agr) #2548
#write.csv(agr,"~/git/arabic_adjectives/experiments/2-order-preference-expanded/results/arabic-naturalness-duplicated.csv")

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
  ylab("preferred distance from noun\n")+
  ylim(0,1)+
  #labs("order\npreference")+
  theme_bw()#+
#theme(axis.text.x=element_text(angle=90,vjust=0.35,hjust=1))
#ggsave("../results/class_distance.pdf",height=3)
#ggsave("../results/LSA_class_distance.png",height=2,width=4.3)
#ggsave("../results/english-conjunction-ordering.pdf",height=2.5,width=7)

#### comparison with subjectivity

s = read.csv("~/git/adjective_ordering/experiments/6-subjectivity/results/subjectivity-aggregate.csv",header=T)

o_agr <- adj_agr

o_agr$subjectivity = s$response[match(o_agr$predicate,s$predicate)]

gof(o_agr$correctresponse,o_agr$subjectivity)
# r = 0.82, r2 = 0.68
results <- boot(data=o_agr, statistic=rsq, R=10000, formula=correctresponse~subjectivity)
boot.ci(results, type="bca") 
# 95%   ( 0.4549,  0.8038 )

ggplot(o_agr, aes(x=subjectivity,y=correctresponse)) +
  geom_point() +
  #geom_smooth()+
  stat_smooth(method="lm",color="black")+
  #geom_text(aes(label=predicate),size=2.5,vjust=1.5)+
  ylab("preferred distance from noun\n")+
  xlab("\nsubjectivity score")+
  ylim(0,1)+
  theme_bw()
#ggsave("../results/naturalness-subjectivity-english-conjunction.pdf",height=3,width=3.5)
#ggsave("../results/naturalness-subjectivity-english-conjunction.pdf",height=2.6,width=3.03)
#ggsave("../results/english-conjunction-scatter.pdf",height=2.75,width=3.15)


