alert("HELLO THIS IS APP.JS");
var pics=["1.jpg",
          "2.jpg",
		  "3.jpeg",
		  "4.jpg",
		  "5.jpeg",
		  ];
var btn=document.querySelector("button");
var img=document.querySelector("img");
var counter=0;
btn.addEventListener("click",function(){
	if(counter==5)
	{
		counter=0;
	}
	img.src=pics[counter]
	counter=counter+1;
});