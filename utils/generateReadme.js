const generateReadme = data => {
    return `# ${data.title}
    ![Github licence](http://img.shields.io/badge/license-${data.license}-blue.svg)
        
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

    ## Usage 
    ${data.usage}

    ## License 
    This project is license under ${data.license}

    ## Contributions 
    ${data.contributors}

    ## Tests
    ${data.test}

    ## Questions
    If you have any questions about this project, please email at ${data.email}. 
    You can view more of my work at https://github.com/${data.github}.
    `;
    }
      
    module.exports = generateReadme;