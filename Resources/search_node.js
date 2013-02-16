Titanium.include('logout.js');
Titanium.include('master_label.js');
Titanium.include('function.js');
var curWindow=Titanium.UI.currentWindow;
var lbl_Keys = Titanium.UI.createLabel(
{
    text:'Keywords:',
    height:50,
    left:0,
    color:'#222',
    font:{fontSize:20},
    top: 40
});

var txt_Keys = Titanium.UI.createTextField(
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
  title:"Search Node"
});

btn_search.addEventListener('click',function(){keyword=txt_Keys.value;search_node(keyword);});
curWindow.add(lbl_Keys);
curWindow.add(txt_Keys);
curWindow.add(btn_search);
curWindow.add(btn_back);
//curWindow.add(btn_logout);
curWindow.add(lbl_Master);
