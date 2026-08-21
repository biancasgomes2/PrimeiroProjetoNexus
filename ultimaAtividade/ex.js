const campoTarefa = document.getElementById('campoTarefa');
const botao = document.getElementById('botao');
const tarefas = document.getElementById('tarefas');

const loadTasks = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]')
    tasks.forEach(({text, completed}) => createTaskElement(text, completed))
}

const saveTasks = () => {
    const tasks = Array.from(tarefas.children).map(li =>({
        text: li.querySelector('span').textContent,
        completed: li.classList.contains('completed')
    }) )
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

const createTaskElement = (text, completed = false) => {
    const li = document.createElement('li')
    if(completed) li.classList.add('completed')

    li.innerHTML = `
    <span>${text}</span>
    <button class= 'delete-btn'>✕</button>
    `
    tarefas.appendChild(li)
}

const addTask = () => {
    const text = campoTarefa.value.trim()
    if (!text) return

    createTaskElement(text)
    saveTasks()
    campoTarefa.value = ''
}

botao.addEventListener('click', addTask)
campoTarefa.addEventListener('keypress', e => e.key === 'Enter' && addTask())

tarefas.addEventListener('click', e => {
    const li = e.target.closest('li')
    if(!li) return

    if(e.target.tagName === 'SPAN'){
        li.classList.toggle('completed')
    }else if (e.target.classList.contains('delete-btn')) {
        li.remove()
    }
    saveTasks()
})

loadTasks()