import { ComponentStory, ComponentMeta } from '@storybook/react';

import ButtonComponent from '../../components/Button';

export const ButtonBrand: ComponentStory<typeof ButtonComponent> = ()=>
  <ButtonComponent backgroundColor='brand'>Hello, Patina!</ButtonComponent>

export const ButtonBrandAccent: ComponentStory<typeof ButtonComponent> = ()=>
  <ButtonComponent backgroundColor='brandAccent'>Hello, Patina!</ButtonComponent>