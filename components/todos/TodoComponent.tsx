import React from 'react';
import TodoFilter from './TodoFilter';
import DisplayTodos from './DisplayTodos';
import { getAllTodos } from '@/actions/todo.actions';
import { ITodos } from '@/types/types';
import { FilterProvider } from '@/contexts/filter-provider';

const TodoComponent = async () => {

  const allTodos = await getAllTodos() as ITodos[];

  return (
    <FilterProvider>
      <div className='max-w-lg w-full mx-auto flex flex-col gap-5'>
        <TodoFilter />
        <DisplayTodos todos={allTodos} />
      </div>
    </FilterProvider>
  );
};

export default TodoComponent;
