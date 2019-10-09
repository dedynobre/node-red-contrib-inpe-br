
const request = require('request');
const parseString = require('xml2js').parseString;
const results = {};
const funcsGeral = require('./extras.js');


module.exports = function(RED) {
    function previsaotempo(config) {
        RED.nodes.createNode(this,config);
        const node = this;
		const dias = config.dias;
		const cod = config.codigo;
	
		var url = "";
		var tam;
		
		let aux_url_4d_01 = 'http://servicos.cptec.inpe.br/XML/cidade/';
		let aux_url_4d_02 = '/previsao.xml';
		let url_4d = aux_url_4d_01 + cod + aux_url_4d_02;
		
		let aux_url_7d_01 = 'http://servicos.cptec.inpe.br/XML/cidade/7dias/';
		let aux_url_7d_02 = '/previsao.xml';
		let url_7d = aux_url_7d_01 + cod + aux_url_7d_02;

		if(dias === '4d'){
			
			url = url_4d;
			tam = 4;
			
		}
		
		if(dias === '7d'){
			
			url = url_7d;
			tam = 7;
			
		}

		let cod_tempo;
				
		request(url, function (error, response, body) {
			
			results.error = (error);
			results.status = (response && response.statusCode);
			var xml = body;
			
			parseString(xml, function (err, result) {
	
				results.conteudo = (result);
		
			});
						
			for(x = 0; x < tam; x++){
				
				cod_tempo = results.conteudo.cidade.previsao[x].tempo[0];
				results.conteudo.cidade.previsao[x].tempo[0] = funcsGeral.ccodigo(cod_tempo);			
				
			}			
							
		});
		
		this.on('input', function(msg) {
			msg.payload = results;
            node.send(msg);
			
        });
    }
    RED.nodes.registerType("previsaoTempo",previsaotempo);
  };