const FIRST_OPERAND_TEXTBOX = 'FirstOperandTextBox';
const SECOND_OPERAND_TEXTBOX = 'SecondOperandTextBox';
const RESULT_TEXTBOX = 'ResultTextBox';
const RESET_BUTTON = 'ResetButton';
const CALCULATE_BUTTON = 'CalculateButton';
const FIRST_OPERAND_ERROR_IMAGE = 'FirstOperandErrorImage';
const SECOND_OPERAND_ERROR_IMAGE = 'SecondOperandErrorImage';

// Handles the Change event of the FirstOperandTextBox control.
function firstOperandTextBoxOnChange() {
	const textBoxValue = document.getElementById(FIRST_OPERAND_TEXTBOX).value;
	
	// Hide error image.
    hideErrorImage(true, FIRST_OPERAND_ERROR_IMAGE);
	
	// Disble the calculation button.
    document.getElementById(CALCULATE_BUTTON).disabled = true;
	
	// The value is empty.
	if (textBoxValue === '') {
		// Both values are empty.
        if (document.getElementById(SECOND_OPERAND_TEXTBOX).value === "") {
			// Disble the reset button.
            document.getElementById(RESET_BUTTON).disabled = true;
        }
		
		return;
	}
	
	// Enable the reset button.
	document.getElementById(RESET_BUTTON).disabled = false;

	// The value is not number type.
	if (textBoxValue.trim() === '' || isNaN(textBoxValue)) {
		// Show error image.
        hideErrorImage(false, FIRST_OPERAND_ERROR_IMAGE);
		
		return;
	}

    // Enable the buttons.
    enableButton();
}

// Handles the Change event of the SecondOperandTextBox control.
function secondOperandTextBoxOnChange() {
	const textBoxValue = document.getElementById(SECOND_OPERAND_TEXTBOX).value;
	
	// Hide error image.
    hideErrorImage(true, SECOND_OPERAND_ERROR_IMAGE);
	
	// Disble the calculation button.
        document.getElementById(CALCULATE_BUTTON).disabled = true;

	// The value is not empty.
	if (textBoxValue === "") {
        // Both values are empty.
        if (document.getElementById(FIRST_OPERAND_TEXTBOX).value === "") {
			// Disble the reset button.
            document.getElementById(RESET_BUTTON).disabled = true;
        }
		
		return;
    }

    // Enable the reset button.
	document.getElementById(RESET_BUTTON).disabled = false;

    // The value is not number type.
    if (textBoxValue.trim() === '' || isNaN(textBoxValue)) {
        // Show error image.
        hideErrorImage(false, SECOND_OPERAND_ERROR_IMAGE);
		
		return;
    }

    // Enable the buttons.
    enableButton();
}

// Hides or shows the error image.
function hideErrorImage(value, controlId) {
    document.getElementById(controlId).hidden = value;
}

// Enables buttons.
function enableButton() {
	let firstOperandValue = document.getElementById(FIRST_OPERAND_TEXTBOX).value;
	let secondOperandValue = document.getElementById(SECOND_OPERAND_TEXTBOX).value;
	
	// Both TextBox are empty.
	if (firstOperandValue === "" && secondOperandValue === "") {
		// Disable buttons.
        disableButtons();
		
		return;
	}

    // At least one TextBox has a not empty value.
    if (firstOperandValue !== "" || secondOperandValue !== "") {
        // Enable reset button.
        document.getElementById(RESET_BUTTON).disabled = false;
    }
	
	firstOperandValue = firstOperandValue.trim();
	secondOperandValue = secondOperandValue.trim();
	
	// Both TextBox has not empty value and both are number.
    if (firstOperandValue !== "" && secondOperandValue !== "" &&
        !isNaN(firstOperandValue) && !isNaN(secondOperandValue)) {
        // Enable sum button.
        document.getElementById(CALCULATE_BUTTON).disabled = false;
    }
}

// Disables the buttons.
function disableButtons() {
    document.getElementById(CALCULATE_BUTTON).disabled = true;
    document.getElementById(RESET_BUTTON).disabled = true;
}

// Handles the OnClick event of the button1 control. Calculate function.
function calculateButtonOnClick() {
	const firstOperandValue = document.getElementById(FIRST_OPERAND_TEXTBOX).value;
	const secondOperandValue = document.getElementById(SECOND_OPERAND_TEXTBOX).value;
    document.getElementById(RESULT_TEXTBOX).value = "Result: " + (parseFloat(firstOperandValue) + parseFloat(secondOperandValue));
}

// Handles the OnClick event of the button2 control. Reset function.
function resetButtonOnClick() {
    // Empty the TextBox values.
    document.getElementById(FIRST_OPERAND_TEXTBOX).value = "";
    document.getElementById(SECOND_OPERAND_TEXTBOX).value = "";
    document.getElementById(RESULT_TEXTBOX).value = "";

    // Hide the Error Images.
    hideErrorImage(true, FIRST_OPERAND_ERROR_IMAGE);
    hideErrorImage(true, SECOND_OPERAND_ERROR_IMAGE);

    // Disable the buttons.
    disableButtons();
}
