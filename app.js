/**
 * Application namespace
 * @return {Object}  application behavior methods
 */
var app = (function () {
    var select = document.getElementById("progressBarSelection");
    var selectedProgress = inputVal.bars.length ? '1_progress' : "";
    select.onchange = function() {
        selectedProgress = select.options[select.selectedIndex].value;
    }
    var changeProgress  = function (event) {
        var progressBar = document.getElementsByClassName(selectedProgress)[0],
        updatedValue = (parseInt(progressBar.style.width) + parseInt(event.target.name));
        progressBar.innerHTML = updatedValue > 0 ?  updatedValue + '&nbsp%' : '';
        progressBar.style.width = updatedValue > 0 ? updatedValue + '%' : '0%';
        progressBar.style.backgroundColor = updatedValue > inputVal.limit ? 'red' : 'rgba(0, 188, 212, 0.19)';
    }
    return {
        /**
         * Will create the buttons which are read from input json
         * @param  {Number} value :button value
         * @return {Undefined}
         */
        createButtons: function(value) {
            var button = document.createElement('button');
            button.onclick = changeProgress;
            button.innerHTML = value;
            button.name = value;
            document.getElementsByClassName("ctrlBtns")[0].append(button);
        },
        /**
         * Will create progressbars
         * @param  {Number} count        :Progressbar index
         * @param  {Number} initialValue :Initial value of the progress
         * @param  {Numner} limit        :Progressbar limit
         * @return {Undefined}
         */
        createProgressBars: function(count, initialValue, limit) {
            var container = document.createElement('div'),
                progressBar = document.createElement('div');
            progressBar.className += count+'_progress progress';
            progressBar.innerHTML = initialValue > 0 ?  initialValue + '&nbsp%' : '';
            progressBar.style.width = initialValue > 0 ? initialValue + '%' : '0%';
            progressBar.style.backgroundColor = initialValue > inputVal.limit ? 'red' : 'rgba(0, 188, 212, 0.19)';
            container.className += 'container';
            container.append(progressBar);
            document.getElementsByClassName("progressBars")[0].append(container);
        },
        /**
         * Will create options to the select dropdown
         * @param  {String} name :Progressbar count
         * @return {Undefined}   :No return value
         */
        updateSlection: function(name) {
            var selectList = document.getElementById("progressBarSelection"),
                option = document.createElement("option");
            option.value = name + '_progress';
            option.text = 'progress bar-' + name;
            selectList.appendChild(option);
        }
    }

})();
var init = function() {
    for (var index = 0; index < inputVal.bars.length; index++) {
        app.createProgressBars(index+1, inputVal.bars[index], inputVal.limit);
        app.updateSlection(index+1);
    }
    for (var index = 0; index < inputVal.buttons.length; index++) {
        app.createButtons(inputVal.buttons[index]);
    }
}
window.onload = init();