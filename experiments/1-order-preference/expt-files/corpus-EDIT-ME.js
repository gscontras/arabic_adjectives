// 40 most frequent noun-predicate combinations in the BNC

//[
//		{"Sentence": "box red", "Predicate": "red", "Noun": "box"},
//		{"Sentence": "box big", "Predicate": "big", "Noun": "box"}
//		]

var adjectives = _.shuffle([ 
		{"Predicate":"الأحمر", "Class":"color", "Translation":"red", "FemPredicate" : "الحمراء"},
		{"Predicate":"الأصفر", "Class":"color", "Translation":"yellow", "FemPredicate" : "الصفراء"},
		{"Predicate":"الأخضر", "Class":"color", "Translation":"green", "FemPredicate" : "الخضراء"},
		{"Predicate":"الأزرق", "Class":"color", "Translation":"blue", "FemPredicate" : "الزرقاء" },
		{"Predicate":"البنفسجي", "Class":"color", "Translation":"purple", "FemPredicate" : "البنفسجية"},
		{"Predicate":"البني", "Class":"color", "Translation":"brown", "FemPredicate" : "البنية"},											
		{"Predicate":"الكبير", "Class":"size", "Translation":"big", "FemPredicate" : "الكبيرة"},
		{"Predicate":"الصغير", "Class":"size", "Translation":"small", "FemPredicate" : "الصغيرة"},					
		{"Predicate":"الضخم", "Class":"size", "Translation":"huge", "FemPredicate" : "الضخمة"},					
		//{"Predicate":"tiny", "Class":"size", "Translation":"tiny"},					
		{"Predicate":"القصير", "Class":"size", "Translation":"short", "FemPredicate" : "القصيرة"},					
		{"Predicate":"الطويل", "Class":"size", "Translation":"long", "FemPredicate" : "الطويلة"},							
		{"Predicate":"الخشبي", "Class":"material", "Translation":"wooden", "FemPredicate" : "الخشبية"},
		{"Predicate":"البلاستيكي", "Class":"material", "Translation":"plastic", "FemPredicate" : "البلاستيكية"},
		{"Predicate":"المعدني", "Class":"material", "Translation":"metal", "FemPredicate" : "المعدنية"},
		{"Predicate":"الناعم", "Class":"texture", "Translation":"smooth", "FemPredicate" : "الناعمة"},
		{"Predicate":"الصلب", "Class":"texture", "Translation":"hard", "FemPredicate" : "الصلبة"},
		{"Predicate":"الأملس", "Class":"texture", "Translation":"soft", "FemPredicate" : "الملساء"},
		{"Predicate":"القديم", "Class":"age", "Translation":"old", "FemPredicate" : "القديمة"},
		{"Predicate":"الجديد", "Class":"age", "Translation":"new", "FemPredicate" : "الجديدة"},
		{"Predicate":"الفاسد", "Class":"age", "Translation":"rotten", "FemPredicate" : "الفاسدة"},
		{"Predicate":"الطازج", "Class":"age", "Translation":"fresh", "FemPredicate" : "الطازجة"},
		{"Predicate":"الجيد", "Class":"quality", "Translation":"good", "FemPredicate" : "الجيدة"},
		{"Predicate":"السيئ", "Class":"quality", "Translation":"bad", "FemPredicate" : "السيئة"},
		{"Predicate":"المستدير", "Class":"shape", "Translation":"round", "FemPredicate" : "المستديرة"},						
		{"Predicate":"المربع", "Class":"shape", "Translation":"square", "FemPredicate" : "المربعة"}
]);

// var she_adjectives = _.shuffle([
// 		{"Predicate":"ÇäÍåÑÇÁ", "Class":"color", "Translation":"red"},
// 		{"Predicate":"ÇäÕáÑÇÁ", "Class":"color", "Translation":"yellow"},
// 		{"Predicate":"ÇäÎÖÑÇÁ", "Class":"color", "Translation":"green"},
// 		{"Predicate":"ÇäÒÑâÇÁ", "Class":"color", "Translation":"blue"},
// 		{"Predicate":"ÇäÈæáÓÌêÉ", "Class":"color", "Translation":"purple"},
// 		{"Predicate":"ÇäÈæêÉ", "Class":"color", "Translation":"brown"},											
// 		{"Predicate":"ÇäãÈêÑÉ", "Class":"size", "Translation":"big"},
// 		{"Predicate":"ÇäÕÚêÑÉ", "Class":"size", "Translation":"small"},					
// 		{"Predicate":"ÇäÖÎåÉ", "Class":"size", "Translation":"huge"},					
// 		//{"Predicate":"tiny", "Class":"size", "Translation":"tiny"},					
// 		{"Predicate":"ÇäâÕêÑÉ", "Class":"size", "Translation":"short"},					
// 		{"Predicate":"Çä×èêäÉ", "Class":"size", "Translation":"long"},							
// 		{"Predicate":"ÇäÎÔÈêÉ", "Class":"material", "Translation":"wooden"},
// 		{"Predicate":"ÇäÈäÇÓÊêãêÉ", "Class":"material", "Translation":"plastic"},
// 		{"Predicate":"ÇäåÙÏæêÉ", "Class":"material", "Translation":"metal"},
// 		{"Predicate":"ÇäåäÓÇÁ ", "Class":"texture", "Translation":"smooth"},
// 		{"Predicate":"ÇäÕäÈÉ", "Class":"texture", "Translation":"hard"},
// 		{"Predicate":"ÇäæÇÙåÉ", "Class":"texture", "Translation":"soft"},
// 		{"Predicate":"ÇäâÏêåÉ", "Class":"age", "Translation":"old"},
// 		{"Predicate":"ÇäÌÏêÏÉ", "Class":"age", "Translation":"new"},
// 		{"Predicate":"ÇäáÇÓÏÉ", "Class":"age", "Translation":"rotten"},
// 		{"Predicate":"Çä×ÇÒÌÉ", "Class":"age", "Translation":"fresh"},
// 		{"Predicate":"ÇäÌêÏÉ", "Class":"quality", "Translation":"good"},
// 		{"Predicate":"ÇäÓêÆÉ", "Class":"quality", "Translation":"bad"},
// 		{"Predicate":"ÇäåÓÊÏêÑÉ", "Class":"shape", "Translation":"round"},						
// 		{"Predicate":"ÇäåÑÈÙÉ", "Class":"shape", "Translation":"square"}
// ]);

var nouns = [
		{"Noun":"الجبن", "NounClass":"food", "Translation":"cheese", "Gender" : "masculine"},
		{"Noun":"الكرسي", "NounClass":"furniture", "Translation":"chair", "Gender" : "masculine"},								
		{"Noun":"التلفاز", "NounClass":"furniture", "Translation":"TV", "Gender" : "masculine"},								
		{"Noun":"المكتب", "NounClass":"furniture", "Translation": "desk", "Gender" : "masculine"},								
		{"Noun":"التفاحة", "NounClass":"food", "Translation":"apple", "Gender" : "feminine"},
		{"Noun":"الموزة", "NounClass":"food", "Translation":"banana" , "Gender" : "feminine"},
		{"Noun":"الجزرة", "NounClass":"food", "Translation":"carrot", "Gender" : "feminine"},
		{"Noun":"الطماطم", "NounClass":"food", "Translation":"tomato", "Gender" : "feminine"},								
		{"Noun":"الكنبة", "NounClass":"furniture", "Translation":"couch", "Gender" : "feminine"},								
		{"Noun":"المروحة", "NounClass":"furniture", "Translation":"fan", "Gender" : "feminine"}								
];

// var nouns = [
// 		{"Noun":"ÇäÌÈæ", "NounClass":"food", "Translation":"cheese"},
// 		{"Noun":"ÇäãÑÓê", "NounClass":"furniture", "Translation":"chair"},								
// 		{"Noun":"ÇäÊäáÇÒ", "NounClass":"furniture", "Translation":"TV"},								
// 		{"Noun":"ÇäåãÊÈ", "NounClass":"furniture", "Translation": "desk"}								
// ];

// var she_nouns = [
// 		{"Noun":"ÇäÊáÇÍÉ", "NounClass":"food", "Translation":"apple"},
// 		{"Noun":"ÇäåèÒÉ", "NounClass":"food", "Translation":"banana" },
// 		{"Noun":"ÇäÌÒÑÉ", "NounClass":"food", "Translation":"carrot"},
// 		{"Noun":"Çä×åÇ×å", "NounClass":"food", "Translation":"tomato"},								
// 		{"Noun":"ÇäãæÈÉ", "NounClass":"furniture", "Translation":"couch"},								
// 		{"Noun":"ÇäåÑèÍÉ", "NounClass":"furniture", "Translation":"fan"}								
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
					"Predicate1":pred1,
					"Class1":pred1.Class,	
					"Predicate2":pred2,
					"Class2":pred2.Class,			
					"Noun":noun.Noun,
					"NounClass":noun.NounClass,
					"NounGender":noun.Gender
				}			
			);
		}
	}
		
	return stims;
	
}