(function() {

  var guestsEl = document.getElementById('guests');
  var guestButtonCouple = document.getElementById('guest-button-couple');
  var guestButtonFamily = document.getElementById('guest-button-family');

  guestButtonCouple.onclick = function() {
    guestsEl.setAttribute('data-size', 'couple');
  };

  guestButtonFamily.onclick = function() {
    guestsEl.setAttribute('data-size', 'family');
  };

})();
