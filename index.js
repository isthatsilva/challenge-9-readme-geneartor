const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateReadme');

const questions = [
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "github"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "Describe your project.",
        name: "description"
    },
    {
        type: "list",
        message: "Choose a license for your project.",
        name: "licenses", 
        choices: ["MIT", "Apache2.0", "GNU", "Mozilla-Public", "None"]
    },
    {
        type: "input",
        message: "What are the steps required to install your project?",
        name: "installation"
    },
    {
        type: "input",
        message: "What tests are available for your application?",
        name: "test"
    },
    {
        type: "input",
        message: "What are the guidelines for using this repo?",
        name: "benefits"
    },
    {
        type: "input",
        message: "How can a user contribute to the repo?",
        name: "contributions"
    },

];

function writeToFile(filename, data) {
    fs.writeFile(filename, data, function(err) {
        console.log(filename)
        console.log(data)

        if (err) {
            return console.log(err)
        } else {
            console.log("README success")
        }
    })
};

function init() {
    inquirer.prompt(questions)
        .then(function(data) {
            writeToFile("README.md", generateReadme(data));
            console.log(data)
        })
};

init();