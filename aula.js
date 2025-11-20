// Seleciona o botão do menu (ícone de hambúrguer) pelo ID definido no HTML
const menuBtn = document.getElementById('menu-btn');

// Seleciona o elemento de navegação (menu que será aberto/fechado)
const navMenu = document.getElementById('nav-menu');

// Dentro do botão, procura o elemento <i> (ícone da fonte Font Awesome)
const menuIcon = menuBtn.querySelector('i');
// querySelector() -> método reservado do JavaScript usado para buscar
// o primeiro elemento que corresponde a um seletor CSS dentro de outro elemento.

// --------------------------------------------------------------------
// Adiciona um "ouvinte de evento" (listener) que detecta o clique no botão do menu.
menuBtn.addEventListener('click', () => {
  // addEventListener() -> método reservado usado para executar uma função
  // toda vez que um evento específico ocorre (nesse caso, um clique).

  // Alterna (liga/desliga) a classe "show" no menu de navegação.
  // Isso faz o menu aparecer ou desaparecer visualmente via CSS.
  navMenu.classList.toggle('show');
 // Troca o ícone (de hambúrguer para "X" e vice-versa), dependendo do estado atual.
  // Verifica se o ícone atual tem a classe "fa-bars" (ícone de hambúrguer)
  if (menuIcon.classList.contains('fa-bars')) {
    // classList.contains() -> verifica se o elemento contém uma classe específica (retorna true ou false).

    // Se sim, remove a classe do ícone de hambúrguer...
    menuIcon.classList.remove('fa-bars');
    // ...e adiciona o ícone de "X" para indicar que o menu pode ser fechado.
    menuIcon.classList.add('fa-xmark');
  } else {
    // Caso contrário, volta o ícone para o estado original (hambúrguer).
    menuIcon.classList.remove('fa-xmark');
    menuIcon.classList.add('fa-bars');
  }
});

  // classList.toggle() -> adiciona a classe se ela não existir; remove se já existir.

 const tryed = new typed (".auto-type", {
strings :["JK FINANCE", "INVESTINDO NOS SEUS SENHOS"],
typeSpeed: 80,         /*velocidade da digitação*/
backSpeed: 60,        /*velocidade da remoção do texto */ 
backdelay: 1200,     /*pausa antes de apagar*/
loop: true,         /*ativando a repetição*/
showcursor: false, /*oculta o cursor de digitação*/

 });








 

















//1 -  criar o menu hamburguem (div e icon ) no html 
//2 -  fora do @ media ,inserir um display none no div que guarda o icon do hamburguem e na lista do menu mobile
//3 -  dentro do @media inserir o display none no menu desktop
//4 -  dentro do @media aplicar o display :flex na div do menu mobile que estava oculta ,com isso ela ficaram visivel 
//5 -  realizar a estilizancao do nav do menu mobile no css 
//6 -  fazer o javascript conversar com icon do menu hamburguem e realizar a ação