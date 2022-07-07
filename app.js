const submitBtn = document.querySelector('button');
const pass = document.querySelector('#password');
const pass_cnf = document.querySelector('#cnf-password');
const errmsg = document.querySelector('#errormsg');


submitBtn.addEventListener('click',()=>{
    if(pass.value !== pass_cnf.value){
        pass.classList.add('error');
        pass_cnf.classList.add('error');
        errmsg.classList.add('err-msg'); 
    }
   
})