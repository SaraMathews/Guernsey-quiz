# **Guernsey Quiz** #
# **Description** #
This website consists of a quiz with questions about various subjects related to Guernsey. 
It's intended to give the user a deeper knowledge of Guernsey in a fun and interactive way. It's for anyone who is interested in learning more about Guernsey or testing their current knowledge of the island.

![Description image of different devices](docs/multi-device.png)

## **Features**
### *Header*
The header consists of the logo "Guernsey Quiz" displayed next to a small diamond icon. The header stretches to the full width of the page with the logo centered in the middle. The header is displayed on all pages to provide consistency throughout the website. The purpose of the header is to ensure that the user easily knows which website they are currently on. If the user wants to end the quiz, they can click on the logo, which will take them back to the welcome page. This function is implemented on all pages to make the website more user-friendly. 

![Image of header](docs/header.png)
### *Footer*
The footer section is located at the bottom of all pages and displays the text "Made by Sara Mathews." This section shows who made the website and quiz, and provides an email address if the user wants to contact the creator. 

![Image of footer](docs/footer.png)
### *Welcome page*
The background color is a shade of sand and is the same for all pages to provide consistency. On the welcome page, the user is welcomed to the quiz. They have the option to read the instructions or to start the quiz by pressing the "Start quiz" button.

![Image of welcome page](docs/welcome.png) 
### *Welcome page instructions*
On the welcome page, the user can click the button labeled instructions. When the user clicks the instruction button, a pop-up window displays, providing the instructions for the quiz. When the user has read the instructions, they can click the exit cross in the top right corner of the pop-up window to close it. The value of this function is to give the user the option to read, or not read, the instructions before starting the quiz. 

![Image of instructions](docs/instructions.png)
### *Quiz questions*
When the user clicks the "Start quiz" button a new window opens, displaying the first quiz question. Underneath the question the user is provided with three different answers, one of which is the correct one. When the user has decided on an answer, they click the radio button in front of chosen answer. The radio button will turn blue, indicating that the user has chosen this answer. 
To continue with the next question, the user must click the submit button. This submits the answer and automatically displays the next question on a new page. An answer must be chosen to be able to submit and move on to the next question. It is not possible to go back once the answer is submitted.
This process is repeated until all eight questions are submitted. The consistent layout and process through all questions give an easy and user-friendly flow. 

![Image of a question page](docs/questions.png)
### *Alert window*
If the user hasn't clicked the radio button for their chosen answer and instead clicks the "Submit" button, an alert window will pop up and alert the user that they have to choose an answer before submitting. This way the user gets a message as to why the next question isn't displaying. 

![Image of alert window](docs/alert.png)
### *Result page*
When the user has submitted the last question, the result page opens, displaying a cheerful congratulation and the user's score. 
If the user got five or more correct answers, an additional rewarding comment is displayed together with a happy smiley face underneath the user's score. If the user scores fewer than five correct answers, a different and encouraging comment is displayed under the user's score. By immediately receiving the score with an appropriate comment, the user will be encouraged to either redo the quiz or perhaps consider visiting Guernsey to explore the different topics covered in the quiz.
On the result page, the user can opt to check all the correct answers in the quiz by clicking the "Check answers" button. 

![Image of result page](docs/result-two.png)
![Image of result page](docs/result.png)
### *Check answers page*
On this page, all the correct answers for the quiz questions are displayed in order. This is for anyone who didn't score 8/8 and wants to check which answers they got wrong. 

![Image of correct answers](docs/correct-answers.png)
### *Features left to implement*
- Add more styling to the radio buttons.
- Change the smiley face image to white instead of black. 
- On the check answer page, display the user's correct answers in green and the wrong answers in red. 

## **Testing**
- The Lighthouse accessibility score on "Quiz pages" displays the comment "Form elements do not have associated labels" which brings the accessibility score down to 85%. I did not have time to find a way to add labels successfully to the radio buttons in script.js. So this is something to add in the future to bring the accessibility score up. 

 ### *Unfixed bugs*
 - The "Result page" main box, which displays the smiley icon (if the score is >=5), is not responsive on screen sizes below 530px. I don't know how to adjust the box size on the result page without adjusting all other pages with the class "main box". I did not have time to look into this bug in more depth. 
 ## **Deployment**
 ### *Version Control*
The git commands below were used throughout development to push code to the remote repository in GitHub:
- `git add .` - This command was used to add a change in the working directory to the staging area
- `git commit -m "message"` -This command was used to save changes to the local repository. A brief description of what has changed and when
- `git push` - This command was used to push all commits to the remote repository on GitHub

### *Deployment to Github Pages*
The steps below were followed to deploy the site to GitHub pages:
- In the GitHub repository for guernsey-quiz, navigate to the "Settings" tab
- Under the "Code and automation" section on the left-hand side menu, select "Pages"
-  From the source section drop-down menu, select the "main" branch and click "Save"
- The page will automatically refresh, and a live link will be displayed on the top of the "GitHub Section," indicating a successful deployment

The live link can be found here- 

### *Clone the Repository from GitHub*
The steps below were followed to clone the repository locally  
- Navigate to the main page of the GitHub Repository you want to clone 
- Above the list of files, click on the drop-down button "<>Code"
- Copy the repository link 
- Open Terminal, type git clone followed by the copied URL, and press enter to create your local clone

## **Credits**
### *Content*
- Hide a button in Javascript (inspired by) https://stackoverflow.com/questions/17630945/is-there-an-opposite-to-displaynone#:~:text=display%3A%20none%20doesn't%20have,are%20opposite%20to%20each%20other  
- How To Create a Modal Box (copied code) https://www.w3schools.com/howto/howto_css_modals.asp
- How to add an image in HTML via JavaScript (partially copied code) https://linuxhint.com/add-image-in-html-via-javascript/
- Change image size with JavaScript (inspired by) https://stackoverflow.com/questions/1297449/change-image-size-with-javascript
- How to add a favicon was taken from the Love Math module
- A lot of inspiration was taken from the JavaScript Essentials module in LMS
- The questions were written together with my mother-in-law, who lives in Guernsey
- The color scheme and some of the layout was taken from my last project, Hidden Gem's Guernsey. 

### *Media*
- The icon in the header was taken from Font Awesome 
- The happy face image was taken from google.com https://www.pngfind.com/mpng/hTJJoJ_happy-face-png-smiley-face-icon-png-transparent/

