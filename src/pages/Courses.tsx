import { useState } from "react";
import Layout from "@/components/Layout";
import CourseCard from "@/components/CourseCard";
import CourseModal from "@/components/CourseModal";
import { courses, Course } from "@/lib/mock-data";
import { Search } from "lucide-react";

export default function Courses() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [search, setSearch] = useState("");

  const filtered = courses.filter(
    (c) =>
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.lecturerName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Layout>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">All Courses</h1>
          <p className="text-muted-foreground mb-6">Browse our complete catalog of professional courses</p>
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search courses or lecturers…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-md border border-input bg-background pl-10 pr-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="text-center text-muted-foreground py-12">No courses found.</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((c) => (
              <CourseCard key={c.id} course={c} onViewDetails={setSelectedCourse} />
            ))}
          </div>
        )}
      </div>
      <CourseModal course={selectedCourse} onClose={() => setSelectedCourse(null)} />
    </Layout>
  );
}
