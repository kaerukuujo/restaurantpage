export function contactUs(){
    const mainBody = document.getElementById("mainBody");

    const mainBody2 = document.createElement("section");

    const contactUsHeader = document.createElement('h1');
    const contactUsHeaderText = document.createTextNode("Contact Us");
    contactUsHeader.appendChild(contactUsHeaderText);

    const contactUsText = document.createElement('p');
    const contactUsTextContent = document.createTextNode('Have a question? find us at the following places/numbers etc');
    contactUsText.appendChild(contactUsTextContent);

    const contactUsNumber = document.createElement('p');
    const contactUsNumberContent = document.createTextNode("071326371811");
    contactUsNumber.appendChild(contactUsNumberContent);

    mainBody2.appendChild(contactUsHeader);
    mainBody2.appendChild(contactUsText);
    mainBody2.appendChild(contactUsNumber);

    mainBody.appendChild(mainBody2);
}