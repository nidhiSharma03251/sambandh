const express = require('express');
const router = express.Router();
const { submitContact, getContacts } = require('../controllers/contactController');
const { validateContact } = require('../middleware/validate');

router.post('/', validateContact, submitContact);
router.get('/', getContacts); // Protect with auth middleware in production

module.exports = router;
