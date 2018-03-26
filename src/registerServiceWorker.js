import request from './api/request';

const isLocalhost = Boolean(window.location.hostname === 'localhost' || window.location.hostname === '[::1]' || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));

function registerValidSW(swUrl) {
  navigator.serviceWorker.register(swUrl).then((registration) => {
    registration.onupdatefound = () => { // eslint-disable-line no-param-reassign
      const installingWorker = registration.installing;
      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            console.log('New content is available; please refresh.'); // eslint-disable-line no-console
          } else {
            console.log('Content is cached for offline use.'); // eslint-disable-line no-console
          }
        }
      };
    };
  }).catch((error) => {
    console.error('Error during service worker registration:', error); // eslint-disable-line no-console
  });
}

function checkValidServiceWorker(swUrl) {
  request.get(swUrl).then((response) => {
    if (response.status === 404 || response.headers.get('content-type').indexOf('javascript') === -1) {
      navigator.serviceWorker.ready.then((registration) => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      registerValidSW(swUrl);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.'); // eslint-disable-line no-console
  });
}

export default function register() {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location);

    if (publicUrl.origin !== window.location.origin) return;

    window.addEventListener('load', () => {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

      if (isLocalhost) {
        checkValidServiceWorker(swUrl);

        navigator.serviceWorker.ready.then(() => {
          console.log('This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ'); // eslint-disable-line no-console
        });
      } else {
        registerValidSW(swUrl);
      }
    });
  }
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then((registration) => {
      registration.unregister();
    });
  }
}
