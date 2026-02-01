# ⚡ EV Chargers Map 

This repository contains a student project developed as part of the **professional course** **“Cloud Application Development (Amazon Web Services)”**, organized and delivered by **Rivian**.
The project implements a cloud-based web application that visualizes **electric vehicle charging stations** on an interactive map 🗺️.

---

## 📦 Repository Contents

- ☁️ **AWS Lambda functions** – Backend logic for fetching EV chargers by city  
- 🗄️ **DynamoDB** – Storage of charging station data  
- 🌍 **Web frontend**  
- ⚙️ **Serverless & Docker setup** – Cloud infrastructure and local development  

---

## 🎯 Project Objectives

- Understand the **fundamentals of cloud computing**   
- Work with **core AWS services**  
- Develop and deploy **cloud-based applications**  
- Gain **practical experience** with cloud infrastructure and tooling  

---

## 🛠️ Technologies and Tools

- ☁️ **Amazon Web Services (AWS)**
- 🌐 **Node.js**
- 🐳 **Docker**
- 🖥️ **AWS CLI / LocalStack**
- 🐙 **Git & GitHub**

---

## 🚀 How to Run the Project (Local Development)

1. Install project dependencies:
npm install

2. Create a `.env` file in the project root and set the OpenChargeMap API key:
OCM_API_KEY=your_openchargemap_api_key_here

3. Deploy the backend to LocalStack (this command handles docker compose down/up internally):
npm run redeploy

4. Upload the frontend to the S3 static website:
awslocal s3 sync ./web s3://matf-rvtech-website

5. Open the application in the browser:
https://matf-rvtech-website.s3-website.localhost.localstack.cloud:4566

Note:
After each backend redeploy, the API Gateway ID changes.
Update `API_ID` in `index.html` accordingly.

---

## 👩‍💻👨‍💻 Authors

- **Miona Sretenović**  
- **Ognjen Marković**

---
