// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
module.exports = templateData => {

  const {...data} = templateData;

  //license
  let licenseOption = `${data.license}`;
  let licenseLink = '';
  //if conditional to give the license the correct link
  if (licenseOption === 'GNU AGPLv3') {
    licenseFullName = 'GNU AGPLv3';
    licenseBadgeName = 'AGPL_v3';
    licenseLink = 'https://choosealicense.com/licenses/agpl-3.0/';
  };
  if (licenseOption === 'GNU GPLv3') {
    licenseFullName = 'GNU GPLv3';
    licenseBadgeName = 'GPL_v3';
    licenseLink = 'https://choosealicense.com/licenses/gpl-3.0/';
  };
  if (licenseOption === 'GNU LGPLv3') {
    licenseFullName = 'GNU LGPLv3';
    licenseBadgeName = 'LGPL_v3';
    licenseLink = 'https://choosealicense.com/licenses/lgpl-3.0/';
  };
  if (licenseOption === 'Mozilla') {
    licenseFullName = 'Mozilla Public License 2.0';
    licenseBadgeName = 'MPL_2.0';
    licenseLink = 'https://choosealicense.com/licenses/mpl-2.0/';
  };
  if (licenseOption === 'Apache') {
    licenseFullName = 'Apache License 2.0';
    licenseBadgeName = 'Apache_2.0';
    licenseLink = 'https://choosealicense.com/licenses/apache-2.0/';
  };
  if (licenseOption === 'MIT') {
    licenseFullName = 'MIT License';
    licenseBadgeName = 'MIT';
    licenseLink = 'https://choosealicense.com/licenses/mit/';
  };
  if (licenseOption === 'Boost') {
    licenseFullName = 'Boost Software License 1.0';
    licenseBadgeName = 'Boost 1.0';
    licenseLink = 'https://choosealicense.com/licenses/bsl-1.0/';
  };
  if (licenseOption === 'Unlicense') {
    licenseFullName = 'The Unlicense';
    licenseBadgeName = 'Unlicense';
    licenseLink = 'https://choosealicense.com/licenses/unlicense/';
  };

  return `
# ${data.title}

![badge](https://img.shields.io/badge/license-${licenseBadgeName}-blue?style=flat-square)

_You can access more badges and their purposes at [shields.io](https://shields.io)_

## Description:

${data.description}

----------------------------------

## Table of Contents:
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

----------------------------------

## Installation:

_Follow these steps to properly install this application:_

${data.installation}

## Usage:

_Instructions for use:_

${data.usage}

## License:

NOTICE: This application is covered by [${licenseFullName}](${licenseLink}). 

## Contributing:

${data.contribution}

## Tests:

_Instructions for testing application:_

${data.test}

## Questions:

- Github: [${data.github}](https://github.com/${data.github})
- Email:  ${data.email}
  `;
};
