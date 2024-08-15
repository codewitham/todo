'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface FilterContextProps {
  filter: string;
  setFilter: (filter: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const FilterContext = createContext<FilterContextProps | undefined>(undefined);

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useFilter must be used within a FilterProvider');
  }
  return context;
};

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <FilterContext.Provider value={{ filter, setFilter, searchQuery, setSearchQuery }}>
      {children}
    </FilterContext.Provider>
  );
};
