# easy-tab
An simple library to easily create tab navigation's

HTML structure :
- a container with unique id.
- all class'es are necessary.
div id="unique-container"
    ul class="tab-box"
		li class="tab" /li
		li class="tab" /li>
		li class="tab" /li>
	/ul
	section class="content-box"
        div class="content" /div
        div class="content" /div
        div class="content" /div
    /section
/div

Call fanction :
easytab('unique-container');
- do not include #
- for each new tab navigation, you need new unique container id and new Call function


Include in project :
- script.min.js
- style.min.css


Other :
if you are happy with this, just smile and live a comment
