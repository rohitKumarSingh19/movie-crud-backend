const Movie = require('../models/Movie');

// @desc    Create new movie
// @route   POST /api/movies
// @access  Private
const createMovie = async (req, res, next) => {
  try {
    const { title, genre, year } = req.body;

    if (!title || !genre || !year) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const movie = await Movie.create({ title, genre, year });
    res.status(201).json(movie);
  } catch (error) {
    next(error);
  }
};

// @desc    Get all movies
// @route   GET /api/movies
// @access  Public
const getMovies = async (req, res, next) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    next(error);
  }
};

// @desc    Get single movie by ID
// @route   GET /api/movies/:id
// @access  Public
const getMovieById = async (req, res, next) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) return res.status(404).json({ message: 'Movie not found' });
    res.json(movie);
  } catch (error) {
    next(error);
  }
};

// @desc    Update movie
// @route   PUT /api/movies/:id
// @access  Private
const updateMovie = async (req, res, next) => {
  try {
    const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!movie) return res.status(404).json({ message: 'Movie not found' });
    res.json(movie);
  } catch (error) {
    next(error);
  }
};

// @desc    Delete movie
// @route   DELETE /api/movies/:id
// @access  Private
const deleteMovie = async (req, res, next) => {
  try {
    const movie = await Movie.findByIdAndDelete(req.params.id);
    if (!movie) return res.status(404).json({ message: 'Movie not found' });
    res.json({ message: 'Movie deleted successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createMovie,
  getMovies,
  getMovieById,
  updateMovie,
  deleteMovie
};
