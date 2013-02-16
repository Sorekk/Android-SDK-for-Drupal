var loader = Titanium.Network.createHTTPClient();
var url = "http://10.0.2.2/service/services/json-rpc";
function connect()
{
  //loader.setTimeout(10);
	loader.open("POST",url);
 
  loader.send({"method":"system.connect", "params": [], "id": 1});

	loader.onload = function()
	{
    var result=Titanium.JSON.parse(this.responseText);
    sessid=result['result'].sessid;
  }
//    alert(result[0]['sessid']);
  return sessid;
}

function registerUser(user,pass,email){
  var register_obj=[{"name":user,"pass":pass,"mail":email}];  
	//calling the HTTPClient.open() function
	loader.open("POST",url);
	
	//overriding the abstract 'onload' function with our own
	loader.onload = function(){
    result=Titanium.JSON.parse(this.responseText);
    alert(result);
    uid=result['result'];
    if(uid>0) {
      logout();  
      var loginWindow = Titanium.UI.createWindow({
        className:'login',
	      title: 'Login',
	      backgroundColor: '#fff',
	      url: "LoginWindow.js"
      });
      loginWindow.open();    
      alert("Registered Successfully!!Login to Continue...");
    }
  };
  loader.send({"method":"user.save", "params": JSON.stringify(register_obj), "id": 2});
}

function loginUser(user,pass)
{
  //alert(sessid);
  var user_id=0;
	var loader = Titanium.Network.createHTTPClient();
	var url = "http://10.0.2.2/service/services/json-rpc";
  var result;
  //loader.setTimeout(10);
	loader.open("POST",url);
 
  loader.send({"method":"user.login", "params": JSON.stringify({'username':user,'password':pass}), "id": 2});
   /*The HTTPClient callbacks operate somewhat differently from other Titanium callbacks, 
     in accordance with the XMLHttpRequest specification.
	*/
	loader.onload = function()
	{
    result=Titanium.JSON.parse(this.responseText);
    if (result['result']=="Wrong username or password.") 
      alert(result['result']);
    else {
      user_id=result['result']['user'].uid;
      if(user_id>0) {
        var menuWindow= Titanium.UI.createWindow({
          title:'Menu',
          backgroundColor:'#fff',
          url:'menu.js'
        });
        menuWindow.open();
      }
      else
        alert("hel");
    }
  }
//    return result;
	
}

function handleResponse(result) {
  alert(result);
//  return result;
}
function logout()
{
  //loader.setTimeout(10);
	loader.open("POST",url);
 
  loader.send({"method":"user.logout", "params": [], "id": 3});

	loader.onload = function()
	{
    var result=Titanium.JSON.parse(this.responseText);      
	}
}

function commentcount_get(nid) {
  var loader = Titanium.Network.createHTTPClient();
	var url = "http://10.0.2.2/service/services/json-rpc";
  //loader.setTimeout(10);
	loader.open("POST",url);
  loader.send({"method":"comment.countAll", "params": JSON.stringify({'nid':nid}), "id": 4});

	loader.onload = function()
	{
    alert(this.responseText);
    result=Titanium.JSON.parse(this.responseText);
   // alert(result);
	} 
}

function comment_load(cid) {
	var loader = Titanium.Network.createHTTPClient();
	var url = "http://10.0.2.2/service/services/json-rpc";
  //loader.setTimeout(10);
	loader.open("POST",url);
  loader.send({"method":"comment.load", "params": JSON.stringify({'cid':cid}), "id": 4});

	loader.onload = function()
	{
    alert(this.responseText);
    result=Titanium.JSON.parse(this.responseText);
   // alert(result);
	}
}

function nodecomment_get(nid,count,start) {
  var loader = Titanium.Network.createHTTPClient();
	var url = "http://10.0.2.2/service/services/json-rpc";
  //loader.setTimeout(10);
	loader.open("POST",url);
  loader.send({"method":"comment.loadNodeComments", "params": JSON.stringify({'nid':nid,'count':count,'start':start}), "id": 4});

	loader.onload = function()
	{
    alert(this.responseText);
    result=Titanium.JSON.parse(this.responseText);
   // alert(result);
	} 
}

function comment_save(nid,comment) {
  var commentobj=[{"nid": nid,"comment": comment}];
  var loader = Titanium.Network.createHTTPClient();
	var url = "http://10.0.2.2/service/services/json-rpc";
  //loader.setTimeout(10);
	loader.open("POST",url);
  loader.send({"method":"comment.save", "params": JSON.stringify(commentobj), "id": 4});

	loader.onload = function()
	{
    alert(this.responseText);
    result=Titanium.JSON.parse(this.responseText);
   // alert(result);
	} 
}

function node_delete(nid) {
	var loader = Titanium.Network.createHTTPClient();
	var url = "http://10.0.2.2/service/services/json-rpc";
  //loader.setTimeout(10);
	loader.open("POST",url);
  loader.send({"method":"node.delete", "params": JSON.stringify({'nid':nid}), "id": 4});

	loader.onload = function()
	{
    alert(this.responseText);
    result=Titanium.JSON.parse(this.responseText);
   // alert(result);
	}
}

function node_get(nid){
	var loader = Titanium.Network.createHTTPClient();
	var url = "http://10.0.2.2/service/services/json-rpc";
  //loader.setTimeout(10);
	loader.open("POST",url);
  var nid=txt_Nid.value;
  loader.send({"method":"node.get", "params": JSON.stringify({'nid':nid}), "id": 3});

	loader.onload = function()
	{
    result=Titanium.JSON.parse(this.responseText);
    alert(result);
	}
}

function node_save(type,title,body) {
  var nodeobj=[{"type": type,"title": title,"body": body}];
  var loader = Titanium.Network.createHTTPClient();
	var url = "http://10.0.2.2/service/services/json-rpc";
  //loader.setTimeout(10);
	loader.open("POST",url);
  loader.send({"method":"node.save", "params": JSON.stringify(nodeobj), "id": 4});

	loader.onload = function()
	{
    alert(this.responseText);
    result=Titanium.JSON.parse(this.responseText);
   // alert(result);
	} 
}

function view_get(view_name) {
	var loader = Titanium.Network.createHTTPClient();
	var url = "http://10.0.2.2/service/services/json-rpc";
  //loader.setTimeout(10);
	loader.open("POST",url);
  loader.send({"method":"views.get", "params": JSON.stringify({'view_name':view_name}), "id": 4});

	loader.onload = function()
	{
    alert(this.responseText);
    result=Titanium.JSON.parse(this.responseText);
   // alert(result);
	}
}

function user_get(uid) {
	var loader = Titanium.Network.createHTTPClient();
	var url = "http://10.0.2.2/service/services/json-rpc";
  //loader.setTimeout(10);
	loader.open("POST",url);
  loader.send({"method":"user.get", "params": JSON.stringify({'uid':uid}), "id": 4});

	loader.onload = function()
	{
    alert(this.responseText);
    result=Titanium.JSON.parse(this.responseText);
   // alert(result);
	}
}

function user_delete(uid) {
	var loader = Titanium.Network.createHTTPClient();
	var url = "http://10.0.2.2/service/services/json-rpc";
  //loader.setTimeout(10);
	loader.open("POST",url);
  loader.send({"method":"user.delete", "params": JSON.stringify({'uid':uid}), "id": 4});

	loader.onload = function()
	{
    alert(this.responseText);
    result=Titanium.JSON.parse(this.responseText);
   // alert(result);
	}
}

function search_node(keyword) {
	var loader = Titanium.Network.createHTTPClient();
	var url = "http://10.0.2.2/service/services/json-rpc";
  //loader.setTimeout(10);
	loader.open("POST",url);
  loader.send({"method":"search.nodes", "params": JSON.stringify({'search_keys':keyword}), "id": 4});

	loader.onload = function()
	{
    alert(this.responseText);
    result=Titanium.JSON.parse(this.responseText);
   // alert(result);
	}
}

function search_user(user) {
	var loader = Titanium.Network.createHTTPClient();
	var url = "http://10.0.2.2/service/services/json-rpc";
  //loader.setTimeout(10);
	loader.open("POST",url);
  loader.send({"method":"search.users", "params": JSON.stringify({'search_keys':user}), "id": 4});

	loader.onload = function()
	{
    alert(this.responseText);
    result=Titanium.JSON.parse(this.responseText);
   // alert(result);
	}
}



/*
function node_view(nid) {
	var loader = Titanium.Network.createHTTPClient();
	var url = "http://10.0.2.2/service/services/json-rpc";
  //loader.setTimeout(10);
	loader.open("POST",url);
  loader.send({"method":"node.view", "params": JSON.stringify({'nid':nid}), "id": 4});

	loader.onload = function()
	{
    alert(this.responseText);
    result=Titanium.JSON.parse(this.responseText);
   // alert(result);
	}
}
*/
