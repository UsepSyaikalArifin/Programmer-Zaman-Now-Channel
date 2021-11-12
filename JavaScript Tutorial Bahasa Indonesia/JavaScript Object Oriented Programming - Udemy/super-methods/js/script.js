// 1. Bentuk ke - 1
class Shape{
    paint(){
        console.info(`Paint Shape`)
    }
}

class Circle extends Shape{
    paint(){
        console.info(`Paint Circle`)
    }
}

const circle = new Circle()
circle.paint()

// 2. Bentuk ke - 2
class Shape2{
    paint(){
        document.writeln(`<p>Paint Shape</p>`)
    }
}
class Circle2 extends Shape2{
    paint(){
        super.paint()
        document.writeln(`<p>Paint Circle</p>`)
    }
}

const circle2 = new Circle2()
circle2.paint()