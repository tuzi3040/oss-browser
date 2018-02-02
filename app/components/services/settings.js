angular.module('web')
.factory('settingsSvs', [function(){

  return {
    autoUpgrade: {
      get: function(){
        return parseInt(localStorage.getItem('autoUpgrade')||1);
      },
      set: function(v){
        return localStorage.setItem('autoUpgrade',v);
      }
    },
    maxUploadJobCount: {
      get: function(){
        return parseInt(localStorage.getItem('maxUploadJobCount')||3);
      },
      set: function(v){
        return localStorage.setItem('maxUploadJobCount',v);
      }
    },

    maxDownloadJobCount: {
      get: function(){
        return parseInt(localStorage.getItem('maxDownloadJobCount')||3);
      },
      set: function(v){
        return localStorage.setItem('maxDownloadJobCount',v);
      }
    },

    showImageSnapshot: {
      get: function(){
        return parseInt(localStorage.getItem('showImageSnapshot')||1);
      },
      set: function(v){
        return localStorage.setItem('showImageSnapshot',v);
      }
    },

    historiesLength: {
      get: function(){
        return parseInt(localStorage.getItem('historiesLength')||100);
      },
      set: function(v){
        return localStorage.setItem('historiesLength',v);
      }
    },
    mailSmtp: {
      get: function(){
        return JSON.parse(localStorage.getItem('mailSender')||'{"port":465}');
      },
      set: function(v){
        return localStorage.setItem('mailSender',JSON.stringify(v));
      }
    }
  };
}]);
