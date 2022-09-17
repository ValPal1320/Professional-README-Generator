//Node packages
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Hello! what is the title of your application?:',
            validate: (value) => {if(value){return true} else {return 'Sorry, please try again.'}}
        },
        {
            type: 'input',
            name: 'description',
            message: 'Type a detailed description of your application:',
            validate: (value) => {if(value){return true} else {return 'Sorry, please try again.'}}
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide installation instructions for your application:',
            validate: (value) => {if(value){return true} else {return 'Sorry, please try again.'}}
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Type step-by-step instructions on how to use your application:',
            validate: (value) => {if(value){return true} else {return 'Sorry, please try again.'}}
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'Type step-by-step instructions for how to contribute to your application:',
            validate: (value) => {if(value){return true} else {return 'Sorry, please try again.'}}
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Provide any tests for your application:',
            validate: (value) => {if(value){return true} else {return 'Sorry, please try again.'}}
        },
        {
            type: 'list',
            name: 'license',
            choices: ['None', 'MIT', 'GNU', 'Apache'],
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?:',
            validate: (value) => {if(value){return true} else {return 'Sorry, please try again.'}}
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?:',
            validate: (value) => {if(value){return true} else {return 'Sorry, please try again.'}}
        },

    ])
    .then((answers) => {
        const readMeText = generateMarkdown(answers);
        fs.writeFile('./README.md', readMeText, err => {
            if (err) {
              console.error(err);
            }
          });
      });
