import Component from '@ember/component';
import { get, set } from '@ember/object';
import Validations from 'changeset-with-cp-validations/validations/my-form';
import { buildChangeset } from 'ember-changeset-cp-validations';
import Changeset from 'ember-changeset';

export default Component.extend(Validations, {
  init() {
    this._super(...arguments);
    let { validateFn, validationMap } = buildChangeset(this);
    this.changeset = new Changeset(this, validateFn, validationMap, { skipValidate: true });
  },

  actions: {
    submit() {
      this.changeset.validate().then(() => {
        set(this, 'errors', get(this, 'changeset.errors'));
      });
    }
  }
});
