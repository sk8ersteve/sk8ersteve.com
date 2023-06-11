function toggleDarkMode() {
  var checkBox = document.getElementById("darkMode");
  if (checkBox.checked) {
    document.body.style.background = "#111";
    document.body.style.color = "#f2f2f2";
  } else {
    document.body.style.background = "#f2f2f2";
    document.body.style.color = "#444";
  }
}
