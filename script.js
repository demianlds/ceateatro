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