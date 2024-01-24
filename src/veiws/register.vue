<template>
    <div class="bg-white w-screen h-screen">
        <div class="mx-auto flex w-full max-w-sm flex-col gap-6">
            <h1 class=" text-black  mt-24 ">Bonjour, creer un compte pour continuer</h1>
            <label class="form-label text-black">Email</label>
            <div class="form-control -mt-4 ">
                <input placeholder="Email" type="text" class="input input-xl max-w-full bg-slate-100 border-slate-400 text-black" />
            </div>
            <label class="form-label text-black">Name</label>
            <div class="form-control -mt-4 ">
                <input placeholder="Name" type="text" class="input input-xl max-w-full bg-slate-100 border-slate-400 text-black" />
            </div>
            <label class="form-label text-black">Password</label>
            <div class="form-control -mt-4 ">
                <input placeholder="mot de passe" type="password" class="input input-xl max-w-full bg-slate-100 border-slate-400 text-black" />
            </div>
            <label class="form-label text-black">Confirme password</label>
            <div class="form-control -mt-4 ">
                <input placeholder="Confirme mot de passe" type="password" class="input input-xl max-w-full bg-slate-100 border-slate-400 text-black" />
            </div>
            <div class="flex gap-2">
				<input type="checkbox" class="checkbox"/>
				<a href="#" class=" text-black">Vous étes un Manager</a>
			</div>
            <RouterLink class="btn btn-black btn-block" to="/mood">Créer un compte</RouterLink>
        </div>
    </div>
</template>

<style>
</style>

<script>
export default {
  name: 'RegisterComponent',
  data() {
    return {
      email: '',
      password: '',
    }
  },
}
</script>