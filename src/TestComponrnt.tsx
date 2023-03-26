import { useFetchUsers } from '~/state/user/apis'
import { User } from '~/state/user/models'

const TestComponrnt: React.FC = () => {
  const { users } = useFetchUsers()

  const title = 'Hello World'

  return (
    <div>
      <p>{title}</p>
      {users?.map((item: User) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  )
}

export default TestComponrnt
