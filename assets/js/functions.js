$(document).ready(function() {
  width_height_ratio_lock();
  // Get started!
});

function width_height_ratio_lock() {
  var section = $("#my-business-card");
  var width = section.width() + 80;

  section.css("height", (4 / 7) * width - 80);
}
