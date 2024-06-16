const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar_menu')
const esmad = document.querySelector('.esmad')
const cds = document.querySelector('.cds')
const dsm = document.querySelector('.dsm')
const dpc = document.querySelector('.dpc')


menu.addEventListener('click', function () {
  menu.classList.toggle('is-active')
  menuLinks.classList.toggle('active')
});


esmad.addEventListener('click', function () {
  alert('Vai ser redirecionado para o site oficial da ESMAD')
  window.location.href = 'https://www.esmad.ipp.pt/cursos/licenciatura/663'
});

cds.addEventListener('click', function () {
  window.location.href = 'https://fia.com.br/blog/desenvolvimento-de-softwares/'
})

dsm.addEventListener('click', function () {
  window.location.href = 'https://awari.com.br/desenvolvimento-de-software-multiplataforma-o-que-faz-um-guia-explicativo/?utm_source=blog&utm_campaign=projeto+blog&utm_medium=Desenvolvimento%20de%20software%20multiplataforma%20o%20que%20faz:%20Um%20guia%20explicativo'
})

dpc.addEventListener('click', function () {
  window.location.href = 'https://medium.com/@hybear/o-que-é-ser-um-ux-developer-154d8311407e'
})


