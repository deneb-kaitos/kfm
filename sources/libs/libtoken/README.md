# libpin

Generates a token.

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

TODO: TBD

### CreateIndividualAccountToken

TODO: TBD

### RecoverIndividualAccountToken

TODO: TBD
