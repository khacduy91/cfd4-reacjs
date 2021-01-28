const milisec_to_date = (date, count_video) => {
  const startDay = new Date(date);

  const today = new Date(Date.now());

  const period = (count_video / 3) * 7;

  const endDay = startDay + period * 86400 * 1000;

  if (endDay < today && startDay < today) {
    let rate = "khoa hoc da ket thuc";
    return rate;
  } else if (startDay < today && today < endDay) {
    let rate = "khoa hoc chua bat dau";
    return rate;
  } else if (startDay < today < endDay) {
    let rate = `${((today - startDay) / (endDay - startDay)) * 100}%`;
    return rate;
  }

  // 1 chua bat dau khoa hoc  startDay > toDay
  // 2 dang trong khoa hoc   startDay < today < endDay
  // 3 ket thuc khoa hoc      endDay < to day
};

export default milisec_to_date;
