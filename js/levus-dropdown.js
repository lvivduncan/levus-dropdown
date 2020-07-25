// 25-07-2020
function levusDropdown() {

    // УЛ при наведенні стає блок
    document.querySelectorAll('.levus-dropdown').forEach(element => element.addEventListener('mousedown', function() {
        setTimeout(() => {
            // add better toggle because click on html close elements
            this.querySelector('ul').classList.add('open');
        }, 300);
    }));

    document.querySelector('html').addEventListener('click', () => {
        document.querySelectorAll('.levus-dropdown ul').forEach(element => element.classList.remove('open'));
    });
}

// init
levusDropdown();