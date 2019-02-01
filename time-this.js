exports.timeThis = (cb, message="The thing took") => {
  const hrTimeStart = process.hrtime()
  const start = hrTimeStart[0] * 1000000000 + hrTimeStart[1];

  const returnVal = cb();

  const hrTimeDiff = process.hrtime(hrTimeStart);
  const diff = hrTimeDiff[0] * 1000000000 + hrTimeDiff[1];
  console.log(message + " " + diff + ' nanoseconds');
  console.log('(Or ' + diff / 1000000000 + ' seconds)');

  return returnVal;
}
