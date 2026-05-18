import { useState } from "react";
import Layout from "@/components/Layout";
import { lecturers as initialLecturers, Lecturer } from "@/lib/mock-data";
import { showToast } from "@/lib/toast";
import { Pencil, Trash2, Plus, X } from "lucide-react";

export default function AdminLecturers() {
  const [list, setList] = useState<Lecturer[]>(initialLecturers);
  const [editing, setEditing] = useState<Lecturer | null>(null);
  const [showForm, setShowForm] = useState(false);

  const openNew = () => { setEditing({ id: "", name: "", email: "", expertise: "", bio: "", phone: "" }); setShowForm(true); };
  const openEdit = (l: Lecturer) => { setEditing({ ...l }); setShowForm(true); };
  const close = () => { setShowForm(false); setEditing(null); };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editing) return;
    if (editing.id) {
      setList((prev) => prev.map((l) => (l.id === editing.id ? editing : l)));
      showToast("Lecturer updated", "success");
    } else {
      setList((prev) => [...prev, { ...editing, id: "l" + Date.now() }]);
      showToast("Lecturer added", "success");
    }
    close();
  };

  const handleDelete = (id: string) => {
    if (confirm("Delete this lecturer?")) {
      setList((prev) => prev.filter((l) => l.id !== id));
      showToast("Lecturer deleted", "success");
    }
  };

  return (
    <Layout>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Manage Lecturers</h1>
            <p className="text-muted-foreground">Add, edit, and remove lecturers</p>
          </div>
          <button onClick={openNew} className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity">
            <Plus className="h-4 w-4" /> Add Lecturer
          </button>
        </div>

        <div className="overflow-x-auto rounded-lg border border-border bg-card">
          <table className="w-full text-sm">
            <thead className="border-b border-border bg-secondary">
              <tr>
                <th className="text-left px-4 py-3 font-semibold text-foreground">Name</th>
                <th className="text-left px-4 py-3 font-semibold text-foreground hidden sm:table-cell">Email</th>
                <th className="text-left px-4 py-3 font-semibold text-foreground hidden md:table-cell">Expertise</th>
                <th className="text-right px-4 py-3 font-semibold text-foreground">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {list.map((l) => (
                <tr key={l.id} className="hover:bg-secondary/50 transition-colors">
                  <td className="px-4 py-3 font-medium text-foreground">{l.name}</td>
                  <td className="px-4 py-3 text-muted-foreground hidden sm:table-cell">{l.email}</td>
                  <td className="px-4 py-3 text-muted-foreground hidden md:table-cell">{l.expertise}</td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button onClick={() => openEdit(l)} className="rounded-md p-2 text-foreground hover:bg-secondary" aria-label="Edit"><Pencil className="h-4 w-4" /></button>
                      <button onClick={() => handleDelete(l.id)} className="rounded-md p-2 text-destructive hover:bg-destructive/10" aria-label="Delete"><Trash2 className="h-4 w-4" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Inline form modal */}
      {showForm && editing && (
        <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && close()}>
          <div className="modal-content max-w-lg">
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="text-xl font-bold text-foreground">{editing.id ? "Edit Lecturer" : "Add Lecturer"}</h2>
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
                <label className="block text-sm font-medium text-foreground mb-1">Expertise</label>
                <input value={editing.expertise} onChange={(e) => setEditing({ ...editing, expertise: e.target.value })} required className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Phone</label>
                <input value={editing.phone} onChange={(e) => setEditing({ ...editing, phone: e.target.value })} required className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Bio</label>
                <textarea value={editing.bio} onChange={(e) => setEditing({ ...editing, bio: e.target.value })} rows={3} required className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
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
