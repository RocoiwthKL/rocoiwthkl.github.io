var hourXx = document.getElementsByClassName('hour-xx')[0];
var hourX = document.getElementsByClassName('hour-x')[0];
var hourXxCricle = document.getElementsByClassName('circle-hour-xx')[0];
var hourXCricle = document.getElementsByClassName('circle-hour-x')[0];

var minuteXx = document.getElementsByClassName('minute-xx')[0];
var minuteX = document.getElementsByClassName('minute-x')[0];
var minuteXxCricle = document.getElementsByClassName('circle-minute-xx')[0];
var minuteXCricle = document.getElementsByClassName('circle-minute-x')[0];

var secondXx = document.getElementsByClassName('second-xx')[0];
var secondX = document.getElementsByClassName('second-x')[0];
var secondXxCricle = document.getElementsByClassName('circle-second-xx')[0];
var secondXCricle = document.getElementsByClassName('circle-second-x')[0];

let distance = 10;
var hourXxTop = 0, hourXTop = 0, minuteXxTop = 0, minuteXTop = 0, secondXxTop = 0, secondXTop = 0;

function getDistance(y, x, add) {
	return (y - x) * distance + add;
}

function run() {
	let nowDate = new Date();
	let secondXText = nowDate.getSeconds() % 10;
	let secondXxText = Math.floor(nowDate.getSeconds() / 10);
	let minuteXxText = Math.floor(nowDate.getMinutes() / 10);
	let minuteXText = nowDate.getMinutes() % 10;
	let hourXxText = Math.floor(nowDate.getHours() / 10);
	let hourXText = nowDate.getHours() % 10;
	
	secondXTop = getDistance(5, secondXText, 0);
	secondXxTop = getDistance(3, secondXxText, 0);
	
	minuteXxTop = getDistance(3, minuteXxText, 0);
	minuteXTop = getDistance(5, minuteXText, 0);
	
	hourXTop = getDistance(4, hourXText, 0);
	hourXxTop = getDistance(1, hourXxText, 5);
	
	secondX.style.top = secondXTop + "vw";
	secondXx.style.top = secondXxTop + "vw";
	
	minuteX.style.top = minuteXTop + "vw";
	minuteXx.style.top = minuteXxTop + "vw";
	
	hourX.style.top = hourXTop + "vw";
	hourXx.style.top = hourXxTop + "vw";
	
	secondXCricle.innerHTML = secondXText;
	secondXxCricle.innerHTML = secondXxText;
	
	minuteXCricle.innerHTML = nowDate.getMinutes() % 10;
	minuteXxCricle.innerHTML = Math.floor(nowDate.getMinutes() / 10);
	
	hourXCricle.innerHTML = nowDate.getHours() % 10;
	hourXxCricle.innerHTML = Math.floor(nowDate.getHours() / 10);
}

run()

var timer = setInterval(() => {
	if (secondXTop > 350) {
		clearInterval(timer)
	} else run()
}, 1000);
