const library = [];

const elemBookWrapper = document.getElementsByClassName('books-wrapper')[0];
const elemNewBookBtn = document.getElementById('new-book-btn');
const dialog = document.querySelector("dialog");
const elemCancelBtn = document.getElementById('cancel');
const elemForm = document.querySelector('form');

elemNewBookBtn.addEventListener("click", () => {
    dialog.showModal();
})

elemCancelBtn.addEventListener("click", () => {
    dialog.close();
})

elemForm.addEventListener("submit", handleNewBookOnSubmit);

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

function clearForm() {
    Array.from(elemForm.elements).forEach((input) => {
        if (input.id === 'have-read') {
            input.checked = true;
        } else if (input.id === 'have-not-read') {
            input.checked = false;
        } else {
            input.value = ''
        }
    });
}

function handleNewBookOnSubmit(event) {
    event.preventDefault();

	const data = new FormData(event.target);
	const dataObject = Object.fromEntries(data.entries());

    const title = dataObject.title;
    const author = dataObject.author;
    const numPages = Number(dataObject.numPages);
    const isRead = dataObject.status === "read" ? true : false;
    console.log(dataObject);
    console.log(dataObject.status);

    addBookToLibrary(title, author, numPages, isRead);

    dialog.close();
    clearBooks();
    displayBooks();
    clearForm();
}