document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    StatusBar.backgroundColorByHexString("#0F1720");
	}
var db = openDatabase('mytasks', '1.0', 'My Tasks', 5*1024*1024);
	
	function init() {
		db.transaction(function (tx){
			tx.executeSql('create table if not exists userlog(id integer primary key autoincrement, name text, email text, password text, address text)');
		});
	}
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
function createwallet() {
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var password = document.getElementById('password').value;
	
        if(name=="" || email == ""|| password == ""){
        	$(".alerts").text('Field(s) are empty');
        		$(".pchange").show();
				    setTimeout(function(){
				$(".pchange").hide();
				}, 4000); 
        }
        else{
		
		$.post("insert.php", {name:name,email:email,password:password}, function(data){
					if(data == 'great'){
						var address = data;
					db.transaction(function (tx){	
tx.executeSql('insert into userlog(name, email, password, address) values(?, ?, ?, ?)', [name, email, password, address], displayAll());
					});
				location.replace("main.html");
	}
	
});
    $(".alerts").text('Added');
        		$(".pchange").show();
				    setTimeout(function(){
				$(".pchange").hide();
				}, 4000); 
			$("#cent").fadeOut("slow");   
        }
	
}
function add2() {
	db.transaction(function (tx){
	var passd = document.getElementById('passd').value;
	var cpass = document.getElementById('cpass').value;
        if(passd=="" && cpass == ""){
        	$(".alerts").text('Fields are empty');
        		$(".pchange").show();
				    setTimeout(function(){
				$(".pchange").hide();
				}, 4000); 
				    //$("#cent2").fadeOut();
        }
        else{
        	if(passd==cpass){
				tx.executeSql('update papado set name=? where id=?', [passd, 1], displayAll());
				        $("#passd").val('');
				    $("#cpass").val('');
				    $(".alerts").text('Password Changed');
				    $(".pchange").show();
				    setTimeout(function(){
				$(".pchange").hide();
				}, 4000); 
				    $("#cent2").fadeOut();
        	}
        	else{
        		$(".alerts").text('Passwords do not match');
        		$(".pchange").show();
				    setTimeout(function(){
				$(".pchange").hide();
				}, 4000); 
				   // $("#cent2").fadeOut();
        	}
        }
	});
}