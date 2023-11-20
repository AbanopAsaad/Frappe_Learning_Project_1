# Copyright (c) 2023, Abanop Asaad and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document
import json

class Clintsidescripting(Document):
	pass


# the msg in passed from the .js of server side scripting.js
# NOTE THAT THE FUNCTION IS OUTSIDE OF THE CLASS
@frappe.whitelist()

def frappe_call(hhhhh,msg):
	x=json.loads(hhhhh)
	print(x)
	# x.email="abanop_asaad@gmail.com"
	#  db.set value 
	m="abanop_asaad@yahoo.com"
	out_put= frappe.db.set_value("Server Side Scripting",x.get('name'),"email",m)
	print(out_put)
	
    # frappe.msgprint(msg)
    # return "Hi this message from.py of the server side scripting"
	
	

	import time
	time.sleep(5)

	frappe.msgprint(msg)
	# return "Hi this message from .py of the client side scripting"

