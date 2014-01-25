$(document).ready(function() {
    var processingInstance;

    var initialSetupInterval = 0;

    function init() {
        var resizeEvent = 'resize';
        if (isMobile() || isTablet()) {
            resizeEvent = 'orientationchange';
            $('body').addClass('mobile')
        }

        $(window).bind(resizeEvent, onResize);

        setup();
    }

    function setup() {
        initialSetupInterval = setInterval(function() {

            if ($('#example1').length > 0) {
                processingInstance = Processing.getInstanceById('example1');
            } else if ($('#example2').length > 0) {
                processingInstance = Processing.getInstanceById('example2');
            } else if ($('#example3').length > 0) {
                processingInstance = Processing.getInstanceById('example3');
            }

            if (processingInstance.setupExample) {
                clearInterval(initialSetupInterval);

                if ($('#example1').length > 0) {
                    $('#change-color-btn').bind('click', processingInstance.changeLetterColors);
                } else if ($('#example2').length > 0) {
                    $('#reset-letters-btn').bind('click', processingInstance.resetLetters);
                } else if ($('#example3').length > 0) {
                    $('#explode-letters-btn').bind('click', processingInstance.explodeLetters);
                    $('#reset-letters-btn').bind('click', processingInstance.resetLetters);
                }

                processingInstance.setupExample();
            }

        }, 13);
    }

    function isMobile() {
        var isMobile = (/iphone|ipod|android|blackberry|opera mini|opera mobi|skyfire|maemo|windows phone|palm|iemobile|symbian|symbianos|fennec/i.test(navigator.userAgent.toLowerCase()));

        if (isMobile != true) {
            isMobile = false;
        }

        return isMobile;
    }

    function isTablet() {
        var isTablet = (/ipad|android 3|sch-i800|playbook|tablet|kindle|gt-p1000|sgh-t849|shw-m180s|a510|a511|a100|dell streak|silk/i.test(navigator.userAgent.toLowerCase()));

        if (isTablet != true) {
            isTablet = false;
        }

        return isTablet;
    }

    function onResize() {
        if (processingInstance) {
            processingInstance.onResize();
        }
    }

    init();
});