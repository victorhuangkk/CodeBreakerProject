let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    if (answer == '' | attempt == ''){
       setHiddenFields();
    }
    //add functionality to guess function here
}

//implement new functions here

function setHiddenFields () {
	let temp = Math.random();
	let variable = 10000*Math.floor(temp);
    let answer = variable.toString();
    var i = answer.length;
    while(i < 4) {
    	i++;
        answer = "0" + answer;
    }
    document.setHiddenFields("attempt").value = 0;
}
