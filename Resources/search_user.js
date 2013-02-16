Titanium.include('logout.js');
Titanium.include('master_label.js');
Titanium.include('function.js');
var curWindow=Titanium.UI.currentWindow;
var User;
var lbl_User = Titanium.UI.createLabel(
{
    text:'Username:',
    height:50,
    left:0,
    color:'#222',
    font:{fontSize:20},
    top: 40
});

var txt_User = Titanium.UI.createTextField(
{
	width: "320",
	color: "#222",
	paddingLeft: 5,
	border: 1,
	borderColor: "gray",
	borderRadius: 3,
	font:{fontSize:20},
	height: 60,
	top: 90
});

var btn_search = Titanium.UI.createButton (
{
  height:60,
  width:320,
  top:170,
  font:{fontSize:20, fontWeight:"bold"},
  title:"Search User"
});

btn_search.addEventListener('click',function(){User=txt_User.value;search_user(User);});
curWindow.add(lbl_User);
curWindow.add(txt_User);
curWindow.add(btn_search);
curWindow.add(btn_back);
//curWindow.add(btn_logout);
curWindow.add(lbl_Master);
