const express = require('express');
const {
  createMovie,
  getMovies,
  getMovieById,
  updateMovie,
  deleteMovie
} = require('../controllers/movieController');
const protect = require('../middleware/authMiddleware');
const router = express.Router();
// Public: Get all movies / Get by id
router.get('/', getMovies);
router.get('/:id', getMovieById);

// Private: Create, Update, Delete
router.post('/', protect, createMovie);
router.put('/:id', protect, updateMovie);
router.delete('/:id', protect, deleteMovie);
module.exports = router;
