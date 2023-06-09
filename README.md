# Quiz App

This is repository contains a quiz app buils using HTML CSS and JavaScript.
Please follow the instructions to set it up.

**Features**

1. Three quiz sections
2. 10 questions in each
3. User input validation
4. Final score display

- ```src/index.html``` : This is the root HTML document. It renders the entrance page for Quiz.
- ```src/music.html``` : This is the HTML page for rendering of music quiz page.
- ```src/modernart.html``` : This is the HTML page for rendering of modern-art quiz page.
- ```src/code.html``` : This is the HTML page for rendering of coding quiz page.
- ```src/dataset.json``` : This is the json file with preloaded 10 questions for each quiz sections.
- ```src/js/index.js```: This is the main JavaScript file which is imported into the HTML document. You can directly start building the application here. When you open this file, you will see some code present already. More on this below.
- ```src/js/music.js```: This is the java script with logic to update the question lists for music quiz section and calculate final score based on user's input.
- ```src/js/modernart.js```: This is the java script with logic to update the question lists for modern-art quiz section and calculate final score based on user's input.
- ```src/js/code.js```: This is the java script with logic to update the question lists for code quiz section and calculate final score based on user's input.
- ```src/js/score.js``` : This is the java script with logic to show final score .
- ```src/css/app.css```: This is the main stylesheet to design the rendering of app entracne page.
- ```src/css/music.css```: This is the stylesheet to design the quiz app components. It is used for style of questions and answers page for all 3 sections of quiz.

- ```src/public```: This folder contains the MSW utility file (mockServiceWorker.js) which should not be edited/removed. Any files you place in this folder can be directly accessed in your HTML document. Use this for placing static assets such as images. 

**Instructions**

- **Development** : Run `npm run dev` - This will start the development server and open the app in the default browser. You can then work with the files in the src/ folder and can see instant updates in the browser.
  
- **Production Build**: Run `npm run build` - This will produce a build edition that you can then deploy on the cloud/host on a static file service such as GitHub pages or surge.sh.  We recommend trying https://surge.sh for deploying static apps. Please note that the build also copies down the mockServiceWorker.js file into the dist folder. You can safely remove this file from the dist folder before deploying your app.



#   Q u i z _ P o p  
 #   h a c k a t h o n _ a p p  
 