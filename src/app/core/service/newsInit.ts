import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Inews } from '../model/Inews';

@Injectable({
  providedIn: 'root'
})

export class InMemoryLoginDataService implements InMemoryDbService {
  createDb() {

    /** Default User data collection. */
    const newDetail: Inews[] = [{
        "id":1,
        "title":"No new coronavirus case in Himachal Pradesh in last 10 days",
        "description":"Himachal Pradesh has reported no new coronavirus case in the state in last 10 days, while only one active case remains in the state after another patient recovered today. A total of 40 people had tested positive in the state, out of which 34 recovered, one died and four migrated out. All the 16 cases in Una district have recovered.",
        "link":"https://inshorts.com/en/news/no-new-coronavirus-case-in-himachal-pradesh-in-last-10-days-1588515870777"
    }, {
        "id":2,
      "title": "India reports 2,487 coronavirus cases in last 24 hours, total crosses 40,000",
      "description": "India reported 2,487 new coronavirus cases in the last 24 hours, taking the total number of cases to 40,263. Meanwhile, the death toll in the country has surged to 1,306 after 83 new deaths were reported in the last 24 hours. Active cases stand at 28,070, while 10,887 coronavirus patients have been cured, discharged or migrated.",
      "link": "https://inshorts.com/en/news/india-reports-2487-coronavirus-cases-in-last-24-hours-total-crosses-40000-1588512133356"
    },
    {"id":3,
        "title": " 1 new coronavirus case reported in Uttarakhand as of 8:00 AM - May 3",
      "description": "1 new coronavirus cases were reported as of 8:00 AM on May 3 in Uttarakhand, according to data released by the Ministry of Health and Family Welfare. This brings the total reported cases of coronavirus in Uttarakhand to 59. Among the total people infected as on date, 39 have recovered and none have passed away.",
      "link": "https://www.livemint.com/news/india/1-new-coronavirus-case-reported-in-uttarakhand-as-of-8-00-am-may-3-11588478309530.html"
       
    }
];

    return {newDetail};
  }

/** Method that generates the ids of user when not passed. */
  
}