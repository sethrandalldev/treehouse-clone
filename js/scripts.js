$('.submit-button').click(function() {
    validateForm();
});

function validateForm() {
    var firstName = $('#firstname').val();
    var lastName = $('#lastname').val();
    var email = $('#email').val();
    var password = $('#password').val();
    var errors = false;

    if (firstName.length == 0) {
        $('#first-error').css('display', 'block');
        errors = true;
    }
    else $('#first-error').css('display', 'none');
    if (lastName.length == 0) {
        $('#last-error').css('display', 'block');
        errors = true;
    }
    else $('#last-error').css('display', 'none');
    if (email.length == 0 || !isValidEmailAddress(email)) {
        $('#email-error').css('display', 'block');
        errors = true;
    }
    else $('#email-error').css('display', 'none');
    if (password.length < 7) {
        $('#password-error').css('display', 'block');
        errors = true;
    }
    else $('#password-error').css('display', 'none');
    if (!errors) {
        $('.form-header').html('<h3 class="form-header">Thank you. You will receive an email with a link to your free trial.</h3>');
    }

}

function isValidEmailAddress(emailAddress) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
}