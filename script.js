const limitInput = document.getElementById('limit-input');
const startButton = document.getElementById("start-btn");
const evenNumberDiv = document.getElementById("even-number");
const oddNumberDiv = document.getElementById("odd-number");

startButton.addEventListener("click", ()=> {
    const limit = parseInt(limitInput.value);

    //memastikan inpu adalah bilangan positif//
    if(isNaN(limit) || limit <= 0) {
        alert("please enter a valid positive number.");
        return;
    }

    //kosongkan tampilan sebelumnya//

    oddNumberDiv.textContent = "odd number: ";
    evenNumberDiv.textContent = "even number: ";

    //looping dari 1 sampai limit//

    for(let i = 1; i <= limit; i++ )
    if(i % 2 == 0){
    evenNumberDiv.textContent += i + " ";
    }else{
    oddNumberDiv.textContent += i + " ";
    }

    });