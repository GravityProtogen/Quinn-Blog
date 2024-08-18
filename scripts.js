document.addEventListener("DOMContentLoaded", function() {
    var readMoreLinks = document.querySelectorAll('.read-more');

    readMoreLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var fullText = this.previousElementSibling;
            if (fullText.style.display === 'none' || fullText.style.display === '') {
                fullText.style.display = 'block';
                this.textContent = 'Leia menos';
            } else {
                fullText.style.display = 'none';
                this.textContent = 'Leia mais';
            }
        });
    });
});
