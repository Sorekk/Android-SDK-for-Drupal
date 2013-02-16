 // this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#FFF');
Titanium.include('master_label.js');

//create our login window
var loginWindow = Titanium.UI.createWindow({
  className:'login',
	title: 'Login',
	backgroundColor: '#fff',
	url: "LoginWindow.js"
});

loginWindow.open();


