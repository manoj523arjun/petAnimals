# petAnimals

Instructions for dev :
(make sure node js to be installed in PC)

1) using git tool clone repository to local pc by using below command
	" git clone https://github.com/manoj523arjun/petAnimals.git "

2) Run below command to install node packages

	" npm install "

3) Run below command to check app in dev mode

	" npm start "

exit

Instructions for Production :

1) using git tool clone repository to local pc by using below command
	" git clone https://github.com/manoj523arjun/petAnimals.git "

2) run below command to create build folder
	" npm run build "

3) We can see build application by using "serve" module. for that we need to install serve module globally in our PC

4) Run below command in command line to install serve module globally
	
	" npm install -g serve "

5) after install serve module globally, Open cloned repo folder in command line and run below command to see application

" serve -s build "

6) Once we run above command it will show two urls. We need to open any one url in browser to check application

Directly to check application (Preference - this is optional) :

I have deployed this application in heroku. To check the application in browser, please open below url in any browser

 " https://petanimals.herokuapp.com/ "
