'use client';

import React, { useEffect, useState } from 'react';
import TodoCard from './TodoCard';
import { ITodos } from '@/types/types';
import { useFilter } from '@/contexts/filter-provider';
import TodoSkeleton from '../loading-skeleton/TodoSkeleton';

const DisplayTodos = ({ todos }: { todos: ITodos[] }) => {
  const { filter, searchQuery } = useFilter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for loading state
    const timer = setTimeout(() => setLoading(false), 2000); // Adjust time as necessary
    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  const filteredTodos = todos.filter(todo => {
    const matchesFilter = filter === 'All' ||
      (filter === 'Pending' && !todo.isCompleted) ||
      (filter === 'Completed' && todo.isCompleted);
    const matchesSearch = todo.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  if (loading) {
    return (
      <TodoSkeleton />
    );
  }

  return (
    <div className='flex flex-col gap-5'>
      {filteredTodos.length > 0 ? (
        filteredTodos.map((item, index) => (
          <TodoCard key={index} data={item} />
        ))
      ) : (
        <div className='my-20 text-muted-foreground text-2xl text-center'>
          No Todos Yet.
        </div>
      )}
    </div>
  );
};

export default DisplayTodos;
