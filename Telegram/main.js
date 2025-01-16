const menu = document.getElementById('menu');
const toggleButton = document.getElementById('menu-toggle');
const mainContent = document.querySelector('.content');

toggleButton.addEventListener('click', () => {
    menu.classList.toggle('open');
    toggleButton.classList.toggle('hidden');
});

mainContent.addEventListener('click', () => {
    if (menu.classList.contains('open')) {
        menu.classList.remove('open');
        toggleButton.classList.remove('hidden');
    }
});

const tabTodo = document.getElementById('tab-todo');
const tabPersonal = document.getElementById('tab-personal');
const allChats = document.getElementById('all-chats');
const personalChats = document.getElementById('personal-chats');

tabTodo.addEventListener('click', () => {
    tabTodo.classList.add('active');
    tabPersonal.classList.remove('active');
    allChats.classList.remove('hidden');
    personalChats.classList.add('hidden');
});

tabPersonal.addEventListener('click', () => {
    tabPersonal.classList.add('active');
    tabTodo.classList.remove('active');
    personalChats.classList.remove('hidden');
    allChats.classList.add('hidden');
});