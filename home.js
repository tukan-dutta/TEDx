window.onscroll = function () {
    myFunction()
};

function myFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("myHeader").className = "pindown";
    } else {
        document.getElementById("myHeader").className = "";
    }
}

setTimeout(function(){
document.getElementById('mainpage').style.display='block';
		
	}, 5000);

var coming = document.getElementById('coming');
var speak=document.getElementById('speak');
speak.addEventListener("click",function(){
	coming.className = "";
	setTimeout(function(){
		coming.className = "hide";
	}, 2000)
});