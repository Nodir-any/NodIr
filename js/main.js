var tablinks = document.getElementsByClassName("tab-links");
		var tabcontents = document.getElementsByClassName("tab-contents");
		function opentab(tabname){
			for(tablink of tablinks){
				tablink.classList.remove("active-link");
			}
			for(tabcontent of tabcontents){
				tabcontent.classList.remove("active-tab");
			}
			event.currentTarget.classList.add("active-link");
			document.getElementById(tabname).classList.add("active-tab");
		}
		
		var sidemenu = document.getElementById("mobile-menu");
		
		function openmenu(){
			sidemenu.style.right = "0";
		}
		
		function closemenu(){
			sidemenu.style.right = "-200px";
		}
		
		
//-----------------------------------

document.getElementsByClassName('download-btn').addEventListener('click', function(e){
	
	const target = e.target;
	if(target.matches('button')){
		target.style.backgroundColor = 'gray';
		target.style.color = '#cccccc';
		target.style.fontStyle = 'italic';
		target.innerText = 'Downloaded';
	}
	
});
document.querySelector('.github-btn').addEventListener('click', function(e){
	
	const target = e.target;
	if(target.matches('button')){
		target.style.backgroundColor = 'gray';
		target.style.color = '#cccccc';
		target.style.fontStyle = 'italic';
		target.innerText = 'Went to';
	}
	
});




