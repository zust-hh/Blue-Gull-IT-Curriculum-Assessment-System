const WebpackHtmlBaseBuilder = require('./base');
class ClientProdBuilder extends WebpackHtmlBaseBuilder {
  constructor(config) {
    super(config);
    this.setHtml(true);
    this.setCssExtract(true);
    this.addDefinePlugin({ PROD: true });
  }
}

module.exports = new ClientProdBuilder().create();
