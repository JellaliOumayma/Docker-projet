pipeline{

	agent any

	environment {
		DOCKERHUB_CREDENTIALS=credentials('oumymajellali-dockerhub')
	}

	stages {
	    
	    stage('gitclone') {

			steps {
				   git 'https://github.com/JellaliOumayma/Docker-projet.git'
			}
		}

		stage('Build') {

			steps {
				sh 'docker build -t oumymajellali/my-app:latest .'
			}
		}

		stage('Login') {

			steps {
				sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
			}
		}

		stage('Push') {

			steps {
				sh 'docker push oumymajellali/my-app:latest'
			}
		}
	}

	post {
		always {
			sh 'docker logout'
		}
	}

}