// // Copyright (c) 2023, Abanop Asaad and contributors
// // For license information, please see license.txt

 frappe.ui.form.on('Clint side scripting', {



// 	// This fine working 

// 	refresh: function(frm) {

// 		// frappe.msgprint("Hello From Refreshing")

// 		// frappe.throw("this is an error message")		


// 		// frm.set_intro("Now you are going to add a new record")

// 		// if (frm.is_new()){

// 		// 	frm.set_intro("Now you are going to add a new record")
// 		// }


// 		frm.add_custom_button('click me',() => {
// 			frappe.msgprint("Hello From Custom Button")           
// 		})


// 		frm.add_custom_button('click me 1' , () => {
// 			frappe.msgprint(
// 				__("Hello From Custom Button 1")				
// 				)
// 		},'Click Me')


// 		frm.add_custom_button('click me 2' , () => {
// 			frappe.msgprint(
// 				__("Hello From Custom Button 2")				
// 				)				
// 		},'Click Me')


// 	},
	

// 	// Run on  save or submision
// 	validate : function (frm) {

// 		// frm.set_value("full_name",frm.doc.first_name + " " + frm.doc.middle_name +frm.doc.last_name)

// 		// -----------------------------------------------------------------------
// 		// hahahahah
// 		// This will always be added to the form during save or submit
// 		let row = frm.add_child('family_members',{

// 			name1:"abanop",
// 			relation:"brother",
// 			age: 23
// 		})
// 		// -------------------------------------------------------------------
		
// 	},


// // This fine working
// 	// onload: function(frm) {

// 	// 	frappe.msgprint("Hello from onload")

// 	// 	// frappe.throw("this is an error message")
		

// 	// },

// 	// why this not working??!!
// 	// Now I understand the reason :)
// 	//  enabled this is the name of the field 
// 	// so any changes happening to the field the function will be called


	enabled: function(frm) {
		// frappe.msgprint("Note THat you have toggle the CheckBox")

		// make the filed mandatory if the checkbox is enabled
        // frm.set_df_property('first_name','reqd',1)

		// same thing but with another way
		frm.toggle_reqd('age',true)
	},

// 	// type first then after out of focus the function will be called
// 	// first_name: function(frm) {
// 	// 	frappe.msgprint("Note THat you have toggle the First Name")

        
// 	// },

// 	// child table treated like this
// 	// only cal the function if you open it via edit 
// 	// and the syntax of the code  here be like this 
// 	// {field name}{_on_form_rendered}
// 	// family_members_on_form_rendered: function(frm) {
// 	// 	frappe.msgprint("Note THat you have toggle the Family Members")
// 	// },

// 	after_save:function(frm){
// 		// frappe.msgprint(
// 		// 	__("The full name is '{0}'",	
// 		// 		[frm.doc.first_name+" "+frm.doc.middle_name+" "+frm.doc.last_name]
// 		// 	)
// 		// )

// 		for (let row of frm.doc.family_members){
// 				frappe.msgprint(

// 					__("row index is '{0}' the family member name is  '{1}' and the relationship is '{2} and his age is '{3}'  ",    
//                         [row.idx , row.name1 , row.relation , row.age]
//                     )
// 				)
// 		}
// 	}






// });


// // lets try to catch the child table 
// frappe.ui.form.on('Family Members', {

    
//     // name1: function(frm) {
//     //     frappe.msgprint("Note THat you have toggle the name Field")
//     // },

	
// 	// ------------------------------------------------------------------------------------------------
// 	 age: function(frm) {
//         frappe.msgprint("Note THat you have toggle the Age Field")
//     },

// 	//  I use this  ^^ but D-code use this 

// 	// age(frm,cdt,cdn){
// 	// 	frappe.msgprint("Note THat you have toggle the Age Field")

// 	// 	console.log(cdt) // Family Members 
// 	// 	// Form which is family_members		
// 	// 	// representing the Child DocType it self
		
// 	// 	console.log(cdn)
// 	// 	// new-family-members-1
// 	// 	// Name of the sub-document the record it self
// 	// 	// Name of the current document in the Child DocType

// 	// }

// 	// frm is the current form which is client_side_scripting

// 	// cdt is short for Child DocType of the current form which mean the linked Form which is family_members

// 	// cdn is short for Child DocName of the current form, Name of the sub-document or linked document which is family_members
//     // ------------------------------------------------------------------------------------------------





});
