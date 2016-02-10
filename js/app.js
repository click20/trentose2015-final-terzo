var array_scores =[];
       var scoreIT = 0;
       var scoreSP = 0;
       var scoreEN = 0; 
var indexMax = 0;

var ParlaModel = {
  
   /* Langs contain the list of language with their corresponding
    * dictionaries 
    */
   langs : languages, 
  
   /* Returns the score of the given phrase in the given language
    * The score is computed simply as the number of words - in the
    * language dictionary - that are found in the phrase
    * @return score, if language is valid
    *         null, if language is not valid
    */
   getLanguageScore : function (phrase, language){
     // write your code here, but don't add any additional 
     // parameters to the the function
       
       if( language == ita ){
           for( var i in language ){
            if( phrase.indexOf( language[i] ) != -1 ){
               scoreIT++;
           }else{
               continue;
           }
        }
       }
       
       if( language == eng ){
           for( var y in language ){
            if( phrase.indexOf( language[y] ) != -1 ){
               scoreEN++;
           }else{
               continue;
           }
        }
       }
       
       if( language == spa ){
           for( var z in language ){
            if( phrase.indexOf( language[z] ) != -1 ){
               scoreSP++;
           }else{
               continue;
           }
        }
       }

   },
  
   /* Returns the name of the language in which the phrase
    * (most likely) is written. The detection essentially 
    * returns the language with higher *score*. 
    */
   detectLanguage : function (phrase) {
     // write your code here, but don't add any additional 
     // parameters to the the function 
      
       return languages[indexMax].name;
   },
    
    arrayscoreMaxPos: function(){
        array_scores.push(scoreIT,scoreEN,scoreSP);
        var maxx= Math.max.apply(Math,array_scores); 
        for(var l in array_scores){
            if( array_scores[l] == maxx ){
               indexMax = array_scores[l];
            }else{
                continue;
            }
        }
    }
         
};

var View = {
	layout: function(lang_pos){
		$(".lang-name").text(lang_pos);
	}
};

var Controller = {
	init: function(){
		$("button").click(function(){
            ParlaModel.getLanguageScore($("input").val(), ita);
            ParlaModel.getLanguageScore($("input").val(), eng);
            ParlaModel.getLanguageScore($("input").val(), spa);
            ParlaModel.arrayscoreMaxPos();
            View.layout( ParlaModel.detectLanguage($("input").val()) );
        });
	}
};

$(document).ready(function(){
    	Controller.init();
});

