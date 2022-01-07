const inquirer = require('inquirer');


// TODO: Create an array of questions for user input
const promptUser = () => inquire.prompt([
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
    }
]);

const licenseData = {
    'GNU AGPLv3': ['GNU AGPLv3', 'AGPL_v3', 'https://choosealicense.com/licenses/agpl-3.0/'],
    'GNU GPLv3': ['GNU GPLv3', 'GPL_v3', 'https://choosealicense.com/licenses/gpl-3.0/'],
    'GNU LGPLv3': ['GNU LGPLv3', 'LGPL_v3', 'https://choosealicense.com/licenses/lgpl-3.0/'],
    'Mozilla': ['Mozilla Public License 2.0', 'MPL_2.0', 'https://choosealicense.com/licenses/mpl-2.0/'],
    'Apache': ['Apache License 2.0', 'Apache_2.0', 'https://choosealicense.com/licenses/apache-2.0/'],
    'MIT': ['MIT License', 'MIT', 'https://choosealicense.com/licenses/mit/'],
    'Boost': ['Boost Software License 1.0', 'Boost 1.0', 'https://choosealicense.com/licenses/bsl-1.0/'],
    'Unlicense': ['The Unlicense', 'Unlicense', 'https://choosealicense.com/licenses/unlicense/']
}

//let licenseOption = `${data.license}`;

const formatingBadgeData = (licenseOption) => licenseData[licenseOption]

const data = formatingBadgeData('GNU AGPLv3');

console.log(data[2]);