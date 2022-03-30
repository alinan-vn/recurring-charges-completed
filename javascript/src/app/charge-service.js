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
        billStatement[chargeInfo.name] = 0;
      }
    });

    Object.entries(billStatement).forEach(entry => {
      const[chargeName, chargeCount] = entry;

      if (chargeCount >= 1) {
        recurringCharges[chargeName] = chargeCount
      }
    });

    return recurringCharges;
  }
}

export default ChargeService;
