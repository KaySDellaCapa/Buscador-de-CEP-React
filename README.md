# Buscador de CEP

Primeiramente, queria ressaltar que para este projeto, instalei a biblioteca React-Icons, para usar o ícone de pesquisa. Pela primeira vez, por conta deste buscador, usei uma animação feita no CSS com o keyframes, chamada de fliptitles, que faz o título se esticar ao abrir ou recarregar a página. Achei o jeito que se estrutura, principalmente, tranquilo.              

-----------------------
Funcionalidades de código:

É bem simples, ele funciona, como o nome diz, buscando CEP. Você digita ou copia e cola um CEP, e ele vai te retornar o local, o estado e o complemento (se tiver). Implementei nele um sistema de alerta quando não se digita nada na barra de pesquisa, ou quando se digita letra; ele faz uma pequena verificação. O projeto tem uma renderização condicional (app.js, linha 50), onde o espaço de CEP renderiza quando de fato tiver buscado um CEP. Se for maior que 0, a chave vai ser maior que um, ou seja, retorna o main.
