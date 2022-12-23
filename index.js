let myLeads = [] /* this is where our leads will be stored, an expty array*/
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn") /* we changed from "let" to "const" */
const ulEl = document.getElementById("ul-el") /*created to output the array/leads into an unordered list in our html*/
const deleteBtn = document.getElementById("delete-btn") //we are making the delete button functional by assigning the element tro a variable.
//Local Storage is like a "small database"
//localStorage.clear()
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))// leadsFromLocalStorage created to get the leads from the localStorage
const tabBtn = document.getElementById("tab-btn") //connecting to the Save Tab button created in HTML


if (leadsFromLocalStorage) { //this basically states "if there are any values in "leadsFromLocalStorage", then myLeads = those values and can be rendered. if empty, or "null", no need to render."
    myLeads = leadsFromLocalStorage
    render(myLeads)
}



tabBtn.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {// this function allows us to save a tab
        /* chrome.tabs.query isa an API. It is asking 
        chrome - active:true - which tab are we on? This is the one I want to save
                currentWindow: true - which window is currently open? This is the one I want
                function(tabs): this function is triggered when chome has foudn the tabs above. */
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})


function render(leads) {
    let listItems = ""   /*createad to assign the output. which will be used in the innerHTML below */
    for (let i = 0; i < leads.length; i++) {
        listItems += `   
            <li>
            <a target='_blank' href='${myLeads[i]}'>
                ${myLeads[i]}
            </a>
            </li>
        `
        /* the above is called Template Strings in JS. It is a strong tool that allows us to apply HTML code within JS, and have multiple lines */
        /*template strings are the same as "template literals" */
        /*back tick at the beginning and end to create the links*/
        /* "_blank" is waht creates the "new Tab". */
        /* not sure why the $ is used - **look this up** */

        /*(2) this also was what we initially had, but have since moved to turning the leads into link as above
         //listItems += "<li>" + myLeads[i] + "</li>"
         /* (1) This below is what we initially used and it worked, but we simplified it with listIems variable*/
        // ulEl.innerHTML += "<li>" + myLeads[i] + "</li> " 
        /* inner.HTML used to replace .textContent. this will allow us to manipulate the element easier, by being able to add <li> into javascript, we can easily create a drop down list with bullets */
        //ulEl.textContent += myLeads[i] + "  "  /*for loop created to output the array, with the help of the newly created variable above - "ulEl".*/
    }
    ulEl.innerHTML = listItems
}


deleteBtn.addEventListener("dblclick", function () {  //"dblclick" means double click and is a function an even in JS.
    localStorage.clear() //this clears the local storage
    myLeads = [] //this clear the array - "empty array"
    render(myLeads) //this will "empty out the dom". Since the myLeads above is empty, when the renderLeads function below is rendered, myLeads in the for loop is now empty, thus produces an empty output.
})


inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    /*myLeads as you can see is the variable above being assigned an array*/
    /*inputEl variable entered, with the addition of ".value" to the Push(). This pushes what is in the input box, into the Array*/
    inputEl.value = "" /* this is a simply way of clearing out the input box, when the save button is clicked. It includes " " which is basically an "empty string". */
    localStorage.setItem("myLeads", JSON.stringify(myLeads)) /* ("key", "value") - This is saving the leads to Local Storage so the results do not disappear ever time.*/
    render(myLeads) /* this is created to save the text to the list and array when the button is clicked */



    //console.log(localStorage.getItem("myLeads")) // To verify that the localStorage.setItem works:
})

