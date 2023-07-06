import React, { useState, useEffect } from 'react';

interface PaginationProps {
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const page = Number(queryParams.get('page') || localStorage.getItem('currentPage')) || 1;
    setCurrentPage(page);
  }, []);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    queryParams.set('page', String(currentPage));
    const newUrl = `${window.location.href.split('?')[0]}?${queryParams.toString()}`;
    window.history.replaceState({}, '', newUrl);
    localStorage.setItem('currentPage', String(currentPage));
  }, [currentPage]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handlePopstate = () => {
      const queryParams = new URLSearchParams(window.location.search);
      const page = Number(queryParams.get('page')) || 1;
      setCurrentPage(page);
    };
    
    const handlePathnameChange = () => {
      const queryParams = new URLSearchParams(window.location.search);
      queryParams.set('page', String(1));
      const newUrl = `${window.location.pathname}?${queryParams.toString()}`;
      window.history.replaceState({}, '', newUrl);
      setCurrentPage(1);
      onPageChange(1);
    };

    window.addEventListener('popstate', handlePopstate);
    window.addEventListener('hashchange', handlePathnameChange);

    return () => {
      window.removeEventListener('popstate', handlePopstate);
      window.removeEventListener('hashchange', handlePathnameChange);
    };
  }, []);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  const handleFirstPage = () => {
    handlePageChange(1);
  };

  const handleLastPage = () => {
    handlePageChange(totalPages);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers: JSX.Element[] = [];
    const maxDisplayPages = 6;
  
    if (totalPages <= maxDisplayPages) {
      // Display all pages
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            className={`pagination__button--desktop ${currentPage === i ? 'active' : ''}`}
          >
            {i}
          </button>
        );
      }
    } else {
      const remainingPages = totalPages - currentPage + 1;
      let startPage = currentPage;
      let endPage = currentPage + maxDisplayPages - 1;
  
      if (remainingPages < maxDisplayPages) {
        startPage = Math.max(totalPages - maxDisplayPages + 1, 1);
        endPage = totalPages;
      }
  
      if (startPage > 1) {
        pageNumbers.push(
          <button
            key="ellipsis-prev"
            onClick={() => handlePageChange(startPage - 1)}
            className="pagination__button--desktop"
          >
            ...
          </button>
        );
      }
  
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            className={`pagination__button--desktop ${currentPage === i ? 'active' : ''}`}
          >
            {i}
          </button>
        );
      }
  
      if (endPage < totalPages) {
        pageNumbers.push(
          <button
            key="ellipsis-next"
            onClick={() => handlePageChange(endPage + 1)}
            className="pagination__button--desktop"
          >
            ...
          </button>
        );
      }
  
      if (!pageNumbers.some((button) => button.key === String(totalPages))) {
        pageNumbers.push(
          <button
            key={totalPages}
            onClick={() => handlePageChange(totalPages)}
            className={`pagination__button--desktop ${currentPage === totalPages ? 'active' : ''}`}
          >
            {totalPages}
          </button>
        );
      }
    }
  
    return pageNumbers;
  };
  

  return (
    <div className="pagination">
      <button
        onClick={handleFirstPage}
        disabled={currentPage === 1}
        className="pagination__button pagination__button__first"
      ></button>

      <button
        onClick={handlePrevPage}
        disabled={currentPage === 1}
        className="pagination__button pagination__button__prev"
      ></button>

      {windowWidth >= 1440 ? (
        <div className="pagination__numbers">{renderPageNumbers()}</div>
      ) : (
        <span>
          <b>Page {currentPage}</b> out of {totalPages}
        </span>
      )}

      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className="pagination__button pagination__button__next"
      ></button>

      <button
        onClick={handleLastPage}
        disabled={currentPage === totalPages}
        className="pagination__button pagination__button__last"
      ></button>
    </div>
  );
};

export default Pagination;
