
class Shape {
    constructor(color, text, textColor) {
        this.color = color
        this.text = text
        this.textColor = textColor
    }
}

class Square extends Shape {
    constructor(color, text, textColor) {
        super(color, text, textColor)
    }

    render() {
        return `<svg version="1.1"
        width="300" height="300"
        xmlns="http://www.w3.org/2000/svg">

        <rect width="100%" height="100%" fill="${this.color}" />
   
     <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">SVG</text>
   
   </svg>`
        // return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="${this.color}"/><text x="50%" y="50%" alignment-baseline="middle" text-anchor="middle" font-size="30" fill="${this.textColor}">${this.text}</text></svg>`
    }
}

class Triangle extends Shape {
    constructor(color, text, textColor) {
        super(color, text, textColor)
    }

    render() {
        return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">

   
        <polygon points="100 30, 200 200, 0 200" fill="${this.color}"/>
   
     <text x="100" y="180" font-size="60" text-anchor="middle" fill="${this.textColor}">SVG</text>
   
   </svg>`
        // return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="50,5 95,95 5,95" fill="${this.color}"/><text x="50%" y="50%" alignment-baseline="middle" text-anchor="middle" font-size="30" fill="${this.textColor}">${this.text}</text></svg>`
    }
}


class Circle extends Shape {
    constructor(color, text, textColor) {
        super(color, text, textColor)
    }

    render() {
        return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">

   
     <circle cx="150" cy="100" r="80" fill="${this.color}" />
   
     <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">SVG</text>
   
   </svg>`
        // return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="50%" cy="50%" r="50%" fill="${this.color}"/><text x="50%" y="50%" alignment-baseline="middle" text-anchor="middle" font-size="30" fill="${this.textColor}">${this.text}</text></svg>`
    }
}

export {
    Square, Circle, Triangle
}