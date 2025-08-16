let calc = document.getElementById("calc")
let area = document.getElementsByClassName("area")[0]


calc.addEventListener("click", e => {
    if (e.target.nodeName == "BUTTON") {
        switch (e.target.textContent) {
            case "C":
                clear();
                break;
            case "DEL":
                DEL();
                break;
            case "=":
                evaluate();
                break;
            default:
                addToArea(e.target.textContent);

        }
    }
});



function clear() {
    area.textContent = ""
}



function addToArea(value) {
    area.textContent += value
}

function DEL(){
    let content = area.textContent;
    area.textContent = content.substring(0, content.length - 1);
}

function evaluate() {
    try {
        let result = math.evaluate(area.textContent);
        area.textContent = result;
    } catch (error) {
        area.textContent = "Invalid Operation";
        console.error("Error evaluating expression:", error);
    }   }




