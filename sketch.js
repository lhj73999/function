function setup()
{
	createCanvas(800, 800);
	
}
 
function draw()

{   background(0);
	fill(255);
	ellipse(mouseX, mouseY, 100, 100);

drawdonut(255, 0, 0, 100, 100);
drawdonut(255, 94, 0, 300, 100);
drawdonut(255, 187, 0, 400, 200);
drawdonut(255, 228, 0, 500, 300);

}

function drawdonut(R, G, B, x, y)

{ 
//doughnut #1

fill(R, G, B, 255); 
ellipse(x, y, 200, 200);
fill(0);
ellipse(x, y, 120, 120);
	}

     