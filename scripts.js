// تخزين المستخدم في localStorage عند التسجيل
function saveUser(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const studentClass = document.getElementById('class').value;
  const specialization = document.getElementById('specialization').value;
  const parentPhone = document.getElementById('parent-phone').value;
  const password = document.getElementById('password').value;

  // تخزين بيانات المستخدم في localStorage
  const user = {
    name,
    studentClass,
    specialization,
    parentPhone,
    password,
  };
  localStorage.setItem('user', JSON.stringify(user));

  // الانتقال إلى الصفحة الرئيسية
  showApp();
}

// إظهار التطبيق
function showApp() {
  const registerForm = document.getElementById('register-form');
  const appContent = document.getElementById('app-content');
  
  registerForm.style.display = 'none';
  appContent.style.display = 'block';
}

// التحقق من تسجيل الدخول
function checkLogin() {
  const user = localStorage.getItem('user');
  if (user) {
    showApp();
  } else {
    // في حالة عدم وجود بيانات المستخدم في localStorage، إظهار صفحة التسجيل
    document.getElementById('register-form').style.display = 'block';
  }
}

// تسجيل الخروج
function logout() {
  localStorage.removeItem('user');
  location.reload();
}

// التحقق عند تحميل الصفحة
window.onload = checkLogin;
