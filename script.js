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

function addBookToLibrary(book) {
  jsLibrary.push(book);
}

//TODO connect library to html
function renderBooks() {
  jsLibrary.forEach(book => {
    let bookNode = document.createElement('div');
    
    <div class="card">
        <i class="material-icons card__btn_delete">delete</i>
        <div class="card__text card__text--emphasized">Harry Potter</div>
        <div class="card__text">by</div>
        <div class="card__text card__text--emphasized">JK Rowling</div>
        <div class="card__text">435 pages</div>
        <div class="card__text">already read</div>
        <button class="btn btn--small">Change read status</button>
      </div>
  });
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


//TODO add display for each book to delete from library
//TODO add button to toggle haveRead value
//TODO store data (localStorage vs Firebase)