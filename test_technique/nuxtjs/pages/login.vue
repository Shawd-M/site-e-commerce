<template>
    
<div>
    <form>
  <label>
    <p class="label-txt">ENTER YOUR NAME</p>
    <input type="text" 
    class="input"
    name="name"
    v-model="name"
    required>
    <div class="line-box">
      <div class="line"></div>
    </div>
  </label>
  <label>
    <p class="label-txt">ENTER YOUR PASSWORD</p>
    <input type="text" 
    class="input"
    name="password"
    v-model="password"
    required>
    <div class="line-box">
      <div class="line"></div>
    </div>
  </label>
    <button @click="login" >submit</button>

</form>

</div>
</template>

<script>
  import axios from "axios"
export default {

  // middleware: 'redirect',

  data() {
    return {
      name: '',
      password: '',
      error: null,
      log: ''
    }
  },
  methods: {
    async login() {
      try {
       this.log = await this.$axios.post('http://127.0.0.1:40/login', {
        name: this.name,
        password: this.password
      }) 
    } catch(error) {
      console.log(error)
    }
    console.log(this.log.data);
    if (this.log.data == "bad password"){
      window.alert("Bad Password or Login !")
    } else if (this.log.data == "Log on"){
       this.$router.push('/');
       window.alert("Log on!")
    } else {
      window.alert("Indéfini")
    }
     
    },

  }
}
</script>

<style>

body {
  background: #C5E1A5;
}
form {
  width: 60%;
  margin: 60px auto;
  background: #efefef;
  padding: 60px 120px 80px 120px;
  text-align: center;
  -webkit-box-shadow: 2px 2px 3px rgba(0,0,0,0.1);
  box-shadow: 2px 2px 3px rgba(0,0,0,0.1);
}
label {
  display: block;
  position: relative;
  margin: 40px 0px;
}
.label-txt {
  position: absolute;
  top: -1.6em;
  padding: 10px;
  font-family: sans-serif;
  font-size: .8em;
  letter-spacing: 1px;
  color: rgb(120,120,120);
  transition: ease .3s;
}
.input {
  width: 100%;
  padding: 10px;
  background: transparent;
  border: none;
  outline: none;
}

.line-box {
  position: relative;
  width: 100%;
  height: 2px;
  background: #BCBCBC;
}

.line {
  position: absolute;
  width: 0%;
  height: 2px;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);
  background: #8BC34A;
  transition: ease .6s;
}

.input:focus + .line-box .line {
  width: 100%;
}

.label-active {
  top: -3em;
}

button {
  display: inline-block;
  padding: 12px 24px;
  background: rgb(220,220,220);
  font-weight: bold;
  color: rgb(120,120,120);
  border: none;
  outline: none;
  border-radius: 3px;
  cursor: pointer;
  transition: ease .3s;
}

button:hover {
  background: #8BC34A;
  color: #ffffff;
}

</style>