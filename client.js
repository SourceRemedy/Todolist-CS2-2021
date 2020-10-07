console.log('Hello World!')

//let name = 'John'
//create variable for button element
let $button = document.getElementById('addTodo')
let $textBox = document.getElementById('userInput')
let $list = document.getElementById('list')
//set function as click handler
$button.onclick = addTodo

function addTodo() {
    console.log('button clicked')
    $button.style.backgroundColor = 'red'

    //get text from textbox
    let newTodoText = $textBox.value
    //create new list item
    let $newTodo = document.createElement('li')
    $newTodo.innerHTML = newTodoText
    //put list item in list
    $list.append($newTodo)


    
}
//making h1 change to yellow
    //variable for h1
    let $header = document.getElementById('header')
    //connect changeColor function as click handler
    $header.onclick = changeColor
    //define changeColor function

    function changeColor() {
        //Set color (text)  of h1 to yellow
        $header.style.color = 'yellow'
    }