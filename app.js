const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');

        const Engineer = require ('./lib/Engineer');
        const Manager = require ('./lib/Manager');
        const Intern = require ('./lib/Intern');

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "dream.html");


                    const render = require("./lib/htmlRenderer");

    const employees =[];


    const init = () => {

                inquirer.prompt([

                            {
                                    name: 'role',
                                    type: 'list',
                                    message: 'who am i speaking with? ' ,
                                    choices: ['Engineer', 'Manager', 'Intern']}
])
                    .then((res)=> {
                        if(res.role === 'Engineer') {addEngineer()}
                        else if (res.role === 'Manager') {addManager()}
                        else if (res.role === 'Intern') {addIntern()}
                    });
}

    
const invent = () => {
    inquirer.prompt([
        {
            type: 'confirm',
            message: 'Is this your crew?',
            name: 'build'
        }
    ])
        .then((res) => {
            if (res.build === true) {init();}
            else if (res.build === false) {theCrew();}
        });
}

        const addEngineer = () => {


            inquirer.prompt([{
                    name: 'name',
                    type: 'input',
                    message:'what is their name?', },
                
                    {
                        name: 'id',
                        type: "input",
                        messgae:'what is their ID number?'
                    },

                    {
                        name:'mail',
                        type:'input',
                        message:'what is their electronic mailing address?'
                    },
                    
                    {
                        name:'git',
                        type:'input',
                        message:'whats their Git.'
                    }

            ]) .then(addEng => {
                    const empAdd = new Engineer(addEng.name, addEng.id, addEng.mail, addEng.git);
                        employees.push(empAdd);
                        invent();
                });
                    }

                    
                    
                    const addManager = () => {
                    
                    inquirer.prompt([{
                        name: 'name',
                        type: 'input',
                        message:'what is their name?', },

                        {
                            name:'office',
                            type:'input',
                            message:'what is their office number?'
                        },
                    
                        {
                            name: 'id',
                            type: "input",
                            messgae:'what is their ID number?'
                        },
    
                        {
                            name:'mail',
                            type:'input',
                            message:'what is their electronic mailing address?'
                        }
    
                ]) .then(addMan => {
                        const empAdd = new Manager(addMan.name, addMan.id, addMan.mail, addMan.office);
                            employees.push(empAdd);
                            invent();
                    });
                        }


                        const addIntern = () => {


                            inquirer.prompt([{
                                name: 'name',
                                type: 'input',
                                message:'what is their name?', },
        
                                {
                                    name:'school',
                                    type:'input',
                                    message:'where did they go to school?'
                                },
                            
                                {
                                    name: 'id',
                                    type: "input",
                                    messgae:'what is their ID number?'
                                },
            
                                {
                                    name:'mail',
                                    type:'input',
                                    message:'what is their electronic mailing address?'
                                },

                                {
                                    name:'git',
                                    type:'input',
                                    message:'Whats their git?'
                                }
                        ]) .then(addInt => {
                                const empAdd = new Intern(addInt.name, addInt.school, addInt.id, addInt.mail, addInt.git);
                                    employees.push(empAdd);
                                    invent();
                            });
                                }
const theCrew = () => {
const stringToWrite = render(employees);
fs.writeFile(outputPath, stringToWrite, function (err) {
            if (err) {
                    throw err;
}
});
}
                                
                                init();
        
