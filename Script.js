const formulario = document.querySelector("form");
const Inome = document.querySelector(".Nome");
const Iemail = document.querySelector(".email");
const Isenha = document.querySelector(".senha");
const Itelefone = document.querySelector(".telefone");
const Iendereco = document.querySelector(".endereco");
const Icpf = document.querySelector(".cpf");

function cadastrar() { 
   fetch("http://localhost:0000/cadastrar",
     {
          headers: {
               'Accept':'application/json',
               'content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify ({ 
               
               nome: Inome.value,
               email: Iemail.value,
               senha: Isenha.value,
               telefone: Itelefone.value,
               endereco: Iendereco.value,
               cpf: Icpf.value
          })
          
     })
     .then(function(res) {console.log(res) })
     .catch(function(res) { console.log(res) })
};

  function limpar(){
      
     Inome.value = "";
      Iemail.value = "";
      Isenha.value = "";
      Itelefone.value = "";
      Iendereco.value = "";
      Icpf.value = "";
  };


formulario.addEventListener('submit', function (event)  { 
     event.preventDefault();

    cadastrar();
    limpar();
 
});
