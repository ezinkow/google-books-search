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

// router.post('/todos', function (req, res) {
//   db.Todo.create({
//     name: req.body.name,
//   })
//     .then((todo) => {
//       console.log(todo);
//       res.send(todo);
//     });
// });

module.exports = router;