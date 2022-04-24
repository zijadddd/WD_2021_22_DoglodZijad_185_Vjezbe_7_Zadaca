/*
***********************************************
         ZADACI ZA SAMOSTALNI RAD
***********************************************

1. Napraviti formu (nije potrebna validacija) koja će imati unos name-a i job-a

2. Koristeći endpoint (https://reqres.in/api/users) izvršiti poziv (POST metoda) - poziv je uspješan
ako vam se vrati status code 201 sa podacima koje ste poslali. Primjer imate na https://reqres.in/

---------------------------------------------------------------------------------------------
*/

forma.addEventListener('submit', (event) => {
    event.preventDefault();
    forma.reset();
});

const funkcija = () => {

    const inputName = document.getElementById('name').value;
    const inputJob = document.getElementById('job').value;

    fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: inputName,
            job: inputJob
        })
    })
    .then(res => {
        if(!res.ok){
            throw Error('ovo je error');
        }
        return res.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    })
}