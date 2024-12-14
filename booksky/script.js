// selecting popupbox, popup-overlay, button

var popupoverlay = document.querySelector(".popup-overlay")
var popup_box = document.querySelector(".popupbox")
var addpopupbutton = document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click", function(){
    popupoverlay.style.display = "block"
    popup_box.style.display = "block"
})


//select cancel
var cancelbutton = document.getElementById("cancel-book")
cancelbutton.addEventListener("click", function(event){
    event.preventDefault()
    popupoverlay.style.display = "none"
    popup_box.style.display = "none"
})


//selecting container, add-book, book-title-input, book-author-input, book-description-input

var container = document.querySelector(".container")
var addbook = document.getElementById("add-book")
var booktitle = document.getElementById("book-title-input")
var bookauthor = document.getElementById("book-author-input")
var bookdesc = document.getElementById("book-description-input")

addbook.addEventListener("click", function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class", "book-container")
    div.innerHTML = `<h2>${booktitle.value}</h2>
                     <h5>${bookauthor.value}</h5>
                     <p>${bookdesc.value}</p>
                     <button onclick = "deletebook(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display = "none"
    popup_box.style.display = "none"

})


function deletebook(event)
{
    event.target.parentElement.remove()
}