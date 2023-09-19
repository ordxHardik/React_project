import { GuestGreeting } from "./UserGreeting"
import { UserGreeting } from "./UserGreeting"
function Greeting(props) {
  //const isLoggedIn
  const isLoggedIn = Boolean(props.isLoggedIn)
  //const isLoggedIn=Boolean(false);
  // console.log("The value of fag is:"+isLoggedIn);
  if (isLoggedIn == false) {
    return <GuestGreeting />
  } //if (isLoggedIn=='false') ;
  else return <UserGreeting />
  //   console.log("the value of lag is" + isLoggedIn)

  // {Boolean(isLoggedIn) ? <UserGreeting /> : <GuestGreeting />}
}

export default Greeting
