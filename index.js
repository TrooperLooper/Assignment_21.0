let running = true;
let books = [ 
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

while (running) {
    const choice = prompt(`
    Book Tracker
    1. Add Book
    2. List Books
    3. Mark Book as Read
    4. List unread books
    5. Exit
    Enter your choice: `);

    switch (choice) {
        case "1": 
        addBook();
        break;

        case "2": 
        listBooks();   
        break;
        
        case "3": 
        markAsRead();   
        break;

        case "4":
        booksUnread();
        break;

        case "5":
        running = false;
        alert("Thank you for using my booklist!");
        break;

        default:
        console.log("Invalid choice.");
    }

}


function listBooks() {
    books.forEach(function(book) {
        console.log(book.title + ", by " + book.author);
    });
}

   function  addBook() {
        const newTitle = prompt("Enter a title for the book");
        const newAuthor = prompt("Enter an author for the book");
        books.push({
            title: newTitle,
            author: newAuthor,
            isRead : false
        });
        console.log(books);
        }
        
 

    function booksUnread() {
        const unreadBooks = books.filter(book => book.isRead === false);
        unreadBooks.forEach(function(book) {
            console.log(book.title + ",by " + book.author);
        });     
    }

    function markAsRead() {
         const title = prompt("Enter a title for the book you have read");
         const foundBook = books.find(books => books.title === title);

         if (foundBook) {
                   foundBook.isRead = true;
                   alert("Books is read");
               } else {
                   console.log("No book match")
               }
        
           };

           /*
           function listBooks() {
    books.forEach(title, author) = books;
    console.log(books);

const unreadBooks = booksUnread(books)
listBooks(unreadBooks); // show the unread books
break;

}*/