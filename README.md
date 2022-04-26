# Recurring Charges Exercise

[![NextCapital](https://img.shields.io/badge/NextCapital--%2300a5f6?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAA/FBMVEUApfYAAAAApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYApfYk6uC4AAAAU3RSTlMAAJHwVI7ULQcDHcG4FyyxdAE13JQInQLv+G4Kl9AoePvqRynk6UYLnNNrZxrCsxLDsBPPK3Np5UAu51X0YpnSKjbd/oQFGboepg+0cZPEIATmP31l8v0AAAC1SURBVBgZBcGHIsMAFEDReykVWgRtanYYCVp71ay95/v/f3EOMDRcAlVVgZEYLYPCWILA+ERUqgiTU9MpCDOzMVeDaiXqGSiUGvMLLC7F8gqgkjVb7c7q2voGiCp5EZvlre0URRW6vdjZTVBRhe5e7B8kqKiSF3F4dHySoqgkzdbpWf+83QFRuGhcXpFfx80AEG7v7h8e4ek5igzgpRevbwj99w+A7DO+vkGh9oOQ1X//QFXVf8KAFHYrlyAPAAAAAElFTkSuQmCC)](https://www.nextcapital.com)

[![Node Version](https://img.shields.io/badge/node--lts-%3E%3D%2016.13.0-brightgreen)](https://nodejs.org/)

## Summary

This application parses a list of charges on a credit card statement and returns which charges are recurring.

## Requirements
### Get Recurring Charges
* Return the number of charges for each merchant
  * Filter out one-time charges
* Return the charge amount of the recurring charge for each merchant

#### Inputs
An array of charges with the following attributes:
* `name` - A string that shows who the charge is coming from
* `date` - The date on which the charge occurred
* `amount` - The amount of money that the charge is for
* `user` - Who made the purchase

*Example Format:*

```javascript
[{
  name: 'Spotify',
  date: '2019/01/01',
  amount: 7.99,
  user: 'John Smith'
}, {
  name: 'Netflix',
  date: '2019/01/01',
  amount: 9.99,
  user: 'John Smith'
}, {
  name: 'Spotify',
  date: '2019/02/01',
  amount: 7.99,
  user: 'John Smith'
}, {
  name: 'Netflix',
  date: '2019/02/01',
  amount: 9.99,
  user: 'John Smith'
}, {
  name: 'Lou Malnati\'s',
  date: '2019/02/07',
  amount: 120.00,
  user: 'Tom Smith'
}, {
  name: 'Spotify',
  date: '2020/01/01',
  amount: 7.99,
  user: 'John Smith'
}, {
  name: 'Netflix',
  date: '2020/01/01',
  amount: 17.99,
  user: 'John Smith'
}, {
  name: 'HBO Max',
  date: '2020/01/01',
  amount: 7.99,
  user: 'Tom Smith'
}, {
  name: 'The New York Times Company',
  date: '2020/01/01',
  amount: 5.00,
  user: 'John Smith'
}, {
  name: 'Spotify',
  date: '2020/01/01',
  amount: 7.99,
  user: 'John Smith'
}, {
  name: 'Netflix',
  date: '2020/01/01',
  amount: 17.99,
  user: 'John Smith'
}, {
  name: 'HBO Max',
  date: '2020/01/01',
  amount: 7.99,
  user: 'Tom Smith'
}, {
  name: 'The New York Times Company',
  date: '2020/01/01',
  amount: 5.00,
  user: 'John Smith'
}]
```

#### Output
An object containing:
* Key - The name of the company
* Value - The number of times a charge from the company showed up on the statement

*Example Format:*
```javascript
{
  'Spotify': 4,
  'Netflix': 4,
  'HBO Max': 2,
  'The New York Times Company': 2
}
```

## JavaScript

[![Node Version](https://img.shields.io/badge/node-%3E%3D%2012.13.1-brightgreen)](https://nodejs.org/)


### Dependencies

* [NodeJS >= 12.13.1](https://nodejs.org/en/download/)
* [npm >=6.13.0](https://www.npmjs.com/get-npm)

### Setup

1. `cd javascript && npm install`

### Tests

Run `npm test` to run the test suite

## Java

### Dependencies

* Java 8
* [gradle](https://gradle.org/install/)

### Setup

* `cd java && ./gradlew build`

### Tests

Run `./gradlew test` to run the test suite

## Python

### Dependencies

* Python 3.7 or later (run `python3 --version` to check your version)

### Setup

* `cd python`

### Tests

Run `python3 test.py` to run the test suite

## Ruby

### Setup

* `gem install bundler` (if you don't have bundler)
* `cd ruby && bundle install`

### Tests

Run `rspec` to run the test suite
