Titanium.include('function.js');
Titanium.include('master_label.js');

var curwindow=Titanium.UI.currentWindow;

var scrollView = Titanium.UI.createScrollView(
{
    contentWidth:'auto',
    contentHeight:'auto',
    top:0,
    showVerticalScrollIndicator:true,
    showHorizontalScrollIndicator:true
});

var data=[
{title:'Node.Get',link:'node_get.js',color:'#000'},
{title:'Node.Save',link:'node_save.js',color:'#000'},
{title:'Node.Delete',link:'node_delete.js',color:'#000'},
{title:'Views.Get',link:'views_get.js',color:'#000'},
{title:'Comment.load',link:'comment_load.js',color:'#000'},
{title:'Comment.count',link:'comment_count.js',color:'#000'},
{title:'Comment.loadNodeComments',link:'comment_node.js',color:'#000'},
{title:'Comment.save',link:'comment_save.js',color:'#000'},
{title:'User.get',link:'user_get.js',color:'#000'},
{title:'User.delete',link:'user_delete.js',color:'#000'},
{title:'Search.Users',link:'search_user.js',color:'#000'},
{title:'Logout',link:'LoginWindow.js',color:'#000'}
];

var table = Titanium.UI.createTableView({data:data,height:'410',top:40});
    
table.addEventListener('click',function(e) {       
    if (e.index==11) {
      logout();
      var node_getwindow=Titanium.UI.createWindow({
        title:data[e.index].title,
        backgroundColor:"#fff",
        url:data[e.index].link
      });
      node_getwindow.open();
    }
    else {
      var node_getwindow=Titanium.UI.createWindow({
        title:data[e.index].title,
        backgroundColor:"#fff",
        url:data[e.index].link
      });
      node_getwindow.open();
    }
});

scrollView.add(table);
scrollView.add(lbl_Master);

curwindow.add(scrollView);





