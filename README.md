# ShareCalculator

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.6.

[Live Demo](https://bit.ly/3m8WlkM)


## Cordova App
## Step 0: Set up Andriod Studio SDK in your system.
  [Download Android Studio](https://bit.ly/3m5WjKu)
  

## Step 1: Install Cordova globally
   npm install -g cordova
   
	
## Step 2: Create Angular Project
	 ng new ShareCalculator
   

## Step 3: Creating a new project (Sepratly)
	 cordova create ShareCalculator com.example.sharecalc ShareCalculator
	 cordova requirements (This will check system requirements)
   
	
## Step 4: Testing the Cordova project
	 cordova platform add browser (Ready for open in browser)
	 cordova run browser (Run in browser)
	 cordova platform add android (Platform add for Android)
   

## Step 5: Merge Angular app with cordova app and build Angular app
	 Setup your publish code dist folder to www folder (angular.json)
   ng build --prod --aot


## Step 6: If Step 4 showing Gradle error then install gradle and setup environment veriables
   [Download Gradle](https://bit.ly/3nofjDn)
	 Under System Variables select Path, then click Edit. Add an entry for C:\Gradle\gradle-7.2\bin. Click OK to save
	 gradle -v
	
  
## Step 7: Generate apk file using Cordova. 
   cordova build android


## Step 8: If Step 7 generate .apk file then you can run this file with your mobile or emulator.
	 cordova emulate android
  
  
## Check Cordova offical documentation.
   [Cordova Offical Website](https://cordova.apache.org/)
	
