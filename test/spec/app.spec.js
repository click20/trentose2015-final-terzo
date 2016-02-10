/* Remember that blanket will only work with brackets live preview */
/* Try to maximise the coverage of the ParlaModel object */

describe("Parla", function() {

  it("should give the correct score of language", function() {  
        expect( ParlaModel.getLanguageScore("non lo so", ita) ).toBe(1);
  });   
    
    it("should give the correct score of language", function() {  
        expect( ParlaModel.getLanguageScore("non lo so", eng) ).toBe(0);
  }); 
    
    it("should give the correct score of language", function() {  
        expect( ParlaModel.getLanguageScore("non lo so", spa) ).toBe(0);
  });
    
    it("should give the correct score of language", function() {  
        expect( ParlaModel.getLanguageScore("the best of you", eng) ).toBe(2);
  });
    
    it("should give the correct score of language", function() {  
        expect( ParlaModel.getLanguageScore("fdf fdgdggg", eng) ).toBe(0);
  });
    
    it("should give the correct score of language", function() {  
        expect( ParlaModel.getLanguageScore("nullfdfq", ita) ).toBe(0);
  });
    
    it("should give the correct score of language", function() {  
        expect( ParlaModel.getLanguageScore("nullfdfq", spa) ).toBe(0);
  });
    
    it("should give the correct language", function() {  
        expect( ParlaModel.detectLanguage("non lo so") ).toEqual(languages[0].name);
  });
    
    it("should give the correct language", function() {  
        expect( ParlaModel.detectLanguage("que el") ).toEqual(languages[1].name);
  });
    
    it("should give the correct language", function() {  
        expect( ParlaModel.detectLanguage("que el") ).toEqual(languages[1].name);
  });
    
    it("should give the correct language", function() {  
        expect( ParlaModel.detectLanguage("the you") ).toEqual(languages[2].name);
  });
 
});
