// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { writeFile } = require('./utils/generateREADME.js');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const promptUser = () => inquirer.prompt([
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
        message: 'What are the steps required to install your project? (Required)',
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
        message: 'Provide instructions and examples for use. Include screenshots as needed later as well. (Required)',
        validate: usageInput => {
            if (usageInput) {
            return true;
            } else {
            console.log('Please provide instructions and examples for use');
            return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Please choose a license.',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla', 'Apache', 'MIT', 'Boost' , 'Unlicense'],
        validate: licenseInput => {
            if (licenseInput) {
            return true;
            } else {
            console.log('Please select a license.');
            return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Enter your contribution guidelines (Required)',
        validate: contributionInput => {
            if (contributionInput) {
            return true;
            } else {
            console.log('Please enter your project contribution guidelines');
            return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'Enter your test instructions (Required)',
        validate: testInput => {
            if (testInput) {
            return true;
            } else {
            console.log('Please enter your project test instructions');
            return false;
            }
        }
    },    
]);


// Function call to initialize app and write README file
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
