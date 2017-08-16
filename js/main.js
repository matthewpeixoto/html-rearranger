var $belowList = $('<ul>');
var $aboveList = $('<ul>');

$('body')
.append('<h2>Below ground veggies</h2>')
.append($belowList)
.append('<h2>Above ground veggies</h2>')
.append($aboveList);

$('li').each(function () {
  if ($(this).hasClass('below')) {
    $belowList.append($(this));
  } else {
    $aboveList.append($(this));
  };
});

$('ul:first-child').remove();
