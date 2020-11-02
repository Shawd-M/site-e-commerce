<template>
    
<div>
    <form method="post" @submit.prevent="addmask" enctype="multipart/form-data">
  <label>
    <p class="label-txt">ENTER YOUR TITLE PRODUCT</p>
    <input 
      type="text" 
      class="input"
      name="title"
      v-model="title"
      required
      />
    <div class="line-box">
      <div class="line"></div>
    </div>
  </label>
  <label>
    <p class="label-txt">ENTER YOUR DESCRIPTION</p>
    <input 
      type="text" 
      class="input"
      name="description"
      v-model="description"
      required
      />
    <div class="line-box">
      <div class="line"></div>
    </div>
  </label>
  <label>
    <p class="label-txt">ENTER YOUR PRICE</p>
    <input 
      type="text"  
      class="input"
      name="price"
      v-model="price"
      required
      />
    <div class="line-box">
      <div class="line"></div>
    </div>
  </label>
    <label>
    <p class="label-txt">LOAD YOUR IMAGE</p>
    <input 
      type="file"  
      class="input"
      name="image"
      @change="onFileChange"
      required
      />
    <div class="line-box">
      <div class="line"></div>
    </div>
  </label>
  <button type="submit" @click="addmask">submit</button>
</form>
</div>
</template>

<script>
  import axios from "axios"

  const PATH_API = 'http://127.0.0.1:40/'

  export default {

    data() {
      return {
        title: '',
        description: '',
        price: '',
        image: '',
        error: null
      }
    },
    methods: {

        onFileChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length)
                return;
            this.image;
        },

        async addmask() {
          try {
        await this.$axios.post('http://127.0.0.1:40/postgoodie', {
          title: this.title,
          description: this.description,
          price: this.price,
          image: this.image
        }) 
      } catch(error) {
          console.log(error);
        }   
        this.title= '',
        this.description= '',
        this.price= '',
        this.image= null
      }
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