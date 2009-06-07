/* Copyright (c) 2009 Mark Gandolfo http://www.markgandolfo.com.au
* Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
* Copyright notice and license must remain intact for legal use
* tabbify
* Requires: jQuery 1.2.6+
* 					jCookie
*
* Original Code Copyright (c) 2009 ANDREAS LAGERKVIST
* Website: http://andreaslagerkvist.com/jquery/super-simple-tabs/
*
*/
jQuery.fn.tabify = function (options) {
	return this.each(function () {
		var ul = jQuery(this);
		var tabs_div = this.id;
	
		ul.find('a[href^=#]').each(function (i, element) {
			var link = jQuery(this);

			if(!jQuery.cookie(tabs_div)) {
				if(i) {
					jQuery(link.attr('href')).hide();
				} else {
					link.addClass('selected');
				}
			} else {
				if(jQuery(element).attr('href') == $.cookie(tabs_div)) {
					link.addClass('selected');
				}	else {
					jQuery(link.attr('href')).hide();
				}
			}
			
			link.click(function () {
				id = jQuery(this).attr('href');
				$.cookie(tabs_div, id);
	
				jQuery(ul.find('a.selected').removeClass('selected').attr('href')).hide();
				jQuery(link.addClass('selected').attr('href')).show();
				return false;
			});
		});
	});
};