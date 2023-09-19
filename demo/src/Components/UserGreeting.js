function UserGreeting() {
  return (
    <>
      <h1> Logged in as new User</h1>
      <h1>Please sign up.</h1>
      {/* console.log("i am in user login"); */}
    </>
  )
}

function GuestGreeting() {
  return (
    <>
      <h1> Logged in as Guest User</h1>
      <h1>WELCOME</h1>
      {/* console.log("i am in guest login"); */}
    </>
  )
}

export { UserGreeting, GuestGreeting }
