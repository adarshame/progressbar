var inputVal = {
    "buttons": [
        10,
        38,
        -13,
        -18
    ],
    "bars": [
        62,
        45,
        62
    ],
    "limit": 30
}
var updateSlection = function(name) {
    var selectList = document.getElementById("progressBarSelection");
    var option = document.createElement("option");
    option.value = name + '_progress';
    option.text = 'progress bar-' + name;
    selectList.appendChild(option);
}
var createProgressBars = function(count, initialValue, limit) {
    var container = document.createElement('div');
    var progressBar = document.createElement('div');
    progressBar.className += count+'_progress progress';
    progressBar.innerHTML = initialValue > 0 ?  initialValue + '&nbsp%' : '';
    progressBar.style.width = initialValue > 0 ? initialValue + '%' : '0%';
    progressBar.style.backgroundColor = initialValue > inputVal.limit ? 'red' : 'green';
    container.className += 'container';
    container.append(progressBar);
    document.getElementsByClassName("progressBars")[0].append(container);
}
var changeProgress = function(event) {
    var progressBar = document.getElementsByClassName(selectedProgress)[0];
    console.log(parseInt(progressBar.style.width), parseInt(event.target.name));
    var updatedValue = (parseInt(progressBar.style.width) + parseInt(event.target.name));
    progressBar.innerHTML = updatedValue > 0 ?  updatedValue + '&nbsp%' : '';
    progressBar.style.width = updatedValue > 0 ? updatedValue + '%' : '0%';
    progressBar.style.backgroundColor = updatedValue > inputVal.limit ? 'red' : 'green';
}
var createButtons = function(value) {
    var button = document.createElement('button');
    button.onclick = changeProgress;
    button.innerHTML = value;
    button.name = value;
    document.getElementsByClassName("ctrlBtns")[0].append(button);
}
var init = function() {
    var select = document.getElementById("progressBarSelection");
    selectedProgress = inputVal.bars.length ? '1_progress' : "";
    select.onchange = function(){
        selectedProgress = select.options[select.selectedIndex].value;
    }
    for (var index = 0; index < inputVal.bars.length; index++) {
        createProgressBars(index+1, inputVal.bars[index], inputVal.limit);
        updateSlection(index+1);
    }
    for (var index = 0; index < inputVal.buttons.length; index++) {
        createButtons(inputVal.buttons[index]);
    }
}
window.onload = init();