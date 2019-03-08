// 40 most frequent noun-predicate combinations in the BNC

//[
//		{"Sentence": "box red", "Predicate": "red", "Noun": "box"},
//		{"Sentence": "box big", "Predicate": "big", "Noun": "box"}
//		]

var adjectives = _.shuffle([
		{"Predicate":"أحمر", "Class":"color", "Translation":"red", "FemPredicate" : "حمراء"}, //adj after negation: "Predicate":"أحمرًا", "FemPredicate" : حمراءً
		{"Predicate":"أصفر", "Class":"color", "Translation":"yellow", "FemPredicate" : "صفراء"}, //adj after negation: "Predicate":"أصفرًا", "FemPredicate" : صفراءً
		{"Predicate":"أخضر", "Class":"color", "Translation":"green", "FemPredicate" : "خضراء"}, //adj after negation: "Predicate":"أخضرًا", "FemPredicate" : خضراءً
		{"Predicate":"أزرق", "Class":"color", "Translation":"blue", "FemPredicate" : "زرقاء" }, //adj after negation: "Predicate":"أزرقًا", "FemPredicate" : زرقاءً
		{"Predicate":"بنفسجي", "Class":"color", "Translation":"purple", "FemPredicate" : "بنفسجية"}, //adj after negation: "Predicate":"بنفسجيًا", "FemPredicate" : بنفسجيةً
		{"Predicate":"بني", "Class":"color", "Translation":"brown", "FemPredicate" : "بنية"}, //adj after negation: "Predicate":"بنيًا", "FemPredicate" : بنيةً
		{"Predicate":"كبير", "Class":"size", "Translation":"big", "FemPredicate" : "كبيرة"}, //adj after negation: "Predicate":"كبيرًا", "FemPredicate" : كبيرةً
		{"Predicate":"صغير", "Class":"size", "Translation":"small", "FemPredicate" : "صغيرة"}, //adj after negation: "Predicate":"صغيرًا", "FemPredicate" : صغيرةً
		{"Predicate":"ضخم", "Class":"size", "Translation":"huge", "FemPredicate" : "ضخمة"},	//adj after negation: "Predicate":"ضخمًا", "FemPredicate" : ضخمةً				
		//{"Predicate":"tiny", "Class":"size", "Translation":"tiny"},					
		{"Predicate":"قصير", "Class":"size", "Translation":"short", "FemPredicate" : "قصيرة"}, //adj after negation: "Predicate":"قصيرًا", "FemPredicate" : قصيرةً					
		{"Predicate":"طويل", "Class":"size", "Translation":"long", "FemPredicate" : "طويلة"}, //adj after negation: "Predicate":"طويلًا", "FemPredicate" : طويلةً							
		{"Predicate":"خشبي", "Class":"material", "Translation":"wooden", "FemPredicate" : "خشبية"}, //adj after negation: "Predicate":"خشبيًا", "FemPredicate" : خشبيةً
		{"Predicate":"بلاستيكي", "Class":"material", "Translation":"plastic", "FemPredicate" : "بلاستيكية"}, //adj after negation: "Predicate":"بلاستيكيًا", "FemPredicate" : بلاستيكيةً
		{"Predicate":"معدني", "Class":"material", "Translation":"metal", "FemPredicate" : "معدنية"}, //adj after negation: "Predicate":"معدنيًا", "FemPredicate" : معدنيةً
		{"Predicate":"ناعم", "Class":"texture", "Translation":"smooth", "FemPredicate" : "ناعمة"}, //adj after negation: "Predicate":"ناعمًا", "FemPredicate" : ناعمةً
		{"Predicate":"صلب", "Class":"texture", "Translation":"hard", "FemPredicate" : "صلبة"}, //adj after negation: "Predicate":"صلبًا", "FemPredicate" : صلبةً
		{"Predicate":"أملس", "Class":"texture", "Translation":"soft", "FemPredicate" : "ملساء"}, //adj after negation: "Predicate":"أملسًا", "FemPredicate" : ملساءً
		{"Predicate":"قديم", "Class":"age", "Translation":"old", "FemPredicate" : "قديمة"}, //adj after negation: "Predicate":"قديمًا", "FemPredicate" : قديمةً
		{"Predicate":"جديد", "Class":"age", "Translation":"new", "FemPredicate" : "جديدة"}, //adj after negation: "Predicate":"جديدًا", "FemPredicate" : جديدةً
		{"Predicate":"فاسد", "Class":"age", "Translation":"rotten", "FemPredicate" : "فاسدة"}, //adj after negation: "Predicate":"فاسدًا", "FemPredicate" : فاسدةً
		{"Predicate":"طازج", "Class":"age", "Translation":"fresh", "FemPredicate" : "طازجة"}, //adj after negation: "Predicate":"طازجًا", "FemPredicate" : طازجةً
		{"Predicate":"جيد", "Class":"quality", "Translation":"good", "FemPredicate" : "جيدة"}, //adj after negation: "Predicate":"جيدًا", "FemPredicate" : جيدةً
		{"Predicate":"سيئ", "Class":"quality", "Translation":"bad", "FemPredicate" : "سيئة"}, //adj after negation: "Predicate":"سيئًا", "FemPredicate" : سيئةً
		{"Predicate":"مستدير", "Class":"shape", "Translation":"round", "FemPredicate" : "مستديرة"},	//adj after negation: "Predicate":"مستديرًا", "FemPredicate" : مستديرةً					
		{"Predicate":"مربع", "Class":"shape", "Translation":"square", "FemPredicate" : "مربعة"} //adj after negation: "Predicate":"مربعًا", "FemPredicate" : مربعةً
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