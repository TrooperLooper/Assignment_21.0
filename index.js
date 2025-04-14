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

        case "2": listBooks();   
        break;
        
        case "3": 
        markAsRead();   
        break;

        case "4":
        BooksUnread();

        case "5":
        exit ();
        if (running = false);
        clear();
        alert("Thank you for using my booklist!");

        default:
        console.log("Invalid choice.");
    }

}

   function  addBook() {
        const newTitle = prompt("Enter a title for the book");
        const newAuthor = prompt("Enter an author for the book");
        books.push({
            title: newTitle,
            author: newAuthor,
            isRead : false
        });
        }
        console.log(books);

          
    function markAsRead() {
         const title = prompt("Enter a title for the book you have read");
         const foundBook = books.find(book => book.title === title);

         if (foundBook) {
                   foundBook. isRead = true;
                   alert("Books is read");
               } else {
                   console.log("No book match")
               }
           

           };
