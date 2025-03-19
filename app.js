const toggleSwitch = document.getElementById("toggleSwitch");
var r = document.querySelector(':root');
var rs = getComputedStyle(r); // root style
var img = document.getElementById("imageBasket")

toggleSwitch.addEventListener('change', function() {
    if (toggleSwitch.checked) { //kuromi
        console.log("Switch is ON");
        document.body.style.color = rs.getPropertyValue('--kuromi-purple');
        document.body.style.backgroundColor = rs.getPropertyValue('--kuromi-black');
        img.src = "img/kuromi/main.png"
    } else { //melody
        console.log("Switch is OFF"); 
        document.body.style.color = rs.getPropertyValue('--melody-dark-pink');
        document.body.style.backgroundColor = rs.getPropertyValue('--melody-white');
        img.src = "img/melody/main-removebg-preview.png";

    }
});
