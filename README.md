# DevOps Node.js App

This is a simple Node.js application built to demonstrate DevOps practices, including CI/CD, containerization with Docker, and automated testing using Mocha and Chai.

## Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Running the App](#running-the-app)
  - [Locally](#running-locally)
  - [With Docker](#running-with-docker)
- [Testing](#testing)
- [CI/CD Pipeline](#ci-cd-pipeline)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

This project provides a simple Express-based HTTP server with a root endpoint (`/`) that returns "Hello, DevOps World!" It includes unit tests, Docker support, and a CI/CD pipeline configuration for automated build, test, and deployment processes.

## Tech Stack

- **Node.js** with **Express** for the backend server
- **Mocha** and **Chai** for testing
- **Docker** for containerization
- **Jenkins/GitLab CI** for CI/CD pipelines

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [Jenkins](https://www.jenkins.io/) or [GitLab CI](https://about.gitlab.com/) for CI/CD (optional)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/devops-nodejs-app.git
   cd devops-nodejs-app
