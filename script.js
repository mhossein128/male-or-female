let url = 'https://api.genderize.io/?name='
let input = document.querySelector('input')
let div = document.querySelector('.rounded')
let btn = document.querySelector('.btn')

let response , data , genderIcon;

async function ip(url) {
    response = await fetch(`${url}${input.value}`);
    data = await response.json()
    console.log(data)
    if(data.gender == 'male') {
        genderIcon = 'bi-gender-male text-info'
    }else{
        genderIcon = 'bi-gender-female text-danger'
    }
    div.innerHTML = `
    <h1>name : ${data.name} </h1>
    <h1>gender : ${data.gender} <i class="${genderIcon}"></i> </h1>
    <h1>probability : ${data.probability * 100}% </h1>
    `

}

btn.addEventListener('click', ()=>{
    ip(url)

})
