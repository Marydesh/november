// const inquirer = require("inquirer")
import inquirer from 'inquirer'
import validateColor from 'validate-color'
import {
    Triangle, Circle, Square
} from './lib/shapes.js'
const shapes = {
    'square': Square,
    'triangle': Triangle,
    'circle': Circle
}
import { writeFileSync } from 'fs'
// https://www.npmjs.com/package/inquirer
// https://www.npmjs.com/package/validator
// https://www.npmjs.com/package/chalk
// node --watch app
// npm uninstall validator validate color
// npm i -D jest

// npm i @babel/plugin-transform-modules-commonjs
function colorValidator(input) {
    if (validateColor.default(input)) {
        return true
    } else return "Invalid color"
}
const qs = [
    {
        name: 'text',
        message: 'enter three characters for your logo',
        validate: (input) => {
            if (input.length===3) {
                return true 
            } else {
                return "Must be exactly 3 characters."
            }
        }
    },
    {
        name: 'textColor',
        message: 'enter the text color',
        validate: colorValidator
    },
    {
        name: 'shape',
        message: 'choose the shape',
        type: 'list',
        choices: [
            'triangle',
            'square',
            'circle'
        ]
    },
    {
        name: 'shapeColor',
        message: 'enter a shape color',
        validate: colorValidator
    }
]

inquirer.prompt(qs)
    .then(answers => {
        let Shape = shapes[answers.shape]
        let result = new Shape(
            answers.shapeColor,
            answers.text,
            answers.textColor
        )
        let svg = result.render()
        writeFileSync('./lib/shape.svg', svg)
    })