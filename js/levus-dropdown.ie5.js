// 25-07-2020
"use strict";

function levusDropdown() {
    // УЛ при наведенні стає блок
    document.querySelectorAll('.levus-dropdown').forEach(function(element) {
        return element.addEventListener('mousedown', function() {
            var _this = this;

            setTimeout(function() {
                // add better toggle because click on html close elements
                _this.querySelector('ul').classList.add('open');
            }, 300);
        });
    });
    document.querySelector('html').addEventListener('click', function() {
        document.querySelectorAll('.levus-dropdown ul').forEach(function(element) {
            return element.classList.remove('open');
        });
    });
} // init
levusDropdown();