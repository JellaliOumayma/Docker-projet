node{
    def app
    
    stage('Clone repository'){
        git branch: 'main' , url:'https://github.com/JellaliOumayma/Docker-projet.git'
        
    }
     stage('Build the image'){
        app = docker.build("oumymajellali/my-app:${env.BUILD_NUMBER}") 
        
    }
    stage('Test image'){
        app.inside{
            sh 'echo "test passed"'
        }
    }
  stage('Push the image') {
    withCredentials([usernamePassword(credentialsId: 'oumymajellali-dockerhub', passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USERNAME')]) {
        sh "echo \${DOCKER_PASSWORD} | docker login -u \${DOCKER_USERNAME} --password-stdin"
        sh "docker push oumymajellali/my-app:${env.BUILD_NUMBER}"
}
     
}