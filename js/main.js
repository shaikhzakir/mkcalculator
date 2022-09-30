window.onload = function () {
    const d = new Date();
    let text = d.toLocaleDateString();
    document.getElementById("txtEnd1").innerHTML = text;

}

$(function () {
    $('#btnDifference').on('click', function () {
        var $startdate = new Date($('#txtStart').val())
        var $enddate = new Date()
        let $mainamt = document.querySelector("#txtAmt").value;
        const $pending = parseInt(document.querySelector("#txtPend").value);
        var $months = ($enddate.getMonth() - $startdate.getMonth()) + 1 + (12 * ($enddate.getFullYear() - $startdate.getFullYear()));
        var $totalamt = ( $months * $mainamt ) + $pending;
        document.getElementById("currentdate").innerHTML = $months;
        document.getElementById("ramount").innerHTML = $mainamt;
        document.getElementById("tmamount").innerHTML = $totalamt;

    });
});

function myBalance() {
    var checkBox = document.getElementById("chkbox");
    var text = document.getElementById("txtPend");
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
       text.style.display = "none";
       document.getElementById("txtPend").value = "0";
    }
  }



  $(function () {
    $('#btnReset').on('click', function () {
    document.getElementById('currentdate').innerHTML = 0;
    document.getElementById('ramount').innerHTML = 0;
    document.getElementById('tmamount').innerHTML = 0;
  });
});


$(function(){
    var dtToday = new Date();

    var month = dtToday.getMonth() + 1;
    var day = dtToday.getDate();
    var year = dtToday.getFullYear();

    if(month < 10)
        month = '0' + month.toString();
    if(day < 10)
        day = '0' + day.toString();

    var maxDate = year + '-' + month + '-' + day;    
    $('#txtStart').attr('max', maxDate);
});

$(document).ready(function() {
    $("#txtPend").keypress(function() {
        if ($(this).val().length == $(this).attr("maxlength")) {
            return false;
        }
    });
});

