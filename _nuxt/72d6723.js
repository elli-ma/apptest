(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{333:function(t,e,n){"use strict";n.r(e);n(33);var c=n(8),o=(n(58),{asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var n,c,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.params,c=t.$http,e.next=3,c.$get("https://jsonplaceholder.typicode.com/comments/".concat(n.id));case 3:return o=e.sent,e.abrupt("return",{comment:o});case 5:case"end":return e.stop()}}),e)})))()}}),r=n(84),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container mx-auto py-10"},[e("h2",{staticClass:"text-center text-4xl p-5 text-blue-600 font-bold"},[t._v("\n    "+t._s(t.comment.name)+"\n  ")]),t._v(" "),e("div",{staticClass:"bg-white p-8 rounded-lg shadow-lg"},[e("ul",{staticClass:"space-y-4"},[e("li",{staticClass:"px-4 py-2 rounded-md"},[e("b",[t._v("postId:")]),t._v(" "+t._s(t.comment.postId)+"\n      ")]),t._v(" "),e("li",{staticClass:"px-4 py-2 rounded-md"},[e("b",[t._v("id:")]),t._v(" "+t._s(t.comment.id))]),t._v(" "),e("li",{staticClass:"px-4 py-2 rounded-md"},[e("b",[t._v("e-mail:")]),t._v(" "+t._s(t.comment.email))]),t._v(" "),e("li",{staticClass:"px-4 py-2 rounded-md"},[e("b",[t._v("body:")]),t._v(" "+t._s(t.comment.body))])])])])}),[],!1,null,null,null);e.default=component.exports}}]);