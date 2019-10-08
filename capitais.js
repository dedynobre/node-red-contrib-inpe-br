
const request = require('request');
const parseString = require('xml2js').parseString;
const results = {};

module.exports = function(RED) {
    function capitais(config) {
        RED.nodes.createNode(this,config);
        const node = this;
		
		let url1 = 'http://servicos.cptec.inpe.br/XML/capitais/condicoesAtuais.xml';
		let url = url1;

		let conteudo;
		
		request(url, function (error, response, body) {
			
			results.error = (error); // Print the error if one occurred
			results.status = (response && response.statusCode); // Print the response status code if a response was received
			var xml = body;
			
			parseString(xml, function (err, result) {
	
				results.conteudo = (result);
		
			});
			
		});
		
		this.on('input', function(msg) {
			msg.payload = results;
            node.send(msg);
			
        });
    }
    RED.nodes.registerType("dadosCapitais",capitais);
  };