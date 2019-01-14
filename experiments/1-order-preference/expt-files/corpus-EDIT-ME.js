// 40 most frequent noun-predicate combinations in the BNC

//[
//		{"Sentence": "box red", "Predicate": "red", "Noun": "box"},
//		{"Sentence": "box big", "Predicate": "big", "Noun": "box"}
//		]

var adjectives = _.shuffle([ 
		{"Predicate":"«‰√ÕÂ—", "Class":"color", "Translation":"red"},
		{"Predicate":"«‰√’·—", "Class":"color", "Translation":"yellow"},
		{"Predicate":"«‰√Œ÷—", "Class":"color", "Translation":"green"},
		{"Predicate":"«‰√“—‚", "Class":"color", "Translation":"blue"},
		{"Predicate":"«‰»Ê·”ÃÍ", "Class":"color", "Translation":"purple"},
		{"Predicate":"«‰»ÊÍ", "Class":"color", "Translation":"brown"},											
		{"Predicate":"«‰„»Í—", "Class":"size", "Translation":"big"},
		{"Predicate":"«‰’⁄Í—", "Class":"size", "Translation":"small"},					
		{"Predicate":"«‰÷ŒÂ", "Class":"size", "Translation":"huge"},					
		//{"Predicate":"tiny", "Class":"size", "Translation":"tiny"},					
		{"Predicate":"«‰‚’Í—", "Class":"size", "Translation":"short"},					
		{"Predicate":"«‰◊ËÍ‰", "Class":"size", "Translation":"long"},							
		{"Predicate":"«‰Œ‘»Í", "Class":"material", "Translation":"wooden"},
		{"Predicate":"«‰»‰«” Í„Í", "Class":"material", "Translation":"plastic"},
		{"Predicate":"«‰ÂŸœÊÍ", "Class":"material", "Translation":"metal"},
		{"Predicate":"«‰√Â‰”", "Class":"texture", "Translation":"smooth"},
		{"Predicate":"«‰’‰»", "Class":"texture", "Translation":"hard"},
		{"Predicate":"«‰Ê«ŸÂ", "Class":"texture", "Translation":"soft"},
		{"Predicate":"«‰‚œÍÂ", "Class":"age", "Translation":"old"},
		{"Predicate":"«‰ÃœÍœ", "Class":"age", "Translation":"new"},
		{"Predicate":"«‰·«”œ", "Class":"age", "Translation":"rotten"},
		{"Predicate":"«‰◊«“Ã", "Class":"age", "Translation":"fresh"},
		{"Predicate":"«‰ÃÍœ", "Class":"quality", "Translation":"good"},
		{"Predicate":"«‰”Í∆", "Class":"quality", "Translation":"bad"},
		{"Predicate":"«‰Â” œÍ—", "Class":"shape", "Translation":"round"},						
		{"Predicate":"«‰Â—»Ÿ", "Class":"shape", "Translation":"square"}
]);

// var she_adjectives = _.shuffle([
// 		{"Predicate":"«‰ÕÂ—«¡", "Class":"color", "Translation":"red"},
// 		{"Predicate":"«‰’·—«¡", "Class":"color", "Translation":"yellow"},
// 		{"Predicate":"«‰Œ÷—«¡", "Class":"color", "Translation":"green"},
// 		{"Predicate":"«‰“—‚«¡", "Class":"color", "Translation":"blue"},
// 		{"Predicate":"«‰»Ê·”ÃÍ…", "Class":"color", "Translation":"purple"},
// 		{"Predicate":"«‰»ÊÍ…", "Class":"color", "Translation":"brown"},											
// 		{"Predicate":"«‰„»Í—…", "Class":"size", "Translation":"big"},
// 		{"Predicate":"«‰’⁄Í—…", "Class":"size", "Translation":"small"},					
// 		{"Predicate":"«‰÷ŒÂ…", "Class":"size", "Translation":"huge"},					
// 		//{"Predicate":"tiny", "Class":"size", "Translation":"tiny"},					
// 		{"Predicate":"«‰‚’Í—…", "Class":"size", "Translation":"short"},					
// 		{"Predicate":"«‰◊ËÍ‰…", "Class":"size", "Translation":"long"},							
// 		{"Predicate":"«‰Œ‘»Í…", "Class":"material", "Translation":"wooden"},
// 		{"Predicate":"«‰»‰«” Í„Í…", "Class":"material", "Translation":"plastic"},
// 		{"Predicate":"«‰ÂŸœÊÍ…", "Class":"material", "Translation":"metal"},
// 		{"Predicate":"«‰Â‰”«¡ ", "Class":"texture", "Translation":"smooth"},
// 		{"Predicate":"«‰’‰»…", "Class":"texture", "Translation":"hard"},
// 		{"Predicate":"«‰Ê«ŸÂ…", "Class":"texture", "Translation":"soft"},
// 		{"Predicate":"«‰‚œÍÂ…", "Class":"age", "Translation":"old"},
// 		{"Predicate":"«‰ÃœÍœ…", "Class":"age", "Translation":"new"},
// 		{"Predicate":"«‰·«”œ…", "Class":"age", "Translation":"rotten"},
// 		{"Predicate":"«‰◊«“Ã…", "Class":"age", "Translation":"fresh"},
// 		{"Predicate":"«‰ÃÍœ…", "Class":"quality", "Translation":"good"},
// 		{"Predicate":"«‰”Í∆…", "Class":"quality", "Translation":"bad"},
// 		{"Predicate":"«‰Â” œÍ—…", "Class":"shape", "Translation":"round"},						
// 		{"Predicate":"«‰Â—»Ÿ…", "Class":"shape", "Translation":"square"}
// ]);

var nouns = [
		{"Noun":"«‰Ã»Ê", "NounClass":"food", "Translation":"cheese"},
		{"Noun":"«‰„—”Í", "NounClass":"furniture", "Translation":"chair"},								
		{"Noun":"«‰ ‰·«“", "NounClass":"furniture", "Translation":"TV"},								
		{"Noun":"«‰Â„ »", "NounClass":"furniture", "Translation": "desk"},								
		{"Noun":"«‰ ·«Õ…", "NounClass":"food", "Translation":"apple"},
		{"Noun":"«‰ÂË“…", "NounClass":"food", "Translation":"banana" },
		{"Noun":"«‰Ã“—…", "NounClass":"food", "Translation":"carrot"},
		{"Noun":"«‰◊Â«◊Â", "NounClass":"food", "Translation":"tomato"},								
		{"Noun":"«‰„Ê»…", "NounClass":"furniture", "Translation":"couch"},								
		{"Noun":"«‰Â—ËÕ…", "NounClass":"furniture", "Translation":"fan"}								
];

// var nouns = [
// 		{"Noun":"«‰Ã»Ê", "NounClass":"food", "Translation":"cheese"},
// 		{"Noun":"«‰„—”Í", "NounClass":"furniture", "Translation":"chair"},								
// 		{"Noun":"«‰ ‰·«“", "NounClass":"furniture", "Translation":"TV"},								
// 		{"Noun":"«‰Â„ »", "NounClass":"furniture", "Translation": "desk"}								
// ];

// var she_nouns = [
// 		{"Noun":"«‰ ·«Õ…", "NounClass":"food", "Translation":"apple"},
// 		{"Noun":"«‰ÂË“…", "NounClass":"food", "Translation":"banana" },
// 		{"Noun":"«‰Ã“—…", "NounClass":"food", "Translation":"carrot"},
// 		{"Noun":"«‰◊Â«◊Â", "NounClass":"food", "Translation":"tomato"},								
// 		{"Noun":"«‰„Ê»…", "NounClass":"furniture", "Translation":"couch"},								
// 		{"Noun":"«‰Â—ËÕ…", "NounClass":"furniture", "Translation":"fan"}								
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
					"Predicate1":pred1.Predicate,
					"Class1":pred1.Class,	
					"Predicate2":pred2.Predicate,
					"Class2":pred2.Class,			
					"Noun":noun.Noun,
					"NounClass":noun.NounClass
				}			
			);
		}
	}
		
	return stims;
	
}