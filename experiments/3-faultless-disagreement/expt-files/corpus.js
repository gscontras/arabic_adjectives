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

var stimuli =  makeStims();

function makeStims() {
	stims = [];

	for (var i=0; i<adjectives.length; i++) {
		noun = _.sample(nouns);
		stims.push(
			{
				"Predicate":adjectives[i].Predicate,
				"Class":adjectives[i].Class,				
				"Noun":noun.Noun,
				"NounClass":noun.NounClass
			}

		);
	}
		
	return stims;
	
}