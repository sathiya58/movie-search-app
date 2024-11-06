


import PropTypes from 'prop-types';

function Pagination({ page, onChangePage }) {
  return (
    <div className="flex justify-center mt-6">
      <button
        onClick={() => onChangePage(page - 1)}
        disabled={page === 1}
        className="px-4 py-2 bg-gray-200 rounded mr-2"
      >
        Previous
      </button>
      <span className="px-4 py-2">{page}</span>
      <button
        onClick={() => onChangePage(page + 1)}
        className="px-4 py-2 bg-gray-200 rounded ml-2"
      >
        Next
      </button>
    </div>
  );
}

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
};

export default Pagination;
