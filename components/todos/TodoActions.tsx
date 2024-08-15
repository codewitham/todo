'use client';
import React from 'react'
import { Button } from '../ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { Check, EllipsisVertical, Pencil, Trash } from "lucide-react"
import { deleteTodo, editTodo } from '@/actions/todo.actions'
import { ITodos } from '@/types/types';
import { toast } from '../ui/use-toast';
import { Checkbox } from '../ui/checkbox';
import Link from 'next/link';

const TodoActions = ({ todo }: { todo: ITodos }) => {

  const onCheckTodo = async (isCompleted: boolean) => {
    const res = await editTodo({
      id: todo.id,
      title: todo.title,
      description: todo.description,
      isCompleted: isCompleted
    })
    if (res !== null) {
      return toast({ title: "Todo Updated!" })
    } else {
      return toast({ title: "Something Went Wrong!" })
    }

  }

  const onDeleteTodo = async () => {
    const res = await deleteTodo(todo.id)
    if (res !== null) {
      return toast({ title: "Todo Deleted!" })
    } else {
      return toast({ title: "Something Went Wrong!" })
    }
  }

  return (
    <div className=' flex items-center gap-2'>
      {/* <Button size={"icon"} className=' h-8 w-8' disabled={todo?.isCompleted} onClick={onCheck}>
        <Check className=' h-4 w-4' />
      </Button> */}
      <Checkbox className=' h-6 w-6 rounded-sm ' checked={todo?.isCompleted} onCheckedChange={(e: boolean) => onCheckTodo(e)} />
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size={"icon"} variant={"outline"} className=' h-8 w-8'>
              <EllipsisVertical className='h-4 w-4' />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent>
            <Link href={`/edit/${todo.id}`}>
              <DropdownMenuItem>
                <Pencil className='h-4 w-4 mr-2' />
                Edit
              </DropdownMenuItem>
            </Link>
            <DropdownMenuItem className=' text-red-500' onClick={onDeleteTodo}>
              <Trash className='h-4 w-4 mr-2' />
              delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}

export default TodoActions