$("#soafBtn").on("click", function () {
    let soafArray = [];
    let num1 = parseInt($("#in1").val());
    let num2 = parseInt($("#in2").val());
    let num3 = parseInt($("#in3").val());
    let num4 = parseInt($("#in4").val());
    let num5 = parseInt($("#in5").val());
    let k = Number($("#soafInput").val());
    soafArray.push(num1)
    soafArray.push(num2)
    soafArray.push(num3)
    soafArray.push(num4)
    soafArray.push(num5)
    for (let loop = 0; loop < soafArray.length; loop++) {
        let checkNum = k - soafArray[loop];
        for (let innerLoop = loop + 1; innerLoop < soafArray.length; innerLoop++) {
            let innerCheck = soafArray[innerLoop];
            if (checkNum == innerCheck) {
                $("#soafOutput").html(`<span class="green">Your inputs of ${soafArray[loop]} and ${soafArray[innerLoop]} add to be your K Value of ${k}!</span>`);
                return;
            }
        }
        if (loop == soafArray.length - 1) {
            $("#soafOutput").html(`<span class="red">None of your inputs add to be your K Value of ${k}</span>`);
        }
    }
})
$("#poafBtn").on("click", function () {
    let soafArray = [];
    let num1 = parseInt($("#in1").val());
    let num2 = parseInt($("#in2").val());
    let num3 = parseInt($("#in3").val());
    let num4 = parseInt($("#in4").val());
    let num5 = parseInt($("#in5").val());
    let k = Number($("#soafInput").val());
    soafArray.push(num1)
    soafArray.push(num2)
    soafArray.push(num3)
    soafArray.push(num4)
    soafArray.push(num5)
    for (let loop = 0; loop < soafArray.length; loop++) {
        let checkNum = k / soafArray[loop];
        for (let innerLoop = loop + 1; innerLoop < soafArray.length; innerLoop++) {
            let innerCheck = soafArray[innerLoop];
            if (checkNum == innerCheck) {
                $("#poafOutput").html(`<span class="green">Your inputs of ${soafArray[loop]} and ${soafArray[innerLoop]} multiply to be your K Value of ${k}!</span>`);
                return;
            }
        }
        if (loop == soafArray.length - 1) {
            $("#poafOutput").html(`<span class="red">None of your inputs multiply to be your K Value of ${k}</span>`);
        }
    }
})
function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;

    return true;
}