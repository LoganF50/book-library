let myLibrary = [];

function Book(title, author, numPages, haveRead) {
  this.author = author
  this.haveRead = haveRead
  this.numPages = numPages
  this.title = title
}

//returns info of book
Book.prototype.info = function() {
  let haveReadStr = this.haveRead ? 'already read' : 'not read';
  return `${this.title} by ${this.author}, ${this.numPages} pages, ` + haveReadStr;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

//TODO connect library to html
function renderBooks() {

}

//TODO new book button
  //TODO form to allow user to input book info
//TODO add display for each book to delete from library
//TODO add button to toggle haveRead value
//TODO store data (localStorage vs Firebase)

const book = new Book('The Hobbit', 'J.R.R. Tolkien',295,false);
console.log(book.info());