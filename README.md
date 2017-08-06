# DD_PushUpBox
is a lightweight jQuery based div overlay box for displaying content like (html, CMS modules, etc...) over the web page, a PopUP called PushUpBox.


#### DD_PushUpBox provides two functions which can be used from everywhere

**DD_PushUpContent**<br>
This function is to push custom content to the PushUpBox it expects two parameter

| Parameter      |                       |
|:-------------- |:----------------------|
| content        | the content to push   |
| contentTitle   | the title for the box |

**DD_PushUpID**<br>
This function is to move the content from an sepcific id to the PushUpBox. It expects two parameter

| Parameter      |                       |
|:-------------- |:----------------------|
| contentID      | the id to push        |
| contentTitle   | the title for the box |

DD_PushUpID has a special handling. It moves the html of the content ID to the PushUpBox and after closing the Box, it moves back.

For this, we provide a css class to make the push id content invisible.

    .dd_pushupbox

(For example, to hide a login module, which should be placed to the pushUpBox like a login pop up. It's usefull when you use a CMS like Joomla, Wordpress etc... So you can place the login module or any other module to the bottom of your site, give them the .dd_pushupbox class to make it invisible and a custom id for the DD_PushUpID function, to trigger the login PopUp. Thats all, it has never been easier to switch any module, div container etc ... to a PopUp Box. Just push it up ;).

##### Other Features:
- Close PushUpBox by clicking outside the box or by press escape key.
- Some settings and CSS adjust functions (See Configuration at dd_pushupbox.js).
- Compatible with any jQuery Version.

##### Integration to your site::

    <head>
        <!-- ... -->

        <script type="text/javascript" src="dd_pushupbox.js"></script>
        <link rel="stylesheet" href="dd_pushupbox.css" type="text/css">
    </head>

##### Example of use from inline events

    <body>
        <!-- ... -->

        <!-- Usage with DD_PushUpContent() function -->
        <button onclick="DD_PushUpContent('<p>your pushUpBox html...</p>', 'Box Title')">Show pushUpBox</button>

        <!-- Usage with DD_PushUpID() function -->
        <div class="dd_pushupbox" id="mypopupID1">
            <p>Your content to place at pushUpBox</p>
        </div>
        <button onclick="DD_PushUpID('mypopupID1','Box Title');">Show contact form</button>
    </body>

##### Examples of use from a script

    <script type="text/javascript">
        /* ... */

        DD_PushUpContent('<p>your pushUpBox html...</p>', 'Box Title');

        /* ... */

        DD_PushUpID('yourid', 'Box Title');
    </script>


### Configurating options for the script. dd_pushupbox.js

       var DD_PushUpBox = function () {

           // Configuration
           var config = {
                   width: 200,                  /* Width of the box */
                   padding: 10,                 /* Padding of the PushUpBox title and content */
                   title: true,                 /* Display title */
                   closingX: true,              /* Display closingX */
                   closingXHTML: '&#10006;'     /* The content of the closing <button>&#10006;</button> */
               },