
const request = require('request');
const results = {};

module.exports = function(RED) {
    function aeroportos(config) {
        RED.nodes.createNode(this,config);
        const node = this;
		const estacao = config.estacao
		
		let url1 = 'http://servicos.cptec.inpe.br/XML/estacao/';
		let url2 = estacao;
		let url3 = '/condicoesAtuais.xml';
		let url = url1 + url2 + url3;	

		let conteudo;
		
		request(url, function (error, response, body) {
			
			results.error = (error); // Print the error if one occurred
			results.status = (response && response.statusCode); // Print the response status code if a response was received
			results.conteudo = ((body)); // Print the HTML for the Google homepage.
			
		});
		
		this.on('input', function(msg) {
			msg.payload = results;
            node.send(msg);
			
        });
    }
    RED.nodes.registerType("condAeroportos",aeroportos);
  };