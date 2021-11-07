function getDayOfTheWeek(numDay) {
  const weekdays = [
    "Sunday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return weekdays[numDay];
}

function getCurrentMonthName(currentMonthNum) {
  const monthNames = [
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
    "December",
  ];
  return monthNames[currentMonthNum];
}

function getTodayDate() {
  const currentDate = new Date();
  let currentDay = getDayOfTheWeek(currentDate.getDay());
  let currentDayOfTheMonth = currentDate.getDate();
  let currentMonth = getCurrentMonthName(currentDate.getMonth());
  let year = currentDate.getFullYear();
  return `Today is ${currentDay} the ${currentDayOfTheMonth} of ${currentMonth}, ${year}`;
}

console.log(getTodayDate());
