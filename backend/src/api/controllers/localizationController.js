const localizationService = require('../../services/localizationService')

class LocalizationController {
    async getTranslations(req, res, next) {
        try {
            const translations = await localizationService.getTranslations(req.params.lang);
            res.json(translations);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new LocalizationController();