pipeline{

    agent any

    parameters{
        string(name: 'SPEC', defaultValue: 'cypress/e2e/**/**', description: "Enter the scripts")
        choice(name: 'BROWSER', choices: ['chrome', 'edge', 'firefox'], description: "Choose your browser")
    }

    options{
        ansiColor('xterm')
    }

    stages{
        stage('Building'){
            steps{
                echo "Building the application"
            }
        }
        stage('Testing'){
            steps{
                bat "npm i"
                bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
            }
        }
        stage('Deploying'){
            steps{
                echo "Deploying the application"
            }
        }
    }

    post{
        always{
            publishHTML(target :[allowMissing: false, 
            alwaysLinkToLastBuild: false, 
            keepAll: true, 
            reportDir: 'cypress/report', 
            reportFiles: 'myreport.html', 
            reportName: 'HTML Report', 
            reportTitles: 'The Reports', 
            useWrapperFileDirectly: true])
        }
    }


}