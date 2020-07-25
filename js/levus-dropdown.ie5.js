"use strict";

// 25-07-2020
function levusDropdown() {
    // усі вкладені УЛи в НОН
    document.querySelectorAll('.levus-dropdown ul').forEach(function(element) {
        return element.style.display = 'none';
    }); // УЛ при наведенні стає блок

    document.querySelectorAll('.levus-dropdown').forEach(function(element) {
        return element.addEventListener('mouseover', function() {
            var _this = this;

            setTimeout(function() {
                _this.querySelector('ul').style.display = 'block';
            }, 300);
        });
    });
    document.querySelectorAll('.levus-dropdown').forEach(function(element) {
        return element.addEventListener('mouseout', function() {
            var _this2 = this;

            setTimeout(function() {
                _this2.querySelector('ul').style.display = 'none';
            }, 1200);
        });
    });
} // init


levusDropdown();