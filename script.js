
function changeSlider() {
    var slider = document.getElementsByName("slider")
    for (var i = 0; i < slider.length; i++) {
      if (slider[i].checked) {
        var next = (i + 1) % slider.length
        slider[next].checked = true
        break
      }
    }
  }
 setInterval(changeSlider, 3000)
