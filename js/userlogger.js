document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    StatusBar.backgroundColorByHexString("#045191");
	}
var db = openDatabase('mytasks', '1.0', 'My Tasks', 5*1024*1024);
	

	function displayAll() {
		db.transaction(function (tx){
			tx.executeSql('select * from userlog', [],function(tx, results){
				var n = results.rows.length;
				
				if(n > 0){
					location.replace("main.html");
				}
				var s = '<div class="row">';
				for(var i = 0; i <  n; i++){
					var work = results.rows.item(i);
					s +='<center>';
						s +='<div class="col-xs-6"><b><p style="word-wrap: break-word;border-left:3px solid #16212E;color:#16212E; font-size:13px;z-index:1;text-align:center;">' + work.name + '</p></b></div>';
						s +='<div class="col-xs-6"><b><p style="word-wrap: break-word;color:#16212E; font-size:13px;z-index:1;text-align:center;">' + work.description + '</p></b></div><br />';
                    
						s +='<a style="color:#F9A828; text-decoration:none; font-size:11px;" href="#" onclick="del(' + work.id + ')">Delete</a> || <a style="color:#F9A828; text-decoration:none; font-size:11px;" href="#" onclick="edit(' + work.id + ')">Edit</a> || <input style ="width:1px; height:1px;opacity:0;" id="ok'+ work.id +'" value="' + work.description + '" type="text"/> <a style="color:#F9A828; text-decoration:none; font-size:11px;" href="#" onclick="copy('+work.id+')">Copy password</a><br />';
					s +='</center>';
				}
				s += '</div>';
				document.getElementById('result').innerHTML = s;
			});
		});
	}
	displayAll();

	$(".createwalletgo").click(function() {
		location.replace("createwallet.html");
	});

	$(".enterwalletgo").click(function() {
		location.replace("enterwallet.html");
	});