import {inject} from 'aurelia-framework';
import DonationService from '../../services/donation-service';

@inject(DonationService)
export class Signup {

  firstName = '';
  lastName = '';
  email = '';
  password = '';

  constructor(ds) {
    this.donationService = ds;
  }

  register(e) {
    this.showSignup = false;
    this.donationService.register(this.firstName, this.lastName, this.email, this.password);
    this.donationService.login(this.email, this.password);
  }
}
