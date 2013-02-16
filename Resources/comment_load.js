Titanium.include('logout.js');
Titanium.include('master_label.js');
Titanium.include('function.js');

var curWindow=Titanium.UI.currentWindow;

var lbl_cid = Titanium.UI.createLabel(
{
    text:'Comment id:',
    height:50,
    left:0,
    color:'#222',
    font:{fontSize:20},
    top: 40
});

var txt_cid = Titanium.UI.createTextField(
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

var btn_getcomment = Titanium.UI.createButton (
{
  height:60,
  width:320,
  top:170,
  border: 1,
	borderColor: "gray",
	borderRadius: 3,
  font:{fontSize:20, fontWeight:"bold"},
  title:"Get Comment"
});

btn_getcomment.addEventListener('click',function(){cid=txt_cid.value;comment_load(cid);});
curWindow.add(lbl_cid);
curWindow.add(txt_cid);
curWindow.add(btn_getcomment);
curWindow.add(lbl_Master);
curWindow.add(btn_back);
//curWindow.add(btn_logout);




