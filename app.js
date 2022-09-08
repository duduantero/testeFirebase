const firebaseConfig = {
    apiKey: "AIzaSyAgPrfGRykeL_BFGUDxc4MacUbHPfCHSy0",
    authDomain: "testefirebase-21ad7.firebaseapp.com",
    projectId: "testefirebase-21ad7",
    storageBucket: "testefirebase-21ad7.appspot.com",
    messagingSenderId: "457568077999",
    appId: "1:457568077999:web:05986a6377e87a7060ac5a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const messaging = firebase.messaging();

function SubscriberUser(){
    console.log('Funcionando')
    Notification.requestPermission().then(permission=>{
        console.log(permission)
        if(permission ==='granted'){
            messaging.getToken(
            {vapidKey:"BF11m07a9rI0ej7hqpujWmtLQ1bklIedVy7OaGPPfAI3eJyuscpsP3VhVROp9NkEQHnHXwONaVzk0J7iRvgGgRU"}).then(currentToken=>{
                console.log(currentToken)
                document.getElementById('tokenId').innerHTML = currentToken
            })
        }else{
            console.log('No registration token available. Request permission to generate one.')
        }
    })

}

const form = document.querySelector('#form_cadastro');

form.addEventListener('submit',(event)=>{
    event.preventDefault();

    let novoCadastro = {
        nome: form.nome.value,
        email: form.email.value,
        tel: form.tel.value,
        nascimento: form.nascimento.value
    }
    
    db.collection('Cadastros').add({
       novoCadastro: novoCadastro
    })

    console.log(novoCadastro)
    alert("seu cadastro foi realizado com sucesso ! ");
})


