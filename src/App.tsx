import '~/App.css'

import axios from 'axios'
import useSWR from 'swr'

import { User } from '~/state/user/models'

const fetcher = (url: string) => axios.get(url).then((res) => res.data)

function App() {
  const { data } = useSWR<User[]>('/api/v1/users', fetcher)

  // eslint-disable-next-line no-console
  console.log(data)

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      {data?.map((item: User) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  )
}

export default App
