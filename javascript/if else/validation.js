var f_event = document.getElementById("firstname");
f_event.onblur = function fstname() 
{
	var f_name = document.getElementById("firstname").value;
	var f_name_input = document.getElementById("firstname");
	var f_icon = document.getElementById("f_warning");
	if (f_name== "") 
	{
		f_name_input.style.border = "1px solid red";
		f_icon.style.display = "block";
	}
	f_name_input.onclick = function()
	{
		var hint = document.getElementById("hint");
		hint.style.display = "block";
		f_name_input.style.border = "1px solid #ccc";
		f_icon.style.display = "none";
	}

	f_name_input.onblur = function()
	{
		hint.style.display = "none";
		fstname();
	}

}

var f_ent = document.getElementById("surname");
f_ent.onblur = function f_ame() 
{
	var f_surname = document.getElementById("surname").value;
	var f_surname_input = document.getElementById("surname");
	var f_icon = document.getElementById("f_warn");
	if (f_surname== "") 
	{
		f_surname_input.style.border = "1px solid red";
		f_icon.style.display = "block";
	}

	f_surname_input.onclick = function()
	{
		f_surname_input.style.border = "1px solid #ccc";
		f_icon.style.display = "none";
	}
}

var f_evnt = document.getElementById("email");
f_evnt.onblur = function name() 
{
	var email = document.getElementById("email").value;
	var email_input = document.getElementById("email");
	var f_icon = document.getElementById("warn");
	if (email== "") 
	{
		email_input.style.border = "1px solid red";
		f_icon.style.display = "block";
	}

	email_input.onclick = function()
	{
		email_input.style.border = "1px solid #ccc";
		f_icon.style.display = "none";
		var eml = document.getElementById("eml");
		eml.style.display = "block";
	}

	email_input.onblur = function()
	{
		eml.style.display = "none";
		name();
	}


}

// start password validation//

var pass_input = document.getElementById("password");
pass_input.onclick = function()
{
	var pass_text = document.getElementById("pass");
	var pass_hint_box = document.getElementById("password_hint");

	if (pass_input.value != "")
	{
		pass_hint_box.style.display = "none";
	}
	else
	{
		pass_hint_box.style.display = "block";
	}

	pass_hint_box.onclick = function()
	{
		var new_pass = pass_text.innerHTML;
		pass_input.value = new_pass;
		pass_hint_box.style.display = "none";
	}
}

pass_input.oninput = function()
{
	var pass_hint_box = document.getElementById("password_hint");
	pass_hint_box.style.display = "none";
}

var checkbox = document.getElementById("check");
checkbox.onclick = function()
{
	var pass = document.getElementById("password");
	var text = document.getElementById("s_pass");
	if(checkbox.checked)
	{
		pass.type = "text";
		text.innerHTML = "Hide Password";
	}

	else
	{
		pass.type = "password";
		text.innerHTML = "Show Password";
	}
}

//submit coding start//

var form = document.getElementById("frm");
form.onsubmit = function()
{
	var fname = document.getElementById("firstname");
	var fsurname = document.getElementById("surname");
	var email = document.getElementById("email");
	var passinput = document.getElementById("password");

	if (fname.value == "" || fsurname.value == "" || email.value == "" || passinput.value == "")
	{
		fname.style.border = "1px solid red";
		fsurname.style.border = "1px solid red";
		email.style.border = "1px solid red";
		passinput.style.border = "1px solid red";
		return false;
	}
	else
	{
		window.alert("login successful");
	}
}