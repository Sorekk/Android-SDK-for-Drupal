Titanium.include('logout.js');
Titanium.include('master_label.js');
Titanium.include('function.js');
var curWindow=Titanium.UI.currentWindow;

var scrollView = Titanium.UI.createScrollView(
{
    contentWidth:'auto',
    contentHeight:'auto',
    top:0,
    showVerticalScrollIndicator:true,
    showHorizontalScrollIndicator:true
});

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

var lbl_comment = Titanium.UI.createLabel(
{
    text:'Comment:',
    height:50,
    left:0,
    color:'#222',
    font:{fontSize:20},
    top: 180
});

var txt_comment = Titanium.UI.createTextField(
{
	width: "320",
	color: "#222",
	paddingLeft: 5,
	border: 1,
	borderColor: "gray",
	borderRadius: 3,
	font:{fontSize:20},
	height: 60,
	top: 250
});


btn_savecomment = Titanium.UI.createButton (
{
  height:60,
  width:320,
  top:320,
  border: 1,
	borderColor: "gray",
	borderRadius: 3,
  font:{fontSize:20, fontWeight:"bold"},
  title:"Save Comment"
});

btn_savecomment.addEventListener('click',function(){nid=txt_nid.value;comment=txt_comment.value;comment_save(nid,comment);});

scrollView.add(lbl_nid);
scrollView.add(txt_nid);
scrollView.add(btn_savecomment);
scrollView.add(lbl_comment);
scrollView.add(txt_comment);
btn_back.top=400;
//btn_logout.top=480;
scrollView.add(lbl_Master);
scrollView.add(btn_back);
//scrollView.add(btn_logout);
curWindow.add(scrollView);


