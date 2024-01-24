<template>
    <div class="flex flex-col mr-4 ml-4 rounded-[24px]" :style="{ backgroundColor: cardColor }">
        <h1 class="text-center text-4xl not-italic font-extrabold leading-[normal] p-10">Comment vous sentez-vous aujourd'hui ?</h1>
        <h2 class="text-center text-2xl not-italic font-medium leading-[normal]" :style="{color: moodTextColor}"> {{ moodName }}</h2>
        <img class="flex" :src="moodImagePath">
    </div>
</template>

<script>
export default {
    name: 'my_card',
    props: {
        moodNumber: {
            type: Number,
            required: true
        }
    },
    computed: {
        moodName() {
            const moods = ['En colère', 'Contrarier', 'Triste', 'Bien', 'Heureux', 'Royal'];
            return moods[this.moodNumber - 1];
        },
        moodImagePath() {
            const moodImages = {
                '1': require('@/assets/enerver.png'),
                '2': require('@/assets/contrarier.png'),
                '3': require('@/assets/triste.png'),
                '4': require('@/assets/bien.png'),
                '5': require('@/assets/heureux.png'),
                '6': require('@/assets/royal.png'),
             };
            return moodImages[this.moodNumber];
        },
        moodTextColor() {
            const colors = ['#782E04', '#313A54', '#3A7478', '#664F00', '#505D87', '#4D3238'];
            return colors[this.moodNumber - 1];
        },
        cardColor() {
            const colors = ['#FF843E', '#8CA4EE', '#A1E7EB', '#FDDD6F', '#DFEBFF', '#FFA7BC'];
            return colors[this.moodNumber - 1];
        }
    }
}
</script>

<style scoped>
h1 {
    font-family: 'Rubik', sans-serif;
}

h2 {
    font-family: 'Rubik', sans-serif;
    color: moodTextColor;

}
</style>
