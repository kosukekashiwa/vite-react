import { useFetchUser, useFetchUsers } from '~/state/user/apis'
import { User } from '~/state/user/models'

const OverView: React.FC = () => {
  const { users } = useFetchUsers()
  const { user } = useFetchUser('3')

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      {users?.map((item: User) => (
        <div key={item.id}>{item.name}</div>
      ))}
      <div>{`get user of id=3 → id:${user?.id}, name:${user?.name}`}</div>
      <div>OverView</div>
    </div>
  )
}

export default OverView
