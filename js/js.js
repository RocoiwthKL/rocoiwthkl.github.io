let distance = 70;

var textTime = document.getElementsByClassName('text-time')[0];
var hourXx = document.getElementsByClassName('hour-xx')[0];
var hourX = document.getElementsByClassName('hour-x')[0];
var minuteXx = document.getElementsByClassName('minute-xx')[0];
var minuteX = document.getElementsByClassName('minute-x')[0];
var secondXx = document.getElementsByClassName('second-xx')[0];
var secondX = document.getElementsByClassName('second-x')[0];

var hourXxCricle = document.getElementsByClassName('circle-hour-xx')[0];
var hourXCricle = document.getElementsByClassName('circle-hour-x')[0];
var minuteXxCricle = document.getElementsByClassName('circle-minute-xx')[0];
var minuteXCricle = document.getElementsByClassName('circle-minute-x')[0];
var secondXxCricle = document.getElementsByClassName('circle-second-xx')[0];
var secondXCricle = document.getElementsByClassName('circle-second-x')[0];

var hourXxTop = 35;
var hourXTop = 0;
var minuteXxTop = 0;
var minuteXTop = 0;
var secondXxTop = 0;
var secondXTop = 0;

function getDistance(y, x, add = 0) {
	return (y - x) * distance + add;
}

var timer = setInterval(() => {
	let nowDate = new Date();
	if (secondXTop > 350) {
		clearInterval(timer);
	} else {

		let secondXText = nowDate.getSeconds() % 10;
		let secondXxText = Math.floor(nowDate.getSeconds() / 10);
		let minuteXxText = Math.floor(nowDate.getMinutes() / 10);
		let minuteXText = nowDate.getMinutes() % 10;
		let hourXxText = Math.floor(nowDate.getHours() / 10);
		let hourXText = nowDate.getHours() % 10;

		textTime.innerHTML = hourXxText + "" + hourXText + ":" + minuteXxText + "" + minuteXText + ":" +
			secondXxText + "" + secondXText;


		secondXTop = getDistance(5, secondXText);
		secondXxTop = getDistance(3, secondXxText);
		minuteXxTop = getDistance(3, minuteXxText);
		minuteXTop = getDistance(5, minuteXText);
		hourXTop = getDistance(5, hourXText);
		hourXxTop = getDistance(1, hourXxText, 35);

		secondX.style.top = secondXTop + "px";
		secondXx.style.top = secondXxTop + "px";
		minuteX.style.top = minuteXTop + "px";
		minuteXx.style.top = minuteXxTop + "px";
		hourX.style.top = hourXTop + "px";
		hourXx.style.top = hourXxTop + "px";

		secondXCricle.innerHTML = secondXText;
		secondXxCricle.innerHTML = secondXxText;

		minuteXCricle.innerHTML = nowDate.getMinutes() % 10;
		minuteXxCricle.innerHTML = Math.floor(nowDate.getMinutes() / 10);

		hourXCricle.innerHTML = nowDate.getHours() % 10;
		hourXxCricle.innerHTML = Math.floor(nowDate.getHours() / 10);

	}
}, 1000);
