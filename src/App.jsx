import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Ticketing from "./pages/Ticketing";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Tickets from "./pages/Tickets";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="ticketing" exact element={<Ticketing />} />
          <Route path="admin-panel" exact element={<Admin />} />
          <Route path="login" exact element={<Login />} />
          <Route path="ticketing/tickets" exact element={<Tickets />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
