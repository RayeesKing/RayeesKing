// select the needed items

var popup_box=document.querySelector('.popup-box')
var popup_overlay=document.querySelector('.popup-overlay')
var popup_button=document.querySelector('#add-popup-button')

// and block the display with using add event listener

popup_button.addEventListener('click',function(){
    popup_box.style.display= 'block';
    popup_overlay.style.display= 'block';
})

// select the add and cancel button

var cancel_popup=document.getElementById('cancel-popup')

// and dont refresh the page while click these button
// so we use the event.preventdefault

cancel_popup.addEventListener('click',function(event){
    event.preventDefault()
    popup_box.style.display= 'none';
    popup_overlay.style.display= 'none';
})

// select the container,add-book,book-title-input,book-author-input,book-description-input

var container=document.querySelector('.container')
var add_book=document.getElementById('add-book')
var book_title_input=document.getElementById('book-title-input')
var book_author_input=document.getElementById('book-author-input')
var book_description_input=document.getElementById('book-description-input')

add_book.addEventListener('click',function(event){
    event.preventDefault()
    popup_box.style.display= 'none';
    popup_overlay.style.display= 'none';

    var div=document.createElement('div')
    div.setAttribute('class','book-container')
    div.innerHTML=
    `<h1>${book_title_input.value}</h1>
    <h2>${book_author_input.value}</h2>
    <h6>${book_description_input.value}</h6>
    <button onclick="deletebutton(event)">${'Delete'}</button>`
    container.append(div)
})

function deletebutton(event) {
    event.target.parentElement.remove()
}