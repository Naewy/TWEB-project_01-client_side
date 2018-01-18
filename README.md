# TWEB 2017

## GitHub Analytics
Matthieu Chatelan, Lara Chauffoureaux

---

This project uses a collection of other repos in order to work. 

#### Architecture
The GitHub analytics projects is based on several componants. First of all, the client side of the project is hosted directly on github via GitHub Pages. You can consult the website directly with the following link : 

https://naewy.github.io/TWEB-project_01-client_side/

There is an agent working in the background and publishing updated data on github for the client. The agent's code is available here : 

https://github.com/Naewy/TWEB-project_01-agent

The agent is deployed in the cloud on heroku. Read the repo's README to know more about it.

#### Local use

In order to use a local client server, you can proceed with the following steps : 

1) Install "http-server" from npm
2) Install required dependencies with npm install (when in the repo's folder)
3) In the repo's root folder, run "http-server ." to run the server locally.

The client will still fetch data from : 

https://raw.githubusercontent.com/Naewy/TWEB-project_01-client_side/master/docs/data/data.json

If you want to change the source of the data, please update line 4 in the "generate.js" file. Make sur to have the appropriate data format.

#### Data Format

The data the client is fetching is formatted in a certain way. You can't change the format if you want the client to work "out of the box".

Here is how the JSON file is structured :

	[
		{
			"name":"omnirom",
			"description":"undefined",
			"url":"https://github.com/omnirom","
			logo":"https://avatars1.githubusercontent.com/u/5341305?v=4"
		},
		{
			"id":13535801,
			"name":"android_bootable_recovery",
			"description":null,
			"url":"https://github.com/omnirom/android_bootable_recovery",
			"nb_issues":122
		},
		{
			"id":13535948,
			"name":"android_packages_apps_OmniGears",
			"description":null,
			"url":"https://github.com/omnirom/android_packages_apps_OmniGears",
			"nb_issues":10
		},
		...
	]

The first object is some information about the enterprise being analyzed. The name, the description, the url of the enterprise on github and the logo's url are given. 

Every following object have all the same layout. First, the repo's id, then the name of the repo, then a description (if given), the url of the repo and finally the number of issues.
