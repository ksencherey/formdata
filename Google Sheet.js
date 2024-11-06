const scriptURL = 'https://script.google.com/macros/s/AKfycbxoVC9V1kMxmkbrEA5vBE0Hy5htcfxLiLcm-fMlTGEB8W-pq1xfU7GEWMIK9cV3mLpTPQ/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => alert('Thank you! your form is submitted successfully.'))
        .then(() => { window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
})

// Link to access the file

//https://docs.google.com/spreadsheets/d/1W8IgryhMYs5msDvvmV9vzYb0tVF-ZAj0XfQj1ky691o/edit?usp=sharing