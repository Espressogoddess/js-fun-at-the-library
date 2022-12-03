function shelfBook(book, shelf) {
  if (shelf.length < 3) {
    shelf.unshift(book)
  }
}

function unshelfBook(book, shelf) {
  var position
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === book) {
       position = i
    } 
  }
  shelf.splice(position, 1)
}

function listTitles(shelf) {
  var titles = []
  for (var i = 0; i < shelf.length; i++) {
   titles.push(shelf[i].title)
  } return titles.join(', ')
}

function searchShelf(shelf, book) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === book) {
      return true
    }
  }
  return false
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
