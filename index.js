let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"] /* this is where our leads will be stored, an expty array*/
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn") /* we changed from "let" to "const" */
const ulEl = document.getElementById("ul-el") /*created to output the array/leads into an unordered list in our html*/



inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    /*myLeads as you can see is the variable above being assigned an array*/
    /*inputEl variable entered, with the addition of ".value" to the Push(). This pushes what is in the input box, into the Array*/
})

for (let i = 0; i < myLeads.length; i++) {
    ulEl.innerHTML += "<li>" + myLeads[i] + "</li> " /* inner.HTML used to replace .textContent. this will allow us to manipulate the element easier, by being able to add <li> into javascript, we can easily create a drop down list with bullets */
    //ulEl.textContent += myLeads[i] + "  "  /*for loop created to output the array, with the help of the newly created variable above - "ulEl".*/
}
