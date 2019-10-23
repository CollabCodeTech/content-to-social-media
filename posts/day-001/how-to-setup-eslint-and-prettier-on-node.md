# How to setup ESLint and Prettier on Node

In this article, I explain how to set up and configure ESLint and Prettier for a Node application. First, I list the requirements. Then I show step by step how to create a *hello world* project using the **Restify** framework. Netflix and other big companies use Restify.

## Requirements

You need a terminal running bash, zsh, or fish. If you work on Windows and bash is not installed, you may alternatively install Powershell. Most commands I use are compatible with it.

Examples in the article run nicely in Nodejs 10.16.3 (or superior), npm 6.12.0 (or superior), and Visual Studio Code (VSCode).

## Creating the project

Open your terminal and create a directory named *api-happy*. To do that, use the *mkdir* command, followed by the directory name.

    mkdir api-happy

Change your working directory using *cd.*

    cd api-happy

Nice!

Initialize an **npm** (Node Package Manager) project by typing the following command in the terminal:

    npm init -y

If the command worked, a new file in the directory called *package.json* is present. Open it up in the VSCode. You must see some information about your project like:

- name;
- version;
- description;
- main (the main file of your project);
- scripts (test and other scripts);
- keywords (so people can find your project);
- author;
- license.

The next step is to install Restify as a dependency of the project. To do that, run:

npm install restify

If you want to save some keystrokes, you can run npm i resitfy instead. The --save option is required anymore since now it is a default option. The command should add the following lines to your *package.json* file (you can open it in VSCode to check if you want to):

    ...
    "dependencies": {
      "restify": "^8.4.0"
    }
    ...

Now, create a *index.js* file using VSCode and paste the following piece of code in it:

    const restify = require("restify");
    const PORT = 5000
    const app = restify.createServer()
    app.get('/', (req, res) =>
    res.send({ hello: "World" }));
    app.listen(PORT)

This code, in a nutshell, creates a *restify* server on port 5000 that responds to the route / with { hello: "Word" } in the JSON format. Be aware that the code is not indented and is totally unformatted. It is intentional, as further, I show how to fix it using **ESLint** and **Prettier.**

At last, start a node process passing *index.js* as an argument:

    node index.js

## Configuring ESLint in a Node application

It's time to level up and automate the process so you can improve the code quality.

To configure ESLint, we need a *.eslintrc.json* file. ESLint also supports .js or .yml extensions. You may create it manually or in an assisted way. If you opt for the assisted setup, in terminal, press Ctrl-C to kill the node process, then run the following command:

    npx eslint --init

npx installs packages globally and temporarily. It means that npx removes already-used packages after usage. It is an excellent option if you don't want to save disk space and always run an updated version of the package. npx is available since version 5.2 of npm.

The command configures ESLint by asking questions about your preferences. Below, I present the questions and my recommendations.

1. **How would you like to use ESLint? (Use arrow keys)**

*To check syntax, find problems, and enforce code style*

1. **What type of modules does your project use?**

*CommonJS (require/exports)*

1. **Which framework does your project use?**

*None of these*

1. **Does your project use TypeScript?**

*N*

1. **Where does your code run? (Press `<space>` to select, `<a>` to toggle all, `<i>` to invert selection)**

Select solely Node.

1. **How would you like to define a style for your project?**

*Use a popular style guide*

1. **Which style guide do you want to follow?**

*Airbnb ([https://github.com/airbnb/javascript](https://github.com/airbnb/javascript))*

1. **What format do you want your config file to be in?**

*JSON*

1. **Would you like to install them now with npm?**

*Y*

Well done!

Now we have an **ESLint** configuration file created and all the dependencies resolved. Your *.eslintrc.json* should look something like:

	{
		"env": {
			"commonjs": true,
				"es6": true,
				"node": true
		},
			"extends": [
				"airbnb-base"
			],
			"globals": {
				"Atomics": "readonly",
				"SharedArrayBuffer": "readonly"
			},
			"parserOptions": {
				"ecmaVersion": 2018
			},
			"rules": {
			}
	}
    
And your *package.json* something like:
    
	{
		"name": "api-happy",
			"version": "1.0.0",
			"description": "",
			"main": "index.js",
			"scripts": {
				"test": "echo \\\\"Error: no test specified\\\\" && exit 1"
			},
			"keywords": [],
			"author": "",
			"license": "ISC",
			"dependencies": {
				"restify": "^8.4.0"
			},
			"devDependencies": {
				"eslint": "^6.5.1",
				"eslint-config-airbnb-base": "^14.0.0",
				"eslint-plugin-import": "^2.18.2"
			}
	}

Open the *index.js* file. Notice there is no alerts or errors in the editor telling the code is not compliant with AirBnB style guide. To do that, we need to install [this plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) in VSCode.

When properly installed, the *index.js* file gets a red underline all over the place, as shown in the image below:

If you hover line 1 over the const keyword, you can see the error description provided by the **ESLint**.

This error is easy to fix. Just add an empty line after requiring *Restify*.

Fixing errors one by one is very counterproductive. That's where **Prettier** comes in. It reads **ESLint** configuration settings and automatically formats your code to match it.

Before I met **Prettier**, I used to fix all the errors manually. As it is a tedious task, it is common to see developers giving up using **ESLint** integrated with the editor. I strongly recommend you to use **Prettier.**

## How to configure Prettier with ESLint

First, install the [Prettier plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) for VSCode.

Now, we need to integrate ESLint to Prettier. To do that, go to your terminal and run the following command in the project's root directory:

    npm i prettier eslint-config-prettier eslint-plugin-prettier

After installing these three packages, open your *.eslintrc.json* file in VSCode and add in the extends section the string prettier. Like this:

    ...
	"extends": [
		"prettier",
		"airbnb-base"
	],
    ...

Then create the key "plugins" and add "prettier" to the array. Like this:

	"extends": [
		"prettier",
		"airbnb-base"
	],
	"plugins": [
		"prettier"
	]

The last change is to add a new rule in the rules key, like this:

    "rules": {
		"prettier/prettier": "error"
    }

This is the final result of .eslintrc.json:

	{
		"env": {
			"commonjs": true,
			"es6": true,
			"node": true
		},
		"extends": ["prettier", "airbnb-base"],
		"plugins": ["prettier"],
		"globals": {
			"Atomics": "readonly",
			"SharedArrayBuffer": "readonly"
		},
		"parserOptions": {
			"ecmaVersion": 2018
		},
		"rules": {
			"prettier/prettier": "error"
		}
	}

Let's test! Open the *index.js* file in VSCode, change anything and save it.

Did you expect to have your code formatted automatically? Well, before it happens, it is necessary to create a *.vscode* file in your project's root directory. Put the following JSON in the file

    {
		"editor.formatOnSave": true,
    }

Get back in VSCode and save *index.js* again. It should format your code as expected. But, you may notice errors on double-quotes. And here is the problem: Prettier should format your code according to ESLint configurations (which is single quotes). But, there are some default options that Prettier does not override, check the image below. Double quotes are one of them.

To fix it, you need to create a .prettier.config.js in the root of your project with the following content:

	module.exports = {
		tabWidth: 2,
		semi: true,
		singleQuote: true,
		trailingComma: 'es5',
	}

Now everything must work perfectly.

The important lesson here is to be aware that depending on the style guide you choose, **Prettier** settings have to match them.

I am pleased to share some knowledge with you. Thanks for reading the post. See you soon!
