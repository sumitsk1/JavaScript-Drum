
document.addEventListener("keypress" , function(event){
	var ky=event.key;
	console.log(ky);
	buttonAnim(ky);
	play(ky);

});

for (var i =0; i<document.querySelectorAll(".drum").length;  i++) {

	document.querySelectorAll("button")[i].addEventListener("click",function (){
		var ky=this.innerText;
		console.log(ky);
		buttonAnim(ky);
		play(ky);

		

});

}


function play(ky){
	switch(ky){
			case "w":
			var audio1=new Audio("sounds/tom-1.mp3");
			audio1.play();
			console.log(ky);
			break;
			case "a":
			var audio2=new Audio("sounds/tom-2.mp3");
			audio2.play();
			console.log(ky);
			break;
			case "s":
			var audio3=new Audio("sounds/tom-3.mp3");
			audio3.play();
			console.log(ky);
			break;
			case "d":
			var audio4=new Audio("sounds/tom-4.mp3");
			audio4.play();
			console.log(ky);
			break;
			case "j":
			var audio5=new Audio("sounds/snare.mp3");
			audio5.play();
			console.log(ky);
			break;
			case "k":
			var audio6=new Audio("sounds/crash.mp3");
			audio6.play();
			console.log(ky);
			break;
			case "l":
			var audio7=new Audio("sounds/kick-bass.mp3");
			audio7.play();
			console.log(ky);
			break;
			default:

		}
}

function buttonAnim(currentky){
	document.querySelector("."+currentky+"").classList.add("white");
	
	setTimeout(function(){
		document.querySelector("."+currentky+"").classList.remove("white");
	},100);


}