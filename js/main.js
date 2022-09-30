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