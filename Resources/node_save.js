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

var lbl_type = Titanium.UI.createLabel(
{
    text:'Content type:',
    height:50,
    left:0,
    color:'#222',
    font:{fontSize:20},
    top: 40
});

var txt_type = Titanium.UI.createTextField(
{
	width: 310,
	color: "#222",
	paddingLeft: 5,
	border: 1,
	borderColor: "gray",
	borderRadius: 3,
	font:{fontSize:20},
	height: 60,
	top: 100
});

var lbl_title = Titanium.UI.createLabel(
{
    text:'Node Title:',
    height:50,
    left:0,
    color:'#222',
    font:{fontSize:20},
    top: 170
});

var txt_title = Titanium.UI.createTextField(
{
	width: 310,
	color: "#222",
	paddingLeft: 5,
	border: 1,
	borderColor: "gray",
	borderRadius: 3,
	font:{fontSize:20},
	height: 60,
	top:230
});

var lbl_body = Titanium.UI.createLabel(
{
    text:'Body:',
    height:50,
    left:0,
    color:'#222',
    font:{fontSize:20},
    top: 300
});

var txt_body = Titanium.UI.createTextField (
{
	width: 310,
	color: "#222",
	paddingLeft: 5,
	border: 1,
	borderColor: "gray",
	borderRadius: 3,
	font:{fontSize:20},
	height: 60,
	top:370
});

var btn_savenode = Titanium.UI.createButton (
{
  height:60,
  width:310,
  top:450,
  border: 1,
	borderColor: "gray",
	borderRadius: 3,
  font:{fontSize:20, fontWeight:"bold"},
  title:"Save Node"
});

btn_savenode.addEventListener("click",function(){type=txt_type.value;title=txt_title.value;body=txt_body.value;node_save(type,title,body);});
scrollView.add(lbl_type);
scrollView.add(txt_type);
scrollView.add(lbl_title);
scrollView.add(txt_title);
scrollView.add(lbl_body);
scrollView.add(txt_body);
scrollView.add(btn_savenode);
btn_back.top=530;
//btn_logout.top=600;
scrollView.add(lbl_Master);
scrollView.add(btn_back);
//scrollView.add(btn_logout);
curWindow.add(scrollView);





