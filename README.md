# taski-tech-assignment
To deliver an company assignment:

#################TASK 2#####################!!!!

STEP 1::::::::::::::::::::::::::::::::::::::::::::::::>Install Required Software (prerequsites)

Install the following:

1. Git bash
   
Download: https://git-scm.com/downloads
Purpose:
•	Used for source control
•	Push code to GitLab/GitHub

2. Node.js
   
Download: https://nodejs.org/
Purpose:
•	Runs the Node.js application
•	Runs npm commands
Verify installation:
node -v
npm -v

3. Docker Desktop

Download: https://www.docker.com/products/docker-desktop/
Purpose:
•   Builds Docker images
•   Runs containers
•   Provides local Kubernetes cluster

Verify installation:
docker -v

4. kubectl
Install Guide: https://kubernetes.io/docs/tasks/tools/install-kubectl-windows/
Purpose:
•	Communicates with Kubernetes cluster
Verify:
kubectl version --client


STEP 2::::::::::::::::::::::::::::::::::::::::::::::::::::::>:Guide of workflow
1.using git bash make directory known as hello-app

2.cd to the new dir

3.now make an file with .js extension and code a app for the demo        //in this assignment i have decided to make a simple hello world alternative

4.initialize git and make a repo in remote server                        //install all dependencies for ex command :npm install

5.configure git for login

6.stage,commmit and push from local repo to remote                       //github act as a source hub for the code

7.make a package.json file                                               //for automation

8.make a docker file                                                     //to containerization of app for later

9.add,commit and push

10.create a test file in test folder and run test tool commands          //run commands like supertest ,jest,eslint to check unit test,integration test and static code anlysis

11.check for security vulnerablilites using auditcmd

12.add commmit and push as usual

13.build the docker image and run the container and listen to the port.   //check out the output of the app in the port locally

14.login to docker hub,tag,push to docker hub and run image               //to verify the image and output is obtainable

15.create deployment.yaml and service.yaml                                //required for k8 to work for ex:for the working of load balancing,stable ntw,managing pods,images and states 

16.add,commit and push as usual
17.create a clone branch and dont merge with main branch in github        //acts as an basic version control

18.run kubectl and create kubeconfig file                                 //this action paired with activating k8 in desktop docker will help deploy pods locally

19.port forward to listen to server                                       //for local kernel debugging

20.make a another local repo and push it to gitlab

21.create an gitlab-ci file and ppopulate it                              //this is needed for ci part. for ex. it has test,build,deploy stages

22.cereate the variables and add rolling update in ci.yml                 // its used for communicating with docker reg so images can be accessed and version control can be used.

23.add email nnotification scritp to ci.yml                               //the given email will be notified in case of success or failure of pipeline

24.push the repo to automate the pipeline                                //as soon as an push request is encountered the pipeline starts >>test>build>deploy

25.update the code to suit ci/cd where required                          //ci/cd enviromnet is strict and doesnt accept certain type and variable to avoid failure during runtime

26.configure a self host runner with keys using base 64                  //a runner is used to deploy the app using base 64 to encrypt and use the constant tag in ylm script 

27.run a self host runner in windows terminal and a kind in gitbash      //instead of using aws and other costly services using free of cost runner is good for this case to act as an local pipeline delivery

28.Thats about it ,any push from source will trigger the pipeline and will deploy to end server.




