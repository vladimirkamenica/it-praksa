<template>
  <div>
    <!-- Header -->
    <div class="header bg-gradient-success py-7 py-lg-8 pt-lg-9">
      <div class="container">
        <notifications></notifications>
     
      </div>
      
    </div>
    <!-- Page content -->
    <div class="container mt--9 pb-5">
      <div class="row justify-content-center">
        <div class="col-lg-5 col-md-7">
          <div class="card bg-white border-0 mb-0">
            <div class="card-header bg-transparent pb-5">
             <h4>Esenca software</h4>          
            </div>
            <div class="card-body px-lg-5 py-lg-5">
              

              
                <input
                  alternative
                  class="mb-3 form-control"
                  name="Email"
                  prepend-icon="ni ni-email-83"
                  placeholder="Email"
                  v-model="data.email"
                >
              

                <input
                  alternative
                  class="mb-3 form-control"
                  name="Password"
                  prepend-icon="ni ni-lock-circle-open"
                  type="password"
                  placeholder="Password"
                  v-model="data.password"
                >
              
               

                <div class="text-center">
                  <button class="btn btn-success mt-2" @click="handleSubmit()" 
                    >Sign in</button
                  >
                </div>
             
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-6">
              <router-link to="/password/reset" class="text-light"
                ><small>Forgot password?</small></router-link
              >
            </div>
            <div class="col-6 text-right">
              <router-link to="/register" class="text-light"
                ><small>Create new account</small></router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ValidationError from "~/components/ValidationError.vue";
import formMixin from "@/mixins/form-mixin";
export default {
  layout: "AuthLayout",
  mixins: [formMixin],
  components: { ValidationError },
  middleware: 'authuser',
  data() {
    return {
     
        data: {
         
            email: "",
            password: "",
          
        },
     
    };
  },
  methods: {
    async handleSubmit() {

     
      try {
        
       let user = await this.$axios.$post(`${this.$axios.defaults.baseURL}/api/login`, {
          email: this.data.email,
          password: this.data.password,
        });
        this.$cookies.set('auth_token',user.token);
        this.$store.commit("auth/set_loggedIn", true);
        this.$store.commit("auth/set_user", user.user);
        this.$store.commit("auth/set_role", user.role);
        if(user.role.all_permits){
           this.$router.push({ name: 'cms-role'})  
        }
        if(user.role.all_permits || user.role.videos){
           this.$router.push({ name: 'cms-video'})  
        }
        if(user.role.all_permits || user.role.newspaper){
           this.$router.push({ name: 'cms-newspaper'})  

        }
      } catch (error) {
        await this.$notify({
          type: "danger",
          message: "Invalid credentials!",
        });
        this.$cookies.set('auth_token',null);
        this.$store.commit("auth/set_loggedIn", false);
      }
    },
  },
};
</script>
