const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addItem(){
    if(inputBox.value === ''){
        alert('Add the text!')
    } else{
        const li = document.createElement("li")
        li.textContent = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    inputBox.value = "";
    saveData();
}


// Listen for any click anywhere inside the entire list section. When a click happens, give me the click details as e
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked"); // user clicked a list ite. check its css classes for class called checked. If it already has the class 'checked', remove it. If it doesn't, add it.
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove(); //find its parent element (the <li> it lives inside) and completely erase it from the web page.
        saveData();
    }
}, false);

//saving the data in local storage
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showList(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showList();