# Copyright (c) 2023, Abanop Asaad and contributors
# For license information, please see license.txt

import frappe
from frappe import _
from frappe.model.document import Document


class ServerSideScripting(Document):

	# def validate(self):
	# 	frappe.msgprint(
	# 		_("Hello my Full name is {0} {1} {2}  ").format(
    #             self.first_name, self.middle_name, self.last_name
	# 	)
	# )


	def validate(self):		

		# get child table form the current document
		# for row in self.get('family_members'):
		# 	frappe.msgprint(
        #         _("row is : {0} , family member name : {1} , And his Age is = {2} , And the relation is {3}")
		# 		.format(row.idx, row.name1, row.age, row.relation)
		# 	)
		
			
		# self.get_document()
		# self.new_document()
		# self.get_value()
		# self.set_value()
		# self.is_document_exist()
		# self.count_documents_with_field_enabled()
		self.sql_query()

	




	def get_document(self):
		doc = frappe.get_doc('Clint side scripting',self.clint_side_scripting)
		frappe.msgprint(

			_("THe name is {0} , the age is {1} , and the owner is {2} and the Document name is {3}")
			.format(doc.first_name,doc.age, doc.owner, doc)
		)

		# now we have the document which is a row in the database so we have child table in it lets get it
		for row in doc.get("family_members"):
			frappe.msgprint(

				_(" Row Number : {3} ,  Member Name is {0} , Member Age is : {1} , Member Relation is {2} ")
				.format(row.name1,row.age,row.relation,row.idx)


			)


	# lets add new document to the clint side scripting DocType
	def new_document(self):
		doc = frappe.new_doc("Clint side scripting")

		doc.first_name = "lina"
		doc.middle_name = "zaghlol"
		doc.last_name = "m"
		doc.age = "23"

		# and lets try to add document to the child table family_members
		doc.append("family_members", {
            "name1": "lona",
            "age": "23",
            "relation": "sister"
        })

		doc.insert()

	def get_value(self):
		# DocType , document , ['filed1','filed2',.....]
		first_name,age= frappe.db.get_value("Clint side scripting",self.clint_side_scripting,
								  ["first_name" , "age"])
		frappe.msgprint(
            _("THe name is {0}, the age is {1} ")
            .format(first_name,age)
        )



	# Now lets try to set the value , like change the age
	def set_value(self):
		# DocType , document , filed name ,value
		frappe.db.set_value("Clint side scripting",self.clint_side_scripting,"age",102)
		self.get_value()
	


	#If we want to know if that document is actually existing in the DocType table
	def is_document_exist(self):
		# DocType table , document name
		Document_Name_we_Search_for = "PR00106"
		if frappe.db.exists("Clint side scripting",Document_Name_we_Search_for):
		# if frappe.db.exists("Clint side scripting",self.clint_side_scripting):
			frappe.msgprint(
				_("The document {0} is already exist in the Clint side scripting table")
				# .format(self.clint_side_scripting)
				.format(Document_Name_we_Search_for)
			)
		else:
			frappe.msgprint(
				_("The document {0} is not exist in Clint Side Scripting table")
				# .format(self.clint_side_scripting)
				.format(Document_Name_we_Search_for)
			)



	# Now lets try to count the number of documents that field enabled is on 
	def count_documents_with_field_enabled(self):
		count= frappe.db.count("Clint side scripting" , {"check_box" : 1}	)
		frappe.msgprint(
			_("There are {0} documents that field check_box is on At Clint side scripting table")
			.format(count)
		)



	# Time for SQL
	def sql_query(self):
		# query , filters , as_dict
		records = frappe.db.sql(
		"""	
			SELECT 
				first_name,age 
			FROM 
                `tabClint side scripting`
			WHERE 
                check_box = 1
		""",as_dict=1
		)
		for row in records:
				frappe.msgprint(
					_("The name is {0}, the age is {1} ")
					.format(row.first_name,row.age)
				)



	# @frappe.whitelist()
	# # the msg in passed from the .js of server side scripting 
	# def frm_call(self,msg):
	# 	self.email="abanop_asaad@yahoo.com"
	# 	import time
	# 	time.sleep(5)
	# 	frappe.msgprint(msg)
	# 	return "Hi this message from .py of the server side scripting"