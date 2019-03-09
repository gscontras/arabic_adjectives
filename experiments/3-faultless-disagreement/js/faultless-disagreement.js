



function make_slides(f) {
  var   slides = {};

  slides.i0 = slide({
     name : "i0",
     start: function() {
      exp.startT = Date.now();
     }
  });

  slides.instructions1 = slide({
    name : "instructions1",
    start: function() {
      $(".instruction_condition").html("Between subject intruction manipulation: "+ exp.instruction);
    }, 
    button : function() {
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });

  slides.multi_slider = slide({
    name : "multi_slider",
    present : _.shuffle(stimuli),
    present_handle : function(stim) {
      $(".err").hide();
      this.init_sliders();      
      exp.sliderPost = null;
      // $('input[name="sense"]:checked').attr('checked',false);
      this.stim = stim; //FRED: allows you to access stim in helpers
      //var noun_data = _.sample(corpus.Noun)
      //this.noun_data = noun_data;
      //var noun = noun_data.noun;
      //var animacy = noun_data.animacy;


      var names_list = _.shuffle(nameGenerator());

      var man1 = names_list[0];
      var man2 = names_list[1];

      $(".man1").html(man1.theName);

      $(".man2").html(man2.theName);

      $(".noun").html(stim.Noun);

      if (man1.gender=="feminine") { 
        wrong = "أنتِ مخطئة"
      } else if  (man1.gender=="masculine") { 
        wrong = "أنتَ مخطئ"
      }
      if (man1.gender=="feminine") { 
        says = "تقول"
      } else if  (man1.gender=="masculine") { 
        says = "يقول"
      }
      if (man2.gender=="feminine") { 
        responds = "تجيب"
      } else if  (man2.gender=="masculine") { 
        responds = "يجيب"
      }

      if (man1.gender=="feminine" & man2.gender=="feminine") { 
        sees = "تريان"
      } else { 
        sees = "يريان"
      }

      $(".wrong").html(wrong)
      $(".says").html(says)
      $(".responds").html(responds)
      $(".sees").html(sees)

      if (stim.NounGender=="feminine") {
        this.verbs = _.shuffle(["","ليست"]) //female "is not": "ليست", male: ليس
        $(".same").html("ذاتها")

        $(".utterance1").html("\"تلك "+ stim.Noun + " " + this.verbs[0] + " " + stim.FemPredicate + ".\""); //female that: "تلك", male: "ذلك"

        $(".utterance2").html("تلك "+ stim.Noun + " " + this.verbs[1] + " "  + stim.FemPredicate + ".\""); //You're wrong male: "أنتَ مخطئ". You're wrong female version: "أنتِ مخطئة".
      } else if (stim.NounGender=="masculine") {
        this.verbs = _.shuffle(["","ليس"]) //female "is not": "ليست", male: ليس
        $(".same").html("ذاته")

        if (this.verbs[0]=="ليس") {
          $(".utterance1").html("\"ذلك "+ stim.Noun + " " + this.verbs[0] + " " + stim.Predicate + "ًا.\""); //female that: "تلك", male: "ذلك"

          $(".utterance2").html("ذلك "+ stim.Noun + " " + this.verbs[1] + " "  + stim.Predicate + ".\""); //You're wrong male: "أنتَ مخطئ". You're wrong female version: "أنتِ مخطئة".
        } else if (this.verbs[1]=="ليس") {
          $(".utterance1").html("\"ذلك "+ stim.Noun + " " + this.verbs[0] + " " + stim.Predicate + ".\""); //female that: "تلك", male: "ذلك"

          $(".utterance2").html("ذلك "+ stim.Noun + " " + this.verbs[1] + " "  + stim.Predicate + "ًا.\""); //You're wrong male: "أنتَ مخطئ". You're wrong female version: "أنتِ مخطئة".
        }

        
      }

//      this.sentence_types = _.shuffle(["yes","no"]);
//      this.sentence_types = ["no","yes"];
//      var sentences = {
//        "yes": "Yes, it's a matter of opinion.",
//        "no": "No, somebody must be wrong.",
//      };

//      this.n_sliders = this.sentence_types.length;
		this.n_sliders = 1;
//      $(".slider_row").remove();
//      for (var i=0; i<this.n_sliders; i++) {
//        var sentence_type_left = this.sentence_types[0];
//        var sentence_type_left = this.sentence_types[1];        
//        var sentence_left = sentences[sentence_type_left];
//        var sentence_right = sentences[sentence_type_right];        
//        $("#multi_slider_table").append('<tr class="slider_row"><td class="slider_target" id="sentence0">' + "<font size='4'>" + sentence_left + "</font>" + '</td><td colspan="2"><div id="slider0" class="slider">-------[ ]--------</div></td><td class="slider_target" id="sentence1">' + "<font size='4'>" + sentence_right + "</font>" + '</td></tr>');
//        utils.match_row_height("#multi_slider_table", ".slider_target");
//      }

    },

    button : function() {
    	console.log(exp.sliderPost);
      if (exp.sliderPost != null) {
        this.log_responses();
        _stream.apply(this); //use exp.go() if and only if there is no "present" data.
      } else {
        $(".err").show();
      }
    },

    init_sliders : function() {
      utils.make_slider("#slider0", function(event, ui) {
        exp.sliderPost = ui.value;
      });
    },
//    make_slider_callback : function(i) {
//      return function(event, ui) {
//        exp.sliderPost[i] = ui.value;
//      };
//    },
    log_responses : function() {
        exp.data_trials.push({
          "response" : exp.sliderPost,
          "noun" : this.stim.NounTranslation,          
          "predicate" : this.stim.Translation,
          "nounclass" : this.stim.NounClass,
          "class" : this.stim.Class,                    
          "firstutterance" : this.verbs[0],
          // "sense" : $('input[name="sense"]:checked').val(),        
          "slide_number" : exp.phase
        });
    },
  });

  slides.subj_info =  slide({
    name : "subj_info",
    submit : function(e){
      //if (e.preventDefault) e.preventDefault(); // I don't know what this means.
      exp.subj_data = {
        language : $("#language").val(),
        enjoyment : $("#enjoyment").val(),
        asses : $('input[name="assess"]:checked').val(),
        age : $("#age").val(),
        gender : $("#gender").val(),
        education : $("#education").val(),
        comments : $("#comments").val(),
        describe : $("#describe").val(),
        lived : $("#lived").val(),
        years : $("#years").val(),
        dialect : $("#dialect").val(),
        otherDialect : $("#otherDialect").val(),
        homeLanguage : $("#homeLanguage").val(),
        dominantLanguage : $("#dominantLanguage").val(),
        proficiency : $("#proficiency").val(),
        test1 : $("#test1").val(),
        test2 : $("#test2").val(),
        test3 : $("#test3").val()
      };
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });

  slides.thanks = slide({
    name : "thanks",
    start : function() {
      exp.data= {
          "trials" : exp.data_trials,
          "catch_trials" : exp.catch_trials,
          "system" : exp.system,
          //"condition" : exp.condition,
          "subject_information" : exp.subj_data,
          "time_in_minutes" : (Date.now() - exp.startT)/60000
      };
      setTimeout(function() {turk.submit(exp.data);}, 1000);
    }
  });

  return slides;
}

/// init ///
function init() {
  repeatWorker = false;
  (function(){
    var ut_id = "gscontras-arabic-ordering-2";
    if (UTWorkerLimitReached(ut_id)) {
      $('.slide').empty();
      repeatWorker = true;
      alert("You have already completed the maximum number of HITs allowed by this requester. Please click 'Return HIT' to avoid any impact on your approval rating.");
    }
  })();

  exp.trials = [];
  exp.catch_trials = [];
  exp.instruction = _.sample(["instruction1","instruction2"]);
  exp.system = {
      Browser : BrowserDetect.browser,
      OS : BrowserDetect.OS,
      screenH: screen.height,
      screenUH: exp.height,
      screenW: screen.width,
      screenUW: exp.width
    };
  //blocks of the experiment:
  exp.structure=["i0", "instructions1",'multi_slider', 'subj_info', 'thanks'];
  
  exp.data_trials = [];
  //make corresponding slides:
  exp.slides = make_slides(exp);

  exp.nQs = utils.get_exp_length(); //this does not work if there are stacks of stims (but does work for an experiment with this structure)
                    //relies on structure and slides being defined

  $('.slide').hide(); //hide everything

  //make sure turkers have accepted HIT (or you're not in mturk)
  $("#start_button").click(function() {
    if (turk.previewMode) {
      $("#mustaccept").show();
    } else {
      $("#start_button").click(function() {$("#mustaccept").show();});
      exp.go();
    }
  });

  exp.go(); //show first slide
}