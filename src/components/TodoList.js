import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { filteredTodoListState } from '../store/todoStore';
import TodoItem from './TodoItem';

const TodoList = () => {
  const todoList = useRecoilValue(filteredTodoListState)

  return (
    <Container>
      {todoList.map(todo => <TodoItem key={todo.id} id={todo.id} text={todo.text} done={todo.done} />)}
    </Container>
  );
}

const Container = styled.div`
  padding: 20px 0 48px;
  overflow-y: auto;
  flex: 1;
`;

export default TodoList;