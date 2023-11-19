# Copyright (c) 2023, Abanop Asaad and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class Clintsidescripting(Document):
    pass

# the msg in passed from the .js of server side scripting.js
# NOTE THAT THE FUNCTION IS OUTSIDE OF THE CLASS
@frappe.whitelist()
def frappe_call(msg):
	# self.email="abanop_asaad@yahoo.com"

	import time
	time.sleep(5)

	frappe.msgprint(msg)
	# return "Hi this message from .py of the client side scripting"