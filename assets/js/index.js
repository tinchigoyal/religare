var active_step = 1;


function validateMobile() {
    if ($('#phone').val().length == 10) {
        $('.mobile-validation-arrow').css('display', 'block')
    } else {
        $('.mobile-validation-arrow').css('display', 'none')
    }
}

var phoneNumber = document.getElementById("phone");
phoneNumber.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
        validate(e);
    }
});

function validate(e) {
    goNext(1, 2)
    //validation of the input...
}

function notify(message, level) {
    M.toast({html: message})

}

function goNext(currentstep, nextstep) {

    if (currentstep == 1) {
        if ($('#phone').val().length != 10) {
            notify('Enter valid mobile no', 'error')
            return;
        }
    }

    if (nextstep == 2) {
        $('body').addClass('blurme')
    }

    if (nextstep == 1) {
        $('body').removeClass('blurme')
    }

    if (nextstep == 3) {
        $('.second-answer-no')
    }

    active_step = nextstep;
    $('.slider-step').each(function (index, item) {
        $(item).removeClass('active');
    })
    $('.step' + nextstep).addClass('active');


}

function highlightme(classitem) {
    $(classitem).each(function (index, item) {
        $(item).removeClass('active-answer');
    })

    $(this).addClass('active-answer');
}

function showSecondStep(id) {
    $('#second-step').removeClass('hidden');
    $('.popup-answer-no').each(function (index, item) {
        $(item).removeClass('popup-answer-yes')
    })
    $('#' + id).addClass('popup-answer-yes');
}

function selectMe(id) {
    $('.second-answer-no').each(function (index, item) {
        $(item).removeClass('second-answer-yes')
    })
    $('#' + id).addClass('second-answer-yes');

}