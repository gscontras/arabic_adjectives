// 40 most frequent noun-predicate combinations in the BNC

//[
//		{"Sentence": "box red", "Predicate": "red", "Noun": "box"},
//		{"Sentence": "box big", "Predicate": "big", "Noun": "box"}
//		]

var adjectives = _.shuffle([
		{"Predicate":"أحمر", "Class":"color", "Translation":"red", "FemPredicate" : "حمراء"},
		{"Predicate":"أصفر", "Class":"color", "Translation":"yellow", "FemPredicate" : "صفراء"},
		{"Predicate":"أخضر", "Class":"color", "Translation":"green", "FemPredicate" : "خضراء"},
		{"Predicate":"أزرق", "Class":"color", "Translation":"blue", "FemPredicate" : "زرقاء" },
		{"Predicate":"بنفسجي", "Class":"color", "Translation":"purple", "FemPredicate" : "بنفسجية"},
		{"Predicate":"بني", "Class":"color", "Translation":"brown", "FemPredicate" : "بنية"},											
		{"Predicate":"كبير", "Class":"size", "Translation":"big", "FemPredicate" : "كبيرة"},
		{"Predicate":"صغير", "Class":"size", "Translation":"small", "FemPredicate" : "صغيرة"},					
		{"Predicate":"ضخم", "Class":"size", "Translation":"huge", "FemPredicate" : "ضخمة"},					
		//{"Predicate":"tiny", "Class":"size", "Translation":"tiny"},					
		{"Predicate":"قصير", "Class":"size", "Translation":"short", "FemPredicate" : "قصيرة"},					
		{"Predicate":"طويل", "Class":"size", "Translation":"long", "FemPredicate" : "طويلة"},							
		{"Predicate":"خشبي", "Class":"material", "Translation":"wooden", "FemPredicate" : "خشبية"},
		{"Predicate":"بلاستيكي", "Class":"material", "Translation":"plastic", "FemPredicate" : "بلاستيكية"},
		{"Predicate":"معدني", "Class":"material", "Translation":"metal", "FemPredicate" : "معدنية"},
		{"Predicate":"ناعم", "Class":"texture", "Translation":"smooth", "FemPredicate" : "ناعمة"},
		{"Predicate":"صلب", "Class":"texture", "Translation":"hard", "FemPredicate" : "صلبة"},
		{"Predicate":"أملس", "Class":"texture", "Translation":"soft", "FemPredicate" : "ملساء"},
		{"Predicate":"قديم", "Class":"age", "Translation":"old", "FemPredicate" : "قديمة"},
		{"Predicate":"جديد", "Class":"age", "Translation":"new", "FemPredicate" : "جديدة"},
		{"Predicate":"فاسد", "Class":"age", "Translation":"rotten", "FemPredicate" : "فاسدة"},
		{"Predicate":"طازج", "Class":"age", "Translation":"fresh", "FemPredicate" : "طازجة"},
		{"Predicate":"جيد", "Class":"quality", "Translation":"good", "FemPredicate" : "جيدة"},
		{"Predicate":"سيئ", "Class":"quality", "Translation":"bad", "FemPredicate" : "سيئة"},
		{"Predicate":"مستدير", "Class":"shape", "Translation":"round", "FemPredicate" : "مستديرة"},						
		{"Predicate":"مربع", "Class":"shape", "Translation":"square", "FemPredicate" : "مربعة"}
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