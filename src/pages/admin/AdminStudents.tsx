import { useState } from "react";
import Layout from "@/components/Layout";
import { students as initialStudents, Student } from "@/lib/mock-data";
import { formatDateTimeMY } from "@/lib/date-format";
import { showToast } from "@/lib/toast";
import { Pencil, Trash2, Plus, X } from "lucide-react";

export default function AdminStudents() {
  const [list, setList] = useState<Student[]>(initialStudents);
  const [editing, setEditing] = useState<Student | null>(null);
  const [showForm, setShowForm] = useState(false);

  const openNew = () => { setEditing({ id: "", name: "", email: "", phone: "", registeredAt: new Date().toISOString() }); setShowForm(true); };
  const openEdit = (s: Student) => { setEditing({ ...s }); setShowForm(true); };
  const close = () => { setShowForm(false); setEditing(null); };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editing) return;
    if (editing.id) {
      setList((prev) => prev.map((s) => (s.id === editing.id ? editing : s)));
      showToast("Student updated", "success");
    } else {
      setList((prev) => [...prev, { ...editing, id: "s" + Date.now() }]);
      showToast("Student added", "success");
    }
    close();
  };

  const handleDelete = (id: string) => {
    if (confirm("Delete this student?")) {
      setList((prev) => prev.filter((s) => s.id !== id));
      showToast("Student deleted", "success");
    }
  };

  return (
    <Layout>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Manage Students</h1>
            <p className="text-muted-foreground">View, add, edit, and remove students</p>
          </div>
          <button onClick={openNew} className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity">
            <Plus className="h-4 w-4" /> Add Student
          </button>
        </div>

        <div className="overflow-x-auto rounded-lg border border-border bg-card">
          <table className="w-full text-sm">
            <thead className="border-b border-border bg-secondary">
              <tr>
                <th className="text-left px-4 py-3 font-semibold text-foreground">Name</th>
                <th className="text-left px-4 py-3 font-semibold text-foreground hidden sm:table-cell">Email</th>
                <th className="text-left px-4 py-3 font-semibold text-foreground hidden md:table-cell">Phone</th>
                <th className="text-left px-4 py-3 font-semibold text-foreground hidden lg:table-cell">Registered</th>
                <th className="text-right px-4 py-3 font-semibold text-foreground">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {list.map((s) => (
                <tr key={s.id} className="hover:bg-secondary/50 transition-colors">
                  <td className="px-4 py-3 font-medium text-foreground">{s.name}</td>
                  <td className="px-4 py-3 text-muted-foreground hidden sm:table-cell">{s.email}</td>
                  <td className="px-4 py-3 text-muted-foreground hidden md:table-cell">{s.phone}</td>
                  <td className="px-4 py-3 text-muted-foreground hidden lg:table-cell text-xs">{formatDateTimeMY(s.registeredAt)}</td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button onClick={() => openEdit(s)} className="rounded-md p-2 text-foreground hover:bg-secondary" aria-label="Edit"><Pencil className="h-4 w-4" /></button>
                      <button onClick={() => handleDelete(s.id)} className="rounded-md p-2 text-destructive hover:bg-destructive/10" aria-label="Delete"><Trash2 className="h-4 w-4" /></button>
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
              <h2 className="text-xl font-bold text-foreground">{editing.id ? "Edit Student" : "Add Student"}</h2>
              <button onClick={close} className="p-1 text-muted-foreground hover:text-foreground"><X className="h-5 w-5" /></button>
            </div>
            <form onSubmit={handleSave} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Name</label>
                <input value={editing.name} onChange={(e) => setEditing({ ...editing, name: e.target.value })} required className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Email</label>
                <input type="email" value={editing.email} onChange={(e) => setEditing({ ...editing, email: e.target.value })} required className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Phone</label>
                <input value={editing.phone} onChange={(e) => setEditing({ ...editing, phone: e.target.value })} required className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
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
