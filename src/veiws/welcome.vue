<template>
    <div class="flex flex-col bg-slate-100 w-screen h-screen">
      <img src="../assets/heureux.png" alt="heureux" class=" flex justify-center resize-none mt-44">
      <h1 class="flex justify-center">Moodly</h1>
      <RouterLink id="login" class="text-white justify-center m-4 align-middle" to="/login">Login</RouterLink>
      <RouterLink id="register" class="text-black justify-center mx-4 align-middl" to="/register">Register</RouterLink>
    </div>
   </template>
  
  <script>
  export default {
    name: 'WelcomePage',
  }
  </script>
  
  <style>
  h1 {
    color: #000;
    font-family: Poppins;
    font-size: 33.6px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
  }
  
  #login {
    display: flex;
    padding: 16px 0px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 100px;
    background: #29262A;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.10);
  }
  
  #register {
    border-radius: 100px;
    border: 1px solid #000;
    background-color: none;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.10);
    display: flex;
    
    padding: 16px;
    gap: 8px;
  }
  </style>
  