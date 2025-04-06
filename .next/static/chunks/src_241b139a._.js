(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_241b139a._.js", {

"[project]/src/hooks/establishment.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const Establishment = ()=>{
    _s();
    const [estbOptions, setEstbOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [estbValue, setEstbValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // const[casetype,setCasetype]=useState('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Establishment.useEffect": ()=>{
            const fetchEstbData = {
                "Establishment.useEffect.fetchEstbData": async ()=>{
                    const token = localStorage.getItem("authToken");
                    try {
                        const fetchResponse = await fetch("http://15.206.60.189/erp/masters/category/", {
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": `Token ${token}`
                            }
                        });
                        const fetchdata = await fetchResponse.json();
                        setEstbOptions(fetchdata);
                    } catch (error) {
                        console.error("Error fetching options:", error);
                    }
                }
            }["Establishment.useEffect.fetchEstbData"];
            fetchEstbData();
        }
    }["Establishment.useEffect"], []);
    return {
        estbValue,
        setEstbValue,
        estbOptions
    };
};
_s(Establishment, "mIAQ6RFr1Bxh7Xs/k9xW8ZU+FYw=");
_c = Establishment;
const __TURBOPACK__default__export__ = Establishment;
var _c;
__turbopack_context__.k.register(_c, "Establishment");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/filing/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$establishment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/establishment.ts [app-client] (ecmascript)");
"use client";
;
;
// import React, { useEffect, useState } from 'react'
// interface Option {
//    id:number;
//    name:string;
//   }
const Filing = ()=>{
    const { estbValue, setEstbValue, estbOptions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$establishment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    // const[estbOptions,setEstbOPtions]=useState<Option[]>([]);
    // const [estbValue,setEstbValue]=useState('');
    // // const[casetype,setCasetype]=useState('');
    // useEffect(()=>{
    //    const fetchEstbData=async ()=>{
    //     const token=localStorage.getItem("authToken");
    //     try 
    //     {
    //       const fetchResponse=await fetch("http://15.206.60.189/erp/masters/category/",{
    //         headers:{
    //           "Content-Type": "application/json",
    //           "Authorization":`Token ${token}`
    //         },
    //       });
    //       const fetchdata: Option[]=await fetchResponse.json();
    //       setEstbOPtions(fetchdata);
    //     }
    //     catch(error)
    //     {
    //       console.error("Error fetching options:", error);
    //     }
    //    }
    //    fetchEstbData();
    // },[]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "card",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card-header bg-dark text-white",
                    children: "Case Details"
                }, void 0, false, {
                    fileName: "[project]/src/app/filing/page.tsx",
                    lineNumber: 44,
                    columnNumber: 3
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card-body",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-sm-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "ddl_establishment",
                                        className: "control-label",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            children: "Establishment"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/filing/page.tsx",
                                            lineNumber: 50,
                                            columnNumber: 74
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/filing/page.tsx",
                                        lineNumber: 50,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        name: "ddl_establishment",
                                        id: "ddl_establishment",
                                        className: "form-select form-select-sm",
                                        onChange: (e)=>setEstbValue(e.target.value),
                                        value: estbValue,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "Select"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/filing/page.tsx",
                                                lineNumber: 52,
                                                columnNumber: 16
                                            }, this),
                                            estbOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: option.id,
                                                    children: option.name
                                                }, option.id, false, {
                                                    fileName: "[project]/src/app/filing/page.tsx",
                                                    lineNumber: 55,
                                                    columnNumber: 19
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/filing/page.tsx",
                                        lineNumber: 51,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/filing/page.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-sm-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "ddl_casetype",
                                        className: "control-label",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            children: "Case Type"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/filing/page.tsx",
                                            lineNumber: 61,
                                            columnNumber: 69
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/filing/page.tsx",
                                        lineNumber: 61,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        name: "ddl_casetype",
                                        id: "ddl_casetype",
                                        className: "form-select form-select-sm",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "Select"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/filing/page.tsx",
                                            lineNumber: 63,
                                            columnNumber: 16
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/filing/page.tsx",
                                        lineNumber: 62,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/filing/page.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/filing/page.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/filing/page.tsx",
                    lineNumber: 47,
                    columnNumber: 3
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/filing/page.tsx",
            lineNumber: 43,
            columnNumber: 9
        }, this)
    }, void 0, false);
};
_c = Filing;
const __TURBOPACK__default__export__ = Filing;
var _c;
__turbopack_context__.k.register(_c, "Filing");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_241b139a._.js.map