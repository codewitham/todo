import { getSingleTodo } from '@/actions/todo.actions'
import EditTodo from '@/components/todo-forms/EditTodo'
import { ITodos } from '@/types/types'
import React from 'react'

const page = async ({ params }: { params: { id: string } }) => {
  const todo = await getSingleTodo(params.id) as ITodos;
  return (
    <div className=' flex-1 flex flex-col items-center justify-center'>
      <EditTodo todo={todo} />
    </div>
  )
}

export default page