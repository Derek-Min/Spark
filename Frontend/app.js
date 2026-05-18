const STORAGE_KEY = 'edulearn_vanilla_data_v1';

const seed = {
  lecturers: [
    { id: 'l1', name: 'Dr. Sarah Chen', email: 'sarah.chen@edu.my', expertise: 'Full-Stack Web Development', bio: '15+ years in web technologies. PhD in Computer Science from UTM. Former lead developer at Grab.', phone: '+60 12-345 6789' },
    { id: 'l2', name: 'Prof. Ahmad Razak', email: 'ahmad.razak@edu.my', expertise: 'Data Science & Machine Learning', bio: 'Published researcher with 50+ papers. Expert in deep learning and NLP. Consultant for Bank Negara.', phone: '+60 13-456 7890' },
    { id: 'l3', name: 'Ms. Lisa Wong', email: 'lisa.wong@edu.my', expertise: 'UI/UX Design', bio: 'Award-winning designer. Former design lead at Shopee Malaysia. Mentor at 500 Startups.', phone: '+60 14-567 8901' },
    { id: 'l4', name: 'Mr. Raj Kumar', email: 'raj.kumar@edu.my', expertise: 'Mobile App Development', bio: 'Built 30+ apps on Play Store and App Store. Flutter & React Native specialist.', phone: '+60 15-678 9012' },
    { id: 'l5', name: 'Dr. Nurul Huda', email: 'nurul.huda@edu.my', expertise: 'Cybersecurity', bio: 'CISSP certified. Former CISO at Maybank. Specializes in penetration testing and security audits.', phone: '+60 16-789 0123' },
    { id: 'l6', name: 'Mr. James Tan', email: 'james.tan@edu.my', expertise: 'Cloud Computing & DevOps', bio: 'AWS Solutions Architect Professional. 10+ years managing enterprise cloud infrastructure.', phone: '+60 17-890 1234' }
  ],
  courses: [
    { id: 'c1', title: 'Full-Stack Web Development Bootcamp', description: 'Master HTML, CSS, JavaScript, React, Node.js, and databases. Build real-world projects from scratch and deploy them to production. This comprehensive bootcamp covers everything from frontend fundamentals to backend architecture, RESTful APIs, authentication, and cloud deployment.', price: 2500, image: 'assets/course-web-dev.jpg', lecturerId: 'l1', lecturerName: 'Dr. Sarah Chen', lecturerExpertise: 'Full-Stack Web Development', enrollmentOpenDate: '2026-02-18T21:41:00', startDate: '2026-03-01', endDate: '2026-05-30', enrolledStatus: 'not-enrolled' },
    { id: 'c2', title: 'Data Science & Machine Learning', description: 'Learn Python, Pandas, NumPy, Scikit-learn, TensorFlow, and data visualization. Gain hands-on experience with real datasets and build predictive models. Covers statistical analysis, feature engineering, deep learning, and model deployment.', price: 3000, image: 'assets/course-data-science.jpg', lecturerId: 'l2', lecturerName: 'Prof. Ahmad Razak', lecturerExpertise: 'Data Science & Machine Learning', enrollmentOpenDate: '2026-02-20T09:00:00', startDate: '2026-03-15', endDate: '2026-06-15', enrolledStatus: 'not-enrolled' },
    { id: 'c3', title: 'UI/UX Design Masterclass', description: 'Design beautiful, user-friendly interfaces. Learn Figma, design thinking, wireframing, prototyping, usability testing, and design systems. Create a professional portfolio by the end of the course.', price: 0, image: 'assets/course-ui-design.jpg', lecturerId: 'l3', lecturerName: 'Ms. Lisa Wong', lecturerExpertise: 'UI/UX Design', enrollmentOpenDate: '2026-02-15T08:00:00', startDate: '2026-03-10', endDate: '2026-05-10', enrolledStatus: 'enrolled' },
    { id: 'c4', title: 'Mobile App Development with Flutter', description: 'Build cross-platform mobile apps with Flutter and Dart. Learn state management, REST API integration, Firebase, push notifications, and app store deployment. Build 5 complete apps.', price: 2800, image: 'assets/course-mobile-dev.jpg', lecturerId: 'l4', lecturerName: 'Mr. Raj Kumar', lecturerExpertise: 'Mobile App Development', enrollmentOpenDate: '2026-02-25T10:00:00', startDate: '2026-04-01', endDate: '2026-06-30', enrolledStatus: 'not-enrolled' },
    { id: 'c5', title: 'Cybersecurity Fundamentals', description: 'Understand network security, ethical hacking, cryptography, and security operations. Prepare for CompTIA Security+ certification. Hands-on labs with Kali Linux and real-world scenarios.', price: 3500, image: 'assets/course-cybersecurity.jpg', lecturerId: 'l5', lecturerName: 'Dr. Nurul Huda', lecturerExpertise: 'Cybersecurity', enrollmentOpenDate: '2026-03-01T09:00:00', startDate: '2026-04-15', endDate: '2026-07-15', enrolledStatus: 'not-enrolled' },
    { id: 'c6', title: 'Cloud Computing & DevOps', description: 'Master AWS, Docker, Kubernetes, CI/CD pipelines, and Infrastructure as Code. Learn to architect scalable, resilient cloud solutions. Includes hands-on labs and real deployment scenarios.', price: 2900, image: 'assets/course-cloud.jpg', lecturerId: 'l6', lecturerName: 'Mr. James Tan', lecturerExpertise: 'Cloud Computing & DevOps', enrollmentOpenDate: '2026-02-28T14:00:00', startDate: '2026-03-20', endDate: '2026-06-20', enrolledStatus: 'not-enrolled' }
  ],
  students: [
    { id: 's1', name: 'Ali bin Hassan', email: 'ali@student.edu.my', phone: '+60 11-111 1111', registeredAt: '2026-01-15T10:30:00' },
    { id: 's2', name: 'Mei Ling Tan', email: 'meiling@student.edu.my', phone: '+60 11-222 2222', registeredAt: '2026-01-20T14:00:00' },
    { id: 's3', name: 'Priya Devi', email: 'priya@student.edu.my', phone: '+60 11-333 3333', registeredAt: '2026-02-01T09:15:00' },
    { id: 's4', name: 'John Lim', email: 'john@student.edu.my', phone: '+60 11-444 4444', registeredAt: '2026-02-05T16:45:00' },
    { id: 's5', name: 'Fatimah Zahra', email: 'fatimah@student.edu.my', phone: '+60 11-555 5555', registeredAt: '2026-02-10T11:20:00' }
  ],
  materials: [
    { id: 'm1', courseId: 'c1', title: 'HTML & CSS Fundamentals', type: 'pdf', url: '#', uploadedAt: '2026-02-01T10:00:00' },
    { id: 'm2', courseId: 'c1', title: 'JavaScript Basics - Video Lecture', type: 'video', url: '#', uploadedAt: '2026-02-03T10:00:00' },
    { id: 'm3', courseId: 'c1', title: 'React Introduction Slides', type: 'slide', url: '#', uploadedAt: '2026-02-05T10:00:00' },
    { id: 'm4', courseId: 'c2', title: 'Python for Data Science', type: 'pdf', url: '#', uploadedAt: '2026-02-02T10:00:00' },
    { id: 'm5', courseId: 'c2', title: 'Machine Learning Algorithms', type: 'document', url: '#', uploadedAt: '2026-02-04T10:00:00' },
    { id: 'm6', courseId: 'c3', title: 'Design Thinking Workshop', type: 'slide', url: '#', uploadedAt: '2026-02-06T10:00:00' },
    { id: 'm7', courseId: 'c3', title: 'Figma Basics Tutorial', type: 'video', url: '#', uploadedAt: '2026-02-07T10:00:00' }
  ]
};

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved && saved.courses && saved.lecturers && saved.students && saved.materials) return saved;
  } catch {}
  return structuredClone(seed);
}

let state = loadState();
const app = document.getElementById('app');
const modalRoot = document.getElementById('modal-root');

function persist() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
function formatDate(dateStr) {
  const d = new Date(dateStr);
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  return `${String(d.getDate()).padStart(2,'0')} ${months[d.getMonth()]} ${d.getFullYear()}`;
}
function formatDateTime(dateStr) {
  const d = new Date(dateStr);
  let h = d.getHours(); const m = String(d.getMinutes()).padStart(2,'0'); const ampm = h >= 12 ? 'PM' : 'AM'; h = h % 12 || 12;
  return `${formatDate(dateStr)}, ${String(h).padStart(2,'0')}:${m} ${ampm}`;
}
function toast(message, type = 'info') {
  const el = document.createElement('div');
  el.className = `toast ${type}`;
  el.textContent = message;
  document.getElementById('toast-container').appendChild(el);
  setTimeout(() => el.remove(), 2600);
}
function icon(type) {
  return ({ pdf:'PDF', video:'VID', slide:'SLD', document:'DOC' })[type] || 'DOC';
}
function route() { return location.hash.replace(/^#/, '') || '/'; }
function navigate(path) { location.hash = path; }
function esc(str='') { return String(str).replace(/[&<>"']/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s])); }
function isAdmin(path) { return path.startsWith('/admin'); }
function adminLinks() { return [
  ['/admin', 'Dashboard'], ['/admin/courses', 'Courses'], ['/admin/lecturers', 'Lecturers'], ['/admin/students', 'Students'], ['/admin/materials', 'Materials']
]; }
function publicLinks() { return [['/', 'Home'], ['/courses', 'Courses'], ['/lecturer', 'Lecturers'], ['/materials', 'Materials'], ['/login', 'Login'], ['/register', 'Register']]; }

function navbar(path) {
  const links = isAdmin(path) ? adminLinks() : publicLinks();
  return `
  <header class="navbar">
    <div class="container navbar-inner">
      <a class="brand" href="#${isAdmin(path) ? '/admin' : '/'}">🎓 <span>Spark</span>${isAdmin(path) ? '<span class="brand-badge">Admin</span>' : ''}</a>
      <nav class="nav-links">
        ${links.map(([href,label]) => `<a href="#${href}" class="${path === href ? 'active' : ''}">${label}</a>`).join('')}
        ${isAdmin(path) ? `<a href="#/" class="ghost">Public Site</a>` : `<a href="#/admin" class="ghost">Admin</a>`}
      </nav>
    </div>
  </header>`;
}
function footer() {
  return `
  <footer class="footer">
    <div class="container footer-grid">
      <div><h3>EduLearn</h3><p class="muted">Empowering learners with quality education. Join thousands of students building their future with us.</p></div>
      <div><h4>Quick Links</h4><p class="muted"><a href="#/">Home</a><br><a href="#/courses">Courses</a><br><a href="#/register">Register</a><br><a href="#/login">Login</a></p></div>
      <div><h4>Support</h4><p class="muted">help@edulearn.my<br>+60 3-1234 5678<br>Mon – Fri, 9AM – 6PM MYT</p></div>
      <div><h4>Address</h4><p class="muted">Level 10, Menara EduLearn<br>Jalan Bukit Bintang<br>55100 Kuala Lumpur, Malaysia</p></div>
    </div>
    <div class="container footer-bottom">© 2026 EduLearn. All rights reserved.</div>
  </footer>`;
}
function courseCard(course) {
  return `
  <article class="card course-card">
    <div class="course-image-wrap">
      <img src="${course.image}" alt="${esc(course.title)}">
      ${course.price === 0 ? '<span class="pill success">FREE</span>' : `<span class="pill">RM ${course.price.toLocaleString()}</span>`}
    </div>
    <div class="body">
      <h3>${esc(course.title)}</h3>
      <p class="meta">👤 ${esc(course.lecturerName)}</p>
      <p class="meta">Enrollment Open: ${formatDateTime(course.enrollmentOpenDate)}</p>
      <p class="meta">Duration: ${formatDate(course.startDate)} → ${formatDate(course.endDate)}</p>
      <button class="btn btn-primary" data-course-view="${course.id}">View Details</button>
    </div>
  </article>`;
}
function showCourseModal(courseId) {
  const course = state.courses.find(c => c.id === courseId);
  if (!course) return;
  const actionBtn = course.enrolledStatus === 'enrolled'
    ? `<button class="btn btn-primary" data-goto-materials>Go to Materials</button>`
    : course.price === 0
      ? `<button class="btn btn-success" data-enroll-free>Enroll for Free</button>`
      : `<button class="btn btn-accent" data-pay-now>Pay Now — RM ${course.price.toLocaleString()}</button>`;
  modalRoot.innerHTML = `
    <div class="modal-overlay" id="course-modal-overlay">
      <div class="modal">
        <div class="modal-hero">
          <img src="${course.image}" alt="${esc(course.title)}">
          <button class="icon-btn close-btn" id="close-modal">✕</button>
          ${course.price === 0 ? '<span class="pill success" style="left:14px;right:auto;">FREE</span>' : ''}
        </div>
        <div class="modal-body">
          <h2>${esc(course.title)}</h2>
          <p class="muted">${esc(course.description)}</p>
          <div class="info-grid">
            <div class="info-box"><strong>${esc(course.lecturerName)}</strong><br><span class="muted">${esc(course.lecturerExpertise)}</span></div>
            <div class="info-box"><strong>${course.price === 0 ? 'Free' : 'RM ' + course.price.toLocaleString()}</strong><br><span class="muted">Course fee</span></div>
            <div class="info-box"><strong>Enrollment Opens</strong><br><span class="muted">${formatDateTime(course.enrollmentOpenDate)}</span></div>
            <div class="info-box"><strong>Duration</strong><br><span class="muted">${formatDate(course.startDate)} → ${formatDate(course.endDate)}</span></div>
          </div>
          <div class="actions">${actionBtn}<button class="btn btn-secondary" id="close-modal-2">Close</button></div>
        </div>
      </div>
    </div>`;
  const close = () => modalRoot.innerHTML = '';
  document.getElementById('close-modal').onclick = close;
  document.getElementById('close-modal-2').onclick = close;
  document.getElementById('course-modal-overlay').onclick = e => { if (e.target.id === 'course-modal-overlay') close(); };
  modalRoot.querySelector('[data-goto-materials]')?.addEventListener('click', () => { close(); navigate('/materials'); });
  modalRoot.querySelector('[data-enroll-free]')?.addEventListener('click', () => toast('Enrolled successfully!', 'success'));
  modalRoot.querySelector('[data-pay-now]')?.addEventListener('click', () => toast('Redirecting to payment…', 'info'));
}

function layout(path, content) {
  app.innerHTML = `<div class="page">${navbar(path)}<main>${content}</main>${footer()}</div>`;
  bindCommonEvents();
}

function homePage() {
  const featured = state.courses.slice(0,3).map(courseCard).join('');
  return `
  <section class="hero"><div class="container hero-content"><h1>Learn Without <span class="highlight">Limits</span></h1><p>Unlock your potential with expert-led courses in technology, design, and data science. Join thousands of learners in Malaysia.</p><div class="actions"><a href="#/courses" class="btn btn-accent">Browse Courses</a><a href="#/register" class="btn btn-outline">Register Now</a></div></div></section>
  <section class="stats"><div class="container stats-grid">
    <div class="stat-card"><div class="value">50+</div><div class="muted">Courses</div></div>
    <div class="stat-card"><div class="value">2,000+</div><div class="muted">Students</div></div>
    <div class="stat-card"><div class="value">800+</div><div class="muted">Graduates</div></div>
    <div class="stat-card"><div class="value">25+</div><div class="muted">Lecturers</div></div>
  </div></section>
  <section class="section"><div class="container"><div class="section-header center"><h2>Featured Courses</h2><p class="muted">Explore our most popular courses designed by industry experts.</p></div><div class="grid-3">${featured}</div><div style="text-align:center;margin-top:2rem"><a href="#/courses" class="btn btn-primary">View All Courses</a></div></div></section>
  <section class="section" style="background:var(--primary); color:white;"><div class="container" style="text-align:center;"><h2>Ready to Start Learning?</h2><p class="muted" style="color:rgba(255,255,255,.75)">Join EduLearn today and take the first step toward your dream career.</p><div class="actions" style="justify-content:center"><a href="#/register" class="btn btn-accent">Get Started Free</a></div></div></section>`;
}

function coursesPage() {
  return `
  <section class="section"><div class="container"><div class="section-header"><h1>All Courses</h1><p class="muted">Browse our complete catalog of professional courses.</p></div><div class="search-wrap"><input class="search-input" id="course-search" placeholder="Search courses or lecturers…"></div><div id="courses-grid" class="grid-3"></div></div></section>`;
}

function lecturersPage() {
  return `
  <section class="section"><div class="container"><div class="section-header"><h1>Our Lecturers</h1><p class="muted">Meet the industry experts behind our courses.</p></div><div class="grid-3">${state.lecturers.map(l => `
    <article class="lecturer-card">
      <div style="display:flex; gap:1rem; align-items:center; margin-bottom:1rem;"><div class="avatar">${esc(l.name[0])}</div><div><strong>${esc(l.name)}</strong><div class="muted small">🏅 ${esc(l.expertise)}</div></div></div>
      <p class="muted">${esc(l.bio)}</p>
      <p class="small">✉️ ${esc(l.email)}<br>📞 ${esc(l.phone)}</p>
    </article>`).join('')}</div></div></section>`;
}

function loginPage() {
  return formShell('Welcome Back', 'Log in to your EduLearn account', `
    <form id="login-form" class="form-grid">
      <div><label>Email</label><input class="field" name="email" type="email" required placeholder="you@example.com"></div>
      <div><label>Password</label><input class="field" name="password" type="password" required placeholder="Enter password"></div>
      <button class="btn btn-primary" type="submit">Log In</button>
    </form>
    <p class="small muted">Don't have an account? <a href="#/register" style="color:var(--accent);font-weight:700">Register</a></p>
  `);
}

function registerPage() {
  return formShell('Create Account', 'Register as a student to start learning', `
    <form id="register-form" class="form-grid">
      <div><label>Full Name</label><input class="field" name="name" required placeholder="e.g. Ali bin Hassan"></div>
      <div><label>Email</label><input class="field" name="email" type="email" required placeholder="you@example.com"></div>
      <div><label>Phone</label><input class="field" name="phone" required placeholder="+60 12-345 6789"></div>
      <div><label>Password</label><input class="field" name="password" type="password" required placeholder="Min 8 characters"></div>
      <button class="btn btn-primary" type="submit">Register</button>
    </form>
    <p class="small muted">Already have an account? <a href="#/login" style="color:var(--accent);font-weight:700">Log in</a></p>
  `);
}

function formShell(title, subtitle, inner) {
  return `<section class="section"><div class="container"><div class="form-card"><h1>${title}</h1><p class="muted">${subtitle}</p>${inner}</div></div></section>`;
}

function materialsPage() {
  const options = state.courses.map(c => `<option value="${c.id}">${esc(c.title)}</option>`).join('');
  return `
  <section class="section"><div class="container"><div class="section-header"><h1>Course Materials</h1><p class="muted">Access your enrolled course resources.</p></div>
  <div style="max-width:320px;margin-bottom:1.2rem"><label>Select Course</label><select class="select" id="materials-course">${options}</select></div>
  <div id="materials-list"></div></div></section>`;
}

function adminDashboardPage() {
  const cards = [
    ['Courses', state.courses.length, '/admin/courses', 'bg-primary', '📚'],
    ['Lecturers', state.lecturers.length, '/admin/lecturers', 'bg-accent', '👩‍🏫'],
    ['Students', state.students.length, '/admin/students', 'bg-success', '👥'],
    ['Materials', state.materials.length, '/admin/materials', 'bg-info', '📄']
  ].map(([label, value, href, color, emoji]) => `<a href="#${href}" class="dashboard-card"><div class="dashboard-icon ${color}">${emoji}</div><div><div style="font-size:2rem;font-weight:800">${value}</div><div class="muted">${label}</div></div></a>`).join('');
  return `
  <section class="section"><div class="container"><div class="section-header"><h1>Admin Dashboard</h1><p class="muted">Manage your e-learning platform.</p></div>
  <div class="grid-4">${cards}</div>
  <div class="card activity" style="margin-top:2rem"><h3>Recent Activity</h3><p class="muted">📝 New student registered: Fatimah Zahra</p><p class="muted">📚 Course updated: Full-Stack Web Development Bootcamp</p><p class="muted">📄 Material uploaded: React Introduction Slides</p><p class="muted">👨‍🏫 Lecturer added: Mr. James Tan</p></div>
  </div></section>`;
}

function adminCoursesPage() {
  return `
  <section class="section"><div class="container"><div style="display:flex;justify-content:space-between;gap:1rem;align-items:center;flex-wrap:wrap" class="section-header"><div><h1>Manage Courses</h1><p class="muted">Create, edit, and delete courses.</p></div><a href="#/admin/course-form" class="btn btn-primary">Add Course</a></div>
  <div class="table-wrap"><table><thead><tr><th>Image</th><th>Title</th><th>Lecturer</th><th>Price</th><th>Duration</th><th style="text-align:right">Actions</th></tr></thead><tbody>
  ${state.courses.map(c => `<tr><td><img src="${c.image}" alt="${esc(c.title)}" style="width:70px;height:46px;object-fit:cover;border-radius:10px"></td><td>${esc(c.title)}</td><td>${esc(c.lecturerName)}</td><td>${c.price === 0 ? 'Free' : `RM ${c.price}`}</td><td>${formatDate(c.startDate)} → ${formatDate(c.endDate)}</td><td><div class="table-actions"><a class="btn btn-secondary" href="#/admin/course-form?id=${c.id}">Edit</a><button class="btn btn-danger" data-delete-course="${c.id}">Delete</button></div></td></tr>`).join('')}
  </tbody></table></div></div></section>`;
}

function adminCourseFormPage(path) {
  const id = new URLSearchParams(path.split('?')[1] || '').get('id');
  const course = state.courses.find(c => c.id === id);
  const lecturersOpts = state.lecturers.map(l => `<option value="${l.id}" ${course?.lecturerId === l.id ? 'selected' : ''}>${esc(l.name)} — ${esc(l.expertise)}</option>`).join('');
  return `
  <section class="section"><div class="container course-form-layout"><div class="section-header"><h1>Course Form</h1><p class="muted">Create or edit a course.</p></div>
  <form id="course-form" class="form-card" style="max-width:none;margin:0">
    <div class="form-grid">
      <div>
        <label>Course Image</label>
        <div class="upload-box" id="upload-box">${course?.image ? `<div class="preview-image"><img id="image-preview" src="${course.image}" alt="Preview"></div>` : '<div><div style="font-size:2rem">⬆️</div><div>Click to upload image</div><div class="small">PNG, JPG up to 5MB</div></div>'}</div>
        <input id="course-image" type="file" accept="image/*" class="hidden">
      </div>
      <div><label>Title</label><input class="field" name="title" required value="${esc(course?.title || '')}"></div>
      <div><label>Description</label><textarea class="textarea" name="description" rows="4" required>${esc(course?.description || '')}</textarea></div>
      <div class="inline-grid">
        <div><label>Price (RM)</label><input class="field" name="price" type="number" min="0" required value="${course?.price ?? 0}"></div>
        <div><label>Lecturer</label><select class="select" name="lecturerId">${lecturersOpts}</select></div>
      </div>
      <div class="inline-grid">
        <div><label>Enrollment Open Date</label><input class="field" name="enrollmentOpenDate" type="datetime-local" required value="${(course?.enrollmentOpenDate || '').slice(0,16)}"></div>
        <div><label>Start Date</label><input class="field" name="startDate" type="date" required value="${course?.startDate || ''}"></div>
      </div>
      <div><label>End Date</label><input class="field" name="endDate" type="date" required value="${course?.endDate || ''}"></div>
      <input type="hidden" name="image" value="${course?.image || ''}">
      <div class="form-actions"><button class="btn btn-primary" type="submit">Save Course</button><a href="#/admin/courses" class="btn btn-secondary">Cancel</a></div>
    </div>
  </form></div></section>`;
}

function managementTablePage(type) {
  const cfg = {
    lecturers: { title:'Manage Lecturers', subtitle:'Add, edit, and remove lecturers', add:'Add Lecturer' },
    students: { title:'Manage Students', subtitle:'View, add, edit, and remove students', add:'Add Student' },
    materials: { title:'Manage Materials', subtitle:'Upload and manage course materials', add:'Add Material' }
  }[type];
  let controls = '';
  if (type === 'materials') {
    controls = `<div style="max-width:260px;margin:0 0 1rem"><select id="materials-filter" class="select"><option value="">All Courses</option>${state.courses.map(c=>`<option value="${c.id}">${esc(c.title)}</option>`).join('')}</select></div>`;
  }
  return `
  <section class="section"><div class="container"><div style="display:flex;justify-content:space-between;gap:1rem;align-items:center;flex-wrap:wrap" class="section-header"><div><h1>${cfg.title}</h1><p class="muted">${cfg.subtitle}</p></div><button class="btn btn-primary" data-open-form="${type}">${cfg.add}</button></div>${controls}<div id="manage-table"></div></div></section>`;
}

function renderManagementTable(type, filterCourse = '') {
  const wrap = document.getElementById('manage-table');
  if (!wrap) return;
  if (type === 'lecturers') {
    wrap.innerHTML = `<div class="table-wrap"><table><thead><tr><th>Name</th><th>Email</th><th>Expertise</th><th style="text-align:right">Actions</th></tr></thead><tbody>${state.lecturers.map(l => `<tr><td>${esc(l.name)}</td><td>${esc(l.email)}</td><td>${esc(l.expertise)}</td><td><div class="table-actions"><button class="btn btn-secondary" data-edit="lecturers:${l.id}">Edit</button><button class="btn btn-danger" data-remove="lecturers:${l.id}">Delete</button></div></td></tr>`).join('')}</tbody></table></div>`;
  }
  if (type === 'students') {
    wrap.innerHTML = `<div class="table-wrap"><table><thead><tr><th>Name</th><th>Email</th><th>Phone</th><th>Registered</th><th style="text-align:right">Actions</th></tr></thead><tbody>${state.students.map(s => `<tr><td>${esc(s.name)}</td><td>${esc(s.email)}</td><td>${esc(s.phone)}</td><td>${formatDateTime(s.registeredAt)}</td><td><div class="table-actions"><button class="btn btn-secondary" data-edit="students:${s.id}">Edit</button><button class="btn btn-danger" data-remove="students:${s.id}">Delete</button></div></td></tr>`).join('')}</tbody></table></div>`;
  }
  if (type === 'materials') {
    const list = filterCourse ? state.materials.filter(m => m.courseId === filterCourse) : state.materials;
    wrap.innerHTML = `<div class="table-wrap"><table><thead><tr><th>Title</th><th>Course</th><th>Type</th><th style="text-align:right">Actions</th></tr></thead><tbody>${list.map(m => `<tr><td>${esc(m.title)}</td><td>${esc(state.courses.find(c => c.id === m.courseId)?.title || m.courseId)}</td><td>${esc(m.type)}</td><td><div class="table-actions"><button class="btn btn-secondary" data-edit="materials:${m.id}">Edit</button><button class="btn btn-danger" data-remove="materials:${m.id}">Delete</button></div></td></tr>`).join('')}</tbody></table></div>`;
  }
}

function openCrudModal(type, id='') {
  const maps = {
    lecturers: () => state.lecturers.find(x => x.id === id) || { id:'', name:'', email:'', expertise:'', phone:'', bio:'' },
    students: () => state.students.find(x => x.id === id) || { id:'', name:'', email:'', phone:'', registeredAt:new Date().toISOString() },
    materials: () => state.materials.find(x => x.id === id) || { id:'', courseId: state.courses[0]?.id || '', title:'', type:'pdf', url:'#', uploadedAt:new Date().toISOString() }
  };
  const item = maps[type]();
  let fields = '';
  if (type === 'lecturers') fields = `
    <div><label>Name</label><input class="field" name="name" value="${esc(item.name)}" required></div>
    <div><label>Email</label><input class="field" name="email" type="email" value="${esc(item.email)}" required></div>
    <div><label>Expertise</label><input class="field" name="expertise" value="${esc(item.expertise)}" required></div>
    <div><label>Phone</label><input class="field" name="phone" value="${esc(item.phone)}" required></div>
    <div><label>Bio</label><textarea class="textarea" name="bio" rows="3" required>${esc(item.bio)}</textarea></div>`;
  if (type === 'students') fields = `
    <div><label>Name</label><input class="field" name="name" value="${esc(item.name)}" required></div>
    <div><label>Email</label><input class="field" name="email" type="email" value="${esc(item.email)}" required></div>
    <div><label>Phone</label><input class="field" name="phone" value="${esc(item.phone)}" required></div>`;
  if (type === 'materials') fields = `
    <div><label>Course</label><select class="select" name="courseId">${state.courses.map(c => `<option value="${c.id}" ${item.courseId === c.id ? 'selected' : ''}>${esc(c.title)}</option>`).join('')}</select></div>
    <div><label>Title</label><input class="field" name="title" value="${esc(item.title)}" required></div>
    <div><label>Type</label><select class="select" name="type">${['pdf','video','slide','document'].map(t=>`<option value="${t}" ${item.type===t?'selected':''}>${t.toUpperCase()}</option>`).join('')}</select></div>`;
  modalRoot.innerHTML = `
    <div class="modal-overlay" id="crud-overlay"><div class="modal" style="max-width:620px"><div class="modal-body"><div style="display:flex;justify-content:space-between;align-items:center"><h2>${item.id ? 'Edit' : 'Add'} ${type.slice(0,-1)}</h2><button class="icon-btn" id="close-crud">✕</button></div>
    <form id="crud-form" class="form-grid">${fields}<div class="form-actions"><button class="btn btn-primary" type="submit">Save</button><button class="btn btn-secondary" type="button" id="close-crud-2">Cancel</button></div></form></div></div></div>`;
  const close = () => modalRoot.innerHTML = '';
  document.getElementById('close-crud').onclick = close;
  document.getElementById('close-crud-2').onclick = close;
  document.getElementById('crud-overlay').onclick = e => { if (e.target.id === 'crud-overlay') close(); };
  document.getElementById('crud-form').onsubmit = e => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const obj = Object.fromEntries(fd.entries());
    if (type === 'lecturers') {
      if (item.id) Object.assign(state.lecturers.find(x => x.id === item.id), obj);
      else state.lecturers.push({ id: 'l' + Date.now(), ...obj });
      toast(item.id ? 'Lecturer updated' : 'Lecturer added', 'success');
    }
    if (type === 'students') {
      if (item.id) Object.assign(state.students.find(x => x.id === item.id), obj);
      else state.students.push({ id: 's' + Date.now(), registeredAt:new Date().toISOString(), ...obj });
      toast(item.id ? 'Student updated' : 'Student added', 'success');
    }
    if (type === 'materials') {
      if (item.id) Object.assign(state.materials.find(x => x.id === item.id), obj);
      else state.materials.push({ id: 'm' + Date.now(), uploadedAt:new Date().toISOString(), url:'#', ...obj });
      toast(item.id ? 'Material updated' : 'Material added', 'success');
    }
    persist(); close(); render();
  };
}

function bindCommonEvents() {
  document.querySelectorAll('[data-course-view]').forEach(btn => btn.addEventListener('click', () => showCourseModal(btn.dataset.courseView)));

  const path = route();
  if (path === '/courses') {
    const input = document.getElementById('course-search');
    const grid = document.getElementById('courses-grid');
    const draw = () => {
      const q = input.value.trim().toLowerCase();
      const filtered = state.courses.filter(c => c.title.toLowerCase().includes(q) || c.lecturerName.toLowerCase().includes(q));
      grid.innerHTML = filtered.length ? filtered.map(courseCard).join('') : '<div class="empty">No courses found.</div>';
      document.querySelectorAll('[data-course-view]').forEach(btn => btn.addEventListener('click', () => showCourseModal(btn.dataset.courseView)));
    };
    input.addEventListener('input', draw); draw();
  }
  if (path === '/login') document.getElementById('login-form').onsubmit = e => { e.preventDefault(); toast('Login successful!', 'success'); };
  if (path === '/register') document.getElementById('register-form').onsubmit = e => { e.preventDefault(); toast('Registration successful! Please log in.', 'success'); };
  if (path === '/materials') {
    const select = document.getElementById('materials-course');
    const list = document.getElementById('materials-list');
    const draw = () => {
      const filtered = state.materials.filter(m => m.courseId === select.value);
      list.innerHTML = filtered.length ? filtered.map(m => `
        <div class="material-row">
          <div class="material-icon">${icon(m.type)}</div>
          <div style="flex:1"><strong>${esc(m.title)}</strong><div class="muted small">${esc(m.type)} • Uploaded ${formatDateTime(m.uploadedAt)}</div></div>
          <button class="btn btn-primary" data-material-download="${m.id}">Download</button>
        </div>`).join('') : '<div class="empty">No materials available for this course yet.</div>';
      document.querySelectorAll('[data-material-download]').forEach(b => b.onclick = () => toast('Download started (demo)', 'info'));
    };
    draw(); select.onchange = draw;
  }
  if (path === '/admin/courses') {
    document.querySelectorAll('[data-delete-course]').forEach(btn => btn.onclick = () => {
      if (!confirm('Are you sure you want to delete this course?')) return;
      state.courses = state.courses.filter(c => c.id !== btn.dataset.deleteCourse);
      state.materials = state.materials.filter(m => m.courseId !== btn.dataset.deleteCourse);
      persist(); toast('Course deleted', 'success'); render();
    });
  }
  if (path.startsWith('/admin/course-form')) {
    const uploadBox = document.getElementById('upload-box');
    const fileInput = document.getElementById('course-image');
    uploadBox.onclick = () => fileInput.click();
    fileInput.onchange = e => {
      const file = e.target.files[0]; if (!file) return;
      const reader = new FileReader();
      reader.onload = ev => {
        uploadBox.innerHTML = `<div class="preview-image"><img id="image-preview" src="${ev.target.result}" alt="Preview"></div>`;
        document.querySelector('input[name="image"]').value = ev.target.result;
      };
      reader.readAsDataURL(file);
    };
    document.getElementById('course-form').onsubmit = e => {
      e.preventDefault();
      const fd = new FormData(e.target);
      const obj = Object.fromEntries(fd.entries());
      const lecturer = state.lecturers.find(l => l.id === obj.lecturerId);
      const path = route();
      const id = new URLSearchParams(path.split('?')[1] || '').get('id');
      const payload = {
        id: id || 'c' + Date.now(),
        title: obj.title,
        description: obj.description,
        price: Number(obj.price),
        image: obj.image || 'assets/course-web-dev.jpg',
        lecturerId: obj.lecturerId,
        lecturerName: lecturer?.name || '',
        lecturerExpertise: lecturer?.expertise || '',
        enrollmentOpenDate: obj.enrollmentOpenDate,
        startDate: obj.startDate,
        endDate: obj.endDate,
        enrolledStatus: 'not-enrolled'
      };
      if (id) {
        const index = state.courses.findIndex(c => c.id === id);
        if (index >= 0) state.courses[index] = { ...state.courses[index], ...payload };
      } else {
        state.courses.push(payload);
      }
      persist(); toast('Course saved successfully!', 'success'); navigate('/admin/courses');
    };
  }
  if (path === '/admin/lecturers' || path === '/admin/students' || path === '/admin/materials') {
    const type = path.split('/').pop();
    const filter = document.getElementById('materials-filter');
    renderManagementTable(type, filter?.value || '');
    document.querySelector('[data-open-form]').onclick = () => openCrudModal(type);
    filter && (filter.onchange = () => renderManagementTable(type, filter.value));
    app.addEventListener('click', managementListener, { once: true });
  }
}

function managementListener(e) {
  const edit = e.target.closest('[data-edit]');
  const remove = e.target.closest('[data-remove]');
  if (edit) {
    const [type, id] = edit.dataset.edit.split(':');
    openCrudModal(type, id);
  }
  if (remove) {
    const [type, id] = remove.dataset.remove.split(':');
    if (!confirm('Delete this item?')) return;
    state[type] = state[type].filter(item => item.id !== id);
    persist(); toast(`${type.slice(0,-1)[0].toUpperCase()+type.slice(1,-1)} deleted`, 'success'); render();
  }
  app.addEventListener('click', managementListener, { once: true });
}

function notFoundPage() {
  return `<section class="section"><div class="container"><div class="form-card"><h1>Page Not Found</h1><p class="muted">The page you requested does not exist.</p><a class="btn btn-primary" href="#/">Go Home</a></div></div></section>`;
}

function render() {
  const path = route();
  modalRoot.innerHTML = '';
  if (path === '/') return layout(path, homePage());
  if (path === '/courses') return layout(path, coursesPage());
  if (path === '/lecturer') return layout(path, lecturersPage());
  if (path === '/login') return layout(path, loginPage());
  if (path === '/register') return layout(path, registerPage());
  if (path === '/materials') return layout(path, materialsPage());
  if (path === '/admin') return layout(path, adminDashboardPage());
  if (path === '/admin/courses') return layout(path, adminCoursesPage());
  if (path.startsWith('/admin/course-form')) return layout('/admin/course-form', adminCourseFormPage(path));
  if (path === '/admin/lecturers') return layout(path, managementTablePage('lecturers'));
  if (path === '/admin/students') return layout(path, managementTablePage('students'));
  if (path === '/admin/materials') return layout(path, managementTablePage('materials'));
  return layout(path, notFoundPage());
}

window.addEventListener('hashchange', render);
window.addEventListener('load', render);
