
const checaCodigo = function(codigo){
	
	var out;
	
	switch (codigo){
				
		case "ec":
			out = "Encoberto com Chuvas Isoladas";
			break;
		case "ci":
			out = "Chuvas Isoladas";
			break;
		case "c":
			out = "Chuva";
			break;
		case "in":
			out = "Instável";
			break;
		case "pp":
			out = "Poss. de Pancadas de Chuva";
			break;
		case "cm":
			out = "Chuva pela Manhã";
			break;
		case "cn":
			out = "Chuva a Noite";
			break;
		case "pt":
			out = "Pancadas de Chuva a Tarde";
			break;
		case "pm":
			out = "Pancadas de Chuva pela Manhã";
			break;
		case "np":
			out = "Nublado e Pancadas de Chuva";
			break;
		case "pc":
			out = "Pancadas de Chuva";
			break;
		case "pn":
			out = "Parcialmente Nublado";
			break;
		case "cv":
			out = "Chuvisco";
			break;
		case "ch":
			out = "Chuvoso";
			break;
		case "t":
			out = "Tempestade";
			break;
		case "ps":
			out = "Predomínio de Sol";
			break;
		case "e":
			out = "Encoberto";
			break;
		case "n":
			out = "Nublado";
			break;
		case "cl":
			out = "Céu Claro";
			break;
		case "nv":
			out = "Nevoeiro";
			break;
		case "g":
			out = "Geada";
			break;
		case "ne":
			out = "Neve";
			break;
		case "nd":
			out = "Não Definido";
			break;
		case "pnt":
			out = "Pancadas de Chuva a Noite";
			break;
		case "psc":
			out = "Possibilidade de Chuva";
			break;
		case "pcm":
			out = "Possibilidade de Chuva pela Manhã";
			break;
		case "pct":
			out = "Possibilidade de Chuva a Tarde";
			break;
		case "pcn":
			out = "Possibilidade de Chuva a Noite";
			break;
		case "npt":
			out = "Nublado com Pancadas a Tarde";
			break;
		case "npn":
			out = "Nublado com Pancadas a Noite";
			break;
		case "ncn":
			out = "Nublado com Poss. de Chuva a Noite";
			break;
		case "nct":
			out = "Nublado com Poss. de Chuva a Tarde";
			break;
		case "ncm":
			out = "Nubl. c/ Poss. de Chuva pela Manhã";
			break;
		case "npm":
			out = "Nublado com Pancadas pela Manhã";
			break;
		case "npp":
			out = "Nublado com Possibilidade de Chuva";
			break;
		case "vn":
		    out = "Variação de Nebulosidade";
			break;
		case "ct":
			out = "Chuva a Tarde";
			break;
		case "ppn":
			out = "Poss. de Panc. de Chuva a Noite";
			break;
		case "ppt":
			out = "Poss. de Panc. de Chuva a Tarde";
			break;
		case "ppm":
			out = "Poss. de Panc. de Chuva pela Manhã";
			break;			
		
	}
	
	
	return out;
}


module.exports = {
	
	ccodigo : checaCodigo
	
	
	
}