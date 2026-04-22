interface Props{
    username: string,
    isAdmin: boolean,
    onLogout: ()=>void
}

const UserCard = ({username,isAdmin,onLogout}: Props) => {
  return (
    <div className="card">
        <h3>Welcome, {username}</h3>
        {isAdmin && <span className="badge">Administrator</span>}
        <button onClick={onLogout}>Logout</button>
    </div>
  )
}

export default UserCard
