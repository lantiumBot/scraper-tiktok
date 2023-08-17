const chai = require('chai');
const expect = chai.expect;
const getLastTikTokVideo = require('../index');

describe('TikTok Scraper', function () {
    this.timeout(30000);
    it('should return an object with video details', async function () {
        const result = await getLastTikTokVideo('lan7ium');
        expect(result).to.be.an('object');
        expect(result).to.have.property('videoLink');
    });
    it('should return an object with description details', async function () {
        const result = await getLastTikTokVideo('lan7ium');
        expect(result).to.be.an('object');
        expect(result).to.have.property('description');
        expect(result.description).to.be.equals('test');
    });
    it('should return an error if user does not exist', async function () {
        try {
            await getLastTikTokVideo('lan7ium123');
            throw new Error('Je m’attendais à une erreur, mais je n’en ai pas eu une');
        } catch (error) {
            expect(error.message).to.equal('Le compte TikTok spécifié est introuvable.');
        }
    });
    it('should return an error if user has no videos', async function () {
        try {
            await getLastTikTokVideo('lantiumfm');
            throw new Error('Expected an error but did not get one');
        } catch (error) {
            expect(error.message).to.equal('Impossible de récupérer le lien de la vidéo TikTok après plusieurs tentatives.\nVérifie que le compte a bien une vidéo ou\nOuvre une issue sur Github.');
        }
    });
});