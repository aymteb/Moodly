<template>
    <div class="bg-white w-screen h-screen">
        <div class="mx-auto flex w-full max-w-sm flex-col gap-6">
            <h1 class=" text-black mt-36">Bienvenue!</h1>
            <label class="form-label text-black">email</label>
            <div class="form-control">
                <input placeholder="Email" type="text" class="input input-xl max-w-full bg-slate-100 border-slate-400 text-black" />
            </div>
            <label class="form-label text-black">Mot de passe</label>
            <div class="form-control">
                <input placeholder="mot de passe" type="password" class="input input-xl max-w-full bg-slate-100 border-slate-400 text-black" />
            </div>
            <label class="form-label">
				<a class="link link-underline-hover link-primary text-sm">Mot de passe oublié?</a>
			</label>
            <button class="btn btn-black btn-block">Default</button>
        </div>
    </div>
</template>

<style>
</style>

<script>
export default {
  name: 'LinkpasswordComponent',
  data() {
    return {
      email: '',
      password: '',
    }
  },
}
</script>