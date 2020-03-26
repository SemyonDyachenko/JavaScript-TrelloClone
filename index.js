const cardSection = document.getElementById("cards");
const cardAddInput = document.getElementById("input-for-add-card");
const tables = document.getElementById("tables");


let themeMode = "light";

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

    return card;
    
}

function addCard()
{
    if(cardAddInput.value)
    {
    cardSection.appendChild(createCard(cardAddInput.value));
    cardAddInput.value = ''; // clear input value for next card
    }
    else 
    {
        alert("To add a card enter text");
    }
}

function changeTheme()
{
    
}