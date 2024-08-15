import { ITodos } from '@/types/types'
import React from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'
import TodoActions from './TodoActions'

const TodoCard = ({ data }: { data: ITodos }) => {
  return (
    <Card >
      <CardHeader className=' flex flex-row items-start gap-5 justify-between'>
        <div>
          <CardTitle className=' mb-2 text-lg'>
            {data.title}
          </CardTitle>
          <CardDescription>
            {data.description}
          </CardDescription>
        </div>

        <TodoActions todo={data} />
      </CardHeader>

    </Card>
  )
}

export default TodoCard