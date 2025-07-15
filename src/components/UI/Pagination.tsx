import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  siblingCount?: number;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
}) => {
  if (totalPages === 0) return null;

  const generatePageNumbers = () => {
    const totalPageNumbers = siblingCount * 2 + 5;
    if (totalPages <= totalPageNumbers) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 2);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages - 1);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPages - 1;

    const pages: (number | 'DOTS')[] = [];

    pages.push(1);

    if (shouldShowLeftDots) pages.push('DOTS');

    for (let i = leftSiblingIndex; i <= rightSiblingIndex; i++) {
      pages.push(i);
    }

    if (shouldShowRightDots) pages.push('DOTS');

    pages.push(totalPages);

    return pages;
  };

  const pages = generatePageNumbers();

  return (
    <nav aria-label="Paginación" className="inline-flex items-center gap-1 text-sm select-none">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`bg-blue-900 px-3 py-1 rounded ${
          currentPage === 1
            ? 'text-gray-400 cursor-not-allowed'
            : 'text-gray-700 hover:bg-blue-200'
        }`}
        aria-label="Página anterior"
      >
        &laquo;
      </button>

      {pages.map((page, idx) =>
        page === 'DOTS' ? (
          <span key={idx} className="px-2 text-gray-500 select-none">
            &hellip;
          </span>
        ) : (
          <button
            key={idx}
            onClick={() => onPageChange(page as number)}
            aria-current={page === currentPage ? 'page' : undefined}
            className={`px-3 py-1 rounded ${
              page === currentPage
                ? 'bg-blue-50 text-blue-900 font-semibold'
                : 'text-gray-700 hover:bg-blue-200'
            }`}
          >
            {page}
          </button>
        )
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`bg-blue-900 px-3 py-1 rounded ${
          currentPage === totalPages
            ? 'text-gray-400 cursor-not-allowed'
            : 'text-gray-700 hover:bg-blue-200'
        }`}
        aria-label="Página siguiente"
      >
        &raquo;
      </button>
    </nav>
  );
};

export default Pagination;
