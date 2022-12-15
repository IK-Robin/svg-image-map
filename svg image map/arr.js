const tables =document.getElementById('table');
let jsonobj= [];


var obj = {};
const tds = document.getElementById('tables');


  onload = fetch ('./csv.csv').then((res) => {
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
      console.log(available);
       const data1 = [[available],
      [notavailable],
    [booked]];
    //console.log(data1);
    colourCountries(data1);

    function colourCountries(data) {
    	for (var colour=0; colour<data.length; colour++) {    
        	for (var country=0; country<data[colour].length; country++) {
            	colourCountry(data[colour][country], colour+1);
        	}
    	}
	}

  function colourCountry(name, colour) {
		var country = document.getElementById(name);
		var oldClass = country.getAttributeNS(null, 'class');
		var newClass = oldClass + ' colour' + colour;
		country.setAttributeNS(null, 'class', newClass);
	}
    

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

