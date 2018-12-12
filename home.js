


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


