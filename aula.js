// Seleciona o botão do menu (ícone de hambúrguer) pelo ID definido no HTML
const menuBtn = document.getElementById('menu-btn');

// Seleciona o elemento de navegação (menu que será aberto/fechado)
const navMenu = document.getElementById('nav-menu');

// Dentro do botão, procura o elemento <i> (ícone da fonte Font Awesome)
const menuIcon = menuBtn.querySelector('i');
// querySelector() -> método reservado do JavaScript usado para buscar
// o primeiro elemento que corresponde a um seletor CSS dentro de outro elemento.

// --------------------------------------------------------------------



















//1 -  criar o menu hamburguem (div e icon ) no html 
//2 -  fora do @ media ,inserir um display none no div que guarda o icon do hamburguem e na lista do menu mobile
//3 -  dentro do @media inserir o display none no menu desktop
//4 -  dentro do @media aplicar o display :flex na div do menu mobile que estava oculta ,com isso ela ficaram visivel 
//5 -  realizar a estilizancao do nav do menu mobile no css 
//6 -  fazer o javascript conversar com icon do menu hamburguem e realizar a ação