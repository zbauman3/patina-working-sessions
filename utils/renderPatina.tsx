import type { ReactElement } from 'react'
import { render, RenderResult, RenderOptions } from '@testing-library/react'
import { PatinaTestProvider } from '@upstart/patina-design-system'

export const renderPatina = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'query'>,
): RenderResult => {
  const renderResults = render(<PatinaTestProvider>{ui}</PatinaTestProvider>, options)

  return renderResults
}