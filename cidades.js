
const request = require('request');
const parseString = require('xml2js').parseString;
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
			
			results.error = (error);
			results.status = (response && response.statusCode);
			
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
    RED.nodes.registerType("codCidades",cidades);
  };