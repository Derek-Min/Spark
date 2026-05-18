import courseWebDev from "@/assets/course-web-dev.jpg";
import courseDataScience from "@/assets/course-data-science.jpg";
import courseUiDesign from "@/assets/course-ui-design.jpg";
import courseMobileDev from "@/assets/course-mobile-dev.jpg";
import courseCybersecurity from "@/assets/course-cybersecurity.jpg";
import courseCloud from "@/assets/course-cloud.jpg";

export interface Lecturer {
  id: string;
  name: string;
  email: string;
  expertise: string;
  bio: string;
  phone: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  lecturerId: string;
  lecturerName: string;
  lecturerExpertise: string;
  enrollmentOpenDate: string;
  startDate: string;
  endDate: string;
  enrolledStatus?: "not-enrolled" | "enrolled" | "pending";
}

export interface Student {
  id: string;
  name: string;
  email: string;
  phone: string;
  registeredAt: string;
}

export interface Material {
  id: string;
  courseId: string;
  title: string;
  type: "pdf" | "video" | "slide" | "document";
  url: string;
  uploadedAt: string;
}

export const lecturers: Lecturer[] = [
  { id: "l1", name: "Dr. Sarah Chen", email: "sarah.chen@edu.my", expertise: "Full-Stack Web Development", bio: "15+ years in web technologies. PhD in Computer Science from UTM. Former lead developer at Grab.", phone: "+60 12-345 6789" },
  { id: "l2", name: "Prof. Ahmad Razak", email: "ahmad.razak@edu.my", expertise: "Data Science & Machine Learning", bio: "Published researcher with 50+ papers. Expert in deep learning and NLP. Consultant for Bank Negara.", phone: "+60 13-456 7890" },
  { id: "l3", name: "Ms. Lisa Wong", email: "lisa.wong@edu.my", expertise: "UI/UX Design", bio: "Award-winning designer. Former design lead at Shopee Malaysia. Mentor at 500 Startups.", phone: "+60 14-567 8901" },
  { id: "l4", name: "Mr. Raj Kumar", email: "raj.kumar@edu.my", expertise: "Mobile App Development", bio: "Built 30+ apps on Play Store and App Store. Flutter & React Native specialist.", phone: "+60 15-678 9012" },
  { id: "l5", name: "Dr. Nurul Huda", email: "nurul.huda@edu.my", expertise: "Cybersecurity", bio: "CISSP certified. Former CISO at Maybank. Specializes in penetration testing and security audits.", phone: "+60 16-789 0123" },
  { id: "l6", name: "Mr. James Tan", email: "james.tan@edu.my", expertise: "Cloud Computing & DevOps", bio: "AWS Solutions Architect Professional. 10+ years managing enterprise cloud infrastructure.", phone: "+60 17-890 1234" },
];

export const courses: Course[] = [
  {
    id: "c1", title: "Full-Stack Web Development Bootcamp", description: "Master HTML, CSS, JavaScript, React, Node.js, and databases. Build real-world projects from scratch and deploy them to production. This comprehensive bootcamp covers everything from frontend fundamentals to backend architecture, RESTful APIs, authentication, and cloud deployment.",
    price: 2500, image: courseWebDev, lecturerId: "l1", lecturerName: "Dr. Sarah Chen", lecturerExpertise: "Full-Stack Web Development",
    enrollmentOpenDate: "2026-02-18T21:41:00", startDate: "2026-03-01", endDate: "2026-05-30", enrolledStatus: "not-enrolled",
  },
  {
    id: "c2", title: "Data Science & Machine Learning", description: "Learn Python, Pandas, NumPy, Scikit-learn, TensorFlow, and data visualization. Gain hands-on experience with real datasets and build predictive models. Covers statistical analysis, feature engineering, deep learning, and model deployment.",
    price: 3000, image: courseDataScience, lecturerId: "l2", lecturerName: "Prof. Ahmad Razak", lecturerExpertise: "Data Science & Machine Learning",
    enrollmentOpenDate: "2026-02-20T09:00:00", startDate: "2026-03-15", endDate: "2026-06-15", enrolledStatus: "not-enrolled",
  },
  {
    id: "c3", title: "UI/UX Design Masterclass", description: "Design beautiful, user-friendly interfaces. Learn Figma, design thinking, wireframing, prototyping, usability testing, and design systems. Create a professional portfolio by the end of the course.",
    price: 0, image: courseUiDesign, lecturerId: "l3", lecturerName: "Ms. Lisa Wong", lecturerExpertise: "UI/UX Design",
    enrollmentOpenDate: "2026-02-15T08:00:00", startDate: "2026-03-10", endDate: "2026-05-10", enrolledStatus: "enrolled",
  },
  {
    id: "c4", title: "Mobile App Development with Flutter", description: "Build cross-platform mobile apps with Flutter and Dart. Learn state management, REST API integration, Firebase, push notifications, and app store deployment. Build 5 complete apps.",
    price: 2800, image: courseMobileDev, lecturerId: "l4", lecturerName: "Mr. Raj Kumar", lecturerExpertise: "Mobile App Development",
    enrollmentOpenDate: "2026-02-25T10:00:00", startDate: "2026-04-01", endDate: "2026-06-30", enrolledStatus: "not-enrolled",
  },
  {
    id: "c5", title: "Cybersecurity Fundamentals", description: "Understand network security, ethical hacking, cryptography, and security operations. Prepare for CompTIA Security+ certification. Hands-on labs with Kali Linux and real-world scenarios.",
    price: 3500, image: courseCybersecurity, lecturerId: "l5", lecturerName: "Dr. Nurul Huda", lecturerExpertise: "Cybersecurity",
    enrollmentOpenDate: "2026-03-01T09:00:00", startDate: "2026-04-15", endDate: "2026-07-15", enrolledStatus: "not-enrolled",
  },
  {
    id: "c6", title: "Cloud Computing & DevOps", description: "Master AWS, Docker, Kubernetes, CI/CD pipelines, and Infrastructure as Code. Learn to architect scalable, resilient cloud solutions. Includes hands-on labs and real deployment scenarios.",
    price: 2900, image: courseCloud, lecturerId: "l6", lecturerName: "Mr. James Tan", lecturerExpertise: "Cloud Computing & DevOps",
    enrollmentOpenDate: "2026-02-28T14:00:00", startDate: "2026-03-20", endDate: "2026-06-20", enrolledStatus: "not-enrolled",
  },
];

export const students: Student[] = [
  { id: "s1", name: "Ali bin Hassan", email: "ali@student.edu.my", phone: "+60 11-111 1111", registeredAt: "2026-01-15T10:30:00" },
  { id: "s2", name: "Mei Ling Tan", email: "meiling@student.edu.my", phone: "+60 11-222 2222", registeredAt: "2026-01-20T14:00:00" },
  { id: "s3", name: "Priya Devi", email: "priya@student.edu.my", phone: "+60 11-333 3333", registeredAt: "2026-02-01T09:15:00" },
  { id: "s4", name: "John Lim", email: "john@student.edu.my", phone: "+60 11-444 4444", registeredAt: "2026-02-05T16:45:00" },
  { id: "s5", name: "Fatimah Zahra", email: "fatimah@student.edu.my", phone: "+60 11-555 5555", registeredAt: "2026-02-10T11:20:00" },
];

export const materials: Material[] = [
  { id: "m1", courseId: "c1", title: "HTML & CSS Fundamentals", type: "pdf", url: "#", uploadedAt: "2026-02-01T10:00:00" },
  { id: "m2", courseId: "c1", title: "JavaScript Basics - Video Lecture", type: "video", url: "#", uploadedAt: "2026-02-03T10:00:00" },
  { id: "m3", courseId: "c1", title: "React Introduction Slides", type: "slide", url: "#", uploadedAt: "2026-02-05T10:00:00" },
  { id: "m4", courseId: "c2", title: "Python for Data Science", type: "pdf", url: "#", uploadedAt: "2026-02-02T10:00:00" },
  { id: "m5", courseId: "c2", title: "Machine Learning Algorithms", type: "document", url: "#", uploadedAt: "2026-02-04T10:00:00" },
  { id: "m6", courseId: "c3", title: "Design Thinking Workshop", type: "slide", url: "#", uploadedAt: "2026-02-06T10:00:00" },
  { id: "m7", courseId: "c3", title: "Figma Basics Tutorial", type: "video", url: "#", uploadedAt: "2026-02-07T10:00:00" },
];
