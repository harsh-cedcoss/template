import React from 'react';

const MovieDetailsModal = ({ isOpen, movie, onClose }) => {
  const modalClasses = isOpen
    ? 'modal-overlay fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center'
    : 'hidden';

  return (
    <div className={modalClasses} onClick={onClose}>
      <div className="modal-content bg-white p-8 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-bold mb-4">{movie.Title}</h2>
        <p className="text-gray-600">Year: {movie.Year}</p>
        <p className="text-gray-600">Genre: {movie.Genre}</p>
        <div className="mt-4">
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="mx-auto rounded-lg shadow-md"
            style={{ maxWidth: '100%', maxHeight: '400px' }}
          />
        </div>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default MovieDetailsModal;
