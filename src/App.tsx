
import { Provider } from "react-redux"
// import { ProyectForm } from "./components/Forms/ProyectForm";
import UserForm from "./components/Forms/UserForm";
import { Profile } from "./components/profile/Profile";
import { AppRouter } from "./routers/AppRouter"
import { store } from "./store/store"

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <AppRouter /> */}

        {/* <LoginScreen /> */}
        {/* <UserForm /> */}

        <Profile />

      </div>
    </Provider>
  )
}



export default App;
