# Objetivo

Informaçõe metereológicas obtidos diretamente do site oficial do INPE.

*******

Basicamente a API oficial disponibiliza as seguintes informações:
 1. [Obtém códigos das cidades monitoradas](#codcidade)
 2. [Previsão do tempo para a cidade selecionada](#prevcidade)
 3. [Previsão do tempo nas capitais brasileiras e distrito federal](#prevcap)
 4. [Previsão do tempo nos principais aeroportos brasileiros](#prevaero)
 6. [Previsão do tempo futuro](#prevfuturo)
 
*******

# Detalhes

### Obter código da cidade

A requisição dos dados de localidades do CPTEC/INPE abrange todos os municípios brasileiros e outros locais que têm importância econômica ou turística no qual o CPTEC/INPE cobre com previsão de tempo e outros produtos relacionados. A URL base para a requisição é a seguinte:

* http://servicos.cptec.inpe.br/XML/listaCidades?city=sao%20paulo
* http://servicos.cptec.inpe.br/XML/listaCidades?city=pirapora
* http://servicos.cptec.inpe.br/XML/listaCidades?city=paracatu

`Obs.: Para consulta do código via navegador, para o caso de cidade com espaço entre os nomes se faz necessário o uso (%20)
 no lugar do espaço. Caso faça consulta diretamente pelo node esta configuração não se faz necessária.`
 
### Previsão do tempo para cidade selecionada

### Previsão do tempo para todas as capitais mais o distrito federal

### Previsão do tempo nos locais com os principais aeroportos brasileiros

### Previsão do tempo para dias futuros
