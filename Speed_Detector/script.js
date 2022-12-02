var math = require("math");

const speed_check = (current_speed) => {
  max_speed = 70;
  if (current_speed <= max_speed) {
    console.log("OK");
  } else if (current_speed >= 130) {
    console.log("Licence suspended, you total warning points is 12.");
  } else {
    points = math.floor((current_speed - max_speed) / 5) + 1;
    console.log("Current warning point is {0}".format(points));
  }
};
