const metascraper = require('metascraper')([
  require('metascraper-author')(),
  require('metascraper-date')(),
  require('metascraper-description')(),
  require('metascraper-image')(),
  require('metascraper-publisher')(),
  require('metascraper-title')(),
  require('metascraper-url')()
]);
const articles = require('../news.json');
const got = require('got');

(async () => {
  const metas = { news: true, articles: [] }
  for (const a of articles) {
    const { body: html, url } = await got(a)
    const metadata = await metascraper({ html, url })
    metas.articles.push(metadata)
  }
  console.log(JSON.stringify(metas))
})();

