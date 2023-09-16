import React from 'react'

import classes from './Todo.module.css'

const Todo: React.FC<React.PropsWithChildren> = (props) => {
  return (
    <div className={classes.todo}>
        {props.children}
    </div>
  )
}

export default Todo