import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Flex } from '@chakra-ui/react';

import { TextArea } from './textarea';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/TextArea',
  component: TextArea,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof TextArea>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TextArea> = (args) => {
  const [value, setValue] = useState('');
  const lengthValidation = (val: string) => {
    if (val) {
      return val.length >= 4;
    }
    return false;
  };

  const [inputValidationState, setInputValidationState] = useState({
    valid: true,
    touched: false,
    errorMessage: '',
  });

  const inputValidation = (inputValue: string) => {
    if (lengthValidation(inputValue)) {
      setInputValidationState({
        valid: true,
        errorMessage: '',
        touched: true,
      });
    } else {
      setInputValidationState({
        touched: true,
        valid: false,
        errorMessage: 'Минимум 4 символа',
      });
    }
    setValue(inputValue);
  };
  return (
    <Flex direction="column" p="40px" bg="#1F202C" height="500px">
      <TextArea
        value={'Uneditable Default Value'}
        placeholder={'With default value'}
        {...args}
      />
      <TextArea placeholder={'Uncontrollable value'} {...args} />

      <Flex direction="column" bg="white" m="20px 0">
        <TextArea
          variant="inverted"
          placeholder={'Uncontrollable value'}
          {...args}
        />
        <TextArea
          variant="inverted"
          isInvalid
          placeholder={'Invalid'}
          {...args}
        />
      </Flex>

      <TextArea
        value={value}
        onChange={(e) => inputValidation(e.target.value)}
        isInvalid={!inputValidationState.valid}
        errorMessage={inputValidationState.errorMessage}
        placeholder={'Invalid with message'}
        {...args}
      />
    </Flex>
  );
};

export const Controllable = Template.bind({});
// Controllable.args = {
//   size: 'sm',
// };
