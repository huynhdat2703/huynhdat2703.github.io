var countList = 0;

function getCurrentDay() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = dd + '/' + mm + '/' + yyyy;
    document.getElementById("currentDay").innerHTML = today;
}

function checkKeyCode(event) {
    if (event.keyCode === 13) {
        addNewNote();
    }
}

function addNewNote() {
    var newNote = document.getElementById("newNoteText").value;
    if (newNote === "") {
        alert("New note is empty!");
    }
    else {
        var list = document.getElementById("listNote");
        var newItem = document.createElement("li");
        var newButton = document.createElement("button");
        var newSpan = document.createElement("span");
        newItem.appendChild(document.createTextNode(newNote));

        newItem.className = "list-group-item";

        newItem.id = "noteID_" + countList++;

        newButton.className = "btn btn-danger";
        newButton.id = newItem.id;
        newButton.innerHTML += "<i class='far fa-trash-alt'></i>"
        newButton.addEventListener("click", function () {
            removeNote(newButton.id);
        });

        newSpan.appendChild(newButton);
        newItem.appendChild(newSpan);
        list.appendChild(newItem);
        console.log(newItem.id);
    }
    document.getElementById("newNoteText").value = "";

}

function removeNote(id) {
    document.getElementById("listNote").removeChild(document.getElementById(id));
}

function removeAllNote() {
    document.getElementById("listNote").innerHTML = "";
    countList = 0;
}