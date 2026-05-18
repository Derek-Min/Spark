import { useState } from "react";
import Layout from "@/components/Layout";
import { courses, materials } from "@/lib/mock-data";
import { FileText, Video, Presentation, File } from "lucide-react";

const typeIcons = { pdf: FileText, video: Video, slide: Presentation, document: File };

export default function Materials() {
  const [selectedCourse, setSelectedCourse] = useState(courses[0]?.id || "");
  const filtered = materials.filter((m) => m.courseId === selectedCourse);

  return (
    <Layout>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Course Materials</h1>
        <p className="text-muted-foreground mb-6">Access your enrolled course resources</p>

        <div className="mb-6 max-w-xs">
          <label htmlFor="course-select" className="block text-sm font-medium text-foreground mb-1">Select Course</label>
          <select
            id="course-select"
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
            className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          >
            {courses.map((c) => (
              <option key={c.id} value={c.id}>{c.title}</option>
            ))}
          </select>
        </div>

        {filtered.length === 0 ? (
          <p className="text-muted-foreground py-8">No materials available for this course yet.</p>
        ) : (
          <div className="space-y-3">
            {filtered.map((m) => {
              const Icon = typeIcons[m.type];
              return (
                <div key={m.id} className="flex items-center gap-4 rounded-lg border border-border bg-card p-4 hover:shadow-sm transition-shadow">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-secondary">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground">{m.title}</p>
                    <p className="text-xs text-muted-foreground capitalize">{m.type}</p>
                  </div>
                  <button className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity">
                    Download
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </Layout>
  );
}
