window.onload = initAll;

var lastTouch = new Array(2);
var lastDelta = new Array(2);
var isTouchDown;
var didMove;
var zIndex = 0;
var lastLocation1 = new Array(0,0);
var lastLocation2 = new Array(0,0);
var lastLocation3 = new Array(0,0);

function initAll() {
	var that = $('.colorBlock');
	var targetBlock;
	that.on('touchstart',function(evt){
		targetBlock = evt.target;
		lastTouch = new Array(evt.originalEvent.touches[0].pageX,evt.originalEvent.touches[0].pageY);
		isTouchDown = true;
		$(targetBlock).css({
			'z-index':(++zIndex).toString()
		});
	});
	
	that.on('touchmove',function(evt){
		targetBlock = evt.target;
		isTouchDown = false;
		translate(targetBlock,evt.originalEvent.touches[0].pageX,evt.originalEvent.touches[0].pageY);
        return false;
	});
	
	that.on('touchend',function(evt){
		targetBlock = evt.target;
        if(isTouchDown){
            
        }
        else{
            switch(targetBlock.id){
			case 'div1':
				lastLocation1 = lastDelta;
				break;
			case 'div2':
				lastLocation2 = lastDelta;
				break;
			case 'div3':
				lastLocation3 = lastDelta;
				break;
			default:
            }
        }
	});
}

function translate(colorBlock,x,y){
	var deltaX = x - lastTouch[0];
	var deltaY = y - lastTouch[1];
	
	switch(colorBlock.id){
	case 'div1':
		deltaX += lastLocation1[0];
		deltaY += lastLocation1[1];
		break;
	case 'div2':
		deltaX += lastLocation2[0];
		deltaY += lastLocation2[1];
		break;
	case 'div3':
		deltaX += lastLocation3[0];
		deltaY += lastLocation3[1];
		break;
	default:
	}
	
	$(colorBlock).css('-webkit-transform','translate('+deltaX+'px,'+deltaY+'px)');
	
	lastDelta = new Array(deltaX,deltaY);
}