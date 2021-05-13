//wk1-2 countdowntimer should run 10.........1 then blastoff
function startCountdown() {
    var count = 10;

    document.getElementById('countdownTimer').innerHTML = count;
    count = count - 1;

    setTimeout(function () {
        // after 1 sec, will run code in here
        document.getElementById('countdownTimer').innerHTML = count;
        count = count - 1;
    }, 1000)

    setTimeout(function(){
        document.getElementById('countdownTimer').innerHTML = count;
        count = count - 1;
 }, 2000);

 setTimeout(function(){
    document.getElementById('countdownTimer').innerHTML = count;
    count = count - 1;
 },3000);

 setTimeout(function(){
    document.getElementById('countdownTimer').innerHTML = count;
    count = count - 1;
 },4000);

 setTimeout(function(){
    document.getElementById('countdownTimer').innerHTML = count;
    count = count - 1;
 },5000);

 setTimeout(function(){
    document.getElementById('countdownTimer').innerHTML = count;
    count = count - 1;
 },6000);

 setTimeout(function(){
    document.getElementById('countdownTimer').innerHTML = count;
    count = count - 1;
 },7000);

 setTimeout(function(){
    document.getElementById('countdownTimer').innerHTML = count;
    count = count - 1;
 },8000);

 setTimeout(function(){
    document.getElementById('countdownTimer').innerHTML = count;
    count = count - 1;
 },9000);

 setTimeout(function(){
    document.getElementById('countdownTimer').innerHTML = 'Blast off!!!';
     },10000);
}