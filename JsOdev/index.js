var username = prompt("İsminizi Girin : ");
document.querySelector("#isimBuraya").innerHTML = `Merhaba ${username}! Hoş Geldin `

function tarihGetir(){
    var tarih=new Date();
	var saat=tarih.getHours();
	var dakika=tarih.getMinutes();
	var saniye=tarih.getSeconds();	
   	// document.querySelector("#tarihBuraya").innerHTML = `${saat}.${dakika}.${saniye} Tarihinde kodluyoruz JavaScript Ödev 1 'i yaptım.` 
	document.querySelector("#tarihBuraya").innerHTML = `${tarih} Tarihinde kodluyoruz JavaScript Ödev 1 'i yaptım.` 
}
setInterval(tarihGetir, 1000);

