node{
    def app
    
    stage('Clone repository'){
        git 'https://github.com/JellaliOumayma/Docker-projet.git'
        
    }
     stage('Build the image'){
        app = docker.build("oumymajellali/my-app:${env.BUILD_NUMBER}") 
        
    }
    stage('Test image'){
        app.inside{
            sh 'echo "test passed"'
        }
    }
  
    stage('Push the image'){
        withCredentials([usernamePassword(credentialsId: 'DockerHub-id', passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USERNAME')]) {
            sh 'docker login -u ${DOCKER_USERNAME} -p ${DOCKER_PASSWORD}'
            sh "docker push oumymajellali/my-app:${env.BUILD_NUMBER}"
        }

    }    
}