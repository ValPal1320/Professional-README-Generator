// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
      return ``;
  } else {
      return `[![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)](${renderLicenseLink(license)})`
  }
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
      return `https://www.mit.edu/~amini/LICENSE.md`
  }
  if (license === 'GNU') {
      return `https://www.gnu.org/licenses/gpl-3.0.en.html`
  }
  if (license === 'Apache') {
      return `https://www.apache.org/licenses/LICENSE-2.0` 
  }
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
      return ``;
  } else {
      return `## Licenses
      This project is covered under the ${license} license. To learn more about what this means, click the license button at the top.`
}
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribute)
  * [Tests](#tests)
  * [Licenses](#licenses)
  * [Questions](#questions)
  
  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contribution
  ${data.contribute}

  ## Tests
  ${data.tests}

  ${renderLicenseSection(data.licenses)}

  ## Questions
  If you have any questions, please feel free to reach out!  
  GitHub: https://github.com/${data.github}  
  Email: ${data.email}
`;
}

module.exports = generateMarkdown;
