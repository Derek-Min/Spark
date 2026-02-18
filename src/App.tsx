import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Courses from "./pages/Courses";
import LecturerPage from "./pages/LecturerPage";
import Materials from "./pages/Materials";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminCoursesPage from "./pages/admin/AdminCoursesPage";
import AdminCourseForm from "./pages/admin/AdminCourseForm";
import AdminLecturers from "./pages/admin/AdminLecturers";
import AdminStudents from "./pages/admin/AdminStudents";
import AdminMaterials from "./pages/admin/AdminMaterials";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/lecturer" element={<LecturerPage />} />
          <Route path="/materials" element={<Materials />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/courses" element={<AdminCoursesPage />} />
          <Route path="/admin/course-form" element={<AdminCourseForm />} />
          <Route path="/admin/lecturers" element={<AdminLecturers />} />
          <Route path="/admin/students" element={<AdminStudents />} />
          <Route path="/admin/materials" element={<AdminMaterials />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
