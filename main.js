let count = 0;
let numberOfPeople = [];


countEl = document.getElementById("count-el");
saveEl = document.getElementById("save-el");
errorEl = document.getElementById("error-el");


function increment(){
    count += 1;
    countEl.textContent = count;

    errorEl.textContent = "";
}

function reset(){
    count = 0;
    countEl.textContent = count;
    
    numberOfPeople = []
    saveEl.textContent = numberOfPeople;
 
    errorEl.textContent = null;
}

function save(){

  

    if (count > 0){
        numberOfPeople.push(count);

        saveEl.textContent += numberOfPeople.slice(-1) + " - ";

    } else {
        errorEl.textContent = "ADD PEOPLE FIRST!! DAMN bro!!"
    }

    
    
    

    count = 0;
    countEl.textContent = count
    
}