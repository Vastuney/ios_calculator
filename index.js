operator = null;
value = null;
value_string = null;
x = null;
y = null;
exchange = null;
calculated = false;

$(document).ready(function() {

    $(".button").click(function(){
        var operator_ob = $(this).attr("data-type");
        var value_ob = $(this).attr("data-value");
        calculate(operator_ob,value_ob);
    });
});

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
function clearxy() {
  operator = null;
  value_string = null;
  x = null;
  y = null;
  exchange = null;
  calculated = true;
}
function calculate(operator_ob,value_ob) {
  switch (operator_ob) {
    case 'number':
      if(value == null) {
        value = value_ob;
        $("#calculations").text(value);
      } else {
        var value_string = $('#calculations').text();
        if(isNumeric(value_string)){
          if(calculated==false) {
          $("#calculations").append(value_ob);
          value = $("#calculations").text();
          }
        } else {
          value = $("#calculations").text();
          x = parseFloat(value);
          if(y == null) {
          y = parseFloat(value_ob);
          } else {
            if(calculated==false) {
              console.log(calculated);
            y = y + value_ob;
            }
          }
          if(operator=='%') {
            operator = '%';
            $("#calculations").text(x + operator + y);
          } else if(operator=='/') {
            operator = '/';
            $("#calculations").text(x + operator + y);
          } else if(operator=='*') {
            operator = '*';
            $("#calculations").text(x + operator + y);
          } else if(operator=='-') {
            operator = '-';
            $("#calculations").text(x + operator + y);
          } else if(operator=='+') {
            operator = '+';
            $("#calculations").text(x + operator + y);
          }
        }
      }
      break;
    case 'operator':
      operator = value_ob;
      $("#calculations").text(value + operator);
      break;
    case 'clear':
      $("#calculations").text("0")
      operator = null;
      value = null;
      value_string = null;
      x = null;
      y = null;
      exchange = null;
      calculated = false;
      var value_ob = null;
      var operator_ob = null;
      break;
    case 'exchange':
      $("#calculations").append('-');
      value = $("#calculations").text();
      break;
    case 'equals':
      console.log(x + y);
      console.log(operator);
      x = parseFloat(x);
      y = parseFloat(y);
      if(operator=='%') {
        value = x%y;
        $("#calculations").text(value);
        clearxy()
      } else if(operator=='/') {
        value = x/y;
        $("#calculations").text(value);
        clearxy()
      } else if(operator=='*') {
        value = x*y;
        $("#calculations").text(value);
        clearxy()
      } else if(operator=='-') {
        value = x-y;
        $("#calculations").text(value);
        clearxy()
      } else if(operator=='+') {
        value = x+y;
        $("#calculations").text(value);
        clearxy()
      }
  }
}
