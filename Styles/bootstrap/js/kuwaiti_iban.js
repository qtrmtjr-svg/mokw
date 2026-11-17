///////////////////////////////////////////
//Project: Kuwaiti IBAN Validator/Chekcer//
///////////////////////////////////////////

// Arrays for converting letters to digits
var letter = new Array("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K",
		"L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y",
		"Z");
var digits = new Array("10", "11", "12", "13", "14", "15", "16", "17", "18",
		"19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30",
		"31", "32", "33", "34", "35");

// Kuwaiti IBAN parameters
var kw_ilen = 30; // IBAN length
var kw_ctry = "KW"; // Country code
var kw_bban = /\w{22}/; // BBAN structure

// Validate a Kuwiati IBAN
function validate_kuwaiti_iban(iban) {
	// IBAN must consist entirely of characters a-z, A-Z, 0-9
	pattern = /\W|_/; // \W=matches any non-word characters.
	if (pattern.test(iban)) {
		return -1;
	}

	// First FOUR characters must be letter-letter-digit-digit
	pattern = /^\D\D\d\d.+/;
	if (pattern.test(iban) == false) {
		return -2;
	}

	// Second FOUR characters must be letter-letter-letter-letter
	pattern1 = /^\D\D\D\D/;
	if (pattern1.test(iban.substr(4, 4)) == false) {
		return -8;
	}

	// Check digits cannot be 00, 01 or 99
	pattern = /^\D\D00.+|^\D\D01.+|^\D\D99.+/;
	if (pattern.test(iban)) {
		return -3;
	}

	// Validate country code
	ctry = iban.substr(0, 2);
	if (ctry != kw_ctry) {
		return -4;
	}

	// Validate length
	if ((iban.length - kw_ilen) != 0) {
		return -5;
	}

	// Validate BBAN structure
	pattern = kw_bban;
	if (pattern.test(iban.substr(8, kw_ilen - 8)) == false) {
		return -6;
	}

	// Convert to upper case
	iban = iban.toUpperCase();

	// Move country and check digits to the end
	iban = iban.substr(4, kw_ilen - 4) + iban.substr(0, 4);

	// Replace letters with digits
	for (var i = 0; i <= 25; i++) {
		while (iban.search(letter[i]) != -1) {
			iban = iban.replace(letter[i], digits[i]);
		}
	}

	// Calculate modulo 97 remainder
	coss = Math.ceil(iban.length / 7);
	rmndr = "";
	for (var i = 1; i <= coss; i++) {
		rmndr = String(parseFloat(rmndr + iban.substr((i - 1) * 7, 7)) % 97);
	}

	// Remainder must be 1
	if (rmndr != "1") {
		return -7;
	}

	// IBAN is valid
	return 0;
}
