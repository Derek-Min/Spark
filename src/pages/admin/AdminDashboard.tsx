import Layout from "@/components/Layout";
import { BookOpen, Users, GraduationCap, FileText } from "lucide-react";
import { courses, lecturers, students, materials } from "@/lib/mock-data";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  const stats = [
    { label: "Courses", value: courses.length, icon: BookOpen, to: "/admin/courses", color: "bg-primary" },
    { label: "Lecturers", value: lecturers.length, icon: GraduationCap, to: "/admin/lecturers", color: "bg-accent" },
    { label: "Students", value: students.length, icon: Users, to: "/admin/students", color: "bg-success" },
    { label: "Materials", value: materials.length, icon: FileText, to: "/admin/materials", color: "bg-info" },
  ];

  return (
    <Layout>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Admin Dashboard</h1>
        <p className="text-muted-foreground mb-8">Manage your e-learning platform</p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <Link key={s.label} to={s.to} className="flex items-center gap-4 rounded-lg border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${s.color} text-primary-foreground`}>
                <s.icon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{s.value}</p>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 rounded-lg border border-border bg-card p-6">
          <h2 className="text-lg font-bold text-foreground mb-4">Recent Activity</h2>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p>📝 New student registered: Fatimah Zahra</p>
            <p>📚 Course updated: Full-Stack Web Development Bootcamp</p>
            <p>📄 Material uploaded: React Introduction Slides</p>
            <p>👨‍🏫 Lecturer added: Mr. James Tan</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
