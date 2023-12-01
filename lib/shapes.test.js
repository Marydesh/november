import { Triangle, Circle, Square } from './shapes.js'

const shapeTests = [
    ['Triangle', Triangle, (color,text, textColor) => {
        return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <polygon points="100 30, 200 200, 0 200" fill="${color}"/>
        <text x="100" y="180" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
        </svg>`;
    }],
    ['Circle', Circle, (color, text, textColor) => {
        return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${color}"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
        </svg>`;
    }],
    ['Square', Square, (color,text, textColor) => {
        return `<svg version="1.1"
        width="300" height="300"
        xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="${color}"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
        </svg>`;
    }]
];

shapeTests.forEach(([name, Shape, svg]) => {
    let shape = new Shape('black', 'abc', 'white');
    test(`${name}.render() returns a string of valid svg`, () => {
        expect(shape.render()).toBe(svg('black','abc', 'white'));
    });
});

