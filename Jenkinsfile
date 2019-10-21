pipeline{
  agent { label 'jos-nodejs-10' }
  stages{
    stage ('checkout'){
      steps{
        checkout scm
      }
    }
    stage ('install modules'){
      steps{
        sh '''
          npm -g config set registry http://jsccnexus.ont.belastingdienst.nl/repository/npm/
          npm install
        '''
      }
    }
    /* Testen moeten met Selenium Hub gaan werken. Gaan we nog onderzoeken.
    stage ('test'){
      steps{
        sh '''
          $(npm bin)/ng test --single-run --browsers Chrome_no_sandbox
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
        sh 'npm run lint'
      }
    }
    stage ('build') {
      steps{
        sh 'npm run prod-build'
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