"use strict";(self["webpackChunk_cjmia_dashboard"]=self["webpackChunk_cjmia_dashboard"]||[]).push([[650],{3122:function(e,t,s){s.r(t),s.d(t,{default:function(){return K}});var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"ui-loader-container",class:{"is-loading":e.loading},attrs:{id:"content"}},[t("h2",{staticClass:"ui_invisible",attrs:{id:"page_title"}}),t("main",{staticClass:"wrap"},[t("div",{staticClass:"contents"},[t("div",{staticClass:"wrap"},[t("div",{staticClass:"ui_row"},[t("div",{staticClass:"wrap is-cols-pad"},[t("div",{staticClass:"ui_col"},[t("GroupTreeView",{attrs:{groupList:e.groupList,selectedGrp:e.selectedGrp},on:{"update:groupList":function(t){e.groupList=t},"update:group-list":function(t){e.groupList=t},"update:selectedGrp":function(t){e.selectedGrp=t},"update:selected-grp":function(t){e.selectedGrp=t}}})],1),t("div",{staticClass:"ui_col"},[t("MainBrd",{ref:"main_brd",attrs:{savePersonalization:e.savePersonalization,editKeyword:e.editKeyword,selectedGrp:e.selectedGrp,categoryList:e.getCategoryList},on:{"update:savePersonalization":function(t){e.savePersonalization=t},"update:save-personalization":function(t){e.savePersonalization=t},"update:editKeyword":function(t){e.editKeyword=t},"update:edit-keyword":function(t){e.editKeyword=t},updateKeyword:e.updateKeyword,deleteKeyword:e.deleteKeyword}})],1)])])])])]),t("aside",{directives:[{name:"control-aside-width",rawName:"v-control-aside-width",value:"admin_keyword",expression:"`admin_keyword`"}],staticStyle:{"min-width":"490px","max-width":"600px"}},[t("div",{staticClass:"ui_row"},[t("div",{staticClass:"wrap"},[t("div",{staticClass:"ui_col"},[t("AsideKeywords",{ref:"aside_regist",attrs:{editKeyword:e.editKeyword,selectedGrp:e.selectedGrp,categoryList:e.getCategoryList,xpName:e.getXpName},on:{"update:editKeyword":function(t){e.editKeyword=t},"update:edit-keyword":function(t){e.editKeyword=t},updateKeyword:e.updateKeyword,updateExceptKeyword:e.updateExceptKeyword,registKeyword:e.registKeyword,deleteKeyword:e.deleteKeyword}})],1)])])])])},i=[],d=(s(823),s(5791),s(9362)),r=s(4922),o=s(2568),n=s.n(o),c=s(147),l=s(7869),p=s(8864),h=s(5270),u=s(7190),y=s(329),w={name:"Common-layout",components:{GroupTreeView:c["default"],MainBrd:l["default"],AsideKeywords:p["default"]},data(){return{apiUID:d.V.v4(),loading:!1,groupList:[],selectedGrp:{},editKeyword:{},savePersonalization:{main:{data_list:{colOpts:{category:!0,name:!0,op:!0,ts:!0,sg_seqs:!0,expt_keywords:!0,reg_date:!0,w_name:!0,use_yn:!0},row_limit:50}}}}},computed:{getCategoryList(){let e=[];const t=this.selectedGrp?.xp,s=this.groupList.find((e=>e.xp==t))?.children||[];return s.length&&(e=s.map((e=>({code:e.yp,name:e.name})))),[{code:"",name:"카테고리를 선택하세요"},...e]},getXpName(){const e=this.selectedGrp?.xp,t=this.groupList.getParseDatas({xp:e})[0]?.name||"";return t}},beforeRouteEnter(e,t,s){h.Z.dispatch("opts/ATTRS",{cmm_type:"1,2,3,4,5"}).then((e=>{let t=e.data?.result?.list||[];Array.isArray(t)||(t=[t]),t.getParseDatas({code:1})[0]&&h.Z.commit("opts/SET_SGSEQS",t.getParseDatas({code:1})[0].children),t.getParseDatas({code:2})[0]&&h.Z.commit("opts/SET_TS",t.getParseDatas({code:2})[0].children),t.getParseDatas({code:3})[0]&&h.Z.commit("opts/SET_TSC",t.getParseDatas({code:3})[0].children),t.getParseDatas({code:4})[0]&&h.Z.commit("opts/SET_OP",t.getParseDatas({code:4})[0].children),t.getParseDatas({code:5})[0]&&h.Z.commit("opts/SET_SEARCHTYPE",t.getParseDatas({code:5})[0].children),s((()=>{}))})).catch((e=>{h.Z.dispatch("DIALOG_ERR",["제품 정보를 로드하지 못했습니다.<br>확인을 누르시면 새로고침 됩니다.<br>문제가 지속 될 경우 관리자에게 문의하세요.","속성 로드 실패",0]).then((e=>{location.reload()})).catch((e=>{}))}))},created(){const e=(0,r.hS)("personalization");this.savePersonalization=n()(this.savePersonalization,e?.admin_keyword),this.fetchGrpList()},mounted(){},watch:{savePersonalization:{deep:!0,handler(e){const t=(0,r.hS)("personalization"),s={...t,admin_keyword:{...t?.admin_keyword,main:{...t?.admin_keyword?.main,...e.main}}};(0,r.VV)("personalization",s)}},selectedGrp(e,t){e?.k_seq!==t?.k_seq&&(this.editKeyword={})}},methods:{async fetchGrpList(){this.loading=!0,await(0,u.U)(this.apiUID).then((e=>{this.groupList=[...e?.data?.result?.list]})).catch((e=>{h.Z.dispatch("DIALOG_ERR",["키워드 그룹을 조회하지 못했습니다.<br>확인을 누르시면 새로고침 됩니다.<br>문제가 지속 될 경우 관리자에게 문의하세요.","키워드 그룹 조회 실패",0]).then((e=>{location.reload()})).catch((e=>{}))})).finally((()=>{this.loading=!1}))},updateExceptKeyword(e){this.$set(this.editKeyword,"expt_keywords",e)},async updateKeyword(e){this.loading=!0;const t={level:3,type:"u",k_seq:e.k_seq,use_yn:e.use_yn};await(0,y.M)(this.apiUID,t).then((e=>{if(200!==e.data?.result?.code)throw new Error;{const e=String(t.k_seq).split(",")||[];if(e.includes(String(this.editKeyword.k_seq))){const e=structuredClone(this.editKeyword);e.use_yn=t.use_yn,e.active="Y"===t.use_yn,this.editKeyword=e}this.$store.dispatch("NOTY_COM","키워드 수정을 성공했습니다.")}})).catch((()=>{this.$store.dispatch("NOTY_ERR","키워드 수정을 실패했습니다.")})).finally((()=>{this.loading=!1}))},async registKeyword(e){this.loading=!0;const t={level:3,type:"i",...e};await(0,y.M)(this.apiUID,t).then((e=>{const t=e?.data?.result?.list||[];return this.$store.dispatch("NOTY_COM","키워드 등록을 성공했습니다."),t})).catch((()=>{this.$store.dispatch("NOTY_ERR","키워드 등록을 실패했습니다.")})).then((async e=>{await this.$refs.aside_regist.resetKeyword(e).then((()=>{})).catch((e=>{this.$store.dispatch("NOTY_ERR",e?.data?.result?.err)})).finally((()=>{this.loading=!1,this.$refs.main_brd.searching()}))}))},async deleteKeyword(e){this.loading=!0;const t={level:3,type:"d",k_seq:e?.k_seq,expt_k_seq:""};e?.expt_k_seq&&(t.expt_k_seq=e.expt_k_seq),await(0,y.M)(this.apiUID,t).then((e=>{if(200!==e.data?.result?.code)throw new Error;{const e=String(t.k_seq).split(",")||[];e.includes(String(this.editKeyword.k_seq))&&(this.editKeyword={}),this.$store.dispatch("NOTY_COM","키워드 삭제를 성공했습니다.")}})).catch((()=>{this.$store.dispatch("NOTY_ERR","키워드 삭제를 실패했습니다.")})).finally((()=>{this.loading=!1,this.$refs.main_brd.searching()}))}}},_=w,g=s(3483),m=(0,g.Z)(_,a,i,!1,null,null,null),K=m.exports}}]);