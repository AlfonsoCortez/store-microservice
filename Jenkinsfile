pipeline {
    agent any

    stages {

        stage('Despliegue QA Store') {
            steps {
                echo 'Desplegando en QA Store'
            }
        }
        stage('Aprobacion manual') {
            input {
                message "Esta seguro que desea desplegar a producción?"
                ok "Aprobar"
                parameters {
                    string(name: 'comentario', defaultValue: '', description: 'Deje aquí su comentario')
                }
            }
            steps {
                echo "${comentario}"
            }
        }
        stage('Despliegue PROD Store...') {
            steps {
                echo "Desplegando en producción Notifi"
                sh "./mvnw package -Pprod verify -DskipTests jib:dockerBuild"
                sh "docker-compose -f ./src/main/docker/app.yml up  -d --build"
            }
        }
    }
}