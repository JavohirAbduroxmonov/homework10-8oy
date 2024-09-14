"use client";

import { Pagination } from "flowbite-react";

export function PaginationComponent({ currentPage, onPageChange, totalPages }) {

  return (
    <div className="w-full flex overflow-x-auto sm:justify-center">
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
        showIcons
      />
    </div>
  );
}
