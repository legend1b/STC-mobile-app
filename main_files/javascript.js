$(document).ready(function(){
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    StatusBar.backgroundColorByHexString("#0695E9");
	}
		$(".loads").click(function(){

				$("#loader2").fadeIn(1000);

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
