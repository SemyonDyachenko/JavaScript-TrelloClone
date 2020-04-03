const settingsBar = document.getElementById("settings");

const settingsButton = document.getElementById("settings-button");

let barIsOpen = false;
let nowTheme = "light";

settingsButton.addEventListener("click",openSettingsBar);
settingsButton.addEventListener("click",changeTheme);

function openSettingsBar()
{
    if(!barIsOpen)
    {
        settingsBar.style.marginRight = "0px";
        settingsBar.style.transition = "0.4s";
        barIsOpen = true;
    }
    else {
        settingsBar.style.marginRight = "-300px";
        settingsBar.style.transition = "0.4s";
        barIsOpen = false;
    }
}

function changeTheme()
{
    if(nowTheme == "light")
    {
        nowTheme = "dark";
        
    }
    else if(nowTheme == "dark")
    {
        nowTheme == "light"; 
        
    }
}