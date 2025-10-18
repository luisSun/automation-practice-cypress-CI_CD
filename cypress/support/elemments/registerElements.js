import { fakerPT_BR } from '@faker-js/faker';


export const dataSelections = {
    regUser:{
        nameUser : fakerPT_BR.person.fullName(),
        emailValid : fakerPT_BR.internet.email(),
        emailInvali: fakerPT_BR.string.alphanumeric(9),
        passwordValid: fakerPT_BR.internet.password({length: 9, memorable: true}),
        passwordInvalid: fakerPT_BR.internet.password({length: 5})
    },

    fields:{
        nameField: '#user',
        emailField: '#email',
        passField: '#password',
        errorName: '#errorMessageFirstName',
        sucessH2: '#swal2-title',
        bemVindo: '#swal2-html-container',
        erroLogin: '.invalid_input'
    },

    btn:{
        registerBtn: '#btnRegister',
        loginBtn: "#btnLogin"
    },

    msg:{
        msgName: 'O campo nome deve ser prenchido',
        msgEmail: 'O campo e-mail deve ser prenchido corretamente',
        msgPassW: 'O campo senha deve ter pelo menos 6 dígitos',
        erroLoginEmail: 'E-mail inválido.',
        erroLoginPass: 'Senha inválida.',
        sucessh2: 'Cadastro realizado!',
        welcome: 'Bem-vindo',
        welcomeLogin: 'Olá,',
        sucessLogin: 'Login realizado'
    }

}


