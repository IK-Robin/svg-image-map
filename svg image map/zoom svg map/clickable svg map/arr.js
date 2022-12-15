const tables =document.getElementById('table');
let jsonobj= [];


var obj = {};
const tds = document.getElementById('tables');


  onload= fetch ('./data.csv').then((res) => {
     return res.text();
   }).then (data => {
    let arr = data.split('\n');
    let header =  arr[0].split(',');
    
    
// console.log(arr)
    

    for ( let i = 1; i < arr.length; i++){
        const csv_data = arr[i].split(',')
        // console.log(csv_data)
        var objec  = {};
        for (let j = 0; j < csv_data.length; j++) {
          objec[header[j].trim()] = csv_data[j].trim();
          // console.log(objec);


        }
        // console.log((csv_data));

        jsonobj.push(objec);
        
     


    }
    // console.log(jsonobj);
    jsonobj.map((item,ind) => {
      const available = item.available;
      const notavailable = item.notavailable;
      const booked = item.booked;

       const data1 = [[available],
      [notavailable],
    [booked]];
    // console.log(data1);
    // colourCountries(data1);

   
  function colourCountry(name, colour) {
		let  country = document.getElementById(name);
		let  oldClass = country.getAttribute( 'class');
		let  newClass =  ' colour' + colour;
    // console.log(oldClass);
		country.setAttribute( 'class', newClass);
	}
  function colourCountries(data) {
    for (let  colour=0; colour<data.length; colour++) {   
      console.log(data); 
        for (let  country=0; country<data[colour].length; country++) {
            colourCountry(data[colour][country], colour+1);
        }
    }
}

    return  colourCountries(data1);

    })



   })




  // var data = [['a60', 'a61'],
  //                ['a62','a63','a66'],
  //                ['a64', 'a65','a67','a68','a69']];

  //   colourCountries(data);

	// function colourCountries(data) {
  //   	for (var colour=0; colour<data.length; colour++) {    
  //       	for (var country=0; country<data[colour].length; country++) {
  //           	colourCountry(data[colour][country], colour+1);
  //       	}
  //   	}
	// }

	// function colourCountry(name, colour) {
	// 	var country = document.getElementById(name);
	// 	var oldClass = country.getAttributeNS(null, 'class');
	// 	var newClass = oldClass + ' colour' + colour;
	// 	country.setAttributeNS(null, 'class', newClass);
	// }


// add zoom effect


	   

const svg = document.getElementById("svg");

let zoomScale = 1.1;
let svgX, svgY;
let svgWidth; // assuming viewBox is square for now so svgWidth serves as svgHeight
let origSvgX, origSvgY, origSvgWidth;

let svgPanStartX, svgPanStartY;
let panning = false;

getViewBox(true);
setViewBox();

svg.onmousedown = function (e) {
 
  [svgPanStartX, svgPanStartY] = screenToSvgCoords(e.pageX, e.pageY);
  panning = true;

};

function pan(e) {
    console.log(e);
  const [svgPanEndX, svgPanEndY] = screenToSvgCoords(e.pageX, e.pageY);
  svgX += svgPanStartX - svgPanEndX;
  svgY += svgPanStartY - svgPanEndY;
  setViewBox();
}

svg.onmouseup = function (e) {
  if (panning) {
    panning = false;
    pan(e);
  }
};

svg.onmousemove = function (e) {
  if (panning) {
    pan(e);
  }
};

svg.onwheel = function (e) {
  let scaleFactor = 1;
  if (e.deltaY < 0) {
    scaleFactor = 1 / zoomScale;
  } else if (e.deltaY > 0) {
    scaleFactor = zoomScale;
  }

  let oldWidth = svgWidth;
  svgWidth *= scaleFactor;
  svgX += (oldWidth - svgWidth) / 2;
  svgY += (oldWidth - svgWidth) / 2;
  if (panning) {
    pan(e);
  } else {
    setViewBox();
  }
};

svg.ondblclick = function (e) {
  svgX = origSvgX;
  svgY = origSvgY;
  svgWidth = origSvgWidth;
  setViewBox();
};

function screenToSvgCoords(screenX, screenY) {
  function convert(screenCoord, screenOffset, screenSize, svgCoord, svgSize) {
    return (svgSize / screenSize) * (screenCoord - screenOffset) + svgCoord;
  }
  const rect = svg.getBoundingClientRect();
  const x = convert(screenX, rect.x, rect.width, svgX, svgWidth);
  const y = convert(screenY, rect.y, rect.height, svgY, svgWidth);
  return [x, y];
}

function getViewBox(first = false) {
  let viewBox = svg.getAttribute("viewBox").split(" ");
  svgX = parseFloat(viewBox[0]);
  svgY = parseFloat(viewBox[1]);
  svgWidth = parseFloat(viewBox[2]);

  if (first) {
    origSvgX = svgX;
    origSvgY = svgY;
    origSvgWidth = svgWidth;
  }
}

function setViewBox() {
  let viewBox = [svgX, svgY, svgWidth, svgWidth].join(" ");
  svg.setAttribute("viewBox", viewBox);
}















