$(document).ready(function() { 
	
	/* If mobile browser, prevent click on parent nav item from redirecting to URL */
	if(is_touch_device()) {	

		$('#mainmenu li > ul').each(function (index, elem) {
			/* OR Option 2: Use this to keep the href on the <a> intact but prevent the default action */
			$(elem).prev('a').click(function(event) {
  				event.preventDefault();
			});
		});
	}
	
});

function is_touch_device() {
  return !!('ontouchstart' in window);
}