import { useState, useEffect } from "react";

import { ulid } from "ulid";

import * as todoData from "../apis/todos";

import type { Todos } from "../types/todo"


export const useTodo = () => {

  const [todoList, setTodoList] = useState<Todos[]>([]);

  useEffect(() => {
    todoData.getAllTodosData().then((todo) => {
      setTodoList([...todo].reverse());
    });
  }, []);

  const toggleTodoListItemStatus = (id: number, done: boolean): void => {
    const todoItem = todoList.find((item) => item.id === id);
    const newTodoItem = { ...todoItem, done: !done };
    todoData.updateTodoData(id, newTodoItem).then((updatedTodo) => {
      const newTodoList = todoList.map((item) =>
        item.id !== updatedTodo.id ? item : updatedTodo
      );
      setTodoList(newTodoList);
    });
  };
  const addTodoListItem = (todoContent: string) => {
    const newTodoItem = {
      content: todoContent,
      id: ulid(),
      done: false
    };
    return todoData.addTodoData(newTodoItem).then((addTodo) => {
      setTodoList([addTodo, ...todoList]);
    });
  };
  const deleteTodoListItem = (id: number) => {
    todoData.deleteTodoData(id).then((deleteListItemId) => {
      const newTodoList = todoList.filter(
        (item) => item.id !== deleteListItemId
      );
      setTodoList(newTodoList);
    });
  };

  return {
    todoList,
    toggleTodoListItemStatus,
    addTodoListItem,
    deleteTodoListItem
  };
};