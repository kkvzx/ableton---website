// This ts/js works only on live.html
// DOM elements
const gridBox = document.querySelectorAll(".gridBox");
// constants
let k = 1;
// functions
// adding images to first GridElement
const imageLoading = () => {
    for (let x of gridBox) {
        x.style.backgroundImage = `linear-gradient(to top, #0519379a, #0024569a, #002e779a, #0038989a, #0041b99a),url(/img/live/grid/gridBox${k}.jpeg)`;
        k++;
    }
};
//Page behaviour
imageLoading();
