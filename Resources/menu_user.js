Titanium.include('function.js');
var curwindow=Titanium.UI.currentWindow;

var data=[
{title:'Pages',link:'node_page.js',color:'#000'}
];

var table = Titanium.UI.createTableView({data:data});



table.addEventListener('click',function(e) {
    var node_getwindow=Titanium.UI.createWindow({
      title:data[e.index].title,
      backgroundColor:"#fff",
      url:data[e.index].link
    });
    node_getwindow.open();
    if (e.index==8) {
      logout();
    }
});

curwindow.add(table);



