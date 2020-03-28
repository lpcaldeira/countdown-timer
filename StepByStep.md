Este arquivo vai servir para fazer o passo a passo das minhas ações para poder avaliar elas no futuro.

- Rodar o comando `yarn init` para iniciar o projeto com *yarn*. Apenas um gosto pessoal.
- Rodar o comando `yarn add react` para adicionar o react no projeto como dependência.
- Importar o ReactDOM com `yarn add react-dom`.
- Criei a pasta `src` para colocar todos arquivos de desenvolvimento dentro.
- Comecei a programar dentro do `index.js` que a base do projeto.
- Primeiro, importei o `React` para usar `JSX`, depois o `ReactDOM` para chamar os outros arquivos, iniciando pelo `App.js`
- Ainda dentro do `index.js`, setei o id que está no `index.html` que é onde tudo será importado.
- Agora preciso adicionar as rotas do app, terei pelo menos uma então já vou adicionar usando `yarn add react-router-dom`.
- O primeiro component criado foi o `App.js` e é chamado pelo `index.js`.
- Dentro dele, eu chamo o `Header`, que é o próximo component que irei criar, e o `Routes` que, por hora, só existe 1 página.
- No `Header`, eu tenho apenas o título, então só import o `React` para usar `JSX`.
- No `Routes`, tenho a chamada para o `Main`, que é a única página atualmente.
- Primeiro, importei o `React` e o `Component`, porque vou usar o `state` para controlar o tempo.
- Depois defini o state com suas variáveis.
- Importo o moment com `yarn add moment`.
- Programo o `Main` usando `setInterval` de 1 segundo para fazer o trabalho de contagem pra mim.
- Adiciono uma balaca chamada de SVGCircle pra ele ir aumentando o radius, como se o radius fosse o ponteiro do relógio andando segundo a segundo, só que ao invés de ser um ponteiro, é um círculo que vai fechando. Cada segundo, o círculo fecha um pouco mais até que chega em 60 e troca o valor de dentro do `this.state.seconds`.
- Agora preciso adicionar alguns pacotes como dependência de desenvolvimento que preciso para rodar o `webpack` e `babel`.
- Configurar esses dois aí corretamente é mais demorado do que criar o projeto todo ¬.¬
- Depois adiciono algumas configurações no `scripts` dentro do package.json para poder rodar o projeto.
- Agora basta dar um `yarn dev` pra rodar o script adicionado na linha de cima.

================

## Erros durante o projeto
- Depois das configurações do webpack.config.js, ocorreram 2 erros:
1. *`React.StrictMode`* estava acusando erro no `<` e para resolver, tive que adicionar a lib `yarn add @babel/preset-react`
2. A compilação estava acusando erro nos *`.css`* e para resolver, tive que adicionar as libs `yarn add css-loader` e `yarn add style-loader` e adicionar mais um test dentro do `webpack.config.js`, só que agora testando `.css`.
3. O contador só fica bom com pouco tempo de diferença.