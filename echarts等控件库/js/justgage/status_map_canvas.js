
		var maxWidth  = 600;
		var maxHeight = 600;
		
		var fujian = new Image();
 	    var arr = [   
        {x:129, y:0,   width:150, height:200},   
        {x:285, y:70,  width:200, height:120},        
        {x:65, y:136,  width:200, height:160},        
        {x:271, y:189, width:180, height:100},        
        {x:278, y:288, width:80, height:60},        
        {x:10, y:260,  width:180, height:140},        
        {x:184, y:270, width:90, height:120},        
        {x:220, y:386, width:40, height:40},        
        {x:115, y:352, width:100, height:160}        
    ];
 	    
 		var np = new Image();
 		var nd = new Image();
 		var sm = new Image();
 		var fz = new Image();
 		var pt = new Image();
 	    var ly = new Image();
 	    var qz = new Image();
 	    var xm = new Image();
 	    var zz = new Image();
//		mainCtx2.drawImage(np,129,0);
//		mainCtx.drawImage(nd,285,70);
//		mainCtx.drawImage(sm,65,136);
//		mainCtx.drawImage(fz,271,189);
//		mainCtx.drawImage(pt,278,288);
//		mainCtx.drawImage(ly,10,260);
//		mainCtx.drawImage(qz,184,270);
//		mainCtx.drawImage(xm,220,386);
//		mainCtx.drawImage(zz,115,352);	    
 	    
$(function(){
	run();
});

function run(){
    mainCtx.clearRect(0,0,maxWidth,maxHeight);
	fujian.onload=function(){
		mainCtx.drawImage(fujian,0,0);
	}
	fujian.src="/resources/images/map/fujian.png";
	
    canvas2.addEventListener('mousemove', function(e){
    var p = getEventPosition(e);
	 clickToChecked(p);
	 }, false);
    
    canvas2.addEventListener('click', function(e){
		 p = getEventPosition(e);
		 clickToLink(p);
		}, false);	
} 

function clickToChecked(p){	
	mainCtx2.clearRect(0,0,maxWidth,maxHeight);
	 var i = draw(p);
		switch(i){
			case 0:{
				    
				    barChart(1000+i,90,"南平"); 
				    mainCtx2.beginPath();
					np.onload=function(){
						mainCtx2.drawImage(np,129,0);
					}
					np.src="/resources/images/map/nanping.png";
					mainCtx2.closePath();
					break;
					}
			case 1:{
				    mainCtx2.beginPath();
				    barChart(1000+i,80,"宁德");
				    nd.onload=function(){
						mainCtx2.drawImage(nd,285,70);
					};
					nd.src="/resources/images/map/ningde.png";
					mainCtx2.closePath();
					break;
			        }
			case 2:{
				    mainCtx2.beginPath();
				    barChart(1000+i,70,"三明"); 
					
				    sm.onload=function(){

						mainCtx2.drawImage(sm,65,136);
					};
					sm.src="/resources/images/map/sanming.png";
					mainCtx2.closePath();
					
					break;
			        }
			case 3:{
				    mainCtx2.beginPath();
				    barChart(1000+i,60,"福州");
					fz.src="/resources/images/map/fuzhou.png";
				    fz.onload=function(){
						mainCtx2.drawImage(fz,271,189);
					};
					mainCtx2.closePath();
					break;
					}
			case 4:{
				    barChart(1000+i,50,"莆田");
				    mainCtx2.beginPath();
					pt.src="/resources/images/map/putian.png";
				    pt.onload=function(){
						mainCtx2.drawImage(pt,278,288);
					};
					mainCtx2.closePath();
					break;
			        }
			case 5:{
				    barChart(1000+i,40,"龙岩");
				    mainCtx2.beginPath();
					ly.src="/resources/images/map/longyan.png";
				    ly.onload=function(){
						mainCtx2.drawImage(ly,10,260);
					};
					mainCtx2.closePath();
					break;}
			case 6:{
				    barChart(1000+i,30,"泉州");
				    mainCtx2.beginPath();
					qz.src="/resources/images/map/quanzhou.png";
				    qz.onload=function(){
						mainCtx2.drawImage(qz,184,270);
					};
					mainCtx2.closePath();
			        break;}
			case 7:{
				    barChart(1000+i,20,"厦门");
				    mainCtx2.beginPath();
					xm.src="/resources/images/map/xiamen.png";
				    xm.onload=function(){
						mainCtx2.drawImage(xm,220,386);
					};
					mainCtx2.closePath();
					break;}
			case 8:{
				    barChart(1000+i,10,"漳州");
				    mainCtx2.beginPath();
					zz.src="/resources/images/map/zhangzhou.png";
				    zz.onload=function(){
						mainCtx2.drawImage(zz,115,352);
					};
					mainCtx2.closePath();
					break;}
			}
	}



function getEventPosition(ev){
	 var x, y;
	 if (ev.layerX || ev.layerX == 0) {
		 x = ev.layerX;
		 y = ev.layerY;
	 } else if (ev.offsetX || ev.offsetX == 0) { // Opera
		 x = ev.offsetX;
		 y = ev.offsetY;
	}
	 return {x: x, y: y};
 }

function barChart(){
	
}
function draw(p){
    var result ;
    //init();
 
	arr.forEach(function(v, i){
	//mainCtx.fillStyle='#FFFFFF';
	mainCtx2.beginPath();
	mainCtx2.rect(v.x, v.y, v.width, v.height);
	
	//mainCtx.stroke();
	
	if(p && mainCtx2.isPointInPath(p.x, p.y)){
		//如果传入了事件坐标，就用isPointInPath判断一下
		//如果当前环境覆盖了该坐标，就将当前环境的index值放到数组里
		//mainCtx.fill();
		//console.log(i);
	    result = i;
	} 
	});
	mainCtx2.closePath();
	//根据数组中的index值，可以到arr数组中找到相应的元素。
	return result;
}
 
 
function getCanvasContext(id){
  return document.getElementById(id).getContext("2d");
}
 
function clickToLink(p){	
    var i = draw(p);
    switch(i){
		case 0:{
                window.location.href="/status/?cityNo=6"; 
				break;}
		case 1:{
				window.location.href="/status/?cityNo=7"; 
				break;
		}
		case 2:{
	            window.location.href="/status/?cityNo=8"; 
				break;
		}
		case 3:{		
	           window.location.href="/status/?cityNo=1"; 
				break;
				}
		case 4:{
		        window.location.href="/status/?cityNo=5"; 
				break;
		        }
		case 5:{	
	            window.location.href="/status/?cityNo=4"; 
				break; 
				}
		case 6:{		
			    window.location.href="/status/?cityNo=3"; 
				break;
				}
		case 7:{
				     window.location.href="/status/?cityNo=2"; 
				break;}
		case 8:{
				window.location.href="/status/?cityNo=9"; 
				break;
				}
		}
 }	
