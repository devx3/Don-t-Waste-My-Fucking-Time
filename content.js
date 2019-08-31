chrome.storage.sync.get(
  ["beginWork", "lunchTime", "backToWork", "byeTime"],
  function(item) {
    const { beginWork, lunchTime, backToWork, byeTime } = item;

    const current = new Date();
    const currHour = current.getHours();

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
