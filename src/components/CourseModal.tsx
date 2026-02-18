import { useEffect, useCallback } from "react";
import { X, Calendar, DollarSign, User, Clock, BookOpen } from "lucide-react";
import { Course } from "@/lib/mock-data";
import { formatDateTimeMY, formatDateMY } from "@/lib/date-format";
import { showToast } from "@/lib/toast";

interface CourseModalProps {
  course: Course | null;
  onClose: () => void;
}

export default function CourseModal({ course, onClose }: CourseModalProps) {
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") onClose();
  }, [onClose]);

  useEffect(() => {
    if (course) {
      document.body.classList.add("modal-open");
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.classList.remove("modal-open");
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [course, handleKeyDown]);

  if (!course) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  const isFree = course.price === 0;
  const isEnrolled = course.enrolledStatus === "enrolled";

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content" role="dialog" aria-modal="true" aria-label={course.title}>
        {/* Image */}
        <div className="relative">
          <img src={course.image} alt={course.title} className="w-full h-56 sm:h-72 object-cover rounded-t-lg" />
          <button
            onClick={onClose}
            className="absolute top-3 right-3 rounded-full bg-card/90 p-2 text-foreground shadow-md hover:bg-card transition-colors"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
          {isFree && (
            <span className="absolute top-3 left-3 rounded-full bg-success px-3 py-1 text-xs font-bold text-success-foreground">FREE</span>
          )}
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-foreground mb-2">{course.title}</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">{course.description}</p>

          {/* Info grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="flex items-start gap-3 rounded-lg bg-secondary p-3">
              <User className="h-5 w-5 text-accent mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-semibold text-foreground">{course.lecturerName}</p>
                <p className="text-xs text-muted-foreground">{course.lecturerExpertise}</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg bg-secondary p-3">
              <DollarSign className="h-5 w-5 text-accent mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-semibold text-foreground">{isFree ? "Free" : `RM ${course.price.toLocaleString()}`}</p>
                <p className="text-xs text-muted-foreground">Course fee</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg bg-secondary p-3">
              <Clock className="h-5 w-5 text-accent mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-semibold text-foreground">Enrollment Opens</p>
                <p className="text-xs text-muted-foreground">{formatDateTimeMY(course.enrollmentOpenDate)}</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg bg-secondary p-3">
              <Calendar className="h-5 w-5 text-accent mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-semibold text-foreground">Duration</p>
                <p className="text-xs text-muted-foreground">{formatDateMY(course.startDate)} → {formatDateMY(course.endDate)}</p>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3">
            {isEnrolled ? (
              <button
                onClick={() => { showToast("Redirecting to materials…", "info"); onClose(); }}
                className="flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
              >
                <BookOpen className="h-4 w-4" /> Go to Materials
              </button>
            ) : isFree ? (
              <button
                onClick={() => showToast("Enrolled successfully!", "success")}
                className="rounded-lg bg-success px-6 py-3 font-semibold text-success-foreground hover:opacity-90 transition-opacity"
              >
                Enroll for Free
              </button>
            ) : (
              <button
                onClick={() => showToast("Redirecting to payment…", "info")}
                className="rounded-lg bg-accent px-6 py-3 font-semibold text-accent-foreground hover:opacity-90 transition-opacity"
              >
                Pay Now — RM {course.price.toLocaleString()}
              </button>
            )}
            <button
              onClick={onClose}
              className="rounded-lg border border-border px-6 py-3 font-semibold text-foreground hover:bg-secondary transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
