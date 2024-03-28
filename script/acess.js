var interuptor12 = true;
function accessibilidadeSob() {
    var menum = document.getElementById('ad1');
    var menum1 = document.getElementById('divs');
    var menum2 = document.getElementById('circulo1')
    var menum3 = document.getElementById('textcelacess');


    if (interuptor12) {
        menum.style.height = '100vh';

        menum1.style.display = 'block';

        menum2.style.display = 'block';

        menum3.style.display = 'block';

        interuptor12 = false

    }
    else { 
        menum.style.height = '0vh';

        menum1.style.display = 'none';

        menum2.style.display = 'none';

        menum3.style.display = 'none';

        interuptor12=true
    }
}