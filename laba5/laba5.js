const buttonElement = document.getElementById('change')
const squareDiv = document.getElementById('square')
buttonElement.addEventListener('click', function(){
    squareDiv.style= `background-color: ${getColor()};`
})