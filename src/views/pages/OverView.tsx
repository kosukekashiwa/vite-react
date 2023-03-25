import { useFetchUser, useFetchUsers } from '~/state/user/apis'
import { User } from '~/state/user/models'

const OverView: React.FC = () => {
  const { users, isLoading: isUsersLoading, isError: isUsersError } = useFetchUsers()
  const { user, isLoading, isError } = useFetchUser('3')

  console.log('Users', isUsersLoading, isUsersError)
  console.log('User', isLoading, isError)

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
