<template>
    <div>
        <LoanDetail 
        v-for="(list, idx) in lists" 
        :list="list"
        :key="idx"
        />
    </div>
</template>

<script>
import LoanDetail from "./LoanDetail.vue"

export default {
    name: "LoanList",
    components: {
        LoanDetail,
    },
    data() {
        return {
            lists : [
                {
                    name: "버팀목 전세자금대출",
                    bank: "KB국민은행",
                    term: "2년",
                    max: "2억 2천만",
                    features: ["부부합산 총소득이 5천만원 이하인 고객에게 임차보증금의 70%이내에서 최고 1억2천만원까지 지원",
                    "부부합산 총소득이 6천만원 이하인 신혼가구에 임차보증금의 80%이내에서 최고 2억원까지 지원",
                    "부부합산 총소득이 6천만원 이하인 2자녀(미성년자) 이상인 가구에 임차보증금의 80%이내에서 최고 2억 2천만원까지 지원"
                    ],
                    interest: "연 2.1% ~ 연 2.7%",
                    url: "https://obank.kbstar.com/quics?page=C103998&cc=b104363:b104516&isNew=N&prcode=LN40000039&QSL=F",
                    condition: "임차전용면적 85㎡(수도권을 제외한 도시지역이 아닌 읍 또는 면지역 100㎡)이하 주택 또는 주거용 오피스텔(85㎡ 이하)"
                },{
                    name: "중소기업 취업청년 버팀목전세자금대출",
                    bank: "KB국민은행",
                    term: "2년",
                    max: "1억",
                    features: ["중소기업 또는 중견기업에 재직하거나, 중소벤처기업진흥공단,신용보증기금,기술보증기금으로부터 보증 또는 창업자금을 지원받은 청년 가구에 대해 임차보증금의 100% 이내(한국주택금융공사 주택금융신용보증서인 경우 80% 이내)에서 최대 1억원까지 지원"],
                    interest: "연 1.2%",
                    url: "https://obank.kbstar.com/quics?page=C103998&cc=b104363:b104516&isNew=N&prcode=LN20001159&QSL=F",
                    condition: "임차 전용면적 85㎡ 이하, 임차보증금 2억원 이하 주택(주거용오피스텔 포함)"
                },{
                    name: "KB주택전세자금대출",
                    bank: "KB국민은행",
                    term: "2년",
                    max: "2억 2천 2백만",
                    features: ["본인과 배우자 합산 주택보유수가 무주택 또는 1주택 이내인 고객 대상(단, 주택보유수가 1주택인 경우 부부합산 연소득 1억원 이하)",
                    "수도권 5억원, 지방 3억원 이하 주택전세계약 시 전세자금을 지원하는 대출상품"],
                    interest: "최대 2.9%",
                    url: "https://obank.kbstar.com/quics?page=C103507&cc=b104363:b104516&isNew=N&prcode=LN20000026&QSL=F",
                    condition: "주택(건물등기사항전부증명서 상의 용도가 주택으로 표시된 건물) 및 주거용 오피스텔"
                },
            ]
        }
    }

}
</script>

<style>

</style>