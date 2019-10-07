
const request = require('request');
const results = {};

module.exports = function(RED) {
    function cidades(config) {
        RED.nodes.createNode(this,config);
        const node = this;
		const filtro = config.filtro
		
		let url1 = 'http://servicos.cptec.inpe.br/XML/listaCidades';
		let url2 = '?city=' + filtro;
		let url = url1 + url2;	

		let conteudo;
		
		request(url, function (error, response, body) {
			
			results.error = (error); // Print the error if one occurred
			results.status = (response && response.statusCode); // Print the response status code if a response was received
			results.conteudo = ((body)); // Print the HTML for the Google homepage.
		
			
		});
		
		this.on('input', function(msg) {
			msg.payload = results.conteudo;
            node.send(msg);
			
        });
    }
    RED.nodes.registerType("codCidades",cidades);
  };