// TODO: Create a function to generate markdown for README
module.exports = templateData => {
  const data = templateData;

  //license arrays to pull name, badge name, and link based on user input of chosen license
  const licenseData = {
    'GNU AGPLv3': ['GNU AGPLv3', 'AGPL_v3', 'https://choosealicense.com/licenses/agpl-3.0/'],
    'GNU GPLv3': ['GNU GPLv3', 'GPL_v3', 'https://choosealicense.com/licenses/gpl-3.0/'],
    'GNU LGPLv3': ['GNU LGPLv3', 'LGPL_v3', 'https://choosealicense.com/licenses/lgpl-3.0/'],
    'Mozilla': ['Mozilla Public License 2.0', 'MPL_2.0', 'https://choosealicense.com/licenses/mpl-2.0/'],
    'Apache': ['Apache License 2.0', 'Apache_2.0', 'https://choosealicense.com/licenses/apache-2.0/'],
    'MIT': ['MIT License', 'MIT', 'https://choosealicense.com/licenses/mit/'],
    'Boost': ['Boost Software License 1.0', 'Boost_1.0', 'https://choosealicense.com/licenses/bsl-1.0/'],
    'Unlicense': ['The Unlicense', 'Unlicense', 'https://choosealicense.com/licenses/unlicense/']
  }

  const formatingBadgeData = (licenseOption) => licenseData[licenseOption]
  // destructure array based on user input
  const [name, badge, link] = formatingBadgeData(`${data.license}`);
  // README Template
  return `
# ${data.title}

![badge](https://img.shields.io/badge/license-${badge}-blue?style=flat-square)

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

NOTICE: This application is covered by [${name}](${link}). 

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
