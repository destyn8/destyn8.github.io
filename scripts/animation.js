var string = "Hello, My Name is Ansh, I am a 20 year old Bachelor’s student studying Computer Science in Bangalore, IN. I work with Cloud compute, configuration, and migration, network security for bare metal, and cloud solutions: Configuring ACL(s), Firewalls, Security Groups, DMZ, and VLAN(s). Certifications and projects spread mainly across AWS, OCI and GCP. ";
var str = string.split("");
var textEl = document.getElementById('text');
(function animate() {
  str.length > 0 ? textEl.innerHTML += str.shift() : clearTimeout(running); 
  var running = setTimeout(animate, 45);
})();
function nakUp(){
	document.getElementById("nakPopup").classList.toggle("active");	
}
function khoUp(){
	document.getElementById("khoPopup").classList.toggle("active");	
}
function khaUp(){
	document.getElementById("khaPopup").classList.toggle("active");	
}
function divUp(){
	document.getElementById("divPopup").classList.toggle("active");	
}
function bloUp(){
	document.getElementById("bloPopup").classList.toggle("active");	
}
function annUp(){
	document.getElementById("annPopup").classList.toggle("active");	
}
function desUp(){
	document.getElementById("desPopup").classList.toggle("active");	
}
function toggleDropdown(){
    var dropdown = document.getElementById("dropdown");
    dropdown.classList.toggle("show");
}

/*
Hello, My Name is Ansh, I am a Bachelor’s student studying <b>Computer Science</b> in <b>Bangalore, IN</b>. I work with <b>Cloud compute, configuration, and migration, network security</b> for bare metal, and cloud solutions: Configuring ACL(s), Firewalls, Security Groups, DMZ, and VLAN(s). <b>Certifications</b> and projects spread mainly across <b>AWS, OCI and GCP</b>. 
*/