### jQuery Tabbify Plugin

Tabbify extended [simpletabs](http://andreaslagerkvist.com/jquery/super-simple-tabs/), it added the memory of the last tab. So if a user refreshes the window, moves away from the page, etc. it'll remember the last chosen tab.

#### You'll need
[jQuery](http://www.jquery.com)
[Cookie](http://plugins.jquery.com/project/Cookie) by Klaus Hartl/klaus.hartl@stilbuero.de 

#### How to use

Obviously include the three libraries (jquery, cookie, tabify) then you can use it as so. 
Please name your overall id something different if you have more than one tabbed region per sites, as the div id will be the name of the cookie set to remember your last clicked tab

    <script>
        $(document).ready(function(){
            $('#product_tabs').tabbify();
        });
    </script>

    <div id="product_tabs">
        <ul>
            <li><a href="#foo"><span>One</span></a></li>
            <li><a href="#bar"><span>Two</span></a></li>
            <li><a href="#wah"><span>Three</span></a></li>
    	</ul>
    	<div id="foo">
    	  First tab is active by default, its also known as the foo tab
    	</div>
    	<div id="bar">
    		This is the bar tab
    	</div>
    	<div id="wah">
    		This is the wah tab
    	</div>
    </div>
    </pre>


#### Credits
Credit must go out to [ANDREAS LAGERKVIST](http://andreaslagerkvist.com/jquery/super-simple-tabs/)
I've forked the original code. 

and the creators of jquery.. FTW

And i guess i'll give myself a little bit of credit, after spending nearly a full day messing around with tab plugins, none did what i wanted, so i modified one!
open source rocks.
