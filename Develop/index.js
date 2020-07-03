const fs = require("fs");
const axios = require("axios")
const inquirer = require("inquirer");
// const generateMarkdown = require ("./utils/generateMarkdown")

// array of questions for user
const questions = [

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
        message: "What command should be run to install dependencies?",
        name: "install"
      },
      {
        type: "input",
        message: "What command should be run for testing?",
        name: "test"
      },
      {
        type: "input",
        message: "What should the user know about using the repo?",
        name: "repo"
      },
      {
        type: "input",
        message: "What should the user know about contributing the repo?",
        name: "repo"
      }  
    ];
    


// function to write README file
function writeToFile(fileName, data) {
    
}

// function to initialize program
function init() {
    
}

// function call to initialize program
init();
