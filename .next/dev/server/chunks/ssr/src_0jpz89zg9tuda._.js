(()=>{"use strict";module.exports = [
"[project]/src/components/Certifications.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Certifications
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$quality$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/quality.ts [app-ssr] (ecmascript)");
;
;
function Certifications({ liquidOnly = false }) {
    const claims = liquidOnly ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$quality$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["certificationClaims"].slice(0, 1) : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$quality$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["certificationClaims"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        className: `certification-badges${liquidOnly ? ' certification-single' : ''}`,
        "aria-label": "Certifications and registration",
        children: claims.map((claim)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `certification-mark certification-mark-${claim.code.toLowerCase()}`,
                        "aria-hidden": "true",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: claim.artwork,
                            alt: "",
                            width: 112,
                            height: 112
                        }, void 0, false, {
                            fileName: "[project]/src/components/Certifications.tsx",
                            lineNumber: 10,
                            columnNumber: 9
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Certifications.tsx",
                        lineNumber: 8,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: claim.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/Certifications.tsx",
                                lineNumber: 12,
                                columnNumber: 12
                            }, this),
                            claim.detail !== claim.title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: claim.detail
                            }, void 0, false, {
                                fileName: "[project]/src/components/Certifications.tsx",
                                lineNumber: 12,
                                columnNumber: 75
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Certifications.tsx",
                        lineNumber: 12,
                        columnNumber: 7
                    }, this)
                ]
            }, claim.code, true, {
                fileName: "[project]/src/components/Certifications.tsx",
                lineNumber: 7,
                columnNumber: 26
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/Certifications.tsx",
        lineNumber: 6,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/components/FactoryFloor.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FactoryFloor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const steps = [
    {
        id: '01-filling',
        name: 'Filling',
        note: 'Multi-head liquid filling'
    },
    {
        id: '02-labeling',
        name: 'Labeling',
        note: 'Inline label application'
    },
    {
        id: '03-conveyor-shrink',
        name: 'Sealing',
        note: 'Into the shrink tunnel'
    },
    {
        id: '04-shrink-exit',
        name: 'Finishing',
        note: 'Sleeves set and dried'
    },
    {
        id: '05-accumulation',
        name: 'Packing',
        note: 'Collected for case packing'
    }
];
function FactoryFloor() {
    const grid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const videos = Array.from(grid.current?.querySelectorAll('video') ?? []);
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
        const observer = new IntersectionObserver((entries)=>{
            for (const entry of entries){
                const video = entry.target;
                if (entry.isIntersecting && !reduced.matches && !document.hidden) video.play().catch(()=>{});
                else video.pause();
            }
        }, {
            threshold: 0.35
        });
        videos.forEach((video)=>observer.observe(video));
        const motion = ()=>{
            if (reduced.matches) videos.forEach((video)=>video.pause());
        };
        reduced.addEventListener('change', motion);
        return ()=>{
            observer.disconnect();
            reduced.removeEventListener('change', motion);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "factory",
        className: "section factory",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "section-heading",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "eyebrow",
                                children: "ON OUR PRODUCTION FLOOR"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FactoryFloor.tsx",
                                lineNumber: 35,
                                columnNumber: 45
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: [
                                    "Made on our line.",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/components/FactoryFloor.tsx",
                                        lineNumber: 35,
                                        columnNumber: 116
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                        children: "Start to finish."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/FactoryFloor.tsx",
                                        lineNumber: 35,
                                        columnNumber: 121
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/FactoryFloor.tsx",
                                lineNumber: 35,
                                columnNumber: 95
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/FactoryFloor.tsx",
                        lineNumber: 35,
                        columnNumber: 40
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "Real footage from our facility — filling,",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                className: "desktop-break"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FactoryFloor.tsx",
                                lineNumber: 35,
                                columnNumber: 201
                            }, this),
                            " labeling, sealing and packing."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/FactoryFloor.tsx",
                        lineNumber: 35,
                        columnNumber: 157
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FactoryFloor.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "factory-grid",
                ref: grid,
                children: steps.map((step, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                        className: "factory-clip",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "factory-media",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                    muted: true,
                                    loop: true,
                                    playsInline: true,
                                    preload: "metadata",
                                    poster: `/motion/factory/${step.id}-poster.jpg`,
                                    "aria-label": `${step.name}: ${step.note}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                            src: `/motion/factory/${step.id}.webm`,
                                            type: "video/webm"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FactoryFloor.tsx",
                                            lineNumber: 39,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                            src: `/motion/factory/${step.id}.mp4`,
                                            type: "video/mp4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FactoryFloor.tsx",
                                            lineNumber: 40,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/FactoryFloor.tsx",
                                    lineNumber: 38,
                                    columnNumber: 42
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/FactoryFloor.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: String(index + 1).padStart(2, '0')
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/FactoryFloor.tsx",
                                        lineNumber: 42,
                                        columnNumber: 23
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: step.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/FactoryFloor.tsx",
                                        lineNumber: 42,
                                        columnNumber: 72
                                    }, this),
                                    step.note
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/FactoryFloor.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this)
                        ]
                    }, step.id, true, {
                        fileName: "[project]/src/components/FactoryFloor.tsx",
                        lineNumber: 37,
                        columnNumber: 37
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/FactoryFloor.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/FactoryFloor.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/Header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Brand",
    ()=>Brand,
    "PhoneIcon",
    ()=>PhoneIcon,
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/content/site.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$services$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/services.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function Brand() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        className: "brand",
        href: "/",
        "aria-label": "Private Label Nutra home",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "10 10 100 255",
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M35 10H85Q89 10 89 14V64C89 75 110 76 110 94V250Q110 265 95 265H25Q10 265 10 250V94C10 76 31 75 31 64V14Q31 10 35 10ZM34 190V145H42L77 177V145H86V190H78L43 158V190Z",
                        fill: "currentColor",
                        fillRule: "evenodd"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 10,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M31 57h58",
                        stroke: "#97ac6b",
                        strokeWidth: "3"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 11,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 9,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "brand-copy",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "brand-name",
                        children: "Private Label Nutra"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 13,
                        columnNumber: 34
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                        children: "YOUR BRAND. OUR EXPERTISE."
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 13,
                        columnNumber: 89
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 13,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Header.tsx",
        lineNumber: 8,
        columnNumber: 10
    }, this);
}
function PhoneIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        width: "20",
        height: "20",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.7",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "m7 3 3 5-2 2a15 15 0 0 0 6 6l2-2 5 3-1 3c-1 3-7 0-11-4S2 6 5 4Z",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/src/components/Header.tsx",
            lineNumber: 17,
            columnNumber: 129
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Header.tsx",
        lineNumber: 17,
        columnNumber: 10
    }, this);
}
const links = [
    [
        'Products',
        '/products'
    ],
    [
        'Quality',
        '/quality'
    ],
    [
        'About',
        '/about'
    ]
];
function Header() {
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [serviceOpen, setServiceOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const menuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const serviceButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const serviceGroup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const headerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const close = ()=>{
        setOpen(false);
        setServiceOpen(false);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setOpen(false);
        setServiceOpen(false);
    }, [
        pathname
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const update = ()=>setScrolled(window.scrollY > 8);
        const resize = ()=>{
            if (window.innerWidth > 1050) setOpen(false);
        };
        update();
        window.addEventListener('scroll', update, {
            passive: true
        });
        window.addEventListener('resize', resize);
        return ()=>{
            window.removeEventListener('scroll', update);
            window.removeEventListener('resize', resize);
        };
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!serviceOpen) return;
        const outside = (event)=>{
            if (!serviceGroup.current?.contains(event.target)) setServiceOpen(false);
        };
        document.addEventListener('pointerdown', outside);
        return ()=>document.removeEventListener('pointerdown', outside);
    }, [
        serviceOpen
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!open) return;
        const previous = document.documentElement.style.overflow;
        document.documentElement.style.overflow = 'hidden';
        const background = Array.from(document.querySelectorAll('main, footer, .mobile-contact-bar'));
        const states = background.map((element)=>element.inert);
        background.forEach((element)=>{
            element.inert = true;
        });
        return ()=>{
            document.documentElement.style.overflow = previous;
            background.forEach((element, i)=>{
                element.inert = states[i];
            });
        };
    }, [
        open
    ]);
    const currentService = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$services$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["services"].some((service)=>service.href === pathname);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                ref: headerRef,
                className: `header${scrolled ? ' is-scrolled' : ''}${open ? ' menu-open' : ''}`,
                onKeyDown: (event)=>{
                    if (event.key === 'Escape') {
                        if (open) {
                            event.preventDefault();
                            close();
                            menuRef.current?.focus();
                        } else if (serviceOpen) {
                            event.preventDefault();
                            setServiceOpen(false);
                            serviceButton.current?.focus();
                        }
                    }
                    if (event.key === 'Tab' && open) {
                        const controls = Array.from(headerRef.current?.querySelectorAll('a,button') ?? []).filter((element)=>element.getClientRects().length);
                        const first = controls[0], last = controls.at(-1);
                        if (event.shiftKey && document.activeElement === first) {
                            event.preventDefault();
                            last?.focus();
                        } else if (!event.shiftKey && document.activeElement === last) {
                            event.preventDefault();
                            first?.focus();
                        }
                    }
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "nav-wrap",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Brand, {}, void 0, false, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 66,
                            columnNumber: 33
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            id: "navigation",
                            className: open ? 'nav open' : 'nav',
                            "aria-label": "Main navigation",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "nav-services",
                                    ref: serviceGroup,
                                    onBlur: (event)=>{
                                        if (!event.currentTarget.contains(event.relatedTarget)) setServiceOpen(false);
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            ref: serviceButton,
                                            className: `service-menu-trigger${currentService ? ' is-current' : ''}`,
                                            type: "button",
                                            "aria-expanded": serviceOpen,
                                            "aria-controls": "service-navigation",
                                            onClick: ()=>setServiceOpen(!serviceOpen),
                                            children: [
                                                "Services ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "aria-hidden": "true",
                                                    children: "⌄"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Header.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 239
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Header.tsx",
                                            lineNumber: 69,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "mobile-services-label",
                                            children: "Services"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header.tsx",
                                            lineNumber: 70,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            id: "service-navigation",
                                            className: `service-navigation${serviceOpen ? ' is-open' : ''}`,
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$services$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["services"].map((service)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: service.href,
                                                        "aria-current": pathname === service.href ? 'page' : undefined,
                                                        onClick: close,
                                                        children: service.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Header.tsx",
                                                        lineNumber: 71,
                                                        columnNumber: 146
                                                    }, this)
                                                }, service.id, false, {
                                                    fileName: "[project]/src/components/Header.tsx",
                                                    lineNumber: 71,
                                                    columnNumber: 125
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header.tsx",
                                            lineNumber: 71,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 68,
                                    columnNumber: 11
                                }, this),
                                links.map(([label, href])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: href,
                                        "aria-current": pathname === href ? 'page' : undefined,
                                        onClick: close,
                                        children: label
                                    }, label, false, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 73,
                                        columnNumber: 38
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 67,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "header-actions",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    className: "header-phone",
                                    href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["site"].phoneHref,
                                    onClick: close,
                                    "aria-label": `Call ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["site"].phone}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PhoneIcon, {}, void 0, false, {
                                            fileName: "[project]/src/components/Header.tsx",
                                            lineNumber: 75,
                                            columnNumber: 141
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["site"].phone
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header.tsx",
                                            lineNumber: 75,
                                            columnNumber: 153
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 75,
                                    columnNumber: 41
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    className: "button nav-quote",
                                    href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["quoteHref"],
                                    onClick: close,
                                    children: "Get a Quote"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 75,
                                    columnNumber: 182
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    ref: menuRef,
                                    className: "menu-toggle",
                                    "aria-label": open ? 'Close navigation' : 'Open navigation',
                                    "aria-expanded": open,
                                    "aria-controls": "navigation",
                                    onClick: ()=>setOpen(!open),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "aria-hidden": "true",
                                        children: open ? '×' : '☰'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 75,
                                        columnNumber: 440
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 75,
                                    columnNumber: 262
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 75,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Header.tsx",
                    lineNumber: 66,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 54,
                columnNumber: 5
            }, this),
            pathname !== '/quote' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "mobile-contact-bar",
                "aria-label": "Contact sales",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["site"].phoneHref,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PhoneIcon, {}, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 78,
                                columnNumber: 119
                            }, this),
                            "Call"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 78,
                        columnNumber: 94
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "button",
                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["quoteHref"],
                        children: "Get a Quote"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 78,
                        columnNumber: 139
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 78,
                columnNumber: 31
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Header.tsx",
        lineNumber: 53,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/components/QuoteForm.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>QuoteForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/content/site.ts [app-ssr] (ecmascript) <locals>");
'use client';
;
;
;
const fields = [
    {
        name: 'name',
        label: 'Name',
        type: 'text',
        autoComplete: 'name'
    },
    {
        name: 'email',
        label: 'Email',
        type: 'email',
        autoComplete: 'email'
    },
    {
        name: 'phone',
        label: 'Phone',
        type: 'tel',
        autoComplete: 'tel'
    }
];
function QuoteForm({ initialProductType = '', service } = {}) {
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])();
    const [productType, setProductType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialProductType);
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const summary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const type = new URLSearchParams(window.location.search).get('type');
        setProductType(type === 'private-label' || type === 'white-label' ? 'White label' : type === 'custom' ? 'Custom' : type === 'blister' ? 'Blister' : initialProductType);
    }, [
        initialProductType
    ]);
    const invalid = (name)=>Boolean(errors[name]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        id: "project-details",
        className: "quote-form",
        noValidate: true,
        onSubmit: (event)=>{
            event.preventDefault();
            const data = new FormData(event.currentTarget), next = {};
            if (!String(data.get('name') ?? '').trim()) next.name = 'Enter your name.';
            const email = String(data.get('email') ?? '').trim();
            if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = 'Enter a valid email address.';
            if (!String(data.get('phone') ?? '').trim()) next.phone = 'Enter your phone number.';
            if (!String(data.get('message') ?? '').trim()) next.message = 'Tell us what you would like to make.';
            setErrors(next);
            setStatus('');
            if (Object.keys(next).length) {
                requestAnimationFrame(()=>summary.current?.focus());
                return;
            }
            // Developer handoff: implement delivery, CAPTCHA and server validation.
            // Existing live form: POST https://www.privatelabelnutra.com/thank_you.php
            // Existing fields: first_name, email, phn, msg, g-recaptcha-response,
            // submit_btn. Include optional project details in msg if reusing it.
            // Do not show a sent/success state until the destination confirms delivery.
            setStatus('Your request has not been sent. Please call our sales team or use our current contact form to send it.');
        },
        children: [
            service && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "hidden",
                name: "service",
                value: service
            }, void 0, false, {
                fileName: "[project]/src/components/QuoteForm.tsx",
                lineNumber: 40,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "form-note full",
                children: "Four required details to start. Share a formula, artwork or packaging requirements if you have them."
            }, void 0, false, {
                fileName: "[project]/src/components/QuoteForm.tsx",
                lineNumber: 41,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "form-errors full",
                "aria-live": "assertive",
                "aria-atomic": "true",
                ref: summary,
                tabIndex: -1,
                children: Object.keys(errors).length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Please check the following details:"
                        }, void 0, false, {
                            fileName: "[project]/src/components/QuoteForm.tsx",
                            lineNumber: 43,
                            columnNumber: 40
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            children: Object.entries(errors).map(([field, message])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: `#${id}-${field}`,
                                        children: message
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/QuoteForm.tsx",
                                        lineNumber: 43,
                                        columnNumber: 149
                                    }, this)
                                }, field, false, {
                                    fileName: "[project]/src/components/QuoteForm.tsx",
                                    lineNumber: 43,
                                    columnNumber: 133
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/QuoteForm.tsx",
                            lineNumber: 43,
                            columnNumber: 82
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/QuoteForm.tsx",
                    lineNumber: 43,
                    columnNumber: 38
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/QuoteForm.tsx",
                lineNumber: 42,
                columnNumber: 5
            }, this),
            fields.map((field)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "quote-field",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: `${id}-${field.name}`,
                            children: [
                                field.label,
                                " *"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/QuoteForm.tsx",
                            lineNumber: 45,
                            columnNumber: 70
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            id: `${id}-${field.name}`,
                            name: field.name,
                            type: field.type,
                            autoComplete: field.autoComplete,
                            required: true,
                            maxLength: field.name === 'email' ? 254 : 160,
                            "aria-invalid": invalid(field.name),
                            "aria-describedby": invalid(field.name) ? `${id}-${field.name}-error` : undefined
                        }, void 0, false, {
                            fileName: "[project]/src/components/QuoteForm.tsx",
                            lineNumber: 45,
                            columnNumber: 132
                        }, this),
                        errors[field.name] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "field-error",
                            id: `${id}-${field.name}-error`,
                            children: errors[field.name]
                        }, void 0, false, {
                            fileName: "[project]/src/components/QuoteForm.tsx",
                            lineNumber: 45,
                            columnNumber: 420
                        }, this)
                    ]
                }, field.name, true, {
                    fileName: "[project]/src/components/QuoteForm.tsx",
                    lineNumber: 45,
                    columnNumber: 24
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "quote-field full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: `${id}-message`,
                        children: "What would you like to make? *"
                    }, void 0, false, {
                        fileName: "[project]/src/components/QuoteForm.tsx",
                        lineNumber: 46,
                        columnNumber: 39
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        id: `${id}-message`,
                        name: "message",
                        required: true,
                        rows: 4,
                        maxLength: 6000,
                        placeholder: "Tell us your product, formula and packaging needs. We can help with your formula, artwork, or both.",
                        "aria-invalid": invalid('message'),
                        "aria-describedby": `${id}-message-help${invalid('message') ? ` ${id}-message-error` : ''}`
                    }, void 0, false, {
                        fileName: "[project]/src/components/QuoteForm.tsx",
                        lineNumber: 46,
                        columnNumber: 110
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "field-help",
                        id: `${id}-message-help`,
                        children: "Estimated quantity and target launch date are helpful, if you know them."
                    }, void 0, false, {
                        fileName: "[project]/src/components/QuoteForm.tsx",
                        lineNumber: 46,
                        columnNumber: 427
                    }, this),
                    errors.message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "field-error",
                        id: `${id}-message-error`,
                        children: errors.message
                    }, void 0, false, {
                        fileName: "[project]/src/components/QuoteForm.tsx",
                        lineNumber: 46,
                        columnNumber: 578
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/QuoteForm.tsx",
                lineNumber: 46,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                className: "quote-options full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                        children: [
                            "Add more project details ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "(optional)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/QuoteForm.tsx",
                                lineNumber: 47,
                                columnNumber: 79
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/QuoteForm.tsx",
                        lineNumber: 47,
                        columnNumber: 45
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "optional-fields",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: [
                                    "Company",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        name: "company",
                                        autoComplete: "organization",
                                        maxLength: 160
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/QuoteForm.tsx",
                                        lineNumber: 47,
                                        columnNumber: 159
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/QuoteForm.tsx",
                                lineNumber: 47,
                                columnNumber: 145
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: [
                                    "Product type",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        name: "productType",
                                        value: productType,
                                        onChange: (event)=>setProductType(event.target.value),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "Choose a type"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/QuoteForm.tsx",
                                                lineNumber: 47,
                                                columnNumber: 353
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "White label"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/QuoteForm.tsx",
                                                lineNumber: 47,
                                                columnNumber: 392
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Custom"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/QuoteForm.tsx",
                                                lineNumber: 47,
                                                columnNumber: 420
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Blister"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/QuoteForm.tsx",
                                                lineNumber: 47,
                                                columnNumber: 443
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/QuoteForm.tsx",
                                        lineNumber: 47,
                                        columnNumber: 253
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/QuoteForm.tsx",
                                lineNumber: 47,
                                columnNumber: 234
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: [
                                    "Estimated quantity",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        name: "quantity",
                                        type: "number",
                                        min: "1"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/QuoteForm.tsx",
                                        lineNumber: 47,
                                        columnNumber: 509
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/QuoteForm.tsx",
                                lineNumber: 47,
                                columnNumber: 484
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: [
                                    "Target launch date",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        name: "launchDate",
                                        type: "date"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/QuoteForm.tsx",
                                        lineNumber: 47,
                                        columnNumber: 588
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/QuoteForm.tsx",
                                lineNumber: 47,
                                columnNumber: 563
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: [
                                    "Do you have a formula?",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        name: "formula",
                                        defaultValue: "Not sure yet",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Not sure yet"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/QuoteForm.tsx",
                                                lineNumber: 47,
                                                columnNumber: 714
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Yes"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/QuoteForm.tsx",
                                                lineNumber: 47,
                                                columnNumber: 743
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "No"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/QuoteForm.tsx",
                                                lineNumber: 47,
                                                columnNumber: 763
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/QuoteForm.tsx",
                                        lineNumber: 47,
                                        columnNumber: 663
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/QuoteForm.tsx",
                                lineNumber: 47,
                                columnNumber: 634
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: [
                                    "Do you have artwork?",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        name: "artwork",
                                        defaultValue: "Not sure yet",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Not sure yet"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/QuoteForm.tsx",
                                                lineNumber: 47,
                                                columnNumber: 877
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Yes"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/QuoteForm.tsx",
                                                lineNumber: 47,
                                                columnNumber: 906
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "No"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/QuoteForm.tsx",
                                                lineNumber: 47,
                                                columnNumber: 926
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/QuoteForm.tsx",
                                        lineNumber: 47,
                                        columnNumber: 826
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/QuoteForm.tsx",
                                lineNumber: 47,
                                columnNumber: 799
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/QuoteForm.tsx",
                        lineNumber: 47,
                        columnNumber: 112
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/QuoteForm.tsx",
                lineNumber: 47,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "form-actions full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        className: "button",
                        children: "Get a Quote"
                    }, void 0, false, {
                        fileName: "[project]/src/components/QuoteForm.tsx",
                        lineNumber: 48,
                        columnNumber: 40
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "text-link",
                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["site"].phoneHref,
                        children: [
                            "Call ",
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["site"].phone
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/QuoteForm.tsx",
                        lineNumber: 48,
                        columnNumber: 101
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/QuoteForm.tsx",
                lineNumber: 48,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "reply-time full",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["replyTime"]
            }, void 0, false, {
                fileName: "[project]/src/components/QuoteForm.tsx",
                lineNumber: 49,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "status",
                "aria-live": "polite",
                className: "quote-status full",
                children: status && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: status
                        }, void 0, false, {
                            fileName: "[project]/src/components/QuoteForm.tsx",
                            lineNumber: 50,
                            columnNumber: 84
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            className: "text-link",
                            href: "https://www.privatelabelnutra.com/#contact",
                            children: "Use our current contact form"
                        }, void 0, false, {
                            fileName: "[project]/src/components/QuoteForm.tsx",
                            lineNumber: 50,
                            columnNumber: 99
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/QuoteForm.tsx",
                    lineNumber: 50,
                    columnNumber: 82
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/QuoteForm.tsx",
                lineNumber: 50,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/QuoteForm.tsx",
        lineNumber: 23,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/components/ScrollHero.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScrollHero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TrustStrip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TrustStrip.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Certifications$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Certifications.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const VIDEO = '/motion/hero-v5/hero', POSTER = '/motion/hero-v5/poster.webp';
function ScrollHero({ children }) {
    const runRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const run = runRef.current, video = videoRef.current;
        if (!run || !video) return;
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
        let inView = false, hasPlayed = false, disposed = false;
        const phase = (value)=>{
            if (!disposed) run.dataset.playback = value;
        };
        const play = ()=>{
            if (disposed || !inView || reduced.matches || document.hidden || video.ended) return;
            video.playbackRate = 4.03; // The complete approved rotation in about 1.5 seconds.
            hasPlayed = true;
            video.play().then(()=>{
                if (disposed || !inView || reduced.matches || document.hidden) video.pause();
                else phase('playing');
            }).catch(()=>phase('still'));
        };
        const reset = ()=>{
            video.pause();
            if (video.readyState >= 1) video.currentTime = 0;
            hasPlayed = false;
            phase(reduced.matches ? 'still' : 'idle');
        };
        const observer = new IntersectionObserver(([entry])=>{
            inView = entry.isIntersecting && entry.intersectionRatio >= .35;
            if (!entry.isIntersecting) reset();
            else if (inView) play();
        }, {
            threshold: [
                0,
                .35
            ]
        });
        const loaded = ()=>{
            video.dataset.ready = '';
            play();
        };
        const ended = ()=>phase('finished');
        const failed = ()=>{
            delete video.dataset.ready;
            phase('still');
        };
        const motion = ()=>{
            reset();
            if (reduced.matches) delete run.dataset.enhanced;
            else {
                run.dataset.enhanced = '';
                play();
            }
        };
        const visibility = ()=>{
            if (document.hidden) video.pause();
            else if (hasPlayed) play();
        };
        if (!reduced.matches) run.dataset.enhanced = '';
        phase(reduced.matches ? 'still' : 'idle');
        observer.observe(video);
        video.addEventListener('loadedmetadata', play);
        video.addEventListener('loadeddata', loaded);
        video.addEventListener('ended', ended);
        video.addEventListener('error', failed);
        document.addEventListener('visibilitychange', visibility);
        reduced.addEventListener('change', motion);
        if (video.readyState >= 2) loaded();
        return ()=>{
            disposed = true;
            video.pause();
            observer.disconnect();
            video.removeEventListener('loadedmetadata', play);
            video.removeEventListener('loadeddata', loaded);
            video.removeEventListener('ended', ended);
            video.removeEventListener('error', failed);
            document.removeEventListener('visibilitychange', visibility);
            reduced.removeEventListener('change', motion);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "scroll-run",
        ref: runRef,
        "aria-label": "Private label manufacturing",
        "data-playback": "idle",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "scroll-stage",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "scroll-art",
                    "aria-hidden": "true",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            className: "scroll-poster",
                            src: POSTER,
                            alt: "",
                            fetchPriority: "high"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ScrollHero.tsx",
                            lineNumber: 70,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                            className: "scroll-video",
                            ref: videoRef,
                            muted: true,
                            playsInline: true,
                            preload: "auto",
                            poster: POSTER,
                            tabIndex: -1,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                    media: "(max-width:800px)",
                                    src: `${VIDEO}-mobile.mp4`,
                                    type: "video/mp4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ScrollHero.tsx",
                                    lineNumber: 72,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                    src: `${VIDEO}.mp4`,
                                    type: "video/mp4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ScrollHero.tsx",
                                    lineNumber: 73,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ScrollHero.tsx",
                            lineNumber: 71,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ScrollHero.tsx",
                    lineNumber: 67,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "scroll-legibility",
                    "aria-hidden": "true"
                }, void 0, false, {
                    fileName: "[project]/src/components/ScrollHero.tsx",
                    lineNumber: 76,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "scroll-opening",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/components/ScrollHero.tsx",
                    lineNumber: 77,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hero-trust",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TrustStrip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/components/ScrollHero.tsx",
                            lineNumber: 78,
                            columnNumber: 35
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Certifications$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/components/ScrollHero.tsx",
                            lineNumber: 78,
                            columnNumber: 48
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ScrollHero.tsx",
                    lineNumber: 78,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ScrollHero.tsx",
            lineNumber: 66,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ScrollHero.tsx",
        lineNumber: 65,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/components/TrustStrip.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Owner-confirmed manufacturing facts; certification scope is shown separately. */ __turbopack_context__.s([
    "default",
    ()=>TrustStrip
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function TrustStrip() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        className: "trust-strip",
        "aria-label": "Manufacturing at a glance",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "8 years"
                    }, void 0, false, {
                        fileName: "[project]/src/components/TrustStrip.tsx",
                        lineNumber: 4,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "in business"
                    }, void 0, false, {
                        fileName: "[project]/src/components/TrustStrip.tsx",
                        lineNumber: 4,
                        columnNumber: 33
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TrustStrip.tsx",
                lineNumber: 4,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "Made in the USA"
                    }, void 0, false, {
                        fileName: "[project]/src/components/TrustStrip.tsx",
                        lineNumber: 5,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Wilmington, DE"
                    }, void 0, false, {
                        fileName: "[project]/src/components/TrustStrip.tsx",
                        lineNumber: 5,
                        columnNumber: 41
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TrustStrip.tsx",
                lineNumber: 5,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "200,000 shots a week"
                    }, void 0, false, {
                        fileName: "[project]/src/components/TrustStrip.tsx",
                        lineNumber: 6,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Liquid line · ~10M/year capacity"
                    }, void 0, false, {
                        fileName: "[project]/src/components/TrustStrip.tsx",
                        lineNumber: 6,
                        columnNumber: 46
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TrustStrip.tsx",
                lineNumber: 6,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "150+ SKUs"
                    }, void 0, false, {
                        fileName: "[project]/src/components/TrustStrip.tsx",
                        lineNumber: 7,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "produced"
                    }, void 0, false, {
                        fileName: "[project]/src/components/TrustStrip.tsx",
                        lineNumber: 7,
                        columnNumber: 35
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TrustStrip.tsx",
                lineNumber: 7,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/TrustStrip.tsx",
        lineNumber: 3,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/content/imagery.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Cinematic concept photography, generated from approved front-label references.
 * Facility/lab scenes are illustrative, never records of the actual premises.
 * Actual production is documented by the unchanged FactoryFloor video section.
 */ __turbopack_context__.s([
    "imagery",
    ()=>imagery
]);
const imagery = {
    energy: '/images/cinematic-v1/energy-three-flavors-v1.webp',
    b12: '/images/cinematic-v1/b12-three-flavors-v1.webp',
    sleep: '/images/cinematic-v1/sleep-three-flavors-v1.webp',
    formats: '/images/cinematic-v1/cinematic-formats-v2.webp',
    blister: '/images/cinematic-v1/cinematic-blister-v2.webp',
    facility: '/images/cinematic-v1/cinematic-facility-v1.webp',
    quality: '/images/cinematic-v1/cinematic-quality-lab-v1.webp'
};
}),
"[project]/src/content/quality.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Approved documents only. Files must live in public/certificates/ and be checked before publishing. */ __turbopack_context__.s([
    "certificates",
    ()=>certificates,
    "certificationClaims",
    ()=>certificationClaims,
    "publishedCertificates",
    ()=>publishedCertificates,
    "sqfCertificate",
    ()=>sqfCertificate,
    "sqfRenewalConfirmed",
    ()=>sqfRenewalConfirmed
]);
const sqfRenewalConfirmed = true;
const sqfCertificate = {
    number: '63348',
    validTo: '2027-10-25',
    scope: 'Liquid dietary supplements'
};
const certificationClaims = [
    {
        code: 'SQF',
        title: 'SQF Certified',
        detail: 'Liquid dietary supplements',
        artwork: '/images/certifications/sqf.webp'
    },
    {
        code: 'FDA',
        title: 'FDA Registered Facility',
        detail: 'Facility registration',
        artwork: '/images/certifications/fda-registration.svg'
    },
    {
        code: 'K',
        title: 'Kosher',
        detail: 'Kosher',
        artwork: '/images/certifications/kosher.svg'
    },
    {
        code: 'GMP',
        title: 'GMP',
        detail: 'Good Manufacturing Practices',
        artwork: '/images/certifications/gmp.svg'
    }
];
const certificates = [
    {
        kind: 'sqf',
        title: 'SQF certificate 63348',
        href: '/certificates/sqf-certificate-63348.pdf',
        format: 'PDF',
        approved: true
    }
];
const publishedCertificates = certificates.filter((c)=>c.approved && (c.kind !== 'sqf' || sqfRenewalConfirmed));
}),
"[project]/src/content/services.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "services",
    ()=>services
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$imagery$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/imagery.ts [app-ssr] (ecmascript)");
;
const services = [
    {
        id: 'energy',
        slug: 'private-label-energy-shots',
        href: '/private-label-energy-shots',
        name: 'Private Label Energy Shots',
        title: 'Private label energy shots, from $0.65 a bottle.',
        seoTitle: 'Private Label Energy Shots From $0.65',
        description: 'Private label (white label) energy shots, made for your brand. Use our ready formulas or bring your own.',
        intro: 'Use our ready formulas and add your label, or bring your own formula. We make, pack and ship your private label (white label) energy shots.',
        chips: [
            'Ready formulas',
            'Your own formula'
        ],
        bullets: [
            'Use our ready formulas: choose from six flavors and add your label.',
            'Bring your own formula: tell us the product you want to make.',
            '1.93 FL OZ (57 mL) bottles with a full shrink-sleeve label.'
        ],
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$imagery$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["imagery"].energy,
        width: 1536,
        height: 1024,
        imageAlt: 'Energy Shot bottles in Fruit Punch, Grape and Blue Raspberry packaging',
        sqf: true
    },
    {
        id: 'liquid',
        slug: 'liquid-shot-co-packing',
        href: '/liquid-shot-co-packing',
        name: 'Liquid Shot Co-Packing',
        title: 'Liquid shot co-packing. Bring your formula, we fill and ship.',
        seoTitle: 'Liquid Shot Co-Packing',
        description: 'Bring your formula, we fill and ship. Filling, shrink-sleeve labeling and packing on our liquid line.',
        intro: 'Bring your formula and packaging requirements. Our liquid line has capacity for 200,000 shots a week.',
        chips: [
            'Filling',
            'Labeling',
            'Packing'
        ],
        bullets: [
            'Liquid-shot filling on our production line.',
            'Full shrink-sleeve labeling for your brand.',
            'Packing and shipping, with capacity for 200,000 shots a week.'
        ],
        image: '/motion/factory/01-filling-poster.jpg',
        width: 576,
        height: 1024,
        imageAlt: 'The liquid-shot filling line with bottles moving under the filling heads',
        sqf: true
    },
    {
        id: 'packing',
        slug: 'powders-capsules-tablets',
        href: '/powders-capsules-tablets',
        name: 'Powders, Capsules and Tablets',
        title: 'Powders, capsules and tablets, made to your formula.',
        seoTitle: 'Powders, Capsules and Tablets Manufacturing',
        description: 'Tell us your formula and format. We make it and pack it.',
        intro: 'Tell us your formula and format. We make it and pack it.',
        chips: [
            'Powders',
            'Capsules',
            'Tablets'
        ],
        bullets: [
            'Manufacturing to your formula and chosen format.',
            'Packaging requirements planned around your product.',
            'Your finished powders, capsules or tablets, made and packed.'
        ],
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$imagery$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["imagery"].formats,
        width: 1536,
        height: 1024,
        imageAlt: 'Powder, capsules and tablets on a clean work surface',
        sqf: false
    },
    {
        id: 'blister',
        slug: 'blister-packaging',
        href: '/blister-packaging',
        name: 'Blister Packaging',
        title: 'Custom blister packaging for capsules, tablets and gummies.',
        seoTitle: 'Custom Blister Packaging for Supplements',
        description: 'Single-dose packaging and 1–4 count hanging retail cards for capsules, tablets and gummies.',
        intro: 'Tell us your product and the count you need per pack. We work through your single-dose or hanging-card packaging requirements with you.',
        chips: [
            'Single-dose',
            '1–4 count hanging cards'
        ],
        bullets: [
            'Single-dose blister packaging for your product.',
            'Hanging retail cards with one to four units.',
            'Pack format and artwork planned around your retail requirements.'
        ],
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$imagery$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["imagery"].blister,
        width: 1536,
        height: 1024,
        imageAlt: 'Single-count and four-count hanging blister cards',
        sqf: false
    }
];
}),
"[project]/src/content/site.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/** Contact provenance: https://www.privatelabelnutra.com/ — checked 2026-10-22.
 * Hours are reproduced as published. The current site does not specify a timezone.
 * Round-three owner confirmation supplies the current certification facts.
 */ __turbopack_context__.s([
    "productionTerms",
    ()=>productionTerms,
    "quoteHref",
    ()=>quoteHref,
    "replyTime",
    ()=>replyTime,
    "site",
    ()=>site
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$services$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/services.ts [app-ssr] (ecmascript)");
const site = {
    name: 'Private Label Nutra',
    phone: '800-259-4544',
    telephone: '+1-800-259-4544',
    phoneHref: 'tel:8002594544',
    hours: 'Monday–Friday, 8am–5pm',
    closed: 'Saturday & Sunday closed',
    address: {
        streetAddress: '3 N Colonial Avenue',
        addressLocality: 'Wilmington',
        addressRegion: 'DE',
        postalCode: '19805',
        addressCountry: 'US'
    }
};
;
const productionTerms = {
    // Publish only ownership-confirmed values, with service scope and units.
    minimumOrder: null,
    leadTime: null
};
const replyTime = 'We reply within 1 business day.';
const quoteHref = '/quote?type=private-label';
}),
];})()

//# sourceMappingURL=src_0jpz89zg9tuda._.js.map