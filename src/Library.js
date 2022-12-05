function createLibrary(libraryName) {
  return {
    name: libraryName,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  }
}

function addBook(library, book) {
  library.shelves[book.genre].push(book)
}


function checkoutBook(library, bookName, genre) {
  var genreBooksArray = library.shelves[genre]
  for (var i = 0; i < genreBooksArray.length; i++) {
    if (genreBooksArray[i].title === bookName) {
      genreBooksArray.splice(i, 1)
      return `You have now checked out ${bookName} from the ${library.name}`
    } 
  } 
  return `Sorry, there are currently no copies of ${bookName} available at the ${library.name}`
}


module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
