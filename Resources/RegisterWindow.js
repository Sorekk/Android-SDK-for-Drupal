Titanium.include('function.js');
Titanium.include('master_label.js');

var curWindow = Titanium.UI.currentWindow;

var scrollView = Titanium.UI.createScrollView(
{
    contentWidth:'auto',
    contentHeight:'auto',
    top:0,
    showVerticalScrollIndicator:true,
    showHorizontalScrollIndicator:true
});

var lbl_Email = Titanium.UI.createLabel(
{
    text:'Email:',
    height:30,
    left:0,
    color:'#222',
    font:{fontSize:16},
    top: 40
});

var txt_Email = Titanium.UI.createTextField(
{
	width: "320",
	color: "#222",
	paddingLeft: 5,
	border: 1,
	borderColor: "gray",
	borderRadius: 3,
	font:{fontSize:16},
	height: 40,
	top: 70
});
	
var lbl_User = Titanium.UI.createLabel(
{
    width:"320",
    text:'Username:',
    height:30,
    color:'#222',
    font:{fontSize:16},
    top: 120
});

var txt_User = Titanium.UI.createTextField(
{
	width:"320",
	color: "#222",
	paddingLeft: 5,
	border: 1,
	borderColor: "gray",
	borderRadius: 3,
	font:{fontSize:16},
	height: 40,
	top: 150
});
	
var lbl_Pass1 = Titanium.UI.createLabel(
{
    width:"320",
    text:'Password:',
    height:30,
    color:'#222',
    font:{fontSize:16},
    top: 200
});

var txt_Pass1 = Titanium.UI.createTextField(
{
  width:"320",
	color: "#222",
	paddingLeft: 5,
	border: 1,
	borderColor: "gray",
	borderRadius: 3,
	font:{fontSize:16},
	height: 40,
	top: 230,
  passwordMask: true
});

var lbl_Pass2 = Titanium.UI.createLabel(
{
    width:"320",
    text:'Repeat Password:',
    height:30,
    color:'#222',
    font:{fontSize:16},
    top: 280
});

var txt_Pass2 = Titanium.UI.createTextField(
{
  width:"320",
	color: "#222",
	paddingLeft: 5,
	border: 1,
	borderColor: "gray",
	borderRadius: 3,
	font:{fontSize:16},
	height: 40,
	top: 310,
  passwordMask: true
});

var btn_Register = Titanium.UI.createButton(
{
  width:"320",
	color: "#555",
	font:{fontSize: 22, fontWeight: "bold"},
	height: 50,
	top: 370,
	title: "Register"
});

var btn_login = Titanium.UI.createButton(
{
  width:"320",
	color: "#555",
	font:{fontSize: 22, fontWeight: "bold"},
	height: 50,
	top: 430,
	title: "Back to Login"
});


function getUserInfo(e)
{
	var email = txt_Email.value;
	var user = txt_User.value;
  var pass = txt_Pass1.value;
  var pass2= txt_Pass2.value;
  if (pass==pass2)
    registerUser(user,pass,email);
  else
    alert("Passwords don't match");
}

btn_Register.addEventListener('click',getUserInfo);
btn_login.addEventListener('click',function() {
        var loginWindow = Titanium.UI.createWindow({
        className:'login',
	      title: 'Login',
	      backgroundColor: '#fff',
	      url: "LoginWindow.js"
      });
      loginWindow.open();    
});
scrollView.add(lbl_Email);
scrollView.add(txt_Email);
scrollView.add(lbl_User);
scrollView.add(txt_User);
scrollView.add(lbl_Pass1);
scrollView.add(txt_Pass1);
scrollView.add(lbl_Pass2);
scrollView.add(txt_Pass2);
scrollView.add(btn_Register);
scrollView.add(lbl_Master);
scrollView.add(btn_login);
curWindow.add(scrollView);

