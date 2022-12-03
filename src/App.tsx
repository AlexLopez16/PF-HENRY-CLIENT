import { Provider } from "react-redux"
import { UserForm } from "./components/UserForm"
import { AppRouter } from "./routers/AppRouter"
import { store } from "./store/store"

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppRouter />
      <UserForm/>
      </div>
    </Provider>
  )
}

export default App
