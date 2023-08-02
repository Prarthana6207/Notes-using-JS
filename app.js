console.log("hello");
showNotes();
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click",function(e){

    let addTxt = document.getElementById("addTxt");
    let addTitle = document.getElementById("addTitle");
    let notes = localStorage.getItem("notes");
    if(notes== null){
        noteObj =[];
    }
    else{
        noteObj =JSON.parse(notes);
    }
    let myObj = {
        title: addTitle.value,
        text: addTxt.value
      }
    noteObj.push(myObj);
    localStorage.setItem("notes",JSON.stringify(noteObj));
    addTxt.value ="";
    addTitle.value ="";
    console.log(noteObj);
    showNotes();
})
//function to show element from local storage
function showNotes(){
    let notes = localStorage.getItem("notes");
    if(notes== null){
       noteObj =[];
    }
    else{
        noteObj =JSON.parse(notes);
    }
    
    let html ="";
    noteObj.forEach(function(element, index){
        html +=  `<div class="noteCard card my-2 mx-2" style="width: 15rem">
        <div class="card-body">
          <h5 class="card-title">${element.title}</h5>
          <p class="card-text">
            ${element.text}
          </p>
          <button id="${index}" onclick="deleteNotes(this.id)" class="btn btn-primary"> Delete Note</button>
        </div>
      </div>`
    });
    let notesElm = document.getElementById('notes');
    if(noteObj.length!=0){
        notesElm.innerHTML = html; 
    }
    else{
        notesElm.innerHTML=`Please use above"ADD NOTES" for adding your important details or anything you want`;
    }
}

 //function to delete notes
 function deleteNotes(index){
    let notes = localStorage.getItem("notes");
    if(notes== null){
        noteObj =[];
    }
    else{
        noteObj =JSON.parse(notes);
    }
    noteObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(noteObj));
    showNotes();
}

let search = document.getElementById ('searchTxt');

search.addEventListener("input",function(){
    let inputVal = search.value.toLowerCase();
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from (noteCards).forEach(function (element) {
        let cardTxt= element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display ="block";
        }
        else{
            element.style.display ="none";
        }
        
    })
     
}) 

// function deleteNotes(index){
//     let notes = localStorage.getItem("notes");
//     if(notes== null){
//         noteObj =[];
//     }
//     else{
//         noteObj =JSON.parse(notes);
//     }
//     noteObj.splice(index,1);
//     localStorage.setItem("notes",JSON.stringify(noteObj));
//     showNotes();
// }