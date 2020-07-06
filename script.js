let queue = [
  {
    name: "Antonio figueiredo",
    amount: 3,
  },
  {
    name: "Maria Carolina",
    amount: 1,
  },
  {
    name: "Jão Vitor",
    amount: 2,
  },
  {
    name: "Andressa Silva",
    amount: 27,
  },
];

const inputName = document.querySelector(".name");
const inputAmount = document.querySelector(".amount");
const button = document.querySelector("button");
const line = document.getElementById("line");

updateQueue();

setInterval(function () {
  queue.shift();
  updateQueue();
}, 10000);

button.addEventListener("click", (event) => {
  queue.push({
    name: inputName.value,
    amount: inputAmount.value,
  });

  if (inputAmount.value == 71) {
    queue = queue.filter((client) => client.amount % 2 == !0);
    console.log("hi");
  }

  updateQueue();
  inputName.value = "";
  inputAmount.value = "";
});

function updateQueue() {
  line.innerHTML = "";

  for (const client of queue) {
    const name = document.createElement("p");
    name.classList.add("name");
    name.innerText = client.name.toUpperCase();

    const amount = document.createElement("p");
    amount.classList.add("amount");

    if (client.amount == 1) {
      amount.innerText = "Quantidade: " + client.amount + " pão";
    } else {
      amount.innerText = "Quantidade: " + client.amount + " pães";
    }

    line.append(name, amount);
  }
}

const closeFormCadastrar = document.querySelectorAll(".close-form-cadastrar"); // Pega os pontos que o form fecha
const closeFormLogin = document.querySelectorAll(".close-form-login"); // Pega os pontos que o form fecha

const formCadastrar = document.querySelector("#formCadastrar"); // Pega o formulário de cadastro
const formLogin = document.querySelector("#formLogin"); // Pega o formulário de cadastro

let stateCadastro = false;
let stateLogin = false;

// Ativa e desativa o form de cadastro
const toggleCadastro = (e) => {
  stateCadastro = !stateCadastro;
  stateCadastro ? (formCadastrar.className = "cadastro") : (formCadastrar.className = "cadastro disable");
};
const toggleUser = (e) => {
  stateLogin = !stateLogin;
  stateLogin ? (formLogin.className = "login") : (formLogin.className = "login disable");
};
// Adiciona listener a todos os pontos do closeFormCadastrar
closeFormCadastrar.forEach((value) => {
  value.addEventListener("click", toggleCadastro);
});

closeFormLogin.forEach((value) => {
  value.addEventListener("click", toggleUser);
});
