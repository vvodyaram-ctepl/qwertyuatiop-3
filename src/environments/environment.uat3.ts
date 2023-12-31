// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrl: 'https://wp-service-uat3-ygue7fpaba-uc.a.run.app/wearables',
  baseUrl2: '',
  gcpStoragePath: 'https://storage.googleapis.com/wearables-sensor-data-pr/UAT/GCloud/WPortal/',
  grantType: 'password',
  clientId: 'adminClientId',
  clientSecret: 'wearablesAdmin',
  tokenString: 'userToken',
  userId: 'userId',
  refreshTokenString: 'userRefreshToken',
  firebase: {
    apiKey: "AIzaSyDNzx5zkMgX6eMIFdPx-YMtbLac0pDBG_8",
    authDomain: "ct-wearables-portal-pf.firebaseapp.com",
    projectId: "ct-wearables-portal-pf",
    storageBucket: "ct-wearables-portal-pf.appspot.com"
  },


  //questionnaire variables
  otherSpecifyText: 'Other, Specify',
  noneOfTheAboveText: 'None of the above',

  //customer service report
  customerSupportDashboardReportUrl: 'https://lookerstudio.google.com/embed/reporting/513f7711-464f-483a-9d6b-ca4d17bef244/page/p_lyo2u07t4c'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.