import React from 'react'

import '@upstart/patina-design-system/css-reset'
import { PatinaProvider } from '@upstart/patina-design-system'

const StoryDecorator = ({ children }) => <PatinaProvider>{children}</PatinaProvider>

StoryDecorator.displayName = 'StoryDecorator'

export default StoryDecorator