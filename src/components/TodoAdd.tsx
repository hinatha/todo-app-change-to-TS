import { Textarea, Button } from "@chakra-ui/react";
import type { AddFormat } from "../types/todo"
import { FC } from "react";

export const TodoAdd: FC<AddFormat> = ({
  placeholder,
  leftIcon,
  buttonText,
  inputEl,
  handleAddTodoListItem
}) => {
  return (
    <>
      <Textarea
        placeholder={placeholder}
        bgColor="white"
        mt="8"
        borderColor="gray.400"
        ref={inputEl}
      />
      <Button
        onClick={handleAddTodoListItem}
        colorScheme="blue"
        leftIcon={leftIcon}
        mt="8"
      >
        {buttonText}
      </Button>
    </>
  );
};
