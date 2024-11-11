class Book {
    #title;
    #author;
    #numPages;
    #isRead;

    constructor(title, author, numPages, isRead) {
        this.#title = title;
        this.#author = author;
        this.#numPages = numPages;
        this.#isRead = isRead;
    }

    get info () {
        return `${this.#title} by ${this.#author}, ${this.#numPages} pages, ${this.#isRead ? "have read" : "not read yet"}.`
    }

    toggleReadStatus() {
        this.#isRead = !this.#isRead;
    }

    get title() {
        return this.#title;
    }

    get author() {
        return this.#author;
    }

    get numPages() {
        return this.#numPages;
    }

    get isRead() {
        return this.#isRead;
    }
}

class Library {
    #books = [];

    addBook(title, author, numPages, isRead) {
        this.#books.push(new Book(title, author, numPages, isRead));
    }

    removeBook(ind) {
        this.#books.splice(ind,1);
    }

    toggleReadStatus(ind) {
        this.#books[ind].toggleReadStatus();
    }

    get bookList() {
        return this.#books;
    }

}

class DOMControl {
    // dom elements
    elemBookWrapper = document.getElementsByClassName('books-wrapper')[0];
    elemNewBookBtn = document.getElementById('new-book-btn');
    dialog = document.querySelector("dialog");
    elemCancelBtn = document.getElementById('cancel');
    elemForm = document.querySelector('form');
    elemBooks = document.getElementsByClassName('books-wrapper')[0];

    // library
    lib = new Library();

    // event listeners

    // NOTE: within event listener function, 'this' is bound to the element that triggered
    // the event. To avoid this we use an arrow function...
    handleNewBook = this.elemNewBookBtn.addEventListener("click", () => {
        this.dialog.showModal();
    });
    handleCancel = this.elemCancelBtn.addEventListener("click", () => {
        this.dialog.close();
    });
    handleSubmit = this.elemForm.addEventListener("submit", (event) => {
        event.preventDefault();
    
        const data = new FormData(event.target);
        const dataObject = Object.fromEntries(data.entries());
    
        const title = dataObject.title;
        const author = dataObject.author;
        const numPages = Number(dataObject.numPages);
        const isRead = dataObject.status === "read" ? true : false;
    
        this.lib.addBook(title, author, numPages, isRead);
    
        this.dialog.close();
        this.clearBooks();
        this.displayBooks();
        this.clearForm();
    });
    handleRemoveBook = this.elemBooks.addEventListener('click', (event) => {
        if (event.target.nodeName === 'BUTTON') {
            let ind = event.target.parentElement.dataset.index
            this.lib.removeBook(ind);
            this.clearBooks();
            this.displayBooks();
        }
    
        if (event.target.nodeName === 'IMG') {
            let ind = event.target.parentElement.dataset.index
            this.lib.toggleReadStatus(ind);
            this.clearBooks();
            this.displayBooks();
        }
    });

    // methods

    clearBooks() {
        while (this.elemBookWrapper.lastElementChild) {
            this.elemBookWrapper.removeChild(this.elemBookWrapper.lastElementChild);
        }
    }

    displayBooks() {
        let ind = 0
        for (const book of this.lib.bookList) {
            let newBook = document.createElement('div');
            newBook.dataset.index = ind;
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
    
            let newBookDelBtn = document.createElement('button');
            newBookDelBtn.innerText = 'Remove';
            newBook.appendChild(newBookDelBtn);
    
            this.elemBookWrapper.appendChild(newBook)
            ind++;
        }
    }

    clearForm() {
        Array.from(this.elemForm.elements).forEach((input) => {
            if (input.id === 'have-read') {
                input.checked = true;
            } else if (input.id === 'have-not-read') {
                input.checked = false;
            } else {
                input.value = ''
            }
        });
    }

    

}

const domCtrl = new DOMControl();