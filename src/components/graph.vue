<template>
    <div class="flex flex-col items-center bg-[#FFEFE5] h-[100vh]">
        <img src="./../assets/Logo.png" class="p-8">
        <div class="camembert-container">
            <svg width="300" height="300" viewBox="0 0 32 32">
                <path v-for="segment in tab_segment"
                      :d="segment.path"
                      :key="segment.mood"
                      :fill="getMoodColor(segment.mood)"
                      @click="handleClick"/>
            </svg>
        </div>
        <div v-if="selectedMood" class="mood-details">
            <h3 class="text-black">{{ selectedMood }}</h3>
            <ul>
                <li class="text-black" v-for="tag in moodDetails" :key="tag">{{ tag.data }}</li>
            </ul>
        </div>
        <div class="flex flex-col mt-5">
            <div v-for="mood in getUniqueMoods()" :key="mood" class="flex items-center mb-[5px] text-black">
                <span class="w-5 h-5 mr-2.5 rounded-[50%]" :style="{ backgroundColor: getMoodColorFromName(mood) }"></span>
                <span class="text-sm text-black">{{ mood }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'PieChart',
    data() {
        return {
            moods: [],
            selectedMood: null,
            moodDetails: [],
            moodTags: {},
            tab_segment: [],
        };
    },
    methods: {
        describeArc(x, y, radius, startAngle, endAngle) {
            const start = this.polarToCartesian(x, y, radius, endAngle);
            const end = this.polarToCartesian(x, y, radius, startAngle);
            return [
                'M', x, y,
                'L', start.x, start.y,
                'A', radius, radius, 0, endAngle - startAngle <= 180 ? '0' : '1', 0, end.x, end.y,
                'Z'
            ].join(' ');
        },
        polarToCartesian(centerX, centerY, radius, angleInDegrees) {
            const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
            return {
                x: centerX + (radius * Math.cos(angleInRadians)),
                y: centerY + (radius * Math.sin(angleInRadians))
            };
        },
        getMoodColor(mood) {
            switch (mood) {
                case 1: return '#FF843E';
                case 2: return '#8CA4EE';
                case 3: return '#A1E7EB';
                case 4: return '#FDDD6F';
                case 5: return '#DFEBFF';
                case 6: return '#FFA7BC';
                default: return '#808080';
            }
        },
        getMoodColorFromName(moodName) {
            switch (moodName) {
                case 'En colère': return '#FF843E';
                case 'Contrarier': return '#8CA4EE';
                case 'Triste': return '#A1E7EB';
                case 'Bien': return '#FDDD6F';
                case 'Heureux': return '#DFEBFF';
                case 'Royal': return '#FFA7BC';
                default: return '#808080';
            }
        },
        handleClick(mood) {
            this.selectedMood = mood;
            this.moodDetails = this.moodTags[mood] || [];
        },
        async fetchMoods() {
            try {
                const response = await axios.get('http://localhost:1337/api/tableau-humeurs');
                for (let i = 0; i < response.data.data.length; i++) {
                    response.data.data[i].mood = response.data.data[i].attributes['nom_de_l_humeur'];
                    response.data.data[i].count = response.data.data[i].attributes['nombre_de_reaction'];
                }
                this.moods = response.data.data;
                this.calculateSegments();
            } catch (error) {
                console.error('Erreur lors de la récupération des données des humeurs:', error);
            }
        },
        async fetchMoodTags() {
            try {
                const response = await axios.get('http://localhost:1337/api/tableau-tags');
                this.moodTags = response.data.data;
            } catch (error) {
                console.error('Erreur lors de la récupération des tags des humeurs:', error);
            }
        },
        calculateSegments() {
            let countEnColere = 0, countContrarier = 0, countTriste = 0, countBien = 0, countHeureux = 0, countRoyal = 0;
            this.moods.forEach(mood => {
                const moodName = mood.attributes['Humeur'];
                switch (moodName) {
                    case 'En colère': countEnColere++; break;
                    case 'Contrarier': countContrarier++; break;
                    case 'Triste': countTriste++; break;
                    case 'Bien': countBien++; break;
                    case 'Heureux': countHeureux++; break;
                    case 'Royal': countRoyal++; break;
                }
            });

            const total = countEnColere + countContrarier + countTriste + countBien + countHeureux + countRoyal;
            if (total === 0) return;

            let startAngle = 0;
            const counts = [countEnColere, countContrarier, countTriste, countBien, countHeureux, countRoyal];
            counts.forEach((count, index) => {
                if (count > 0) {
                    const angle = (count / total) * 360;
                    const segment = this.describeArc(16, 16, 15, startAngle, startAngle + angle);
                    this.tab_segment.push({ mood: index + 1, path: segment });
                    startAngle += angle;
                }
            });
        },
        getUniqueMoods() {
            const unique = {};
            this.moods.forEach(mood => {
                if (!unique[mood.attributes['Humeur']]) {
                    unique[mood.attributes['Humeur']] = true;
                }
            });
            return Object.keys(unique);
        },
    },
    mounted() {
        this.fetchMoods();
        this.fetchMoodTags();
    }
}
</script>

<style>
    .camembert-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .mood-details {
        margin-top: 20px;
        padding: 15px;
        border: 1px solid #b80808;
        border-radius: 8px;
        width: 80%;
    }
</style>

