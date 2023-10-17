// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html. To do this wrap ALL jQuery and JS in lines4 -6
$(document).ready(function(){


$(function () {
 // TODO: Add code to display the current date in the header of the page.
  
 const date = dayjs().format('dddd, MMMM D, YYYY');
 document.getElementById('currentDay').textContent = date;
//  const date = new Date();
//  const formatDate = new Intl.DateTimeFormat("en-us",{
//    dateStyle:"full"
//  });
//  document.getElementById('currentDay').textContent = formatDate.format(date);

//  const d =new Date();
  // let hourofDay = date.getHours();
  // document.getElementById('currentHour').
  // textContent = hourofDay;
  let hourofDay = dayjs().format('H');
  document.getElementById('currentHour').
  textContent = hourofDay;


/* this will save the information for 9am appointments.*/
  const show9AMappt = document.getElementById('appointmentFor9');
  document.getElementById('saveBtnFor9').addEventListener('click',function(){window.localStorage.setItem('appointment information9', show9AMappt.value);
  });
  var storedValue = localStorage.getItem('appointment information9');
  var inputField = document.getElementById('appointmentFor9');
inputField.value = storedValue;

// tried to convert to jquery but the value wouldn't store
// const show9AMappt = $('#appointmentFor9');
// $('#saveBtnFor9').click(function(){window.localStorage.setItem('appointment information9', show9AMappt.value);
// });
// var storedValue = localStorage.getItem('appointment information9');
// var inputField = $('#appointmentFor9');
// inputField.value = storedValue;



/* this will save the information for 10am appointments.*/
  const show10AMappt = document.getElementById('appointmentFor10');
  document.getElementById('saveBtnFor10').addEventListener('click',function(){window.localStorage.setItem('appointment information10', show10AMappt.value);
  });
  var storedValue = localStorage.getItem('appointment information10');
  var inputField = document.getElementById('appointmentFor10');
inputField.value = storedValue;

/* this will save the information for 11am appointments.*/
  const show11AMappt = document.getElementById('appointmentFor11');
  document.getElementById('saveBtnFor11').addEventListener('click',function(){window.localStorage.setItem('appointment information11', show11AMappt.value);
  });
  var storedValue = localStorage.getItem('appointment information11');
  var inputField = document.getElementById('appointmentFor11');
inputField.value = storedValue;

/* this will save the information for 12PM appointments.*/
const show12PMappt = document.getElementById('appointmentFor12');
document.getElementById('saveBtnFor12').addEventListener('click',function(){window.localStorage.setItem('appointment information12', show12PMappt.value);
});
var storedValue = localStorage.getItem('appointment information12');
var inputField = document.getElementById('appointmentFor12');
inputField.value = storedValue;

/* this will save the information for 1PM appointments.*/
const show1PMappt = document.getElementById('appointmentFor1');
document.getElementById('saveBtnFor1').addEventListener('click',function(){window.localStorage.setItem('appointment information1', show1PMappt.value);
});
var storedValue = localStorage.getItem('appointment information1');
var inputField = document.getElementById('appointmentFor1');
inputField.value = storedValue;


/* this will save the information for 2PM appointments.*/
const show2PMappt = document.getElementById('appointmentFor2');
document.getElementById('saveBtnFor2').addEventListener('click',function(){window.localStorage.setItem('appointment information2', show2PMappt.value);
});
var storedValue = localStorage.getItem('appointment information2');
var inputField = document.getElementById('appointmentFor2');
inputField.value = storedValue;

/* this will save the information for 3PM appointments.*/
const show3PMappt = document.getElementById('appointmentFor3');
document.getElementById('saveBtnFor3').addEventListener('click',function(){window.localStorage.setItem('appointment information3', show3PMappt.value);
});
var storedValue = localStorage.getItem('appointment information3');
var inputField = document.getElementById('appointmentFor3');
inputField.value = storedValue;


/* this will save the information for 4PM appointments.*/
const show4PMappt = document.getElementById('appointmentFor4');
document.getElementById('saveBtnFor4').addEventListener('click',function(){window.localStorage.setItem('appointment information4', show4PMappt.value);
});
var storedValue = localStorage.getItem('appointment information4');
var inputField = document.getElementById('appointmentFor4');
inputField.value = storedValue;

/* this will save the information for 5PM appointments.*/
const show5PMappt = document.getElementById('appointmentFor5');
document.getElementById('saveBtnFor5').addEventListener('click',function(){window.localStorage.setItem('appointment information5', show5PMappt.value);
});
var storedValue = localStorage.getItem('appointment information5');
var inputField = document.getElementById('appointmentFor5');
inputField.value = storedValue;


 /*this will add the appropriate class of past/present/future for 9AM.*/
// if (date.getHours()=='9') {
//   $('#appointmentFor9').addClass('present');
// } else {
//   $('#appointmentFor9').addClass('past');
// };
if (hourofDay =='9') {
  $('#appointmentFor9').addClass('present');
} else {
  $('#appointmentFor9').addClass('past');
};
 /*this will add the appropriate class of past/present/future for 10AM.*/
if (hourofDay =='10') {
  $('#appointmentFor10').addClass('present');
} else if(hourofDay =='9'){
  $('#appointmentFor10').addClass('future');
} else {
  $('#appointmentFor10').addClass('past');
};
 /*this will add the appropriate class of past/present/future for 11AM.*/

if (hourofDay =='11') {
  $('#appointmentFor11').addClass('present');
} else if(hourofDay =='9'||hourofDay =='10'){
  $('#appointmentFor11').addClass('future');
} else {
  $('#appointmentFor11').addClass('past');
};
 /*this will add the appropriate class of past/present/future for 12PM.*/

if (hourofDay =='12') {
  $('#appointmentFor12').addClass('present');
} else if(hourofDay =='9'||hourofDay =='10'||hourofDay =='11'){
  $('#appointmentFor12').addClass('future');
} else {
  $('#appointmentFor12').addClass('past');
};

 /*this will add the appropriate class of past/present/future for 1PM.*/
if (hourofDay =='13') {
  $('#appointmentFor1').addClass('present');
} else if(hourofDay =='9'||hourofDay =='10'||hourofDay =='11'||hourofDay =='12'){
  $('#appointmentFor1').addClass('future');
} else {
  $('#appointmentFor1').addClass('past');
};

 /*this will add the appropriate class of past/present/future for 2PM.*/
if (hourofDay =='14') {
  $('#appointmentFor2').addClass('present');
} else if(hourofDay =='9'||hourofDay =='10'||hourofDay =='11'||hourofDay =='12'||hourofDay =='1'){
  $('#appointmentFor2').addClass('future');
} else {
  $('#appointmentFor2').addClass('past');
};

 /*this will add the appropriate class of past/present/future for 3PM.*/
if (hourofDay =='15') {
  $('#appointmentFor3').addClass('present');
} else if(hourofDay =='9'||hourofDay =='10'||hourofDay =='11'||hourofDay =='12'||hourofDay =='13'||hourofDay =='14'){
  $('#appointmentFor3').addClass('future');
} else {
  $('#appointmentFor3').addClass('past');
};


 /*this will add the appropriate class of past/present/future for 4PM.*/
if (hourofDay =='16') {
  $('#appointmentFor4').addClass('present');
} else if(hourofDay =='9'||hourofDay =='10'||hourofDay =='11'||hourofDay =='12'||hourofDay =='13'||hourofDay =='14'||hourofDay =='15'){
  $('#appointmentFor4').addClass('future');
} else {
  $('#appointmentFor4').addClass('past');
};

 /*this will add the appropriate class of past/present/future for 5PM.*/
if (hourofDay =='17') {
  $('#appointmentFor5').addClass('present');
// } else if(date.getHours()=='9'||'10'||'11'||'12'||'1'||'2'||'3'||'4'){
  // $('#appointmentFor5').addClass('future');
} else {
  $('#appointmentFor5').addClass('future');
};
// closes the function for page
});
// closes the document.ready function() the very beginning.
});