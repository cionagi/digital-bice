/* eslint-disable react/jsx-props-no-spreading,no-console */
import React from 'react'

import CustomButton from './index'

export default {
  title: 'CustomButton',
  component: CustomButton,
  args: {
    text: 'Button',
  },
}

const Template = (args) => <CustomButton onClick={() => console.log(1)} {...args} />

export const customButton = Template.bind({})
