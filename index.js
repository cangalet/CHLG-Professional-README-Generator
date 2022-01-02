// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { writeFile } = require('./utils/generateREADME.js');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
// Title
// Description
// Table of Contents - Autopopulates based on information
// Installation
// Usage
// License
// Contributing
// Tests
// Questions
    // github Username
    // email address

    const promptUser = () => {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'github',
                message: 'Enter your GitHub Username (Required)',
                validate: githubInput => {
                    if (githubInput) {
                    return true;
                    } else {
                    console.log('Please enter your GitHub Username!');
                    return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'Enter your email address (Required)',
                validate: emailInput => {
                    if (emailInput) {
                    return true;
                    } else {
                    console.log('Please enter your email address');
                    return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'title',
                message: 'Enter your project title (Required)',
                validate: titlelInput => {
                    if (titlelInput) {
                    return true;
                    } else {
                    console.log('Please enter your project title');
                    return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'description',
                message: 'Enter your project description (Required)',
                validate: descriptionInput => {
                    if (descriptionInput) {
                    return true;
                    } else {
                    console.log('Please enter your project description');
                    return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'installation',
                message: 'Enter your project installation instructions (Required)',
                validate: installationInput => {
                    if (installationInput) {
                    return true;
                    } else {
                    console.log('Please enter your project installation instructions');
                    return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'usage',
                message: 'Enter your project usage (Required)',
                validate: usageInput => {
                    if (usageInput) {
                    return true;
                    } else {
                    console.log('Please enter your project usage');
                    return false;
                    }
                }
            },    
        ])
    };

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
promptUser()
    .then(answers => {
        console.log(answers)
        return generateMarkdown(answers);
    })
    .then(pageREADME => {
        return writeFile(pageREADME);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
    })
    .catch(err => {
        console.log(err);
    });
