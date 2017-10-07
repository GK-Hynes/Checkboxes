const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
  // check if the shift key is down
  // AND check that they are checking a box
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    // loop over every checkbox
    checkboxes.forEach(checkbox => {
      console.log(checkbox);
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log("Starting to check inbetween.");
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
}
checkboxes.forEach(checkbox => checkbox.addEventListener("click", handleCheck));
