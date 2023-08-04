// console.log("hello");

// $(".btn-1").click(function(){
//     $(".btn-1").css("background-color","hsl(206, 94%, 87%)");
//     $(".btn-1").css("color","hsl(213, 96%, 18%)");
//     $(".s2,.s3,.s4").remove();
// })

$(".btn-next").click(function(){
    let currentStep = $(".sb.active");

    // console.log('currentStep',currentStep);
    // console.log('currentStep',currentStep.data('step'));

    let currentStepNumber = currentStep.data("step");

    // var currentStepContent = currentStep.data('contentStep');

    let nextStepNumber = currentStepNumber + 1;

    //hide current sidebar active
    $('.sb').removeClass('active');
    $('.sb[data-step=' + nextStepNumber + ']').addClass('active');
    

    //hide current detail step
    $(".step").removeClass('active');
    $('.step[data-content-step=' + nextStepNumber +']').addClass("active")

    //show btn Back
    $(".btn-back").css("display","block");
})

$(".btn-confirm").click(function(){
    $(".step").removeClass('active');
    $('.step[data-content-step=5]').addClass("active")



}

)



$(".btn-back").click(function(){
    let currentStep = $(".sb.active");

    let currentStepNumber = currentStep.data("step");


    let backStepNumber = currentStepNumber - 1;

    //hide current sidebar active
    $('.sb').removeClass('active');
    $('.sb[data-step=' + backStepNumber + ']').addClass('active');


    //hide current detail step
    $(".step").removeClass('active');
    $('.step[data-content-step=' + backStepNumber +']').addClass("active")

     //remove btn Back
    if(backStepNumber === 1){
        $(".btn-back").css("display","none");
    }
})