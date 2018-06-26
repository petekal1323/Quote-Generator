var url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';

var XHRbtn = document.querySelector('#xhr');

var fetchbtn = document.querySelector('#fetch');

var jquerybtn = document.querySelector('#jQuery');

var axiosbtn = document.querySelector('#axios');

var display = document.querySelector('#quote');

XHRbtn.addEventListener("click", function(){
	var XHR = new XMLHttpRequest();
	XHR.onreadystatechange = function(){
		if(XHR.readyState == 4 && XHR.status == 200){
			console.log(XHR.responseText);
			JSON.parse(XHR.responseText);
			var quote = JSON.parse(XHR.responseText)[0];
			console.log("quote");
			display.innerText = quote;
		}
	}
	XHR.open('GET', url);
	XHR.send();

});


fetchbtn.addEventListener('click', function(){
  fetch(url)
  .then(function(req){
    console.log(req);
    req.json().then(function(data){
      console.log(data[0]);
      display.innerText = data[0];
    })
  })
  .catch(function(){
    alert('Error!');
  })
});


$('#jQuery').click(function(){
  $.getJSON(url)
  .done(function(data){
    console.log(data[0]);
    $("#quote").text(data[0]);
  });
});


axiosbtn.addEventListener('click', function(){
  axios.get(url)
  .then(function(res){
    console.log(res);
    display.innerText = res.data[0];
  })
  .catch(function(){
    alert('ERROR!');
  })
  
});
