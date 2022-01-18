var link = document.querySelector('.user-list__login');
var popup = document.querySelector('.modal-login');
var close = document.querySelector('.modal-close');
var login = popup.querySelector('[name=login]');
var form = popup.querySelector('form');
var password = popup.querySelector('[name=password]');

var isStorageSupport = true;
var storage = '';

try {
    storage = localStorage.getItem('login');
} catch (err) {
    isStorageSupport = false;
}

link.addEventListener('click', function (evt) {
    // отменяет действие по-умолчанию, переход по ссылке в данном случае. evt просто придумали
    evt.preventDefault();
    popup.classList.add('modal-show');
    if (storage) {
        login.value = storage;
        password.focus();
    } else {
        login.focus();
    }
});

close.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.remove('modal-show');
});

form.addEventListener('submit', function (evt) {
    if (!login.value || !password.value) {
        evt.preventDefault(); 
        console.log('Нужно ввести логин и пароль');
    } else {
        if (isStorageSupport) {
            localStorage.setItem('login', login.value);
        }
    }  
});

window.addEventListener ('keydown', function (evt) {
    if (evt.key === 27) {
        if (popup.classList.contains('modal-show')){
            evt.preventDefault();
            popup.classList.remove('modal-show');
        }
    }
});
