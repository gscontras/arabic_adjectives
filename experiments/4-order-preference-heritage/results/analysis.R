library(ggplot2)
library(lme4)
library(hydroGOF)
library(dplyr)

setwd("~/git/arabic_adjectives/experiments/4-order-preference-heritage/results/")
source("helpers.R")


df = read.csv("results.csv",header=T)
    
d = subset(df, select=c("subject_information_age",
                        "subject_information_asses",
                        "subject_information_comments",
                        "subject_information_describe",
                        "subject_information_dialect", 
                        "subject_information_education", 
                        "subject_information_enjoyment", 
                        "subject_information_gender",
                        "subject_information_language",
                        "subject_information_lived",
                        "subject_information_proficiency",
                        "subject_information_test1",
                        "subject_information_test2",
                        "subject_information_test3",
                        "subject_information_years",
                        "time_in_minutes",
                        "trials_class1",
                        "trials_class2",
                        "trials_gender",
                        "trials_noun",
                        "trials_nounclass",
                        "trials_predicate1",
                        "trials_predicate2",
                        "trials_response",
                        "trials_slide_number",
                        "workerID",
                        "time_in_minutes"))

#d <- df

# got all the test questions correct
d = d[d$subject_information_test1=="correct"&d$subject_information_test2=="correct"&d$subject_information_test3=="correct",]
# haven't lived in arabic-speaking country after 8
d = d[d$subject_information_lived!="both"&d$subject_information_lived!="after",]
## describe as arabic-arabic
#d = d[d$describe=="arabic-arabic",]
# levantine arabic
d = d[d$subject_information_dialect=="levantine",]

#d = d[d$subject_information_language != "English"&d$subject_information_language!="English "&d$subject_information_language!=""&d$subject_information_language!="انجليزي",]
#d = d[d$asses=="Yes",]

length(unique(d$workerID)) #n=11 (23)

t <- d

#####
## duplicate observations by first predicate
#####

library(tidyr)

o <- t
o$rightpredicate1 = o$trials_predicate2
o$rightpredicate2 = o$trials_predicate1
o$rightresponse = 1-o$trials_response
agr = o %>% 
  select(trials_predicate1,rightpredicate1,trials_response,rightresponse,workerID,trials_noun,trials_nounclass,trials_class1,trials_class2) %>%
  gather(predicateposition,trials_predicate,trials_predicate1:rightpredicate1,-workerID,-trials_noun,-trials_nounclass,-trials_class1,-trials_class2)
agr$correctresponse = agr$trials_response
agr[agr$predicateposition == "rightpredicate1",]$correctresponse = agr[agr$predicateposition == "rightpredicate1",]$rightresponse
agr$correctclass = agr$trials_class1
agr[agr$predicateposition == "rightpredicate1",]$correctclass = agr[agr$predicateposition == "rightpredicate1",]$trials_class2
head(agr[agr$predicateposition == "rightpredicate1",])
agr$trails_response = NULL
agr$rightresponse = NULL
agr$trials_class1 = NULL
agr$trials_class2 = NULL
nrow(agr) #XXX
#write.csv(agr,"~/git/arabic_adjectives/experiments/2-order-preference-expanded/results/arabic-naturalness-duplicated.csv")
agr$correctresponse = 1 - agr$correctresponse

agr = agr[!is.na(agr$correctresponse),]

adj_agr = aggregate(correctresponse~trials_predicate*correctclass,FUN=mean,data=agr)
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