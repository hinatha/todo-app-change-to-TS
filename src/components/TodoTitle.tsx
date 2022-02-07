import React, { memo } from "react";
import type { FC } from "react"
import { Heading } from "@chakra-ui/react";
import type { FormatProps } from "../types/todo"

export const TodoTitle: FC<FormatProps> = memo(({ title, as, fontSize, mt }) => {
  return (
    <Heading mt={mt} as={as} fontSize={fontSize} w="full">
      {title}
    </Heading>
  );
});
