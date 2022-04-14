import { ComponentStyleConfig, StyleObjectOrFn } from '@chakra-ui/react';

const pullDownLabelStyles = {
  bottom: '-8px',
  fontSize: '10px',
  lineHeight: '10px',
};

const generalLabelStyles: StyleObjectOrFn = {
  position: 'absolute',
  margin: 0,
  left: 0,
  fontWeight: 'normal',
  userSelect: 'none',
  pointerEvents: 'none',
};

export const FloatingTextArea: ComponentStyleConfig = {
  parts: ['container, textArea, label, errorMessage'],
  baseStyle: {
    container: {
      position: 'relative',
      mb: '10px',
      _focusWithin: {
        label: {
          ...pullDownLabelStyles,
        },
      },
      'textarea:not(:placeholder-shown) + label': {
        ...pullDownLabelStyles,
      },
    },
    textArea: {
      borderBottom: '1px solid',
      borderColor: 'rgba(240, 238, 235, 0.2)',
      padding: '0 0 4px 0',
      background: 'transparent',
      outline: 'none',
      resize: 'none',
      width: '100%',
      // typography BODY2_TEXT_PROPS
      lineHeight: '26px',
      fontSize: '22px',
      letterSpacing: '-0.02em',
      fontWeight: 400,
      color: 'clearWhite',
      _invalid: {
        borderColor: 'selection',
      },
    },

    label: {
      fontSize: '24px',
      bottom: 'calc(100% - 28px)',
      transition: '0.25s ease',
      color: 'whiteLight',
      ...generalLabelStyles,
    },

    errorMessage: {
      ...generalLabelStyles,
      ...pullDownLabelStyles,
      color: 'selection',
    },
  },
  sizes: {},
  variants: {
    inverted: {
      textArea: {
        borderColor: 'blackThin',
        color: 'textMain',
      },

      label: {
        color: 'blackLight',
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
