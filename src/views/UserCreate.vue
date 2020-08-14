<template>
  <div class="container">
    <router-link :to="{ name: 'userList' }" class="btn btn-info float-right"> {{'Back'}} </router-link>
    <h3> Create User</h3>
    <hr>
    <div class="row">
      <div class="col-md-6">
        <ValidationObserver ref="observer">
          <b-form  slot-scope="{ validate }" @submit.prevent="validate().then(onSubmit)">
            <ValidationProvider rules="required" name="name">
              <b-form-group id="name" label="Your Name:" label-for="name" slot-scope="{ valid, errors }">
                <b-form-input
                  id="name"
                  v-model="form.name"
                  :state="errors[0] ? false : (valid ? true : null)"
                  required
                  placeholder="Enter name"
                ></b-form-input>
                <b-form-invalid-feedback> {{ errors[0] }} </b-form-invalid-feedback>
              </b-form-group>
            </ValidationProvider>

            <ValidationProvider rules="required" name="username">
              <b-form-group id="username" label="Your username:" label-for="username" slot-scope="{ valid, errors }">
                <b-form-input
                  id="username"
                  v-model="form.username"
                  :state="errors[0] ? false : (valid ? true : null)"
                  required
                  placeholder="Enter username"
                ></b-form-input>
                <b-form-invalid-feedback> {{ errors[0] }} </b-form-invalid-feedback>
              </b-form-group>
            </ValidationProvider>


            <ValidationProvider rules="required|email" name="email">
              <b-form-group id="email" label="Your email:" label-for="email" slot-scope="{ valid, errors }">
                <b-form-input
                  id="email"
                  v-model="form.email"
                  :state="errors[0] ? false : (valid ? true : null)"
                  required
                  placeholder="Enter email"
                ></b-form-input>
                <b-form-invalid-feedback> {{ errors[0] }} </b-form-invalid-feedback>
              </b-form-group>
            </ValidationProvider>

            <ValidationProvider rules="required|phone" name="phone">
              <b-form-group id="phone" label="Your phone:" label-for="phone" slot-scope="{ valid, errors }">
                <b-form-input
                  id="phone"
                  v-model="form.phone"
                  :state="errors[0] ? false : (valid ? true : null)"
                  required
                  placeholder="Enter phone"
                ></b-form-input>
                <b-form-invalid-feedback> {{ errors[0] }} </b-form-invalid-feedback>
              </b-form-group>
            </ValidationProvider>


            <b-form-group id="website" label="Your website:" label-for="website">
              <b-form-input
                id="website"
                v-model="form.website"
                required
                placeholder="Enter website"
              ></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
          </b-form>
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>

<script>
  import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
  import * as rules from 'vee-validate/dist/rules';
  import {mapActions, mapGetters} from 'vuex';

  Object.keys(rules).forEach(rule => {
    extend(rule, rules[rule]);
  });
  extend('phone', {
    validate: (value) => {
      const MOBILEREG = /^((1[3578][0-9])+\d{8})$/;
      return MOBILEREG.test(value);
    },
    message: 'invalid phone format'
  });


  export default {
    name: 'UserCreate',
    components: {
      ValidationProvider,
      ValidationObserver
    },
    data() {
      return {
        form: {
          email: '',
          name: '',
          username: '',
          website: '',
          phone: ''
        }
      }
    },
    computed: mapGetters(['userList']),
    methods: {
      ...mapActions(['createUser']),
      onSubmit() {
        this.createUser(this.form);

      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.username = ''
        this.form.website = ''
        this.form.phone = ''
      }
    }
  }
</script>