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


var lbl_User = Titanium.UI.createLabel(
{
    text:'Username:',
    height:30,
    width:320,
    color:'#222',
    font:{fontSize:16},
    top: 40
});

var txt_User = Titanium.UI.createTextField(
{
  width:320,
	color: "#222",
	paddingLeft: 5,
	border: 1,
	borderColor: "gray",
	borderRadius: 3,
	font:{fontSize:16},
	height: 60,
	top: 70
});
var lbl_Pass = Titanium.UI.createLabel(
{
    width:320,
    text:'Password:',
    height:30,
    width:"98%",
    color:'#222',
    font:{fontSize:16},
    top: 140
});
var txt_Pass = Titanium.UI.createTextField(
{
  width:320,
	color: "#222",
	paddingLeft: 5,
	border: 1,
	borderColor: "gray",
	borderRadius: 3,
	passwordMask: true,
	font:{fontSize:16},
	height: 60,
	top: 170
});
var btn_Login = Titanium.UI.createButton(
{
	width: 320,
	color: "#555",
	font:{fontSize: 22, fontWeight: "bold"},
	height: 70,
	top: 250,
  left:0,
	title: "Log In"
});

var btn_Register = Titanium.UI.createButton(
{
	width: 320,
	color: "#555",
	font:{fontSize: 22, fontWeight: "bold"},
	height: 70,
	top: 330,
  left:0,
	title: "Register"
});


function getUserInfo(e)
{
	var user = txt_User.value;  
	var pass = txt_Pass.value;
  if ((user=="")||(pass==""))
    alert("Missing Username/Password");
  else
    loginUser(user,pass);  
}

btn_Login.addEventListener('click',getUserInfo);
btn_Register.addEventListener('click',function(){ 
        var registerWindow= Titanium.UI.createWindow({
        title:'Register',
        backgroundColor:'#fff',
        url:'RegisterWindow.js'
      });
      registerWindow.open();  
});
/*
view.add(lbl_User);
view.add(txt_User);
view.add(lbl_Pass);
view.add(txt_Pass);
view.add(btn_Login);
*/
scrollView.add(lbl_User);
scrollView.add(txt_User);
scrollView.add(lbl_Pass);
scrollView.add(txt_Pass);
scrollView.add(btn_Login);
scrollView.add(btn_Register);
scrollView.add(lbl_Master);
//scrollView.add(view);	
curWindow.add(scrollView);

