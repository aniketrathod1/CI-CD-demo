CI/CD Pipeline with GitHub Actions & Docker (No Cloud Needed)

Author: Aniket Thavaru Rathod 
Date: 27-Oct-2025
 Organization: Self / Personal Project


• Abstract 
This project demonstrates a complete CI/CD pipeline using GitHub Actions and Docker. It automates building, testing, and deploying a containerized application locally without relying on cloud services

• Introduction:-
 Manual deployment of applications is time-consuming and error-prone. This project aims to implement an automated CI/CD pipeline that reduces manual effort and ensures consistent deployments
Tools & Technology 
• GitHub Actions – CI/CD automation
 • Docker – Containerization
 • Docker Hub – Image storage 
• Minikube / Local VM – Local deployment 
• Git & GitHub – Version control
Architecture / Workflow
 1. Developer pushes code to GitHub.
 2. GitHub Actions workflow automatically runs tests, builds Docker image, and pushes it to Docker Hub. 
3. The image is pulled and deployed locally using Docker or Minikube. 
[Placeholder for Architecture Diagram / Workflow Screenshot]

Implementation / Methodology 
The project uses GitHub Actions workflows for automation. Dockerfile and docker-compose.yml define the container setup. The pipeline includes build, test, and deploy stages.
 [Placeholder for Dockerfile snippet / GitHub Actions workflow snippet]

Challenges / Troubleshooting 
• Problem: YAML syntax error 
Solution: Workflow failed due to invalid indentation or missing colon. Solution: Used YAML validator online and corrected spacing/indentation.
 • Problem: Error: Input required and not supplied: aws-region 
Solution: Workflow failed because AWS region was not set. Solution: Added aws-region: ap-south-1 in the workflow and configured secrets properly
• Problem: Docker image build failed
 Solution: Invalid Dockerfile or missing base image. Solution: Fixed Dockerfile syntax, used correct base image, and rebuilt locally first. 
• Problem: Authentication failed while pushing image
 Solution: Docker Hub login failed in GitHub Actions. Solution: Created DOCKERHUB_USERNAME and DOCKERHUB_TOKEN secrets and used docker/login-action@v2.

 • Problem: Container not running locally 
Solution: Port binding issue or image not found. Solution: Used docker ps, docker logs to debug, fixed port mapping in docker-compose.yml, then redeployed

Results / Outcome 
The final project resulted in a fully automated CI/CD pipeline. Application builds, tests, and deploys automatically whenever code is pushed to GitHub.
 [Placeholder for deployed app screenshot]
Conclusion & Learning 
This project provided hands-on experience with CI/CD pipelines, GitHub Actions, Docker, and local deployment. It taught troubleshooting common issues and automation best practices.

References / Resources
 • GitHub Actions Documentation
 • Docker Official Documentation 
• Docker Hub Guides
 • Minikube Official Docs

 <img width="940" height="627" alt="image" src="https://github.com/user-attachments/assets/feeb8c80-eb74-4d46-9745-ba151bfb0d56" />


 











