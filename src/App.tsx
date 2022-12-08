
import { Provider } from "react-redux"
import { Profile } from "./components/profile/Profile";
import { AppRouter } from "./routers/AppRouter"
import { store } from "./store/store"

function App() {
  return (
    <Provider store={store}>
      <div className="App">

        <Profile />

        <AppRouter />
      </div>
    </Provider>
  )
}



export default App;
