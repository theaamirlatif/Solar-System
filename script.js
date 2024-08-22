document.querySelectorAll('.steps label').forEach(label => {
    label.addEventListener('click', function () {
      const step = this.getAttribute('data-step');
      updateStep(step);
    });
  });
  
  function updateStep(step) {
    document.querySelectorAll('.step-label').forEach(label => {
      label.classList.remove('current-step');
    });
  
    document.querySelector(`.step-label[data-step="${step}"]`).classList.add('current-step');
  }
  
  document.querySelectorAll('.next-step').forEach(button => {
    button.addEventListener('click', function () {
      const nextStep = document.querySelector('input[name="step"]:checked').nextElementSibling;
      if (nextStep) {
        nextStep.checked = true;
        updateStep(nextStep.id.split('-')[0].slice(-1));
      }
    });
  });
  
  document.querySelectorAll('.prev-step').forEach(button => {
    button.addEventListener('click', function () {
      const prevStep = document.querySelector('input[name="step"]:checked').previousElementSibling;
      if (prevStep) {
        prevStep.checked = true;
        updateStep(prevStep.id.split('-')[0].slice(-1));
      }
    });
  });
  