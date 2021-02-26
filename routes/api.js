'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      const rq = req.body;
      if ([rq.text,rq.locale].includes(undefined)) {
        res.json({error: "Required field(s) missing"});
      } else if (rq.text == "") {
        res.json({error: "No text to translate"});
      } else if (!["american-to-british","british-to-american"].includes(rq.locale)) {
        res.json({error: "Invalid value for locale field"});
      } else {
        let translation = (rq.locale=="american-to-british")?translator.a2b(rq.text,true):translator.b2a(rq.text,true);
        res.json({text:rq.text, translation:translation});
      }
    });
};