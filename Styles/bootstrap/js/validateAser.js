// Encoding: Windows-1256

var currentYearFull = new Date().getFullYear();
			function showDiv(){
				var num = $('.clonedInput').length;
				
				
				if(document.getElementById('title' + num).value == 1){
					document.getElementById('normal' + num).style.display = 'block';
					document.getElementById('org' + num).style.display = 'none';
					document.getElementById('address' + num).style.display = 'block';
					document.getElementById('WAKDATA' + num).style.display = 'block';
					selectOrder(document.getElementById('natCode' + num), '101');
					selectOrder(document.getElementById('govCode' + num), '0');
					document.getElementById('area' + num).innerHTML = "";
					selectOrder(document.getElementById('wakYear' + num), currentYearFull);
				}else if(document.getElementById('title' + num).value == 2){
					document.getElementById('normal' + num).style.display = 'none';
					document.getElementById('org' + num).style.display = 'block';
					document.getElementById('address' + num).style.display = 'block';
					document.getElementById('WAKDATA' + num).style.display = 'block';
					selectOrder(document.getElementById('natCode' + num), '101');
					selectOrder(document.getElementById('govCode' + num), '0');
					document.getElementById('area' + num).innerHTML = "";
					selectOrder(document.getElementById('wakYear' + num), currentYearFull);
				}else{
					document.getElementById('normal' + num).style.display = 'none';
					document.getElementById('org' + num).style.display = 'none';
					document.getElementById('address' + num).style.display = 'none';
					document.getElementById('WAKDATA' + num).style.display = 'none';
				}
			
			}
			
			
			function showDivEdit(){
				var num = $('.clonedInput').length;
				
				
				if(document.getElementById('title' + num).value == 1){
					document.getElementById('normal' + num).style.display = 'block';
					document.getElementById('org' + num).style.display = 'none';
					document.getElementById('address' + num).style.display = 'block';
					document.getElementById('WAKDATA' + num).style.display = 'block';
					//selectOrder(document.getElementById('natCode' + num), '101');
					//selectOrder(document.getElementById('govCode' + num), '0');
					//document.getElementById('area' + num).innerHTML = "";
					//selectOrder(document.getElementById('wakYear' + num), currentYearFull);
				}else if(document.getElementById('title' + num).value == 2){
					document.getElementById('normal' + num).style.display = 'none';
					document.getElementById('org' + num).style.display = 'block';
					document.getElementById('address' + num).style.display = 'block';
					document.getElementById('WAKDATA' + num).style.display = 'block';
					//selectOrder(document.getElementById('natCode' + num), '101');
					//selectOrder(document.getElementById('govCode' + num), '0');
					//document.getElementById('area' + num).innerHTML = "";
					//selectOrder(document.getElementById('wakYear' + num), currentYearFull);
				}else{
					document.getElementById('normal' + num).style.display = 'none';
					document.getElementById('org' + num).style.display = 'none';
					document.getElementById('address' + num).style.display = 'none';
					document.getElementById('WAKDATA' + num).style.display = 'none';
				}
			
			}

			function showDiv_ased(){
				
				var num = $('.clonedInput').length;
				
				if(document.getElementById('title' + num).value == 1){
					document.getElementById('normal' + num).style.display = 'block';
					document.getElementById('org' + num).style.display = 'none';
					document.getElementById('address' + num).style.display = 'block';
					selectOrder(document.getElementById('natCode' + num), '101');
					selectOrder(document.getElementById('govCode' + num), '0');
					document.getElementById('area' + num).innerHTML = "";
				}else if(document.getElementById('title' + num).value == 2){
					document.getElementById('normal' + num).style.display = 'none';
					document.getElementById('org' + num).style.display = 'block';
					document.getElementById('address' + num).style.display = 'block';
					selectOrder(document.getElementById('natCode' + num), '101');
					selectOrder(document.getElementById('govCode' + num), '0');
					document.getElementById('area' + num).innerHTML = "";
				}else{
					document.getElementById('normal' + num).style.display = 'none';
					document.getElementById('org' + num).style.display = 'none';
					document.getElementById('address' + num).style.display = 'none';
				}
			
			}
			

			function showDivEdit_ased(){
				
				var num = $('.clonedInput').length;
				
				if(document.getElementById('title' + num).value == 1){
					document.getElementById('normal' + num).style.display = 'block';
					document.getElementById('org' + num).style.display = 'none';
					document.getElementById('address' + num).style.display = 'block';
					//selectOrder(document.getElementById('natCode' + num), '101');
					//selectOrder(document.getElementById('govCode' + num), '0');
					//document.getElementById('area' + num).innerHTML = "";
				}else if(document.getElementById('title' + num).value == 2){
					document.getElementById('normal' + num).style.display = 'none';
					document.getElementById('org' + num).style.display = 'block';
					document.getElementById('address' + num).style.display = 'block';
					//selectOrder(document.getElementById('natCode' + num), '101');
					//selectOrder(document.getElementById('govCode' + num), '0');
					//document.getElementById('area' + num).innerHTML = "";
				}else{
					document.getElementById('normal' + num).style.display = 'none';
					document.getElementById('org' + num).style.display = 'none';
					document.getElementById('address' + num).style.display = 'none';
				}
			
			}

			function showCCo(){
				var num = $('.clonedInput').length;
			   if(document.getElementById('wakYear' + num).value < 2013){
				   document.getElementById('wakProxDiv' + num).style.display = "block";
					document.getElementById('wakCCoDiv' + num).style.display = "none";
				  
			   } else {
				   
				   document.getElementById('wakProxDiv' + num).style.display = "none";
				   document.getElementById('wakCCoDiv' + num).style.display = "block";
			   }
			}



        


	        function validateData() {
	        
	         
	        var num = $('.clonedInput').length;
	        for(var i=1; i<= num;i++){
	        	if (isNaN(document.getElementById('title' + num).value) || document.getElementById('title' + num).value == 0) {
	        		alert('نرجو منكم التقيد بالإختيارات المتاحة');
	        		return false;
	        	}else{
	        		if(document.getElementById('title' + num).value == 1){
	        		
	        		if (isNaN(document.getElementById('natCode' + num).value)) {
		                alert('الرجاء اختيار الجنسية');
		                document.getElementById('natCode' + num).focus();
		                return false;
	        		}
	           
		            if(!checkcivilid(document.getElementById('civilID' + num).value)){
		                document.getElementById('civilID' + num).focus();
		                document.getElementById('civilID' + num).select();
		                return false;
		            }
	           
	           
		            if (trim(document.getElementById('civilID' + num).value) == "" || isNaN(document.getElementById('civilID' + num).value)) {
		                alert('الرجاء ادخال الرقم المدني');
		                document.getElementById('civilID' + num).focus();
		                return false;
		            }
	            
		            if (trim(document.getElementById('firstName' + num).value) == "" ) {
		                alert('الرجاء ادخال الأسم الاول');
		                document.getElementById('firstName' + num).focus();
		                return false;
		            }
	            
	            //goodbye magdy
		             if ( !isNaN(document.getElementById('firstName' + num).value)) {
	                    alert('الاسم الأول يجب ألا يتكون من أرقام');
	                    document.getElementById('firstName' + num).select();
	                    document.getElementById('firstName' + num).focus();
	                    return false;
	                }
	            
	             if (trim(document.getElementById('secondName' + num).value) == "" ) {
	                alert('الرجاء ادخال الأسم الثاني');
	                document.getElementById('secondName' + num).focus();
	                return false;
	            }
	            
	            if (trim(document.getElementById('familyName' + num).value) == "" ) {
	                alert('الرجاء ادخال اللقب');
	                document.getElementById('familyName' + num).focus();
	                return false;
	            }
	            
	            if (trim(document.getElementById('addrNum' + num).value) == "" || isNaN(document.getElementById('addrNum' + num).value)) {
	                //alert('الرجاء ادخال الرقم الآلي للعنوان');
	                //document.getElementById('addrNum' + num).focus();
	                //return false;
	            	document.getElementById('addrNum' + num).value = "-";
	            }
	            
	            if (trim(document.getElementById('govCode' + num).value) == '' 
	            	|| trim(document.getElementById('area' + num).value) == ''
	            	|| trim(document.getElementById('block' + num).value) == ''
	            	)       	
	            	
	            	 {
	                alert('الرجاء ادخال العنوان كاملا');
	                document.getElementById('addrNum' + num).focus();
	                return false;
	            }
	            
	            if (trim(document.getElementById('building' + num).value) == '') {
	                //alert('الرجاء ادخال رقم الوكالة');
	                //document.getElementById('wakNum' + num).focus();
	                //return false;
	            	document.getElementById('building' + num).value = "-";
	            }
	            
	        	if (trim(document.getElementById('wakNum' + num).value) == ''
	        		 || isNaN(document.getElementById('wakNum' + num).value)) {
	                alert('الرجاء ادخال رقم الوكالة');
	                document.getElementById('wakNum' + num).focus();
	                return false;
	            }
	            
	            if (trim(document.getElementById('wakYear' + num).value) == ''
	        		 || isNaN(document.getElementById('wakYear' + num).value)) {
	                alert('الرجاء اختيار سنة الوكالة');
	                document.getElementById('wakYear' + num).focus();
	                return false;
	            }
	            
	            if (trim(document.getElementById('wakYear' + num).value) < '2013')
	            {
		            if ( trim(document.getElementById('wakProx' + num).value) == '' ) {
		                alert('الرجاءادخال جلد الوكالة');
		                document.getElementById('wakProx' + num).focus();
		                return false;
		            }
	            }else {
	            	if ( trim(document.getElementById('wakCCo' + num).value) == '' ) {
		                alert('الرجاءادخال جهة اصدار الوكالة');
		                document.getElementById('wakCCo' + num).focus();
		                return false;
	            	}
	            }
	            
	            
	            
	            
	                 
	            
	            
	            
	            
	             
	//---------------------------------------------------------------------------------            
	        		}else if(document.getElementById('title' + num).value == 2){
	        		
			        		
			            if (trim(document.getElementById('orgCivilID' + num).value) == "" || isNaN(document.getElementById('orgCivilID' + num).value)) {
			               // alert('الرجاء ادخال الرقم المدني');
			               // document.getElementById('orgCivilID' + num).focus();
			               // return false;
			            	document.getElementById('orgCivilID' + num).value = "-";
		
			            }
			            
			            if (trim(document.getElementById('orgName' + num).value) == "" ) {
			                alert('الرجاء ادخال الأسم ');
			                document.getElementById('orgName' + num).focus();
			                return false;
			            }
			            
			          
			            
			            if (trim(document.getElementById('addrNum' + num).value) == "" || isNaN(document.getElementById('addrNum' + num).value)) {
			               // alert('الرجاء ادخال الرقم الآلي للعنوان');
			               // document.getElementById('addrNum' + num).focus();
			               // return false;
			            	document.getElementById('addrNum' + num).value = "-";
			            }
			            
			            if (trim(document.getElementById('govCode' + num).value) == '' 
			            	|| trim(document.getElementById('area' + num).value) == ''
			            	|| trim(document.getElementById('block' + num).value) == ''
			            	
			            	 )       	
			            	
			            	 {
			                alert('الرجاء ادخال العنوان كاملا');
			                document.getElementById('addrNum' + num).focus();
			                return false;
			            }
			            if (trim(document.getElementById('building' + num).value) == '') {
			                //alert('الرجاء ادخال رقم الوكالة');
			                //document.getElementById('wakNum' + num).focus();
			                //return false;
			            	document.getElementById('building' + num).value = "-";
			            }
			        		
			        	if (trim(document.getElementById('wakNum' + num).value) == ''
			        		 || isNaN(document.getElementById('wakNum' + num).value)) {
			                alert('الرجاء ادخال رقم الوكالة');
			                document.getElementById('wakNum' + num).focus();
			                return false;
			            }
			            
			            if (trim(document.getElementById('wakYear' + num).value) == ''
			        		 || isNaN(document.getElementById('wakYear' + num).value)) {
			                alert('الرجاء اختيار سنة الوكالة');
			                document.getElementById('wakYear' + num).focus();
			                return false;
			            }
			            
			            if (trim(document.getElementById('wakYear' + num).value) < '2013')
			            {
				            if ( trim(document.getElementById('wakProx' + num).value) == '' ) {
				                alert('الرجاءادخال جلد الوكالة');
				                document.getElementById('wakProx' + num).focus();
				                return false;
				            }
			            }else {
			            	if ( trim(document.getElementById('wakCCo' + num).value) == '' ) {
				                alert('الرجاءادخال جهة اصدار الوكالة');
				                document.getElementById('wakCCo' + num).focus();
				                return false;
			            	}
			            }
			        		
	        		}else{
		        		alert('نرجو منكم التقييد بالإختيارات المتاحة');
		        		return false;
	        		}
	        	}
	        	
	        }
				
	            	            
	            document.getElementById("submit_button").disabled = true;
	            //document.frmCourt.target = "_parent";
	            return true;
	        }
	        
	        
	        function validateData_Ased() {
		        
		        var num = $('.clonedInput').length;
		        for(var i=1; i<= num;i++){
		        	if (isNaN(document.getElementById('title' + num).value) || document.getElementById('title' + num).value == 0) {
		        		//alert('نرجو منكم التقييد بالإختيارات المتاحة');
		        		document.getElementById('title1Warning').style.display="block";
		        		return false;
		        	}else{
		        		if(document.getElementById('title' + num).value == 1){
		        		
		        		if (isNaN(document.getElementById('natCode' + num).value)) {
		                alert('الرجاء اختيار الجنسية');
		                document.getElementById('natCode' + num).focus();
		                return false;
		            }
		           
		        		
		        		 if(!checkcivilid(document.getElementById('civilID' + num).value)){
		 	                document.getElementById('civilID' + num).focus();
		 	                document.getElementById('civilID' + num).select();
		 	                return false;
		 	            }
		        		 
		        		 
		            if (trim(document.getElementById('civilID' + num).value) == "" || isNaN(document.getElementById('civilID' + num).value)) {
		                alert('الرجاء ادخال الرقم المدني');
		                document.getElementById('civilID' + num).focus();
		                return false;
		            }
		            
		            if (trim(document.getElementById('firstName' + num).value) == "" ) {
		                alert('الرجاء إدخال الاسم الأول');
		                document.getElementById('firstName' + num).focus();
		                return false;
		            }
		            
		             if (trim(document.getElementById('secondName' + num).value) == "" ) {
		                alert('الرجاء إدخال الاسم الثاني');
		                document.getElementById('secondName' + num).focus();
		                return false;
		            }
		            
		            if (trim(document.getElementById('familyName' + num).value) == "" ) {
		                alert('الرجاء إدخال اللقب');
		                document.getElementById('familyName' + num).focus();
		                return false;
		            }
		            
		            if (trim(document.getElementById('addrNum' + num).value) == "" || isNaN(document.getElementById('addrNum' + num).value)) {
		                //alert('الرجاء ادخال الرقم الآلي للعنوان');
		                //document.getElementById('addrNum' + num).focus();
		                //return false;
		                document.getElementById('addrNum' + num).value = "-";
		            }
		            
		            if (trim(document.getElementById('govCode' + num).value) == '' 
		            	|| trim(document.getElementById('area' + num).value) == ''
		            	|| trim(document.getElementById('block' + num).value) == ''
		            
		            	
		            	 )       	
		            	
		            	 {
		                alert('الرجاء إدخال العنوان كاملا');
		                document.getElementById('addrNum' + num).focus();
		                return false;
		            }
		            
		            if (trim(document.getElementById('building' + num).value) == '') {
		                //alert('الرجاء ادخال رقم الوكالة');
		                //document.getElementById('wakNum' + num).focus();
		                //return false;
		            	document.getElementById('building' + num).value = "-";
		            }
		        		
		        	
		//---------------------------------------------------------------------------------            
		        		}else if(document.getElementById('title' + num).value == 2){
		        		
				        		
				            if (trim(document.getElementById('orgCivilID' + num).value) == "" || isNaN(document.getElementById('orgCivilID' + num).value)) {
				                //alert('الرجاء ادخال الرقم المدني');
				                //document.getElementById('orgCivilID' + num).focus();
				                //return false;
				            	document.getElementById('orgCivilID' + num).value = "-";
		
				            }
				            
				            if (trim(document.getElementById('orgName' + num).value) == "" ) {
				                alert('الرجاء إدخال الاسم ');
				                document.getElementById('orgName' + num).focus();
				                return false;
				            }
				            
				          
				            
				            if (trim(document.getElementById('addrNum' + num).value) == "" || isNaN(document.getElementById('addrNum' + num).value)) {
				                //alert('الرجاء ادخال الرقم الآلي للعنوان');
				                //document.getElementById('addrNum' + num).focus();
				                //return false;
				            	document.getElementById('addrNum' + num).value = "-";
		
				            }
				            
				            if (trim(document.getElementById('govCode' + num).value) == '' 
				            	|| trim(document.getElementById('area' + num).value) == ''
				            	|| trim(document.getElementById('block' + num).value) == ''
				            	
				            	
				            	 )       	
				            	
				            	 {
				                alert('الرجاء إدخال العنوان كاملا');
				                document.getElementById('addrNum' + num).focus();
				                return false;
				            }
				        		
				            if (trim(document.getElementById('building' + num).value) == '') {
				                //alert('الرجاء ادخال رقم الوكالة');
				                //document.getElementById('wakNum' + num).focus();
				                //return false;
				            	document.getElementById('building' + num).value = "-";
				            }       		
		        		}else{
			        		alert('نرجو منكم التقيد بالاختيارات المتاحة');
			        		return false;
		        		}
		        	}
		        	
		        }
					
		            	            
		            document.getElementById("submit_button").disabled = true;
		            //document.frmCourt.target = "_parent";
		            return true;
		        }
	        
	        
	        function getDepartments() {
	            document.frmCourt.action = "caseInfo.jsp";
	            document.frmCourt.target = "";
	            document.frmCourt.submit();
	        }

       function showDivAsdes(obj) {

        var num = $('.clonedInput').length;
var tit = $('#' + obj.id).val();

        if (tit == 1){

            $('#normal' + num).hide();
            $('#cid' + num).show();
            $('#eaddress' + num).hide();
            $('#org' + num).hide();
            $('#normal' + num).hide();
            $('#address' + num).hide();
  
       
            selectOrder(document.getElementById('wakYear' + num), '2021');
        } else if (tit == 2) {

            $('#normal' + num).hide();
            $('#cid' + num).hide();
            $('#eaddress' + num).hide();
            $('#org' + num).show();
            $('#normal' + num).hide();
            $('#address' + num).show();
     
            //document.getElementById('area' + num).innerHTML = "";
            selectOrder(document.getElementById('wakYear' + num), '2021');
        } else {
            $('#normal' + num).hide();
            $('#cid' + num).hide();
            $('#eaddress' + num).hide();
            $('#org' + num).hide();
            $('#normal' + num).hide();
            $('#address' + num).hide();
    
        }
        }
    function myFunctionAsed(obj) {
        var str = obj.id;
            var num = str.match(/(\d+)/);

        var num = $('.clonedInput').length;

        if (isCivilIdOk()) {
            var str = obj.id;
            var matches = str.match(/(\d+)/);

            $.ajax({

                 beforeSend: function(){
                            $('.waitingDivccc').css("display", "");
                            },
                async: true,
                type: "POST",
                url: "/CheckPidPrsonNo",

                data: {
                    civilID1: $('#' + obj.id).val()
                  
                },
                success: function (responseText) {
                          $('.waitingDivccc').css("display", "none");
                          $('#otherbtn' + num).show();
                    console.log(responseText);
                    if (responseText.prsonNum === '0') {
                   
                        $('#totalName'+num).val(responseText.totalName);
                        $('#firstName'+num).val(responseText.firstName);
                        $('#secondName'+num).val(responseText.secondName);
                        $('#thirdName'+num).val(responseText.thirdName);
                        $('#forthName'+num).val(responseText.forthName);
                        $('#familyName'+num).val(responseText.familyName);
                        $('#addrNum'+num).val(responseText.addrNum);
                        selectOrder(document.getElementById('govCode'+num), responseText.govCode);
                        $('#block'+num).val(responseText.block);
                        $('#street'+num).val(responseText.street);
                        $('#building'+num).val(responseText.building);
                        $('#floor'+num).val(responseText.floor);
                        $('#flat'+num).val(responseText.flat);
                        selectOrder(document.getElementById('natCode'+num), responseText.natCode);


                    } else {

                        $('#totalName' +num).val(responseText.totalName);
                        $('#firstName' +num).val(responseText.firstName);
                        $('#secondName' +num).val(responseText.secondName);
                        $('#thirdName' +num).val(responseText.thirdName);
                        $('#forthName' +num).val(responseText.forthName);
                        $('#familyName' +num).val(responseText.familyName);
                 
                           $('#orgName' +num).val(responseText.orgName);
                    //          $('#orgCivilID' + matches[0]).val("  ");
                        
                        $('#addrNum'+num).val(responseText.addrNum);
                        $('#area' +num).val(responseText.area);
                        $('#block' +num).val(responseText.block);
                        $('#street' +num).val(responseText.street);
                        $('#building' +num).val(responseText.building);
                        $('#floor' +num).val(responseText.floor);
                        $('#flat' +num).val(responseText.flat);
                        $('#govCode' +num).val(responseText.govCode);
                        selectOrder(document.getElementById('natCode'+num), responseText.natCode);
                




                        //    selectOrder(document.getElementById('natCode' + num),  $('#familyName'+matches[0]).val(responseText.natCode));
                    }
                },

                //If there was no resonse from the server
                error: function (jqXHR, textStatus, errorThrown) {
                    console.log("Something really bad happened masssssouddddd " + textStatus);

                }

            });
        }
    }
     function addOtherAsedAdrressFunction() {
    

        var num = $('.clonedInput').length;
        $('#addOtherAdress' + num).show();
        /* 
         if (document.getElementById('title' + num).value == 1) {
         $('#othercid' + num).show();
         $('#otherOrg' + num).hide();
         
         
         }else if (document.getElementById('title' + num).value == 2) {
         $('#othercid' + num).hide();
         $('#otherOrg' + num).show();
         }
         else {
         $('#othercid' + num).hide();
         $('#otherOrg' + num).hide();
         }
         */
        $('#btnAddAdrr' + num).hide();
        $('#btnClear' + num).show();
    }

    function deleteOtherAsedAdrressFunction() {

        var num = $('.clonedInput').length;
        if (confirm("هل تريد الغاء العنوان المختار")) {
            $('#addOtherAdress' + num).hide();
            $('#othercivilID' + num + '  input[type="text"]').val('');

            $('#otherOrgCivilID' + num + ' input[type="text"]').val('');


            $('#otherAddrNum' + num + ' input[type="text"]').val('');
            $('#btnClear' + num).hide();
            $('#btnClear' + num).show();
        }
    }
   function myFunctionAsedMasoudOrg(obj) {
     
            var str = obj.id;
            var num = str.match(/(\d+)/);

        var num = $('.clonedInput').length;
            $.ajax({
      beforeSend: function(){
                            $('.waitingDivccc').css("display", "");
                            },
                async: true,
                type: "POST",
                url: "/CheckLeaglPidPrsonNo",

                data: {
                    civilID1: $('#' + obj.id).val()
                },
                success: function (responseText) {
       $('#otherbtn' + num).show();
                         $('.waitingDivccc').css("display", "none");
                    console.log(responseText);
                 if (responseText.prsonNum === '0') {
                  
                        $('#totalName'  +num).val(responseText.totalName);
                        $('#firstName' +num).val(responseText.firstName);
                        $('#secondName' +num).val(responseText.secondName);
                        $('#thirdName' +num).val(responseText.thirdName);
                        $('#forthName' +num).val(responseText.forthName);
                        $('#familyName' +num).val(responseText.familyName);
                        $('#addrNum' +num).val(responseText.addrNum);
                           $('#area' +num).val(responseText.area);
                        selectOrder(document.getElementById('govCode' +num), responseText.govCode);
                        $('#block' +num).val(responseText.block);
                        $('#street' +num).val(responseText.street);
                        $('#building' +num).val(responseText.building);
                        $('#floor' +num).val(responseText.floor);
                        $('#flat' +num).val(responseText.flat);
                        selectOrder(document.getElementById('natCode' +num), responseText.natCode);


                    } else {


                        $('#totalName'  +num).val(responseText.totalName);
                        $('#firstName' +num).val(responseText.firstName);
                        $('#secondName' +num).val(responseText.secondName);
                        $('#thirdName' +num).val(responseText.thirdName);
                        $('#forthName' +num).val(responseText.forthName);
                        $('#familyName' +num).val(responseText.familyName);
      
                           $('#orgName' +num).val(responseText.orgName);
                    //          $('#orgCivilID' +num).val("  ");
                        
                        $('#addrNum' +num).val(responseText.addrNum);
                        $('#area' +num).val(responseText.area);
                        $('#block' +num).val(responseText.block);
                        $('#street' +num).val(responseText.street);
                        $('#building' +num).val(responseText.building);
                        $('#floor' +num).val(responseText.floor);
                        $('#flat' +num).val(responseText.flat);
                        $('#govCode' +num).val(responseText.govCode);
                        selectOrder(document.getElementById('natCode' +num), responseText.natCode);
                  




                        //    selectOrder(document.getElementById('natCode' + num),  $('#familyName'+matches[0]).val(responseText.natCode));
                    }
                },

                //If there was no resonse from the server
                error: function (jqXHR, textStatus, errorThrown) {
                    console.log("Something really bad happened " + textStatus);

                }

            });
     
    }
    function myFunctionOtherAsedMasoudOrg(obj) {
     
            var str = obj.id;
            var num = str.match(/(\d+)/);

        var num = $('.clonedInput').length;
            $.ajax({
   beforeSend: function(){
                            $('.waitingDivccc').css("display", "");
                            },
                async: true,
                type: "POST",
                url: "/CheckLeaglPidPrsonNo",

                data: {
                    civilID1: $('#' + obj.id).val()
                },
                success: function (responseText) {
                         $('.waitingDivccc').css("display", "none");
                    console.log(responseText);
                 if (responseText.prsonNum === '0') {
                      $('#othertotalName'+num).val(responseText.totalName);
                        $('#firstName' +num).val(responseText.firstName);
                        $('#secondName' +num).val(responseText.secondName);
                        $('#thirdName' +num).val(responseText.thirdName);
                        $('#forthName' +num).val(responseText.forthName);
                        $('#familyName' +num).val(responseText.familyName);
                        $('#otherAddrNum' +num).val(responseText.addrNum);
                        $('#otherOrgName' +num).val(responseText.orgName);
                           $('#otherArea' +num).val(responseText.area);
                         selectOrder(document.getElementById('otherGovCode' +num), responseText.govCode);
                        $('#otherBlock' +num).val(responseText.block);
                        $('#otherStreet' +num).val(responseText.street);
                        $('#otherBuilding' +num).val(responseText.building);
                        $('#otherFloor' +num).val(responseText.floor);
                        $('#otherFlat' +num).val(responseText.flat);
          

                    } else {

   $('#othertotalName'+num).val(responseText.totalName);
                        $('#firstName' +num).val(responseText.firstName);
                        $('#secondName' +num).val(responseText.secondName);
                        $('#thirdName' +num).val(responseText.thirdName);
                        $('#forthName' +num).val(responseText.forthName);
                        $('#familyName' +num).val(responseText.familyName);
                        $('#otherAddrNum' +num).val(responseText.addrNum);
                        $('#otherOrgName' +num).val(responseText.orgName);
                        $('#otherArea' +num).val(responseText.area);
                         selectOrder(document.getElementById('otherGovCode' +num), responseText.govCode);
                        $('#otherBlock' +num).val(responseText.block);
                        $('#otherStreet' +num).val(responseText.street);
                        $('#otherBuilding' +num).val(responseText.building);
                        $('#otherFloor' +num).val(responseText.floor);
                        $('#otherFlat' +num).val(responseText.flat);
                
                  




                        //    selectOrder(document.getElementById('natCode' + num),  $('#familyName'+matches[0]).val(responseText.natCode));
                    }
                },

                //If there was no resonse from the server
                error: function (jqXHR, textStatus, errorThrown) {
                    console.log("Something really bad happened " + textStatus);

                }

            });
     
    }
 function showDivAsedOtherAdd(obj) {

        var num = $('.clonedInput').length;
var tit = $('#' + obj.id).val();

        if (tit == 1){

           
            $('#othercid' + num).show();
           
            $('#otherOrg' + num).hide();
         

       
            selectOrder(document.getElementById('wakYear' + num), '2021');
        } else if (tit == 2) {

           
            $('#othercid' + num).hide();
            $('#otherOrg' + num).show();
         
    
            //document.getElementById('area' + num).innerHTML = "";
            selectOrder(document.getElementById('wakYear' + num), '2021');
        } else {
            $('#normal' + num).hide();
            $('#cid' + num).hide();
           
            $('#org' + num).hide();
            $('#normal' + num).hide();
            $('#address' + num).hide();
       
        }

    }
      function myFunctionAsedOtherMasoud(obj) {
  
        var num = $('.clonedInput').length;

        if (isOtherCivilIdOk()) {
        
            var str = obj.id;
            var matches = str.match(/(\d+)/);

            $.ajax({
  beforeSend: function(){
                            $('.waitingDivccc').css("display", "");
                            },
                async: true,
                type: "POST",
                url: "/CheckPidPrsonNo",

                data: {
                    civilID1: $('#' + obj.id).val()
                },
                success: function (responseText) {
               
                           $('.waitingDivccc').css("display", "none");
                 
                    console.log(responseText);
                    if (responseText.prsonNum === '0') {
                   
                        $('#othertotalName' +num).val(responseText.totalName);
                        $('#firstName' +num).val(responseText.firstName);
                        $('#secondName' +num).val(responseText.secondName);
                        $('#thirdName' +num).val(responseText.thirdName);
                        $('#forthName' +num).val(responseText.forthName);
                        $('#familyName' +num).val(responseText.familyName);
                        $('#otherAddrNum' +num).val(responseText.addrNum);
                        $('#otherOrgName' +num).val(responseText.orgName);
                        $('#otherArea' +num).val(responseText.area);
                        selectOrder(document.getElementById('otherGovCode' +num), responseText.govCode);
                        $('#otherBlock' +num).val(responseText.block);
                        $('#otherStreet' +num).val(responseText.street);
                        $('#otherBuilding' +num).val(responseText.building);
                        $('#otherFloor' +num).val(responseText.floor);
                        $('#otherFlat' +num).val(responseText.flat);
          


                    } else {


                       $('#othertotalName'+num).val(responseText.totalName);
                        $('#firstName' +num).val(responseText.firstName);
                        $('#secondName' +num).val(responseText.secondName);
                        $('#thirdName' +num).val(responseText.thirdName);
                        $('#forthName' +num).val(responseText.forthName);
                        $('#familyName' +num).val(responseText.familyName);
                        $('#otherAddrNum' +num).val(responseText.addrNum);
                        $('#otherOrgName' +num).val(responseText.orgName);
                           $('#otherArea' +num).val(responseText.area);
                         selectOrder(document.getElementById('otherGovCode' +num), responseText.govCode);
                        $('#otherBlock' +num).val(responseText.block);
                        $('#otherStreet' +num).val(responseText.street);
                        $('#otherBuilding' +num).val(responseText.building);
                        $('#otherFloor' +num).val(responseText.floor);
                        $('#otherFlat' +num).val(responseText.flat);
               
                  




                        //    selectOrder(document.getElementById('natCode' + num),  $('#familyName'+matches[0]).val(responseText.natCode));
                    }
                },

                //If there was no resonse from the server
                error: function (jqXHR, textStatus, errorThrown) {
                    console.log("Something really bad happened masssssouddddd " + textStatus);

                }

            });
        }
        
         function isOtherCivilIdOk() {
   
        var num = $('.clonedInput').length;
        console.log('num is ' + num);

        for (var i = 1; i <= num; i++) {

            if (!checkcivilid2(document.getElementById('othercivilID' + num).value)) {
                document.getElementById('civilID1Wrong' + num).style.display = 'inline';
                document.getElementById('civilID' + num).focus();
                document.getElementById('civilID' + num).select();
                
                console.log('civil id  is civilID' + num);
                console.log('civil id  is civilID1Wrong' + num);
                return false;
            } else {
               return true
            }

        }
    }
        
    }