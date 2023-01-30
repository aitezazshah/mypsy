<template>
  <div class="screen">
    <div class="container">
      <!-- Sign Up form contain the form and necessary text -->
      <div class="signup">
        <!-- The signup_form div contains each and everything from logo to form element -->
        <div class="signup_form">
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

          <!-- Form-1 -->

          <form action="" v-if="currentStep === 1">
            <div class="signup_info">
              <h2>Entrez votre adresse email</h2>
              <p class="email-p">
                Nous détecterons ensuite si vous avez déjà un compte chez nous ou
                si nous vous créons un compte
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

          <!-- Form 2 contains first name and last name -->
          <form action="" v-else-if="currentStep === 2">
            <div class="signup_info">
              <h2>Création de compte</h2>
              <br />
              <p>Renseignez ensuite votre Nom et prénom</p>
            </div>

            <input type="text" class="first_name" v-model="first_name" v-bind:class="{ 'error': !validFirstName }"
              placeholder="Votre nom" required />
            <input type="text" class="last_name" v-model="last_name" v-bind:class="{ 'error': !validLastName }"
              placeholder="Votre prénom" required />
            <div class="err">
              <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
            </div>

            <button class="form_button" type="button" @click="nextStep">
              SUIVANT <i class="fa fa-arrow-right"></i>
            </button>
          </form>

          <!-- Form 3 contains telepone input -->
          <form action="" v-else-if="currentStep === 3">
            <div class="signup_info">
              <h2>Ajoutez votre numéro de téléphone</h2>
              <br />
              <p>
                Il servira à vous connecter de manière sécurisée. Le praticien
                pourra également vous joindre en cas de problème.
              </p>
            </div>
            <input type="text" class="email" v-model="phone" v-bind:class="{ 'error': !validPhone }" placeholder="
            Numéro de téléphone" required />
            <div class="err">
              <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
            </div>

            <button class="form_button" type="button" @click="nextStep">
              SUIVANT <i class="fa fa-arrow-right"></i>
            </button>
          </form>


          <!-- form-4 which will include the passowrd requirement -->
          <form action="" @submit.prevent="onSubmit" v-else-if="currentStep === 4">
            <div class="signup_info">
              <h2>Créez votre mot de passe</h2>
              <br />
              <p>
                Votre mot de passe doit comprendre 8 caractères minimum, dont 1
                chiffre, 1 majuscule, 1 minuscule et 1 caractère spécial (@,#,..)
              </p>
            </div>
            <input type="password" class="password" v-model="password" placeholder="Mot de passe" required />
            <div class="err">
              <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
            </div>
            <div class="check">
              <input type="checkbox" class="checkbox" required />
              <p>
                J'ai lu et j'accepte les conditions générales d'utilisation et les
                conditions générales de vente
              </p>
            </div>


            <button class="form_button" type="submit">
              S'ENREGISTRER <i class="fa fa-arrow-right"></i>
            </button>
          </form>


        </div>
      </div>


      <!-- The right 50% of screen is covered with image -->
      <div class="video">
        <video ref="videoPlayer" autoplay loop>
          <source src="../assets/doctor.webm" type="video/webm" />
        </video>
      </div>
    </div>
  </div>
</template>

<script>
import { api } from "../boot/axios";
export default {
  name: "SignUp",
  data() {
    return {
      currentStep: 1,
      email: "",
      password: "",
      phone: "",
      first_name: "",
      last_name: "",
      errorMessage: "",
      validFirstName: true,
      validLastName: true,
    };
  },
  methods: {
    nextStep() {
      let emailRegex = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!this.email.match(emailRegex)) {
        this.errorMessage = "Invalid email address format!"

        return;
      }

      if (!this.first_name && this.currentStep == 2) {
        this.validFirstName = false;
        this.errorMessage = "Missing First or Last Name Field"
        return;
      } else {
        this.validFirstName = true;
      }

      // validate last name
      if (!this.last_name && this.currentStep == 2) {
        this.validLastName = false;
        this.errorMessage = "Missing First or Last Name Field"
        return;
      } else {
        this.validLastName = true;
      }
      // validate phone number
      if (!this.phone && this.currentStep == 3) {
        this.validPhone = false;
        this.errorMessage = "Missing Phone Number"
        return;
      } else {
        this.validPhone = true;
      }
      // if (!this.password || this.password.length < 8 && this.currentStep == 4) {
      //   this.errorMessage = "Password should not be empty and should be at least 8 characters long."
      //   return;
      // }



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
      this.signUp();
    },
    async signUp() {
      try {
        let result = await api.post("/users", {
          name: this.name,
          email: this.email,
          password: this.password,
          access_token: "43454524",
        });
        console.log(result);
        if (result.status == 201) {
          alert("SignUp Successful");
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
  display: flex;
  /* align-items: center; */
  justify-content: center;

}

.signup {
  flex: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;

}

/* Form for screen-1 */
.signup_form {
  width: 75%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* padding-top: 20px; */
  font-family: "Inter", sans-serif;
  text-align: center;
  margin: auto;
  /* margin: 80px auto; */

}

.email-p {
  display: inline-block;
  width: 100%;
  text-align: center;
}

.err {
  height: 10px;
  width: 100%;

}

.error {
  color: red;
  font-size: 14px;
  text-align: center;

}

.video {
  flex: 50%;
  /* height: 100%; */
  display: flex;
  justify-content: center;
  align-items: center;
}

.video video {
  width: 90%;
  height: 90%;
  background-size: cover;
  /* 
  margin-top: 85px;
  margin-right: 12px;
  margin-bottom: 25px; */
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
}

.logo .name {
  display: flex;
  align-items: center;
  padding-right: 170px;
}

.logo .name img {
  padding-left: 10px;
}

.signup_info {
  margin-top: 60px;
}

.signup_info h2 {
  color: #323a46;
  font-size: 24px;
  font-weight: 700;
  line-height: 0;
}

.signup_info p {
  font-size: 16px;
  color: #767c84;
  font-weight: 200;
}

.email,
.password,
.first_name {
  border: 1px solid lightgray;
  border-radius: 8px;
  width: 470px;
  height: 52px;
  margin-top: 30px;
  padding-left: 5px;
}

.last_name {
  border: 1px solid lightgray;
  border-radius: 8px;
  width: 470px;
  height: 52px;
  margin-top: 20px;
  padding-left: 5px;
}

.check {
  display: flex;
  margin-top: 10px;
}

.checkbox {
  margin-bottom: 12px;
}

.check p {
  color: #51545c;
  text-align: left;
  font-size: 12px;
  font-weight: 400;

  padding-left: 3px;
}

.form_button {
  width: 470px;
  height: 52px;
  background-color: #00a18b;
  border: none;
  border-radius: 8px;
  margin-top: 30px;
  color: white;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
}

.form_button i {
  padding-left: 20px;
}

@media (min-width: 1000px) and (max-width: 1028px) {

  .signup_form,
  .signup_form_1,
  .signup_form_2,
  .signup_form_3 {
    width: 100%;

    justify-content: center;

    /* margin: 180px auto; */
    margin: 70px auto;
  }
}

@media (min-width: 768px) and (max-width: 1000px) {

  /* Style goes here */
  .email,
  .password,
  .first_name,
  .last_name,
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

  .signup_form,
  .signup_form_1,
  .signup_form_2,
  .signup_form_3 {
    width: 100%;
    margin: 0;
    justify-content: center;
    margin-top: 100px;
  }

  .signup_info p {
    display: inline-block;
    width: 80%;
    text-align: center;
  }
}

@media (max-width: 750px) {
  /* styles for screens smaller than 600px wide */

  .video {
    display: none;
  }

  .signup {
    justify-content: center;
  }

  .signup_form,
  .signup_form_1,
  .signup_form_2,
  .signup_form_3 {
    width: 100%;
    margin-left: 0;
    margin-bottom: 0;
    margin-right: 0;
    justify-content: center;
    margin-top: 61px;
  }

  .email,
  .password,
  .first_name,
  .last_name,
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

  @media (max-width: 350px) {
    .signup_info h2 {
      display: inline-block;
    }

    .signup_info p {
      display: inline-block;
      width: 70%;
      text-align: center;
    }

    .checkbox p {
      display: inline-block;
      width: 80%;
    }
  }
}
</style>
