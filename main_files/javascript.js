$(document).ready(function(){
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    StatusBar.backgroundColorByHexString("#045191");
	}
		$(".loads").click(function(){

				$("#loader2").fadeIn(1000);

		});

$(".sendstc").click(function(){
	var addyto = $("#addyto").val();
	var amount = $("#amount").val();
	if (addyto == "" || amount == "") {
		$(".alerts").text('Field(s) are empty');
        		$(".pchange").show();
				    setTimeout(function(){
				$(".pchange").hide();
				}, 4000);
	}
	else{
	$(".sendstc").attr("disabled", true);
	$(".sendstc").css('background-color', 'grey');
	var db = openDatabase('mytasks', '1.0', 'My Tasks', 5*1024*1024);
	db.transaction(function (tx){
			tx.executeSql('select * from userlog', [],function(tx, results){
				var n = results.rows.length;
				for(var i = 0; i <  n; i++){
					var work = results.rows.item(i);
					var addy = work.address;
					$.post("https://dopropertybits.com/api/trans.php", {addy:addy,addyto:addyto,amount:amount}, function(data){
						if(data == 'sent'){
					$(".alerts").text('Stc sent');
        		$(".pchange").show();
				    setTimeout(function(){
				$(".pchange").hide();
				}, 4000);

				    $(".sendstc").attr("disabled", false);
					$(".sendstc").css('background-color', '#00AFEF');

				    $("#addyto").val() = '';
				    $("#amount").val() = '';
						}
			});
				}
				
			});
		});
	}
});

$(".fillin").click(function(){
	 cordova.plugins.barcodeScanner.scan(
      function (result) {
          // alert("We got a barcode\n" +
          //       "Result: " + result.text + "\n" +
          //       "Format: " + result.format + "\n" +
          //       "Cancelled: " + result.cancelled);
	 document.getElementById('raddy').value =  result.text;
      }, 
      function (error) {
          alert("Scanning failed: " + error);
      }
   );
});
		$(".si").click(function(){

			$("#result").fadeOut(100);

			$("#fee").fadeOut(100);

			$("#msg").fadeOut(100);

			$("#eve").fadeOut(100);

			$("#att").fadeOut(100);

			$("#sfa").fadeOut(100);

			$(".balanced").click();
			$("#studentinfo").fadeIn(1000);

			

			

			

		});

		$(".res").click(function(){	

			$("#studentinfo").fadeOut(100);

			$("#fee").fadeOut(100);

			$("#msg").fadeOut(100);

			$("#eve").fadeOut(100);

			$("#att").fadeOut(100);

			$("#sfa").fadeOut(100);

			$(".sended").click();
			$("#studentinfo").fadeIn(1000);



			

		});

		$(".fee").click(function(){

		$("#studentinfo").fadeOut(100);

			$("#result").fadeOut(100);

			$("#msg").fadeOut(100);

			$('#eve').fadeOut(100);

			$('#att').fadeOut(100);

			$("#sfa").fadeOut(100);

			$(".recieved").click();
			$("#studentinfo").fadeIn(1000);


			

		});

		$(".msg").click(function(){

			$("#studentinfo").fadeOut(100);

			$("#result").fadeOut(100);

			$("#fee").fadeOut(100);

			$("#eve").fadeOut(100);

			$("#att").fadeOut(100);

			$("#sfa").fadeOut(100);

			$("#msg").fadeIn(1000);

			

		});

		$(".eve").click(function(){

			$("#studentinfo").fadeOut(100);

			$("#result").fadeOut(100);

			$("#fee").fadeOut(100);

			$("#msg").fadeOut(100);

			$("#att").fadeOut(100);

			$("#sfa").fadeOut(100);

			$("#eve").fadeIn(1000);

			

		});

		$(".att").click(function(){

			$("#studentinfo").fadeOut(100);

			$("#result").fadeOut(100);

			$("#fee").fadeOut(100);

			$("#msg").fadeOut(100);

			$("#eve").fadeOut(100);

			$("#sfa").fadeOut(100);

			$("#att").fadeIn(1000);

		});

		$(".sfa").click(function(){

			$("#studentinfo").fadeOut(100);

			$("#result").fadeOut(100);

			$("#fee").fadeOut(100);

			$("#msg").fadeOut(100);

			$("#eve").fadeOut(100);

			$("#att").fadeOut(100);

			$("#sfa").fadeIn(1000);

		});

});
