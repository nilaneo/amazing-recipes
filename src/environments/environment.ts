// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBTMV7Viycu1Em532_eTngzqcNjWo61-fQ',
    authDomain: 'amazing-recipes.firebaseapp.com',
    databaseURL: 'https://amazing-recipes.firebaseio.com',
    projectId: 'amazing-recipes',
    storageBucket: '',
    messagingSenderId: '414087513233'
  }
};
