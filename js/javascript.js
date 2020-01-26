$(document).ready(function(){
	document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    StatusBar.backgroundColorByHexString("#ffffff");
	}

		$(".loads").click(function(){

				$("#loader2").fadeIn(1000);

		});

		$(".si").click(function(){

			$("#result").fadeOut(100);

			$("#fee").fadeOut(100);

			$("#msg").fadeOut(100);

			$("#eve").fadeOut(100);

			$("#att").fadeOut(100);

			$("#sfa").fadeOut(100);

			$("#studentinfo").fadeIn(1000);
			$(".bal").click();

			

			

		});

		$(".res").click(function(){	

			$("#studentinfo").fadeOut(100);

			$("#fee").fadeOut(100);

			$("#msg").fadeOut(100);

			$("#eve").fadeOut(100);

			$("#att").fadeOut(100);

			$("#sfa").fadeOut(100);

			$("#result").fadeIn(1000);



			

		});

		$(".fee").click(function(){

		$("#studentinfo").fadeOut(100);

			$("#result").fadeOut(100);

			$("#msg").fadeOut(100);

			$('#eve').fadeOut(100);

			$('#att').fadeOut(100);

			$("#sfa").fadeOut(100);

			$("#fee").fadeIn(1000);



			

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