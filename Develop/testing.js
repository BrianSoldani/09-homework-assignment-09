
const fs = require("fs");
const inquirer = require("inquirer");


inquirer
  .prompt([
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
      },
      {
        type: "input",
        message: "What is your email?",
        name: "email"
      },
      {
        type: "input",
        message: "What is your project title?",
        name: "title"
      },
      {
        type: "input",
        message: "Write a brief description of the project.",
        name: "description"
      },
      {
        type: "input",
        message: "Which license do you require?",
        name: "license"
      },
      {
        type: "input",
        message: "What command(s) should be run to install dependencies?",
        name: "installation"
      },
      {
        type: "input",
        message: "What command(s) should be run for testing?",
        name: "tests"
      },
      {
        type: "input",
        message: "What should the user know about using the repo?",
        name: "usage"
      },
      {
        type: "input",
        message: "What should the user know about contributing the repo?",
        name: "contributions"
      },  
  ])
  .then(function (response) {
    const newFile = 
    `# ${response.title}
    
# Description: 

${response.description}
    
# Table of Contents: 

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)
* [Tests](#tests)
* [Questions](#questions)
    
## Installation: 

To install the needed dependencies, please run the following command: ${response.installation}
    
## Usage: 
    
Special instructions for usage: ${response.usage}
    
## License: 
    
This project is licensed under the ${response.license} license(s).
    
## Contributing: 

${response.contributing}
    
## Tests: 

Be sure to run the following test(s): ${response.tests}
    
## Questions: 
    
If you have any questions, please reach out to ${response.username} @ ${response.email}`

    fs.writeFile("README.md", newFile, function (err) {
      if (err) {
        return console.log(err);
      }

      console.log("This might have worked!!");
    });
    console.log(response);
  });




