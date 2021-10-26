<template>
    <div class="text-center" style='margin: auto 0;'>
        
        <v-dialog
        v-model="dialog"
        max-width="500px"
        width="90vw"
        >
        <template v-slot:activator="{ on, attrs }">
            <div style="display: flex; flex-direction: column;">
                <v-icon
                    style="padding:0 16px"
                    v-bind="attrs"
                    v-on="on"
                    size="30px"
                >mdi-account-circle
                </v-icon>
                <span v-if="dialog" style="font-size:12px; font-family: 'NEXON Lv1 Gothic OTF'">매물검색</span>
            </div>
        </template>

        <v-card class='profile-modal'> 
            <v-card-title class="profile-title">
                <v-avatar size='20'>
                    <v-img type="button" @click="changeProfile" src="../../assets/images/profile/exchange.png" style="width: 20px; height: 20px;"></v-img>
                </v-avatar>
                <v-avatar size='60' class="profile-img">
                    <v-img v-if="profile" src="../../assets/images/profile/man.png"></v-img>
                    <v-img v-else src="../../assets/images/profile/woman.png"></v-img>
                </v-avatar>
                <h3 style="color: #645B4C; font-family: 'NEXON Lv1 Gothic OTF'">{{ user.user_name }}</h3>
            </v-card-title>

            <v-card-text class="profile-content">
                <div style='height: 20px;'></div>
                <div class='profile-content-detail'>
                    <div style="display: flex; justify-content: space-between;">
                        <div class='profile-content-title'>성 별</div>
                        <div class="profile-content-text">
                            <span v-if="user.gender === 0">남 성</span>
                            <span v-else>여 성</span>
                        </div>
                    </div>
                    <v-divider></v-divider>
                    <div style="display: flex; justify-content: space-between;">
                        <div class='profile-content-title'>이 메 일</div>
                        <div class="profile-content-text">
                            {{ user.email }}
                        </div>
                    </div>
                    <v-divider></v-divider>
                    <div style="display: flex; justify-content: space-between;">
                        <div class='profile-content-title'>계좌 번호</div>
                        <div class="profile-content-text">
                            {{ user.account }}
                        </div>
                    </div>
                    <v-divider></v-divider>
                    <div style="display: flex; justify-content: space-between;">
                        <div class='profile-content-title'>나 이</div>
                        <div class="profile-content-text">
                            {{ user.age }}
                        </div>
                    </div>
                    <v-divider></v-divider>
                    <div style="display: flex; justify-content: space-between;">
                        <div class='profile-content-title'>거주희망지역</div>
                        <div class="profile-content-text">
                            서울특별시 영등포구
                        </div>
                    </div>
                    <v-divider></v-divider>
                    <div style="display: flex; justify-content: space-between;">
                        <div class='profile-content-title'>고려 사항</div>
                        <div class="profile-content-text">
                            <v-select
                                :items="reasons"
                                solo
                                hide-details="true"
                                :label=reasons[user.reason]
                                @change="setReason($event)"
                                style="width: 70%; height: 70%; margin-left:auto;"
                            ></v-select>
                        </div>
                    </div>
                </div>
                <v-btn color="#FFCC00" @click="dialog=false" width="80%" style="position: absolute; bottom: 20px;">확 인</v-btn>
            </v-card-text>
        </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    name: "Profile",
    components: {

    },
    computed: {
        user() {
            return this.$store.state.user
        }
    }
    ,
    data () {
        return {
            dialog: false,
            profile: true,
            man: {
                account: "123456-01-112233",
                email: "Kookmin@gmail.com",
                role: 1,
                user_name: "김국민",
                sign: '',
                gender: 0,
                age: 22,
                reason: 4,
            },
            woman: {
                account: "110101-02-135790",
                email: "bank@gmail.com",
                role: 1,
                user_name: "이은행",
                sign: '',
                gender: 1,
                age: 25,
                reason: 0,
            },
            reasons: ["Safety", "Economy", "Environment", "price", "traffic"]
        }
    },
    methods: {
        changeProfile() {
            if (this.profile) {
                this.$store.state.user = this.woman
            } else {
                this.$store.state.user = this.man
            }
            this.profile = !this.profile
        },
        setReason(event) {
            if (this.profile) {
                this.man.reason = this.reasons.indexOf(event)
            } else {
                this.woman.reason = this.reasons.indexOf(event)
            }
            this.$store.state.user.reason = this.reasons.indexOf(event)
        }
    }

}
</script>

<style scoped>
@font-face {
  font-family: "NEXON Lv1 Gothic OTF";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv1 Gothic OTF.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}

.profile-modal {
    max-width: 500px;
    width: 90vw;
    height: 80vh;
}
.profile-title {
    background-color: #FFCC00;
    height: 28vh;   
    display: flex;
    justify-content: center;
    flex-direction: column;
}
.profile-img {
    border: solid 2px ;
    background-color: white;
    margin: 20px 0 10px 0;
}
.profile-content {
    background-color: rgb(235, 235, 235);
    height: 52vh;
    display: flex;
    align-items: center;
    flex-direction: column;
}
.profile-content-detail {
    background-color: white;
    width: 100%;
    border-radius: 8px 8px 8px 8px / 8px 8px 8px 8px;
    padding: 4px 16px;
}
.profile-content-title {
    font-size: 1rem;
    margin: auto 0;
    color: #645B4C;
    width: 30%;
    text-align: center;
    font-weight: bold;

}
.profile-content-text {
    font-size: 1rem;
    margin: 10px 0;
}
</style>