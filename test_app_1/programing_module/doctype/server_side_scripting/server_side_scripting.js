// // Copyright (c) 2023, Abanop Asaad and contributors
// // For license information, please see license.txt

frappe.ui.form.on('Server Side Scripting', {

	// refresh: function(frm) {

	// }
	check_box: function(frm) {
		// frappe.msgprint("Note THat you have toggle the CheckBox")
		frappe.call({
				method: "test_app_1.programing_module.doctype.clint_side_scripting.clint_side_scripting.frappe_call",
                args : {

					hhhhh : frm.doc,
 
					msg : "Argument sent form server side scripting.js to client side scripting.py",
					
				},

				freeze : true,
				freeze_message: __("Wait Now iam calling the function from the client side scripting .py"),

				callback : function(r) {frappe.msgprint(r.message)}
			}
		)	
	},
})