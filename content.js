const beginWork = "8";
const stop2Lunch = "11";

const startAgain = "13";
const finish = "20";

const current = new Date();
const currHour = current.getHours();

if (
  (currHour >= beginWork && currHour <= stop2Lunch) ||
  (currHour >= startAgain && currHour <= finish)
) {
  $("body").html("");
}
