const express = require('express')
const localizationController = require('../controllers/localizationController')

const router = express.Router();

router.get('/:lang', localizationController.getTranslations)

module.exports = router;