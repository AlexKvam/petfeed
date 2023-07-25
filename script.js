document.addEventListener("DOMContentLoaded", function () {
    fetchData();

    document.getElementById("triggerButton").addEventListener("click", triggerFeeding);
    document.getElementById("setTimeButton").addEventListener("click", setNewFeedingTime);
});

function fetchData() {
    // Fetch data from the server using AJAX or Fetch API and update currentTime and feedingTime elements.
    // You can use XMLHttpRequest, Fetch API, or any JavaScript framework (e.g., jQuery) for this purpose.
    // The data can be fetched from the PHP server using JSON format or any other suitable format.
    // Sample code:
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                var data = JSON.parse(xhr.responseText);
                document.getElementById("currentTime").textContent = "Current Time: " + data.currentTime;
                document.getElementById("feedingTime").textContent = "Feeding Time: " + data.feedingTime;
            } else {
                console.error("Failed to fetch data.");
            }
        }
    };
    xhr.open("GET", "server.php?action=getData", true);
    xhr.send();
}

function triggerFeeding() {
    // Trigger the feeding process on the server using AJAX or Fetch API.
    // Sample code:
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                console.log("Feeding triggered successfully!");
            } else {
                console.error("Failed to trigger feeding.");
            }
        }
    };
    xhr.open("GET", "server.php?action=trigger", true);
    xhr.send();
}

function setNewFeedingTime() {
    // Get the new feeding hour and minute from the input elements.
    var newHour = document.getElementById("hourInput").value;
    var newMinute = document.getElementById("minuteInput").value;

    // Validate the input (you can add further validation if needed).

    //Send the new feeding time to the server using AJAX or Fetch API.
    //Sample code:
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                console.log("Feeding time set successfully!");
            } else {
                console.error("Failed to set feeding time.");
            }
        }
     };
     xhr.open("GET", "server.php?action=setTrigger&hour=" + newHour + "&minute=" + newMinute, true);
     xhr.send();
}
