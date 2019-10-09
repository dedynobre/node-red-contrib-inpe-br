
const request = require('request');
const parseString = require('xml2js').parseString;
const results = {};

module.exports = function(RED) {
    function capitais(config) {
        RED.nodes.createNode(this,config);
        const node = this;
		
		let url = 'http://servicos.cptec.inpe.br/XML/capitais/condicoesAtuais.xml';
		
		request(url, function (error, response, body) {
			
			results.error = (error);
			results.status = (response && response.statusCode);
			let xml = body;
			
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