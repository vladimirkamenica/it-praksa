<template>
    <b-container fluid>
        <b-row>
            <b-col>
                 <b-card no-body>
                 <b-tabs card>
                    <b-tab title="Dodavanje" active>
                   <b-container >
                      <b-row>
                          <b-col>
                               <b-form-group
                                          id="name"
                                          label="Naslov"
                                          label-for="name_input"                                    
                                        >
                                     <b-form-input
                                         id="name_input"
                                         v-model="user.name"
                                         type="text"
                                         placeholder="Unesi ime">
                                </b-form-input>
                            </b-form-group>
                            <b-form-group
                                          id="email"
                                          label="Email"
                                          label-for="email_input"                                    
                                        >
                                     <b-form-input
                                         id="email_input"
                                         v-model="user.email"
                                         type="text"
                                         placeholder="Unesi email">
                                </b-form-input>
                            </b-form-group>
                            <b-form-group
                                          id="password"
                                          label="Šifra"
                                          label-for="password_input"                                    
                                        >
                                     <b-form-input
                                         id="password_input"
                                         v-model="user.password"
                                         type="password"
                                         placeholder="Unesi password">
                                </b-form-input>
                            </b-form-group>
                             <b-form-group
                                          id="password_confirmation"
                                          label="Potvrda šifre"
                                          label-for="password_confirmation_input"                                    
                                        >
                                     <b-form-input
                                         id="password_confirmation_input"
                                         v-model="user.password_confirmation"
                                         type="password"
                                         placeholder="Unesi password">
                                </b-form-input>
                            </b-form-group>
                            <b-form-group
                                          id="role"
                                          label="Uloga"
                                          label-for="role_select"                                    
                                        >
                                     <b-form-select 
                                          id="role_select"
                                          :options="roles"
                                          value-field="id"
                                          text-field="role_name"
                                          v-model="user.role_id">
                                         
                                     </b-form-select>
                            </b-form-group>
                            <button class="btn btn-success" @click="addUser">Dodaj</button>
                          </b-col>
                      </b-row>
                   </b-container>
 
               </b-tab>
               <b-tab title="Pregled">
                   <b-container>
                       <b-row>
                           <b-col>
                               <b-table responsive stacked="xl" striped hover  :fields="fields" :items="users">
                                        <template #cell(name)="row">
                                          <textarea name="name" id="name"  class="form-control widthTextarea" v-model="row.item.name"></textarea>
                                        </template>
                                        <template #cell(email)="row">
                                          <textarea name="email" id="email"  class="form-control widthTextarea" v-model="row.item.email"></textarea>
                                        </template>
                                   <template #cell(role_id)="row">
                                        <b-select :options="roles"
                                              value-field="id"
                                              text-field="role_name"
                                              @change="editUser(row.item)"
                                              v-model="row.item.role_id"></b-select>
                                       </template>
                                       <template #cell(actions)="row">
                                          <div>
                                               <button class="btn btn-success btn-md" @click="editUser(row.item)"> <font-awesome-icon :icon="['fa', 'pen']" style="width:15px"  /></button>
                                               <button class="btn btn-danger btn-md" @click="deleteUser(row.item.id)"> <font-awesome-icon :icon="['fa', 'times']" style="width:11px"  /></button>
                                          </div>    
                                       </template>
                               </b-table>
                           </b-col>
                       </b-row>
                      
                   </b-container>
               </b-tab>

                     </b-tabs>
                     </b-card>
           
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
name: 'myregister',
layout: 'CmsLayout',
middleware : 'auth',
async asyncData({app}){
   let role = await app.$axios.$get('/api/role-get-all');
   let user = await app.$axios.$get('/api/user-all');
   return {
       roles: role.roles,
       users: user.users
   }
},
data(){
    return{
        user:{
            id : 0,
            name: '',
            email: '',
            password : '',
            password_confirmation : '',
            role_id : ''
        },
        edit_user:{
            id : null,
            name: '',
            email: '',
            password : '',
            password_confirmation : '',
            role_id : ''
        },
        fields:[
            {
                key: 'name',
                label: 'Ime'
            },
              {
                key: 'email',
                label: 'Email'
            },
              {
                key: 'role_id',
                label: 'Uloga'
            },
            'actions'
        ]
        
    }
},
mounted(){
   this.$axios.setToken(this.$cookies.get('auth_token'), 'Bearer');
},
methods:{
    async addUser(){
        try {
              let empty = () =>{
            this.user.name= '';
            this.user.email= '';
            this.user.password = '';
            this.user.password_confirmation = '';
            this.user.role_id = '';
        }
          let user = await this.$axios.$post('/api/user-create',this.user);
          this.users = user.users;
          empty()
        await this.$notify({
          type: "success",
          message: `Korisnik je uspoešno dodat!`,
        });
      } catch (error) {
           await this.$notify({
          type: "danger",
          message: `Greška u podacima!`,
        });
      }
        
    },
  async editUser(edit){
        try {
          let user = await this.$axios.$post('/api/user-update',edit);
         this.users = user.users;
        await this.$notify({
          type: "success",
          message: `Korisnik je uspoešno editovan!`,
        });
      } catch (error) {
           await this.$notify({
          type: "danger",
          message: `Greška u podacima!`,
        });
      }
        
    },
    showModalEdit(items){
        this.edit_user = items;
        this.$refs['edit-modal'].show()
    },
      async deleteUser(id){
        try {
          let user = await this.$axios.$post('/api/user-delete',{id:id});
          this.users = user.users;
        await this.$notify({
          type: "success",
          message: `Reklama je uspoešno dodata!`,
        });
      } catch (error) {
           await this.$notify({
          type: "danger",
          message: `Greška u podacima!`,
        });
      }
        
    },
}
}
</script>

<style>

</style>