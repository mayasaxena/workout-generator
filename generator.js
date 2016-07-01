function generateWorkout() {
  $('#workout tbody').empty();
  $('#workout').show();

  var types = getCheckedBoxes("type");
  for (var i = types.length - 1; i >= 0; i--) {
    $.get('exercises/'+ types[i] + '.txt', function(data) {
      var exercises = data.split("\n");
      var index = Math.floor(exercises.length * Math.random());
      var exerciseInfo = exercises[index].split(",");
      $('#workout').append(
        '<tr>' + 
          '<td>' + exerciseInfo[0] + '</td>' + 
          '<td class="center aligned">' + exerciseInfo[1] + '</td>' + 
          '<td class="center aligned">' + exerciseInfo[2] + '</td>' + 
          '<td class="right aligned"><input type="checkbox"><label></label></td>' + 
        '</tr>'
        );
    });
  }
}

function getCheckedBoxes(checkboxName) {
  var checkboxes = document.getElementsByName(checkboxName);
  var checked = [];
  for (var i=0; i < checkboxes.length; i++) {
     if (checkboxes[i].checked) {
        checked.push(checkboxes[i].value);
     }
  }
  return checked.length > 0 ? checked : null;
}
