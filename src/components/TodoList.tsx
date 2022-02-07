import { List } from "@chakra-ui/react";

import { TodoTitle } from "./TodoTitle";
import { TodoItem } from "./TodoItem";
import type { FormatListItem } from "../types/todo"
import { FC } from "react";

export const TodoList: FC<FormatListItem> = ({
  title,
  as,
  fontSize,
  todoList,
  toggleTodoListItemStatus,
  deleteTodoListItem
}) => {
  return (
    <>
      {todoList.length !== 0 && (
        <>
          <TodoTitle title={title} as={as} fontSize={fontSize} mt="12" />
          <List w="full">
            {todoList.map((todo: any) => (
              <TodoItem
                todo={todo}
                key={todo.id}
                toggleTodoListItemStatus={toggleTodoListItemStatus}
                deleteTodoListItem={deleteTodoListItem}
              />
            ))}
          </List>
        </>
      )}
    </>
  );
};
