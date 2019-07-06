var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();

// Object that stores summary text.
var summary_wordage = {
  promo_email_sum: {
    checked: "You'll be receiving exciting promotional emails from us!",
    unchecked: "You wont be receiving exciting promotional emails from us."

  },
  terms_sum: {
    checked: "You've agreed to our terms and conditions!",
    unchecked: "You haven't agreed to our terms and conditions."
  }
}
/*


function updateSummary(checkbox) {

  // Field is the id of selected checkbox. This is required to get the correct text to update the summary.
  var summary = checkbox.getAttribute("data-summary");

  // Status is whether the checkbox is checked or unchecked.
  var status = checkbox.checked ? "checked" : "unchecked";

  // Wordage is the text that will be used in the summary.
  var wordage = summary_wordage[summary][status];

  // The summary element that will be updated.
  var summary_element = document.querySelector("." + summary);

  if (checkbox.checked) {
    summary_element.classList.add("valid");
  } else {
    summary_element.classList.remove("valid");
  }

  // Updates text in summary entry.
  summary_element.innerHTML = wordage;



  // Summary content is the element that wraps all of the summary entries.
  var summary_content = document.querySelector(".summary_content");

  // Stores an array of the summary entry elements.
  var summary_entries = document.querySelectorAll(".summary_entry");

  // Initialiser variable that's used to give the green border when all summary entries are valid/checked.
  var all_valid = true;



  // If a summary entry doesn't contain the valid class, then set don't apply the green border around summary content.
  for (var i = 0; i < summary_entries.length; i++) {
    if (!summary_entries[i].classList.contains("valid")) {
      all_valid = false;
    }
  }

  if (all_valid) {
    summary_content.classList.add("valid");
  } else {
    summary_content.classList.remove("valid");
  }




}



// Stores array of checkbox elements
var checkboxes = document.querySelectorAll(".pinnacle_checkbox input");

for (var i = 0; i < checkboxes.length; i++) {

  // Sets event listeners on checkboxes to update summary on change.
  checkboxes[i].addEventListener('change', (event) => {
    updateSummary(event.target);
  })

  // Sets summary content on first load
  updateSummary(checkboxes[i]);
}
