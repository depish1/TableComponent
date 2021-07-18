(this["webpackJsonptable-component"]=this["webpackJsonptable-component"]||[]).push([[0],{182:function(e,n,o){"use strict";o.r(n);var t,r,a,i,l,c,d,s,m,p,u,b,y,h,j,f=o(0),g=o.n(f),x=o(31),O=o.n(x),w=o(7),k=o(2),v=o(9),N=o(6),S=N.c.div(t||(t=Object(w.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: ",";\n  align-items: ",";\n  &:first-of-type {\n    margin-top: 0.8rem;\n  }\n\n  label {\n    margin-top: 0.5rem;\n    width: max-content;\n    font-weight: bold;\n    font-size: 0.8rem;\n    color: ",";\n    cursor: pointer;\n    position: relative;\n    margin-right: 1rem;\n  }\n\n  input {\n    margin-top: 0.5rem;\n    padding: 0.2rem;\n    font-size: 1rem;\n    outline: none;\n    border: 1px solid ",";\n    border-radius: 0.25rem;\n    background: transparent;\n    &:focus {\n      border: 1px solid ",";\n    }\n  }\n\n  span.error {\n    display: block;\n    margin-top: 0.5rem;\n    color: ",";\n    font-size: 0.8rem;\n  }\n"])),(function(e){return e.dir}),(function(e){return"row"===e.dir?"center":"auto"}),(function(e){return e.theme.colors.black}),(function(e){return e.theme.colors.black}),(function(e){return e.theme.colors.special}),(function(e){return e.theme.colors.deleteColor})),I=o(1),P=function(e){var n=e.label,o=e.id,t=e.children,r=e.dir,a=void 0===r?"column":r;return Object(I.jsxs)(S,{dir:a,children:[Object(I.jsx)("label",{htmlFor:o,children:n}),t]})},D=o(18),F=function(e){var n=e.globalFilter,o=e.setGlobalFilter,t=Object(f.useState)(n),r=Object(v.a)(t,2),a=r[0],i=r[1],l=Object(D.useAsyncDebounce)((function(e){o(e||void 0)}),200);return Object(I.jsx)(P,{id:"filter",label:"Szukaj:",dir:"row",children:Object(I.jsx)("input",{value:a||"",onChange:function(e){i(e.target.value),l(e.target.value)},type:"text",id:"filter",name:"filter"})})},z=N.c.div(r||(r=Object(w.a)(["\n  height: 1em;\n  width: 1em;\n  position: relative;\n  margin-left: 0.5rem;\n\n  &::after,\n  &::before {\n    border: 0.4em solid transparent;\n    content: '';\n    display: block;\n    height: 0;\n    right: 25%;\n    top: 50%;\n    transform: translateY(-50%);\n    position: absolute;\n    width: 0;\n  }\n\n  &::before {\n    border-bottom-color: ",";\n    margin-top: -0.4em;\n  }\n  &::after {\n    border-top-color: ",";\n    margin-top: 0.6em;\n  }\n"])),(function(e){var n=e.theme,o=e.isSorted,t=e.isSortedDesc;return o&&t?n.colors.white:n.colors.grey}),(function(e){var n=e.theme,o=e.isSorted,t=e.isSortedDesc;return o?t?n.colors.grey:n.colors.white:n.colors.grey})),A=function(e){return Object(I.jsx)(z,Object(k.a)({},e))},T=N.c.thead(a||(a=Object(w.a)(["\n  background-color: ",";\n  color: ",";\n\n  th {\n    padding: 1rem 0.7rem;\n    text-align: center;\n    transition: 0.2s ease-in-out;\n\n    &:hover {\n      background-color: ",";\n    }\n\n    &:last-child:hover {\n      background-color: ",";\n    }\n  }\n\n  @media only screen and (max-width: ",") {\n    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n    border-radius: ",";\n    overflow: hidden;\n    tr {\n      display: grid;\n      grid-template-columns: 1fr 1fr 1fr 1fr;\n      width: 100%;\n\n      @media only screen and (max-width: 500px) {\n        grid-template-columns: 1fr 1fr;\n      }\n    }\n\n    th {\n      display: flex;\n      align-items: center;\n    }\n  }\n"])),(function(e){return e.theme.colors.headerBackground}),(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.headerBackgroundHover}),(function(e){return e.theme.colors.headerBackground}),(function(e){return e.theme.breakpoints.mobile}),(function(e){return e.theme.borderRadius})),M=N.c.div(i||(i=Object(w.a)(["\n  display: flex;\n"]))),C=function(e){var n=e.headerGroups,o=e.children;return Object(I.jsx)(T,{children:n.map((function(e){var n=e.getHeaderGroupProps,t=e.headers;return Object(I.jsxs)("tr",Object(k.a)(Object(k.a)({},n()),{},{children:[t.map((function(e){var n=e.getHeaderProps,o=e.getSortByToggleProps,t=e.render,r=e.isSorted,a=e.isSortedDesc;return Object(I.jsx)("th",Object(k.a)(Object(k.a)({},n(o())),{},{children:Object(I.jsxs)(M,{children:[t("Header"),Object(I.jsx)(A,{isSorted:r,isSortedDesc:a})]})}))})),Object(I.jsx)("th",{children:o})]}))}))})},R=N.c.tr(l||(l=Object(w.a)(["\n  background-color: ",";\n\n  &:nth-child(even) {\n    background: ",";\n  }\n\n  td {\n    padding: 1rem 0.7rem;\n    text-align: center;\n  }\n\n  @media only screen and (max-width: ",") {\n    display: block;\n    border-top: 1px solid #eee;\n    border-bottom: 1px solid #eee;\n    margin-top: 1rem;\n    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n    border-radius: ",";\n    overflow: hidden;\n    &:nth-child(even) {\n      background-color: ",";\n    }\n\n    td {\n      display: flex;\n      justify-content: center;\n      border: none;\n      position: relative;\n      padding-left: 50%;\n      width: 100%;\n\n      &:before {\n        display: block;\n        text-align: left;\n        padding: 1rem;\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 45%;\n        height: 100%;\n        background-color: ",";\n        color: ",";\n        font-weight: bold;\n      }\n\n      &:nth-child(even) {\n        background-color: ",";\n\n        &:before {\n          background-color: ",";\n        }\n      }\n\n      &:nth-of-type(1):before {\n        content: 'Id:';\n      }\n      &:nth-of-type(2):before {\n        content: 'Imi\u0119:';\n      }\n      &:nth-of-type(3):before {\n        content: 'Nazwisko:';\n      }\n      &:nth-of-type(4):before {\n        content: 'Wiek:';\n      }\n      &:nth-of-type(5):before {\n        content: 'Stanowisko:';\n      }\n      &:nth-of-type(6):before {\n        content: 'Dzia\u0142:';\n      }\n      &:nth-of-type(7):before {\n        content: 'Pensja:';\n      }\n      &:nth-of-type(8):before {\n        content: '';\n      }\n    }\n  }\n"])),(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.secondaryBackground}),(function(e){return e.theme.breakpoints.mobile}),(function(e){return e.theme.borderRadius}),(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.headerBackground}),(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.secondaryBackground}),(function(e){return e.theme.colors.headerBackgroundHover})),L=N.c.div(c||(c=Object(w.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  @media only screen and (max-width: ",") {\n    justify-content: space-around;\n  }\n"])),(function(e){return e.theme.breakpoints.mobile})),H=function(e){var n=e.row,o=e.children;return Object(I.jsxs)(R,Object(k.a)(Object(k.a)({},n.getRowProps()),{},{children:[n.cells.map((function(e){return"employeSalary"===e.column.id?Object(I.jsx)("td",Object(k.a)(Object(k.a)({},e.getCellProps()),{},{children:"".concat(e.value," z\u0142")})):Object(I.jsx)("td",Object(k.a)(Object(k.a)({},e.getCellProps()),{},{children:e.value}))})),Object(I.jsx)("td",{children:Object(I.jsx)(L,{children:o})})]}))},B=N.c.button(d||(d=Object(w.a)(["\n  padding: 0.5rem;\n  background-color: ",";\n  cursor: pointer;\n  color: white;\n  border: 3px solid ",";\n  border-radius: ",";\n  font-weight: bold;\n  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;\n  transition: 0.2s ease-in-out;\n  margin: 0 0.2rem;\n\n  &:hover {\n    background-color: ",";\n    color: ",";\n  }\n"])),(function(e){return e.color}),(function(e){return e.color}),(function(e){return e.theme.borderRadius}),(function(e){return e.theme.colors.white}),(function(e){return e.color})),E=function(e){var n=e.text,o=e.handler,t=e.color,r=e.type,a=void 0===r?"button":r;return Object(I.jsx)(B,{type:a,color:t,onClick:o,children:n})},G={colors:{black:"#3e3d3d",white:"#ffffff",grey:"#aaa",background:"#ffffff",secondaryBackground:"#ebebeb",headerBackground:"#324a5f",headerBackgroundHover:"#223a4f",deleteColor:"#dd1c1a",editColor:"#49b6ff",addColor:"#2dc653"},borderRadius:"10px",breakpoints:{mobile:"950px"}},K=o(14),q=o(73),J=o(19),W=N.c.section(s||(s=Object(w.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 500px;\n  max-width: 90%;\n  background-color: ",";\n  border-radius: ",";\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n  padding: 3rem;\n  margin: 1rem;\n"])),(function(e){return e.theme.colors.white}),(function(e){return e.theme.borderRadius})),V=N.c.div(m||(m=Object(w.a)(["\n  position: fixed;\n  overflow-y: auto;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.6);\n  backdrop-filter: blur(0.5rem);\n"]))),U=N.c.div(p||(p=Object(w.a)(["\n  margin-top: 0.7rem;\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: space-around;\n"]))),Y=N.c.h2(u||(u=Object(w.a)(["\n  font-size: 1.3rem;\n  font-weight: bold;\n  color: ",";\n  margin-bottom: 0.7rem;\n"])),(function(e){return e.theme.colors.black})),Z=document.querySelector("#modal-container"),Q=J.b().shape({employeFirstName:J.c().required("Imi\u0119 jest wymagane"),employeLastName:J.c().required("Nazwisko jest wymagane"),employePosition:J.c().required("Stanowisko jest wymagane"),employeDep:J.c().required("Dzia\u0142 jest wymagany"),employeSalary:J.a().typeError("Wymagana liczba").required("Pensja jest wymagana")}),X=function(e){var n,o,t,r,a,i,l=e.closeModal,c=e.id,d=e.submitHandler,s=e.dataset,m=void 0===s?void 0:s,p=document.createElement("div");Object(f.useEffect)((function(){return Z.append(p),function(){p.remove()}}));var u=Object(K.d)({resolver:Object(q.a)(Q),defaultValues:Object(k.a)(Object(k.a)({},m),{},{employeId:c})}),b=u.register,y=u.handleSubmit,h=u.formState.errors;return Object(x.createPortal)(Object(I.jsx)(V,{onClick:function(e){"DIV"===e.target.tagName&&l()},children:Object(I.jsxs)(W,{children:[Object(I.jsx)(Y,{children:m?"Edytuj pracownika":"Dodaj pracownika"}),Object(I.jsxs)("form",{onSubmit:y((function(e){d(e),l()})),children:[Object(I.jsxs)(P,{id:"employeFirstName",label:"Imi\u0119:",children:[Object(I.jsx)("input",Object(k.a)(Object(k.a)({},b("employeFirstName")),{},{type:"text",id:"employeFirstName",name:"employeFirstName"})),Object(I.jsx)("span",{className:"error",children:null===(n=h.employeFirstName)||void 0===n?void 0:n.message})]}),Object(I.jsxs)(P,{id:"employeLastName",label:"Nazwisko:",children:[Object(I.jsx)("input",Object(k.a)(Object(k.a)({},b("employeLastName")),{},{type:"text",id:"employeLastName",name:"employeLastName"})),Object(I.jsx)("span",{className:"error",children:null===(o=h.employeLastName)||void 0===o?void 0:o.message})]}),Object(I.jsxs)(P,{id:"employeAge",label:"Wiek:",children:[Object(I.jsx)("input",Object(k.a)(Object(k.a)({},b("employeAge")),{},{type:"text",id:"employeAge",name:"employeAge"})),Object(I.jsx)("span",{className:"error",children:null===(t=h.employeAge)||void 0===t?void 0:t.message})]}),Object(I.jsxs)(P,{id:"employePosition",label:"Stanowisko:",children:[Object(I.jsx)("input",Object(k.a)(Object(k.a)({},b("employePosition")),{},{type:"text",id:"employePosition",name:"employePosition"})),Object(I.jsx)("span",{className:"error",children:null===(r=h.employePosition)||void 0===r?void 0:r.message})]}),Object(I.jsxs)(P,{id:"employeDep",label:"Dzia\u0142:",children:[Object(I.jsx)("input",Object(k.a)(Object(k.a)({},b("employeDep")),{},{type:"text",id:"employeDep",name:"employeDep"})),Object(I.jsx)("span",{className:"error",children:null===(a=h.employeDep)||void 0===a?void 0:a.message})]}),Object(I.jsxs)(P,{id:"employeSalary",label:"Pensja:",children:[Object(I.jsx)("input",Object(k.a)(Object(k.a)({},b("employeSalary")),{},{type:"number",id:"employeSalary",name:"employeSalary"})),Object(I.jsx)("span",{className:"error",children:null===(i=h.employeSalary)||void 0===i?void 0:i.message})]}),Object(I.jsxs)(U,{children:[Object(I.jsx)(E,{type:"submit",text:"Potwierd\u017a",color:G.colors.addColor}),Object(I.jsx)(E,{text:"Anuluj",handler:l,color:G.colors.deleteColor})]})]})]})}),p)},$=function(){var e=Object(f.useState)({isOpen:!1,modalType:null,id:null}),n=Object(v.a)(e,2),o=n[0],t=n[1];return{Modal:X,modalOption:o,handleCloseModal:function(){t({isOpen:!1,modalType:null,id:null})},handleOpenAddModal:function(){t({isOpen:!0,modalType:"add",id:null})},handleOpenEditModal:function(e){t({isOpen:!0,modalType:"edit",id:e})}}},_=o(3),ee=function(e){var n=Object(f.useState)(e),o=Object(v.a)(n,2),t=o[0],r=o[1];return{data:t,handleDelete:function(e){var n=t.filter((function(n){return n.employeId!==e}));r(n)},handleAdd:function(e){r((function(n){return[].concat(Object(_.a)(n),[e])}))},handleEdit:function(e){var n=t.findIndex((function(n){return n.employeId===e.employeId})),o=Object(_.a)(t);o[n]=e,r(o)}}},ne=function(e){return e.reduce((function(e,n){return e.employeId<n.employeId?n:e})).employeId+1},oe=function(e,n){return e.filter((function(e){return e.employeId===n}))[0]},te=N.c.div(b||(b=Object(w.a)(["\n  padding: 1rem;\n  @media only screen and (max-width: ",") {\n    max-width: 600px;\n  }\n"])),(function(e){return e.theme.breakpoints.mobile})),re=N.c.table(y||(y=Object(w.a)(["\n  margin-top: 1rem;\n  width: 100%;\n  border-radius: ",";\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n  border-collapse: separate;\n  border-spacing: 0;\n\n  tr:last-child td:first-child {\n    border-bottom-left-radius: ",";\n  }\n\n  tr:last-child td:last-child {\n    border-bottom-right-radius: ",";\n  }\n  tr:first-child th:first-child {\n    border-top-left-radius: ",";\n  }\n\n  tr:first-child th:last-child {\n    border-top-right-radius: ",";\n  }\n\n  @media only screen and (max-width: ",") {\n    display: block;\n    box-shadow: none;\n\n    tbody {\n      width: 100%;\n    }\n    thead,\n    tbody,\n    td {\n      display: block;\n    }\n  }\n"])),(function(e){return e.theme.borderRadius}),(function(e){return e.theme.borderRadius}),(function(e){return e.theme.borderRadius}),(function(e){return e.theme.borderRadius}),(function(e){return e.theme.borderRadius}),(function(e){return e.theme.breakpoints.mobile})),ae=function(e){var n=e.dataset,o=e.columns,t=$(),r=t.Modal,a=t.modalOption,i=t.handleCloseModal,l=t.handleOpenAddModal,c=t.handleOpenEditModal,d=ee(n),s=d.data,m=d.handleDelete,p=d.handleAdd,u=d.handleEdit,b=Object(D.useTable)({columns:o,data:s},D.useFilters,D.useGlobalFilter,D.useSortBy),y=b.getTableProps,h=b.getTableBodyProps,j=b.headerGroups,g=b.rows,x=b.prepareRow,O=b.state,w=b.setGlobalFilter;return Object(f.useEffect)((function(){document.querySelector("body").style.overflow=a.isOpen?"hidden":"auto"}),[a]),Object(I.jsxs)(te,{children:[Object(I.jsx)(F,{globalFilter:O.globalFilter,setGlobalFilter:w}),Object(I.jsxs)(re,Object(k.a)(Object(k.a)({},y()),{},{children:[Object(I.jsxs)(C,{headerGroups:j,children:[Object(I.jsx)(E,{text:"Dodaj",handler:l,color:G.colors.addColor}),a.isOpen&&"add"===a.modalType&&Object(I.jsx)(r,{id:ne(s),closeModal:i,submitHandler:p})]}),Object(I.jsx)("tbody",Object(k.a)(Object(k.a)({},h()),{},{children:g.map((function(e){x(e);var n=e.values.employeId;return Object(I.jsxs)(H,{row:e,children:[Object(I.jsx)(E,{text:"Edytuj",handler:function(){return c(n)},color:G.colors.editColor}),Object(I.jsx)(E,{text:"Usu\u0144",handler:function(){return m(n)},color:G.colors.deleteColor}),a.isOpen&&"edit"===a.modalType&&a.id===n&&Object(I.jsx)(r,{id:n,dataset:oe(s,n),closeModal:i,submitHandler:u})]},n)}))}))]}))]})},ie=[{Header:"Id",accessor:"employeId"},{Header:"Imi\u0119",accessor:"employeFirstName"},{Header:"Nazwisko",accessor:"employeLastName"},{Header:"Wiek",accessor:"employeAge"},{Header:"Stanowisko",accessor:"employePosition"},{Header:"Dzia\u0142",accessor:"employeDep"},{Header:"Pensja",accessor:"employeSalary"}],le=[{employeId:13456,employeFirstName:"Jan",employeLastName:"Kowalski",employeAge:38,employePosition:"Kierownik IT",employeDep:"IT",employeSalary:9e3},{employeId:13457,employeFirstName:"Matylda",employeLastName:"Nowak",employeAge:26,employePosition:"Recepcjonistka",employeDep:"Administracja",employeSalary:4500},{employeId:13458,employeFirstName:"Rafa\u0142",employeLastName:"Ratajczyk",employeAge:29,employePosition:"Specjalista IT",employeDep:"IT",employeSalary:6e3},{employeId:13459,employeFirstName:"Sebastian",employeLastName:"Michniewicz",employeAge:26,employePosition:"Specjalista IT",employeDep:"IT",employeSalary:7e3},{employeId:13460,employeFirstName:"Anna",employeLastName:"Rak",employeAge:44,employePosition:"Ksi\u0119gowa",employeDep:"Finansowy",employeSalary:7500},{employeId:13461,employeFirstName:"Magdalena",employeLastName:"Jakicka",employeAge:32,employePosition:"Specjalista ds. Marketingu",employeDep:"Marketing",employeSalary:5e3},{employeId:13462,employeFirstName:"Justyna",employeLastName:"Patucka",employeAge:36,employePosition:"Kierownik Marketingu",employeDep:"Marketing",employeSalary:8500},{employeId:13463,employeFirstName:"Jacek",employeLastName:"Tomczuk",employeAge:52,employePosition:"Technik",employeDep:"Techniczny",employeSalary:5e3},{employeId:13464,employeFirstName:"Zofia",employeLastName:"Tarczycka",employeAge:36,employePosition:"Starsza Ksi\u0119gowa",employeDep:"Finansowy",employeSalary:13e3},{employeId:13465,employeFirstName:"Maciej",employeLastName:"Kucharski",employeAge:25,employePosition:"M\u0142odszy Programista",employeDep:"Finansowy",employeSalary:5e3},{employeId:13466,employeFirstName:"Krzysztof",employeLastName:"Karczy\u0144ski",employeAge:42,employePosition:"Dyrektor Techniczny",employeDep:"Techniczny",employeSalary:11e3}],ce=Object(N.b)(h||(h=Object(w.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap');\n    html {\n        box-sizing: border-box;\n        height:100%;\n    }\n\n    *, *::after, *::before {\n        box-sizing: border-box;\n        margin: 0;\n        padding: 0;\n    }\n\n    body {\n        font-family: 'Roboto Condensed', sans-serif;\n        height:100%;\n    }\n\n    a, button {\n        font-family: 'Roboto Condensed', sans-serif;\n    }\n"]))),de=N.c.div(j||(j=Object(w.a)(["\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 1rem;\n"]))),se=function(){return Object(I.jsxs)(N.a,{theme:G,children:[Object(I.jsx)(de,{children:Object(I.jsx)(ae,{dataset:le,columns:ie})}),Object(I.jsx)(ce,{})]})};O.a.render(Object(I.jsx)(g.a.StrictMode,{children:Object(I.jsx)(se,{})}),document.getElementById("root"))}},[[182,1,2]]]);
//# sourceMappingURL=main.359c8f39.chunk.js.map