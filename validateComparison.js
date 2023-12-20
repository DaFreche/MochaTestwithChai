    // JavaScript Document

    var chaiTestMocha = function(value1, value2) {

    const isNumeric = (value) => !isNaN(parseFloat(value)) && isFinite(value);

    if (!isNumeric(value1)) {
        return "Please enter a number in Value 1";
        
    }

    if (!isNumeric(value2)) {
        return "Please enter a number in Value 2";
    }

    const num1 = Number(value1);
    const num2 = Number(value2);

    if (num1 === num2) {
        return "The amounts are equal";
    }

    return Math.max(num1, num2);
    }

    // Export the function if using in a separate module
    module.exports = chaiTestMocha;

        
        