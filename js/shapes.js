window.onload = function() {
    document.getElementById("hello-sample").onclick = sayHelloStaff;
    document.getElementById("rectangle-sample").onclick = drawRectangleStaff;
    document.getElementById("colored-rectangle-sample").onclick = drawColoredRectangleStaff;
    document.getElementById("triangle-sample").onclick = drawTriangleStaff;
    document.getElementById("smile-sample").onclick = drawFaceStaff;
    document.getElementById("pyramid-sample").onclick = drawPyramidStaff;

    // this is how we're connecting our buttons to our JavaScript functions. let's walk through it.
    //
    // document.getElementById("some-id")   <-- you need to give each button a unique ID
    //                                          and access it in this manner
    //
    // onclick is an event that is fired when you click something (in our case, a button).
    // when we give onclick a value, we're telling JavaScript what to do when we click the button.
    // you should set onclick equal to your function names (i.e., sayHello).
    //
    // there are six event listeners being added for the staff solutions. you'll have an
    // equivalent set of six event listeners for your solutions. the first one is done for you.

    document.getElementById("hello").onclick = sayHello;
    document.getElementById("rectangle").onclick = drawRectangle;
    document.getElementById("colored-rectangle").onclick = drawColoredRectangle;
    document.getElementById("triangle").onclick = drawTriangle;
    document.getElementById("smile").onclick = drawFace;
    document.getElementById("pyramid").onclick = drawPyramid;
}

/*
 * Exercise 1.hello
 */

const sayHello = function() {
  const canvas = document.getElementById('student-canvas-1');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  do{
    var message = prompt("Message: ")
    if(message == null) {
      break;
    }
    if (message.length > 50) {
        alert("Your message is too long. Keep it under 50 characters")
    }
  } while(message.length > 50)

  if (message != null) {
    ctx.font = "48px sans-serif";
    ctx.strokeText(message, 30, 70, 994);
  }
};

/*
 * Exercise 2.
 */

 const drawRectangle = function() {
   const canvas = document.getElementById('student-canvas-2');
   const ctx = canvas.getContext('2d');
   ctx.clearRect(0, 0, canvas.width, canvas.height);

   var width = 0;
   var height = 0;
   var x = 0;
   var y = 0;
   do {
     var width = prompt("Width: ")
     var height = prompt("Height: ")
     var x = prompt("X: ")
     var y = prompt("Y: ")
     if (width == null || height == null || x == null || y == null) {
       break;
     }
     if (width > 1024 || width < 1) {
       alert("Your width must be between 1 and 1024.")
     }
     else if (height > 512 || height < 1) {
       alert("Your height must be between 1 and 512.")
     }
     else if (x < 1 || x > 1024) {
       alert("Your x-coordinate must be between 1 and 1024.")
     }
     else if (y < 1 || y > 512) {
       alert("Your y-coordinate must be between 1 and 512.")
     }
     else if (isNaN(width) || isNaN(height) || isNaN(x) || isNaN(y)) {
       alert("One of your values is not a number.")
     }
     else if (Number(width) + Number(x) > 1024 || Number(height) + Number(y) > 512) {
       alert("Your rectangle won't fit on the canvas.")
     }
   } while (width > 1024 || width < 1 || height > 512 || height < 1 || x < 1 || x > 1024 || y < 1 || y > 512 || isNaN(width) || isNaN(height) || isNaN(x) || isNaN(y) || Number(width) + Number(x) > 1024 || Number(height) + Number(y) > 512)

   if (!(width == null) && !(height == null) && !(x == null) && !(y == null)) {
     ctx.beginPath();
     ctx.rect(x, y, width, height);
     ctx.closePath();
     ctx.stroke();
   }
 };

 const drawColoredRectangle = function() {
   const canvas = document.getElementById('student-canvas-3');
   const ctx = canvas.getContext('2d');
   ctx.clearRect(0, 0, canvas.width, canvas.height);

   do {
     var color = (prompt("Color: "))
     if (color == null) {
       break;
     }
     color = String(color)
     var color_formatted = color.toUpperCase()
     if (color_formatted != "GREEN" && color_formatted != "BLACK" && color_formatted != "BLUE" && color_formatted != "ORANGE" && color_formatted != "PURPLE" && color_formatted != "RED" && color_formatted != "YELLOW") {
       alert(color + " is not a supported color.")
     }
   } while (color_formatted != "GREEN" && color_formatted != "BLACK" && color_formatted != "BLUE" && color_formatted != "ORANGE" && color_formatted != "PURPLE" && color_formatted != "RED" && color_formatted != "YELLOW")

   if (color != null) {
     ctx.fillStyle = color_formatted;
     ctx.fillRect(10, 10, 100, 50);
   }
 };
 
 const drawColoredRectangle = function() {
   const canvas = document.getElementById('student-canvas-3');
   const ctx = canvas.getContext('2d');
   ctx.clearRect(0, 0, canvas.width, canvas.height);

   do {
     var color = (prompt("Color: "))
     if (color == null) {
       break;
     }
     color = String(color)
     var color_formatted = color.toUpperCase()
     if (color_formatted != "GREEN" && color_formatted != "BLACK" && color_formatted != "BLUE" && color_formatted != "ORANGE" && color_formatted != "PURPLE" && color_formatted != "RED" && color_formatted != "YELLOW") {
       alert(color + " is not a supported color.")
     }
   } while (color_formatted != "GREEN" && color_formatted != "BLACK" && color_formatted != "BLUE" && color_formatted != "ORANGE" && color_formatted != "PURPLE" && color_formatted != "RED" && color_formatted != "YELLOW")

   if (color != null) {
     ctx.fillStyle = color_formatted;
     ctx.fillRect(10, 10, 100, 50);
   }
 };

/*
 * Exercise 5.
 */

   const drawFace = function() {
     const canvas = document.getElementById('student-canvas-5');
     const ctx = canvas.getContext('2d');
     ctx.clearRect(0, 0, canvas.width, canvas.height);

     do {
       var r = (prompt("Radius: "))
       if (r == null) {
         break;
       }

       if (r < 32) {
         alert("Your radius must be at least 32.")
       }
       if (isNaN(r)) {
         alert("Your radius is not a number.")
       }
       if (r > 256) {
         alert("Your smiley face won't fit on the canvas.")
       }
     } while (r > 256 || isNaN(r) || r < 32)

     var re = 0.15 * r
     var rm = 0.7 * r

     ctx.beginPath();
     ctx.arc(512, 256, r, 0, 2 * Math.PI);
     ctx.stroke();
     ctx.closePath();

     ctx.beginPath();
     ctx.arc(512, 256, rm, 0, Math.PI);
     ctx.stroke();
     ctx.closePath();

     ctx.beginPath();
     ctx.arc(512 - 0.4 * r, 256 - 0.4 * r, re, 0, 2 * Math.PI);
     ctx.stroke();
     ctx.closePath();

     ctx.beginPath();
     ctx.arc(512 + 0.4 * r, 256 - 0.4* r, re, 0, 2 * Math.PI);
     ctx.stroke();
     ctx.closePath();
   };

/*
 * Exercise 6 (extra credit).
 */


 const drawPyramid = function() {
   const canvas = document.getElementById('student-canvas-6');
   const ctx = canvas.getContext('2d');
   var d = 0
   var hone = 0
   var dm = 0
   var hm = 0
   var c = 5
   ctx.clearRect(0, 0, canvas.width, canvas.height);

   do {
     var s = (prompt("Side: "))
     if (s == null) {
       break;
     }
     if (s < 1) {
       alert("Your block size must be at least 1.")
     }
     if (s >= 101) {
       alert("Your pyramid won't fit on the canvas")
     }
     if (isNaN(s)) {
       alert("Your block size is not a number.")
     }
   } while (isNaN(s) || s >= 101 || s < 1)

   for (i = 5; i > 0; i--) {
     c = i
     while(counter >= 1) {
       ctx.beginPath();
       ctx.rect(10 + Number(d), (502 - s) - Number(hone), Number(s), Number(s));
       ctx.stroke();
       ctx.closePath();
       d = Number(d) + Number(s)
       c--
     }
     dm++
     d = dm * (1/2 * s)
     hm++
     hone = hone * s
   }
 };
