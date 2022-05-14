/* var getDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var daysInWeek = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
var dayIndex = {'Mon' : 0, 'Tue' : 1, 'Wed' : 2, 'Thu' : 3, 'Fri' : 4, 'Sat' : 5, 'Sun' : 6};
daysArray = [];
index = daysIndex[(new Date(year, month - 1,1)).toString().split(' ')[0]];*/

/* var day = days[now.getDay()];
var month = months[now.getMonth()]; */

/*const button = document.getElementById("myButton");


button.addEventListener("click", () => {
    //document.getElementById("myButton"); 
});

for (i = 0, d = getDays[month -1]; i<d; i++) {
    daysArray.push((i + 1) + '. ' + daysInWeek[index++]);
    if(index == 7) index = 0;
} 
*/






/* var year = 2022;

var date = new Date(new Date().getFullYear(), 0, 1); */
/* var timestmp = new Date().setFullYear(new Date().getFullYear(),0, 1);
var yearFirstDay = Math.floor(timestmp / 86400000);
var day = new Date(yearFirstDay);
alert(day.getDay()); */


//console.log(date);







/* var year = 2022;
var date = new Date(new Date().getFullYear(), 0, 1);


var now = new Date();
var start = new Date(now.getFullYear(), 0, 0);
var differece = now - start;
var oneDay = 1000 * 60 * 60 * 24;
var day = Math.floor(differece / oneDay);

console.log('Today is: ' + day + ' ' + date); */





/* Date.prototype.isThisYear = function() {
    var year = this.getFullYear();
    if((year & 3) != 0) return false;
    return ((year % 100) != 0 || (year % 400) == 0);
}

//Get Day of Year
Date.prototype.getDAY = function() {
    var dayCount = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
    var month = this.getMonth();
    var date = this.getDate();
    var dayOfYear = dayCount[month] + date;
    if(month > 1 && this.isThisYear()) 
    dayOfYear ++;
    return dayOfYear;
}

console.log(); */


var today = new Date();
var day = today.getDay();
var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' +today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date + ' ' + time;

var dayList = ["Monday", "Tuesday", "Wednesday", "Thusday", "Friday", "Saturday", "Sunday"];

document.getElementById("displayDateTime").innerHTML = dateTime + ' <br> Day :- ' + dayList[day];




const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const d = new Date();
document.write("The current month is " + monthNames[d.getMonth()]);