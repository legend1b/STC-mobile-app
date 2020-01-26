document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    StatusBar.backgroundColorByHexString("#0F1720");
	}
 var db = openDatabase('mytasks', '1.0', 'My Tasks', 5*1024*1024);
	
	function init() {
		db.transaction(function (tx){
			tx.executeSql('create table if not exists papado(id integer primary key autoincrement, name text)');
		});
	}
	
	function displayAll() {
		db.transaction(function (tx){
			tx.executeSql('select * from papado', [],function(tx, results){
				var n = results.rows.length;
					if( n == 0){

						document.getElementById("enterpassword").style.display = "block";
	//var p = "<input type='password' maxlength=1 id='1' onkeyup='moveOnMax(this,'a')' /> <input type='password' maxlength=1 id='a' onkeyup='moveOnMax(this,'b')' /> <input type='password' maxlength=1 id='b' onkeyup='moveOnMax(this,'c')' /> <input type='password' maxlength=1 id='c' /><input id=save value='ENTER' type='button' onclick='log()'/>";
	 
					}
					else{
                 //window.location.reload();
                 document.getElementById("loginn").style.display = "block";
						
					}
				document.getElementById('result').innerHTML = p;
			});
		});
	}
	displayAll();
	moveOnMax1 = function (field, nextFieldID) {
		if (field.value.length == 1) {
			document.getElementById(nextFieldID).focus();
		}
	}
	moveOnMax = function (field, nextFieldID) {
		if (field.value.length == 1) {
			document.getElementById(nextFieldID).focus();
		}
	}
	function clearpin() {
		var nameaa = document.getElementById('1').value = '';
	var namea = document.getElementById('a').value= '';
	var nameb = document.getElementById('b').value= '';
	var namec = document.getElementById('c').value= '';
	var named = document.getElementById('d').value= '';
	var namee = document.getElementById('e').value= '';
	var namef = document.getElementById('f').value= '';
	var nameg = document.getElementById('g').value= '';
	var name2 = document.getElementById('2').value= '';
	var nameh = document.getElementById('h').value= '';
	var namei = document.getElementById('i').value= '';
	var namej = document.getElementById('j').value= '';
	}
function add() {
	db.transaction(function (tx){
	var nameaa = document.getElementById('1').value;
	var namea = document.getElementById('a').value;
	var nameb = document.getElementById('b').value;
	var namec = document.getElementById('c').value;
	var named = document.getElementById('d').value;
	var namee = document.getElementById('e').value;
	var namef = document.getElementById('f').value;
	var nameg = document.getElementById('g').value;
	name2 = nameaa + namea + nameb + namec;
	//alert(name2);
	if((nameaa != "") && (namea != "") && (nameb != "") &&(namec != "") &&(named != "") && (namee != "") &&(namef != "") &&(nameg != "")){
		if((nameaa == named) && (namea == namee) && (nameb == namef) && (namec == nameg) ){
			tx.executeSql('insert into papado(name) values(?)', [name2], displayAll());
			document.getElementById("enterpassword").style.display = "none";
			//window.location.reload();
		}
		else {
			$(".alerts").text('Pins do not match.');
        		$(".pchange").show();
				   setTimeout(function(){
				$(".pchange").hide();
			}, 4000);
			var nameaa = document.getElementById('1').value = '';
	var namea = document.getElementById('a').value= '';
	var nameb = document.getElementById('b').value= '';
	var namec = document.getElementById('c').value= '';
	var named = document.getElementById('d').value= '';
	var namee = document.getElementById('e').value= '';
	var namef = document.getElementById('f').value= '';
	var nameg = document.getElementById('g').value= '';
	var name2 = document.getElementById('2').value= '';
	var nameh = document.getElementById('h').value= '';
	var namei = document.getElementById('i').value= '';
	var namej = document.getElementById('j').value= '';
	$("#1").focus();
		}
			
		}
		else{
			$(".alerts").text('Empty field(s).');
        		$(".pchange").show();
				   setTimeout(function(){
				$(".pchange").hide();
			}, 4000);
			var nameaa = document.getElementById('1').value = '';
			var namea = document.getElementById('a').value= '';
			var nameb = document.getElementById('b').value= '';
			var namec = document.getElementById('c').value= '';
			var named = document.getElementById('d').value= '';
			var namee = document.getElementById('e').value= '';
			var namef = document.getElementById('f').value= '';
			var nameg = document.getElementById('g').value= '';
			var name2 = document.getElementById('2').value= '';
			var nameh = document.getElementById('h').value= '';
			var namei = document.getElementById('i').value= '';
			var namej = document.getElementById('j').value= '';
			$("#1").focus();
		}
		
	});
// 	setTimeout(function(){
// if(!window.location.hash) {
//        window.location = window.location + '#loaded2';
//        window.location.reload();
//      }
// }, 500);
}

function change() {
	db.transaction(function (tx){
	var nameaa = document.getElementById('1').value;
	var namea = document.getElementById('a').value;
	var nameb = document.getElementById('b').value;
	var namec = document.getElementById('c').value;
	var named = document.getElementById('d').value;
	var namee = document.getElementById('e').value;
	var namef = document.getElementById('f').value;
	var nameg = document.getElementById('g').value;
	name2 = nameaa + namea + nameb + namec;
	//alert(name2);
	if((nameaa != "") && (namea != "") && (nameb != "") &&(namec != "") &&(named != "") && (namee != "") &&(namef != "") &&(nameg != "")){
		if((nameaa == named) && (namea == namee) && (nameb == namef) && (namec == nameg) ){
			tx.executeSql('update papado set name=? where id=?', [name2, 1], displayAll());
			window.location.replace("store.html");
		}
		else {

			$(".alerts").text('Pins do not match.');
        		$(".pchange").show();
				   setTimeout(function(){
				$(".pchange").hide();
			}, 4000);
	var nameaa = document.getElementById('1').value = '';
	var namea = document.getElementById('a').value= '';
	var nameb = document.getElementById('b').value= '';
	var namec = document.getElementById('c').value= '';
	var named = document.getElementById('d').value= '';
	var namee = document.getElementById('e').value= '';
	var namef = document.getElementById('f').value= '';
	var nameg = document.getElementById('g').value= '';		
	$("#1").focus();	
		}
			
		}
		else{
	
			$(".alerts").text('Empty field(s).');
        		$(".pchange").show();
				   setTimeout(function(){
				$(".pchange").hide();
			}, 4000);
	var nameaa = document.getElementById('1').value = '';
	var namea = document.getElementById('a').value= '';
	var nameb = document.getElementById('b').value= '';
	var namec = document.getElementById('c').value= '';
	var named = document.getElementById('d').value= '';
	var namee = document.getElementById('e').value= '';
	var namef = document.getElementById('f').value= '';
	var nameg = document.getElementById('g').value= '';
	$("#1").focus();		
		}
	});
}
function log() {
	var name2 = document.getElementById('2').value;
	var nameh = document.getElementById('h').value;
	var namei = document.getElementById('i').value;
	var namej = document.getElementById('j').value;
	var pin = name2 + nameh + namei + namej;
	db.transaction(function (tx){
		if( name2 != "" && nameh != "" && namei != "" && namej != ""){
			tx.executeSql('select * from papado', [],function(tx, results){
				var n = results.rows.length;
				for(var i = 0; i <  n; i++){
					var work = results.rows.item(i);
						s = work.name;
						if(pin == s){
					window.location = window.location;
                    window.location.replace("walletpick.html");
						}
						else{
							$(".alerts").text('Incorrect Pin');
        		$(".pchange").show();
				   setTimeout(function(){
				$(".pchange").hide();
			}, 4000); 
				  $("#inp1").val('');
				  var nameaa = document.getElementById('1').value = '';
				  var namea = document.getElementById('a').value= '';
				  var nameb = document.getElementById('b').value= '';
				  var namec = document.getElementById('c').value= '';
				  var named = document.getElementById('d').value= '';
				  var namee = document.getElementById('e').value= '';
				  var namef = document.getElementById('f').value= '';
				  var nameg = document.getElementById('g').value= '';
				  var name2 = document.getElementById('2').value= '';
				  var nameh = document.getElementById('h').value= '';
				  var namei = document.getElementById('i').value= '';
				  var namej = document.getElementById('j').value= '';
				  $("#2").focus();					  

						}
				}
			});}
			else{
			$(".alerts").text('Empty Field(s)');
        		$(".pchange").show();
				   setTimeout(function(){
				$(".pchange").hide();
			}, 4000);  
			var nameaa = document.getElementById('1').value = '';
			var namea = document.getElementById('a').value= '';
			var nameb = document.getElementById('b').value= '';
			var namec = document.getElementById('c').value= '';
			var named = document.getElementById('d').value= '';
			var namee = document.getElementById('e').value= '';
			var namef = document.getElementById('f').value= '';
			var nameg = document.getElementById('g').value= '';
			var name2 = document.getElementById('2').value= '';
			var nameh = document.getElementById('h').value= '';
			var namei = document.getElementById('i').value= '';
			var namej = document.getElementById('j').value= '';	
			$("#2").focus();

			}
	});
}
