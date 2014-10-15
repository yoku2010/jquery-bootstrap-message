'use strict';
/**
 * @description: To create a message plugin using jquery and bootstrap.
 * @dependency: jquery1.10.x, bootstrap
 * @verion: 0.1
 * @date: 13-Oct-2014
 */
(function ($) {
    $.fn.extend({
        message: function (settings){
            settings = jQuery.extend({
                type: 'info',                   // info | warning | danger | success
                html: 'Enter Your Message',     // html message
                close: true,                    // show close button
                autoClose: null                 // define time in ms to auto close
            }, settings);
            return this.each(function () {
                new $.createMsg(this, settings);    // creating object for all elements
            });
        }
    });
    $.createMsg = function (me, opt) {
        var msgObj = {
            version: '0.1',
            obj: {
                $me: $(me),             // to store container object
                $msgBox: null,          // to store message box object
                $closeButton: null,     // to store close button object
                timer: null             // to store timer object (setTimeout)
            },
            func: {
                init: function () {         // initialization function
                    // make container empty
                    msgObj.func.emptyContainer();
                    // create Message
                    msgObj.func.createMessageBox();
                    // add close button
                    msgObj.func.createCloseButton();
                    // add auto close timer
                    msgObj.func.autoCloseTimer();
                    msgObj.obj.$msgBox.appendTo(msgObj.obj.$me);
                },
                emptyContainer: function () {
                    msgObj.obj.$me.empty(); // to empty the message container
                },
                createMessageBox: function () {     // to create message box
                    msgObj.obj.$msgBox = $('<div></div>').addClass('message alert').addClass('alert-' + opt.type).attr('role', 'alert').html(opt.html);
                },
                createCloseButton: function () {    // to add close button
                    if (opt.close) {
                        msgObj.obj.$closeButton = $('<a></a>').attr('href', '#');
                        $('<span></span>').addClass('glyphicon glyphicon-remove').appendTo(msgObj.obj.$closeButton);
                        msgObj.obj.$closeButton.click(function (e) {
                            msgObj.evnt.closeMsgBox(e, $(this));        // close button event
                        });
                        msgObj.obj.$closeButton.appendTo(msgObj.obj.$msgBox);
                    }
                },
                autoCloseTimer: function () {       // auto close timer
                    if (void 0 != opt.autoClose) {
                        msgObj.obj.timer = setTimeout(function () {
                            msgObj.func.emptyContainer();
                        }, opt.autoClose);
                    }
                }
            },
            evnt: {
                closeMsgBox: function (e, $me) {    // close message box event
                    e.preventDefault();
                    msgObj.func.emptyContainer();
                }
            }
        };
        // calling main function
        msgObj.func.init();
    };
})(jQuery);