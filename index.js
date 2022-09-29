//Área do Triângulo
function TriangleArea(){
    const base = parseFloat(prompt("Input the value of triangle base: "))
    const height = parseFloat(prompt("Input the value of triangle height: "))
    return base * height / 2
}

//Área do Retângulo
function RectangleArea(){
    const base = parseFloat(prompt("Input the value of rectangle base"))
    const height = parseFloat(prompt("Input the value of rectangle height"))
    return base * height
}

//Área do Quadrado
function SquareArea(){
    const side = parseFloat(prompt("Input the value of square side: "))
    return side * side
}

//Área do Trapézio
function TrapezeArea(){
    const lowbase = parseFloat(prompt("Input the value of trapeze lowbase: "))
    const highbase = parseFloat(prompt("Input the value of trapeze highbase: "))
    const height = parseFloat(prompt("Input the value of trapeze height: "))
    return (highbase + lowbase) * height / 2 
}

//Área do Círculo

function CircleArea(){
    const radius = parseFloat(prompt("Input the value of circle radius: "))
    return (3.14 * radius * radius)
}

//Menu

function Menu(){
    return prompt(
        "Geometry Calculator\n" +
        "1. Calculate Triangle Area\n" +
        "2. Calculate Rectangle Area\n" +
        "3. Calculate Square Area\n" +
        "4. Calculate Trapeze Area\n" +
        "5. Calculate Circle Area\n" +
        "6. Exit\n"
    )
}

// NavBar

function run(){
    let option = ""

    do {
        option = Menu()
        let Result

        switch (option) {
            case "1":
                Result = TriangleArea()
                break
            case "2":
                Result = RectangleArea()
                break
            case "3":
                Result = SquareArea()
                break
            case "4":
                Result = TrapezeArea()
                break
            case "5":
                Result = CircleArea()
                break
            case "6":
                alert("Leaving...")
                break
            default:
                alert("Invalid Option!")
                break
            }

            if (Result){
                alert("Result: " + Result)
            }

        }while(option !== "6");
    }
run()

           

