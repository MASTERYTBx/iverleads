const modal = document.getElementById('lead-modal');
const form = document.getElementById('lead-form');
const steps = [...document.querySelectorAll('.form-step')];
const next = document.querySelector('.next');
const back = document.querySelector('.back');
const submit = document.querySelector('.submit');
const stepNumber = document.getElementById('step-number');
const progress = document.getElementById('progress-bar');
let currentStep = 1;

function openModal() { modal.classList.add('show'); modal.setAttribute('aria-hidden', 'false'); document.body.style.overflow = 'hidden'; }
function closeModal() { modal.classList.remove('show'); modal.setAttribute('aria-hidden', 'true'); document.body.style.overflow = ''; if (currentStep === 4) resetForm(); }
function setStep(step) {
  currentStep = step;
  steps.forEach(el => el.classList.toggle('active', Number(el.dataset.step) === step));
  stepNumber.textContent = Math.min(step, 3);
  progress.style.width = `${Math.min(step, 3) * 33.33}%`;
  back.style.visibility = step > 1 && step < 4 ? 'visible' : 'hidden';
  next.style.display = step < 3 ? 'block' : 'none';
  submit.style.display = step === 3 ? 'block' : 'none';
}
function resetForm() { form.reset(); setStep(1); }
document.querySelectorAll('.open-modal').forEach(button => button.addEventListener('click', openModal));
document.querySelector('.close-modal').addEventListener('click', closeModal);
document.querySelector('.modal-backdrop').addEventListener('click', closeModal);
document.querySelector('.close-success').addEventListener('click', closeModal);
document.addEventListener('keydown', e => { if (e.key === 'Escape' && modal.classList.contains('show')) closeModal(); });
next.addEventListener('click', () => {
  const active = steps.find(el => Number(el.dataset.step) === currentStep);
  const required = [...active.querySelectorAll('[required]')];
  if (!required.every(input => input.reportValidity())) return;
  setStep(currentStep + 1);
});
back.addEventListener('click', () => setStep(currentStep - 1));
form.addEventListener('submit', e => { e.preventDefault(); setStep(4); });
document.querySelector('.menu-toggle').addEventListener('click', function () { const nav = document.getElementById('main-nav'); nav.classList.toggle('open'); this.setAttribute('aria-expanded', nav.classList.contains('open')); });
document.querySelectorAll('nav a').forEach(link => link.addEventListener('click', () => document.getElementById('main-nav').classList.remove('open')));
