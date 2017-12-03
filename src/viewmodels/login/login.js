import {inject} from 'aurelia-framework';
import DonationService from '../../services/donation-service';
import {EventAggregator} from 'aurelia-event-aggregator';
import {LoginStatus} from '../../services/messages';

@inject(DonationService, EventAggregator)
export class Login {

  email = 'marge@simpson.com';
  password = 'secret';
  prompt = '';

  constructor(ds, ea) {
    this.donationService = ds;
    ea.subscribe(LoginStatus, msg => {
      this.prompt = msg.status.success ? '' : msg.status.message;
    })
  }

  login(e) {
    console.log(`Trying to log in ${this.email}`);
    this.donationService.login(this.email, this.password);
  }
}
