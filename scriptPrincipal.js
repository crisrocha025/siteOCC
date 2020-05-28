// desenvolvido por Cris Rocha -- www.ocodigocris.com

const elementos = document.querySelectorAll('[data-anima]');
const animacaoClass = 'animacao';

function animaScroll(){
 const TopoPaginaNaJanela=window.pageYOffset+((window.innerHeight*3)/4);
 elementos.forEach(function(elemento){
  if(TopoPaginaNaJanela > elemento.offsetTop){
   elemento.classList.add(animacaoClass);
  }else{
   elemento.classList.remove(animacaoClass);
  }
 });
}

if(elementos.length){
 window.addEventListener('scroll',function(){
  animaScroll();
 })
}
function cliqueModal(img){
 const jenelaModal=document.getElementById('janelaModal');
 const imgModal=document.getElementById('imgModal');
 const btnModal=document.getElementById('btn-fechar');
 const txtModal=document.getElementById('textModal');

 jenelaModal.classList.remove("escondeJanelaModal");
 janelaModal.classList.add("mostraJanelaModal");

 imgModal.src=img.src;
 imgModal.alt=img.alt;
 txtModal.innerHTML=img.alt;

 btnModal.onclick=function(){
  jenelaModal.classList.add("escondeJanelaModal");
 janelaModal.classList.remove("mostraJanelaModal");
 }
}
var mudaValor = 0;
var OptionsSite =  document.getElementById('OptionsSite');
var OptionsBlog =  document.getElementById('OptionsBlog');
var OptionSite = document.getElementById('OptionSite');
var OptionBlog = document.getElementById('OptionBlog');
  function MoreOptionSite(){
   if(mudaValor == 0){
   OptionsSite.style.display = 'block'
   OptionSite.style ='border: 1px solid #764248;color: #764248;'
   mudaValor ++;
   }else{
   OptionsSite.style.display = 'none'
   OptionSite.style ='border: 1px solid #fff;color: #fff;'
   mudaValor --;
   }
  }
  function MoreOptionBlog(){
   if(mudaValor == 0){
   OptionsBlog.style.display = 'block'
   OptionBlog.style ='border: 1px solid #764248;color: #764248;'
   mudaValor ++;
   }else{
   OptionsBlog.style.display = 'none'
   OptionBlog.style ='border: 1px solid #fff;color: #fff;'
   mudaValor --;
   }
  }
  
