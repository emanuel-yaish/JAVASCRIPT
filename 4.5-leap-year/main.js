function leapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0 && year % 400 !== 0) {
      console.log(`"This is not a leap year.`);
      return;
    }
    console.log(`It is indeed a leap year`);
    return;
  }

  console.log(`"This is not a leap year.`);
}

leapYear(101);
leapYear(2012);
leapYear(2100);
leapYear(2400);
leapYear(2018);
leapYear(2020);
leapYear(4800);
