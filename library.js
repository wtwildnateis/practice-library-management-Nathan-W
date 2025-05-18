/*
Instructions

Scenario:
You are tasked with designing a library management system. The library
lends out various types of items such as books, DVDs, and magazines. While
all items share some common properties (e.g., title, id, isAvailable), each
type has unique properties and behaviors. For example:
● Books have an author and a genre.
● DVDs have a director and duration.
● Magazines have an issueNumber and publisher.

Tasks

1. Step 1: Create a Base Class
○ Define a class LibraryItem to represent shared properties
(title, id, isAvailable) and methods (e.g., checkOut() and
returnItem()).

2. Step 2: Extend the Base Class
○ Create child classes Book, DVD, and Magazine that inherit from
LibraryItem.
○ Add unique properties and methods for each child class:
■ Book: Add properties like author and genre.
■ DVD: Add properties like director and duration.
■ Magazine: Add properties like issueNumber and publisher.

3. Step 3: Instantiate Objects
○ Create instances of each class and test the shared and unique
methods.

4. Step 4: Test the Inheritance
○ Use inherited methods like checkOut() and returnItem() to
manage the availability of items.
○ Test accessing and displaying unique properties of each child
class.
*/

class LibraryItem {
    constructor(title, id, isAvailable) {
        this.title = title;
        this.id = id;
        this.isAvailable = isAvailable = true;
    }


    checkOut() {
        if (this.isAvailable) {
            this.isAvailable = true;
            console.log(`The item "${this.title}" has been checked out.`);
            this.isAvailable = false;
        } else {
            console.log(`The item "${this.title}" is not available for checkout.`);
        }
    }

        returnItem() {
            console.log(`The item "${this.title}" has been returned.`);
            this.isAvailable = true;
        }
    
        displayInfo() {
            if (this instanceof Book) {
                console.log(`${this.title} is a book written by ${this.author}, and belongs to the ${this.genre} genre.`);
            }
            else if (this instanceof DVD) {
                console.log(`${this.title} is a DVD directed by ${this.director}, and has a duration of ${this.duration} minutes.`);
            }
            else if (this instanceof Magazine) {
                console.log(`${this.title} is a magazine published by ${this.publisher}, and is issue nummber ${this.issueNumber}.`);
            }
        }

        isInStock() {
            if (this.isAvailable) {
                console.log(`The item "${this.title}" is available.`);
            } else {
                console.log(`The item "${this.title}" is not available currently.`);
            }
            }
        
}
        // task 2

        class Book extends LibraryItem {
            constructor(title, id, author, genre) {
                super(title, id);
                this.author = author;
                this.genre = genre;
            }
        
        displayAuthor() {
            console.log(`This book is written by ${this.author}.`);
        }

    }

    class DVD extends LibraryItem {
        constructor(title, id, director, duration) {
            super(title, id)
            this.director = director;
            this.duration = duration;
        }

        displayDuration() {
            console.log(`The duration of this Film is ${this.duration} minutrs long.`);
        }
    }

    class Magazine extends LibraryItem {
        constructor(title, id, issueNumber, publisher) {
            super(title, id);
            this.issueNumber = issueNumber;
            this.publisher = publisher;
        }

        displayIssueNumber() {
            console.log(`This copy of ${this.title} is issue number ${this.issueNumber}.`);

        }
        
    }

    // task 3
    const book1 = new Book("Harry Potter and the Goblet of Fire", 1, "That One Lady...", "Fantasy");
    console.log(book1);
    book1.displayInfo();
    book1.displayAuthor();

    const dvd1 = new DVD("Scarface", 2, "Brian De Palma", 170);
    console.log(dvd1);
    dvd1.displayInfo();
    dvd1.displayDuration();

    const magazine1 = new Magazine("Vogue", 3, 5, "Conde Nast");
    console.log(magazine1);
    magazine1.displayInfo();
    magazine1.displayIssueNumber();

 //task 4
book1.checkOut();
console.log(book1.isAvailable);
book1.isInStock();
book1.returnItem();
console.log(book1.isAvailable);
book1.isInStock();

dvd1.checkOut();    
dvd1.isInStock();
console.log(dvd1.isAvailable);
dvd1.returnItem();
console.log(dvd1.isAvailable);
dvd1.isInStock();

magazine1.checkOut();
console.log(magazine1.isAvailable);
magazine1.isInStock();
magazine1.returnItem();
console.log(magazine1.isAvailable);
magazine1.isInStock();

console.log(`The director of ${dvd1.title} is ${dvd1.director}.`);
console.log(`The id of ${book1.title} is ${book1.id}.`);
console.log(`The publisher of ${magazine1.title} is ${magazine1.publisher}.`);