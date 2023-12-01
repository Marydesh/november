import { Triangle, Circle, Square } from './shapes.js'

const shapeTests = [
    ['Triangle', Triangle,(color, textColor ) =>`<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">


    <polygon points="100 30, 200 200, 0 200" fill="${this.color}"/>

 <text x="100" y="180" font-size="60" text-anchor="middle" fill="${this.textColor}">SVG</text>

</svg>`],
    ['Circle', Circle, (color, textColor ) => `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">


 <circle cx="150" cy="100" r="80" fill="${this.color}" />

 <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">SVG</text>

</svg>`],
    ['Square', Square, (color, textColor ) =>`<svg version="1.1"
    width="300" height="300"
    xmlns="http://www.w3.org/2000/svg">

    <rect width="100%" height="100%" fill="${this.color}" />

 <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">SVG</text>

</svg>`]
]

shapeTests.forEach(([name, Shape, svg]) => {
    let shape = new Shape('black', 'white')
    test(`${name}.render() returns a string of valid svg`, () => {
        expect(shape.render()).toBe(svg('black', 'white'));
    });
});

