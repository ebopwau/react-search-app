import React, { useState, ReactNode, PropsWithChildren } from 'react';

import { Page, PagesContainer } from './Pagination.styled';

type TPagination = {
    itemsPerPage: number
    initPage?: number
    children?: ReactNode
}

export const Pagination = ({ children, itemsPerPage, initPage = 1 }: PropsWithChildren<TPagination>) => {
  const [currentPage, setCurrentPage] = useState(initPage);
  const [childrenArray] = useState(() => React.Children.toArray(children));

  const pages = Math.ceil(childrenArray.length / itemsPerPage);
  const rangeEnd = currentPage * itemsPerPage;
  const rangeStart = rangeEnd - itemsPerPage;

  return (
    <>
      { childrenArray.slice(rangeStart, rangeEnd) }
      <PagesContainer>
        {
        Array.from({ length: pages }, (_, i) => (
          <Page key={i} isActive={currentPage === i + 1} onClick={() => setCurrentPage(i + 1)}>
            { i + 1 }
          </Page>
        ))
        }
      </PagesContainer>
    </>
  );
};

Pagination.defaultProps = {
  children: null,
  initPage: 1,
};
