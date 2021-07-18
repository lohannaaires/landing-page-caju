
const form = document.getElementById('form')
const errorMessage = document.getElementById('error-message')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;

    let data = {
        name,
        email
    };

    let convertData = JSON.stringify(data);
    localStorage.setItem('lead', convertData);

    message();

})

function message(){
    if (form.style.display === 'none') {
        form.style.display = 'block';
    } else {
        form.style.display = 'none';
        
        let newForm = document.createElement('form');
        newForm.classList.add('success-form');
        document.getElementById('content-right').appendChild(newForm);
        
        let newP = document.createElement('p');
        newP.appendChild(document.createTextNode(
            'Agora que você receberá as novidades'
            +' que tal conhecer todos os nossos produtos?'
        ));
        newP.classList.add("form__title");

        newForm.appendChild(newP);
        
        let site = document.createElement('a');
        site.classList.add("input");
        site.classList.add("input--submit");
        site.href = 'https://cajupi.netlify.app/'
        site.innerHTML = 'Visite o nosso site!';

        newForm.appendChild(site);

    }
}