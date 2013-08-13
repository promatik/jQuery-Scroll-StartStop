/**
 * Scroll Start Stop for jQuery by Toni Almeida, based in the work of James Padolsey
 * ---
 * @author Toni Almeida (http://promatik.no.sapo.pt)
 * @version 1.0
 * @updated 13-Ago-13
 * @forked James Padolsey (https://github.com/padolsey)
 * ---
 * @info https://github.com/promatik/jQuery-Scroll-StartStop
 */

(function(){
	var special = jQuery.event.special,
		uid1 = 'D' + (+new Date()),
		uid2 = 'D' + (+new Date() + 1),
		mouseDown = false,
		latency = 300;
		
	special.scrollstart = {
		setup: function() {
			var timer,
				clearTimer = function(evt) { timer = null; },
				handler =  function(evt) {
					if (timer) clearTimeout(timer);
					else jQuery.event.simulate('scrollstart', this, arguments);
					
					timer = setTimeout((mouseDown ? handler : clearTimer), latency);
				};
			
			jQuery(this).on('scroll', handler).data(uid1, handler);
		},
		teardown: function(){
			jQuery(this).off('scroll mousedown mouseup', jQuery(this).data(uid1) );
		}
	};
	
	special.scrollstop = {
		setup: function() {
			var timer,
				clearTimer = function(evt) { timer = null; },
				handler = function(evt) {
					if (timer) clearTimeout(timer);
					timer = setTimeout( (mouseDown ? handler : function(){ clearTimer(); jQuery.event.simulate('scrollstop', this, arguments); }), latency);
				};
			
			jQuery(this).on('scroll', handler).data(uid2, handler);
		},
		teardown: function() {
			jQuery(this).off('scroll', jQuery(this).data(uid2) );
		}
	};
	
	jQuery(this).on('mousedown', function(evt) { mouseDown = true; }).on('mouseup', function(evt) { mouseDown = false; });
	
})();
