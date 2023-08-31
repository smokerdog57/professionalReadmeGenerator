# Title
Professional Readme Generator

## Description

This command line application dynamically creates a professional README based on user input. App input uses the inquirer application and the README format is based on the github professional readme guide.

## Installation

1. launch microsoft visual studio Code app
2. enter cli:  cd ~/bootcamp/homework
3. enter cli:  mkdir professionalReadmeGenerator
4. enter cli:  cd professionalReadmeGenerator
5. enter cli:  npm init
6. enter cli:  npm i inquirer@8.2.4
7. enter cli:  mkdir assets
8. enter cli:  mkdir assets/images
9. enter cli:  mkdir assets/utils
10. copy index.js to /professionalReadmeGenerator
11. copy generateMarkdown.js to /utils
12. enter cli: node index.js to execute the app

## Usage

When you execute the app (node index.js) at the command line, you will be asked to input information.  There are three types of inputs:  (1) free form text  (2) editor and (3) checkbox.  For (1) free form text, enter the text to answer the question. For (2) editor, hit enter and an editor will be launched.  Type the steps to answer the question and save/exit.  For (3) checkbox, click space to check only if item applies and then hit down arrow to go to the next applicable item and click space.  That is, click all that apply, and enter. Once you have answered all questions, the app will create a file entitled README.md.  Using the ms Visual Studio you can preview your README.md.

## Contributing

1. Sandy Smith (tutor):  Sandy helped me understand the challenge readme instructions.

## Tests

1. Test001: Navigate to professionalReadmeGenerator directory and verify all directories have been created:  assets, assets/images, assets/utils.
2. Test002: Navigate to professionalReadmeGenerator directory and verify the following files/folders are present:  .gitignore, index.js, package-lock.json, package.json and the folder node_modules.
3. Test003: Navigate to professionalReadmeGenerator directory. Execute the cli command node index.js.  Answer all questions and ensure there are no errors.
4. Test004: Navigate to professionalReadmeGenerator directory. Preview the README.md file and ensure there are no errors.
5. Test005: Click on the links to ensure they are operational.














