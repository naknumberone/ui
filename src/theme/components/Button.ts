import { ComponentStyleConfig } from '@chakra-ui/react';

export const Button: ComponentStyleConfig = {
  baseStyle: {
    fontWeight: 'normal', // Normally, it is "semibold"
    lineHeight: '18px',
    fontSize: '14px',
    bg: 'butMinor',
    color: 'textMain',
    border: '2px solid',
    borderColor: 'butMinor',
    boxSizing: 'border-box',

    _hover: {
      bg: 'warmGray.20',
      boxShadow: 'none',
    },

    _active: {
      bg: 'warmGray.40',
      boxShadow: 'none',
    },

    _focus: {
      outline: 'none',
      borderColor: 'darkGreen',
      boxShadow: 'none',
    },

    _disabled: {
      cursor: 'not-allowed',
      bg: 'butMinor',
      color: 'blackLight',
    },
  },
  sizes: {
    lg: {
      fontWeight: 'bold',
      fontSize: '22px',
      p: '16px 30px',
      lineHeight: '28px',
      borderRadius: '12px',
    },
    md: {
      p: '9px 14px',
      borderRadius: '8px',
    },
    sm: {
      p: '5px 10px',
      borderRadius: '4px',
    },
  },
  variants: {
    action: {
      bg: 'butMain',
      borderColor: 'butMain',
      color: 'black',

      _hover: {
        bg: '#51ce65',
      },

      _active: {
        bg: 'darkGreen',
      },

      _disabled: {
        bg: 'green',
      },
    },
    floating: {
      bg: 'bgMain',
      borderColor: 'bgMain',
      boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.12)',

      _hover: {
        bg: 'bgMain',
        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.24)',
      },

      _active: {
        bg: 'bgMain',
        boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.24)',
      },

      _disabled: {
        bg: 'bgMain',
        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.12)',
      },
    },
    // 'with-shadow': {
    //   bg: 'red.400',
    //   boxShadow: '0 0 2px 2px #efdfde',
    // },
    // 4. We can override existing variants
    // solid: (props: any) => ({
    //   bg: props.colorMode === 'dark' ? 'red.300' : 'red.500',
    // }),
  },
};
