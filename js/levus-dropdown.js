// 25-07-2020
function levusDropdown() {
    // усі вкладені УЛи в НОН
    document.querySelectorAll('.levus-dropdown ul').forEach(element => element.style.display = 'none');

    // УЛ при наведенні стає блок
    document.querySelectorAll('.levus-dropdown').forEach(element => element.addEventListener('mouseover', function() {
        setTimeout(() => {
            this.querySelector('ul').style.display = 'block';
        }, 300);
    }));

    document.querySelectorAll('.levus-dropdown').forEach(element => element.addEventListener('mouseout', function() {
        setTimeout(() => {
            this.querySelector('ul').style.display = 'none';
        }, 1200);
    }));
}

// init
levusDropdown();