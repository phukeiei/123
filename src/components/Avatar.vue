<template>
  <v-card class="mx-auto" max-width="434" tile>
    <v-img height="100%" src="https://scontent.fbkk8-3.fna.fbcdn.net/v/t31.0-8/23674910_2076217565946666_1312158112634887295_o.jpg?_nc_cat=111&_nc_sid=7aed08&_nc_ohc=uLmRswmnxWAAX-E260R&_nc_ht=scontent.fbkk8-3.fna&oh=bc4932a229b1342f1aec8b4966e10874&oe=5F6C0777">
      <v-row align="end" class="fill-height">
        <v-col align-self="start" class="pa-0" cols="12">
          <v-avatar class="profile" color="grey" size="164" tile>
            <v-img src="https://scontent.fbkk12-4.fna.fbcdn.net/v/t1.0-9/26230543_1592442527507744_8350035077574020688_n.jpg?_nc_cat=103&_nc_sid=85a577&_nc_ohc=M8Ln7TrXs2QAX8BcaJ8&_nc_ht=scontent.fbkk12-4.fna&oh=ae754c455ea5978e78c650b00c510d50&oe=5F69AAD2"></v-img>
          </v-avatar>
        </v-col>
        <v-col class="py-0">
          <v-list-item color="rgba(0, 0, 0, .4)" dark>
            <v-list-item-content>
              <v-list-item-title class="title">{{username}}</v-list-item-title>
              <v-list-item-subtitle>{{job}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-row>
    </v-img>
  </v-card>
</template>
<script>
export default {
  props: {
    username: {
      default: "Pjurk Pcheck",
    },
    job: {
      default: "Pjob",
    },
  },
};
</script>