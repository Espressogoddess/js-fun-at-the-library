function createTitle(title) {
  return `The ${title}`
}

function buildMainCharacter(name, age, pronouns) {
  return {name, age, pronouns}
}

function saveReview(review, reviews) {
  if (reviews.includes(review) || reviews.includes(review)) {
    return reviews
  } else {
    return reviews.push(review)
  }
}

function calculatePageCount(bookTitle) {
  return 20 * bookTitle.length
}

function writeBook(bookTitle, bookCharacter, genre) {
  return {title: bookTitle, mainCharacter: bookCharacter, pageCount: calculatePageCount(bookTitle), genre: genre}
}

function editBook(book) {
 book.pageCount *=  0.75
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
