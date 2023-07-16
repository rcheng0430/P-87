var canvas = new fabric.Canvas('myCanvas');
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img)
	{
block_image_object = Img;
block_image_object.scaleToWidth(block_image_width);
block_image_object.scaleToWidth(block_image_height);
block_image_object.set({
	top:block_y,
	left:block_x
	});
	canvas.add(block_image_object);
});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') 
	{
		new_image('rr1.png');
		document.getElementById('myCanvas').style.borderColor="red";
	}
	if(keyPressed == '71')
	{
		block_x = 350;
		new_image('gr.png');
		document.getElementById('myCanvas').style.borderColor="green";
	}
	
	if(keyPressed == '89')
	{
		block_x =650;
		new_image('yr.png');
		document.getElementById('myCanvas').style.borderColor="yellow";
	}
	if(keyPressed == '80')
	{
		block_x = 950;
		new_image('pr.png');
		document.getElementById('myCanvas').style.borderColor="pink";
	}
	if(keyPressed == '66')
	{
		block_x = 1150;
				new_image('br.png');
		document.getElementById('myCanvas').style.borderColor="blue";

	}
	
}

