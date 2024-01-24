<template>
    <div class="bg-white w-screen h-screen">
        <div class="mx-auto flex w-full max-w-sm flex-col gap-6">
            <h1 class=" text-black mt-36">Nouveau mot de passe</h1>
            <label class="form-label text-black">Mot de passe</label>
            <div class="form-control">
                <input placeholder="mot de passe" type="password" class="input input-xl max-w-full bg-slate-100 border-slate-400 text-black" />
            </div>
            <label class="form-label text-black">Valider le mot de passe</label>
            <div class="form-control">
                <input placeholder="mot de passe" type="password" class="input input-xl max-w-full bg-slate-100 border-slate-400 text-black" />
            </div>
            <button class="btn btn-black btn-block">Changer le mot de passe</button>
        </div>
    </div>
</template>

<style>
</style>

<script>
export default {
  name: 'NewpasswordComponent',
  data() {
    return {
      email: '',
      password: '',
    }
  },
}
</script>