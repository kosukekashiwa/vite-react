import { rest, DefaultBodyType, PathParams } from 'msw'

import { User } from '~/state/user/models'

export const userHandlers = [
  rest.get<DefaultBodyType, PathParams, User[]>(`/api/v1/users`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { id: '0', name: 'name-0' },
        { id: '1', name: 'name-1' },
        { id: '2', name: 'name-2' },
      ]),
    )
  }),
  rest.get<DefaultBodyType, PathParams, User>(`/api/v1/users/:userId`, (req, res, ctx) => {
    const { userId } = req.params

    return res(ctx.status(200), ctx.json({ id: `${userId}`, name: `name-${userId}` }))
  }),
  rest.post<DefaultBodyType, PathParams, DefaultBodyType>(
    `/api/v1/users/:userId`,
    (req, res, ctx) => {
      return res(ctx.status(201))
    },
  ),
  rest.put<DefaultBodyType, PathParams, DefaultBodyType>(`/api/v1/users`, (req, res, ctx) => {
    return res(ctx.status(200))
  }),
  rest.delete<DefaultBodyType, PathParams, DefaultBodyType>(
    `/api/v1/users/:userId`,
    (req, res, ctx) => {
      return res(ctx.status(200))
    },
  ),
]
