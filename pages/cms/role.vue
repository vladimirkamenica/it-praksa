<template>
  <b-container  >
    <b-row>
      <b-col class="p-5">
         <b-card no-body>
    <b-tabs card>
      <b-tab title="Uloge" active>
        <b-container fluid>
          <b-row>
            <b-col>
               <b-form-group
        id="title"
        label="Naziv uloge"
        label-for="title"
        description="Naziv uloge mora biti jednistven"
      >
        <b-form-input
          id="name"
          v-model="role.role_name"
          type="text"
          placeholder="Unesi naziv"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="news"
        label="Vesti"
        label-for="news">
         <input id="newspaper" type="checkbox" class="switch" v-model="role.newspaper" >
          <label for="newspaper"></label>
      </b-form-group>
       <b-form-group
        id="videos"
        label="Video"
        label-for="videos">
         <input id="video" type="checkbox" class="switch" v-model="role.videos">
          <label for="video"></label>
      </b-form-group>
        <b-form-group
        id="all"
        label="Sve"
        label-for="videos">
         <input id="all_permits" type="checkbox" class="switch" v-model="role.all_permits">
          <label for="all_permits"></label>
      </b-form-group>
      <button class="btn btn-primary" @click="rolesUpdateOrCreate()">Dodaj</button>
            </b-col>
          </b-row>
        </b-container>
      </b-tab>
       <b-tab title="Prikaz uloge">
        <b-container fluid>
          <b-row>
            <b-col>
               <div>
                      <b-table striped hover :items="listOfRoles" :fields="fields">
                        <template #cell(role_name)="row">
                          <div>
                               <textarea name="role_name" id="role_name" class="form-control" v-model="row.item.role_name"></textarea>
                          </div>                           
                        </template>
                        <template #cell(all_permits)="row">
                          <div>
                               <input :id="'all'+row.item.id" type="checkbox" class="switch" :checked="row.item.all_permits" v-model="row.item.all_permits" @change="editRole(row.item)">
                               <label :for="'all'+row.item.id"></label>
                          </div>                           
                        </template>
                        <template #cell(newspaper)="row">
                          <div>
                               <input :id="'news'+row.item.id" type="checkbox" class="switch" :checked="row.item.newspaper" v-model="row.item.newspaper"  @change="editRole(row.item)">
                               <label :for="'news'+row.item.id"></label>
                          </div>                           
                        </template>
                        <template #cell(videos)="row">
                          <div>
                               <input :id="'videos'+row.item.id" type="checkbox" class="switch" :checked="row.item.videos" v-model="row.item.videos"  @change="editRole(row.item)">
                               <label :for="'videos'+row.item.id"></label>
                          </div>                           
                        </template>
                         <template #cell(actions)="row">
                          <div>
                              <button class="btn btn-success" @click="editRole(row.item)"> <font-awesome-icon :icon="['fa', 'pen']" style="width:15px"  /></button>
                              <button class="btn btn-danger" @click="deleteRole(row.item.id)"> <font-awesome-icon :icon="['fa', 'times']" style="width:11px"  /></button>
                          </div>                           
                        </template>
                      </b-table>
                 </div>
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
name: 'roles_cms',
layout: 'CmsLayout',
middleware: ['auth','roles'],
async asyncData({app}){
  let listOfRoles = await app.$axios.$get('/api/role-get-all');
  return{
    listOfRoles : listOfRoles.roles,
  }
},
mounted(){
   this.$axios.setToken(this.$cookies.get('auth_token'), 'Bearer');
  
},
data(){
  return {
    role: {
      id : -1,
      role_name : '',
      newspaper : false,
      all_permits : false,
      videos : false
    },

    fields:[
     {
        key: 'role_name',
        label: 'Uloga'
     }, {
        key: 'all_permits',
        label: 'Sve dozvole'
     }, {
        key: 'newspaper',
        label: 'Vesti'
     }, {
        key: 'videos',
        label: 'Video'
     },
     'actions'
    ]
  }
},
methods:{
  
  async rolesUpdateOrCreate(){
      try {
        let empty = () =>{
          this.role.role_name = '';
          this.role.newspaper = false;
          this.role.all_permits = false;
          this.role.videos = false ;
        }
    let role = await this.$axios.$post('/api/role-create',this.role);
    this.listOfRoles = role.roles;
    empty();
    await this.$notify({
          type: "success",
          message: `Ulog je uspoešno dodata!`,
        });
  } catch ({ response }) {
   await this.$notify({
          type: "danger",
          message: `Greška u podacima`,
        });
  }  
  },
    async editRole(edit_role){
      try {
    let role = await this.$axios.$post('/api/role-update',edit_role);
    this.listOfRoles = role.roles;
    
    await this.$notify({
          type: "success",
          message: `Ulog je uspoešno editovana!`,
        });
  } catch ({ response }) {
     await this.$notify({
          type: "danger",
          message: `Greška u podacima`,
        });
  }  
  },
async deleteRole(role_id){
      try {
    let role = await this.$axios.$post('/api/role-delete',{id:role_id})
    this.listOfRoles = role.roles;
    await this.$notify({
          type: "danger",
          message: `Ulog je uspoešno obrisana!`,
        });
  } catch ({ response }) {
     await this.$notify({
          type: "danger",
          message: `Greška u podacima`,
        });
  }  
  },
}
}
</script>

<style>

</style>