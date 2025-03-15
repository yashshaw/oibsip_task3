const title = document.getElementById("title");
const desc = document.getElementById("desc");
const listContainer = document.getElementById("task-list");


function saveTask(){
    if(title.value == ""){
        alert("Please fill the title of task.");
    }else{
        let li = document.createElement("li");
        let myTitleP = document.createElement("p");
        let myDescP = document.createElement("p");
        myTitleP.innerHTML = title.value;
        myTitleP.classList.toggle("mytitle")
        myDescP.innerHTML = desc.value;
        myDescP.classList.toggle("mydesc");
        li.appendChild(myTitleP);
        li.appendChild(myDescP);
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "&#10008;";
        li.appendChild(span);
    }
    title.value = "";
    desc.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("Checked");
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
}, false);


function saveData(){
    localStorage.setItem("toDoWebapp", listContainer.innerHTML);
}

function displayTask(){
    // listContainer.innerHTML = localStorage.getItem("toDoWebapp");
}
displayTask();