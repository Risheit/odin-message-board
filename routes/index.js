var express = require('express');
var router = express.Router();

class Message {
  constructor(text, user, added) {
    this.text = text;
    this.user = user;
    this.added = added;
  }
}

const messages = [
   new Message("Hi There!", "Amando", new Date()),
   new Message("Hello World!", "Charles", new Date())
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { messages: messages });
});

module.exports = router;
