frappe.pages['programing-page-1'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Title',
		single_column: true
	});



	page.add_menu_item(__("Home"), function() {
        frappe.set_route("home");
    });

	page.add_menu_item(__("Contact"), function() {
		frappe.set_route("contact");
    });

	page.add_menu_item(__("About"), function() {
        frappe.set_route("about");
    });

	page.add_menu_item(__("team-updates-page@HR module"), function() {
        frappe.set_route("team-updates");
    });


	


	// page.set_primary_action(__("Create"), function() {
    //     frappe.set_route("Form", "Programing Page 1");
    // });

	page.set_title("MY PAGE");
	page.set_title_sub('sjdsajkdashjdhsajkdhaksdhsdhklsadh')


	page.set_indicator("Done" , "green");
	page.set_indicator("Canceld" , "red");
	page.set_indicator('Pending', 'orange')
	page.clear_indicator()


	// function create_new (){
	// 	frappe.msgprint("New btn is clicked")
	// }
	// let $btn = page.set_primary_action('New', () => create_new(), 'octicon octicon-plus')
	let $btn = page.set_primary_action('New', () => frappe.msgprint("New btn is clicked"), 'octicon octicon-plus')

	// $btn.addClass('btn-danger')

	let $refresh_btn = 
	page.set_secondary_action(
		'Refresh', 
		() => frappe.msgprint("Refresh btn is clicked"), 
		'octicon octicon-plus'
	)

	$refresh_btn.addClass('btn-primary')

	page.add_menu_item(
		"Send email",
		() => frappe.msgprint("Send email btn is clicked")
	)

	page.add_action_item(
		"delete",
		() => frappe.msgprint("Delete btn is clicked")
	)

	// lets add field to the page which is status options is open , pending , cancelled , and add a function at change print the current status
	
	let status_field = 
	page.add_field({
        label: "Status",
        fieldname: "status",
        fieldtype: "Select",
        options: ["Open", "Closed", "Cancelled"],
        change(){
			frappe.msgprint(this.value)
		}

    });

	// lets render our html page 
	// $(frappe.render_template("programing_page_1",{})).appendTo(page.body)

	$(frappe.render_template("programing_page_1",{
		passed_value_from_frappe_render_fun:555555555555
	})).appendTo(page.body)




}