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
                autoHide: null,                 // define time in ms to auto hide
                animationTime: 1000,            // animation time
                beforeFunc: function () {},     // function to execute before message box creation
                afterFunc: function () {},      // function to execute after message box creation
                onCloseFunc: function () {}     // function to execute on closing of message box
            }, settings);
            this.each(function () {
                console.log(new $.createMsg(this, settings));    // creating object for all elements
            });
            return this;
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
            cl: {
                close: 'close-message'
            },
            func: {
                init: function () {         // initialization function
                    // make container empty
                    msgObj.func.emptyContainer(false, false, function () {
                        // call beforeFunc
                        opt.beforeFunc && opt.beforeFunc();
                        // create Message
                        msgObj.func.createMessageBox();
                        // add close button
                        msgObj.func.createCloseButton();
                        // add auto close timer
                        msgObj.func.autoHideTimer();
                        msgObj.obj.$msgBox.appendTo(msgObj.obj.$me);
                        // to show the message box
                        msgObj.func.showContainer();
                        // call afterFunc 
                        opt.afterFunc && opt.afterFunc();
                        // bind some util functions
                        msgObj.func.bindUtilFunction();
                    });
                    return msgObj;
                },
                emptyContainer: function (delay, isClose, callback) {
                    msgObj.obj.$me.slideUp(delay && opt.animationTime || 0,function() {
                        msgObj.obj.timer && clearTimeout(msgObj.obj.timer);
                        msgObj.obj.$me.empty(); // to empty the message container
                        callback && callback(); // to call callback
                        isClose && opt.onCloseFunc && opt.onCloseFunc();    // to call onCloseFunc
                    });
                },
                showContainer: function () {
                    msgObj.obj.$me.slideDown(opt.animationTime);
                },
                createMessageBox: function () {     // to create message box
                    msgObj.obj.$msgBox = $('<div></div>').addClass('message alert').addClass('alert-' + opt.type).attr('role', 'alert').html(opt.html);
                },
                createCloseButton: function () {    // to add close button
                    if (opt.close) {
                        msgObj.obj.$closeButton = $('<a></a>').attr('href', '#').addClass(msgObj.cl.close);
                        $('<span></span>').addClass('glyphicon glyphicon-remove').appendTo(msgObj.obj.$closeButton);
                        msgObj.obj.$closeButton.click(function (e) {
                            msgObj.evnt.closeMsgBox(e, $(this));        // close button event
                        });
                        msgObj.obj.$closeButton.appendTo(msgObj.obj.$msgBox);
                    }
                },
                autoHideTimer: function () {       // auto close timer
                    if (void 0 != opt.autoHide) {
                        msgObj.obj.timer = setTimeout(function () {
                            msgObj.func.emptyContainer(true, true);
                        }, opt.autoHide);
                    }
                },
                bindUtilFunction: function () {
                    msgObj.obj.$me.close = function() {
                        msgObj.obj.$me.find('a.'+ msgObj.cl.close).click();
                    } 
                }
            },
            evnt: {
                closeMsgBox: function (e, $me) {    // close message box event
                    e.preventDefault();
                    msgObj.func.emptyContainer(true, true);
                }
            }
        };
        // calling main function
        return msgObj.func.init();
    };
})(jQuery);