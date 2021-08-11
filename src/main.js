var content=document.getElementById("topic");

const api={
  url: ' https://newsapi.org/v2/top-headlines?country=gb&apiKey=0ca8c14043a4415885bb5de441ddfcf3',
}


fetch(api.url)
.then((output) => output.json())
.then(function(show)
{



    console.log(show);
console.log(show.articles[0].urlToImage);
document.getElementsByClassName("imghai")[0].src=(show.articles[0].urlToImage);
document.getElementsByClassName("h3hai")[0].innerHTML=(show.articles[0].title);

document.getElementById("btn1").addEventListener("click",function()
{
  console.log("done");
  swal(show.articles[0].content+"\n \n"+"For More Information: "+"\n"+show.articles[0].url);
});

document.getElementsByClassName("imghai")[1].src=(show.articles[1].urlToImage);
document.getElementsByClassName("h3hai")[1].innerHTML=(show.articles[1].title);

document.getElementById("btn2").addEventListener("click",function()
{
  console.log("done");
  swal(show.articles[1].content+"\n \n"+"For More Information: "+"\n"+show.articles[1].url);
});

document.getElementsByClassName("imghai")[2].src=(show.articles[2].urlToImage);
document.getElementsByClassName("h3hai")[2].innerHTML=(show.articles[2].title);

document.getElementById("btn3").addEventListener("click",function()
{
  console.log("done");
  swal(show.articles[2].content+"\n \n"+"For More Information: "+"\n"+show.articles[2].url);
});

document.getElementsByClassName("imghai")[3].src=(show.articles[3].urlToImage);
document.getElementsByClassName("h3hai")[3].innerHTML=(show.articles[3].title);

document.getElementById("btn4").addEventListener("click",function()
{
  console.log("done");
  swal(show.articles[3].content+"\n \n"+"For More Information: "+"\n"+show.articles[3].url);
});

document.getElementsByClassName("imghai")[4].src=(show.articles[4].urlToImage);
document.getElementsByClassName("h3hai")[4].innerHTML=(show.articles[4].title);


document.getElementById("btn5").addEventListener("click",function()
{
  console.log("done");
  swal(show.articles[5].content+"\n \n"+"For More Information: "+"\n"+show.articles[5].url);
});

document.getElementsByClassName("imghai")[5].src=(show.articles[5].urlToImage);
document.getElementsByClassName("h3hai")[5].innerHTML=(show.articles[5].title);

document.getElementById("btn6").addEventListener("click",function()
{
  console.log("done");
  swal(show.articles[0].content+"\n \n"+"For More Information: "+"\n"+show.articles[0].url);
});



//new cloudflare

document.getElementById("bitcoin").addEventListener("click",function()
{

const bitcoin={
  url:'https://newsapi.org/v2/everything?q=bitcoin&apiKey=0ca8c14043a4415885bb5de441ddfcf3',
}
fetch(bitcoin.url)
.then((output)=> output.json())
.then(function(bit){
content.innerHTML=("Trending BitCoin News");
console.log(bit);
document.getElementsByClassName("imghai")[0].src=(bit.articles[0].urlToImage);
document.getElementsByClassName("h3hai")[0].innerHTML=(bit.articles[0].title);


document.getElementsByClassName("imghai")[1].src=(bit.articles[1].urlToImage);
document.getElementsByClassName("h3hai")[1].innerHTML=(bit.articles[1].title);


document.getElementsByClassName("imghai")[2].src=(bit.articles[2].urlToImage);
document.getElementsByClassName("h3hai")[2].innerHTML=(bit.articles[2].title);

document.getElementsByClassName("imghai")[3].src=(bit.articles[3].urlToImage);
document.getElementsByClassName("h3hai")[3].innerHTML=(bit.articles[3].title);

document.getElementsByClassName("imghai")[4].src=(bit.articles[4].urlToImage);
document.getElementsByClassName("h3hai")[4].innerHTML=(bit.articles[4].title);

document.getElementsByClassName("imghai")[5].src=(bit.articles[5].urlToImage);
document.getElementsByClassName("h3hai")[5].innerHTML=(bit.articles[5].title);


document.getElementById("btn1").addEventListener("click",function()
{
  console.log("done");
  swal(bit.articles[0].content+"\n \n"+"For More Information: "+"\n"+bit.articles[0].url);
});



document.getElementById("btn2").addEventListener("click",function()
{
  console.log("done");
  swal(bit.articles[1].content+"\n \n"+"For More Information: "+"\n"+bit.articles[1].url);
});


document.getElementById("btn3").addEventListener("click",function()
{
  console.log("done");
  swal(bit.articles[2].content+"\n \n"+"For More Information: "+"\n"+bit.articles[2].url);
});



document.getElementById("btn4").addEventListener("click",function()
{
  console.log("done");
  swal(bit.articles[3].content+"\n \n"+"For More Information: "+"\n"+bit.articles[3].url);
});



document.getElementById("btn5").addEventListener("click",function()
{
  console.log("done");
  swal(bit.articles[5].content+"\n \n"+"For More Information: "+"\n"+bit.articles[5].url);
});



document.getElementById("btn6").addEventListener("click",function()
{
  console.log("done");
  swal(bit.articles[0].content+"\n \n"+"For More Information: "+"\n"+bit.articles[0].url);
});


})
.catch(function error(error)
{
  console.log(error);
}
)


})

//
//Apple News


document.getElementById("apple").addEventListener("click",function()
{

const apple={
  url:' https://newsapi.org/v2/everything?q=apple&from=2021-08-09&to=2021-08-09&sortBy=popularity&apiKey=0ca8c14043a4415885bb5de441ddfcf3',
}
fetch(apple.url)
.then((appleout)=> appleout.json())
.then(function(appledisp){

document.getElementsByClassName("imghai")[0].src=(appledisp.articles[0].urlToImage);
document.getElementsByClassName("h3hai")[0].innerHTML=(appledisp.articles[0].title);


document.getElementsByClassName("imghai")[1].src=(appledisp.articles[1].urlToImage);
document.getElementsByClassName("h3hai")[1].innerHTML=(appledisp.articles[1].title);


document.getElementsByClassName("imghai")[2].src=(appledisp.articles[2].urlToImage);
document.getElementsByClassName("h3hai")[2].innerHTML=(appledisp.articles[2].title);

document.getElementsByClassName("imghai")[3].src=(appledisp.articles[3].urlToImage);
document.getElementsByClassName("h3hai")[3].innerHTML=(appledisp.articles[3].title);

document.getElementsByClassName("imghai")[4].src=(appledisp.articles[4].urlToImage);
document.getElementsByClassName("h3hai")[4].innerHTML=(appledisp.articles[4].title);

document.getElementsByClassName("imghai")[5].src=(appledisp.articles[5].urlToImage);
document.getElementsByClassName("h3hai")[5].innerHTML=(appledisp.articles[5].title);

document.getElementById("btn1").addEventListener("click",function()
{
  console.log("done");
  swal(appledisp.articles[0].content+"\n \n"+"For More Information: "+"\n"+appledisp.articles[0].url);
});



document.getElementById("btn2").addEventListener("click",function()
{
  console.log("done");
  swal(appledisp.articles[1].content+"\n \n"+"For More Information: "+"\n"+appledisp.articles[1].url);
});


document.getElementById("btn3").addEventListener("click",function()
{
  console.log("done");
  swal(appledisp.articles[2].content+"\n \n"+"For More Information: "+"\n"+appledisp.articles[2].url);
});



document.getElementById("btn4").addEventListener("click",function()
{
  console.log("done");
  swal(appledisp.articles[3].content+"\n \n"+"For More Information: "+"\n"+appledisp.articles[3].url);
});



document.getElementById("btn5").addEventListener("click",function()
{
  console.log("done");
  swal(appledisp.articles[5].content+"\n \n"+"For More Information: "+"\n"+appledisp.articles[5].url);
});



document.getElementById("btn6").addEventListener("click",function()
{
  console.log("done");
  swal(appledisp.articles[0].content+"\n \n"+"For More Information: "+"\n"+appledisp.articles[0].url);
});

})
.catch(function error(error)
{
  console.log(error);
}
)


})

//TechCrunch

document.getElementById("tech").addEventListener("click",function()
{

const tech={
  url: 'https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=0ca8c14043a4415885bb5de441ddfcf3',
}
fetch(tech.url)
.then((techout)=> techout.json())
.then(function(techshow){
console.log("JALWA");
console.log(techshow);
document.getElementsByClassName("imghai")[0].src=(techshow.articles[0].urlToImage);
document.getElementsByClassName("h3hai")[0].innerHTML=(techshow.articles[0].title);


document.getElementsByClassName("imghai")[1].src=(techshow.articles[1].urlToImage);
document.getElementsByClassName("h3hai")[1].innerHTML=(techshow.articles[1].title);


document.getElementsByClassName("imghai")[2].src=(techshow.articles[2].urlToImage);
document.getElementsByClassName("h3hai")[2].innerHTML=(techshow.articles[2].title);

document.getElementsByClassName("imghai")[3].src=(techshow.articles[3].urlToImage);
document.getElementsByClassName("h3hai")[3].innerHTML=(techshow.articles[3].title);

document.getElementsByClassName("imghai")[4].src=(techshow.articles[4].urlToImage);
document.getElementsByClassName("h3hai")[4].innerHTML=(techshow.articles[4].title);

document.getElementsByClassName("imghai")[5].src=(techshow.articles[5].urlToImage);
document.getElementsByClassName("h3hai")[5].innerHTML=(techshow.articles[5].title);


document.getElementById("btn1").addEventListener("click",function()
{
  console.log("done");
  swal(techshow.articles[0].content+"\n \n"+"For More Information: "+"\n"+techshow.articles[0].url);
});



document.getElementById("btn2").addEventListener("click",function()
{
  console.log("done");
  swal(techshow.articles[1].content+"\n \n"+"For More Information: "+"\n"+techshow.articles[1].url);
});


document.getElementById("btn3").addEventListener("click",function()
{
  console.log("done");
  swal(techshow.articles[2].content+"\n \n"+"For More Information: "+"\n"+techshow.articles[2].url);
});



document.getElementById("btn4").addEventListener("click",function()
{
  console.log("done");
  swal(techshow.articles[3].content+"\n \n"+"For More Information: "+"\n"+techshow.articles[3].url);
});



document.getElementById("btn5").addEventListener("click",function()
{
  console.log("done");
  swal(techshow.articles[5].content+"\n \n"+"For More Information: "+"\n"+techshow.articles[5].url);
});



document.getElementById("btn6").addEventListener("click",function()
{
  console.log("done");
  swal(techshow.articles[0].content+"\n \n"+"For More Information: "+"\n"+techshow.articles[0].url);
});


})
.catch(function error(error)
{
  console.log(error);
}
)


})
//end over here

})



.catch(function (error)
{
  console.log(error);

})

function myFunction() {
console.log("done");
}




function filter() {
var search=document.getElementById("search");
search=search.value;
const searchNews=
{
  url:'https://newsapi.org/v2/everything?q=',
  query: '&from=2021-08-10&sortBy=popularity&apiKey=0ca8c14043a4415885bb5de441ddfcf3',
}
fetch(searchNews.url+search+searchNews.query)
.then((filterNews) => filterNews.json())
.then(function(filtered)
{
  console.log(filtered);

  document.getElementsByClassName("imghai")[0].src=(filtered.articles[0].urlToImage);
  document.getElementsByClassName("h3hai")[0].innerHTML=(filtered.articles[0].title);

  document.getElementsByClassName("imghai")[1].src=(filtered.articles[1].urlToImage);
  document.getElementsByClassName("h3hai")[1].innerHTML=(filtered.articles[1].title);


  document.getElementsByClassName("imghai")[2].src=(filtered.articles[2].urlToImage);
  document.getElementsByClassName("h3hai")[2].innerHTML=(filtered.articles[2].title);

  document.getElementsByClassName("imghai")[3].src=(filtered.articles[3].urlToImage);
  document.getElementsByClassName("h3hai")[3].innerHTML=(filtered.articles[3].title);

  document.getElementsByClassName("imghai")[4].src=(filtered.articles[4].urlToImage);
  document.getElementsByClassName("h3hai")[4].innerHTML=(filtered.articles[4].title);

  document.getElementsByClassName("imghai")[5].src=(filtered.articles[5].urlToImage);
  document.getElementsByClassName("h3hai")[5].innerHTML=(filtered.articles[5].title);

  document.getElementById("btn1").addEventListener("click",function()
  {
    console.log("done");
    swal(filtered.articles[0].content+"\n \n"+"For More Information: "+"\n"+filtered.articles[0].url);
  });



  document.getElementById("btn2").addEventListener("click",function()
  {
    console.log("done");
    swal(filtered.articles[1].content+"\n \n"+"For More Information: "+"\n"+filtered.articles[1].url);
  });


  document.getElementById("btn3").addEventListener("click",function()
  {
    console.log("done");
    swal(filtered.articles[2].content+"\n \n"+"For More Information: "+"\n"+filtered.articles[2].url);
  });



  document.getElementById("btn4").addEventListener("click",function()
  {
    console.log("done");
    swal(filtered.articles[3].content+"\n \n"+"For More Information: "+"\n"+filtered.articles[3].url);
  });



  document.getElementById("btn5").addEventListener("click",function()
  {
    console.log("done");
    swal(filtered.articles[5].content+"\n \n"+"For More Information: "+"\n"+filtered.articles[5].url);
  });



  document.getElementById("btn6").addEventListener("click",function()
  {
    console.log("done");
    swal(filtered.articles[0].content+"\n \n"+"For More Information: "+"\n"+filtered.articles[0].url);
  });



})
.catch(function(error)
{
  console.log(error);
})
}
