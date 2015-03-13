(function() {

  var mainEl = document.getElementsByTagName('main')[0];
  var acceptedEl = document.getElementById('f-lead-yes');
  var rejectedEl = document.getElementById('f-lead-no');
  var formEl = document.getElementsByTagName('form')[0];
  var guestsEl = document.getElementById('guests');
  var guestButtonCouple = document.getElementById('guest-button-couple');
  var guestButtonFamily = document.getElementById('guest-button-family');
  var guest1NameEl = document.getElementById('f-g1-name');
  var submitEl = document.getElementById('submit');

  formEl.onsubmit = function() {
    if ((!acceptedEl.checked && !rejectedEl.checked) || !guest1NameEl.value) {
      alert('Please either accept or reject this invitation, and tell us your' +
        ' name');
      return false;
    }
  };

  acceptedEl.onchange = function() {
    if (this.checked) {
      mainEl.setAttribute('data-accepted', 'true');
    }
  };

  rejectedEl.onchange = function() {
    if (this.checked) {
      mainEl.setAttribute('data-accepted', 'false');
    }
  };

  guestButtonCouple.onclick = function() {
    guestsEl.setAttribute('data-size', 'couple');
  };

  guestButtonFamily.onclick = function() {
    guestsEl.setAttribute('data-size', 'family');
  };

})();
