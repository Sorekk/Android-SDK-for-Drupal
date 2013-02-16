Titanium.include('logout.js');
Titanium.include('master_label.js');
Titanium.include('function.js');
var curWindow=Titanium.UI.currentWindow;

var view_data=views_get('pages');
alert(view_data);

var table = Titanium.UI.createTableView({data:data});

curWindow.add(lbl_viewname);
curWindow.add(txt_viewname);
curWindow.add(btn_getview);
curWindow.add(lbl_Master);
curWindow.add(btn_back);
//curWindow.add(btn_logout);
