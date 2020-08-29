/* departments arrow*/
var arrow = document.getElementById("a");
var ull = document.getElementById("ul1");
var depart = document.getElementById("departments");
arrow.onclick=function(){
ull.classList.toggle("displlay");
depart.classList.toggle("borderr");

}
/* first slider */

var x = document.getElementById("fas fa-angle-right");
var left = document.getElementById("fas fa-angle-left");
var y = document.querySelectorAll(".categore");
var z = document.getElementById("good");
  var arr = Array.from(y);
  var num = arr.length-1;
  var m = 0;
     function rightclick() {
      for (var i=0 ; i <= num ; i++ ){
      arr[i].classList.remove("disactive");
     }

         if(arr[m].classList.contains("active")){
          if( m != num) {
           arr[m].classList.remove("active");
           arr[m].classList.add("disactive");
           good.appendChild(arr[m]);
           arr[m+1].classList.add("active");
        }
        else{
          arr[m].classList.remove("active");
          arr[m].classList.add("disactive");
          good.appendChild(arr[m]);
          arr[0].classList.add("active");
        }
     m++;
     if(m == 5){
       m=0;
     }
}
}
x.onclick= rightclick;
setInterval(rightclick, 2000);
/* mixitup*/
var containerEl = document.querySelector('.mainProducts');
 mixitup (containerEl);

/* li active*/
$(".mainProducts ul li").click(function(){
$(this).addClass("active").siblings().removeClass("active");

});
function newproducts() {
var first = document.querySelectorAll('.first');
for(var i=0 ; i<first.length;i++){
if(first[i].classList.contains("animate__fadeOutLeft"))
{
  first[i].classList.remove("animate__fadeOutLeft");
}
else{
  first[i].classList.add("animate__fadeOutLeft");
}
}
}
setInterval( newproducts , 2500);

 var icon = document.querySelector('#fas');
 var small=document.querySelector('.small');
 var icon2=document.querySelector('#fa');
 var sub=document.querySelector('.subsmall');
 console.log(icon);
 console.log(small);
 icon.onclick = function(){
   small.classList.toggle("left");
 };
 icon2.onclick = function(){
   sub.classList.toggle("display");
 };
