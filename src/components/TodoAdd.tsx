import { Textarea, Button } from "@chakra-ui/react";
import { IAddFormat } from "../types/todo"

export const TodoAdd = ({
  placeholder,
  leftIcon,
  buttonText,
  inputEl,
  handleAddTodoListItem
}: IAddFormat) => {
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
