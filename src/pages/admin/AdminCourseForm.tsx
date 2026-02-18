import { useState, useRef } from "react";
import Layout from "@/components/Layout";
import { lecturers } from "@/lib/mock-data";
import { showToast } from "@/lib/toast";
import { Upload, X, Image as ImageIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AdminCourseForm() {
  const navigate = useNavigate();
  const fileRef = useRef<HTMLInputElement>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showToast("Course saved successfully!", "success");
    navigate("/admin/courses");
  };

  return (
    <Layout>
      <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6">
        <h1 className="text-3xl font-bold text-foreground mb-2">Course Form</h1>
        <p className="text-muted-foreground mb-8">Create or edit a course</p>

        <form onSubmit={handleSubmit} className="space-y-5 rounded-lg border border-border bg-card p-6">
          {/* Image upload */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Course Image</label>
            {imagePreview ? (
              <div className="relative inline-block">
                <img src={imagePreview} alt="Preview" className="h-48 w-full max-w-sm rounded-md object-cover" />
                <button
                  type="button"
                  onClick={() => { setImagePreview(null); if (fileRef.current) fileRef.current.value = ""; }}
                  className="absolute top-2 right-2 rounded-full bg-destructive p-1 text-destructive-foreground"
                  aria-label="Remove image"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => fileRef.current?.click()}
                className="flex h-48 w-full max-w-sm items-center justify-center rounded-md border-2 border-dashed border-border bg-secondary hover:bg-muted transition-colors"
              >
                <div className="text-center text-muted-foreground">
                  <Upload className="mx-auto h-8 w-8 mb-2" />
                  <p className="text-sm font-medium">Click to upload image</p>
                  <p className="text-xs">PNG, JPG up to 5MB</p>
                </div>
              </button>
            )}
            <input ref={fileRef} type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
          </div>

          <div>
            <label htmlFor="title" className="block text-sm font-medium text-foreground mb-1">Title</label>
            <input id="title" type="text" required className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-foreground mb-1">Description</label>
            <textarea id="description" rows={4} required className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="price" className="block text-sm font-medium text-foreground mb-1">Price (RM)</label>
              <input id="price" type="number" min="0" required className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <div>
              <label htmlFor="lecturer" className="block text-sm font-medium text-foreground mb-1">Lecturer</label>
              <select id="lecturer" required className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                <option value="">Select lecturer</option>
                {lecturers.map((l) => <option key={l.id} value={l.id}>{l.name}</option>)}
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label htmlFor="enrollOpen" className="block text-sm font-medium text-foreground mb-1">Enrollment Open</label>
              <input id="enrollOpen" type="datetime-local" required className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <div>
              <label htmlFor="startDate" className="block text-sm font-medium text-foreground mb-1">Start Date</label>
              <input id="startDate" type="date" required className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <div>
              <label htmlFor="endDate" className="block text-sm font-medium text-foreground mb-1">End Date</label>
              <input id="endDate" type="date" required className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <button type="submit" className="rounded-md bg-primary px-6 py-2.5 font-semibold text-primary-foreground hover:opacity-90 transition-opacity">
              Save Course
            </button>
            <button type="button" onClick={() => navigate("/admin/courses")} className="rounded-md border border-border px-6 py-2.5 font-semibold text-foreground hover:bg-secondary transition-colors">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
