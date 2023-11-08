colors = ["red", "blue"]

function createBoxEntity(color) {

    const entity = document.createElement("entity");
    let box = document.createElement("a-box")
    box.setAttribute("position") = "-1 0.5 -3"
    box.setAttribute("rotation") = "0 45 0"
    box.setAttribute("color") = color
    entity.appendChild(box)

    let box2 = document.createElement("a-box")
    box2.setAttribute("position") = "-1 0.5 -3"
    box2.setAttribute("rotation") = "0 15 0"
    box2.setAttribute("color") = color
    entity.appendChild(box2)
    
    return entity
}




