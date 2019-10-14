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

> http://servicos.cptec.inpe.br/XML/listaCidades

seguido do filtro da cidade:

* http://servicos.cptec.inpe.br/XML/listaCidades?city=sao%20paulo
* http://servicos.cptec.inpe.br/XML/listaCidades?city=pirapora
* http://servicos.cptec.inpe.br/XML/listaCidades?city=paracatu

`Obs.: Para consulta do código via navegador, para o caso de cidade com espaço entre os nomes se faz necessário o uso (%20)
 no lugar do espaço. Caso faça consulta diretamente pelo node esta configuração não se faz necessária.`
 
 
### Previsão do tempo para cidade selecionada

### Previsão do tempo para todas as capitais mais o distrito federal

A requisição dos dados das condições meteorológicas atuais das capitais dos estados brasileiros retorna uma lista de informações atualizadas de hora em hora, relativas aos dados das Estações de Superfície dos Aeroportos, semelhantes à seção anterior, porém, listando apenas os dados Metar dos aeroportos localizados nas capitais.
A URL para requisição dos dados das condições meteorológicas atuais das capitais é a seguinte:

> http://servicos.cptec.inpe.br/XML/capitais/condicoesAtuais.xml


### Previsão do tempo nos locais com os principais aeroportos brasileiros

A requisição dos dados de estações de superfície dos aeroportos (Metar), codificados e disponibilizados pela rede de meteorologia do comando da aeronáutica − REDEMET − é feita através de uma URL que deve ter o código da estação fazendo parte deste endereço.
Estes dados são coletados de uma em uma hora e ou horários intermediários (caso esteja ocorrendo algum evento especial). A URL para realizar essa requisição é tal como se segue:

> http://servicos.cptec.inpe.br/XML/estacao/ **codigo_da_estacao** /condicoesAtuais.xml

onde o **codigo_da_estacao** deve ser substituído pelo código da estação meteorológica de superfície desejada. A lista das estações meteorológicas de superfície está disponível na seção Estações de Superfície dos Aeroportos. Abaixo segue um exemplo prático de uma requisição de dados Metar:

> http://servicos.cptec.inpe.br/XML/estacao/SBGR/condicoesAtuais.xml

Lista completa dos locais estão [aqui.](http://servicos.cptec.inpe.br/XML/#estacoes-metar)


### Previsão do tempo para dias futuros

#### 4 dias:
Os dados da Previsão de tempo para os próximos 4 dias do CPTEC/INPE está disponível para todos os munípios brasileiros e outros locais que têm importância econômica ou turística no qual o CPTEC/INPE cobre com a previsão de tempo.
Para realizar a requisição desses dados se faz necessário conhecer o código do município ou localidade que se deseja consultar.
O código do município ou localidade que são cobertos pelo CPTEC/INPE é representado por um número inteiro positivo, no qual recomendamos o uso do mecanismo de Busca de localidades para o levantamento desta informação.
Tendo posse do código da localidade é possível formar a URL para requisição dos dados, da forma que se segue:

>http://servicos.cptec.inpe.br/XML/cidade/codigo_da_localidade/previsao.xml

onde o codigo_da_localidade deve ser substituído pelo código do município ou localidade desejado. Como exemplo, usaremos a cidade de São Paulo/SP, que tem como código identificador o número 244. A URL da requisição ficará assim:

> http://servicos.cptec.inpe.br/XML/cidade/244/previsao.xml

#### 7 dias:
Os dados da Previsão de tempo para os próximos 7 dias do CPTEC/INPE está disponível para todos os munípios brasileiros e outros locais que têm importância econômica ou turística no qual o CPTEC/INPE cobre com a previsão de tempo.
Para realizar a requisição desses dados se faz necessário conhecer o código do município ou localidade que se deseja consultar.
O código do município ou localidade que são cobertos pelo CPTEC/INPE é representado por um número inteiro positivo, no qual recomendamos o uso do mecanismo de Busca de localidades para o levantamento desta informação.
Tendo posse do código da localidade é possível formar a URL para requisição dos dados, da forma que se segue:

> http://servicos.cptec.inpe.br/XML/cidade/7dias/codigo_da_localidade/previsao.xml

onde o codigo_da_localidade deve ser substituído pelo código do município ou localidade desejado. Como exemplo, usaremos a cidade de São Paulo/SP, que tem como código identificador o número 244. A URL da requisição ficará assim:

> http://servicos.cptec.inpe.br/XML/cidade/7dias/244/previsao.xml

