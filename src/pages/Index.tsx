import { Link } from "react-router-dom";
import { GraduationCap, BookOpen, Users, Award, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import CourseCard from "@/components/CourseCard";
import CourseModal from "@/components/CourseModal";
import { courses, Course } from "@/lib/mock-data";
import { useState } from "react";
import heroBanner from "@/assets/hero-banner.jpg";

export default function Index() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const featured = courses.slice(0, 3);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0">
          <img src={heroBanner} alt="" className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:py-28 lg:py-36 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Learn Without <span className="text-gradient-hero">Limits</span>
            </h1>
            <p className="text-lg sm:text-xl opacity-90 mb-8 leading-relaxed">
              Unlock your potential with expert-led courses in technology, design, and data science. Join thousands of learners in Malaysia.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/courses"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-bold text-accent-foreground hover:opacity-90 transition-opacity"
              >
                Browse Courses <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/register"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-primary-foreground/30 px-6 py-3 font-bold text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
              >
                Register Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-card border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { icon: BookOpen, label: "Courses", value: "50+" },
              { icon: Users, label: "Students", value: "2,000+" },
              { icon: GraduationCap, label: "Graduates", value: "800+" },
              { icon: Award, label: "Lecturers", value: "25+" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <s.icon className="mx-auto h-8 w-8 text-accent mb-2" />
                <p className="text-2xl font-bold text-foreground">{s.value}</p>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-foreground mb-3">Featured Courses</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Explore our most popular courses designed by industry experts</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((c) => (
            <CourseCard key={c.id} course={c} onViewDetails={setSelectedCourse} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
          >
            View All Courses <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-lg opacity-80 mb-8 max-w-xl mx-auto">Join EduLearn today and take the first step toward your dream career.</p>
          <Link
            to="/register"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-3 font-bold text-accent-foreground hover:opacity-90 transition-opacity"
          >
            Get Started Free <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <CourseModal course={selectedCourse} onClose={() => setSelectedCourse(null)} />
    </Layout>
  );
}
