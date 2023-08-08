// console.log("hello");


function showNextPage() {
  let currentStep = $(".sb.active");

  let currentStepNumber = currentStep.data("step");
  let nextStepNumber = currentStepNumber + 1;

  //hide current sidebar active
  $(".sb").removeClass("active");
  $(".sb[data-step=" + nextStepNumber + "]").addClass("active");

  //hide current detail step
  $(".step").removeClass("active");
  $(".step[data-content-step=" + nextStepNumber + "]").addClass("active");

  //show btn Back
  $(".btn-back").css("display", "block");
}

// -----------btn confirm--------------

$(".btn-confirm").click(function () {
  $(".step").removeClass("active");
  $(".step[data-content-step=5]").addClass("active");
});

//---------btn Back------------------
$(".btn-back").click(function () {
  let currentStep = $(".sb.active");

  let currentStepNumber = currentStep.data("step");
  let backStepNumber = currentStepNumber - 1;

  //hide current sidebar active
  $(".sb").removeClass("active");
  $(".sb[data-step=" + backStepNumber + "]").addClass("active");

  //hide current detail step
  $(".step").removeClass("active");
  $(".step[data-content-step=" + backStepNumber + "]").addClass("active");

  //remove btn Back
  if (backStepNumber === 1) {
    $(".btn-back").css("display", "none");
  }
});

// ------------------------step1---------------------------------------------
//validate step1 by keypress on input
$(document).ready(function () {
  $("#name, #email, #phone").change(function (e) {
    if (this.id === "name") {
      let checkName = valName(e.target.value);
      //   console.log("this name =", check)
      if (checkName != "") {
        $(this).parent().find(".msg").text(checkName);
      } else {
        $(this).parent().find(".msg").text(checkName);
        $("#email").focus();
      }
    }

    if (this.id === "email") {
      let checkEmail = valEmail(e.target.value);
      if (checkEmail != "") {
        $(this).parent().find(".msg").text(checkEmail);
      } else {
        $(this).parent().find(".msg").text(checkEmail);
        $("#phone").focus();
      }
    }

    if (this.id === "phone") {
      let checkPhone = valPhone(e.target.value);
      if (checkPhone != "") {
        $(this).parent().find(".msg").text(checkPhone);
      } else {
        $(this).parent().find(".msg").text(checkPhone);
        $(".btn-next").focus();
      }
    }
  });

  $(".btn-next1").click(function (e) {
    // prevent the form from submitting
    e.preventDefault();

    //check validate
    let checkName = valName($("#name").val());
    let checkEmail = valEmail($("#email").val());
    let checkPhone = valPhone($("#phone").val());

    // console.log('checkname', checkName);

    if (checkName != "") {
      $(".msgName").text(checkName);
    } else {
      $(".msgName").text(checkName);
      $("#email").focus();
    }

    if (checkEmail != "") {
      $(".msgEmail").text(checkEmail);
    } else {
      $(".msgEmail").text(checkEmail);
      $("#phone").focus();
    }

    if (checkPhone != "") {
      $(".msgPhone").text(checkPhone);
    } else {
      $(".msgPhone").text(checkPhone);
      $(".btn-next").focus();
    }

    if (checkName === "" && checkEmail === "" && checkPhone === "") {
      showNextPage();
    }


    // showNextPage();
  });
});

//validate input
function valName(inputValue) {
  inputValue = inputValue.trim();
  if (inputValue === "") {
    return "This field is required";
  } else {
    return "";
  }
}

function valEmail(inputValue) {
  if (inputValue === "") {
    return "This field is required";
  } else if (isEmail(inputValue) == false) {
    return "Wrong email format";
  } else {
    return "";
  }
}

function valPhone(inputValue) {
  if (inputValue === "") {
    return "This field is required";
  } else if (isPhone(inputValue) == false) {
    return "Wrong phone format";
  } else {
    return "";
  }
}

//common validate
function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

function isPhone(number) {
  return /(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(number);
}

//-------------------------step2------------------------------------------

//css when click to select card
$(".card1, .card2, .card3").click(function () {
//   console.log(this.className);
//   if (this.className === "card card1") {
//     $(".card1").css("background-color", "hsl(231, 100%, 99%)");
//     $(".card1").css("border-color", "hsl(243, 100%, 62%)");
//     $(".card2,.card3").css("background-color", "white");
//     $(".card2,.card3").css("border-color", "hsl(229, 24%, 87%)");

//   }
//   if (this.className === "card card2") {
//     $(".card2").css("background-color", "hsl(231, 100%, 99%)");
//     $(".card2").css("border-color", "hsl(243, 100%, 62%)");
//     $(".card1,.card3").css("background-color", "white");
//     $(".card1,.card3").css("border-color", "hsl(229, 24%, 87%)");

//   }

//   if (this.className === "card card3") {
//     $(".card3").css("background-color", "hsl(231, 100%, 99%)");
//     $(".card3").css("border-color", "hsl(243, 100%, 62%)");
//     $(".card1,.card2").css("background-color", "white");
//     $(".card1,.card2").css("border-color", "hsl(229, 24%, 87%)");


//   }

});

//change price when change plan
$("#switch").click(function () {
  let toggleClickStatus = $(":checkbox").is(":checked");
  console.log("toggleClickStatus", toggleClickStatus);

  if (toggleClickStatus === true) {
    console.log("aaaaaaaaaa");
    $(".pricing1").text("$90/mo");
    $(".pricing2").text("$120/mo");
    $(".pricing3").text("$150/mo");

    $(".yearly-free").css("display", "block");
  } else {
    console.log("bbbbbbbbbb");
    $(".pricing1").text("$9/mo");
    $(".pricing2").text("$12/mo");
    $(".pricing3").text("$15/mo");

    $(".yearly-free").css("display", "none");
  }
});

$(".btn-next2").click(function(){
    showNextPage();
})

//-------------------------step3------------------------------------------
$("#checkbox1, #checkbox2, #checkbox3").click(function () {
  //   console.log("hello from step3", this.id);

  if ($("#checkbox1").is(":checked") === true) {
    $(".step3-r1").css("background-color", "hsl(217, 100%, 97%)");
    $(".step3-r1").css("border-color", "hsl(243, 100%, 62%)");
  } else {
    $(".step3-r1").css("background-color", "white");
    $(".step3-r1").css("border-color", "hsl(229, 24%, 87%)");
  }

  if ($("#checkbox2").is(":checked") === true) {
    console.log("hello step2");
    $(".step3-r2").css("background-color", "hsl(217, 100%, 97%)");
    $(".step3-r2").css("border-color", "hsl(243, 100%, 62%)");
  } else {
    $(".step3-r2").css("background-color", "white");
    $(".step3-r2").css("border-color", "hsl(229, 24%, 87%)");
  }

  if ($("#checkbox3").is(":checked") === true) {
    console.log("hello step3");
    $(".step3-r3").css("background-color", "hsl(217, 100%, 97%)");
    $(".step3-r3").css("border-color", "hsl(243, 100%, 62%)");
  } else {
    $(".step3-r3").css("background-color", "white");
    $(".step3-r3").css("border-color", "hsl(229, 24%, 87%)");
  }
});

$(".btn-next3").click(function(){
    showNextPage();

    var username = $("#name").value;
    console.log('username from step1',username);
})

//-------------------------step4------------------------------------------

// $(".btn-next3").click(function () {
//   console.log("hello step4");

//   var username = $("#name").value;
//   console.log('username from step1',username);
// });
