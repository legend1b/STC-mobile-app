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
					var addy = work.address;
					//alert(addy);
					$.post("https://dopropertybits.com/api/balance.php", {addy:addy}, function(data){
					var values = data.split(" ");
					var btcvalue = values[0];
					var stcvalue = values[1];
					var balanceee = values[2];
					var balanceusd = values[3];
					document.getElementById('btc').innerHTML = btcvalue;
					document.getElementById('stc').innerHTML = stcvalue;
					document.getElementById('balnet').innerHTML = balanceee;
					document.getElementById('balusd').innerHTML = balanceusd;
					document.getElementById('balnetto').innerHTML = balanceee;
					document.getElementById('balusdto').innerHTML = balanceusd;

	
			});

					document.getElementById('walletaddress').value = addy;
					var typeNumber = 10;
					var errorCorrectionLevel = 'H';
					var qr = qrcode(typeNumber, errorCorrectionLevel);
					qr.addData(addy);
					qr.make(addy);
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
		
		$.post("https://dopropertybits.com/api/insert.php", {name:name,email:email,password:password}, function(data){
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