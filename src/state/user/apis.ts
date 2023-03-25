import useSWR, { useSWRConfig } from 'swr'

import { client } from '~/state/apiClient'
import { User } from '~/state/user/models'

const API_USERS = '/api/v1/users'

const fetcher = (url: string) => client.get(url).then((res) => res.data)

export const useFetchUsers = () => {
  const { data, error, isLoading } = useSWR<User[], Error>(API_USERS, fetcher)

  return {
    users: data,
    isLoading,
    isError: error,
  }
}

export const useReFetchUsers = () => {
  const { mutate: refetchMutate } = useSWRConfig()

  const mutate = () => refetchMutate(API_USERS)

  return { mutate }
}

export const useFetchUser = (id: string) => {
  const { data, error, isLoading } = useSWR<User, Error>(`${API_USERS}/${id}`, fetcher)

  return {
    user: data,
    isLoading,
    isError: error,
  }
}
