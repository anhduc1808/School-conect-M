import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './component/Login';
import Homestudent from './pages/Homestudent';
import ForgotPassword from './component/ForgotPassword';
import ResetPassword from './component/ResetPassword';
import Student from './pages/Student';
import Teacher from './pages/Teacher';
import Hometeacher from './pages/Hometeacher';

const App = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} /> {/* Thêm route cho ForgotPassword */}
      < Route path="/reset-password" element={<ResetPassword />} />
      <Route element={<Homestudent/>}>        
          <Route path="/student" element={<Student/>}/>
        </Route>
      <Route element={<Hometeacher/>}>
         <Route path="/teacher" element={<Teacher />} />
        </Route>
      </Routes>
  </Router>
);

export default App;
