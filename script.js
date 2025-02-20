const sitePreview = document.getElementById('site-preview');
const siteSelector = document.getElementById('site-selector');

Array.from(siteSelector.children).forEach(element => {
    if (element.tagName === 'A') {

        element.addEventListener('mouseenter', function() {
            const imageUrl = element.getAttribute('data-image');
            sitePreview.setAttribute('src', imageUrl);
            sitePreview.style.visibility = 'visible';
        });

        element.addEventListener('mouseleave', function() {
            sitePreview.style.visibility = 'hidden';
        });
    }
});