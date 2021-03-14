const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);


let Translator = require('../components/translator.js');
const translator = new Translator();


suite('Functional Tests', () => {
  test("Translation with text and locale fields", done => {
    chai.request(server)
    .post("/api/translate")
    .send({text:"Dr. Thomas", locale:"american-to-british"})
    .end((err, res) => {
      assert.equal(Object.keys(res.body).length, 2);
      assert.equal(res.body.text, "Dr. Thomas");
      assert.equal(res.body.translation, `<span class="highlight">Dr</span> Thomas`);
      done();
    });
  });

  test("Translation with text and invalid locale field", done => {
    chai.request(server)
    .post("/api/translate")
    .send({text:"Dr. Thomas", locale:"test"})
    .end((err, res) => {
      assert.equal(res.body.error, "Invalid value for locale field");
      done();
    });
  });

  test("Translation with missing text field", done => {
    chai.request(server)
    .post("/api/translate")
    .send({locale:"british-to-american"})
    .end((err, res) => {
      assert.equal(res.body.error, "Required field(s) missing");
      done();
    });
  });

  test("Translation with missing locale field", done => {
    chai.request(server)
    .post("/api/translate")
    .send({text:"test"})
    .end((err, res) => {
      assert.equal(res.body.error, "Required field(s) missing");
      done();
    });
  });

  test("Translation with empty text", done => {
    chai.request(server)
    .post("/api/translate")
    .send({text:"", locale:"american-to-british"})
    .end((err, res) => {
      assert.equal(res.body.error, "No text to translate");
      done();
    });
  });

  test("Translation with text that needs no translation", done => {
    chai.request(server)
    .post("/api/translate")
    .send({text:"test", locale:"american-to-british"})
    .end((err, res) => {
      assert.equal(res.body.text, "test");
      assert.equal(res.body.translation, "Everything looks good to me!");
      done();
    });
  });
});
