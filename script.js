let jsLibrary = [];

function Book(title, author, numPages, hasRead) {
  this.author = author
  this.hasRead = hasRead
  this.numPages = numPages
  this.title = title
}

//returns info of book
Book.prototype.info = function() {
  let hasReadStr = this.hasRead ? 'already read' : 'not read';
  return `${this.title} by ${this.author}, ${this.numPages} pages, ` + hasReadStr;
}

Book.prototype.getDomNode = function(index) {
  let domCard = document.createElement('div');
  let domDelete = document.createElement('i');
  let domTitle = document.createElement('div');
  let domBy = document.createElement('div');
  let domAuthor = document.createElement('div');
  let domNumPages = document.createElement('div');
  let domHasRead = document.createElement('div');
  let domBtn = document.createElement('button');

  domCard.classList.add('card');
  domCard.dataset.index = `${index}`;

  domDelete.classList.add('material-icons', 'card__btn_delete');
  domDelete.innerText = 'delete';
  domCard.appendChild(domDelete);

  domTitle.classList.add('card__text', 'card__text--emphasized');
  domTitle.innerText = this.title;
  domCard.appendChild(domTitle);

  domBy.classList.add('card__text');
  domBy.innerText = 'by';
  domCard.appendChild(domBy);

  domAuthor.classList.add('card__text', 'card__text--emphasized');
  domAuthor.innerText = this.author;
  domCard.appendChild(domAuthor);

  domNumPages.classList.add('card__text');
  domNumPages.innerText = `${this.numPages} pages`;
  domCard.appendChild(domNumPages);

  domHasRead.classList.add('card__text');
  domHasRead.innerText = this.hasRead ? 'read' : 'not read';
  domCard.appendChild(domHasRead);

  domBtn.classList.add('btn', 'btn--small');
  domBtn.innerText = 'Change read status';
  domCard.appendChild(domBtn);

  return domCard;
}

function addBookToLibrary(book) {
  jsLibrary.push(book);
}

//TODO deletion of books (eventListener, function, etc.)
//TODO toggling of hasRead (eventListener, function, etc.)
//TODO different style when read to stand out (green text/checkmark)
//TODO store data (localStorage vs Firebase)

//TODO connect library to html
function renderBooks() {
  //remove current books
  while(library.firstChild) {
    library.removeChild(library.lastChild);
  }
  //add updated library
  for(let i = 0; i < jsLibrary.length; i++) {
    library.appendChild(jsLibrary[i].getDomNode(i));
  }
}

//close modal form
function closeForm() {
  modal.classList.toggle('modal--closed');
  modalOverlay.classList.toggle('modal--closed');
  formAddBook.reset();
}

//open modal form
function openForm() {
  modal.classList.toggle('modal--closed');
  modalOverlay.classList.toggle('modal--closed');
}

//validate input
function isValidForm() {
  let errStr = '';
  if(bookTitle.value == '') {
    errStr += '-Title cannot be blank.\n';
  } 
  if(bookAuthor.value == '') {
    errStr += '-Author cannot be blank.\n';
  }
  if(bookNumPages.value < 1) {
    errStr += '-Number of pages cannot be less than 1.\n';
  }
  if(isNaN(bookNumPages.value)) {
    errStr += '-Number of pages must be a number.\n';
  }
  if(errStr.length > 0) {
    alert(`Please fix these errors before continuing:\n\n ${errStr}`);
    return false;
  } else {
    return true;
  }
}

//validate form. if true add book and close form
function handleAddingBook(e) {
  e.preventDefault();
  if(isValidForm()) {
    const newBook = new Book(bookTitle.value, bookAuthor.value, bookNumPages.value, bookHasRead.checked);
    addBookToLibrary(newBook);
    //TODO render books
    renderBooks();
    closeForm();
  }
} 

//DOM Elements
//buttons
const btnOpenForm = document.querySelector('#btn-show-form');
const btnCloseForm = document.querySelector('#btn-close-modal');
const btnAddBook = document.querySelector('#btn-add-book');

//blocks
const library = document.querySelector('#library');
const modal = document.querySelector('#modal');
const modalOverlay = document.querySelector('#modal-overlay');
const formAddBook = document.querySelector('#add-book-form');

//inputs
const bookTitle = document.querySelector('#new-book-title');
const bookAuthor = document.querySelector('#new-book-author');
const bookNumPages = document.querySelector('#new-book-num-pages');
const bookHasRead = document.querySelector('#new-book-has-read');

//eventListeners
//close modal when clicked outside form
window.onclick = function(e){
  if(e.target == modalOverlay) {
    closeForm();
  }
}
btnOpenForm.addEventListener('click', openForm);
btnCloseForm.addEventListener('click', closeForm);
btnAddBook.addEventListener('click', handleAddingBook);