// Saves options to chrome.storage
function save_options() {
  const beginWork = document.querySelector("#begin-work").value;
  const lunchTime = document.querySelector("#lunch-time").value;
  const backToWork = document.querySelector("#back-to-work").value;
  const byeTime = document.querySelector("#bye-time").value;

  chrome.storage.sync.set(
    {
      beginWork,
      lunchTime,
      backToWork,
      byeTime
    },
    function() {
      // Update status to let user know options were saved.
      var status = document.getElementById("status");
      status.textContent = "Tudo salvo :)";
      setTimeout(function() {
        status.textContent = "";
      }, 1200);
    }
  );
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get(
    {
      beginWork: "08",
      lunchTime: "11",
      backToWork: "13",
      byeTime: "19"
    },
    function(items) {
      document.getElementById("begin-work").value = items.beginWork;
      document.getElementById("lunch-time").value = items.lunchTime;
      document.getElementById("back-to-work").value = items.backToWork;
      document.getElementById("bye-time").value = items.byeTime;
    }
  );
}

document.addEventListener("DOMContentLoaded", restore_options);
document.getElementById("save").addEventListener("click", save_options);
