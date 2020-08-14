<template>
  <div class="container">
    <router-link :to="{ name: 'userList' }" class="btn btn-info float-right"> {{'Back'}} </router-link>
    <h3> Login</h3>
    <hr>
    <div class="row">
      <div class="col-md-6">
        <ValidationObserver ref="observer">
          <b-form  slot-scope="{ validate }" @submit.prevent="validate().then(onSubmit)">
            <ValidationProvider rules="required" name="login">
              <b-form-group id="login" label="Your login:" label-for="login" slot-scope="{ valid, errors }">
                <b-form-input
                  id="login"
                  v-model="form.login"
                  :state="errors[0] ? false : (valid ? true : null)"
                  required
                  placeholder="Enter login"
                ></b-form-input>
                <b-form-invalid-feedback> {{ errors[0] }} </b-form-invalid-feedback>
              </b-form-group>
            </ValidationProvider>

            <ValidationProvider rules="required" name="password">
              <b-form-group id="password" label="Your password:" label-for="password" slot-scope="{ valid, errors }">
                <b-form-input
                  id="password"
                  v-model="form.password"
                  :state="errors[0] ? false : (valid ? true : null)"
                  required
                  placeholder="Enter password"
                  type="password"
                ></b-form-input>
                <b-form-invalid-feedback> {{ errors[0] }} </b-form-invalid-feedback>
              </b-form-group>
            </ValidationProvider>

            <b-button type="submit" variant="primary">Submit</b-button>
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



  export default {
    name: 'Authorization',
    components: {
      ValidationProvider,
      ValidationObserver
    },
    data() {
      return {
        form: {
          login: '',
          password: ''
        }
      }
    },
    computed: mapGetters(['token']),
    methods: {
      ...mapActions(['getToken']),
      onSubmit() {
        this.getToken(this.form).then(()=> {
            this.$router.push('/')
        });
      }
    }
  }
</script>