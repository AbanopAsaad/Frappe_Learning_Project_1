frappe.ready(function() {
	// bind events here
	
	// // after load msg please fill all the fields carefully
	// frappe.web_form.after_load = () =>{
	// 	frappe.msgprint("please fill all the fields carefully")
	// }


	// lets try to trigger change on an field after loading
	frappe.web_form.after_load = () =>{

		// trigger change on the chekbox
		frappe.web_form.on(
			"check_box",
			(field , value) =>{
				frappe.msgprint("You toggle the checkbox")
			}
		)

		// After load , lets also calculate the age based on the Date of birth
		frappe.web_form.on(
            "date_of_birth",
            (field, value) =>{
                // logic to calculate
				if (value){
					dob = new Date(value)
					current_date = new Date()
					age = current_date.getFullYear() - dob.getFullYear()
					console.log(age)
					frappe.web_form.set_value(
						"age",
						 age
					)
				}
            }
        )
      
    }


	frappe.web_form.validate = () =>{
		// lets get the email and validate it via regx 

		// tabning solution
		// frappe.web_form.on(
		// 	"email",
		// 	(field, value) =>{
		// 		if (!value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
		// 			frappe.throw("Please enter a valid email")
		// 		}
		// 	}
		// )

		// or d-code solution 
		email_ = frappe.web_form.get_value("email")
		var pattern_for_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
		if (email_ && !pattern_for_email.test(email_))
		{
			frappe.msgprint("Please enter a valid email")
			return false
		}

		// lets add same logic but on phone number
		phone_ = frappe.web_form.get_value("phone_number")
		var pattern_for_phone_number = /^(010|011|012|015)\d{8}$/
		if (phone_ && !pattern_for_phone_number.test(phone_))
		{
			frappe.msgprint("Please enter a valid Phone Number")
			return false
		}

		return true
	}

	
	




})