//Funcion  carga  de paleta de colores 

	var contColor=0;
	var linerColor="#000000";
	var restorePoints ;
	var canvas;
	var validate;
	var positionX,positionY;
	var documentCanva;
	var contextCanvas;
	

function verMenuColor(){		
		if($("#selecColor").is(':visible')){
			$("#selecColor").fadeOut('slow',function(){
				destruirTablaColores();
				});			
		}
		if($("#selecColor").is(':hidden')){
			crearTablaColores();
			$("#selecColor").fadeIn('slow');
		}		
}
//Delete Table color 	
function destruirTablaColores(){
	var table=document.getElementById("table"); 
	var i=0;
	contColor=0;
	linerColor="#000000";
	
	for(i=0;i<2;i++){
		table.deleteRow(0);
		}
}
//Create table  color 
function crearTablaColores(){

	var table=document.getElementById("table"); 
	var row;
	var cell;
	var i=0;
	var j=0;
		for(i=0;i<1;i++){
			row=table.insertRow(i);
			for(var j=0;j<4;j++){
			cell=row.insertCell(j);	
			cell.style.background = listadoColores(contColor);						
				}
		}		
		$("#table tr td").click(function(){	
		$("#table tr td").css("box-shadow","0px 0px 0px #AFAFAF");
		linerColor=$(this).css("background-color");
		$(this).css("box-shadow","0px 5px 5px #1B9AF6");		
		});
					
}
//List Color selection  table  
function listadoColores(datoColor){
			color="";
			switch(datoColor)
			{
				case 0:
					color="#000000";
				break;
				case 1:
					color="#FF0000";
				break;
				case 2:
					color="#FFFF00";
				break;
				case 3:
					color="#0000CC";
				break;
				case 4:
					color="#007FFF";
				break;
				case 5:
					color="#0000FF";
				break;
				case 6:
					color="#7A4DFF";
				break;
				case 7:
					color="#000000";
				break;
				case 8:
					color="#FF007F";
				break;		
			}
		contColor++;
	return color 	
}
///End  fuction 
$(window).load(
	function(){
		setTimeout(
			function(){
				window.scrollTo( 0, 0 );
			},
			100
		);
	}
	
);

// Load context canvas 
function loadContext(position){
	
	contextCanvas.beginPath();
	contextCanvas.moveTo(position.x,position.y);
	contextCanvas.lineTo(position.x+1,position.y+1);
	contextCanvas.strokeStyle=linerColor;
	contextCanvas.stroke();
	contextCanvas.closePath();
	positionX=position.x;
	positionY=position.y;
}
//Function  start tha blackboard 
function pizarra(){
	restorePoints = [];
	canvas = $("canvas");
	validate=false;
	positionX,positionY="";
	documentCanva=document.getElementById("can");
	contextCanvas=documentCanva.getContext("2d");
	contextCanvas.strokeStyle=linerColor;
	contextCanvas.lineWidth=10;
	contextCanvas.lineCap="round";
	$("#bsz").change(function(a){
		contextCanvas.lineWidth=this.value; 
	});
	$(document).click(function(){
		validate=false;	
	});
	var isIPhone=(new RegExp( "iPhone|iPod|iPad|Android", "i" )).test(navigator.userAgent);
	var getCanvasLocalCoordinates = function( X, Y ){
		var position = canvas.offset();
		return({
			x: (X - position.left),
			y: (Y - position.top)
		});
	};
	var getTouchEvent = function( event ){
		return(isIPhone ? window.event.targetTouches[ 0 ] :	event);
	};
	var onTouchStart = function( event ){
		//window.location.hash = '#';
		var touch = getTouchEvent( event );
		var localPosition = getCanvasLocalCoordinates(
			touch.pageX,
			touch.pageY
		);
		saveRestorePoint();
		validate=true;
		contextCanvas.save();
		positionX=localPosition.x;
		positionY=localPosition.y;
		if(validate==true){
			loadContext(localPosition);
		}
		lastPenPoint = {
			x: localPosition.x,
			y: localPosition.y
		};

		canvas.bind((isIPhone ? "touchmove" : "mousemove"),	onTouchMove);
		canvas.bind((isIPhone ? "touchend" : "mouseup"), onTouchEnd);
	};

	var OnClick = function( event ){
		var touch = getTouchEvent( event );
		var localPosition = getCanvasLocalCoordinates(
			touch.pageX,
			touch.pageY
		);

		lastPenPoint = {
			x: localPosition.x,
			y: localPosition.y
		};

		if(validate==true){
			loadContext(localPosition);
		}
	};

	var onTouchMove = function( event ){
		var touch = getTouchEvent( event );
		var localPosition = getCanvasLocalCoordinates(
			touch.pageX,
			touch.pageY
		);

		lastPenPoint = {
			x: localPosition.x,
			y: localPosition.y
		};

		if(validate==true){
			contextCanvas.beginPath();
			contextCanvas.moveTo(localPosition.x,localPosition.y);
			contextCanvas.lineTo(positionX,positionY);
			contextCanvas.stroke();
			contextCanvas.closePath();
			positionX=localPosition.x;
			positionY=localPosition.y;
		}
	};

	var onTouchEnd = function( event ){
		canvas.unbind(
			(isIPhone ? "touchmove" : "mousemove")
		);

		canvas.unbind(
			(isIPhone ? "touchend" : "mouseup")
		);
	};

	canvas.bind(
		(isIPhone ? "touchstart" : "mousedown"),
		function( event ){
			onTouchStart( event );
			return( false );
		}
	);

	
	
	
		
	$("#clear").click(function(){
		/*e.fillStyle="#fff";
		e.fillRect(0,0,d.width,d.height);
		e.strokeStyle="black";
		e.fillStyle="black";*/
		documentCanva = document.getElementById("can");
		contextCanvas = documentCanva.getContext("2d");
		contextCanvas.clearRect(0, 0, documentCanva.width, documentCanva.height);

	})
	$("#draft").click(function(){
		/*e.fillStyle="#fff";
		e.fillRect(0,0,d.width,d.height);
		e.strokeStyle="black";
		e.fillStyle="black";*/
		/*var canvas = document.getElementById("can");
		var ctx = canvas.getContext("2d");
		ctx.clearRect(0, 0, canvas.width, canvas.height);*/
		
		pizarra("rgba(255,255,255,0.1)");
	});
};

 
function saveRestorePoint() {
	restorePoints = [];
	/*var oCanvas = document.getElementById("can");
	var imgSrc = oCanvas.toDataURL("C://image.png");
	restorePoints.push(imgSrc);*/
}
$(document).ready(function(e) {
    pizarra();
});
