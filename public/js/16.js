(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{y1Fv:function(t,s,r){"use strict";r.r(s);var a=r("o0o1"),e=r.n(a);function o(t,s,r,a,e,o,n){try{var i=t[o](n),c=i.value}catch(t){return void r(t)}i.done?s(c):Promise.resolve(c).then(a,e)}function n(t){return function(){var s=this,r=arguments;return new Promise((function(a,e){var n=t.apply(s,r);function i(t){o(n,a,e,i,c,"next",t)}function c(t){o(n,a,e,i,c,"throw",t)}i(void 0)}))}}var i={name:"Settings",data:function(){return{password:{current_password:"",password:"",password_confirmation:""},submitting_password:!1,enabling_two_factor:!1,verifying_two_factor:!1,verify_two_factor:"",disabling_two_factor:!1,disable_two_factor:"",deletingAccount:!1}},methods:{submitPassword:function(){var t=this;return n(e.a.mark((function s(){return e.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return t.submitting_password=!0,s.next=3,t.$inertia.post(route("settings.password"),t.password,{preserveScroll:!0});case 3:t.submitting_password=!1;case 4:case"end":return s.stop()}}),s)})))()},enableTwoFactor:function(){var t=this;return n(e.a.mark((function s(){return e.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return t.enabling_two_factor=!0,s.next=3,t.$inertia.post(route("settings.2fa.enable"),{},{preserveScroll:!0});case 3:t.$refs.verify2FAModal.show(),t.enabling_two_factor=!1;case 5:case"end":return s.stop()}}),s)})))()},verifyTwoFactor:function(){var t=this;return n(e.a.mark((function s(){return e.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return t.verifying_two_factor=!0,s.next=3,t.$inertia.post(route("settings.2fa.verify"),{code:t.verify_two_factor},{preserveScroll:!0});case 3:t.$page.props.flash.success&&t.$refs.verify2FAModal.hide(),t.verifying_two_factor=!1;case 5:case"end":return s.stop()}}),s)})))()},disableTwoFactor:function(){var t=this;return n(e.a.mark((function s(){return e.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return t.disabling_two_factor=!0,s.next=3,t.$inertia.post(route("settings.2fa.disable"),{code:t.disable_two_factor},{preserveScroll:!0});case 3:t.$page.props.flash.success&&t.$refs.disable2FAModal.hide(),t.disabling_two_factor=!1;case 5:case"end":return s.stop()}}),s)})))()},deleteAccount:function(){var t=this;return n(e.a.mark((function s(){return e.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:t.deletingAccount=!0,t.$inertia.visit(route("settings"),{method:"delete",preserveState:!0,only:[]}).then((function(){window.location.href="/login"}));case 2:case"end":return s.stop()}}),s)})))()}}},c=r("KHd+"),l=Object(c.a)(i,(function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("dashboard",[r("v-title",{staticClass:"mb-5"},[t._v("تنظیمات حساب")]),t._v(" "),r("v-card",{staticClass:"mb-8"},[r("v-title",{staticClass:"mb-5",attrs:{small:""}},[t._v("تغییر کلمه عبور")]),t._v(" "),t.$page.props.user.password_not_set?t._e():r("v-input",{staticClass:"mb-3",attrs:{type:"password",label:"کلمه عبور فعلی",name:"current_password",error:t.$page.props.errors.changePassword&&t.$page.props.errors.changePassword.current_password},model:{value:t.password.current_password,callback:function(s){t.$set(t.password,"current_password",s)},expression:"password.current_password"}}),t._v(" "),r("v-input",{staticClass:"mb-3",attrs:{type:"password",label:"کلمه عبور جدید",name:"password",error:t.$page.props.errors.changePassword&&t.$page.props.errors.changePassword.password},model:{value:t.password.password,callback:function(s){t.$set(t.password,"password",s)},expression:"password.password"}}),t._v(" "),r("v-input",{attrs:{type:"password",label:"تایید کلمه عبور جدید",name:"password_confirmation",error:t.$page.props.errors.changePassword&&t.$page.props.errors.changePassword.password_confirmation},model:{value:t.password.password_confirmation,callback:function(s){t.$set(t.password,"password_confirmation",s)},expression:"password.password_confirmation"}}),t._v(" "),r("v-button",{staticClass:"mt-5",attrs:{loading:t.submitting_password},on:{click:function(s){return t.submitPassword()}}},[t._v("ذخیره")])],1),t._v(" "),r("v-card",{staticClass:"mb-8"},[r("v-title",{staticClass:"mb-5",attrs:{small:""}},[t._v("ورود دو مرحله ای")]),t._v(" "),r("p",{staticClass:"mb-5"},[t._v("با فعال کردن این گزینه، موقع ورود به حساب، باید کد 6 رقی اپلیکیشن Authenticator را نیز وارد کنید")]),t._v(" "),r("v-alert",{staticClass:"mb-3",attrs:{errors:t.$page.props.errors.enable2FA}}),t._v(" "),t.$page.props.user.two_factor_enabled?r("v-button",{staticClass:"mt-5",attrs:{type:"secondary"},on:{click:function(s){return t.$refs.disable2FAModal.show()}}},[t._v("غیر فعال سازی")]):r("v-button",{staticClass:"mt-5",attrs:{loading:t.enabling_two_factor},on:{click:t.enableTwoFactor}},[t._v("فعال سازی")])],1),t._v(" "),r("v-title",{staticClass:"mb-5"},[t._v("منطقه خطر")]),t._v(" "),r("v-card",{staticClass:"mb-5",attrs:{border:"border-red-200"}},[r("v-title",{staticClass:"mb-5",attrs:{small:""}},[t._v("حذف حساب کاربری")]),t._v(" "),r("div",{staticClass:"flex items-center justify-between"},[r("p",{staticClass:"ml-3"},[t._v("حساب کاربری شما بصورت کامل حذف و از دسترس عموم خارج خواهد شد و از داشبورد خارج خواهید شد")]),t._v(" "),r("v-button",{attrs:{type:"color",color:"red"},on:{click:function(s){return t.$refs.deleteAccountModal.show()}}},[t._v("حذف")])],1)],1),t._v(" "),r("v-modal",{ref:"verify2FAModal"},[r("div",{staticClass:"p-4"},[r("v-title",{staticClass:"mb-5",attrs:{small:""}},[t._v("فعال سازی")]),t._v(" "),r("div",{staticClass:"mt-2"},[r("v-alert",{staticClass:"mb-3",attrs:{errors:t.$page.props.errors.verify2FA}}),t._v(" "),r("p",{staticClass:"mb-4"},[t._v("کد QR زیر رو با استفاده از اپلیکیشن هایی مانند Google Authenticator یا Authy اسکن کنید و کد 6 رقمی دریافتی رو توی فیلد زیر وارد کنید\n                ")]),t._v(" "),r("div",{staticClass:"mb-4 w-full text-center"},[r("div",{staticClass:"inline-block",domProps:{innerHTML:t._s(t.$page.props.data.qr)}})]),t._v(" "),r("v-input",{attrs:{"input-class":"ltr",name:"code",label:"کد 6 رقمی"},model:{value:t.verify_two_factor,callback:function(s){t.verify_two_factor=s},expression:"verify_two_factor"}})],1)],1),t._v(" "),r("div",{staticClass:"px-4 py-3 flex justify-end"},[r("v-button",{attrs:{type:"secondary"},on:{click:function(s){return t.$refs.verify2FAModal.hide()}}},[t._v("انصراف")]),t._v(" "),r("v-button",{staticClass:"mr-2",attrs:{type:"primary",loading:t.verifying_two_factor},on:{click:t.verifyTwoFactor}},[t._v("تایید کد")])],1)]),t._v(" "),r("v-modal",{ref:"disable2FAModal"},[r("div",{staticClass:"p-4"},[r("v-title",{staticClass:"mb-5",attrs:{small:""}},[t._v("غیر فعال سازی")]),t._v(" "),r("div",{staticClass:"mt-2"},[r("v-alert",{staticClass:"mb-3",attrs:{errors:t.$page.props.errors.disable2FA}}),t._v(" "),r("p",{staticClass:"mb-4"},[t._v("لطفا کد 6 رقمی رو از اپلیکیشن Authenticator رو دریافت و توی فیلد زیر وارد کنید")]),t._v(" "),r("v-input",{attrs:{"input-class":"ltr",name:"code",label:"کد 6 رقمی"},model:{value:t.disable_two_factor,callback:function(s){t.disable_two_factor=s},expression:"disable_two_factor"}})],1)],1),t._v(" "),r("div",{staticClass:"px-4 py-3 flex justify-end"},[r("v-button",{attrs:{type:"secondary"},on:{click:function(s){return t.$refs.disable2FAModal.hide()}}},[t._v("انصراف")]),t._v(" "),r("v-button",{staticClass:"mr-2",attrs:{type:"primary",loading:t.disabling_two_factor},on:{click:t.disableTwoFactor}},[t._v("غیر فعال سازی")])],1)]),t._v(" "),r("v-modal",{ref:"deleteAccountModal"},[r("div",{staticClass:"p-4"},[r("v-title",{staticClass:"mb-5",attrs:{small:""}},[t._v("حذف حساب کاربری")]),t._v(" "),r("div",{staticClass:"mt-2"},[r("v-alert",{staticClass:"mb-3",attrs:{errors:t.$page.props.errors.deleteAccount}}),t._v(" "),r("p",{staticClass:"mb-4"},[t._v("تمامی اطلاعات شما از ibio.link حذف خواهد شد و بازگردانی آنها غیر ممکن است.")])],1)],1),t._v(" "),r("div",{staticClass:"px-4 py-3 flex justify-end"},[r("v-button",{attrs:{type:"secondary"},on:{click:function(s){return t.$refs.deleteAccountModal.hide()}}},[t._v("انصراف")]),t._v(" "),r("v-button",{staticClass:"mr-2",attrs:{type:"color",color:"red",loading:t.deletingAccount},on:{click:t.deleteAccount}},[t._v("حذف حساب کاربری")])],1)])],1)}),[],!1,null,null,null);s.default=l.exports}}]);