function superbowlWin(record) {
  let hasWin = record.find(function (g) {
    return g.result === "W"
  });

  if (hasWin) {
    return hasWin.year;
  } else {
    return hasWin;
  }
}
