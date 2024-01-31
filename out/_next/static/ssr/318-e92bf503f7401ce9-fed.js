"use strict";
exports.id = 318;
exports.ids = [318];
exports.modules = {

/***/ 318:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Catalog": function() { return /* binding */ Catalog; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(878);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(497);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(868);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



const cardStyle = {
    display: "flex",
    width: "220px",
    border: "1px solid gray",
    flexDirection: "column",
    alignItems: "center"
};
const Catalog = ()=>{
    const [list, setList] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);
    const fetchData = async ()=>{
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/photos");
            const data = await response.json();
            setList(data);
        } catch (err) {
            console.error(err);
        }
    };
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        fetchData();
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/",
                children: "Go Back to main"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    display: "flex",
                    width: "750px",
                    gap: "20px",
                    flexWrap: "wrap",
                    marginTop: "25px"
                },
                children: list.map((d)=>{
                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        style: cardStyle,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: d.title
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                width: 200,
                                src: d.url
                            })
                        ]
                    }, d.id);
                })
            })
        ]
    });
};
/* harmony default export */ __webpack_exports__["default"] = (Catalog);


/***/ })

};
;