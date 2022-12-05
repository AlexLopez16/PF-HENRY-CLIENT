
import { Provider } from "react-redux"
import { LoginScreen } from "./components/auth/LoginScreen"

import { UserForm } from "./components/Forms/UserForm"


import { AppRouter } from "./routers/AppRouter"
import { store } from "./store/store"

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <LoginScreen />
        {/* <AppRouter /> */}
        {/* <AppRouter /> */}

      <UserForm/>

        

      </div>
    </Provider>



)}



export default App;
