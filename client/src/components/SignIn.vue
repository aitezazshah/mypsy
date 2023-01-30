<template>
  <div class="screen">
    <div class="container">
      <div class="login">
        <div class="login_form">
          <div class="logo">
            <div class="back" @click="prevStep">
              <i class="fa fa-arrow-left"></i>
              <p>Back</p>
            </div>

            <div class="name">
              <img src="../assets/logo.png" alt="logo" />
              <img src="../assets/MyPsy.png" alt="name" />
            </div>
          </div>


          <form action="" v-if="currentStep === 1">
            <div class="login_info">
              <h2>Entrez votre adresse email</h2>
              <p class="email-p">
                Nous détecterons ensuite si vous avez déjà un compte chez nous ou si
                nous vous créons un compte
              </p>
            </div>
            <input type="email" class="email" v-model="email" placeholder="example@domaine.com" required /><br />
            <div class="err">
              <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
            </div>
            <button class="form_button" @click="nextStep" type="button">
              SUIVANT <i class="fa fa-arrow-right"></i>
            </button>

          </form>

          <form action="" @submit.prevent="onSubmit" v-else-if="currentStep === 2">
            <div class="login_info">
              <h2 class="password-p">Entrez votre mot de passe</h2>

              <p>Renseignez ensuite votre mot de passe</p>
            </div>

            <input type="password" class="password" v-model="password" placeholder="Mot de passe" required />
            <div class="err">
              <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
            </div>
            <button class="form_button" type="submit">
              SE CONNECTER <i class="fa fa-arrow-right"></i>
            </button>
          </form>
        </div>
      </div>
      <!-- The right 50% of screen is covered with image -->
      <div class="video">
        <video ref="videoPlayer" autoplay loop>
          <source src="../assets/login.webm" type="video/webm" />
        </video>
      </div>
    </div>
  </div>

</template>

<script>
import { api } from "../boot/axios";
export default {
  name: "SignIn",
  data() {
    return {
      currentStep: 1,
      email: "",
      password: "",
      errorMessage: "",

    };
  },
  methods: {
    nextStep() {
      let emailRegex = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!this.email.match(emailRegex)) {
        this.errorMessage = "Invalid email address format!"
        return;
      }


      this.errorMessage = "";
      this.currentStep++;

      // console.log(this.currentStep);
    },
    prevStep() {
      if (this.currentStep > 1) {
        this.currentStep--;
      }

    },

    onSubmit(event) {
      event.preventDefault();

      this.login();
    },
    async login() {
      try {
        const data = await api.post("/session", {
          email: this.email,
          password: this.password,
        });
        if (data) {
          console.log(data);
          alert("Login Successful");
        } else {
          alert("Email or Password may be incorrect");
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style lang="css" scoped>
.screen {
  display: flex;

  width: 100%;
  height: 100vh;



  display: flex;
  align-items: center;
  justify-content: center;



}

.container {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 90%;
  align-self: center;

  /* margin: auto; */
  display: flex;
  /* align-items: center; */
  justify-content: center;

}

.login {
  flex: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* border: 2px solid red; */
}



/* Form for screen-1 */
.login_form {
  width: 75%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* padding-top: 20px; */
  font-family: "Inter", sans-serif;
  text-align: center;
  /* border: 2px solid green; */
  margin: auto;
  /* margin: 140px auto; */
  /* margin-top: 140px;

  margin-left: 151px;
  margin-bottom: 286px; */
}

.video {
  flex: 50%;
  /* border: 2px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
}

.video video {
  height: 90%;
  width: 90%;

  /* height: 100%; */
  background-size: cover;
  /* margin-top: 85px;
  margin-right: 12px;
  margin-bottom: 25px; */
}

.email-p {
  display: inline-block;
  width: 100%;
  text-align: center;
}

.login_info .password-p {
  margin: 0;
  padding-top: 30px;
}

/* form for screen-2 */

.logo {
  display: flex;

  width: 470px;
  justify-content: space-between;
  align-items: center;
}

.logo .back {
  display: flex;
  width: 60px;
  cursor: pointer;
  justify-content: space-between;

  align-items: center;
}

.logo .back {
  font-size: 16px;
  color: #51545c;
}

.logo .back i {
  color: #51545c;
  padding-right: 10px;
}

.logo .name {
  display: flex;
  align-items: center;
  padding-right: 170px;
}

.logo .name img {
  padding-left: 10px;
}

.login_info {
  margin-top: 50px;
}

.login_info h2 {
  color: #323a46;
  font-size: 24px;
  font-weight: 700;
}

.login_info p {
  font-size: 16px;
  color: #767c84;
  font-weight: 200;
}

.logo .back {
  padding-left: 20px;
}

.email {
  border: 1px solid lightgray;
  border-radius: 8px;
  width: 470px;
  height: 52px;
  margin-top: 30px;
  padding-left: 5px;
}

.err {
  height: 30px;
  width: 100%;
  text-align: center;

}

.error {
  color: red;
  font-size: 14px;
  text-align: center;

}

.password {
  border: 1px solid lightgray;
  border-radius: 8px;
  width: 470px;
  height: 52px;
  margin-top: 30px;
  padding-left: 5px;
}

.form_button {
  width: 470px;
  height: 52px;
  background-color: #00a18b;
  border: none;
  border-radius: 8px;
  margin-top: 10px;
  color: white;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
}

.form_button i {
  padding-left: 20px;
}

/* Media Queries for responsiveness */


@media (min-width: 1000px) and (max-width: 1024px) {
  .login_info {
    margin-top: 20px;
  }

  .login_form {
    width: 100%;
    justify-content: center;
    margin: 120px auto;
  }

  .email {
    width: 430px;
    height: 52px;
    margin-top: 20px;
    padding-left: 5px;
  }

  .password {
    border: 1px solid lightgray;
    border-radius: 8px;
    width: 430px;
    height: 52px;
    margin-top: 20px;
    padding-left: 5px;
  }

  .form_button {
    width: 430px;
    height: 52px;
    background-color: #00a18b;
    border: none;
    border-radius: 8px;
    margin-top: 30px;
  }
}

@media (min-width: 767px) and (max-width: 1000px) {
  /* Style goes here */

  .email,
  .password,
  .form_button {
    width: 470px;
    height: 52px;
  }

  .video {
    display: none;
  }

  .email-p {
    display: inline-block;
    width: 70%;
    text-align: center;
  }

  .login_form,
  .login_form_1 {
    width: 100%;
    margin: 0;
    justify-content: center;
    margin-top: 50px;
  }
}

@media (max-width: 750px) {
  .video {
    display: none;
  }

  .login {
    width: 100%;
    justify-content: center;
  }

  .login_form,
  .login_form_1 {
    width: 100%;
    margin-left: 0;
    margin-bottom: 0;
    margin-right: 0;
    justify-content: center;
    margin-top: 65px;
  }

  .email-p {
    display: inline-block;
    width: 80%;
    text-align: center;
  }

  .email,
  .password,
  .form_button {
    width: 330px;
    height: 52px;
  }

  .logo {
    width: 410px;
  }

  .logo .name {
    display: flex;
    align-items: center;
    padding-right: 120px;
  }

  .logo .back {
    padding-left: 50px;
  }
}

@media (max-width: 350px) {

  .email,
  .password,
  .form_button {
    width: 280px;
    height: 52px;
  }

  .email-p {
    display: inline-block;
    width: 80%;
    text-align: center;
  }

  .login_info h2 {
    line-height: 2rem;
  }

  .logo .back {
    padding-left: 80px;
  }
}
</style>
