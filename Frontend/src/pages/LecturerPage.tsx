import Layout from "@/components/Layout";
import { lecturers } from "@/lib/mock-data";
import { Mail, Phone, Award } from "lucide-react";

export default function LecturerPage() {
  return (
    <Layout>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Our Lecturers</h1>
        <p className="text-muted-foreground mb-8">Meet the industry experts behind our courses</p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {lecturers.map((l) => (
            <div key={l.id} className="rounded-lg border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg">
                  {l.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-bold text-foreground">{l.name}</h3>
                  <div className="flex items-center gap-1 text-xs text-accent">
                    <Award className="h-3 w-3" /> {l.expertise}
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{l.bio}</p>
              <div className="space-y-1 text-sm text-muted-foreground">
                <div className="flex items-center gap-2"><Mail className="h-3.5 w-3.5" /> {l.email}</div>
                <div className="flex items-center gap-2"><Phone className="h-3.5 w-3.5" /> {l.phone}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
