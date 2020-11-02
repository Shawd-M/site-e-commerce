<template>
    
  <div>
  
    <div class="container mt-4 mb-4">
      <div class="cart-added mb-5">
          <div class="d-flex justify-content-between p-2 align-items-center">
              <div class="d-flex flex-row align-items-center"> <img src="https://i.imgur.com/SVe6fhC.png" width="20">
                  <div class="d-flex flex-column ml-3"> <span class="font-weight-bold">Item added to your quote <i class="fa fa-check-circle text-success"></i></span> <small class="text-muted suction">SC760 [Low Suction]</small> </div>
              </div>
              <div class="d-flex flex-row align-items-center"> <span class="mr-3">Continue Shopping</span> <button class="btn btn-success">Go to Quote</button> </div>
          </div>
      </div>
      <h5>Related products</h5>
      <div class="row g-2">
          <div class="col-md-6">
              <div class="product-card d-flex flex-row align-items-center">
              <ul>
                <li v-for="item in items" :key="item._id"> 
                  <div class="text-center"> <img src="" width="200"></div> 
                      <h6 class="mb-1"> {{ item.title }} </h6> <span> {{ item.price }} </span> <br> <span> {{ item.description }} </span>
                      <div class="buttons mt-3"> 
                        <button class="btn btn-outline-danger btn-sm wishlist">Add to wishlist</button> 
                        <button class="btn btn-success btn-sm">Add to Quote</button> 
                        <button class="btn btn-outline-danger btn-sm wishlist" @click=deleteo(item._id)> Delete </button> 
                      </div>         
                </li>
                
              </ul>
                  </div>
              </div>
          </div>
  </div>
  <nav aria-label="page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item disabled">
        <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
      </li>
      <li class="page-item"><a class="page-link" href="#">1</a></li>
      <li class="page-item"><a class="page-link" href="#">2</a></li>
      <li class="page-item"><a class="page-link" href="#">3</a></li>
      <li class="page-item">
        <a class="page-link" href="#">Next</a>
      </li>
    </ul>
  </nav>
  
  </div>
  
  </template>
  
  <script>
  
  import axios from "axios"
  
  
    export default {
  
      data(){
        return {
          data: "default",
          items: []
        }
      },
      mounted: function() {
        var that = this;
        axios.get('http://127.0.0.1:40/getgoodie/')
          .then(function(response) {
            if(response.status = 200) {
              that.items = response.data;
              console.log(that.items);
          } else {
              console.log('error');
          }
      })
    },

    methods: {
      async deleteo(_id) {
         axios.delete('http://127.0.0.1:40/rmgoodie/' + _id)
        var that = this;
        axios.get('http://127.0.0.1:40/getgoodie/')
          .then(function(response) {
            if(response.status = 200) {
              that.items = response.data;
              console.log(that.items);
          } else {
              console.log('error');
          }
      })

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