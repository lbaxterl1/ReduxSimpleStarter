export function selectBook(book) {
    //selectBook is an ActionCreator, it needs to reutn an acntion,
    // an object with a type proerpty.
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}