import { Calendar, User } from "lucide-react";
import { Course } from "@/lib/mock-data";
import { formatDateTimeMY, formatDateMY } from "@/lib/date-format";

interface CourseCardProps {
  course: Course;
  onViewDetails: (course: Course) => void;
}

export default function CourseCard({ course, onViewDetails }: CourseCardProps) {
  const isFree = course.price === 0;

  return (
    <div
      className="group cursor-pointer overflow-hidden rounded-lg border border-border bg-card shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
      onClick={() => onViewDetails(course)}
    >
      <div className="relative overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {isFree ? (
          <span className="absolute top-3 right-3 rounded-full bg-success px-3 py-1 text-xs font-bold text-success-foreground">FREE</span>
        ) : (
          <span className="absolute top-3 right-3 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
            RM {course.price.toLocaleString()}
          </span>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2">{course.title}</h3>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <User className="h-4 w-4 text-accent" />
          <span>{course.lecturerName}</span>
        </div>
        <div className="text-xs text-muted-foreground space-y-1 mb-4">
          <p>Enrollment Open: {formatDateTimeMY(course.enrollmentOpenDate)}</p>
          <div className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            <span>Duration: {formatDateMY(course.startDate)} → {formatDateMY(course.endDate)}</span>
          </div>
        </div>
        <button className="w-full rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity">
          View Details
        </button>
      </div>
    </div>
  );
}
