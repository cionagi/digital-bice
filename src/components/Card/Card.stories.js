/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'

import Card from './index'

export default {
  title: 'Card',
  component: Card,
  args: {
    image:
      'https://ventaenlinea.bicevida.cl/pub/media/catalog/product/cache/69eb2560c3d44c78f7327201dc5a282b/i/m/img-01.jpg',
    title: 'Title',
    label: 'Label',
    description: 'Description Description Description Description Description Description Description ',
  },
}

const Template = (args) => <Card {...args} />

export const card = Template.bind({})
