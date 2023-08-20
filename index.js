const puppeteer = require("puppeteer");
const cheerio = require("cheerio");

const getInfo = async function (username) {
  const browser = await puppeteer.launch({ headless: "new", args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.goto(`https://www.tiktok.com/@${username}`);

  // Récupérer le contenu HTML de la page
  const content = await page.content();

  // Fermer le navigateur
  await browser.close();

  return content;
};

async function getLastTikTokVideo(username, retryCount = 0) {
  const htmlPage = await getInfo(username);
  // Charger le contenu dans Cheerio
  const $ = cheerio.load(htmlPage);

  // Vérifier si le compte TikTok existe
  const accountExists = $('[data-e2e="user-post-item-list"]').length > 0;
  if (!accountExists) {
    throw new Error("Le compte TikTok spécifié est introuvable ou il n'y a pas de vidéos.");
  }

  // Récupérer la description de la première vidéo
  const description = $('div[data-e2e="user-post-item-desc"]')
    .first()
    .text()
    .trim();

  // Récupérer le lien de la miniature du post de la première vidéo
  const thumbnailUrl = $('div[data-e2e="user-post-item"] img')
    .first()
    .attr("src");

  // Récupérer le lien de la photo de profil
  const profilePictureUrl = $('div[data-e2e="user-avatar"] img')
    .first()
    .attr("src");

  // Récupérer le lien de la vidéo TikTok
  const videoLink = $('div[data-e2e="user-post-item-desc"] a')
    .first()
    .attr("href");

  // Si videoLink est vide, rappeler la fonction
  if (!videoLink || videoLink.trim() === "") {
    if (retryCount < 2) {
      console.log("Lien de la vidéo non trouvé, réessai...");
      return await getLastTikTokVideo(username, retryCount + 1);
    } else {
      throw new Error(
        "Impossible de récupérer le lien de la vidéo TikTok après plusieurs tentatives.\nOuvre une issue sur Github."
      );
    }
  }

  const likeAccount = $('strong[data-e2e="likes-count"]').first().text().trim();

  const followers = $('strong[data-e2e="followers-count"]')
    .first()
    .text()
    .trim();

  const following = $('strong[data-e2e="following-count"]')
    .first()
    .text()
    .trim();

  const bio = $('[data-e2e="user-bio"]').first().text().trim();

  return {
    description,
    thumbnailUrl,
    videoLink,
    profilePictureUrl,
    likeAccount,
    followers,
    following,
    bio,
  };
}

module.exports = getLastTikTokVideo;