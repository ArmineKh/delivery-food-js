const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);

function toggleModal() {
  modal.classList.toggle("is-open");
}

////////////////////////////////////////

const buttonAuth = document.querySelector('.button-auth');
const modalAuth = document.querySelector('.modal-auth');
const closeAuth = document.querySelector('.close-auth');
const logInForm = document.querySelector('#logInForm');
const loginInput = document.querySelector('#login');
const userName = document.querySelector('.user-name');
const buttonOut = document.querySelector('.button-out');


let login = localStorage.getItem('login');

function toggleModalAuth(){
  modalAuth.classList.toggle('is-open');
}


function authorized(){
  function logOut(){
    login = null;
    localStorage.removeItem('login');
    buttonAuth.style.display = '';
    userName.style.display = '';
    buttonOut.style.display = '';

    buttonOut.removeEventListener('click', logOut);
    checkAuth();
  }

  userName.textContent = login;

  buttonAuth.style.display = 'none';
  userName.style.display = 'inline';
  buttonOut.style.display = 'block';

  buttonOut.addEventListener('click', logOut);
}
function notAuthorized(){

  function logIn(event){
    event.preventDefault();
    login = loginInput.value;
    localStorage.setItem('login', login);


    // toggleModalAuth();
    // checkAuth();
    if (login) {
      toggleModalAuth();
      buttonAuth.removeEventListener('click', toggleModalAuth);
      closeAuth.removeEventListener('click', toggleModalAuth);
      logInForm.removeEventListener('submit', logIn);
      logInForm.reset();
      checkAuth();
    } else{
      loginInput.style.border = '1px solid red';
      loginInput.classList.add('placeholder-red');
      loginInput.placeholder = 'Enter your login';
      
    }
  }
  buttonAuth.addEventListener('click', toggleModalAuth);
  closeAuth.addEventListener('click', toggleModalAuth);
  logInForm.addEventListener('submit', logIn);
}

function checkAuth(){

  if (login) {
    authorized();
  } else {
    notAuthorized();
  }
}
 checkAuth();