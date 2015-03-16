(function() {

  var mainEl = $('main').first();
  var acceptedEl = $('#f-lead-yes');
  var rejectedEl = $('#f-lead-no');
  var formEl = $('form').first();
  var guestsEl = $('#guests');
  var submitEl = $('#submit');

  $('main form').on('submit', function(evt) {
    if (!acceptedEl.prop('checked') && !rejectedEl.prop('checked')) {
      alert('Please either accept or reject our invitation.');
      evt.preventDefault();
      return;
    }

    if (!$('#f-g1-name').val()) {
      alert('Please tell us your name.');
      evt.preventDefault();
      return;
    }

    $('.guest').slice(0, guestsEl.attr('data-size')).each(function(index, el) {
      var accepted = acceptedEl.prop('checked');
      var guestEl = $(el);
      var nameVal = $('input[id$="-name"]', guestEl).first().val();
      var hasStarterVal = !!$('input[id*="starter"]:checked', guestEl).length;
      var hasMainVal = !!$('input[id*="main"]:checked', guestEl).length;

      if (accepted && !nameVal) {
        alert('Please tell us guest ' + (index + 1) + '’s name.');
        evt.preventDefault();
        return false;
      }

      if (accepted && (!hasStarterVal || !hasMainVal)) {
        var guestName = index === 0 ? 'yourself' : nameVal;

        alert('Please choose food preference for ' + guestName + '.');
        evt.preventDefault();
        return false;
      }
    });
  });

  acceptedEl.on('change', function() {
    if (this.checked) {
      mainEl.attr('data-accepted', 'true');
    }
  });

  rejectedEl.on('change', function() {
    if (this.checked) {
      mainEl.attr('data-accepted', 'false');
    }
  });

  $('#guest-button-add').on('click', function() {
    var size = parseInt(guestsEl.attr('data-size'), 10);

    if (size < 5) {
      guestsEl.attr('data-size', size + 1);
    }
  });

  $('#guest-button-remove').on('click', function() {
    var lastGuest = parseInt(guestsEl.attr('data-size'), 10);

    if (!confirm('Are you sure you want to remove guest ' + lastGuest + '?')) {
      return;
    }

    var guestEl = $('#guest-' + lastGuest);

    $('input', guestEl).val('').prop('checked', false);
    guestsEl.attr('data-size', (lastGuest - 1));
  });

  enhanceReading();

  function enhanceReading() {
    var menuItems = [
      'starter-a',
      'starter-b',
      'main-a',
      'main-b',
      'main-c'
    ];

    for (var i = 0, menuItem; menuItem = menuItems[i]; i++) {
      var text = $('#menu-' + menuItem).text();

      $('label[for$="' + menuItem + '"]', formEl).text(text);
    }

    var pubText = $('#pub-detail').html();
    $('label[for$="-pub"]', formEl).after(pubText);

    $('body').addClass('enhanced');
  }
})();
