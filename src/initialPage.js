export function initialSetup(){
    const mainBody = document.getElementById('mainBody');

    const mainBody2 = document.createElement("section");
    
    const mainBodyHeader = document.createElement("h1");
    const h1Content = document.createTextNode("Fancy Restaurant");
    mainBodyHeader.appendChild(h1Content);
    
    const mainBodyImg = document.createElement('img');
    mainBodyImg.setAttribute("src", "https://www.cornerhouserestaurants.co.uk/templates/yootheme/cache/homepage-07-b0e63288.jpeg");
    
    const mainBodyCopy = document.createElement('p');
    const pContent = document.createTextNode(
        "Ikoyi builds its own spice-based cuisine around British micro-seasonality: vegetables slowly grown for flavour, sustainable line-caught fish, and aged native beef. Our kitchen serves guests an interpretation of produce in its optimal state, harnessing as much flavour as possible while respecting the true nature of the ingredient. The foundation for our menu is a vast collection of spices with a focus on sub-Saharan West Africa, which we have sourced with utmost care since opening."
    );
    mainBodyCopy.appendChild(pContent);
    
    mainBody2.appendChild(mainBodyHeader);
    mainBody2.appendChild(mainBodyImg);
    mainBody2.appendChild(mainBodyCopy);
    
    mainBody.appendChild(mainBody2);
};