document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("pageDate").textContent = dateCustomed();
});
document.addEventListener("DOMContentLoaded", function() {
    function updateTime() {
        document.getElementById("pageTime").textContent = localTimeCustomed();
    }

    updateTime();
    setInterval(updateTime, 1000); 
});
