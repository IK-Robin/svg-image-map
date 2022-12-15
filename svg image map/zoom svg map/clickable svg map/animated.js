 var data = [['a60', 'a61'],
                 ['a62','a63','a66'],
                 ['a64', 'a65','a67','a68','a69']];

    colourCountries(data);

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