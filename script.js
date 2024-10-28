const library = [];

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

