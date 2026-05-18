import { useState } from "react";
import Layout from "@/components/Layout";
import { materials as initialMaterials, courses, Material } from "@/lib/mock-data";
import { showToast } from "@/lib/toast";
import { Pencil, Trash2, Plus, X } from "lucide-react";

export default function AdminMaterials() {
  const [list, setList] = useState<Material[]>(initialMaterials);
  const [editing, setEditing] = useState<Material | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [filterCourse, setFilterCourse] = useState("");

  const filtered = filterCourse ? list.filter((m) => m.courseId === filterCourse) : list;

  const openNew = () => { setEditing({ id: "", courseId: courses[0]?.id || "", title: "", type: "pdf", url: "#", uploadedAt: new Date().toISOString() }); setShowForm(true); };
  const openEdit = (m: Material) => { setEditing({ ...m }); setShowForm(true); };
  const close = () => { setShowForm(false); setEditing(null); };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editing) return;
    if (editing.id) {
      setList((prev) => prev.map((m) => (m.id === editing.id ? editing : m)));
      showToast("Material updated", "success");
    } else {
      setList((prev) => [...prev, { ...editing, id: "m" + Date.now() }]);
      showToast("Material added", "success");
    }
    close();
  };

  const handleDelete = (id: string) => {
    if (confirm("Delete this material?")) {
      setList((prev) => prev.filter((m) => m.id !== id));
      showToast("Material deleted", "success");
    }
  };

  const getCourseName = (id: string) => courses.find((c) => c.id === id)?.title || id;

  return (
    <Layout>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Manage Materials</h1>
            <p className="text-muted-foreground">Upload and manage course materials</p>
          </div>
          <button onClick={openNew} className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity">
            <Plus className="h-4 w-4" /> Add Material
          </button>
        </div>

        <div className="mb-4 max-w-xs">
          <select value={filterCourse} onChange={(e) => setFilterCourse(e.target.value)} className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
            <option value="">All Courses</option>
            {courses.map((c) => <option key={c.id} value={c.id}>{c.title}</option>)}
          </select>
        </div>

        <div className="overflow-x-auto rounded-lg border border-border bg-card">
          <table className="w-full text-sm">
            <thead className="border-b border-border bg-secondary">
              <tr>
                <th className="text-left px-4 py-3 font-semibold text-foreground">Title</th>
                <th className="text-left px-4 py-3 font-semibold text-foreground hidden sm:table-cell">Course</th>
                <th className="text-left px-4 py-3 font-semibold text-foreground hidden md:table-cell">Type</th>
                <th className="text-right px-4 py-3 font-semibold text-foreground">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filtered.map((m) => (
                <tr key={m.id} className="hover:bg-secondary/50 transition-colors">
                  <td className="px-4 py-3 font-medium text-foreground">{m.title}</td>
                  <td className="px-4 py-3 text-muted-foreground hidden sm:table-cell text-xs">{getCourseName(m.courseId)}</td>
                  <td className="px-4 py-3 text-muted-foreground hidden md:table-cell capitalize">{m.type}</td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button onClick={() => openEdit(m)} className="rounded-md p-2 text-foreground hover:bg-secondary" aria-label="Edit"><Pencil className="h-4 w-4" /></button>
                      <button onClick={() => handleDelete(m.id)} className="rounded-md p-2 text-destructive hover:bg-destructive/10" aria-label="Delete"><Trash2 className="h-4 w-4" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showForm && editing && (
        <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && close()}>
          <div className="modal-content max-w-lg">
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="text-xl font-bold text-foreground">{editing.id ? "Edit Material" : "Add Material"}</h2>
              <button onClick={close} className="p-1 text-muted-foreground hover:text-foreground"><X className="h-5 w-5" /></button>
            </div>
            <form onSubmit={handleSave} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Course</label>
                <select value={editing.courseId} onChange={(e) => setEditing({ ...editing, courseId: e.target.value })} required className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                  {courses.map((c) => <option key={c.id} value={c.id}>{c.title}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Title</label>
                <input value={editing.title} onChange={(e) => setEditing({ ...editing, title: e.target.value })} required className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Type</label>
                <select value={editing.type} onChange={(e) => setEditing({ ...editing, type: e.target.value as Material["type"] })} className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                  <option value="pdf">PDF</option>
                  <option value="video">Video</option>
                  <option value="slide">Slide</option>
                  <option value="document">Document</option>
                </select>
              </div>
              <div className="flex gap-3 pt-2">
                <button type="submit" className="rounded-md bg-primary px-6 py-2.5 font-semibold text-primary-foreground hover:opacity-90 transition-opacity">Save</button>
                <button type="button" onClick={close} className="rounded-md border border-border px-6 py-2.5 font-semibold text-foreground hover:bg-secondary transition-colors">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </Layout>
  );
}
