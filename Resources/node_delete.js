Titanium.include('logout.js');
Titanium.include('master_label.js');
Titanium.include('function.js');
var curWindow=Titanium.UI.currentWindow;

var lbl_nid = Titanium.UI.createLabel(
{
    text:'Node id:',
    height:50,
    left:0,
    color:'#222',
    font:{fontSize:20},
    top: 40
});

var txt_nid = Titanium.UI.createTextField(
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

var btn_deletenode = Titanium.UI.createButton (
{
  height:60,
  width:320,
  top:170,
  border: 1,
	borderColor: "gray",
	borderRadius: 3,
  font:{fontSize:20, fontWeight:"bold"},
  title:"Delete Node"
});

btn_deletenode.addEventListener('click',function(){nid=txt_nid.value;node_delete(nid);});
curWindow.add(lbl_nid);
curWindow.add(txt_nid);
curWindow.add(btn_deletenode);
curWindow.add(lbl_Master);
curWindow.add(btn_back);
//curWindow.add(btn_logout);




