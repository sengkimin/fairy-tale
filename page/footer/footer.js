function test(element) {
  console.log(element.value)
  window.location.href = "/stories.html?age=" + element.value;
}