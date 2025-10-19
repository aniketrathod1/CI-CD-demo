CI/CD Pipeline with GitHub Actions & Docker (No Cloud Needed)
Objective
Set up a full CI/CD pipeline that:
- Builds a Docker image
- Runs tests
- Deploys locally (Minikube or local VM)
Tools
- GitHub Actions
- Docker
- Docker Hub (free)
- Minikube or local VM
Step 1: Prepare Application & Dockerfile
Project Structure Example:
ci-cd-demo/
├── app/
│ ├── index.js
│ └── package.json
├── Dockerfile
└── docker-compose.yml
Dockerfile Example:
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "index.js"]
docker-compose.yml Example:  
version: '3'
services:
 app:
 build: .
 ports:
 - "3000:3000"
Step 2: Test Locally
docker-compose build
docker-compose up
Visit http://localhost:3000 to verify the app runs.
Step 3: Set Up GitHub Actions Workflow
Create directory & file:
.github/workflows/ci-cd.yml
Sample workflow:
name: CI/CD Pipeline
on:
 push:
 branches: [main]
jobs:
 build-test-deploy:
 runs-on: ubuntu-latest
 steps:
 - uses: actions/checkout@v3
 - name: Set up Node.js
 uses: actions/setup-node@v3. 
with:
 node-version: '18'
 - name: Install dependencies
 run: npm install
 - name: Run tests
 run: npm test
 - name: Build Docker image
 run: docker build -t yourusername/ci-cd-demo:latest .
 - name: Log in to Docker Hub
 uses: docker/login-action@v2
 with:
 username: ${{ secrets.DOCKER_USERNAME }}
 password: ${{ secrets.DOCKER_PASSWORD }}
 - name: Push Docker image
 run: docker push yourusername/ci-cd-demo:latest
Step 4: Add GitHub Secrets
- DOCKER_USERNAME → Your Docker Hub username
- DOCKER_PASSWORD → Docker Hub password
Step 5: Deploy Locally (Minikube or VM)
Pull image:
docker pull yourusername/ci-cd-demo:latest
Run container:
docker run -d -p 3000:3000 yourusername/ci-cd-demo:latest
Verify: Visit http://localhost:3000 
Optionally, you can deploy with Minikube using a deployment.yaml file.
Deliverables
- GitHub repository with workflow .yml
- Docker Hub image link
- CI/CD workflow results screenshot
- App deployed locally screenshot
