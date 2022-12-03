import { Provider } from "react-redux"
import CompanyForm from "./components/Forms/CompanyForm"
import { AppRouter } from "./routers/AppRouter"
import { store } from "./store/store"

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppRouter />
        <CompanyForm/>
      </div>
    </Provider>
  )
}

export default App
