var times = [3120, 4442, 5224, 7510, 8636, 16002, 17222];
var countries = [
  "eng",
  "us",
  "eng_flage",
  "fn",
  "rus_flage",
  "chn_flage",
  "frn_flage",
];
var themeInterval = setInterval("notification()", time());

function time() {
  return times[parseInt(Math.random() * 7)] + 8000;
}
function notification() {
  spop({
    template:
      '<div class="sale_notification d-flex align-items-center"><img src="assets/images/about_icon.png" alt="" /> <div class="notification_inner"> <h3>' +
      Math.floor(Math.random() * 60000 + 3000) +
      "  $NAFF</h3><p>Have Just Been Purchased</p></div></div>",
    group: "submit-satus",
    style: "nav-fixed", // error or success
    position: "bottom-left",
    autoclose: 5000,
    icon: false,
  });
  clearInterval(themeInterval);
  themeInterval = setInterval("notification()", time());
}
