function createLibrary(libraryName) {
  return {
    name: libraryName,
    shelves: {fantasy: [],
      fiction: [],
      nonFiction: []
    }
  }

}

function addBook(library, bookName) {
  if (bookName.genre === 'fantasy') {
    library.shelves.fantasy.push(bookName)
  } else {
    library.shelves.nonFiction.push(bookName)
  }
}

function checkoutBook(library, bookName, genre) {



}


module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
