const menuButton=document.querySelector('.menu-toggle');
menuButton.addEventListener('click',()=>{document.body.classList.toggle('nav-open');menuButton.setAttribute('aria-expanded',document.body.classList.contains('nav-open'));});
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>document.body.classList.remove('nav-open')));
document.querySelectorAll('.course-filters button').forEach(button=>button.addEventListener('click',()=>{
 document.querySelectorAll('.course-filters button').forEach(b=>b.classList.remove('active'));button.classList.add('active');
 document.querySelectorAll('.course-card').forEach(card=>card.hidden=button.dataset.filter!=='all'&&card.dataset.level!==button.dataset.filter);
}));
const level=document.querySelector('#level'),programme=document.querySelector('#programme');
const programmeOptions=[...programme.querySelectorAll('option[data-level]')];
level.addEventListener('change',()=>{programme.value='';programmeOptions.forEach(option=>{option.hidden=!!level.value&&option.dataset.level!==level.value;});});
const dob=document.querySelector('[name=dob]');dob.max=new Date().toISOString().split('T')[0];
document.querySelector('#application-form').addEventListener('submit',event=>{
 event.preventDefault();
 const form=event.currentTarget;const data=new FormData(form);
 document.querySelector('#form-status').textContent=`Thank you, ${data.get('name')}. Your ${data.get('programme')} enquiry has been prepared. This demo does not send or store your details.`;
 form.reset();programmeOptions.forEach(option=>option.hidden=false);dob.max=new Date().toISOString().split('T')[0];
});
