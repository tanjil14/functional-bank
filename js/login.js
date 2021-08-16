document.getElementById('login-submit').addEventListener('click',function(){
    const userName=document.getElementById('user-name').value;
    const userPass=document.getElementById('user-pass').value;

    if(userName=='sontan@baap.com'&&userPass=='secret'){
        window.location.href="banking.html"
    }
    else{
        alert('Invalid')
    }
})