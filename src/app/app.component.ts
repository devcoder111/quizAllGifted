import { Component } from '@angular/core';
import { OAuthService, OAuthErrorEvent } from 'angular-oauth2-oidc'; // Add this import

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
  <span us-spinner="{radius:30, width:8, length: 16}"></span>
<div id="mathQuiz">
    <div class="my-drawing visibilityhide" id="scratchpadshow"></div>				
    <div class="header noselect"><h1>All Gifted<span ng-if="activeQuestion === -1">Mathematics</span></h1>
      <div class="progress visibilityhide" id="progressshow">
        
    </div>
    <div class="intro noselect {{ (activeQuestion > -1) ? 'inactive' :'active'}}">
				<div ng-if="enrolled">
					<h2>Welcome</h2>
 					<p>Click to start Adaptive Kindergarten to Primary Six Math course</p>
           <div (click)="login()" class="startbtn">START <i class="fa fa-chevron-right"></i></div>
           <button (click)='logout()'>Log out</button>
           <button (click)='refresh()'>Refresh</button>
				</div>
				<!-- <div ng-if="!enrolled" class="visibilityhide" id="mastercodeunenroll">
					<h3>Mastercode Registration Needed<br> <input type="number" class="mastercode" ng-model="mastercode.mastercode" placeholder="Mastercode"></h3>
					<p><input type="text" ng-model = "mastercode.firstname" placeholder="First Name" class="mastercode" required>
					<input type="text" ng-model = "mastercode.lastname" placeholder="Last Name" class="mastercode" required>

					<input type="datetime" ng-model = "mastercode.date_of_birth" placeholder="Birthdate in mm/dd/yyyy" class="mastercode" required></p>
					<p ng-click="sendMastercode()" class="startbtn">SUBMIT <i class="fa fa-chevron-right"></i></p>
				</div> -->
		 </div>
</div>
<p>You are logged in as {{username}}.</p>
 
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = 'TODO';
  get token() { return  this.oauthService.getAccessToken();}
  get claims() { return this.oauthService.getIdentityClaims(); }

  constructor(private oauthService: OAuthService) {
    // For debugging:
    oauthService.events.subscribe(e => e instanceof OAuthErrorEvent ? console.error(e) : console.warn(e));

    // Load information from Auth0 (could also be configured manually)
    oauthService.loadDiscoveryDocument()

      // See if the hash fragment contains tokens (when user got redirected back)
      .then(() => oauthService.tryLogin())

      // If we're still not logged in yet, try with a silent refresh:
      .then(() => {
        if (!oauthService.hasValidAccessToken()) {
          return oauthService.silentRefresh();
        }
      })

      // Get username, if possible.
      .then(() => {
        if (oauthService.getIdentityClaims()) {
          this.username = oauthService.getIdentityClaims()['name'];
        }
      });

    oauthService.setupAutomaticSilentRefresh();
   }

   login() { this.oauthService.initImplicitFlow(); }
   logout() { this.oauthService.logOut(); }
   refresh() { this.oauthService.silentRefresh(); }
}
