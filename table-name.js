const inputforchange = document.getElementById("table-name-input");
const name = document.getElementById("main-table-name");

const completer = document.getElementById("completer");

const namechanger = document.getElementById("namechanger");

let nowChanges = false;

function ChangeTableName()
{
    
    if(nowChanges)
    {
        completer.style.display = "none";
        inputforchange.value = name.innerHTML;
        inputforchange.style.display = "none";
        namechanger.innerHTML = "<li class='fas fa-edit'></li>";
        nowChanges = false;
    }
    else{
        completer.style.display = "block";
        namechanger.innerHTML = "<li class='far fa-times-circle'></li>";
        inputforchange.value = name.innerHTML;
        inputforchange.style.display = "block";
        nowChanges = true;
    }

}

function SaveTableNameChanges()
{
   name.innerHTML = inputforchange.value;
   
   completer.style.display = "none";
   inputforchange.style.display = "none";
   namechanger.innerHTML = "<li class='fas fa-edit'></li>";
   nowChanges = false;
}