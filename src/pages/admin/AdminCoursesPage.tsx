import { useState } from "react";
import Layout from "@/components/Layout";
import { courses as initialCourses, Course } from "@/lib/mock-data";
import { formatDateMY } from "@/lib/date-format";
import { showToast } from "@/lib/toast";
import { Pencil, Trash2, Plus } from "lucide-react";
import { Link } from "react-router-dom";

export default function AdminCourses() {
  const [courseList, setCourseList] = useState<Course[]>(initialCourses);

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this course?")) {
      setCourseList((prev) => prev.filter((c) => c.id !== id));
      showToast("Course deleted", "success");
    }
  };

  return (
    <Layout>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Manage Courses</h1>
            <p className="text-muted-foreground">Create, edit, and delete courses</p>
          </div>
          <Link
            to="/admin/course-form"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
          >
            <Plus className="h-4 w-4" /> Add Course
          </Link>
        </div>

        <div className="overflow-x-auto rounded-lg border border-border bg-card">
          <table className="w-full text-sm">
            <thead className="border-b border-border bg-secondary">
              <tr>
                <th className="text-left px-4 py-3 font-semibold text-foreground">Image</th>
                <th className="text-left px-4 py-3 font-semibold text-foreground">Title</th>
                <th className="text-left px-4 py-3 font-semibold text-foreground hidden sm:table-cell">Lecturer</th>
                <th className="text-left px-4 py-3 font-semibold text-foreground hidden md:table-cell">Price</th>
                <th className="text-left px-4 py-3 font-semibold text-foreground hidden lg:table-cell">Duration</th>
                <th className="text-right px-4 py-3 font-semibold text-foreground">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {courseList.map((c) => (
                <tr key={c.id} className="hover:bg-secondary/50 transition-colors">
                  <td className="px-4 py-3">
                    <img src={c.image} alt={c.title} className="h-10 w-14 rounded object-cover" />
                  </td>
                  <td className="px-4 py-3 font-medium text-foreground">{c.title}</td>
                  <td className="px-4 py-3 text-muted-foreground hidden sm:table-cell">{c.lecturerName}</td>
                  <td className="px-4 py-3 text-muted-foreground hidden md:table-cell">{c.price === 0 ? "Free" : `RM ${c.price}`}</td>
                  <td className="px-4 py-3 text-muted-foreground hidden lg:table-cell text-xs">{formatDateMY(c.startDate)} → {formatDateMY(c.endDate)}</td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link to={`/admin/course-form?id=${c.id}`} className="rounded-md p-2 text-foreground hover:bg-secondary" aria-label="Edit">
                        <Pencil className="h-4 w-4" />
                      </Link>
                      <button onClick={() => handleDelete(c.id)} className="rounded-md p-2 text-destructive hover:bg-destructive/10" aria-label="Delete">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
