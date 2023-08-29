// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./assets/utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description of your project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide step by step description of how to get dev environment running'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and and examples for use.  Include screenshots as needed '
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators, if any, with links to their Github profiles.'
    },
    {
        type: 'input',
        name: 'license',
        message: 'What is the license for your project?'
    }
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.error(err);
        } else {
            console.log(`${fileName} has been successfully created!`);
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(answers => {
            const markdownContent = generateMarkdown(answers);
            writeToFile('README.md', markdownContent);
        })
        .catch(error => console.error(error));
}
// Function call to initialize app
init();