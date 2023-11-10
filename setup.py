from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in test_app_1/__init__.py
from test_app_1 import __version__ as version

setup(
	name="test_app_1",
	version=version,
	description="learning",
	author="Abanop Asaad",
	author_email="test_app_1@yahoo.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
