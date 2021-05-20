/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import Dropdown from './index'

export default {
  title: 'Dropdown',
  component: Dropdown,
  args: {},
}

const Template = (args) => <Dropdown {...args} />

export const dropdown = Template.bind({})
