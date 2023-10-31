$(document).ready(function() {    
    $('.block').draggable({
        containment:'#puzzle',
        stack: '.block',
        snap: true,
        snapMode: 'outer',
        snapTolerance: 13,
        
    });

    var angle = 90;    

    $('.rotate').click(function() {
       
        $(this).css ({
            'transform': 'rotate(' + angle + 'deg)',
            '-webkit-transform': 'rotate(' + angle + 'deg)',
               '-moz-transform': 'rotate(' + angle + 'deg)',
                 '-o-transform': 'rotate(' + angle + 'deg)',
                '-ms-transform': 'rotate(' + angle + 'deg)'
        });
        angle+=45;
    });
    $('#parallelogram').click(function() {
        $(this).css ({
           
            'transform': 'skew(-35deg) rotate(' + angle + 'deg)',
            '-webkit-transform': 'skew(-35deg) rotate(' + angle + 'deg)',
            '-moz-transform': 'skew(-35deg) rotate(' + angle + 'deg)',
              '-o-transform': 'skew(-35deg) rotate(' + angle + 'deg)',
             '-ms-transform': 'skew(-35deg) rotate(' + angle + 'deg)'
        })
        angle+=90;
    })
});
// esta funcion comprueba si un elemento esta visible en pantalla
function isVisible(elm) {
	var rect = elm.getBoundingClientRect();
	var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
	return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

// cuando se carga la página...
window.addEventListener('DOMContentLoaded', (ev0) => {
        // asignamos un evento scroll...
	window.addEventListener('scroll', (ev1) => {
                // y a todos los elementos con la clase paused.....
		document.querySelectorAll(".pausa").forEach(elm => {
			if (isVisible(elm)) // que sean visibles...
				elm.classList.remove("pausa"); // les quitamos la clase paused
		})
	});
});
document.getElementById("boton").addEventListener("click", function () {
    var menu = document.getElementById("menu");
    if (menu.style.display === "none") {
        menu.style.display = "block";
        document.getElementById("boton").classList.add("boton");
    } else {
        menu.style.display = "none";
        document.getElementById("boton").classList.remove("boton");
    }

});

