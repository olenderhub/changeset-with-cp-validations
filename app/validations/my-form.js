import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  password: [
    validator('presence', {
      presence: true
    }),
    validator('length', {
      min: 8
    })
  ],
  passwordConfirmation: [
    validator('presence', {
      presence: true
    }),
    validator('confirmation', {
      on: 'password'
    })
  ]
});

export default Validations;
