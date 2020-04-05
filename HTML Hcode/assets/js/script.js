let email = 'joao@hcode.com.br'

console.log(`O Seu email é ${email}`)


document.getElementById('btn-submit').addEventListener('click', e =>{
    console.log('O botao foi clicado')
})

document.getElementById('form-login').addEventListener('mouseenter', e => {
    console.log('O mouse esta sobre o formulario')
})


document.querySelector('#form-login').addEventListener('mouseleave' , e =>{
    console.log('O mouse saiu do elemento')
})

document.querySelector('#form-login').addEventListener('submit', e =>{
    e.preventDefault()
    let email =  document.querySelector('#email').value
    let password =  document.querySelector('#password').value

    console.log(email, password)

    let json = {
        email
    }

    console.log(json)
})