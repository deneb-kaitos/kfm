# libpin

Generates a pin.

<!-- 2. creates a token (using [libsodium](https://github.com/jedisct1/libsodium.js))
1. returns pin:token pair

## token types

1. a token that only allows creation of an account for a company - CreateCompanyAccountToken
2. a token that only allows for company's account recovery - RecoverCompanyAccountToken
3. a token that only allows creation of an account for an individual - CreateIndividualAccountToken
4. a token that only allows for an individual's account recovery - RecoverIndividualAccountToken

### CreateCompanyAccountToken

This token is issued by the Kaufmann System when a new restaurant or food supplier wants to join it.

```javascript

const createCompanyAccountToken = {
  type: 'CreateCompanyAccountToken',
  payload: {
    issued: {
      by: 'b55921a9-d0c2-4268-acb8-528cb47cf6bb', // a UUID - e.g.: a food supplier's ID (Ahmed & Co. GmbH)
      on: 1604673000,                             // a unix timestamp
    },
    pin: 'f10f51',                                // a string - a pin for which the token is generated
  },
};

```

### RecoverCompanyAccountToken

This token is issued by a counterparty for a specific business client (e.g. a restaurant, or a food supplier) and allows
the client to regain access to its account.

```javascript

const recoverCompanyAccountToken = {
  type: 'RecoverCompanyAccountToken',
  payload: {
    issued: {
      by: 'b55921a9-d0c2-4268-acb8-528cb47cf6bb',   // a UUID of a counterparty of the business client whose account has to be recovered
      for: 'ff5a7fb5-c251-4a39-9fc0-a757ea2e6dda',  // a UUID of a business client whose account has to be recovered
      on: 1606997625,                               // a unix timestamp
    },
  },
};

```

### CreateIndividualAccountToken

TODO: TBD

### RecoverIndividualAccountToken

TODO: TBD -->
