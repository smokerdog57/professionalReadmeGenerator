const fs = require('fs');
const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'checkbox',
            name: 'stack',
            message: 'What languages do you know?',
            choices: ['html','css','js','nodejs','sql']
        },
        {
            type: 'list',
            name: 'contact',
            message: 'What is your preferred contact method?',
            choices: ['email','phone','telekenisis']
        }
    ])
.then ((data) => {
    const filename = `${data.name.toLowerCase().split(' ').join('')}.json`
    fs.writeFile(filename,JSON.stringify(data,null,'\t'),(err) => {
        if (err) {
            console.log(`Write file error: ${err}`)
        }
        else {
            console.log('Success')
            fs.readFile(filename,'utf-8',(err,data) => {
                if (err) {
                    console.log(`Read error: ${err}`)
                }
                else {
                    console.log(data)
                }
            })         
        }
    })
})