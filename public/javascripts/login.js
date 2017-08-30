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

function renderForm() {
	var newForm = $('a.active').text();
	var oldForm = $('form');

	oldForm.animate({
		opacity: 0
	}, 500, function() {
		oldForm.remove();
		switchForm();
	});
}

function switchForm() {
	var newForm = $('a.active').text();

	switch (newForm) {
		case 'Sign In':
			$('.tabs').after(`
				<form>
					<div class="autofil-wrapper">
						<div class="form-username-field">
							<label>Username</label>
							<input type="text" placeholder="Email" name="username" value="">
						</div>
						<div class="form-password-field">
							<label>Password</label>
							<input type="password" placeholder="Password" name="password" value="">
							<a class="reset-password" href="#">Forgot?</a>
						</div>
						<button class="inactive" disabled>Sign In</button>
					</div>
				</form>
				`)
			break;
		case 'Create Account':
			$('.tabs').after(`
				<form>
					<div class="form-username-field">
						<label>First Name</label>
						<input type="text" placeholder="First Name" name="firstname" value="">
					</div>
					<div class="form-username-field">
						<label>Last Name</label>
						<input type="text" placeholder="Last Name" name="lastname" value="">
					</div>
					<div class="form-username-field">
						<label>Email</label>
						<input type="text" placeholder="Email" name="email" value="">
					</div>
					<div class="form-password-field">
						<label>Password</label>
						<input type="password" placeholder="Password" name="password" value="">
					</div>
					<div class="form-password-field">
						<label>Repeat password</label>
						<input type="password" placeholder="Confirm Password" name="password2" value="">
					</div>
					<button class="inactive" disabled="">Create Account</button>
				</form>
			`)
			break;	
	}
}