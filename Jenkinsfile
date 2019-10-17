pipeline{
  agent { label 'jos-nodejs-8' }
  stages{
    stage ('checkout'){
      steps{
        checkout scm
      }
    }
    stage ('install modules'){
      steps{
        sh '''
          npm install --verbose -d 
        '''
      }
    }
    /* Testen moeten met Selenium Hub gaan werken. Gaan we nog onderzoeken.
    stage ('test'){
      steps{
        sh '''
          npm test --single-run --browsers Chrome_no_sandbox
        '''
      }
      post {
          always {
            junit "test-results.xml"
          }
      }
    }
    */
    stage ('code quality'){
      steps{
        sh 'npm lint'
      }
    }
    stage ('build') {
      steps{
        sh 'npm build --prod --build-optimizer'
      }
    }
    /*
    stage ('build image') {
      steps{
        sh '''
          rm -rf node_modules
          oc start-build angular-5-example --from-dir=. --follow
        '''
      }
    }
    */
  }
}