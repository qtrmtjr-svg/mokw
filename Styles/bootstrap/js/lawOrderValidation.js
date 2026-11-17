function validateDataAsed() {

	var num = $('.clonedInput').length;
	var x = document.getElementById('upfile');
	for (var i = 1; i <= num; i++) {

		if (document.getElementById('AserPerType').value == 0) {
			alert('الرجاء اختيار الموكل');
			document.getElementById('AserPerType').focus();
			return false;
		}

		if (trim(document.getElementById('fees').value) == "") {
			alert('الرجاء ادخال مبلغ المطالبة');
			document.getElementById('fees').focus();
			return false;
		}

		if (trim(document.getElementById('caseDoc').value) == "") {
			alert('الرجاء ادخال سند المطالبة');
			document.getElementById('caseDoc').focus();
			return false;
		}

		if ('files' in x) {
			if (x.files.length == 0) {
				alert('رجاء ادخال المرفقات');
				return false;
			} else {
				var file = x.files[0];
				if ('name' in file) {
					var n = file.name;
					fileExtension = n.split('.').pop();

					if (fileExtension != "pdf") {
						alert("الملف يجب ان يكون بصيغة pdf");
						return false;
					}

					if ('size' in file) {
						if (file.size > 10485759) {
							alert('حجم الملف لايجب ان يزيد عن 10 ميجابايت');
							return false;
						}

					}
				}
			}
		}

		if (document.getElementById("annDate").value == "") {
			alert("يجب تحديد تاريخ اعلان المدعى عليه");
			document.getElementById("annDate").select();
			document.getElementById("annDate").focus();
			return false;
		}

		if (isNaN(document.getElementById('title' + num).value)
				|| document.getElementById('title' + num).value == 0) {
			alert('نرجو منكم التقييد بالإختيارات المتاحة');
			return false;
		} else {
			if (document.getElementById('title' + num).value == 1) {

				if (isNaN(document.getElementById('natCode' + num).value)) {
					alert('الرجاء اختيار الجنسية');
					document.getElementById('natCode' + num).focus();
					return false;
				}

				if (trim(document.getElementById('civilID' + num).value) == ""
						|| !checkcivilidNoAlert(document.getElementById('civilID' + num).value)) {
					alert('الرجاء ادخال الرقم المدني');
					document.getElementById('civilID' + num).focus();
					return false;
				}

				if (trim(document.getElementById('firstName' + num).value) == "") {
					alert('الرجاء ادخال الأسم الاول');
					document.getElementById('firstName' + num).focus();
					return false;
				}

				if (trim(document.getElementById('secondName' + num).value) == "") {
					alert('الرجاء ادخال الأسم الثاني');
					document.getElementById('secondName' + num).focus();
					return false;
				}

				if (trim(document.getElementById('familyName' + num).value) == "") {
					alert('الرجاء ادخال اللقب');
					document.getElementById('familyName' + num).focus();
					return false;
				}

				if (trim(document.getElementById('govCode' + num).value) == ''
						|| trim(document.getElementById('area' + num).value) == ''
						|| trim(document.getElementById('block' + num).value) == '')

				{
					alert('الرجاء ادخال العنوان كاملا');
					document.getElementById('block' + num).focus();
					return false;
				}

				// ---------------------------------------------------------------------------------
			} else if (document.getElementById('title' + num).value == 2) {
	
					if (trim(document.getElementById('orgName' + num).value) == "") {
						alert('الرجاء ادخال الأسم ');
						document.getElementById('orgName' + num).focus();
						return false;
					}
	
		            if (trim(document.getElementById('orgCivilID' + num).value) == "" || isNaN(document.getElementById('orgCivilID' + num).value)) {
		            	document.getElementById('orgCivilID' + num).value = "-";
		            }

		            if (trim(document.getElementById('govCode' + num).value) == ''
							|| trim(document.getElementById('area' + num).value) == ''
							|| trim(document.getElementById('block' + num).value) == '')
	
					{
						alert('الرجاء ادخال العنوان كاملا');
						document.getElementById('block' + num).focus();
						return false;
					}

			} else {
				alert('نرجو منكم التقييد بالإختيارات المتاحة');
				return false;
			}
		}

	}

	return true;
}

function showDivLawOrder() {

	var num = $('.clonedInput').length;

	// $(".input_ci").val(''); $(".input_fn").val(''); $(".input_sn").val('');
	// $(".input_thn").val(''); $(".input_forn").val('');
	// $(".input_fam").val('');

	if (document.getElementById('title' + num).value == 1) {
		document.getElementById('normal' + num).style.display = 'block';
		document.getElementById('org' + num).style.display = 'none';
		document.getElementById('address' + num).style.display = 'block';
		selectOrder(document.getElementById('natCode' + num), '101');
		selectOrder(document.getElementById('govCode' + num), '0');
		// selectOrder(document.getElementById('wakYear' + num), '2015');
	} else if (document.getElementById('title' + num).value == 2) {
		document.getElementById('normal' + num).style.display = 'none';
		document.getElementById('org' + num).style.display = 'block';
		document.getElementById('address' + num).style.display = 'block';
		//selectOrder(document.getElementById('natCode' + num), '101');
		selectOrder(document.getElementById('govCode' + num), '0');
		// selectOrder(document.getElementById('wakYear' + num), '2015');
	} else {
		document.getElementById('normal' + num).style.display = 'none';
		document.getElementById('org' + num).style.display = 'none';
		document.getElementById('address' + num).style.display = 'none';
	}

}
