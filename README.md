# project-library-app

## Description

Project from The Odin Project's JavaScript Course. Link to project page: [Project: Library](https://www.theodinproject.com/lessons/node-path-javascript-library).

## To Do

1. [X] Set up git repo with skeleton HTML, CSS, and JS files.
2. [X] Create:
  1. [X] Array to hold library objects
  2. [X] Function to store a new book into the array directly from user's input
3. [X] Write a function to loop through the array and display each book on the page.
4. [X] Add a NEW BOOK button which
   1. [X] Brings up a modal-based form to enter Title, Author, Pages, Read/Not Read.
   2. [X] Displays a submit button that, when clicked, saves the new book to the library array.
5. [X] Add button to each book to delete book from library
  1. [X] Ensure each book element is associated with array element in some way
6. [X] Add a button on each book's  display to change its read status
  1. [X] Create a function that toggles a book's read status on the Book prototype function.

## Update: Refactor code using classes

Date: Nov 11, 2024

Need to redesign the app in terms of JS classes. Most obvious approach is to think about what sorts of objects are in play...

__A) Book__

Need a class that typifies a book.

Required properties:
* Title
* Author
* Number of pages
* Is read

Required methods:
* Change status (change isRead value)
* Various getters and setters for book properties
* Add constructor as well

__B) Library__

Need a class to represent the library

Required properties:
* Books (array)

Required methods
* Add a book
* Remove a book

__C) DOM Changes__

Need a class to handle the DOM changes

Required properties:
* The relevant dom elements
* The relevant event listeners

Required methods:
* Probably none.

The program must create an instance of the DOM Changes class. Hopefully this will be enough to register the event listeners.

## To Do Items

1. [X] Create the book class and test it in the console.
2. [X] Create a library class and test it in the console.
3. [X] Create dom change class and test the whole program.