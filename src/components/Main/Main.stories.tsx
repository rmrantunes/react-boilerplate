import { Meta, Story } from '@storybook/react/types-6-0'
import { Main, MainProps } from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    description: 'default description',
    title: 'default title'
  }
} as Meta<MainProps>

export const Default: Story<MainProps> = (args) => <Main {...args} />

Default.args = {
  title: 'React avançado!'
}
