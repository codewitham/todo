'use client';
import React from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import CreateTodo from '../todo-forms/CreateTodo';
import { useFilter } from '@/contexts/filter-provider';

const TodoFilter = () => {
  const { filter, setFilter, searchQuery, setSearchQuery } = useFilter();

  return (
    <div className=' flex flex-col gap-5'>
      <div>
        <h1 className=' text-3xl font-bold'>
          Manage Todo
        </h1>
        <div className=' border-4 border-primary  w-12'></div>
      </div>
      <div className=' flex items-center gap-2'>
        <Input
          placeholder='Search...'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div>
          <CreateTodo />
        </div>
      </div>

      <div className=' flex items-center gap-2'>
        <Button
          size={"sm"}
          variant={filter === 'All' ? 'default' : 'secondary'}
          onClick={() => setFilter('All')}
        >
          All
        </Button>
        <Button
          size={"sm"}
          variant={filter === 'Pending' ? 'default' : 'secondary'}
          onClick={() => setFilter('Pending')}
        >
          Pending
        </Button>
        <Button
          size={"sm"}
          variant={filter === 'Completed' ? 'default' : 'secondary'}
          onClick={() => setFilter('Completed')}
        >
          Completed
        </Button>
      </div>
    </div>
  );
};

export default TodoFilter;
