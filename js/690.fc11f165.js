"use strict";(self["webpackChunk_cjmia_dashboard"]=self["webpackChunk_cjmia_dashboard"]||[]).push([[690],{690:function(t,e,s){s.r(e),s.d(e,{default:function(){return L}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"ui-loader-container",class:{"is-loading":t.loading},attrs:{id:"content"}},[e("h2",{staticClass:"ui_invisible",attrs:{id:"page_title"}}),e("main",{staticClass:"wrap is-hgt100"},[e("div",{staticClass:"contents"},[e("div",{staticClass:"wrap"},[e("div",{staticClass:"ui_row"},[e("div",{staticClass:"wrap"},[e("div",{staticClass:"ui_col"},[e("CompMemberList",{attrs:{savePersonalization:t.savePersonalization,dataList:t.dataList,userGrpList:t.userGrpList,deptList:t.getDeptList,editItem:t.editItem},on:{"update:savePersonalization":function(e){t.savePersonalization=e},"update:save-personalization":function(e){t.savePersonalization=e},delete:t.deleteMember,edit:t.setEditItem}})],1)])])])])]),e("aside",{directives:[{name:"control-aside-width",rawName:"v-control-aside-width",value:"admin_user",expression:"`admin_user`"}],staticStyle:{"min-width":"390px","max-width":"800px"}},[e("div",{staticClass:"ui_row"},[e("div",{staticClass:"wrap"},[e("div",{staticClass:"ui_col"},[e("CompAsideMember",{attrs:{userGrpList:t.getUserGrpList,deptList:t.getDeptList,rankList:t.getRankList,editItem:t.editItem},on:{edit:t.setEditItem,delete:t.deleteMember,fetchUserGrp:t.fetchUserGrp,fetchDatas:t.fetchDatas}})],1)])])])])},i=[],n=(s(823),s(5791),s(9362)),r=s(4922),d=s(2568),o=s.n(d),c=s(9683),l=s(696),h=s(7186),p={name:"page-admin-user",components:{CompMemberList:c["default"],CompAsideMember:l["default"]},data(){return{apiUID:n.V.v4(),loading:!1,savePersonalization:{main:{data_list:{colOpts:{user_grp:!0,id:!0,name:!0,dept:!0,mobile:!0,email:!0,reg_date:!0}}}},dataList:[],userGrpList:[],editItem:{}}},created(){const t=(0,r.hS)("personalization");this.savePersonalization=o()(this.savePersonalization,t?.admin_user)},mounted(){this.fetchDatas()},watch:{savePersonalization:{deep:!0,handler(t){const e=(0,r.hS)("personalization"),s={...e,admin_user:{...e?.admin_user,main:{...e?.admin_user?.main,...t.main}}};(0,r.VV)("personalization",s)}}},computed:{getUserGrpList(){return this.userGrpList.map((t=>{const e=structuredClone(t);return e.cnt=this.dataList.getParseDatas({user_grp:t.code}).length,e}))},getDeptList(){const t=[];return this.dataList.forEach((e=>{e?.dept?t.addItem({code:e.dept,name:e.dept}):null===e?.dept&&t.addItem({code:"null",name:"부서없음"})})),t},getRankList(){const t=[];return this.dataList.forEach((e=>{e?.rank&&t.addItem({code:e.rank,name:e.rank})})),t}},methods:{async fetchDatas(){this.loading=!0,await(0,h.F_)(this.apiUID).then((t=>{const e=structuredClone(t.data);this.dataList=e?.result?.list||[]})).then((()=>{this.fetchUserGrp()})).finally((()=>{this.loading=!1}))},async fetchUserGrp(){await this.$store.dispatch("opts/ATTRS",{cmm_type:"6"}).then((t=>{const e=structuredClone(t.data);this.userGrpList=e?.result?.list[0]?.children?.flatten()||[]})).catch((()=>{this.$store.dispatch("DIALOG_ERR",["데이터를 로드하지 못했습니다.<br>확인을 누르시면 새로고침 됩니다.<br>문제가 지속 될 경우 관리자에게 문의하세요.","로드 실패",0]).then((()=>{location.reload()})).catch((()=>{}))}))},async deleteMember(t){const e=`<strong>[${t.name}]</strong> 사용자를 삭제하시겠습니까?`;this.$store.dispatch("DIALOG_WRN",[e,"사용자 그룹 삭제",2]).then((async()=>{this.loading=!0;const e={type:"d",seq:t.seq};await(0,h.pQ)(this.apiUID,e).then((()=>{this.$store.dispatch("NOTY_COM","사용자 삭제를 성공했습니다."),this.fetchDatas()})).catch((()=>{this.$store.dispatch("NOTY_ERR","사용자 삭제를 실패했습니다.")})).finally((()=>{this.loading=!1}))})).catch((()=>{}))},setEditItem(t){this.editItem=structuredClone(t)}}},u=p,m=s(3483),_=(0,m.Z)(u,a,i,!1,null,"1c6d24e8",null),L=_.exports}}]);