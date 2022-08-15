import { Routes, Route } from 'react-router-dom';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Navbar from './components/pages/layout/Navbar';
import User from './components/Users/User';
import Users from './components/Users/Users';
import { users } from './userData';
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<h1>JSX Element</h1>} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users users={users} />} />
        <Route path="/users/:login" element={<User />} />
      </Routes>
    </div>
  );
};

export default App;
