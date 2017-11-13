// Module Pattern


// Functions stored in object-literal 
var validateInputFunctions = {

    validateEmpty: function(inputText) {
        if (inputText.length === 0) {
            alert("Please enter a value...Thank You!");
            return false;
        }
        // Validation was succcessful
        return true;	
    },

    validateName: function(inputText) {
        var re = /^[\w ]+$/;
        if (!re.test(inputText)) {
            alert("Please...real names...");
            return false;
        }
        return true;
    },

    validateCreditCard: function(inputText) {
    	return true;
    },

    validateBirthday: function(inputText) {
    	return true;
    },

    validateScribbles: function(inputText) {
    	return true;
    }

};


// Constructor Pattern


function InputForm(config) {

    if (!arguments.length) return this;

    this.id = config.id ? config.id : 'input';

    var validations = Object.keys(validateInputFunctions).map(function(d) {
        return {
            validated: config[d] || false,
            func: validateInputFunctions[d]
        };
    });

    document.getElementById(this.id).onkeydown = function(e) {
        if (e.keyCode == 13) {
            var text = e.target.value;
            validations.forEach(function(obj) {
            	// Calls function if respective argument property is set to true
                return obj.validated ? obj.func(text) : false;
            });
        }
    };

}

// Instantiate form object

var form = new InputForm({
	id: 'inputForm',
	validateEmpty: true,
	validateName: true
});

