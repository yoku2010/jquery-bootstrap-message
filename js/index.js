'use strict';

$(document).ready(function() {

    /*
     * @summary: on page load demos 
     */
    $('#info_msg').message({
        type: 'info',
        html: '<strong>Oh...! </strong> it\'s an information message.',
        close: false
    });
    $('#warning_msg').message({
        type:'warning',
        html: 'This is warning message.'
    });
    $('#success_msg').message({
        type: 'success',
        html: '<strong>Well Done! </strong> You did great job.',
        close: false,
        autoHide: 4000
    });
    $('#error_msg').message({
        type: 'danger',
        html: '<strong>Damn </strong> it\'s an error',
        close: true,
        autoHide: 10000
    });

    /*
     * @summary: Message at particular div
     */
    var message1;
    $('#success1').click(function () {
        message1 = $('#particular_msg').message({
            type: 'success',
            html: 'This is message in particular div.',
            beforeFunc: function () {
                $('#update1').prop('disabled', false);
            },
            afterFunc: function () {
                $('#close1').prop('disabled', false);
            },
            onCloseFunc: function () {
                $('#update1').prop('disabled', true);
                $('#close1').prop('disabled', true);
            }
        });
    });
    $('#info1').click(function () {
        message1 = $('#particular_msg').message({
            type: 'info',
            html: 'This is message in particular div.',
            beforeFunc: function () {
                $('#update1').prop('disabled', false);
            },
            afterFunc: function () {
                $('#close1').prop('disabled', false);
            },
            onCloseFunc: function () {
                $('#update1').prop('disabled', true);
                $('#close1').prop('disabled', true);
            }
        });
    });
    $('#warning1').click(function () {
        message1 = $('#particular_msg').message({
            type: 'warning',
            html: 'This is message in particular div.',
            beforeFunc: function () {
                $('#update1').prop('disabled', false);
            },
            afterFunc: function () {
                $('#close1').prop('disabled', false);
            },
            onCloseFunc: function () {
                $('#update1').prop('disabled', true);
                $('#close1').prop('disabled', true);
            }
        });
    });
    $('#danger1').click(function () {
        message1 = $('#particular_msg').message({
            type: 'danger',
            html: 'This is message in particular div.',
            beforeFunc: function () {
                $('#update1').prop('disabled', false);
            },
            afterFunc: function () {
                $('#close1').prop('disabled', false);
            },
            onCloseFunc: function () {
                $('#update1').prop('disabled', true);
                $('#close1').prop('disabled', true);
            }
        });
    });
    $('#close1').click(function() {
        message1.close();
    });
    $('#update1').click(function() {
        message1.update('Message has been updated at <strong>' + String(new Date()) + '</strong>.');
    });
});