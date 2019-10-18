# Como melhorar a qualidade de código com ESLint e Prettier?

Se você é a pessoa que gosta que o seu código esteja todo indentado da mesma forma, gosta de usar as mesmas aspas no seu código entre outros padrões mais complexos com objetivo de ter uma qualidade de código mais feliz, este post é para você. Ele também é para você que não gosta de seguir esses padrões chatos, provavelmente porque lhe dá muito trabalho e você considera isso uma perda de tempo.

Nesse post mostrarei como automatizar todo esse processo de padrões e qualidade de código enquanto você está programando no seu VSCode.

Então vamos para leitura entender qual é a magia por trás do ESLint e Prettier. Se você já sabe o que eles são, recomendo você pular para parte prática e ir direto para a seção: <a href="#eslint">Como configurar ESLint e Prettier?</a>

## O que é ESLint?

É um **lint** ou **linter** para **JavaScript** e **TypeScript**, sim ele também é usado no mundo TypeScript! A um tempo atrás tinhamos o TSLint mas hoje ele se tornou um plugin do ESlint e a comunidade e mercado de trabalho passaram a utilizar o ESLint para ambas as linguagens.

> ### O que é lint ou linter?
>
> O termo **lint** ou **linter** não é algo só do mundo JavaScript, esse termo surgiu faz bastante tempo no [mundo Unix para a linguagem C](<https://en.wikipedia.org/wiki/Lint_(software)>). A responsabilidade dos lints ou linters não mudaram, eles fazem para nós uma análise no nosso código antes mesmo do nosso software ser executado, portanto enquanto você escreve o seu código o linter acusará possíveis erros de programação, bugs, construções suspeitas, além de solicitar alterações para você seguir os padrões de indentações, aspas e qualquer outras regras que você tenha informado previamente para ele.

## O que é Prettier?

**Prettier** além de ter um logo maravilhoso é um plugin que não pode faltar no seu VSCode. Ele formata seu código de forma automática no momento que você salva seu arquivo, você pode configurar de forma bem simples os padrões que ele deve seguir nessa formatação automática que ele realiza, e na parte prática desse post eu vou mostrar como você pode falar para o prettier seguir as regras de formatação que definiremos no ESLint e dessa forma não vamos duplicar essas regras em dois lugares diferentes.

<h2 id="eslint">Como configurar ESLint e Prettier?</h2>

O **JavaScript** está cada vez mais poderoso, hoje podemos usá-lo no **FrontEnd** com frameworks modernos como: **React**, **Vue** e **Angular** (TypeScript). Além do movimento de compiladores de JavaScript para FrontEnd que vem crescendo com a adoção do **Svelte**.

Também podemos usar o **JavaScript** no **Backend** com o **NodeJS** e frameworks como: **Express** e **Restify**. Temos também os frameworks que já adotaram **TypeScript** como linguagem padrão como o **NestJS**. Você pode usar **JavaScript** até no mundo **Mobile** com **React Native**!

Como o **JavaScript** está em muitos lugares, mostrarei como você pode configurar o seu ESLint e Prettier em alguns deles. Agora só escolher o mundo que quer trabalhar e clicar em um dos links a seguir para absorver todo conhecimento que você precisa:

- [Como configurar ESLint e Prettier no Node?]()
- [Como configurar ESLint e Prettier no React?]()
- [Como configurar ESLint e Prettier no Svelte?]()
