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

var interuptor11 = true;
function accessibilidadeSob12() {
    var menum12 = document.getElementById('ad12');
    var menum13 = document.getElementById('linguis');
    var menum24 = document.getElementById('circulo2')
    var menum35 = document.getElementById('textIdioma');
    var menum46 = document.getElementById('mundi');
    var menum57 = document.getElementById('textIdioma2');
    var menum79 = document.getElementById('btn12');
    
    if (interuptor11) {
        menum12.style.height = '100vh';

        menum13.style.display = 'block';

        menum24.style.display = 'block';

        menum35.style.display = 'block';

        menum46.style.display = 'block';

        menum57.style.display = 'block';

        menum79.style.display = 'block';

        interuptor11 = false

    }
    else { 
        menum12.style.height = '0vh';

        menum13.style.display = 'none';

        menum24.style.display = 'none';

        menum35.style.display = 'none';

        menum46.style.display = 'none';

        menum79.style.display = 'none';



        interuptor11=true
    }
}