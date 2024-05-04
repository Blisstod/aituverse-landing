const fs = require('fs').promises;
const path = require('path');

class LocalizationService {
    constructor() {
        this.localesPath = path.join(__dirname, '..', 'data', 'locales');
        this.cache = {};
    }

    async loadLocale(locale) {
        const filePath = path.join(this.localesPath, `${locale}.json`);
        if (!this.cache[locale]) {
            const data = await fs.readFile(filePath, 'utf8');
            this.cache[locale] = JSON.parse(data);
        }
        return this.cache[locale];
    }

    async getTranslations(lang) {
        return this.loadLocale(lang);
    }
}

module.exports = new LocalizationService();
