var projectionArray = [
  { value: '2000 1系', id: '2443' },
  { value: '2000 2系', id: '2444' },
  { value: '2000 3系', id: '2445' },
  { value: '2000 4系', id: '2446' },
  { value: '2000 5系', id: '2447' },
  { value: '2000 6系', id: '2448' },
  { value: '2000 7系', id: '2449' },
  { value: '2000 8系', id: '2450' },
  { value: '2000 9系', id: '2451' },
  { value: '2000 10系', id: '2452' },
  { value: '2000 11系', id: '2453' },
  { value: '2000 12系', id: '2454' },
  { value: '2000 13系', id: '2455' },
  { value: '2000 14系', id: '2456' },
  { value: '2000 15系', id: '2457' },
  { value: '2000 16系', id: '2458' },
  { value: '2000 17系', id: '2459' },
  { value: '2000 18系', id: '2460' },
  { value: '2000 19系', id: '2461' },
  { value: '2011 1系', id: '6669' },
  { value: '2011 2系', id: '6670' },
  { value: '2011 3系', id: '6671' },
  { value: '2011 4系', id: '6672' },
  { value: '2011 5系', id: '6673' },
  { value: '2011 6系', id: '6674' },
  { value: '2011 7系', id: '6675' },
  { value: '2011 8系', id: '6676' },
  { value: '2011 9系', id: '6677' },
  { value: '2011 10系', id: '6678' },
  { value: '2011 11系', id: '6679' },
  { value: '2011 12系', id: '6680' },
  { value: '2011 13系', id: '6681' },
  { value: '2011 14系', id: '6682' },
  { value: '2011 15系', id: '6683' },
  { value: '2011 16系', id: '6684' },
  { value: '2011 17系', id: '6685' },
  { value: '2011 18系', id: '6686' },
  { value: '2011 19系', id: '6687' }
];

var optionArray = function() {
  var options = [];
  for (var i = 0; i < projectionArray.length; i++) {
    var item = projectionArray[i];
    var element = '<option value="' + item.id + '">' + item.value + '</option>';

    options.push(element);
  }
  return options.join('\n');
};

var selectBox = '<div id="selectProjectionDiv">' +
  '<select name="projection" id="selectProjection">' +
  optionArray() +
  '</select></div>';

var targetElement = document.getElementsByClassName('logoarea')[0];
var removeObject = targetElement.firstElementChild;
targetElement.removeChild(removeObject);
$(targetElement).append(selectBox);

$('#selectProjection').val('6677');
