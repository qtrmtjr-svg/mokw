//Encoding: Windows-1256
var varName = new Array();// This array is used to save the parameter names
							// passed to the JSP
var varVal = new Array();// This array is used to save the parameter values
							// passed to the JSP
var MINUTE = 60 * 1000;
var HOUR = MINUTE * 60;
var DAY = HOUR * 24;
var WEEK = DAY * 7;
var DAYDIFF = 90;
var DAYDIFF2 = 366;
var DAYDIFFMEETROLE = 30;
var startSearchDate = "1/1/1900";

var hellotext = "مرحبا بكم فى البوابة الإلكترونية لوزارة العدل!";
var thetext = "";
var started = false;
var step = 0;
var times = 1;

function play() {
    times--;
    if (!times) {
        if (!started) {
            started = true;
            window.status = hellotext;
            setTimeout("anim()", 1);
        }
        thetext = hellotext;
    }
}

function anim() {
    step++;
    if (step == 7)
        step = 1;
    if (step == 1)
        window.status = '>===' + thetext + '===<';
    if (step == 2)
        window.status = '=>==' + thetext + '==<=';
    if (step == 3)
        window.status = '>=>=' + thetext + '=<=<';
    if (step == 4)
        window.status = '=>=>' + thetext + '<=<=';
    if (step == 5)
        window.status = '==>=' + thetext + '=<==';
    if (step == 6)
        window.status = '===>' + thetext + '<===';
    setTimeout("anim()", 200);
}
// End -->
function dateBeforeSearchDate(date) {

    var sDateArray = date.value.split("/");
    sDateVal = new Date(sDateArray[2], sDateArray[1] - 1, sDateArray[0]);

    var sSearchDateArray = startSearchDate.split("/");
    sSearchDateVal = new Date(sSearchDateArray[2], sSearchDateArray[1] - 1, sSearchDateArray[0]);

    if (sDateVal < sSearchDateVal) {
        alert(" نأسف لا يمكنك الاستعلام عن قضايا قبل تاريخ" + rev(startSearchDate));
        return false;
    }
    else 
        return true;

}

function dateWithinMonth(sDate, eDate) {
    
    var sDateArray = sDate.value.split("/");
    var eDateArray = eDate.value.split("/");
    sDateVal = new Date(sDateArray[2], sDateArray[1] - 1, sDateArray[0]);
    // alert(sDateVal.toString());
    eDateVal = new Date(eDateArray[2], eDateArray[1] - 1, eDateArray[0]);
    // alert(eDateVal.toString())
    // alert("S day"+sDateArray[0]);
    // alert("S Month"+sDateArray[1]);
    // alert("S year"+sDateArray[2]);

    // alert("E day"+eDateArray[0]);
    // alert("E Month"+eDateArray[1]);
    // alert("E year"+eDateArray[2]);
    var Days = (eDateVal - sDateVal) / DAY;

    // alert(Days);
    if (Days > DAYDIFF) {
        alert("نأسف لا يمكنك البحث خلال مدة تزيد عن" + DAYDIFF + "يوما ");
        return false;
    }
    else 
        return true;

}

function dateWithinMonth2(sDate, eDate) {
    
    var sDateArray = sDate.value.split("/");
    var eDateArray = eDate.value.split("/");
    sDateVal = new Date(sDateArray[2], sDateArray[1] - 1, sDateArray[0]);
    eDateVal = new Date(eDateArray[2], eDateArray[1] - 1, eDateArray[0]);
    var Days = (eDateVal - sDateVal) / DAY;

    if (Days > DAYDIFF2) {
        alert("نأسف لا يمكنك البحث خلال مدة تزيد عن" + DAYDIFF2 + "يوما ");
        return false;
    }
    else 
        return true;

}

function datestart(sDate) {

    var sDateArray = sDate.value.split("/");

    sDateVal = new Date(sDateArray[2], sDateArray[1] - 1, sDateArray[0]);

    if (sDateVal > new Date()) {
        alert("نأسف لا يمكنك الاستعلام عن قضايا مستقبلية");
        return false;
    }
    else 
        return true;

}

function rev(txtString){
	// reverses the date so it shown correctlly in the alert error Messages
    var array = txtString.split("/");
    var result = array[2] + "/" + array[1] + "/" + array[0];
    return result;
}

function checkcivilid(civil) {

    var strcivil = new String(civil);
    var len = strcivil.length;
    var digit1 = strcivil.substr(0, 1);
    var digit2 = strcivil.substr(1, 1);
    var digit3 = strcivil.substr(2, 1);
    var digit4 = strcivil.substr(3, 1);
    var digit5 = strcivil.substr(4, 1);
    var digit6 = strcivil.substr(5, 1);
    var digit7 = strcivil.substr(6, 1);
    var digit8 = strcivil.substr(7, 1);
    var digit9 = strcivil.substr(8, 1);
    var digit10 = strcivil.substr(9, 1);
    var digit11 = strcivil.substr(10, 1);
    var digit12 = strcivil.substr(11, 1);

    if (civil == "") {
        //alert('أدخل الرقم المدني ');
    	 document.getElementById('civilID1Warning').style.display = 'inline';
        return false;
    }

    if ((!(len == 12)) || (isNaN(parseInt(digit1))) || (isNaN(parseInt(digit2))) || (isNaN(parseInt(digit3))) || (isNaN(parseInt(digit4))) || (isNaN(parseInt(digit5))) || (isNaN(parseInt(digit6))) || (isNaN(parseInt(digit7))) || (isNaN(parseInt(digit8))) || (isNaN(parseInt(digit9))) || (isNaN(parseInt(digit10))) || (isNaN(parseInt(digit11))) || (isNaN(parseInt(digit12)))) {
        alert("الرقم المدنى خطأ");
        return false;
    }
    else {

        var vresult = ((parseInt(digit1) * 2) + (parseInt(digit2)) + (parseInt(digit3) * 6) + (parseInt(digit4) * 3) + (parseInt(digit5) * 7) + (parseInt(digit6) * 9) + (parseInt(digit7) * 10) + (parseInt(digit8) * 5) + (parseInt(digit9) * 8) + (parseInt(digit10) * 4) + (parseInt(digit11) * 2));

        var vresult1 = (vresult / 11);

        var tvresult1 = Math.floor(vresult1);

        var tvresult2 = (tvresult1 * 11);
        var totvresult = (vresult - tvresult2);
        var alltotvresult = (11 - totvresult);

        if (alltotvresult == (parseInt(digit12))) {
            // window.location.href=url;
            return true;
        }
        else {
        	alert("الرقم المدنى خطأ");

            return false;
        }
    }

}

// ///////////////////
function checkcivilidEN(civil) {

    var strcivil = new String(civil);
    var len = strcivil.length;
    var digit1 = strcivil.substr(0, 1);
    var digit2 = strcivil.substr(1, 1);
    var digit3 = strcivil.substr(2, 1);
    var digit4 = strcivil.substr(3, 1);
    var digit5 = strcivil.substr(4, 1);
    var digit6 = strcivil.substr(5, 1);
    var digit7 = strcivil.substr(6, 1);
    var digit8 = strcivil.substr(7, 1);
    var digit9 = strcivil.substr(8, 1);
    var digit10 = strcivil.substr(9, 1);
    var digit11 = strcivil.substr(10, 1);
    var digit12 = strcivil.substr(11, 1);

    if (civil == "") {
        alert('Please, insert your Civil ID');
        return false;
    }

    if ((!(len == 12)) || (isNaN(parseInt(digit1))) || (isNaN(parseInt(digit2))) || (isNaN(parseInt(digit3))) || (isNaN(parseInt(digit4))) || (isNaN(parseInt(digit5))) || (isNaN(parseInt(digit6))) || (isNaN(parseInt(digit7))) || (isNaN(parseInt(digit8))) || (isNaN(parseInt(digit9))) || (isNaN(parseInt(digit10))) || (isNaN(parseInt(digit11))) || (isNaN(parseInt(digit12)))) {
        alert("Wrong Civil ID");
        return false;
    }
    else {

        var vresult = ((parseInt(digit1) * 2) + (parseInt(digit2)) + (parseInt(digit3) * 6) + (parseInt(digit4) * 3) + (parseInt(digit5) * 7) + (parseInt(digit6) * 9) + (parseInt(digit7) * 10) + (parseInt(digit8) * 5) + (parseInt(digit9) * 8) + (parseInt(digit10) * 4) + (parseInt(digit11) * 2));

        var vresult1 = (vresult / 11);

        var tvresult1 = Math.floor(vresult1);

        var tvresult2 = (tvresult1 * 11);
        var totvresult = (vresult - tvresult2);
        var alltotvresult = (11 - totvresult);

        if (alltotvresult == (parseInt(digit12))) {
            // window.location.href=url;
            return true;
        }
        else {
            alert("Please, insert a valid Civil ID");
            return false;
        }
    }

}

// //////////////

function openNewWind(url, windowName) {

    var height = screen.availHeight;
    var width = screen.availWidth;
    windowName = 'NewTextWindowName';
    var prop = "resizable=yes,top=0,left=0,height=" + height + ",width=" + width + ",toolbar=no,scrollbars=yes";
    window.open(url, windowName, prop);

    return;
}

function loadValues()// load the values into the form fields based on the
						// passed
// parameters.
{

    // alert(varName.length);
    for (var i = 0;i < varName.length;i++) {

        try {

            // alert(varName[i]);
            eval("var elm=document.forms[0]." + varName[i]);

            if (elm.type == 'text' && varVal[i] != 'null' || elm.type == 'textarea') {
                elm.value = varVal[i];
            }
            else if (elm.type == 'select-one' && varVal[i] != 'null') {

                for (var j = 0;j < elm.length;j++) {
                    if (elm.options[j].value == varVal[i])
                        elm.options[j].selected = true;
                }
            }
            else if (elm.type == 'Submit' || elm.type == 'reset' || elm.type == 'button' || elm.type == 'password') {
            }
            else {
                for (var j = 0;j < elm.length;j++) {
                    eval("var radioVal=document.forms[0]." + varName[i] + "[" + j + "]" + ".value");
                    if (radioVal == varVal[i])
                        eval("document.forms[0]." + varName[i] + "[" + j + "]" + ".click()");

                }

            }

        }
        catch (e) {
        }

    }

}

function checkDate(date)// To check if the date is a valid date.
{
    strDate = formatDate(date.value);

    if (strDate.length > 0) {
        var dateregex = /^[ ]*[0]?(\d{1,2})\/(\d{1,2})\/(\d{4,})[ ]*$/;
        var match = strDate.match(dateregex);
        if (match) {
            var tmpdate = new Date(match[3], parseInt(match[1], 10) - 1, match[2]);
            if (tmpdate.getDate() == parseInt(match[2], 10) && tmpdate.getFullYear() == parseInt(match[3], 10) && (tmpdate.getMonth() + 1) == parseInt(match[1], 10)) {
                return true;
            }
        }
        alert("من فضلك ادخل أرقام صحيحة لليوم والشهر والسنة");
        date.focus();
        return false;
    }
    else {
        return true;
    }
}

function before(fromDateField, toDateField)// To check if fromdateField value
											// is less than
// the toDateField value
{
    fromDateVal = new Date(formatDate(fromDateField.value));
    toDateVal = new Date(formatDate(toDateField.value));

    if (Date.parse(fromDateVal) > Date.parse(toDateVal)) {
        alert("تاريخ الانتهاء لابد و أن يكون أكبر من تاريخ البدء");
        return false;

    }
    else {
        return true;
    }

}

function formatDate(inputDate)// To formate the Date so that it will be in
								// available
// format for checking for validation in the checkDate function
{
    var result;
    var array = inputDate.split("/");
    result = array[1] + "/" + array[0] + "/" + array[2];
    return result;
}

function getError(code)// returns the error message based on the error Code
						// passed
{

    var error = "error";

    switch (code) {

        case 8:
            error = "لابد من اختيار اسم المدعي ";
            break;

        case 9:
            error = "لابد من اختيار اسم المدعي عليه";
            break;

        case 10:
            error = "لابد من ادخال رقم الحساب";
            break;

        case 11:
            error = "لابد من اختيار البنك";
            break;

        case 12:
            error = "لقد تم تغيير اسم المستخدم أو رقم القضية بعد اختيار المدعى أو المدعى ىليه";
            break;

        case 13:
            error = "لابد من ادخال اسم المستخدم أولا";
            break;

        case 14:
            error = "لابد من ادخال رقم القضية أولا";
            break;

        case 15:
            error = "لا بد من اختيار فرع البنك";
            break;

        case 20:
            error = "لا يوجد نتيجة للبحث";

    }

    return error;

}

function trim(aStr) {
    return aStr.replace(/^\s{1,}/, "").replace(/\s{1,}$/, "");
}

function validateRequiredFields(f) {
    for (var i = 0;i < f.elements.length;i++) {
        e = f.elements[i];

        /*
		 * Split apart the arguments in to a 2 dimensional array! format -
		 * Failure Alert Label # Required (true|false)
		 */

        a = e.id.split("#");

        // checks input types - :"text", "select-one", "select-multiple",
		// "textarea", ["checkbox", "radio"]
        if (a[1] == "true") {
            switch (e.type) {
                case "password":
                    if (trim(e.value) == "") {
                        alert("لا بد من ادخال " + a[0]);
                        e.focus();
                        return false;
                    }
                break ;

                case "text":
                    if (trim(e.value) == "") {
                        alert("لا بد من ادخال " + a[0]);
                        e.focus();
                        return false;
                    }
                break ;
                case "textarea":
                    if (trim(e.value) == "") {
                        alert(a[0] + " is a required field. \n\nPlease enter text.");
                        e.focus();
                        return false;
                    }
                break ;
                case "select-one":
                    if (e.selectedIndex == 0) {
                        alert(a[0] + " حقل مطلوب \n\nاختر قيمة ");
                        e.focus();
                        return false;
                    }
                break ;
                case "select-multiple":
                    if (e.selectedIndex ==  - 1) {
                        alert(a[0] + " is a required field. \n\nPlease select an entry.");
                        e.focus();
                        return false;
                    }
                break ;
                case "radio":
                    hasChecked = false;
                    p = eval("e.form." + e.name);
                    for (var r = 0;r < p.length;r++) {
                        if (p[r].checked) {
                            hasChecked = true;
                        };
                    }

                    if (!hasChecked) {
                        alert(a[0] + " حقل مطلوب \n\nاختر قيمة ");
                        e.focus();
                        return hasChecked;
                    }
                break ;

                default :
                    break ;
            }
        }
    }

    return true;
}

function doSubmit(f, v) {

    if (v) {
        if (validateRequiredFields(f)) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        f.submit();
    }
}

function chMail(fie) {
    var d = fie.value;
    if (d != "") {
        if ((d.indexOf("@") ==  - 1) || (d.indexOf(".") ==  - 1) || d.indexOf("@") > d.lastIndexOf(".")) {
            alert("من فضلك أدخل بريد ألكترونى صحيح");
            fie.focus();
            return false;
        }
        else {
            return true;
        }
    }
    else 
    return true;
}

function chNumeric(fie, name) {
    var anum = '/(^\d+$)|(^\d+\.\d+$)/';
    var x = fie.value;
    if (x != "") {
        if (anum.test(x)) {
            return true;
        }
        else {
            alert(name + "\nادخل ارقام فقط");
            fie.focus();
            return false;
        }
    }
    else 
    return true;
}

function chPassword(f1, f2) {
    var alpha = f1.value.search(/[a-z]|[A-Z]/);
    var numer = f1.value.search(/\d/);

    if (alpha ==  - 1) {
        alert("لابد و أن تحتوى كلمة السر على حروف ");
        f1.select();
        return false;
    }
    else if (numer ==  - 1) {
        alert("لابد و أن تحتوى كلمة السر على أرقام أيضا");
        f1.select();
        return false;
    }
    else if (f1.value.length < 10) {
        alert("يجب ألا تقل كلمة السر عن ( 10 ) أحرف");
        f1.select();
        return false;
    }
    else if (f1.value != f2.value) {
        alert("كلمة السر غير متوافقة");
        f2.select();
        return false;
    }
    else {
        return true;
    }

}

function chPassword2(f0, f1, f2) {
    var alpha = f1.value.search(/[a-z]|[A-Z]/);
    var numer = f1.value.search(/\d/);

    if (f0.value == f1.value) {
        alert("يجب أن تختلف كلمة المرور الجديدة عن كلمة المرور القديمة ");
        f1.select();
        return false;
    }
    else if (alpha ==  - 1) {
        alert("لابد و أن تحتوى كلمة السر على حروف ");
        f1.select();
        return false;
    }
    else if (numer ==  - 1) {
        alert("لابد و أن تحتوى كلمة السر على أرقام أيضا");
        f1.select();
        return false;
    }
    else if (f1.value.length < 10) {
        alert("يجب ألا تقل كلمة السر عن ( 10 ) أحرف");
        f1.select();
        return false;
    }
    else if (f1.value != f2.value) {
        alert("كلمة السر غير متوافقة");
        f2.select();
        return false;
    }
    else {
        return true;
    }

}

function chYear(f1) {
    if (f1.value.length < 4) {
        alert("Please. This must be 4 numbers.");
        f1.focus();
        return false;
    }
    else 
        return true;
}

// /*************************************************
function collectDate(formname) {
    if (formname.tmonth.value < 10) {
        tm = "0" + formname.tmonth.value;
    }
    else {
        tm = formname.tmonth.value;
    }
    if (formname.tday.value < 10) {
        td = "0" + formname.tday.value;
    }
    else {
        td = formname.tday.value;
    }
    if (formname.fmonth.value < 10) {
        fm = "0" + formname.fmonth.value;
    }
    else {
        fm = formname.fmonth.value;
    }
    if (formname.fday.value < 10) {
        fd = "0" + formname.fday.value;
    }
    else {
        fd = formname.fday.value;
    }

    end = (formname.tyear.value + "-" + tm + "-" + td);
    st = (formname.fyear.value + "-" + fm + "-" + fd);
    formname.tDate.value = end;
    formname.fDate.value = st;

    if (st > end) {
        alert("The To Date Must Be >= The From Date !");
        return false;
    }
    else 
    return true;
}

ns6_index = 0;

function show(e) {
    e.style.display = '';
}

function collapse() {
    for (var i = 0;i < document.images.length;i++) {
        if (document.images[i].className == "folding") {
            source = document.images[i].parentElement.all;
            source[0].src = img1.src;
            source[2].style.display = "none";
        }
    }
}

function expand() {
    for (var i = 0;i < document.images.length;i++) {
        if (document.images[i].className == "folding") {
            source = document.images[i].parentElement.all;
            source[0].src = img2.src;
            source[2].style.display = '';
        }
    }
}

function change(e) {
    // 1
    if (!document.all && !document.getElementById)
        return ;

    if (!document.all && document.getElementById)
        ns6_index = 1;

    var source = document.getElementById && !document.all ? e.target : event.srcElement;
    if (source.className == "folding") {
        // 2
        var source2 = document.getElementById && !document.all ? source.parentNode.childNodes : source.parentElement.all;
        if (source2[2 + ns6_index].style.display == "none") {
            // 3
            source2[0].src = img2.src;
            source2[2 + ns6_index].style.display = '';
        }
        // \3
        else {
            // 4
            source2[0].src = img1.src;
            source2[2 + ns6_index].style.display = "none";
        }
        // \4
    }
    // \2
}
// \1

var Open = "";
var Closed = "";
var Bullet = "";
var ActiveBullet = "";
var vmenusign = "";
var ActiveImg = new Object();
vmenuoutline = new Object();
vmenuoutline = new Object();
var mIndex = 1;
var sIndex = 1;
var vLink;

/** ********************************************************************* */
function openLink(what, Img) {
    // location=what;
    ActiveImg.src = Bullet.src;
    Img.src = ActiveBullet.src;
    ActiveImg = Img;
}

/** ********************************************************************* */
function preload() {
    if (document.images) {
        Open = new Image(16, 13);
        Closed = new Image(16, 13);
        Bullet = new Image(8, 8);
        ActiveBullet = new Image(8, 8);
        Open.src = "/Images/ActiveLink.jpg";
        Closed.src = "/Images/bullet.jpg";
        Bullet.src = "/Images/bullet.jpg";
        ActiveBullet.src = "/Images/ActiveLink.jpg";

    }
}

/**/
function showhide(what, what2) {
    if (what.style.display == "none") {
        what.style.display = "";
        what2.src = Open.src;

        for (var i = 1;;i++) {
            try {

                if (eval(("menu" + i + "outline")) != what) {
                    eval("menu" + i + "outline.style.display='none' ");
                    eval("menu" + i + "sign.src=Closed.src");
                }
            }
            catch (e) {
                break;
            }
        }
    }
    else {
        // end if (what.style.display=='none')
        what.style.display = "none";
        what2.src = Closed.src;
    }
}
// =======================================
function GetMenuName() {
    vmenuoutline = menu1outline;
    vmenusign = menu1sign;
}
// ============================================
function hideall() {
    for (var i = 1;;i++) {
        try {
            eval("menu" + i + "outline.style.display='none' ");
            eval("menu" + i + "sign.src=Closed.src");
        }
        catch (e) {
            break;
        }
    }
}

function collect(f, hfield) {
    if (eval("document.intercom." + f + "year.value.length<4") && !eval("document.intercom." + f + "year.value.length==0")) {
        alert("Please. The year must be 4 numbers.");
        eval("document.intercom." + f + "year.focus()");
        return false;
    }
    else {
        if (eval("document.intercom." + f + "month.value <10")) {
            tm = "0" + eval("document.intercom." + f + "month.value");
        }
        else {
            tm = eval("document.intercom." + f + "month.value");
        }
        if (eval("document.intercom." + f + "month.value<10")) {
            td = "0" + eval("document.intercom." + f + "day.value");
        }
        else {
            td = eval("document.intercom." + f + "day.value");
        }
        var end = eval("document.intercom." + f + "year.value") + "-" + tm + "-" + td;
        eval("document.intercom." + hfield + ".value = '" + end + "'");
        return true;
    }
}

function order_it(elem) {
    for (var i = 0;i < elem.length - 1;i++) {
        for (var j = i + 1;j < elem.length;j++) {
            x = elem.options[i].text;
            xx = elem.options[i].value;
            y = elem.options[j].text;
            if (x > y) {
                elem.options[i].text = elem.options[j].text;
                elem.options[i].value = elem.options[j].value;
                elem.options[j].text = x;
                elem.options[j].value = xx;
            }
        }
    }
}

function selectOrder(elem, v) {
    for (var i = 0;i < elem.length - 1;i++) {
        for (var j = i + 1;j < elem.length;j++) {
            x = elem.options[i].text;
            xx = elem.options[i].value;
            y = elem.options[j].text;
            if (x > y) {
                elem.options[i].text = elem.options[j].text;
                elem.options[i].value = elem.options[j].value;
                elem.options[j].text = x;
                elem.options[j].value = xx;
            }
        }
    }
    
    if(v != null){
	    for ( var i = 0; i < elem.options.length; i++ ) {
	        if ( elem.options[i].value == v ) {
	            elem.options[i].selected = true;
	            return;
	        }
	    }
    }
}


function fillComYear(comYear, space, selInd) {
    comYear.options.length = 0;
    var curYear = new Date().getFullYear();
    for (var i = 0;i < space;i++) {
        comYear.options[i] = new Option(curYear - i, ((curYear - (i + 2000)) >= 10 ? '' : '0') + new String(curYear - (i + 2000)));
        if (comYear.options[i].value == selInd) {
            comYear.options[i].selected = true;
        }
    }
}

function chMailNoAlert(fie) {
    var d = fie.value;
    if (d != "") {
        if ((d.indexOf("@") ==  - 1) || (d.indexOf(".") ==  - 1) || d.indexOf("@") > d.lastIndexOf(".")) {
            fie.focus();
            return false;
        }
        else {
            return true;
        }
    }
    else {
        return true;
    }
}

function checkcivilidNoAlert(civil) {

    var strcivil = new String(civil);
    var len = strcivil.length;
    var digit1 = strcivil.substr(0, 1);
    var digit2 = strcivil.substr(1, 1);
    var digit3 = strcivil.substr(2, 1);
    var digit4 = strcivil.substr(3, 1);
    var digit5 = strcivil.substr(4, 1);
    var digit6 = strcivil.substr(5, 1);
    var digit7 = strcivil.substr(6, 1);
    var digit8 = strcivil.substr(7, 1);
    var digit9 = strcivil.substr(8, 1);
    var digit10 = strcivil.substr(9, 1);
    var digit11 = strcivil.substr(10, 1);
    var digit12 = strcivil.substr(11, 1);

    if (civil == "") {
        return false;
    }

    if ((!(len == 12)) || (isNaN(parseInt(digit1))) || (isNaN(parseInt(digit2))) || (isNaN(parseInt(digit3))) || (isNaN(parseInt(digit4))) || (isNaN(parseInt(digit5))) || (isNaN(parseInt(digit6))) || (isNaN(parseInt(digit7))) || (isNaN(parseInt(digit8))) || (isNaN(parseInt(digit9))) || (isNaN(parseInt(digit10))) || (isNaN(parseInt(digit11))) || (isNaN(parseInt(digit12)))) {
        return false;
    }
    else {

        var vresult = ((parseInt(digit1) * 2) + (parseInt(digit2)) + (parseInt(digit3) * 6) + (parseInt(digit4) * 3) + (parseInt(digit5) * 7) + (parseInt(digit6) * 9) + (parseInt(digit7) * 10) + (parseInt(digit8) * 5) + (parseInt(digit9) * 8) + (parseInt(digit10) * 4) + (parseInt(digit11) * 2));

        var vresult1 = (vresult / 11);

        var tvresult1 = Math.floor(vresult1);

        var tvresult2 = (tvresult1 * 11);
        var totvresult = (vresult - tvresult2);
        var alltotvresult = (11 - totvresult);

        if (alltotvresult == (parseInt(digit12))) {
            return true;
        }
        else {
            return false;
        }
    }
}

function stopPaymentService() {
    var dte = new Date();
    var currentHour = dte.getHours();
    var currentDay = dte.getDay();
    var dailyStopFrom = 2;// daily backup Starts at this hour (0-23)
    var dailyStopUntil = 5;// daily backup Ends at this hour (0-23)
    var tempStopFrom = 0;// Temporary test or backup Starts at this hour
							// (0-23)
    var tempStopUntil = 24;// Temporary test or backup Ends at this hour (0-24)
    var tempStopDay = 3;// Temporary test or backup day of week (from
						// 0-6)(SUN-SAT)
    var useTemp = false;

    if (currentHour >= dailyStopFrom && currentHour < dailyStopUntil) {
        return true;
    }
    else {
        if (useTemp == true) {
            if (currentHour >= tempStopFrom && currentHour < tempStopUntil && currentDay == tempStopDay)
                return true;
        }
        return false;
    }

}
function onlyNumbers(evt) {
    var e = evt;
    var charCode = e.which || e.keyCode;
    if ( charCode == 13 || charCode == 8 || charCode == 46) return true;
    if ( charCode < 48 || charCode > 57 ) return false;
    return true;
}

//31Aug15 created by magdy
function onlyLetters(evt) {
    var e = evt;
    var charCode = e.which || e.keyCode;
    if ( charCode == 13 || charCode == 8 || charCode == 46) return true;
    if ( charCode < 48 || charCode > 57 ) return true;
    return false;
}

function onlyDecimals(evt) {
    var e = evt;
    var charCode = e.which || e.keyCode;
    if ( charCode == 13 || charCode == 8 || charCode == 46) return true;
    if ( charCode < 46 || charCode > 57 || charCode == 47 ) return false;
    return true;
}

function serverDown() {
    return false;
}

function printMe(url) {
    var printWindow = window.open( url, 'Print', 'left=200, top=200, toolbar=0');
    printWindow.addEventListener('load', function(){
        printWindow.print();
        printWindow.close();
    }, true);
}

function getDateDiff(date1, date2) {
    var date1Array = date1.value.split("-");
    var date2Array = date2.value.split("-");
    date1Val = new Date(date1Array[0], date1Array[1] - 1, date1Array[2]);
    date2Val = new Date(date2Array[0], date2Array[1] - 1, date2Array[2]);
    var Days = (date2Val - date1Val) / DAY;
    if(date1Val > date2Val) {
    	alert('عفوا !! يجب أن يكون تاريخ بدء البحث أصغر من تاريخ نهاية البحث');
    	return false;
    }else if (Days > DAYDIFFMEETROLE) {
        alert("نأسف لا يمكنك البحث خلال مدة تزيد عن " + DAYDIFFMEETROLE + " يوما");
        return false;
    }
    else 
        return true;

}

function getDateDiff(date1, date2, allowedDays) {
    var date1Array = date1.split("-");
    var date2Array = date2.split("-");
    date1Val = new Date(date1Array[0], date1Array[1] - 1, date1Array[2]);
    date2Val = new Date(date2Array[0], date2Array[1] - 1, date2Array[2]);
    var diffDays = (date2Val - date1Val) / DAY;
    if(diffDays < 0 || diffDays > allowedDays){
    	return false;
    }else{
    	return true;
    }
}
function validateEmail(email) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
} 