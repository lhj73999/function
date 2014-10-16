function setup()
{
	createCanvas(800, 800);
	
}
 
function draw()

{   background(0);
	fill(255);
	ellipse(mouseX, mouseY, 100, 100);

drawdonut(100, 100);
drawdonut(300, 100);
drawdonut(400, 200);
drawdonut(500, 300);

}

function drawdonut(x, y)

{ 
//doughnut #1

fill(255);
ellipse(x, y, 200, 200);
fill(0);
ellipse(x, y, 120, 120);
	}

     