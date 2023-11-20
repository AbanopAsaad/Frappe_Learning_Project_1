# Copyright (c) 2023, Abanop Asaad and contributors
# For license information, please see license.txt

import frappe
from frappe import _


# kda kda filtters comes from js if not set none 
def execute(filters=None):
    if not filters : filters={}

    columns, data = [], []

    columns = get_columns()  # Assuming get_columns() returns a list of column names

    cs_data = get_cs_data(filters)  # Assuming get_cs_data() fetches data based on filters

    if not cs_data:
        frappe.msgprint("No records found")
        return columns, cs_data

# list of dictionaries
    data = []
    for d in cs_data:
        row = frappe._dict({
             "first_name": d.first_name,
             "date_of_birth": d.date_of_birth,
             "age": d.age
        })
        # row = {
        #     "first_name": d.get("first_name"),  # Accessing 'first_name' key from d with default value
        #     "date_of_birth": d.get("date_of_birth"),  # Accessing 'date_of_birth' key from d with default value
        #     "age": d.get("age")  # Accessing 'age' key from d with default value
        # }
        data.append(row)

    return columns, data



def get_columns():
	# first_name , date_of_birth as  date , age as integer

	return [
        {
            "label": _("First Name"),
            "fieldname": "first_name",
            "fieldtype": "Data",
            "width": 200
        },
        {
            "label": _("Date of Birth"),
            "fieldname": "date_of_birth",
            "fieldtype": "Date",
            "width": 100
        },
        {
            "label": _("Age"),
            "fieldname": "age",
            "fieldtype": "Int",
            "width": 50
        }		
	]


# def get_cs_data(filters):
# 	conditions = get_conditions(filters)
# 	# use frappe.get_all to gel all records of table Server Side Scripting , the fields are first_name , date_of_birth , age and filters are the conditions variable and order by first_name desc
# 	data = frappe.get_all(
#         doctype= "Server Side Scripting",
#         fields=["first_name", "date_of_birth", "age"],
#         filters=conditions,        
#         order_by="first_name desc"
#         )
# 	return data


def get_cs_data(filters):
    conditions = get_conditions(filters)
    print("------------------------------------------------------")
    print(conditions)
    # use frappe.get_all to get all records of the table Server Side Scripting
    # the fields are first_name, date_of_birth, age
    # filters are the conditions variable, and order by first_name desc
    data = frappe.get_all(
        doctype= "Server Side Scripting",
        fields=["first_name", "date_of_birth", "age"],
        filters=conditions,
        order_by="first_name desc"
    )
    return data















# make a function that based on given filers put its values into conditions variable and return it
def get_conditions(filters):
    # list of dictionaries of conditions
    conditions = {}
    for key , value in filters.items():
         if filters.get(key):
              conditions[key]= value
    # if filters.get("first_name"):
    #     conditions.append(["first_name", "=", filters.get("first_name")])
    # if filters.get("date_of_birth"):
    #     conditions.append(["date_of_birth", "=", filters.get("date_of_birth")])
    # if filters.get("age"):
    #     conditions.append(["age", "=", filters.get("age")])
    return conditions