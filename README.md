# HireHub — Job Board

HireHub is a full-stack job board platform where recruiters can create job listings and candidates can browse jobs and apply using resume links.

Built as a portfolio project to practice backend APIs, authentication, authorization, database relationships, and frontend integration.

---

## Features

### Authentication

* Register as Candidate or Recruiter
* Login with JWT authentication
* Protected routes
* Role-based access

### Jobs

* View all jobs
* Search jobs
* Pagination
* View job details
* Recruiters can create jobs

### Applications

* Apply to jobs
* Prevent duplicate applications
* Resume URL submission
* Candidate application history
* Recruiters can view applicants

### UI

* Glassmorphism design
* Pastel pink + pastel purple theme
* Responsive pages
* Empty states

---

## Tech Stack

Frontend:

* React
* React Router
* Axios

Backend:

* Node.js
* Express.js
* MongoDB
* Mongoose

Authentication:

* JWT
* bcrypt

Validation:

* Zod

---

## Project Structure

Frontend

src/
├── pages/
├── routes/
├── services/
├── components/

Backend

controllers/
models/
middleware/
routes/

---


## Installation

Clone repository

npm install

Backend

npm run dev

Frontend

npm run dev

---

## User Roles

Candidate

* Browse jobs
* Apply for jobs
* View applications

Recruiter

* Create jobs
* View applicants

---
