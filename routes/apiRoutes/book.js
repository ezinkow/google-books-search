const router = require('express').Router();
const Book = require('../../models/book.js')

// get route, edited to match sequelize
router.get('/books', function (req, res) {
  Book.find({})
    .then((books) => {
      console.log(books);
      res.send(books);
    });
});

router.post('/books', function ({body}, res) {
  Book.create({
    id: body.id,
    title: body.title,
    authors: body.authors,
    description: body.description,
    image: body.image,
    link: body.link
  })
    .then((book) => {
      console.log(book);
      res.send(book);
    });
});

module.exports = router;