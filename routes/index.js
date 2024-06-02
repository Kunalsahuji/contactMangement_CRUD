var express = require('express');
var router = express.Router();
const Contacts = require("../db/contactModel")
/* GET home page. */
router.get('/', async (req, res, next) => {
  res.render('index',);
});

router.get('/register', async (req, res, next) => {
  res.render('register',);
});

router.post('/register', async (req, res, next) => {
  const contacts = await Contacts.find()
  const contact = await Contacts.create({ ...req.body })
  await contact.save()
  res.redirect('/contacts');
});

router.get('/contacts', async (req, res, next) => {
  const contacts = await Contacts.find()
  res.render('contacts', { contacts });
});

router.get('/profile', async (req, res, next) => {
  res.render('profile',);
});

router.get('/update/:id', async (req, res, next) => {
  const id = req.params.id
  const updateContact = await Contacts.findById(id)
  res.render('update', { updateContact });
});


router.post('/update/:id', async (req, res, next) => {
  const id = req.params.id
  const updateContact = await Contacts.findByIdAndUpdate(id, req.body)
  res.redirect('/contacts')


});


router.get('/delete/:id', async (req, res, next) => {
  const id = req.params.id
  const deleteContact = await Contacts.findByIdAndDelete(id)
  res.redirect('/contacts');
});

module.exports = router;
