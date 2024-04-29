function setActive(e){
    let active = e.target;
    const list = document.getElementsByTagName("li"); 
    for(let li of list){
        li.className = "";
    }
    active.className = "active";
}

let ul = document.getElementsByTagName("ul");
ul[0].addEventListener('click', setActive);