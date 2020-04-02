const cardSection = document.getElementById("cards");
const cardAddInput = document.getElementById("input-for-add-card");
const tables = document.getElementById("tables");



//part3--
const cardSettings = document.getElementById("card-settings");
const tableName = document.getElementById("main-table-name");
let nowEditCard = false;


//part2
function createCard(text)
{

    const label = document.createElement("p");
    label.className = "cardLabel";
    label.innerText = text;

    const editLabel = document.createElement("a");
    editLabel.className = "labelEditor";

    const card = document.createElement("div");
    card.className = "card";

    card.appendChild(label);
    card.append(editLabel);

    //part3
    addCardEvent(card);

    return card;
    
}

//---part3----
function addCardEvent(card)
{
    const label = card.querySelector('.cardLabel');

    label.addEventListener("click",editCard);
}

//part2
function addCard()
{
    

    if(cardAddInput.value)
    {
    cardSection.appendChild(createCard(cardAddInput.value));
    cardAddInput.value = ''; // clear input value for next card
    }
    else 
    {
        alert("To add a card enter text in input");
    }
}

//part3---------
function editCard(event)
{
    
    const card = this.parentNode;
    const label = card.querySelector(".cardLabel");

    const editPanelLabel = cardSettings.querySelector("#cardLabelheader");
    const editPanelListInfo = cardSettings.querySelector("#card-list-info");
    const editPanelInput = cardSettings.querySelector("#input-for-change-card-label");
    
    
    card.classList.toggle("nowediting");
    const isEditing = card.classList.contains("nowediting");


    const saveButton = cardSettings.querySelector("#saved-card-changes");
    const deleteButton = cardSettings.querySelector("#delete-card");
    const closeButton = cardSettings.querySelector("#close-edit-panel");


    if(isEditing)
    {
    saveButton.addEventListener("click",function () {
        document.querySelector(".nowediting").querySelector(".cardLabel").innerText = editPanelInput.value;
        card.classList.remove("nowediting");
        CloseEditPanel();
     
    });

    deleteButton.addEventListener("click",function() {
        if(isEditing)
        {
            deleteCard(document.querySelector(".nowediting"));
            card.classList.remove("nowediting");
            CloseEditPanel();
        }
    });

    closeButton.addEventListener("click",function() {
        card.classList.remove("nowediting");
        CloseEditPanel();
    });
    }
    

    editPanelListInfo.innerHTML = "in list " + tableName.innerHTML;
    editPanelLabel.innerHTML = label.innerText;
    editPanelInput.value = label.innerText;

    
    
    ShowEditPanel();
    
}

//part3
function deleteCard(card)
{
    cardSection.removeChild(card);
}


//part3
function ShowEditPanel()
{
    if(nowEditCard) {
        cardSettings.style.display = "none";
        nowEditCard = false;
    }
    else {
        cardSettings.style.display = "block";
        nowEditCard = true;
    }
}

//part3
function CloseEditPanel()
{
    cardSettings.style.display = "none";
    nowEditCard = false;
}



//part4-------
function changeTheme()
{
    
}

function showSettingsBar()
{

}