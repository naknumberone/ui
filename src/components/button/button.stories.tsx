import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Flex, Icon } from '@chakra-ui/react';

import { Button } from './button';
import { ReactComponent as CMD } from '../../assets/CMD.svg';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const getIcon = (CustomIcon: any) => {
  return <Icon as={CustomIcon} />;
};

const iconCMD = getIcon(CMD);

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => (
  <Flex
    direction={'column'}
    __css={{
      Button: {
        mr: 2,
        mb: 4,
      },
    }}
  >
    <div>
      <Button {...args}>Button</Button>
      <Button variant={'action'} {...args}>
        Button
      </Button>
      <Button variant={'floating'} {...args}>
        Button
      </Button>
    </div>
    <div>
      <Button disabled {...args}>
        Button
      </Button>
      <Button disabled variant={'action'} {...args}>
        Button
      </Button>
      <Button disabled variant={'floating'} {...args}>
        Button
      </Button>
    </div>
    <div>
      <Button rightIcon={iconCMD} {...args}>
        Button
      </Button>
      <Button rightIcon={iconCMD} variant={'action'} {...args}>
        Button
      </Button>
      <Button rightIcon={iconCMD} variant={'floating'} {...args}>
        Button
      </Button>
    </div>
  </Flex>
);

export const SM = Template.bind({});
SM.args = {
  size: 'sm',
};

export const MD = Template.bind({});
MD.args = {
  size: 'md',
};

export const LG = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LG.args = {
  size: 'lg',
};
