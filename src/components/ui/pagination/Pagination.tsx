"use client";
import { usePagination, DOTS } from "@/hooks/usePagination";
import React from "react";
import { RiArrowRightSFill } from "react-icons/ri";
import { RiArrowLeftSFill } from "react-icons/ri";
import LeftArrowIcon from "@/icons/left-arrow-icon.svg";
import RightArrowIcon from "@/icons/right-arrow-icon.svg";

interface Props {
  onPageChange: (page: number) => void;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
}

const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
}: Props) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || (paginationRange && paginationRange.length < 2)) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const lastPage = paginationRange
    ? paginationRange[paginationRange.length - 1]
    : 1;

  return (
    <ul className="flex list-none items-center justify-center gap-x-2 mt-8">
      <li
        className={`px-2 py-2  ${
          currentPage === 1
            ? "text-gray-400 cursor-not-allowed"
            : "cursor-pointer text-white"
        }`}
        onClick={onPrevious}
      >
        <LeftArrowIcon />
      </li>
      {paginationRange &&
        paginationRange.map((pageNumber, index) => {
          if (pageNumber === DOTS) {
            return (
              <li key={`dots-${index}`} className="px-4 py-2 text-white">
                &#8230;
              </li>
            );
          }

          return (
            <li
              key={pageNumber}
              className={`w-10 h-10 flex rounded-lg items-center justify-center  font-bold cursor-pointer transition-colors ${
                pageNumber === currentPage
                  ? "bg-white text-black"
                  : "bg-[#011D50] text-white hover:bg-[#011D50]/60"
              }`}
              onClick={() => onPageChange(Number(pageNumber))}
            >
              {pageNumber}
            </li>
          );
        })}
      <li
        className={`px-2 py-2  ${
          currentPage === lastPage
            ? "text-gray-400 cursor-not-allowed"
            : "cursor-pointer text-white"
        }`}
        onClick={onNext}
      >
        <RightArrowIcon />
      </li>
    </ul>
  );
};

export default Pagination;
