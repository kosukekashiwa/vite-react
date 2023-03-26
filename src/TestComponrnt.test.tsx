import { render, screen } from '@testing-library/react'

import TestComponrnt from '~/TestComponrnt'

test('「Hello Test」が描画されている', () => {
  render(<TestComponrnt />)

  screen.debug()

  expect(screen.getByText('Hello Test')).toBeInTheDocument()
})
