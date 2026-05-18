import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 font-bold text-lg mb-3">
              <GraduationCap className="h-6 w-6 text-accent" />
              EduLearn
            </div>
            <p className="text-sm opacity-80">Empowering learners with quality education. Join thousands of students building their future with us.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <div className="flex flex-col gap-1.5 text-sm opacity-80">
              <Link to="/" className="hover:opacity-100 transition-opacity">Home</Link>
              <Link to="/courses" className="hover:opacity-100 transition-opacity">Courses</Link>
              <Link to="/register" className="hover:opacity-100 transition-opacity">Register</Link>
              <Link to="/login" className="hover:opacity-100 transition-opacity">Login</Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Support</h4>
            <div className="flex flex-col gap-1.5 text-sm opacity-80">
              <span>help@edulearn.my</span>
              <span>+60 3-1234 5678</span>
              <span>Mon – Fri, 9AM – 6PM MYT</span>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Address</h4>
            <p className="text-sm opacity-80">Level 10, Menara EduLearn<br />Jalan Bukit Bintang<br />55100 Kuala Lumpur, Malaysia</p>
          </div>
        </div>
        <div className="mt-8 border-t border-primary-foreground/20 pt-6 text-center text-sm opacity-60">
          © 2026 EduLearn. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
