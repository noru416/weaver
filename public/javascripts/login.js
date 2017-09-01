$(document).ready(function() {
	setting();
});
$(document).on('click', '.tabs > a', function() {
	if($(this).hasClass('active')){
      return false;
    } else {
    	$('a.active').removeClass('active');
    	$(this).addClass('active');
    	renderForm();
    }
});
function setting() {
	$(document).keyup(function() {
		// Get
		var username = $('input[name=username]');
		var password = $('input[name=password]');
		var password2 = $('input[name=password2]');
		var firstname = $('input[name=firstname]');
		var lastname = $('input[name=lastname]');
		var email = $('input[name=email]');
		
		// Set
		$('input[name=username]').attr('value', username.val());
		$('input[name=password]').attr('value', password.val());
		$('input[name=password2]').attr('value', password2.val());
		$('input[name=firstname]').attr('value', firstname.val());
		$('input[name=lastname]').attr('value', lastname.val());
		$('input[name=email]').attr('value', email.val());
		// Get length
		var length1 = getTextLength(username.attr('value'));
		var length2 = getTextLength(password.attr('value'));
		var length3 = getTextLength(password2.attr('value'));
		var length4 = getTextLength(firstname.attr('value'));
		var length5 = getTextLength(lastname.attr('value'));
		var length6 = getTextLength(email.attr('value'));

		if (length1 > 0 && length2 > 0) {
			$('.inactive').removeAttr('disabled');
			$('.inactive').removeClass('inactive');	
		} 

		if (length2 > 0 && length3 > 0 && length4 > 0 && length5 > 0 && length6 > 0) {
			$('.inactive').removeAttr('disabled');
			$('.inactive').removeClass('inactive');
		}
	});
}
function getTextLength(str) {
    var len = 0;
    if (str == null) {
    	return false;	
    } else {
    	for (var i = 0; i < str.length; i++) {
	        if (escape(str.charAt(i)).length == 6) {
	            len++;
	        }
	        len++;
    	}
    	return len;
    }
}