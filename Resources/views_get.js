Titanium.include('logout.js');
Titanium.include('master_label.js');
Titanium.include('function.js');
var curWindow=Titanium.UI.currentWindow;
var lbl_viewname = Titanium.UI.createLabel(
{
    text:'View Name:',
    height:50,
    left:0,
    color:'#222',
    font:{fontSize:20},
    top: 40
});

var txt_viewname = Titanium.UI.createTextField(
{
	width: "320",
	color: "#222",
	paddingLeft: 5,
	border: 1,
	borderColor: "gray",
	borderRadius: 3,
	font:{fontSize:20},
	height: 60,
	top: 100
});

var btn_getview = Titanium.UI.createButton (
{
  height:60,
  width:320,
  top:170,
  border: 1,
	borderColor: "gray",
	borderRadius: 3,
  font:{fontSize:20, fontWeight:"bold"},
  title:"Get View Data"
});

btn_getview.addEventListener('click',function(){viewname=txt_viewname.value;view_get(viewname);});
curWindow.add(lbl_viewname);
curWindow.add(txt_viewname);
curWindow.add(btn_getview);
curWindow.add(lbl_Master);
curWindow.add(btn_back);
//curWindow.add(btn_logout);
