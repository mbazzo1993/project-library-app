/**
 * GLOBAL VARIABLES
 */
const library = [];

const elemBookWrapper = document.getElementsByClassName('books-wrapper')[0];

function Book(title, author, numPages, isRead) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.isRead = isRead;
}

Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.numPages} pages, ${this.isRead ? "have read" : "not read yet"}.`
}

function addBookToLibrary(title, author, numPages, isRead) {
    library.push(new Book(title, author, numPages, isRead));
}

function displayBooks() {
    for (const book of library) {
        let newBook = document.createElement('div');
        newBook.classList.add('book');

        let newBookTitle = document.createElement('p');
        newBookTitle.innerText = book.title;
        newBook.appendChild(newBookTitle);

        let newBookAuthor = document.createElement('p');
        newBookAuthor.innerText = book.author;
        newBook.appendChild(newBookAuthor);

        let newBookPages = document.createElement('p');
        newBookPages.innerText = book.numPages + " pages";
        newBook.appendChild(newBookPages);

        let newBookStatus = document.createElement('img');
        newBookStatus.src = book.isRead ? './assets/read.svg' : './assets/not-read.svg';
        newBook.appendChild(newBookStatus);

        elemBookWrapper.appendChild(newBook)
    }
}

function clearBooks() {
    while (elemBookWrapper.lastElementChild) {
        elemBookWrapper.removeChild(elemBookWrapper.lastElementChild);
    }
}