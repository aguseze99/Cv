let mostrarBtnExperiencia = document.getElementById('mostrar-experiencia');
let mostrarBtnSkills = document.getElementById('mostrar-skills');
let mostrarBtnObjetivos = document.getElementById('mostrar-objetivos');
let mostrarBtnCualidades = document.getElementById('mostrar-cualidades');
let mostrarBtnProyectos = document.getElementById('mostrar-proyectos');

let seccionExperiencia = document.getElementById('experiencia');
let seccionSkills = document.getElementById('skills');
let seccionObjetivos = document.getElementById('objetivos');
let seccionCualidades = document.getElementById('cualidades');
let seccionProyectos = document.getElementById('proyectos');

mostrarBtnExperiencia.addEventListener('click', function(){
  seccionSkills.classList.remove('mostrar');
  seccionObjetivos.classList.remove('mostrar');
  seccionCualidades.classList.remove('mostrar');
  seccionProyectos.classList.remove('mostrar');
  seccionExperiencia.classList.toggle('mostrar');
});

mostrarBtnSkills.addEventListener('click', function(){
  seccionExperiencia.classList.remove('mostrar');
  seccionObjetivos.classList.remove('mostrar');
  seccionCualidades.classList.remove('mostrar');
  seccionProyectos.classList.remove('mostrar');
  seccionSkills.classList.toggle('mostrar');
});

mostrarBtnObjetivos.addEventListener('click', function(){
  seccionExperiencia.classList.remove('mostrar');
  seccionSkills.classList.remove('mostrar');
  seccionCualidades.classList.remove('mostrar');
  seccionProyectos.classList.remove('mostrar');
  seccionObjetivos.classList.toggle('mostrar');
});

mostrarBtnCualidades.addEventListener('click', function(){
  seccionExperiencia.classList.remove('mostrar');
  seccionSkills.classList.remove('mostrar');
  seccionObjetivos.classList.remove('mostrar');
  seccionProyectos.classList.remove('mostrar');
  seccionCualidades.classList.toggle('mostrar');
});

mostrarBtnProyectos.addEventListener('click', function(){
  seccionExperiencia.classList.remove('mostrar');
  seccionSkills.classList.remove('mostrar');
  seccionObjetivos.classList.remove('mostrar');
});