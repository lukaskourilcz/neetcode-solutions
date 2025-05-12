function openOrSenior(data) {
  let result = [];

  data.forEach(([age, handicap]) => {
    if (age >= 55 && handicap > 7) {
      result.push("Senior");
    } else {
      result.push("Open");
    }
  });
  return result;
}
