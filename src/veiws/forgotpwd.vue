<template>
    <div class="bg-white w-screen h-screen">
        <div class="mx-auto flex w-full max-w-sm flex-col gap-6">
            <h1 class=" text-black mt-36">Mot de passe oublié</h1>
            <label class="form-label text-black">email</label>
            <div class="form-control">
                <input placeholder="Email" type="text" class="input input-xl max-w-full bg-slate-100 border-slate-400 text-black" />
            </div>
            <button class="btn btn-black btn-block">Envoyer un code</button>
        </div>
    </div>
</template>

<style>
</style>

<script>
export default {
  name: 'ForgotPasswordComponent',
  data() {
    return {
      email: '',
      password: '',
    }
  },
}
</script>