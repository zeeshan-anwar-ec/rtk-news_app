export const Pagination = ({ totalPosts, postPerPage, setCurrentPage }) => {
  let pages = [];

  for (let i = 0; i < Math.ceil(totalPosts / postPerPage); i++) {
    pages.push(i);
  }

  return (
    <div>
      <button
        onClick={() => setCurrentPage(1)}
        className="border-2 py-2 px-4 mr-2"
      >
        First Page
      </button>
      {pages.map((page, index) => (
        <button
          onClick={() => setCurrentPage(page + 1)}
          className="py-2 px-4 mx-1 border-2"
          key={index}
        >
          {page + 1}
        </button>
      ))}
      <button
        onClick={() => setCurrentPage(pages.length)}
        className="border-2 py-2 px-4 ml-2"
      >
        Last Page
      </button>
    </div>
  );
};
