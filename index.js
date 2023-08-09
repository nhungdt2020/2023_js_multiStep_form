// console.log("hello");

//-----------btn next------------------
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

//---------btn Back--------------------
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


//show msg validate to class .msg
function showMsgName(checkName){
    if (checkName != "") {
      $(".msgName").text(checkName);
    } else {
      $(".msgName").text(checkName);
      $("#email").focus();
    }
}

function showMsgEmail(checkEmail){
    if (checkEmail != "") {
      $(".msgEmail").text(checkEmail);
    } else {
      $(".msgEmail").text(checkEmail);
      $("#phone").focus();
    }
}

function showMsgPhone(checkPhone){
    if (checkPhone != "") {
      $(".msgPhone").text(checkPhone);
    } else {
      $(".msgPhone").text(checkPhone);
      $(".btn-next").focus();
    }
}

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

//validate step1 by keypress on input
$(document).ready(function () {

  $("#name, #email, #phone").change(function (e) {
    if (this.id === "name") {
      let checkName = valName(e.target.value);
      showMsgName(checkName);
    }
    if (this.id === "email") {
      let checkEmail = valEmail(e.target.value);
      showMsgEmail(checkEmail);
    }

    if (this.id === "phone") {
      let checkPhone = valPhone(e.target.value);
      showMsgPhone(checkPhone);

    }
  });

  $(".btn-next1").click(function (e) {
    // prevent the form from submitting
    e.preventDefault();

    // check validate
    const checkName = valName($("#name").val());
    const checkEmail = valEmail($("#email").val());
    const checkPhone = valPhone($("#phone").val());

    showMsgName(checkName);
    showMsgPhone(checkPhone);
    showMsgEmail(checkEmail);

    if (checkName === "" && checkEmail === "" && checkPhone === "") {
      showNextPage();
    $("#radio1").prop('checked', true);

    let toggleClickStatus = $(":checkbox").is(":checked");
    if (toggleClickStatus === true) {
      $(".pricing1").text("$90/mo");
      $(".pricing2").text("$120/mo");
      $(".pricing3").text("$150/mo");
  
      $(".yearly-free").css("display", "block");
    } else {
      $(".pricing1").text("$9/mo");
      $(".pricing2").text("$12/mo");
      $(".pricing3").text("$15/mo");
  
      $(".yearly-free").css("display", "none");
    }
    }})
      

    //bo qua validate

    // showNextPage();
    // $("#radio1").prop('checked', true);

});

//-------------------------step2------------------------------------------


//change price when change plan
$("#switch").click(function () {
  let toggleClickStatus = $(":checkbox").is(":checked");

  if (toggleClickStatus === true) {
    $(".pricing1").text("$90/mo");
    $(".pricing2").text("$120/mo");
    $(".pricing3").text("$150/mo");

    $(".yearly-free").css("display", "block");
  } else {
    $(".pricing1").text("$9/mo");
    $(".pricing2").text("$12/mo");
    $(".pricing3").text("$15/mo");

    $(".yearly-free").css("display", "none");
  }
});

$(".btn-next2").click(function(){
    showNextPage();

    $("#checkbox1,#checkbox2").prop('checked', true);
    $('.step3-r1,.step3-r2').addClass('selectCheckbox');

    //show next addon 
    let toggleClickStatus = $("#switch").is(":checked");
    if(toggleClickStatus == true){
      $('.priPlan').text('/yr');

      $('.pri1').text('10');
      $('.pri3,.pri2').text('20');

    } else{
      $('.priPlan').text('/mo');

      $('.pri1').text('1');
      $('.pri3,.pri2').text('2');
    }

})

//-------------------------step3------------------------------------------
//set checkbox checked
$('.step3-r1,.step3-r2,.step3-r3').click(function(){
  console.log($(this).attr("class"));
  var checkbox = $(this).children().children().children('input[type="checkbox"]');

  checkbox.prop('checked', !checkbox.prop('checked'));
  if(checkbox.is(':checked')){
    $(this).addClass('selectCheckbox');
  }else{
    $(this).removeClass('selectCheckbox');
  }

})

$("#checkbox1, #checkbox2, #checkbox3").click(function () {
  //   console.log("hello from step3", this.id);

    if ($(this).is(":checked")){
      $(this).parent().parent().parent().addClass('selectCheckbox');
    } else{
      $(this).parent().parent().parent().removeClass('selectCheckbox');
    }
});

//show next page
$(".btn-next3").click(function(){
    showNextPage();
})




//-------------------------step4------------------------------------------


$(".btn-next3").click(function () {

  //get data from step1
  const inputName = $("#name").val();
  console.log('inputName',inputName);

  //get data from step2
  var toggleClickStatusFinal = $("#switch").is(":checked");

  if(toggleClickStatusFinal === true){
    // console.log('yearly plan')
    $('.c-namePlan').text('(yearly)');
    $('.a-plan').text('/yr');
  } else{
    // console.log('monthly plan')
    $('.c-namePlan').text('(monthly)');
    $('.a-plan').text('/mo');
  }

  if($("#radio1").is(':checked')){
    $('.c-nameCard').text('Arcade');
    if(toggleClickStatusFinal === true){
      $('.c-namePri').text('90');
    }else{
      $('.c-namePri').text('9');
    }
  } 
 if($("#radio2").is(':checked')){
    $('.c-nameCard').text('Advanced');
    if(toggleClickStatusFinal === true){
      $('.c-namePri').text('120');
    }else{
      $('.c-namePri').text('12');
    }
  } 
  
  if($("#radio3").is(':checked')){
    $('.c-nameCard').text('Pro');

    if(toggleClickStatusFinal == true){
      $('.c-namePri').text('150');
    }else{
      $('.c-namePri').text('15');
    }
  } 

  //show selected data from step3
  if($('#checkbox1').is(':checked')){
    $('.c-add1').css('display','flex');

    $('.c-name1').text('Online service');
    if(toggleClickStatusFinal == true){
      $('.a-pri1').text('10');
    }else{
      $('.a-pri1').text('1');
    }
  } else{
    $('.a-pri1').text('0');
    $('.c-add1').css('display','none');
  }

  if($('#checkbox2').is(':checked')){
    $('.c-add2').css('display','flex');

    $('.c-name2').text('Large storage');
    if(toggleClickStatusFinal == true){
      $('.a-pri2').text('20');
    }else{
      $('.a-pri2').text('2');
    }
  } else{
    $('.a-pri2').text('0');
    $('.c-add2').css('display','none');
  }

  if($('#checkbox3').is(':checked')){
    $('.c-add3').css('display','flex');

    $('.c-name3').text('Customnizable profile');
    if(toggleClickStatusFinal == true){
      $('.a-pri3').text('20');
    }else{
      $('.a-pri3').text('2');
    }
  } else{
    $('.a-pri3').text('0');
    $('.c-add3').css('display','none');
  }


  let planNum = parseInt($(".c-namePri").text());
  let planAdd1 = parseInt($(".a-pri1").text());
  let planAdd2 = parseInt($(".a-pri2").text());
  let planAdd3 = parseInt($(".a-pri3").text());


  let total = planNum +planAdd1 + planAdd2 + planAdd3;

  $('.totalPri').text(total);
});

//show next page
$(".btn-confirm").click(function(){
  showNextPage();
})

//-------------------------step4------------------------------------------