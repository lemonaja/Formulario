const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
const senhaRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;

form.addEventListener('submit', (event) => {event.preventDefault(); nameValidate(); emailValidate(); mainPasswordValidate(); comparePassword(); });

function setError(index){
    campos[index].style.border = '2px solid #e63636';
    spans[index].style.display = 'block';
}

function removeError(index)
{
    campos[index].style.border = '';
    spans[index].style.display = 'none';
}

function nameValidate(){
    if(campos[0].value.length < 3)
    {
        setError(0)
    }
    else
    {
        removeError(0)
    }
}

function emailValidate()
{
    if(!emailRegex.test(campos[1].value))
    {
        setError(1);
    }
    else
    {
        removeError(1);
    }
}

function mainPasswordValidate(){
    if(!senhaRegex.test(campos[2].value))
    {
        setError(2);
    }
    else
    {
        removeError(2);
        comparePassword();
    }
}

function comparePassword()
{
    if(campos[2].value == campos[3].value && senhaRegex.test(campos[3].value))
    {
        removeError(3);
    }
    else
    {
        setError(3);
    }
}
