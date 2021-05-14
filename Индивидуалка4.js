var  name="Бондаренко";
document.getElementById('SecondName').innerHTML= name;
function rename(){
    var input = document.getElementById('txt').value;
    document.getElementById('SecondName').innerHTML=input;
}