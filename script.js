let isRunning = true;

let initiate_clock = function(){
    let second_hand = document.querySelector('#second_hand');
    let minute_hand = document.querySelector('#minute_hand');
    let hour_hand = document.querySelector('#hour_hand');

    let change_hands = function(){
        if(isRunning){
            let current_date = new Date();

            second_hand.style.transform = `rotate(${(current_date.getSeconds() * 6) - 90}deg)`;
            minute_hand.style.transform = `rotate(${(current_date.getMinutes() * 6) - 90}deg)`;
            hour_hand.style.transform = `rotate(${(current_date.getHours() * 6) - 90}deg)`;
        }
        setTimeout(change_hands,1000);
    }
    change_hands();
}
initiate_clock();


let toggleButton = document.getElementById("toggleButton");


toggleButton.addEventListener("click", function () {
    if (isRunning) {
        toggleButton.textContent = "Start";
    } else {
        toggleButton.textContent = "Stop";
    }

    isRunning = !isRunning;
});