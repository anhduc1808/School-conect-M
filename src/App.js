import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './component/Login';
import Homestudent from './pages/Homestudent';
import ForgotPassword from './component/ForgotPassword';
import ResetPassword from './component/ResetPassword';
import Student from './pages/Student';
import Teacher from './pages/Teacher';
import Hometeacher from './pages/Hometeacher';
import EventDetailstudent from "./pages/EventDetailstudent";
import EventDetailteacher from "./pages/EventDetailteacher";
import TeachingClasses from './pages/TeachingClasses';



const App = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} /> {/* Thêm route cho ForgotPassword */}
      < Route path="/reset-password" element={<ResetPassword />} />
      <Route element={<Homestudent/>}>        
          <Route path="/student" element={<Student/>}/>
          <Route path="/eventDetailstudent" element={<EventDetailstudent/>}/>

        </Route>
      <Route element={<Hometeacher/>}>
         <Route path="/teacher" element={<Teacher />} />
         <Route path="/eventDetailteacher" element={<EventDetailteacher/>}/>
        <Route path="/teachingClasses" element={<TeachingClasses />}/>
        </Route>
      </Routes>
  </Router>
);

export default App;
