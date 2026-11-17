
			function showDiv(){
				var num = $('.clonedInput').length;
				
				
				if(document.getElementById('title' + num).value == 1){
					document.getElementById('normal' + num).style.display = 'block';
					document.getElementById('org' + num).style.display = 'none';
					document.getElementById('address' + num).style.display = 'block';
					document.getElementById('WAKDATA' + num).style.display = 'block';
					selectOrder(document.getElementById('natCode' + num), '101');
					selectOrder(document.getElementById('govCode' + num), '0');
					//document.getElementById('area' + num).innerHTML = "";
					selectOrder(document.getElementById('wakYear' + num), '2015');
				}else if(document.getElementById('title' + num).value == 2){
					document.getElementById('normal' + num).style.display = 'none';
					document.getElementById('org' + num).style.display = 'block';
					document.getElementById('address' + num).style.display = 'block';
					document.getElementById('WAKDATA' + num).style.display = 'block';
					selectOrder(document.getElementById('natCode' + num), '101');
					selectOrder(document.getElementById('govCode' + num), '0');
					//document.getElementById('area' + num).innerHTML = "";
					selectOrder(document.getElementById('wakYear' + num), '2015');
				}else{
					document.getElementById('normal' + num).style.display = 'none';
					document.getElementById('org' + num).style.display = 'none';
					document.getElementById('address' + num).style.display = 'none';
					document.getElementById('WAKDATA' + num).style.display = 'none';
				}
			
			}
			
			function showDiv_edit(){
				var num = $('.clonedInput').length;
				
				
				if(document.getElementById('title' + num).value == 1){
					document.getElementById('normal' + num).style.display = 'block';
					document.getElementById('org' + num).style.display = 'none';
					document.getElementById('address' + num).style.display = 'block';
					document.getElementById('WAKDATA' + num).style.display = 'block';
					selectOrder(document.getElementById('natCode' + num), '101');
					selectOrder(document.getElementById('govCode' + num), '0');
					//document.getElementById('area' + num).innerHTML = "";
					selectOrder(document.getElementById('wakYear' + num), '2015');
				}else if(document.getElementById('title' + num).value == 2){
					document.getElementById('normal' + num).style.display = 'none';
					document.getElementById('org' + num).style.display = 'block';
					document.getElementById('address' + num).style.display = 'block';
					document.getElementById('WAKDATA' + num).style.display = 'block';
					selectOrder(document.getElementById('natCode' + num), '101');
					selectOrder(document.getElementById('govCode' + num), '0');
					//document.getElementById('area' + num).innerHTML = "";
					selectOrder(document.getElementById('wakYear' + num), '2015');
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
	        		document.getElementById('msgTitle').style.display="block";
	        		document.getElementById('title' + num).focus();
	        		return false;
	        	}else{
	        		if(document.getElementById('title' + num).value == 1){
	        		
	        		if (isNaN(document.getElementById('natCode' + num).value == "000")) {
	                //alert('الرجاء اختيار الجنسية');
	                document.getElementById('natCodeWarning').style.display = 'inline';
	                document.getElementById('natCode' + num).focus();
	                return false;
	            }
	       /*    
	            if(!checkcivilid(document.getElementById('civilID' + num).value)){
	                document.getElementById('civilID' + num).focus();
	                document.getElementById('civilID' + num).select();
	                return false;
	            }
	         */  
	           
	         //   if (trim(document.getElementById('civilID' + num).value) == "" || isNaN(document.getElementById('civilID' + num).value)) {
	                //alert('الرجاء ادخال الرقم المدني');
	         //       document.getElementById('civilID1Warning').style.display = 'inline';
	        //        document.getElementById('civilID' + num).focus();
	        //        return false;
	        //    }
	            
	            if (trim(document.getElementById('firstName' + num).value) == "" ) {
	                //alert('الرجاء ادخال الأسم الاول');
	            	document.getElementById('firstNameWarning').style.display = 'inline';
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
	                //alert('الرجاء ادخال الأسم الثاني');
	            	 document.getElementById('secondNameWarning').style.display = 'inline';
	                document.getElementById('secondName' + num).focus();
	                return false;
	            }
	            
	            if (trim(document.getElementById('familyName' + num).value) == "" ) {
	            	document.getElementById('familyNameWarning').style.display = 'inline';
	                document.getElementById('familyName' + num).focus();
	                return false;
	            }
	            
	            if (trim(document.getElementById('addrNum' + num).value) == "") {
	            	document.getElementById('addNameWarning').style.display = 'inline';
	                document.getElementById('addrNum' + num).focus();
	                return false;
	            }
	            
	            if (trim(document.getElementById('govCode' + num).value) == '' )  {
	                document.getElementById('fullAddNameWarning').style.display = 'inline';
	                document.getElementById('govCode' + num).focus();
	                return false;
	            }
	            
	            if (trim(document.getElementById('area' + num).value) == '')  {
	                document.getElementById('fullAddNameWarning').style.display = 'inline';
	                document.getElementById('area' + num).focus();
	                return false;
	            }
	            
	            if (trim(document.getElementById('building' + num).value) == '')  {
	                document.getElementById('fullAddNameWarning').style.display = 'inline';
	                document.getElementById('building' + num).focus();
	                return false;
	            }
	            
	            if (trim(document.getElementById('block' + num).value) == '')  {
	                document.getElementById('fullAddNameWarning').style.display = 'inline';
	                document.getElementById('block' + num).focus();
	                return false;
	            }
	        		
	        	if (trim(document.getElementById('wakNum' + num).value) == ''
	        		 || isNaN(document.getElementById('wakNum' + num).value)) {
	                
	                document.getElementById('wakWarning').style.display = 'inline';
	                document.getElementById('wakNum' + num).focus();
	                return false;
	            }
	            
	            if (trim(document.getElementById('wakYear' + num).value) == ''
	        		 || isNaN(document.getElementById('wakYear' + num).value)) {
	              
	                document.getElementById('wakYearWarning').style.display = 'inline';
	                document.getElementById('wakYear' + num).focus();
	                return false;
	            }
	            
	            if (trim(document.getElementById('wakYear' + num).value) < '2013')
	            {
		            if ( trim(document.getElementById('wakProx' + num).value) == '' ) {
		               
		                document.getElementById('wakProxyWarning').style.display = 'inline';
		                document.getElementById('wakProx' + num).focus();
		                return false;
		            }
	            }else {
	            	if ( trim(document.getElementById('wakCCo' + num).value) == '' ) {
		                
		                document.getElementById('wakCCoWarning').style.display = 'inline';
		                document.getElementById('wakCCo' + num).focus();
		                return false;
	            	}
	            }
	            
	            
	//---------------------------------------------------------------------------------            
	        		}else if(document.getElementById('title' + num).value == 2){
	        		
	        		
	            if (trim(document.getElementById('orgCivilID' + num).value) == "" || isNaN(document.getElementById('orgCivilID' + num).value)) {
	                
	                document.getElementById('orgCivilWarning').style.display = 'inline';
	                document.getElementById('orgCivilID' + num).focus();
	                return false;
	            }
	            
	            if (trim(document.getElementById('orgName' + num).value) == "" ) {
	            
	                document.getElementById('orgNameWarning').style.display = 'inline';
	                document.getElementById('orgName' + num).focus();
	                return false;
	            }
	            
	          
	            
	            if (trim(document.getElementById('addrNum' + num).value) == "" || isNaN(document.getElementById('addrNum' + num).value)) {
	                
	                document.getElementById('addNameWarning').style.display = 'inline';
	                document.getElementById('addrNum' + num).focus();
	                return false;
	            }
	            
	            if (trim(document.getElementById('govCode' + num).value) == '' 
	            	|| trim(document.getElementById('area' + num).value) == ''
	            	|| trim(document.getElementById('block' + num).value) == ''
	            	|| trim(document.getElementById('building' + num).value) == ''
	            	 )       	
	            	
	            	 {
	                
	                document.getElementById('fullAddNameWarning').style.display = 'inline';
	                document.getElementById('building' + num).focus();
	                return false;
	            }
	        		
	        	if (trim(document.getElementById('wakNum' + num).value) == ''
	        		 || isNaN(document.getElementById('wakNum' + num).value)) {
	        		document.getElementById('wakWarning').style.display = 'inline';
	                document.getElementById('wakNum' + num).focus();
	                return false;
	            }
	            
	            if (trim(document.getElementById('wakYear' + num).value) == ''
	        		 || isNaN(document.getElementById('wakYear' + num).value)) {
	                
	                document.getElementById('wakYearWarning').style.display = 'inline';
	                document.getElementById('wakYear' + num).focus();
	                return false;
	            }
	            
	            if (trim(document.getElementById('wakYear' + num).value) < '2013')
	            {
		            if ( trim(document.getElementById('wakProx' + num).value) == '' ) {
		                
		                document.getElementById('wakProxyWarning').style.display = 'inline';
		                document.getElementById('wakProx' + num).focus();
		                return false;
		            }
	            }else {
	            	if ( trim(document.getElementById('wakCCo' + num).value) == '' ) {
		                
		                document.getElementById('wakCCoWarning').style.display = 'inline';
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
	            document.frmCourt.target = "_parent";
	            return true;
	        }
	        
	        
	        function validateAsed() {
		        
		         
		        var num = $('.clonedInput').length;
		        for(var i=1; i<= num;i++){
		        	if (isNaN(document.getElementById('title' + num).value) || document.getElementById('title' + num).value == "0") {	        		
		        		document.getElementById('msgTitle').style.display="block";
		        		document.getElementById('title' + num).focus();
		        		return false;
		        	}else{
		        		if(document.getElementById('title' + num).value == 1){
		        		
		        		if (isNaN(document.getElementById('natCode' + num).value == "000")) {
		             
		                document.getElementById('natCodeWarning').style.display = 'inline';
		                document.getElementById('natCode' + num).focus();
		                return false;
		            }
		        		
		        		 if(!checkcivilid(document.getElementById('civilID' + num).value)){
		 	                document.getElementById('civilID' + num).focus();
		 	                document.getElementById('civilID' + num).select();
		 	                return false;
		 	            }
		 	           
		        		
		        		
		        		if (trim(document.getElementById('civilID' + num).value) == "" || isNaN(document.getElementById('civilID' + num).value)) {
			                document.getElementById('civilID1Warning').style.display = 'inline';
			                document.getElementById('civilID' + num).focus();
			                return false;
			            }
		           
		          
		           
		            
		            if (trim(document.getElementById('firstName' + num).value) == "" ) {
		            	document.getElementById('firstNameWarning').style.display = 'inline';
		                document.getElementById('firstName' + num).focus();
		                return false;
		            }
		            
		            //goodbye magdy
		             if ( !isNaN(document.getElementById('firstName' + num).value)) {
	                    document.getElementById('firstName' + num).select();
	                    document.getElementById('firstName' + num).focus();
	                    return false;
	                }
		            
		             if (trim(document.getElementById('secondName' + num).value) == "" ) {
		            	 document.getElementById('secondNameWarning').style.display = 'inline';
		                document.getElementById('secondName' + num).focus();
		                return false;
		            }
		            
		            if (trim(document.getElementById('familyName' + num).value) == "" ) {
		            	document.getElementById('familyNameWarning').style.display = 'inline';
		                document.getElementById('familyName' + num).focus();
		                return false;
		            }
		            
		           
		            
		            if (trim(document.getElementById('govCode' + num).value) == '0' )  {
		                document.getElementById('fullAddNameWarning').style.display = 'inline';
		                document.getElementById('govCode' + num).focus();
		                return false;
		            }
		            
		           
		            
		            if (trim(document.getElementById('block' + num).value) == '')  {
		                document.getElementById('blockWarning').style.display = 'inline';
		                document.getElementById('block' + num).focus();
		                return false;
		            }
		        		
		      
		            
		            
		//---------------------------------------------------------------------------------            
		        		}else if(document.getElementById('title' + num).value == 2){
		        		
		        		
		            if (trim(document.getElementById('orgCivilID' + num).value) == "" || isNaN(document.getElementById('orgCivilID' + num).value)) {
		                
		                /*document.getElementById('orgCivilWarning').style.display = 'inline';
		                document.getElementById('orgCivilID' + num).focus();
		                return false;*/
		                document.getElementById('orgCivilID' + num).value = "-";
		            }
		            
		            if (trim(document.getElementById('orgName' + num).value) == "" ) {
		            
		                document.getElementById('orgNameWarning').style.display = 'inline';
		                document.getElementById('orgName' + num).focus();
		                return false;
		            }
		            
		          
		            
		            if (trim(document.getElementById('addrNum' + num).value) == "" || isNaN(document.getElementById('addrNum' + num).value)) {
		                
		                document.getElementById('addNameWarning').style.display = 'inline';
		                document.getElementById('addrNum' + num).focus();
		                return false;
		            }
		            
		            if (trim(document.getElementById('govCode' + num).value) == '' 
		            	|| trim(document.getElementById('area' + num).value) == ''
		            	|| trim(document.getElementById('block' + num).value) == ''
		            	|| trim(document.getElementById('building' + num).value) == ''
		            	 )       	
		            	
		            	 {
		                
		                document.getElementById('fullAddNameWarning').style.display = 'inline';
		                document.getElementById('building' + num).focus();
		                return false;
		            }
		        		
		        	if (trim(document.getElementById('wakNum' + num).value) == ''
		        		 || isNaN(document.getElementById('wakNum' + num).value)) {
		        		document.getElementById('wakWarning').style.display = 'inline';
		                document.getElementById('wakNum' + num).focus();
		                return false;
		            }
		            
		            if (trim(document.getElementById('wakYear' + num).value) == ''
		        		 || isNaN(document.getElementById('wakYear' + num).value)) {
		                
		                document.getElementById('wakYearWarning').style.display = 'inline';
		                document.getElementById('wakYear' + num).focus();
		                return false;
		            }
		            
		            if (trim(document.getElementById('wakYear' + num).value) < '2013')
		            {
			            if ( trim(document.getElementById('wakProx' + num).value) == '' ) {
			                
			                document.getElementById('wakProxyWarning').style.display = 'inline';
			                document.getElementById('wakProx' + num).focus();
			                return false;
			            }
		            }else {
		            	if ( trim(document.getElementById('wakCCo' + num).value) == '' ) {
			                
			                document.getElementById('wakCCoWarning').style.display = 'inline';
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
					
		            	            
		            document.getElementById("cmdSubmit").disabled = true;
		            document.frmCourt.target = "_parent";
		            return true;
		        }
	        
	        
	        
	        function validateData_Ased() {
		        
		        var num = $('.clonedInput').length;
		        for(var i=1; i<= num;i++){
		        	if (isNaN(document.getElementById('title' + num).value) || document.getElementById('title' + num).value == 0) {
		        		document.getElementById('title1Warning').style.display="block";
		        		document.getElementById('natCode' + num).focus();
		        		return false;
		        	}else{
		        		if(document.getElementById('title' + num).value == 1){
		        		if (isNaN(document.getElementById('natCode' + num).value)) {
		                document.getElementById('natCode' + num).focus();
		                document.getElementById('natCodeWarning').style.display="block";
		                return false;
		                
		            }
		           
		        		
		        		 if(!checkcivilid(document.getElementById('civilID' + num).value)){
		 	                document.getElementById('civilID' + num).focus();
		 	                document.getElementById('civilID' + num).select();
		 	                return false;
		 	            }
		        		 
		        		 
		            if (trim(document.getElementById('civilID' + num).value) == "" || isNaN(document.getElementById('civilID' + num).value)) {
		             
		                document.getElementById('civilIdWarning').style.display="block";
		                document.getElementById('civilID' + num).focus();
		                return false;
		            }
		            
		            if (trim(document.getElementById('firstName' + num).value) == "" ) {
		              
		                document.getElementById('firstName' + num).focus();
		                document.getElementById('firstNameWarning').style.display="block";
		                return false;
		            }
		            
		             if (trim(document.getElementById('secondName' + num).value) == "" ) {
		                
		                document.getElementById('secondName' + num).focus();
		                document.getElementById('secondNameWarning').style.display="block";
		                return false;
		            }
		            
		            if (trim(document.getElementById('familyName' + num).value) == "" ) {
		                
		                document.getElementById('familyName' + num).focus();
		                document.getElementById('familyNameWarning').style.display="block";
		                return false;
		            }
		            
		            if (trim(document.getElementById('addrNum' + num).value) == "" || isNaN(document.getElementById('addrNum' + num).value)) {
		                //document.getElementById('addrNum' + num).focus();
		                //return false;
		                document.getElementById('addrNum' + num).value = "-";
		            }
		            
		            if (trim(document.getElementById('govCode' + num).value) == '' 
		            	|| trim(document.getElementById('area' + num).value) == ''
		            	|| trim(document.getElementById('block' + num).value) == ''
		            
		            	
		            	 )       	
		            	
		            	 {
		             
		                document.getElementById('block' + num).focus();
		                document.getElementById('blockWarning').style.display="block";
		                
		                return false;
		                
		            }
		            
		            if (trim(document.getElementById('building' + num).value) == '') {
		                //document.getElementById('wakNum' + num).focus();
		                //return false;
		            	document.getElementById('building' + num).value = "-";
		            }
		        		
		        	
		//---------------------------------------------------------------------------------            
		        		}else if(document.getElementById('title' + num).value == 2){
		        		
				        		
				            if (trim(document.getElementById('orgCivilID' + num).value) == "" || isNaN(document.getElementById('orgCivilID' + num).value)) {
				                //document.getElementById('orgCivilID' + num).focus();
				                //return false;
				            	document.getElementById('orgCivilID' + num).value = "-";
		
				            }
				            
				            if (trim(document.getElementById('orgName' + num).value) == "" ) {
				            
				                document.getElementById('orgName' + num).focus();
				                document.getElementById('orgNameWarning').style.display="block";
				                
				                return false;
				            }
				            
				          
				            
				            if (trim(document.getElementById('addrNum' + num).value) == "" || isNaN(document.getElementById('addrNum' + num).value)) {
				                //document.getElementById('addrNum' + num).focus();
				                //return false;
				            	document.getElementById('addrNum' + num).value = "-";
		
				            }
				            
				            if (trim(document.getElementById('govCode' + num).value) == '' 
				            	|| trim(document.getElementById('area' + num).value) == ''
				            	|| trim(document.getElementById('block' + num).value) == ''
				            	
				            	
				            	 )       	
				            	
				            	 {
				                
				                document.getElementById('block' + num).focus();
				                document.getElementById('blockWarning').style.display="block";
				                return false;
				            }
				        		
				            if (trim(document.getElementById('building' + num).value) == '') {
				                //document.getElementById('wakNum' + num).focus();
				                //return false;
				            	document.getElementById('building' + num).value = "-";
				            }       		
		        		}else{
			        		
			        		document.getElementById('title1Warning').style.display="block";
			        		return false;
		        		}

		         }
		        }
		            	            
		          //  document.getElementById("submit_button").disabled = true;
		            //document.frmCourt.target = "_parent";
		            return true;
		        }

	        
	        
	        function getDepartments() {
	            document.frmCourt.action = "caseInfo.jsp";
	            document.frmCourt.target = "";
	            document.frmCourt.submit();
	        }

   
	        
	        
	        
	        
	   