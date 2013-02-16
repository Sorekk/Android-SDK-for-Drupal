Titanium.include('logout.js');
Titanium.include('master_label.js');
Titanium.include('function.js');
var curWindow=Titanium.UI.currentWindow;

var lbl_Nid = Titanium.UI.createLabel(
{
    text:'Node id:',
    height:50,
    left:0,
    color:'#222',
    font:{fontSize:20},
    top: 40
});

var txt_Nid = Titanium.UI.createTextField(
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

var btn_getnode = Titanium.UI.createButton (
{
  height:60,
  width:320,
  top:170,
  font:{fontSize:20, fontWeight:"bold"},
  title:"Get Node Data"
});

btn_getnode.addEventListener('click',function(){nid=txt_Nid.value;node_get(nid);});
curWindow.add(lbl_Nid);
curWindow.add(txt_Nid);
curWindow.add(btn_getnode);
curWindow.add(btn_back);
//curWindow.add(btn_logout);
curWindow.add(lbl_Master);
