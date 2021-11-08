function getDayOfTheWeek(numDay) {
  const weekdays = [
    "Sunday",
    "Monday",
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
  const currentDay = getDayOfTheWeek(currentDate.getDay());
  const currentDayOfTheMonth = currentDate.getDate();
  const currentMonth = getCurrentMonthName(currentDate.getMonth());
  const year = currentDate.getFullYear();

  return `Today is ${currentDay} the ${currentDayOfTheMonth} of ${currentMonth}, ${year}`;
}

console.log(getTodayDate());
