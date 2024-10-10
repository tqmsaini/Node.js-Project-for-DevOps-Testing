pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }
    stage('Test') {
      steps {
        sh 'npm test'
      }
    }
    stage('Docker Build') {
      steps {
        script {
          dockerImage = docker.build("devops-nodejs-app")
        }
      }
    }
    stage('Deploy') {
      steps {
        sh 'docker run -d -p 3000:3000 devops-nodejs-app'
      }
    }
  }
}
