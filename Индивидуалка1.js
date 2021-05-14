function btnMAX (){
    var x,y;
    x = document.getElementById('textMax1').value;
    x = parseInt(x);

    y = document.getElementById('textMax2').value;
    y = parseInt(y);

    document.getElementById('result').innerHTML = max1(x,y);
}

function max1(x, y) {
    if (x > y) {
        return parseInt(x);
    }
    else{
        return parseInt(y);
    }
}