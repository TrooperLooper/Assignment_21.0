let listBooks = [ 
    {
        title: 'Animal Farm',
        author: 'Orson Welles',
        isRead: true
    },
    {
        title: 'No Logo',
        author: 'Naomi Klein',
        isRead: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        isRead: false
    }
];

while (running){
    const choice = prompt(`
    Book Tracker
    1. Add Book
    2. List Books
    3. Mark Book as Read
    4. Exit
    Enter your choice: `);

    switch (choice) {
        case 1: addBook();
        break;

        case 2: listBooks();   
        console.log listBooks(title);
        break;
        
        case 3: 
        prompt("Enter the title of the book to mark as read:","");
        markAsRead(title);   
        break;

        case 4:  running = false;
        alert("goodbye!");

        default:
        console.log("Invalid choice.");
    }

}

const functions = {

    listBooks(){
    find alle böckers titlar
    while books = listBooks.filter(car => car.color === "red");
        return title
        console.log(listBooks);
        listBooks = () => {
            this.books.forEach(book => {
                console.log(`Title: ${book.title}}`);
            });
    },

    addBook(){
        push(Title, Author, isRead) 
        addBook = (book) => this.books.push(book);
       

       
    },
    markAsRead(){
    find entered title - change isRead to true
    },

    exit() {
        console.clear();
        console.log("Thank you for using my booklist!");
        }

        // List the unread books in the library
library.listBooks();

    unreadBooks = isRead => books.filter(book => listBooks.isRead.includes(false));
    console.log(unreadBooks("Unread books:"));

    filter - books that are isRead == 0 false
    }

   
    }
