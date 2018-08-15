
// Abuja, Nigeria	9.072264	7.491302
// Enugu, Enugu, Nigeria	6.459964	7.548949
// Kaduna, Nigeria	10.609319	7.429504
// Surulere, Lagos, Nigeria	6.500000	3.350000
// Sokoto, Nigeria	13.005873	5.247552
// Bauchi, Nigeria	10.314159	9.846282

export const getTimeFromTimeStamp = mydate => {
  var d = new Date(mydate);
  var hr = d.getHours();
  var min = d.getMinutes();
  if (min < 10) {
    min = "0" + min;
  }
  var ampm = "am";
  if (hr > 12) {
    hr -= 12;
    ampm = "pm";
  }
  return hr + ":" + min + " " + ampm;
};


export const getDateFromTimeStamp = mydate => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  var d = new Date(mydate);
  var day = days[d.getDay()];
  var date = d.getDate();
  var month = months[d.getMonth()];
  var year = d.getFullYear();
  return day + " " + date + " " + month + " " + year;
};
