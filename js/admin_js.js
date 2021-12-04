function toggleSidebar() {
	var x = document.getElementById("sidebar").offsetWidth;
	var sideLinksText = document.getElementsByClassName('side-link-text');
	var sidebarNavItem = document.getElementsByClassName('sidebar-nav-item');
	var sidebarFooterItem = document.getElementsByClassName('sidebar-footer-item');
	console.log(x);
	if(x == 60){
		document.getElementById("sidebar").style.width = "15rem";
		setTimeout(function(){
			for(sideLinksTextCount = 0;sideLinksTextCount < sideLinksText.length;sideLinksTextCount++){
			sideLinksText[sideLinksTextCount].style.display = "inline-block";
				sideLinksText[sideLinksTextCount].style.opacity = "1";	
			}
		},400);
		for(sidebarNavItemCount = 0;sidebarNavItemCount < sidebarNavItem.length;sidebarNavItemCount++){
			sidebarNavItem[sidebarNavItemCount].style.textAlign = "left";
		}
		for(sidebarFooterItemCount = 0;sidebarFooterItemCount < sidebarFooterItem.length;sidebarFooterItemCount++){
			sidebarFooterItem[sidebarFooterItemCount].style.textAlign = "left";
		}
	}else{
		document.getElementById("sidebar").style.width = "6rem";
		for(sideLinksTextCount = 0;sideLinksTextCount < sideLinksText.length;sideLinksTextCount++){
			sideLinksText[sideLinksTextCount].style.display = "none";
			sideLinksText[sideLinksTextCount].style.opacity = "0";
		}
		for(sidebarNavItemCount = 0;sidebarNavItemCount < sidebarNavItem.length;sidebarNavItemCount++){
			sidebarNavItem[sidebarNavItemCount].style.textAlign = "center";
		}
		for(sidebarFooterItemCount = 0;sidebarFooterItemCount < sidebarFooterItem.length;sidebarFooterItemCount++){
			sidebarFooterItem[sidebarFooterItemCount].style.textAlign = "center";
		}
	}	
}

function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

window.onkeydown = function( event ) {
    if ( event.keyCode == 27 ) {
        document.getElementById("settings-menu").style.display = "none";
    }
};

function close_menu(menu_name){
	document.getElementById(menu_name+"-menu").style.opacity = "0";
	document.getElementById(menu_name+"-menu").style.display = "none";
}

function minim(element){
	console.log(element.parentNode.parentNode.nextElementSibling);
	element.parentNode.parentNode.nextElementSibling.style.display = "none";
	element.parentNode.parentNode.style.borderBottom = "0.1rem solid ghostwhite";
}
function maximus(element){
	console.log(element.parentNode.parentNode.nextElementSibling);
	element.parentNode.parentNode.nextElementSibling.style.display = "grid";
	element.parentNode.parentNode.style.borderBottom = "none";
}

function maximus_profiles(element){
	console.log(element.parentNode.parentNode.nextElementSibling);
	element.parentNode.parentNode.nextElementSibling.style.display = "flex";
	element.parentNode.parentNode.style.borderBottom = "none";
}

function viewContent() {
	document.getElementById("order-view-modal").style.display = "flex";
}
function viewInventoryContent() {
	document.getElementById("inventory-view-modal").style.display = "flex";
}
function viewChangePwdContent() {
	document.getElementById("change-pwd-view-modal").style.display = "flex";
}
function viewSiteSettingsContent() {
	document.getElementById("site-settings-view-modal").style.display = "flex";
}
function viewProfileSettingsContent() {
	document.getElementById("profile-settings-view-modal").style.display = "flex";
}
function viewNewProfile(element) {
  element.firstElementChild.classList.toggle("show");
  console.log(element.firstElementChild);
}

var loadFile = function(event,ip) {
  document.getElementById(ip+'-output').style.display = "block";
  var reader = new FileReader();
  reader.onload = function(){
    var output = document.getElementById(ip+'-output');
    output.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
};

function viewMessageContent(element) {
	console.log("Message content");
	document.getElementById("message-content-view-modal").style.display = "flex";

}