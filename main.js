const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
const alertBox = document.querySelector('.alert-box');

const showAlert= (msg)=>{
    alertBox.innerHTML = msg;
    alertBox.classList.toggle('activeAlert');
    setTimeout(()=>{
        alertBox.innerHTML = "";
        alertBox.classList.toggle('activeAlert');
    },2000);
}


const addTask = ()=>{
    if(inputBox.value == ''){
        showAlert("Please Write Something First!");
    }else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
        listContainer.appendChild(li); 
        saveData();
    }
    inputBox.value = "";
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
})

const saveData = ()=>{
    localStorage.setItem("data",listContainer.innerHTML);
}

const loadData=()=>{
    listContainer.innerHTML = localStorage.getItem("data");
}