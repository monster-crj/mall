"use strict";(self["webpackChunkvue_mall"]=self["webpackChunkvue_mall"]||[]).push([[508],{3508:function(t,e,c){c.r(e),c.d(e,{default:function(){return n}});var s=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"container"},[e("div",{staticClass:"cart"},[e("table",[t._m(0),e("tbody",t._l(t.cartList,(function(c){return e("tr",{key:c.skuId},[e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:c.checked,expression:"item.checked"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(c.checked)?t._i(c.checked,null)>-1:c.checked},on:{change:[function(e){var s=c.checked,a=e.target,i=!!a.checked;if(Array.isArray(s)){var h=null,r=t._i(s,h);a.checked?r<0&&t.$set(c,"checked",s.concat([h])):r>-1&&t.$set(c,"checked",s.slice(0,r).concat(s.slice(r+1)))}else t.$set(c,"checked",i)},t.handleChange]}})]),e("td",[e("div",{staticClass:"goods"},[e("router-link",{attrs:{to:"/"}},[e("el-image",{attrs:{src:c.picture,lazy:""}})],1),e("div",[e("p",{staticClass:"name ellipsis"},[t._v(" "+t._s(c.name)+" ")]),e("p",{staticClass:"attr"},[t._v(t._s(c.attrsText))])])],1)]),e("td",{staticClass:"tc"},[e("p",[t._v("¥"+t._s(c.nowPrice))]),e("p",[t._v(" 比加入时降价 "),e("span",{staticClass:"price"},[t._v("¥"+t._s(t._f("priceFormat")(c.price-c.nowPrice)))])])]),e("td",{staticClass:"tc"},[t._v(t._s(c.count))]),e("td",{staticClass:"tc"},[e("p",{staticClass:"f16 price"},[t._v(" ¥"+t._s(t._f("priceFormat")(c.nowPrice*c.count))+" ")])]),e("td",{staticClass:"tc"},[e("p",[e("span",{staticClass:"delete",on:{click:function(e){return t.openMsg(c.skuId)}}},[t._v("删除")])])])])})),0)])]),e("div",{staticClass:"action"},[e("div",{staticClass:"batch"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.allChecked,expression:"allChecked"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.allChecked)?t._i(t.allChecked,null)>-1:t.allChecked},on:{change:[function(e){var c=t.allChecked,s=e.target,a=!!s.checked;if(Array.isArray(c)){var i=null,h=t._i(c,i);s.checked?h<0&&(t.allChecked=c.concat([i])):h>-1&&(t.allChecked=c.slice(0,h).concat(c.slice(h+1)))}else t.allChecked=a},t.handleAllChange]}}),e("span",[t._v("全选")])]),e("div",{staticClass:"total"},[t._v(" 共 "+t._s(t.total)+" 件商品，已选择 "+t._s(t.checkNum)+" 件，合计： "),e("span",{staticClass:"price"},[t._v(t._s(t._f("priceFormat")(t.checkPrice)))]),e("el-button",{attrs:{type:"primary"},on:{click:t.handleClick}},[t._v("结算")])],1)])])])},a=[function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("th",{attrs:{width:"120"}}),e("th",{attrs:{width:"400"}},[t._v("商品信息")]),e("th",{attrs:{width:"220"}},[t._v("单价")]),e("th",{attrs:{width:"180"}},[t._v("数量")]),e("th",{attrs:{width:"180"}},[t._v("小计")]),e("th",{attrs:{width:"140"}},[t._v("操作")])])])}],i={data(){return{cartList:[],total:0,checkList:[],checkNum:0,checkPrice:0,deleteIds:[],allChecked:!1}},filters:{priceFormat(t){return t.toFixed(2)}},methods:{async getCartList(){const{data:t}=await this.$axios.get("/member/cart");this.cartList=t.result,this.cartList.forEach((t=>{t.checked=!1})),this.allChecked=!1,this.getTotal(),this.getCheckInfo()},openMsg(t){this.$confirm("您是否确认删除该商品?","温馨提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{this.deleteIds.push(t),this.deleteCart()}))},async deleteCart(){const{data:t}=await this.$axios.delete("/member/cart",{data:{ids:this.deleteIds}});this.deleteIds=[],this.getCartList()},getTotal(){this.total=0,this.cartList.forEach((t=>{this.total=this.total+t.count}))},getCheckInfo(){this.checkList=[],this.checkNum=0,this.checkPrice=0,this.cartList.forEach((t=>{!0===t.checked&&(this.checkList.push(t),this.checkNum=this.checkNum+t.count,this.checkPrice=this.checkPrice+t.nowPrice*t.count)}))},handleChange(){this.allChecked=this.cartList.every((t=>!0===t.checked)),this.getCheckInfo()},handleAllChange(){this.cartList.forEach((t=>{t.checked=this.allChecked})),this.getCheckInfo()},handleClick(){0===this.checkList.length?this.$message.error("请至少选择一样商品"):(this.$store.commit("setCheckInfo",{checkList:this.checkList,checkNum:this.checkNum,checkPrice:this.checkPrice}),this.$router.push("/user/check"))}},created(){this.getCartList()}},h=i,r=c(1001),l=(0,r.Z)(h,s,a,!1,null,"54252968",null),n=l.exports}}]);
//# sourceMappingURL=508.4cd72aee.js.map