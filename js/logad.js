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
				for(var i = 0; i <  n; i++){
					var work = results.rows.item(i);
					//alert(work.address);

					document.getElementById('walletaddress').innerHTML = work.address;
					var typeNumber = 4;
					var errorCorrectionLevel = 'H';
					var qr = qrcode(typeNumber, errorCorrectionLevel);
					qr.addData(work.address);
					qr.make(work.address);
					document.getElementById('placeHolder').innerHTML = qr.createImgTag();
				}
				
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