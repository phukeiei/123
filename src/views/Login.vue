<template>
  <div class="login">
    <v-row>
      <v-col></v-col>
      <v-col>
        <v-card>
          <v-card-title>Authen Service</v-card-title>
          <v-card-subtitle class="pb-0">One Stop Services</v-card-subtitle>
          <v-card-text class="text--primary">
            <v-text-field label="Username input" v-model="form.username"></v-text-field>
            <v-text-field label="Password input" v-model="form.password"></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-btn color="red" @click="beginAuthen" text>Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  mounted() {},
  data() {
    return {
      form: {
        username: "phurkuser2",
        password: "ivsoft",
      },
      routes: [],
      successRoutes: [],
    };
  },
  methods: {
    async beginAuthen() {
      this.routes = [];
      this.successRoutes = [];
      let response;
      await axios
        .get("http://localhost:8001/routes")
        .then((res) => {
          response = res.data.data;
        })
        .catch((err) => {
          console.error(err);
        });
      response.map((res) => {
        this.routes = [
          ...this.routes,
          {
            hosts: res.hosts,
            paths: res.paths,
            fullpath: res.hosts + res.paths,
            service: res.service,
          },
        ];
      });
      await this.checkSuccesRoute();
    },

    async checkSuccesRoute() {
      this.routes.map((route) => {
        axios
          .get("http://" + route.fullpath, {
            auth: {
              username: this.form.username,
              password: this.form.password,
            },
          })
          .then(() => {
            console.error("success : " + route.fullpath);
            this.successRoutes = [
              ...this.successRoutes,
              {
                hosts: route.hosts,
                paths: route.paths,
                fullpath: route.hosts + route.paths,
                service: route.service,
                basicAuth: [],
                acl: [],
              },
            ];
          })
          .catch((err) => {
            console.error("error : " + route.fullpath);
            console.error(err);
          });
      });
      await this.checkBasicAuthByService();
    },

    async checkBasicAuthByService() {
      this.routes.map((route) => {
        axios
          .get(
            "http://localhost:8001/services/" + route.service.id + "/plugins"
          )
          .then((res) => {
            res.data.data.map((res) => {
              if (res.name == "basic-auth") {
                this.successRoutes.map((checkIn, index) => {
                  if (checkIn.service.id == route.service.id) {
                    this.successRoutes[index].basicAuth.push(res);
                  }
                });
              }
            });
          })
          .catch((err) => {
            console.error(err);
          });
      });
      await this.checkAclByService();
    },

    async checkAclByService() {
      this.routes.map((route) => {
        axios
          .get(
            "http://localhost:8001/services/" + route.service.id + "/plugins"
          )
          .then((res) => {
            res.data.data.map((res) => {
              console.log(res.name);
              if (res.name == "acl") {
                this.successRoutes.map((checkIn, index) => {
                  if (checkIn.service.id == route.service.id) {
                    this.successRoutes[index].acl.push(res);
                  }
                });
              }
            });
            this.$store.commit("setForm", {
              username: this.form.username,
              password: this.form.password,
            });
            this.$store.commit("setRoutes", this.routes);
            this.$store.commit("setSuccessRoutes", this.successRoutes);
            this.$router.push("/dashboard");
          })
          .catch((err) => {
            console.error(err);
          });
      });
    },
  },
};
</script>
