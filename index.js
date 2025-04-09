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
        case 1: addBook();
        prompt("Enter the title and author of a book to add:", "");
        functions.addBook();
        break;

        case 2: listBooks();   
        console.log(listBooks);
        break;
        
        case 3: 
        prompt("Enter the title of the book to mark as read:","");
        functions.markAsRead(title);   
        break;

        case 4:
        functions.BooksUnread();

        case 5:
        exit ();
        if (running = false);
        clear();
        alert("Thank you for using my booklist!");

        default:
        console.log("Invalid choice.");
    }

}

const functions = {

    addBook(listBooks) {
        listBooks.push({
            Title: "",
            Author:"",
            isRead: "false"
        });
        },

    addNewBook = (title, author) {
            const newTitle = prompt("Enter a title for the book");
            const newAuthor = prompt("Enter an author for the book");
        }
        };
          
    markAsRead = (title, author) => {
         const newTitle = prompt("Enter a title for the book you have read");
        
         const foundBook = listBooks.find(listBooks => listBooks.title === title);
        

           //  leta igenom lista, matcha med titel, ändra if false till true. Behöver hjälp till denna.
           

         default:
            console.log("No book match.");
        };

       
    BooksUnread(listBooks) {
            return listBooks.filter(listBooks => listBooks.isRead === false);
          }
