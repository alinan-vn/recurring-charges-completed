import _ from 'lodash';

import StatementApi from '../lib/statement-api';

class ChargeService {
  getRecurringCharges() {
    const billStatement = {};
    const recurringCharges = {};

    StatementApi.getCharges().forEach(chargeInfo => {
      if (billStatement[chargeInfo.name]) {
        billStatement[chargeInfo.name] += 1;
      } else {
        billStatement[chargeInfo.name] = 1;
      }
    });

    Object.entries(billStatement).forEach(entry => {
      const [chargeName, chargeCount] = entry;

      if (chargeCount > 1) {
        recurringCharges[chargeName] = chargeCount
      }
    });

    return recurringCharges;
  }

  getRecurringChargesWithCost(){
    let recurringCharges = this.getRecurringCharges();
    let result = {};

    Object.entries(recurringCharges).forEach(entry => {
      const [chargeName, chargeCount] = entry;

      StatementApi.getCharges().forEach(chargeInfo => {
        if(chargeInfo.name == chargeName){
          result[chargeName] = {
            recurringAmount: chargeCount,
            monthlyCost: chargeInfo.amount
          }
        }
      });
    });
  }  
}

export default ChargeService;

// { "spotify": 4 }

// {
//   "Spotify": {
//     recurringAmount: 4,
//     monthlyCost: 7.99
//   }
// }