var $belowHeading = $('<h2>Below ground veggies</h2>');
var $aboveHeading = $('<h2>Above ground veggies</h2>');
var $belowList = $('<ul>');
var $aboveList = $('<ul>');

$('body')
.append($belowHeading)
.append($belowList)
.append($aboveHeading)
.append($aboveList);

$('li').each(function () {
  if ($(this).hasClass('below')) {
    $belowList.append($(this));
  } else {
    $aboveList.append($(this));
  };
});

$('ul:first-child').remove();
