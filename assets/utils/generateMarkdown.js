// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    const licenseBadgeMap = {
        'github': 'github-Profile-lightgrey',
        'html': 'HTML-orange',
        'css': 'CSS-blue',
        'jses6': 'JavaScript--ES6-yellow',
        'node.js': 'node.js-12.0-green',
        'npm': 'npm-6.14.4-blue',
        'filesystem': 'fs-File_System-red',
        'inquirer': 'Inquirer-8.2.4-purple'
    };

    const badges = license.map(l => {
        if (licenseBadgeMap[l]) {
            return `![${l}](https://img.shields.io/badge/${licenseBadgeMap[l]}.svg)`;
        }
        return '';
    });

    return badges.join(' ');
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licenses) {
    const badgeLicenseMap = {
        'github': 'MIT',
        'html': 'BSD',
        'css': 'MIT',
        'jses6': 'MIT', // Corrected from 'None (Public Domain)'
        'node.js': '', // No return value
        'npm': 'Artistic-2.0',
        'filesystem': 'ISC',
        'inquirer': 'MIT'
    };
    if (licenses && licenses.length > 0) {
        const licenseLinks = licenses.map(license => {
            const licenseBadge = badgeLicenseMap[license];
            if (licenseBadge) {
                const licenseURL = `https://opensource.org/licenses/${licenseBadge}`;
                return `${license}\n${licenseURL}`;
            }
            return '';
        });
        return licenseLinks.join('\n\n');
    }
    return '';
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {
//     if (license) {
//         return `This project is licensed under the ${license} License. Click [here](https://opensource.org/licenses/${encodeURIComponent(license)}) to learn more.`;
//     }
//     return '';
// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    const licenseBadges = renderLicenseBadge(data.license);
    const licenseLinks = renderLicenseLink(data.license);

    return `# ${data.title}

## Badges
    
${licenseBadges}

## Description
  
${data.description}

## Table of Contents
  
  ${data.description ? '- [Description](#description)\n' : ''
        }${data.installation ? '  - [Installation](#installation)\n' : ''}${data.usage ? '  - [Usage](#usage)\n' : ''
        }${data.credits ? '  - [Credits](#credits)\n' : ''}${data.license ? '  - [License](#license)\n' : ''
        }
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## License
  
  ${licenseLinks}


  ## Contributing
  
  ${data.contributing}

  ## Tests
  
  ${data.tests}

  ## Questions
  
  ### Github username
  ${data.githubusername}

  ### Github url
https://github.com/${data.githubusername}/professionalReadmeGenerator
  
  ### Contact me
email: ${data.email}
phone: ${data.phone}
`;
};
module.exports = generateMarkdown;