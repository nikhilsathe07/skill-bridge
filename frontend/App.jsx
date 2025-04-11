import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import CourseDetail from "./pages/CourseDetail.jsx";
import Login from "./pages/Login.jsx";
import MentorProfiles from "./pages/MentorProfiles.js";
import Dashboard from "./pages/Dashboard.js";
import UploadWork from "./pages/UploadWork.jsx";
import Forum from "./pages/Forum.js";

// Placeholders for your friend's pages
function Home() {
  return <h1>Home Page (teammate are working)</h1>;
}
function BrowseCourses() {
  return <h1>Browse Courses (teammate are working)</h1>;
}

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<BrowseCourses />} />
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mentors" element={<MentorProfiles />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/upload" element={<UploadWork />} />
        <Route path="/forum" element={<Forum />} />
      </Routes>
    </div>
  );
}

export default App;
