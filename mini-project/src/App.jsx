import Home from "./pages/Home"
import Users from "./pages/Users"
import UsersDetail from "./pages/UsersDetail"
import { BrowserRouter, Route, Routes} from "react-router-dom"

function App() {
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UsersDetail/>}/>
      </Routes>
    </BrowserRouter>       
    </>
  )
}

export default App




















































