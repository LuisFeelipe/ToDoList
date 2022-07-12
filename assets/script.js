//Adicionado à constantes elementos do HTML

const form = document.getElementById('task-form');
const taskList = document.getElementById('tasks');
const clear = document.getElementById('clearList')

//Adicionando EventListener para efetuar as funções de limpar lista e de pegar o texto do input

clear.addEventListener('click', clearList)
form.addEventListener('submit', value)

//Função para pegar o texto do input

function value (e) {
	e.preventDefault();
	const inputField = document.getElementById('task-input');
	addTask(inputField.value);
	form.reset();
};

//Função de adicionar a tarefa no HTML

function addTask(description) {
    //Checar se o input não está vazio para criar uma nova tarefa 
	if(description === ''){
        alert("Erro ao adicionar tarefa");
    }else{
        //Não está vazio
        //Criando elementos no HTML
        const taskContainer = document.createElement('div');
        const newTask = document.createElement('input');
        const taskLabel = document.createElement('label');
        const taskDescriptionNode = document.createTextNode(description);

        //Setando os atributos da nova tarefa

        newTask.setAttribute('type', 'checkbox');
        newTask.setAttribute('name', description);
        newTask.setAttribute('id', description);

        taskLabel.setAttribute('for', description);
        taskLabel.appendChild(taskDescriptionNode);

        taskContainer.classList.add('task-item');
        taskContainer.appendChild(newTask);
        taskContainer.appendChild(taskLabel);

        taskList.appendChild(taskContainer);
    }
    
}

//Função para limpar a lista

function clearList(){
    document.getElementById("tasks").innerHTML = '';
}