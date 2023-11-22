frappe.pages['programing-page-1'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Title',
		single_column: true
	});
}