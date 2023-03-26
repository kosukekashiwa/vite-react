import { act, render, screen } from '@testing-library/react'
import { rest } from 'msw'
import { SWRConfig } from 'swr'

import { server } from '~/mocks/server'
import TestComponrnt from '~/TestComponrnt'

describe('Initial Rendering', () => {
  test('「Hello World」が表示される', async () => {
    await act(() => {
      render(<TestComponrnt />)
    })

    expect(screen.getByText('Hello World')).toBeInTheDocument()
  })

  test('MSW Sample', async () => {
    await act(() => {
      render(<TestComponrnt />)
    })

    expect(await screen.getByText('name-0')).toBeInTheDocument()
    expect(await screen.getByText('name-1')).toBeInTheDocument()
    expect(await screen.getByText('name-2')).toBeInTheDocument()
  })

  test('MSW One-time override', async () => {
    server.use(
      rest.get(`/api/v1/users`, (req, res, ctx) => {
        return res.once(
          ctx.status(200),
          ctx.json([
            { id: '3', name: 'name-3' },
            { id: '4', name: 'name-4' },
          ]),
        )
      }),
    )

    await act(() => {
      render(
        <SWRConfig value={{ provider: () => new Map() }}>
          <TestComponrnt />
        </SWRConfig>,
      )
    })

    // expect(await screen.findByText('name-0')).toBeInTheDocument()
    expect(await screen.getByText('name-3')).toBeInTheDocument()
    expect(await screen.getByText('name-4')).toBeInTheDocument()
  })
})
