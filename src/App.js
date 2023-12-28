// import './App.css';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Dashboard from './pages/Dashboard';
// import Login from './pages/Login';
// import MainLayout from './components/MainLayout';
// import Resetpassword from './pages/Resetpassword';
// import Forgotpassword from './pages/Forgotpassword';
// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/reset-password" element={<Resetpassword />} />
//         <Route path="/forgot-password" element={<Forgotpassword />} />
//         <Route path="/admin" element={<MainLayout />}/>
//           <Route index element={<Dashboard />} />
        
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import MainLayout from './components/MainLayout';
import Resetpassword from './pages/Resetpassword';
import Forgotpassword from './pages/Forgotpassword';
import Enquiries from './pages/Enquiries';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reset-password" element={<Resetpassword />} />
        <Route path="/forgot-password" element={<Forgotpassword />} />
        <Route path="/admin" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='enquiries' element={<Enquiries />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
