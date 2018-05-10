/* eslint camelcase: [2, {properties: "never"}] */
module.exports = {
  refund_id: {
    type: 'string',
    maxLength: 32,
    required: true
  },
  transaction_id: {
    type: 'string',
    maxLength: 32,
    required: true
  },
  out_trade_no: {
    type: 'string',
    maxLength: 32,
    required: true
  },
  out_refund_no: {
    type: 'string',
    maxLength: 64,
    required: true
  },
  refund_fee: {
    type: 'int',
    required: true
  },
  coupon_refund_fee: {
    type: 'int'
  }
};
