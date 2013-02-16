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

var lbl_count = Titanium.UI.createLabel(
{
    text:'Count:',
    height:50,
    left:0,
    color:'#222',
    font:{fontSize:20},
    top: 170
});

var txt_count = Titanium.UI.createTextField(
{
	width: "320",
	color: "#222",
	paddingLeft: 5,
	border: 1,
	borderColor: "gray",
	borderRadius: 3,
	font:{fontSize:20},
	height: 60,
	top: 230
});

var lbl_start = Titanium.UI.createLabel(
{
    text:'Start:',
    height:50,
    left:0,
    color:'#222',
    font:{fontSize:20},
    top: 300
});

var txt_start = Titanium.UI.createTextField(
{
	width: "320",
	color: "#222",
	paddingLeft: 5,
	border: 1,
	borderColor: "gray",
	borderRadius: 3,
	font:{fontSize:20},
	height: 60,
	top: 360
});
var btn_getnodecomments = Titanium.UI.createButton (
{
  height:60,
  width:320,
  top:430,
  border: 1,
	borderColor: "gray",
	borderRadius: 3,
  font:{fontSize:20, fontWeight:"bold"},
  title:"Get Node Comments"
});

btn_getnodecomments.addEventListener('click',function(){nid=txt_nid.value;count=txt_count.value;start=txt_count.value;nodecomment_get(nid,count,start);});

scrollView.add(lbl_nid);
scrollView.add(txt_nid);
scrollView.add(btn_getnodecomments);
scrollView.add(lbl_start);
scrollView.add(txt_start);
scrollView.add(lbl_count);
scrollView.add(txt_count);
btn_back.top=500;
//btn_logout.top=570;
scrollView.add(lbl_Master);
scrollView.add(btn_back);
//scrollView.add(btn_logout);
curWindow.add(scrollView);


