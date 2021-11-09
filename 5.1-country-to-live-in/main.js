function countryToLiveIn(language, isIsland, population, country) {
  if (language === "English" && isIsland === false && population < 50)
    return console.log(`You should live in ${country}.`);

  console.log(`${country} does not meet your criteria.`);
}

countryToLiveIn("Hebrew", false, 9, "Israel");
countryToLiveIn("English", false, 9, "Israel");
