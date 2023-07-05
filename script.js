const box = document.getElementById("inbox");
const list = document.getElementById("task");

function add() {

    if (box.value== '') {
        alert("Please enter a task");
    }
    else
    {
      let li = document.createElement("li");
      let span = document.createElement("span");
      li.innerText = box.value;
      list.append(li);
      box.value="";
      span.innerHTML = "&#10060";
      li.append(span);
      Savedata();

    }
        
    }

    list.addEventListener("click", function (e){
     if (e.target.tagName === "LI") 
     {
        e.target.classList.toggle("checked");
        Savedata();

     }
     else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      Savedata();
     }
      
    }, false);

function Savedata() {
  
    localStorage.setItem("data", list.innerHTML);
  
}

function Loaddata() {
    list.innerHTML = localStorage.getItem("data");
}

Loaddata();    
  