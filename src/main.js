// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;



function start() {
  // 2. Initialize the JavaScript client library.
  gapi.client.init({
    'apiKey': 'AIzaSyCe2q-j73p9CmwZEB1xnLatOluIpsXDLqg',
    'discoveryDocs': ['https://people.googleapis.com/$discovery/rest'],
    'clientId': '408558141855-sgp98ii2qa922a076ddd2u2bq34tjvl9.apps.googleusercontent.com',
    'scope': 'https://www.googleapis.com/auth/spreadsheets.readonly	',
    // 'redirect_uri': 'localhost:8080/dashboard'
  }).then(function() {
    // 3. Initialize and make the API request.
    return gapi.client.people.people.get({
      resourceName: 'people/me'
    });
  }).then(function(response) {
    console.log(response.result);
  }, function(reason) {
    console.log('Error: ' + reason.result.error.message);
  })
};
// 1. Load the JavaScript client library.
gapi.load('client', start);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
