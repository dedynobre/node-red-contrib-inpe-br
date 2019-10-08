
const request = require('request');
const parseString = require('xml2js').parseString;
const results = {};

module.exports = function(RED) {
    function previsaotempo(config) {
        RED.nodes.createNode(this,config);
        const node = this;
		const dias = config.dias;
		const cod = config.codigo;
	
		var url = "";
		
		let aux_url_4d_01 = 'http://servicos.cptec.inpe.br/XML/cidade/';
		let aux_url_4d_02 = '/previsao.xml';
		let url_4d = aux_url_4d_01 + cod + aux_url_4d_02;
		
		let aux_url_7d_01 = 'http://servicos.cptec.inpe.br/XML/cidade/7dias/';
		let aux_url_7d_02 = '/previsao.xml';
		let url_7d = aux_url_7d_01 + cod + aux_url_7d_02;

		if(dias === '4d'){
			
			url = url_4d;
			
		}
		
		if(dias === '7d'){
			
			url = url_7d;
			
		}
				
		request(url, function (error, response, body) {
			
			results.error = (error); // Print the error if one occurred
			results.status = (response && response.statusCode); // Print the response status code if a response was received
			var xml = body;
			
			parseString(xml, function (err, result) {
	
				results.conteudo = (result);
		
			});
			
			let aux_tempo;
			
			/*
			
			switch(results.conteudo.cidade.previsao[0].tempo[0]{
				
				case ec:
					aux_tempo = "Encoberto com Chuvas Isoladas";
					break;
				case ci:	
					aux_tempo = "Chuvas Isoladas";
				case c:	aux_tempo = "Chuva"
				case in: aux_tempo = 	"Instável"
				case pp:	aux_tempo = "Poss. de Pancadas de Chuva"
				case cm:	aux_tempo = "Chuva pela Manhã"
				case cn:	aux_tempo = "Chuva a Noite"
				case pt:	aux_tempo = "Pancadas de Chuva a Tarde"
				case pm:	aux_tempo = "Pancadas de Chuva pela Manhã"
				case np:	aux_tempo = "Nublado e Pancadas de Chuva"
				case pc:	aux_tempo = "Pancadas de Chuva"
				case pn:	aux_tempo = "Parcialmente Nublado"
				case cv:	aux_tempo = "Chuvisco"
				case ch:	aux_tempo = "Chuvoso"
				case t:	aux_tempo = "Tempestade"
				case ps:	aux_tempo = "Predomínio de Sol"
				case e:	aux_tempo = "Encoberto"
				case n:	aux_tempo = "Nublado"
				case cl	aux_tempo = "Céu Claro"
				case nv:	aux_tempo = "Nevoeiro"
				case g:	aux_tempo = "Geada"
				case ne:	aux_tempo = "Neve"
				case nd:aux_tempo = "Não Definido"
				case pnt:	aux_tempo = "Pancadas de Chuva a Noite"
				case psc:	"Possibilidade de Chuva"
				case pcm:	aux_tempo = "Possibilidade de Chuva pela Manhã"
				case pct:	aux_tempo = "Possibilidade de Chuva a Tarde"
				case pcn:	aux_tempo = "Possibilidade de Chuva a Noite"
				case npt:	aux_tempo = "Nublado com Pancadas a Tarde"
				case npn:	aux_tempo = "Nublado com Pancadas a Noite"
				case ncn:	aux_tempo = "Nublado com Poss. de Chuva a Noite"
				case nct:	aux_tempo = "Nublado com Poss. de Chuva a Tarde"
				case ncm:	aux_tempo = "Nubl. c/ Poss. de Chuva pela Manhã"
				case npm:	aux_tempo = "Nublado com Pancadas pela Manhã"
				case npp:	aux_tempo = "Nublado com Possibilidade de Chuva"
				case vn:	aux_tempo = "Variação de Nebulosidade"
				case ct:	aux_tempo = "Chuva a Tarde"
				case ppn:	aux_tempo = "Poss. de Panc. de Chuva a Noite"
				case ppt:	aux_tempo = "Poss. de Panc. de Chuva a Tarde"
				case ppm:	aux_tempo = "Poss. de Panc. de Chuva pela Manhã"
				
				
				
				
				
			}
			
			
			
			
			*/
			
			
			
			
			if(results.conteudo.cidade.previsao[0].tempo[0] === 'pt'){
				
				results.conteudo.cidade.previsao[0].tempo[0] = "Pancadas de Chuva a Tarde";
				
			}
		
			
		});
		
		this.on('input', function(msg) {
			msg.payload = results;
            node.send(msg);
			
        });
    }
    RED.nodes.registerType("previsaoTempo",previsaotempo);
  };