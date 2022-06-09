import { ComponentStory, ComponentMeta } from '@storybook/react';

import IndexPage from '../../pages/index';

const Meta: ComponentMeta<typeof IndexPage> = {
  title: 'Pages/Index',
  component: IndexPage,
}

export default Meta

export const Index: ComponentStory<typeof IndexPage> = ()=> <IndexPage />