const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator();



suite('Unit Tests', () => {
  suite("American to British", () => {
    test("Translate 'Mangoes are my favorite fruit.'", done => {
      assert.equal(translator.a2b("Mangoes are my favorite fruit.",false), 'Mangoes are my favourite fruit.');
      done();
    });

    test("Translate 'I ate yogurt for breakfast.'", done => {
      assert.equal(translator.a2b("I ate yogurt for breakfast.",false), 'I ate yoghurt for breakfast.');
      done();
    });

    test("Translate 'We had a party at my friend's condo.'", done => {
      assert.equal(translator.a2b("We had a party at my friend's condo.",false), `We had a party at my friend's flat.`);
      done();
    });

    test("Translate 'Can you toss this in the trashcan for me?'", done => {
      assert.equal(translator.a2b("Can you toss this in the trashcan for me?",false), `Can you toss this in the bin for me?`);
      done();
    });

    test("Translate 'The parking lot was full.'", done => {
      assert.equal(translator.a2b("The parking lot was full.",false), `The car park was full.`);
      done();
    });

    test("Translate 'Like a high tech Rube Goldberg machine.'", done => {
      assert.equal(translator.a2b("Like a high tech Rube Goldberg machine.",false), `Like a high tech Heath Robinson device.`);
      done();
    });

    test("Translate 'To play hooky means to skip class or work.'", done => {
      assert.equal(translator.a2b("To play hooky means to skip class or work.",false), `To bunk off means to skip class or work.`);
      done();
    });

    test("Translate 'No Mr. Bond, I expect you to die.'", done => {
      assert.equal(translator.a2b("No Mr. Bond, I expect you to die.",false), `No Mr Bond, I expect you to die.`);
      done();
    });

    test("Translate 'Dr. Grosh will see you now.'", done => {
      assert.equal(translator.a2b("Dr. Grosh will see you now.",false), `Dr Grosh will see you now.`);
      done();
    });

    test("Translate 'Lunch is at 12:15 today.'", done => {
      assert.equal(translator.a2b("Lunch is at 12:15 today.",false), `Lunch is at 12.15 today.`);
      done();
    });
  }); 


  suite("British to American", () => {
    test("Translate 'We watched the footie match for a while.'", done => {
      assert.equal(translator.b2a("We watched the footie match for a while.",false), `We watched the soccer match for a while.`);
      done();
    });

    test("Translate 'Paracetamol takes up to an hour to work.'", done => {
      assert.equal(translator.b2a("Paracetamol takes up to an hour to work.",false), `Tylenol takes up to an hour to work.`);
      done();
    });

    test("Translate 'First, caramelise the onions.'", done => {
      assert.equal(translator.b2a("First, caramelise the onions.",false), `First, caramelize the onions.`);
      done();
    });

    test("Translate 'I spent the bank holiday at the funfair.'", done => {
      assert.equal(translator.b2a("I spent the bank holiday at the funfair.",false), `I spent the public holiday at the carnival.`);
      done();
    });

    test("Translate 'I had a bicky then went to the chippy.'", done => {
      assert.equal(translator.b2a("I had a bicky then went to the chippy.",false), `I had a cookie then went to the fish-and-chip shop.`);
      done();
    });

    test("Translate 'I've just got bits and bobs in my bum bag.'", done => {
      assert.equal(translator.b2a("I've just got bits and bobs in my bum bag.",false), `I've just got odds and ends in my fanny pack.`);
      done();
    });

    test("Translate 'The car boot sale at Boxted Airfield was called off.'", done => {
      assert.equal(translator.b2a("The car boot sale at Boxted Airfield was called off.",false), `The swap meet at Boxted Airfield was called off.`);
      done();
    });

    test("Translate 'Have you met Mrs Kalyani?'", done => {
      assert.equal(translator.b2a("Have you met Mrs Kalyani?",false), `Have you met Mrs. Kalyani?`);
      done();
    });

    test("Translate 'Prof Joyner of King's College, London.'", done => {
      assert.equal(translator.b2a("Prof Joyner of King's College, London.",false), `Prof. Joyner of King's College, London.`);
      done();
    });

    test("Translate 'Tea time is usually around 4 or 4.30.'", done => {
      assert.equal(translator.b2a("Tea time is usually around 4 or 4.30.",false), `Tea time is usually around 4 or 4:30.`);
      done();
    });
  });


  suite("Highlight translation", () => {
    test("Translate 'Mangoes are my favorite fruit.'", done => {
      assert.equal(translator.a2b("Mangoes are my favorite fruit.",true), 'Mangoes are my <span class="highlight">favourite</span> fruit.');
      done();
    });

    test("Translate 'I ate yogurt for breakfast.'", done => {
      assert.equal(translator.a2b("I ate yogurt for breakfast.",true), 'I ate <span class="highlight">yoghurt</span> for breakfast.');
      done();
    });

    test("Translate 'We watched the footie match for a while.'", done => {
      assert.equal(translator.b2a("We watched the footie match for a while.",true), `We watched the <span class="highlight">soccer</span> match for a while.`);
      done();
    });

    test("Translate 'Paracetamol takes up to an hour to work.'", done => {
      assert.equal(translator.b2a("Paracetamol takes up to an hour to work.",true), `<span class="highlight">Tylenol</span> takes up to an hour to work.`);
      done();
    });
  });
});