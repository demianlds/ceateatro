document.getElementById('info-btn').addEventListener('click', function() {
    var modal = document.getElementById('info-modal');
    modal.style.display = 'block';

    var closeBtn = document.getElementsByClassName('close')[0];
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    document.addEventListener('DOMContentLoaded', function () {
        var toggler = document.querySelector('.navbar-toggler');
        var navbarCollapse = document.querySelector('.navbar-collapse');
    
        toggler.addEventListener('click', function () {
            navbarCollapse.classList.toggle('active');
        });
});
});

$(document).ready(function(){
    // Handler para el clic en los enlaces del navbar
    $('.nav-link').click(function(){
        $('section').removeClass('active');
        // Obtiene el ID de la sección a la que se hizo clic
        var target = $(this).attr('href');
        // Muestra la sección correspondiente
        $(target).addClass('active');
        window.history.pushState(null, '', target);
    });
});

window.addEventListener('popstate', function(event) {
    var activeSection = window.location.hash;
    if (activeSection) {
        $('section').removeClass('active');
        $(activeSection).addClass('active');
    }
});



