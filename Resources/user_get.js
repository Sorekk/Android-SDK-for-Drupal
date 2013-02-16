Titanium.include('logout.js');
Titanium.include('master_label.js');
Titanium.include('function.js');
var curWindow=Titanium.UI.currentWindow;

var lbl_Uid = Titanium.UI.createLabel(
{
    text:'User id:',
    height:50,
    left:0,
    color:'#222',
    font:{fontSize:20},
    top: 40
});

var txt_Uid = Titanium.UI.createTextField(
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

var btn_getuser = Titanium.UI.createButton (
{
  height:60,
  width:320,
  top:170,
  font:{fontSize:20, fontWeight:"bold"},
  title:"Get User Data"
});

btn_getuser.addEventListener('click',function(){uid=txt_Uid.value;user_get(uid);});
curWindow.add(lbl_Uid);
curWindow.add(txt_Uid);
curWindow.add(btn_getuser);
curWindow.add(btn_back);
//curWindow.add(btn_logout);
curWindow.add(lbl_Master);
