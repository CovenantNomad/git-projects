import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { filteredTodoListState } from '../store/todoStore';

const TodoList = () => {
  const todoList = useRecoilValue(filteredTodoListState)

  return (
    <Container>
      {todoList.map(todoItem => <div>{todoItem.text}</div>)}
    </Container>
  );
}

const Container = styled.div`
  padding: 20px 0 48px;
  overflow-y: auto;
  flex: 1;
`;

export default TodoList;