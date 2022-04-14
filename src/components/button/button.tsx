import React from 'react';
import { Button as ChakraButton, ButtonProps } from '@chakra-ui/react';

type Props = ButtonProps & {
  children?: React.ReactChild;
};

export const Button = ({ children, ...props }: Props) => (
  <ChakraButton iconSpacing={1} {...props}>
    {children}
  </ChakraButton>
);
