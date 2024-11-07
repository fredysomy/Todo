const checkboxes = document.querySelectorAll('x.check-box');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', (e) => {
        const checkInput = e.target.querySelector('input[type="checkbox"]');
        e.target.classList.toggle('checked');
    })
})