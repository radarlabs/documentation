import axios from 'axios';

class LoggedInApiKey {
  // only care/fetch the test public key
  testPublicKey = null;

  attemptToFetchKeys() {
    if(!window.localStorage) {
      return;
    }
    let redux = window.localStorage.redux;
    if(!redux) {
      return;
    }
    try {
      redux = JSON.parse(redux)
    } catch(e) {
      return
    }
    if(!redux.session) {
      return;
    }
    const apiHost = redux.session.apiHost;
    if(!apiHost) {
      return;
    }
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': redux.session.token,
      'X-Radar-Live': false,
    };
    const options = {
      url: `${apiHost}/app/organization/keys`,
      method: 'GET',
      headers
    };
    const that = this;
    axios(options).then(response => {
      if(response.data && response.data.keys && response.data.keys.length === 1) {
        const testKeys = response.data.keys[0].keys.filter(key => key.live === false);
        if(testKeys.length) {
          that.testPublicKey = testKeys.filter(key => key.secret === false)[0].key;
        }
      }
    })
  }

  getTestKeys() {
    // return a promise that will check whether the keys
    // are ready and return them then, and otherwise will set a set interval
    // until they are ready
    return new Promise((resolve, reject) => {
      if(this.testPublicKey) {
        resolve({
          testPublicKey: this.testPublicKey
        })
      } else {
        const interval = setInterval(() => {
          if(this.testPublicKey) {
            clearInterval(interval);
            resolve({
              testPublicKey: this.testPublicKey
            })
          }
        }, 500)
        // don't have a bunch of intervals running forever
        // if the load doesn't work
        setTimeout(() => {
          clearInterval(interval);
          reject('Timed out fetching keys')
        }, 5000);
      }
    })
  }
}

const apiKeyFetcher = new LoggedInApiKey()
apiKeyFetcher.attemptToFetchKeys()
export { apiKeyFetcher };
