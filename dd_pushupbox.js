/**
 * @package     DD_PushUpBox (pub)
 *
 * @author      HR IT-Solutions Florian Häusler <info@hr-it-solutions.com>
 * @copyright   Copyright (C) 2017 - 2017 Didldu e.K. | HR IT-Solutions
 * @license     http://www.gnu.org/licenses/gpl-2.0.html GNU/GPLv2 only
 **/

; var DD_PushUpID,
      DD_PushUpContent;

var DD_PushUpBox = function () {

    // Configuration
    var config = {
            width: 200,
            padding: 10,
            title: true,
            closingX: true,
            closingXHTML: '&#10006;'
        },
        activeID;

    /*
    * DD_PushUpID function
    * contentID     the id to push
    * contentTitle  the title for the box
    * */
    DD_PushUpID = function(contentID,contentTitle){

        activeID = contentID;
        var activeElement = $('#' + contentID);

        DD_Push(activeElement.html(),contentTitle);
        activeElement.html('');
    };

    /*
    * DD_PushUpContent Function
    * content       the content to push
    * contentTitle  the title for the box
    * */
    DD_PushUpContent = function (content,contentTitle) {

        activeID = false;

        DD_Push(content,contentTitle);
    };

    function DD_Push(content, contentTitle) {

        var dd_pub = $('#dd_pub'),
            dd_pub_title = $('#dd_pub_title'),
            dd_pub_content = $('#dd_pub_content'),
            dd_pub_overlay = $('#dd_pub_overlay');

        // Set Content
        dd_pub_title.html(contentTitle);
        dd_pub_content.html(content);

        // Show PushUp Box
        dd_pub_overlay.show();

        // Calc Height
        var dd_pub_height = dd_pub_title.height() + dd_pub_content.height() + (config.padding * 4);

        // Adjust CSS
        dd_pub.css({"width":config.width,"height":"auto","margin":"-" + dd_pub_height/2 + "px 0 0 -" + config.width/2 + "px"});
        dd_pub.css({"margin":"-" + dd_pub.height()/2 + "px 0 0 -" + config.width/2 + "px"});
    }

    // Title
    var pubTitle = '';
    if(config.title){
        pubTitle = '<div id="dd_pub_title" style="padding: ' + config.padding + 'px"></div>'
    }
    // ClosingX
    var ClosingX = '';
    if(config.closingX){
        ClosingX = '<button id="dd_pub_close">' + config.closingXHTML + '</button>'
    }
    // Append box bevor closing body tag
    $('body').append('<div id="dd_pub_overlay">' +
            '<div id="dd_pub">' +
                ClosingX +
                pubTitle +
                '<div id="dd_pub_content" style="padding: ' + config.padding + 'px"></div>' +
            '</div>' +
        '</div>');

    // DDPushUpClose
    var DDPushUpClose = function() {
        $('#dd_pub_overlay').hide();

        var dd_pub_content = $('#dd_pub_content');

        if(activeID){
            $('#' + activeID).html(dd_pub_content.html());
            activeID = false;
        }

        dd_pub_content.html('')
    };

    // Closing events
    $('#dd_pub_close').on('click', function () {
        DDPushUpClose();
    });
    $(document).mouseup(function(e)
    {
        var ddpuboxcontainer = $("#dd_pub");

        // If the target of the click isn't the container nor a descendant of the container
        // https://stackoverflow.com/questions/1403615/use-jquery-to-hide-a-div-when-the-user-clicks-outside-of-it
        if (!ddpuboxcontainer.is(e.target)
            && ddpuboxcontainer.has(e.target).length === 0)
        {
            DDPushUpClose();
        }
    });
    // Escape keycode `27`
    $(document).keyup(function(e) {
        if (e.keyCode == 27) {
            DDPushUpClose();
        }
    });
};

(function($) {
    $(function()
    {
        DD_PushUpBox();
    });
})(jQuery);
