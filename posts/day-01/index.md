# Como Melhorar a qualidade de código com ESLint, Prettier e Husky

Se você é a pessoa que gosta que o seu código esteja todo indentado da mesma forma, também gosta de usar as mesmas aspas no seu código entre outras padrões mais complexos no seu código com objetivo de ter uma qualidade de código mais feilz, este post é para você. Ele também é para você que não gosta de seguir esses padrões chatos, provavelmente porque lhe dá muito trabalho e você considera isso uma perda de tempo.

Nesse post mostrarei como automatizar todo esse processo de padrões e qualidade de código enquanto você está programando no seu VSCode, além de garantir que o código só será commitado caso o código esteja seguindo os padrões que você ou o seu time adotou.

Então vamos para leitura entender qual é a mágia por trás do ESLint, Prettier e Husky. Se você já sabe o que é o ESLint, Prettier e Husky recomendo você pular para parte prática e ir direto para a seção: <a href="#eslint">Como configurar ESLint, Prettier e Husky?</a>

## O que é ESLint?

É um **lint** ou **linter** para **JavaScript** e **TypeScript**, sim ele também é usado no mundo TypeScript, a um tempo atrás tinhamos o TSLint mas hoje ele se tornou um plugin do ESlint e a comunidade e mercado de trabalho utilizam o ESLint para ambas as linguagens.

> ### O que é lint ou linter?
>
> O termo **lint** ou **linter** não é algo só do mundo JavaScript, esse termo vem sendo usado no [mundo Unix para a linguagem C](<https://en.wikipedia.org/wiki/Lint_(software)>). A responsabilidade dos lints ou linters não mudaram, eles fazem para nós uma análise no nosso código antes mesmo do nosso software ser executado, portanto enquanto você escreve o seu código o linter acusarś possíveis erros de programação, bugs, construções suspeitas além de solicitar alterações para você seguir os padrões de indentações, aspas e qualquer outras regras que você tenha informado previamente para ele.

## O que é Prettier?

**Prettier** além de ter um logo maravilhoso é um plugin que não pode faltar no seu VSCode. Ele formata seu código de forma automática no momento que você salva seu arquivo, você pode configurar de forma bem simples os padrões que ele deve seguir nessa formatação automática que ele realiza, e na parte prática desse post eu vou mostrar como você pode falar para o prettier seguir as regras de formatação que definiremos no ESLint e dessa forma não vamos duplicar essas regras em dois lugares diferentes.

## O que é o Husky?

**Husky** além de ser um cachorro muito imponente e feliz é um pacote do mundo **JavaScript** que nos ajuda a lidar com o **Git Hooks** de uma forma simples e feliz como o cachorro.

> ### O que é Git Hooks?
>
> O **Git Hooks** é uma forma de executar scripts personalizados que pode acontecer tando do lado do servidor quanto do lado do cliente. O `git commit` e `git merge` são operações que acontecem do lado do cliente, já o `git push` é ocorre do lado do servidor.

Nesse post nós usaremos o **Husky** na operação `git commit`, no momento que ela contecer o Husky verificará se arquivos do projeto estão seguindo os padrões pré-definidos em nosso **ESLint**. Dessa forma vamos garantir que os códigos comitados estão seguindos as nossas regras portanto teremos assim uma qualidade de código muito mais feliz em nosso projeto.

<h2 id="eslint">Como configurar ESLint, Prettier e Husky?</h2>

O **JavaScript** esta cada vez mais poderoso, hoje podemos usar ele no **FrontEnd** com frameworks modernos, como: **React**, **Vue** e **Angular** (TypeScript). Além do movimento de compiladores de JavaScript para FrontEnd que vem crescendo com a adoção do **Svelte**.

Também podemos usar o **JavaScript** no **Backend** com o **NodeJS** e frameworks como: **Express** e **Restify**. Temos também os frameworks que já adotaram **TypeScript** como a linguagem padrão como o **NestJS**.

E outra camada que o **JavaScript** e amigo ou não **TypeScript** vem também sendo bem aceito é a camada **mobile**, principalmente com o **React Native**.

Como o **JavaScript** está em muitos lugares, mostrarei como você pode configurar o seu ESLint, Prettier e Husky em cada um desses lugares. Agora só escolher o mundo que quer trabalhar e clicar em um dos links a seguir para absorver todo conhecimento que você precisa:

- [Como configura ESLint, Prettier, Husky no Node?]()
- [Como configura ESLint, Prettier, Husky no React?]()
- [Como configura ESLint, Prettier, Husky no Vue?]()
- [Como configura ESLint, Prettier, Husky no React Native?]()
- [Como configura ESLint, Prettier, Husky no Svelte?]()