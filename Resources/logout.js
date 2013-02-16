Titanium.include('function.js');


var btn_back=Titanium.UI.createButton(
{
  height:60,
  width:320,
  top:370,
  font:{fontSize:20, fontWeight:"bold"},
  title:"Back To Main Menu"
});

btn_back.addEventListener('click',function(){
      var menuWindow= Titanium.UI.createWindow({
        title:'Menu',
        backgroundColor:'#fff',
        url:'menu.js'
      });
      menuWindow.open();
});  



