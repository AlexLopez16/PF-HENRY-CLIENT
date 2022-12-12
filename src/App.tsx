
import { Provider } from "react-redux"
import { LoginScreen } from "./components/auth/LoginScreen";
// import { ProyectForm } from "./components/Forms/ProyectForm";
import { Profile } from "./components/profile/Profile";



import { AppRouter } from "./routers/AppRouter"
import { store } from "./store/store"

function App() {
  return (
    <Provider store={store}>
      <div className="App">

        {/* <Profile /> */}

        {/* <LoginScreen /> */}

        <AppRouter />
      </div>
    </Provider>
  )
}



export default App;
