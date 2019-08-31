chrome.storage.sync.get(
  ["beginWork", "lunchTime", "backToWork", "byeTime"],
  function(item) {
    const arbDate = "01/01/2011 ";
    let { beginWork, lunchTime, backToWork, byeTime } = item;

    beginWork = Date.parse(arbDate + beginWork + ":00");
    lunchTime = Date.parse(arbDate + lunchTime + ":00");
    backToWork = Date.parse(arbDate + backToWork + ":00");
    byeTime = Date.parse(arbDate + byeTime + ":00");

    const current = new Date();
    const currHour = Date.parse(
      arbDate +
        current.getHours() +
        ":" +
        current.getMinutes() +
        ":" +
        current.getSeconds()
    );

    if (
      (currHour >= beginWork && currHour < lunchTime) ||
      (currHour >= backToWork && currHour < byeTime)
    ) {
      $("body").html(
        '<div class="message"><h1>"Antes sujo do que mal lavado" :)</h1></div>'
      );
    }
  }
);
