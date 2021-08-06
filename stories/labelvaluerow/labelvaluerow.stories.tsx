import React from 'react'
import {ComponentStory, ComponentMeta} from '@storybook/react'
import {LabelValue} from '@libprov/labelvalue'
import {LabelValueRow} from '@libprov/labelvaluerow'
export default {
  title: 'components/LabelValueRow',
  component: LabelValueRow,
  argTypes: {},
} as ComponentMeta<typeof LabelValueRow>

const Template: ComponentStory<typeof LabelValueRow> = args => {
  const dataAfiliado = [
    {
      label: 'Estado PBS:',
      value: '',
    },
    {
      label: 'Derecho a servicios:',
      value: '',
    },
    {
      label: 'Estado en Plan Complementario:',
      value: '',
    },
    {
      label: 'Programa Especial:',
      value: '',
    },
    {
      label: 'Programa para el servicio:',
      value: '',
    },
    {
      label: 'Estado en RS:',
      value: '',
    },
    {
      label: 'Fecha de Nacimiento:',
      value: '',
    },
  ]
  return (
    <LabelValueRow
      key={`labelValueRow_1`}
      label={'hector'}
      value={`${'CC'} ${'1073565411'}`}
      concealable={true}
      styles="labelValueRow--first labelValueRow--last"
      delta={0}
      {...args}
    >
      <LabelValue
        key={`labelValue_1`}
        dataColumn={dataAfiliado}
        stylesColumn={'col-sm-12 labelValue__spacing'}
        subColumns={true}
      />
    </LabelValueRow>
  )
}

export const Primary = Template.bind({})
Primary.args = {}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  label: 'Button',
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  label: 'Button',
}
