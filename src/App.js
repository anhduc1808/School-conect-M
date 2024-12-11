import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './component/Login';
import Home from './pages/Home';
import ForgotPassword from './component/ForgotPassword';
import ResetPassword from './component/ResetPassword';
import Student from './pages/Student';
import Teacher from './pages/Teacher';

const App = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} /> {/* Thêm route cho ForgotPassword */}
      < Route path="/reset-password" element={<ResetPassword />} />
      <Route element={<Home/>}>
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/student" element={<Student/>}/>
        </Route>
      </Routes>
  </Router>
);

export default App;
