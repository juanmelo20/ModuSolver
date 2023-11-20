const users = JSON.parse(localStorage.getItem('users')) || [];
const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = () => {
  loginForm.style.marginLeft = "-50%";
};
loginBtn.onclick = () => {
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
};
signupLink.onclick = () => {
  signupBtn.click();
  return false;
};
function signupUser() {
  const signupEmail = document.getElementById('signupEmail').value;
  const signupPassword = document.getElementById('signupPassword').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  
  document.getElementById('passwordError').textContent = '';
  document.getElementById('confirmPasswordError').textContent = '';

  if (signupPassword !== confirmPassword) {
    document.getElementById('passwordError').textContent = 'Passwords do not match';
    document.getElementById('confirmPasswordError').textContent = 'Passwords do not match';
    return false;
  }

  // Agregar el nuevo usuario al array
  users.push({ email: signupEmail, password: signupPassword });

  localStorage.setItem('users', JSON.stringify(users));


  alert('usuario registrado con exito \nahora ve a login para iniciar seccion');
  return false;

}

function loginUser() {
  const loginEmail = document.getElementById('loginEmail').value;
  const loginPassword = document.getElementById('loginPassword').value;

  const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

  // Buscar al usuario en el array
  const user = storedUsers.find(u => u.email === loginEmail && u.password === loginPassword);

  if (user) {
    alert('inicio de seccion exitoso!!!');
    
    return true;
  } else {
    alert('Usuario no encontrado');
    return false;
  }
}
