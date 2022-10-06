#!/usr/bin/env node

const chalk = require('chalk');
const shelljs = require('shelljs');
const figlet = require('figlet');
const inquirer = require('inquirer');


ficheroOK = filePath => {
    console.log(chalk.white.bgGreen.bold(`¡Muy bien! Fichero correctamente creado en el directorio ${filePath} `))
}

const crearFichero = (nombreFichero, extension) => {
    const pathFichero = `${process.cwd()}/${nombreFichero}.${extension}`;
    shelljs.touch(pathFichero);
    return pathFichero;

}

const hacerPreguntas = () => {
    const preguntas = [
        {
            name: "FICHERO",
            type: "input",
            message: "¿Como ser va a llamar tu fichero? (sin la extencion)"
        },
        {
            name: "EXTENCION",
            type: "list",
            message: "¿Que extencion tiene tu fichero?",
            choices: [".rb", ".ts", ".js", ".java"],
            filter: function (val) {
                return val.split(".")[1];
            }
        }
    ];

    return inquirer.prompt(preguntas);
}

const iniciar = () => {
    console.log(chalk.green(
        figlet.textSync("Creador de ficheros", {
            font: 'AMC 3 Line',
            horizontalLayout: 'default',
            verticalLayout: 'default'
        })
    ));
}

const ejecutar = async () => {

    //Mostrar la informacion de la libreria en la cabecera, el titulo con figlet 
    iniciar();
    //Preguntas necesarias para crear el fichero, es decir, el nombre y la extencion
    const respuestas = await hacerPreguntas();
    const { FICHERO, EXTENCION } = respuestas;
    console.log(respuestas);
    //Creamos el fichero
    const pathFichero = crearFichero(FICHERO, EXTENCION);
    //Añadimos mensaje que fichero se ha creado correctamente
    ficheroOK(pathFichero)
};

ejecutar();

