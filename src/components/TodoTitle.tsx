import { memo } from "react";
import { Heading } from "@chakra-ui/react";
import { IFormatProps } from "../types/todo"

export const TodoTitle = memo(({ title, as, fontSize, mt }: IFormatProps) => {
  return (
    <Heading mt={mt} as={as} fontSize={fontSize} w="full">
      {title}
    </Heading>
  );
});
