import UserCard from "./components/UserCard"

function App() {
  return <div>
<UserCard  
 username="DevUser"
isAdmin={true}
onLogout={()=> console.log("logged out")}
/>
</div>
}

export default App
