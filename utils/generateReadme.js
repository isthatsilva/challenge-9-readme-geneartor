const generateReadme = data => {
    return `# ${data.title}
    if (data.licenses === "MIT License") {
        data.licenses = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      }
      if (data.licenses === "APACHE 2.0") {
        data.licenses = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      }
        
    ## Description 
    ${data.description}

    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributions](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)
        
    ## Installation 
    ${data.install}

    ## License 
    This project is license under ${data.license}

    ## Contributions 
    ${data.contributors}

    ## Tests
    ${data.test}

    ## Questions
    You can email me at ${data.email}. 
    You can view more of my work at https://github.com/${data.github}.
    `;
    }
      
    module.exports = generateReadme;