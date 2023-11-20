// Copyright (c) 2023, Abanop Asaad and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["script report for server side scripting Doctype"] = {
	"filters": [
		// make 3 fileds name as link to server side scripting , dob as Date of birth and age for age
		{
            "fieldname": "name",
            "label": __("Server Side Scripting"),
            "fieldtype": "Link",
            "options": "Server Side Scripting"

        },

        {
            "fieldname": "date_of_birth",
            "label": __("Date of Birth"),
            "fieldtype": "Date"

        },
        {
            "fieldname": "age",
            "label": __("Age"),
            "fieldtype": "Int"

        }

	]
};
