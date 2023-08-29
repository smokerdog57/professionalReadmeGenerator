// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license) {
        return `![License](https://img.shields.io/badge/License-${encodeURIComponent(license)}-blue.svg)`;
    }
    return '';
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license) {
        return `[License](https://opensource.org/licenses/${encodeURIComponent(license)})`;
    }
    return '';
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license) {
        return `This project is licensed under the ${license} License. Click [here](https://opensource.org/licenses/${encodeURIComponent(license)}) to learn more.`;
    }
    return '';
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
 
return `# ${data.title}
  
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
  
  ${renderLicenseSection(data.license)}

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
}
module.exports = generateMarkdown;
