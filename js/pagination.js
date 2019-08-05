$(document).ready(function(){
	$('.nav a').filter(function()
			{return this.href==location.href}).parent().addClass('active').siblings().removeClass('active')});