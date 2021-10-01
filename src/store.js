import { createStore } from 'vuex';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000/'

const store = createStore({
  state: {
    headerName: '',
    validSessionCookie: '',
    lastCookieValue: ''
  },
  mutations: {
    setSessionCookieValid(state, payload){
      state.validSessionCookie = payload
    },
    setHeaderName(state, payload) {
      state.headerName = payload
    }
  },
  actions: {
    isSessionCookieValid(context) {
      const cookieValue = getCookie('students-session');
      if(context.state.lastCookieValue !== cookieValue){
        context.state.lastCookieValue = cookieValue;
        return axios.post('/session/getUserId', {"sessionId": cookieValue})
          .then((res) => {
            context.commit('setSessionCookieValid', res.data.success);
            return res.data.success;
        })
      }else{
        return context.state.validSessionCookie;
      }
    },
    log(context, form) {
      return axios.post('/session/log', {"pseudo": form.username, "password": form.password})
        .then((res) => {
          if(res.data.message === 'Unable to find user') {
            return {status: 404};
          }
          if(res.data.message === 'Bad password') {
            return {status: 500};
          }
          return {status: 201, user: res.data.user};
        })
    },
    addCookie(context, sessionId) {
      setCookie("students-session", sessionId, 180)
    },
    isPseudoUsable(context, pseudo){
      return axios.post('/user/isPseudo', {"pseudo": pseudo})
      .then(response => {
        return !response.data.founded;
      })
    }
  }
});

function setCookie(name,value,days) {
  var expires = "";
  if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days*24*60*60*1000));
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}
function eraseCookie(name) {   
  document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

export default store;