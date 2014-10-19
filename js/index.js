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
    var message1, $update1 = $('#update1'), $close1 = $('#close1');
    $('#success1').click(function () {
        message1 = $('#particular_msg').message({
            type: 'success',
            position: 'top',
            html: 'This is message in particular div.',
            beforeFunc: function () {
                $update1.prop('disabled', false);
            },
            afterFunc: function () {
                $close1.prop('disabled', false);
            },
            onCloseFunc: function () {
                $update1.prop('disabled', true);
                $close1.prop('disabled', true);
            }
        });
    });
    $('#info1').click(function () {
        message1 = $('#particular_msg').message({
            type: 'info',
            html: 'This is message in particular div.',
            beforeFunc: function () {
                $update1.prop('disabled', false);
            },
            afterFunc: function () {
                $close1.prop('disabled', false);
            },
            onCloseFunc: function () {
                $update1.prop('disabled', true);
                $close1.prop('disabled', true);
            }
        });
    });
    $('#warning1').click(function () {
        message1 = $('#particular_msg').message({
            type: 'warning',
            html: 'This is message in particular div.',
            beforeFunc: function () {
                $update1.prop('disabled', false);
            },
            afterFunc: function () {
                $close1.prop('disabled', false);
            },
            onCloseFunc: function () {
                $update1.prop('disabled', true);
                $close1.prop('disabled', true);
            }
        });
    });
    $('#danger1').click(function () {
        message1 = $('#particular_msg').message({
            type: 'danger',
            html: 'This is message in particular div.',
            beforeFunc: function () {
                $update1.prop('disabled', false);
            },
            afterFunc: function () {
                $close1.prop('disabled', false);
            },
            onCloseFunc: function () {
                $update1.prop('disabled', true);
                $close1.prop('disabled', true);
            }
        });
    });
    $close1.click(function() {
        message1.close();
    });
    $update1.click(function() {
        message1.update('Message has been updated at <strong>' + String(new Date()) + '</strong>.');
    });

    /*
     * @summary: Message at top of the page
     */
    var message2, $update2 = $('#update2'), $close2 = $('#close2');
    $('#success2').click(function () {
        message2 = $().message({
            type: 'success',
            html: 'This is message in particular div.',
            position: 'top',
            beforeFunc: function () {
                $update2.prop('disabled', false);
            },
            afterFunc: function () {
                $close2.prop('disabled', false);
            },
            onCloseFunc: function () {
                $update2.prop('disabled', true);
                $close2.prop('disabled', true);
            }
        });
    });
    $('#info2').click(function () {
        message2 = $().message({
            type: 'info',
            html: 'This is message in particular div.',
            position: 'top',
            beforeFunc: function () {
                $update2.prop('disabled', false);
            },
            afterFunc: function () {
                $close2.prop('disabled', false);
            },
            onCloseFunc: function () {
                $update2.prop('disabled', true);
                $close2.prop('disabled', true);
            }
        });
    });
    $('#warning2').click(function () {
        message2 = $().message({
            type: 'warning',
            html: 'This is message in particular div.',
            position: 'top',
            beforeFunc: function () {
                $update2.prop('disabled', false);
            },
            afterFunc: function () {
                $close2.prop('disabled', false);
            },
            onCloseFunc: function () {
                $update2.prop('disabled', true);
                $close2.prop('disabled', true);
            }
        });
    });
    $('#danger2').click(function () {
        message2 = $().message({
            type: 'danger',
            html: 'This is message in particular div.',
            position: 'top',
            beforeFunc: function () {
                $update2.prop('disabled', false);
            },
            afterFunc: function () {
                $close2.prop('disabled', false);
            },
            onCloseFunc: function () {
                $update2.prop('disabled', true);
                $close2.prop('disabled', true);
            }
        });
    });
    $close2.click(function() {
        message2.close();
    });
    $update2.click(function() {
        message2.update('Message has been updated at <strong>' + String(new Date()) + '</strong>.');
    });

    /*
     * @summary: Message at top left of the page
     */
    var message3, $update3 = $('#update3'), $close3 = $('#close3');
    $('#success3').click(function () {
        message3 = $().message({
            type: 'success',
            html: 'This is message in particular div.',
            position: 'top-left',
            beforeFunc: function () {
                $update3.prop('disabled', false);
            },
            afterFunc: function () {
                $close3.prop('disabled', false);
            },
            onCloseFunc: function () {
                $update3.prop('disabled', true);
                $close3.prop('disabled', true);
            }
        });
    });
    $('#info3').click(function () {
        message3 = $().message({
            type: 'info',
            html: 'This is message in particular div.',
            position: 'top-left',
            beforeFunc: function () {
                $update3.prop('disabled', false);
            },
            afterFunc: function () {
                $close3.prop('disabled', false);
            },
            onCloseFunc: function () {
                $update3.prop('disabled', true);
                $close3.prop('disabled', true);
            }
        });
    });
    $('#warning3').click(function () {
        message3 = $().message({
            type: 'warning',
            html: 'This is message in particular div.',
            position: 'top-left',
            beforeFunc: function () {
                $update3.prop('disabled', false);
            },
            afterFunc: function () {
                $close3.prop('disabled', false);
            },
            onCloseFunc: function () {
                $update3.prop('disabled', true);
                $close3.prop('disabled', true);
            }
        });
    });
    $('#danger3').click(function () {
        message3 = $().message({
            type: 'danger',
            html: 'This is message in particular div.',
            position: 'top-left',
            beforeFunc: function () {
                $update3.prop('disabled', false);
            },
            afterFunc: function () {
                $close3.prop('disabled', false);
            },
            onCloseFunc: function () {
                $update3.prop('disabled', true);
                $close3.prop('disabled', true);
            }
        });
    });
    $close3.click(function() {
        message3.close();
    });
    $update3.click(function() {
        message3.update('Message has been updated at <strong>' + String(new Date()) + '</strong>.');
    });

    /*
     * @summary: Message at top right of the page
     */
    var message4, $update4 = $('#update4'), $close4 = $('#close4');
    $('#success4').click(function () {
        message4 = $().message({
            type: 'success',
            html: 'This is message in particular div.',
            position: 'top-right',
            beforeFunc: function () {
                $update4.prop('disabled', false);
            },
            afterFunc: function () {
                $close4.prop('disabled', false);
            },
            onCloseFunc: function () {
                $update4.prop('disabled', true);
                $close4.prop('disabled', true);
            }
        });
    });
    $('#info4').click(function () {
        message4 = $().message({
            type: 'info',
            html: 'This is message in particular div.',
            position: 'top-right',
            beforeFunc: function () {
                $update4.prop('disabled', false);
            },
            afterFunc: function () {
                $close4.prop('disabled', false);
            },
            onCloseFunc: function () {
                $update4.prop('disabled', true);
                $close4.prop('disabled', true);
            }
        });
    });
    $('#warning4').click(function () {
        message4 = $().message({
            type: 'warning',
            html: 'This is message in particular div.',
            position: 'top-right',
            beforeFunc: function () {
                $update4.prop('disabled', false);
            },
            afterFunc: function () {
                $close4.prop('disabled', false);
            },
            onCloseFunc: function () {
                $update4.prop('disabled', true);
                $close4.prop('disabled', true);
            }
        });
    });
    $('#danger4').click(function () {
        message4 = $().message({
            type: 'danger',
            html: 'This is message in particular div.',
            position: 'top-right',
            beforeFunc: function () {
                $update4.prop('disabled', false);
            },
            afterFunc: function () {
                $close4.prop('disabled', false);
            },
            onCloseFunc: function () {
                $update4.prop('disabled', true);
                $close4.prop('disabled', true);
            }
        });
    });
    $close4.click(function() {
        message4.close();
    });
    $update4.click(function() {
        message4.update('Message has been updated at <strong>' + String(new Date()) + '</strong>.');
    });

    /*
     * @summary: Message at bottom of the page
     */
    var message5, $update5 = $('#update5'), $close5 = $('#close5');
    $('#success5').click(function () {
        message5 = $().message({
            type: 'success',
            html: 'This is message in particular div.',
            position: 'bottom',
            beforeFunc: function () {
                $update5.prop('disabled', false);
            },
            afterFunc: function () {
                $close5.prop('disabled', false);
            },
            onCloseFunc: function () {
                $update5.prop('disabled', true);
                $close5.prop('disabled', true);
            }
        });
    });
    $('#info5').click(function () {
        message5 = $().message({
            type: 'info',
            html: 'This is message in particular div.',
            position: 'bottom',
            beforeFunc: function () {
                $update5.prop('disabled', false);
            },
            afterFunc: function () {
                $close5.prop('disabled', false);
            },
            onCloseFunc: function () {
                $update5.prop('disabled', true);
                $close5.prop('disabled', true);
            }
        });
    });
    $('#warning5').click(function () {
        message5 = $().message({
            type: 'warning',
            html: 'This is message in particular div.',
            position: 'bottom',
            beforeFunc: function () {
                $update5.prop('disabled', false);
            },
            afterFunc: function () {
                $close5.prop('disabled', false);
            },
            onCloseFunc: function () {
                $update5.prop('disabled', true);
                $close5.prop('disabled', true);
            }
        });
    });
    $('#danger5').click(function () {
        message5 = $().message({
            type: 'danger',
            html: 'This is message in particular div.',
            position: 'bottom',
            beforeFunc: function () {
                $update5.prop('disabled', false);
            },
            afterFunc: function () {
                $close5.prop('disabled', false);
            },
            onCloseFunc: function () {
                $update5.prop('disabled', true);
                $close5.prop('disabled', true);
            }
        });
    });
    $close5.click(function() {
        message5.close();
    });
    $update5.click(function() {
        message5.update('Message has been updated at <strong>' + String(new Date()) + '</strong>.');
    });

    /*
     * @summary: Message at bottom-left of the page
     */
    var message6, $update6 = $('#update6'), $close6 = $('#close6');
    $('#success6').click(function () {
        message6 = $().message({
            type: 'success',
            html: 'This is message in particular div.',
            position: 'bottom-left',
            beforeFunc: function () {
                $update6.prop('disabled', false);
            },
            afterFunc: function () {
                $close6.prop('disabled', false);
            },
            onCloseFunc: function () {
                $update6.prop('disabled', true);
                $close6.prop('disabled', true);
            }
        });
    });
    $('#info6').click(function () {
        message6 = $().message({
            type: 'info',
            html: 'This is message in particular div.',
            position: 'bottom-left',
            beforeFunc: function () {
                $update6.prop('disabled', false);
            },
            afterFunc: function () {
                $close6.prop('disabled', false);
            },
            onCloseFunc: function () {
                $update6.prop('disabled', true);
                $close6.prop('disabled', true);
            }
        });
    });
    $('#warning6').click(function () {
        message6 = $().message({
            type: 'warning',
            html: 'This is message in particular div.',
            position: 'bottom-left',
            beforeFunc: function () {
                $update6.prop('disabled', false);
            },
            afterFunc: function () {
                $close6.prop('disabled', false);
            },
            onCloseFunc: function () {
                $update6.prop('disabled', true);
                $close6.prop('disabled', true);
            }
        });
    });
    $('#danger6').click(function () {
        message6 = $().message({
            type: 'danger',
            html: 'This is message in particular div.',
            position: 'bottom-left',
            beforeFunc: function () {
                $update6.prop('disabled', false);
            },
            afterFunc: function () {
                $close6.prop('disabled', false);
            },
            onCloseFunc: function () {
                $update6.prop('disabled', true);
                $close6.prop('disabled', true);
            }
        });
    });
    $close6.click(function() {
        message6.close();
    });
    $update6.click(function() {
        message6.update('Message has been updated at <strong>' + String(new Date()) + '</strong>.');
    });

    /*
     * @summary: Message at bottom right of the page
     */
    var message7, $update7 = $('#update7'), $close7 = $('#close7');
    $('#success7').click(function () {
        message7 = $().message({
            type: 'success',
            html: 'This is message in particular div.',
            position: 'bottom-right',
            beforeFunc: function () {
                $update7.prop('disabled', false);
            },
            afterFunc: function () {
                $close7.prop('disabled', false);
            },
            onCloseFunc: function () {
                $update7.prop('disabled', true);
                $close7.prop('disabled', true);
            }
        });
    });
    $('#info7').click(function () {
        message7 = $().message({
            type: 'info',
            html: 'This is message in particular div.',
            position: 'bottom-right',
            beforeFunc: function () {
                $update7.prop('disabled', false);
            },
            afterFunc: function () {
                $close7.prop('disabled', false);
            },
            onCloseFunc: function () {
                $update7.prop('disabled', true);
                $close7.prop('disabled', true);
            }
        });
    });
    $('#warning7').click(function () {
        message7 = $().message({
            type: 'warning',
            html: 'This is message in particular div.',
            position: 'bottom-right',
            beforeFunc: function () {
                $update7.prop('disabled', false);
            },
            afterFunc: function () {
                $close7.prop('disabled', false);
            },
            onCloseFunc: function () {
                $update7.prop('disabled', true);
                $close7.prop('disabled', true);
            }
        });
    });
    $('#danger7').click(function () {
        message7 = $().message({
            type: 'danger',
            html: 'This is message in particular div.',
            position: 'bottom-right',
            beforeFunc: function () {
                $update7.prop('disabled', false);
            },
            afterFunc: function () {
                $close7.prop('disabled', false);
            },
            onCloseFunc: function () {
                $update7.prop('disabled', true);
                $close7.prop('disabled', true);
            }
        });
    });
    $close7.click(function() {
        message7.close();
    });
    $update7.click(function() {
        message7.update('Message has been updated at <strong>' + String(new Date()) + '</strong>.');
    });
});