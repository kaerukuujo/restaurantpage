export function menuPage(){
    const mainBody = document.getElementById("mainBody");
    
    const menuBody = document.createElement("section");

    const menuHeader = document.createElement("h1");
    const menuHeaderText = document.createTextNode("Menu");
    menuHeader.appendChild(menuHeaderText);

    const menuList = document.createElement("ul");

    const menuListItem1 = document.createElement('li');
    const menuListItemText1 = document.createTextNode("Roasted Apple Cheesecake");
    menuListItem1.appendChild(menuListItemText1);

    const menuListItem2 = document.createElement('li');
    const menuListItemText2 = document.createTextNode("Chocolate Malted");
    menuListItem2.appendChild(menuListItemText2);

    const menuListItem3 = document.createElement('li');
    const menuListItemText3 = document.createTextNode("Burnt Orange Panna Cotta");
    menuListItem3.appendChild(menuListItemText3);

    const menuListItem4 = document.createElement('li');
    const menuListItemText4 = document.createTextNode("Steamed Pumpkin Cake");
    menuListItem4.appendChild(menuListItemText4);

    const menuListItem5 = document.createElement('li');
    const menuListItemText5 = document.createTextNode("Mocha Praline Sundae");
    menuListItem5.appendChild(menuListItemText5);

    const menuListItem6 = document.createElement('li');
    const menuListItemText6 = document.createTextNode("Meringue Napoleon");
    menuListItem6.appendChild(menuListItemText6);

    const menuListItem7 = document.createElement('li');
    const menuListItemText7 = document.createTextNode("Seasonal Fruit");
    menuListItem7.appendChild(menuListItemText7);

    menuList.appendChild(menuListItem1);
    menuList.appendChild(menuListItem2);
    menuList.appendChild(menuListItem3);
    menuList.appendChild(menuListItem4);
    menuList.appendChild(menuListItem5);
    menuList.appendChild(menuListItem6);
    menuList.appendChild(menuListItem7);

    menuBody.appendChild(menuHeader);
    menuBody.appendChild(menuList);

    mainBody.appendChild(menuBody);
}