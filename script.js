let score=0
let tab=document.querySelector('span')
let gen=function(){
	let sphere=document.createElement('div')
	document.body.appendChild(sphere)
	sphere.classList.add('sphere')
	randomX=Math.round(Math.random()*2000)
	sphere.style.left=randomX+'px'
	console.log('created')
	let fall=function(){
		sphere.style.top='1000px'
	}
	setTimeout(fall, 1000)
	sphere.onclick=function(){
		sphere.style.display='none'
		score=score+1
		tab.innerHTML=score
	}
}
setInterval(gen, 700)