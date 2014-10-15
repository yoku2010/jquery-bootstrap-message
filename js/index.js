'use strict';

$(document).ready(function() {
    $('#info_msg').message({
        type: 'info',
        html: '<strong>Oh...! </strong> it\'s an information message.'
    });
    $('#warning_msg').message({
        type:'warning',
        html: 'This is warning message.'
    });
    $('#success_msg').message({
        type: 'success',
        html: '<strong>Well Done! </strong> You did great job.'
    });
    $('#error_msg').message({
        type: 'danger',
        html: '<strong>Damn </strong> it\'s an error'
    });
});