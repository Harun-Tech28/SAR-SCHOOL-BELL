(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/school-bell-system/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/school-bell-system/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/school-bell-system/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/school-bell-system/components/sidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sidebar",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/lucide-react/dist/esm/icons/bell.js [app-client] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/lucide-react/dist/esm/icons/megaphone.js [app-client] (ecmascript) <export default as Megaphone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/lucide-react/dist/esm/icons/wifi.js [app-client] (ecmascript) <export default as Wifi>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function Sidebar({ currentPage, setCurrentPage }) {
    const menuItems = [
        {
            id: "dashboard",
            label: "Dashboard",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"]
        },
        {
            id: "timetable",
            label: "Timetables",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"]
        },
        {
            id: "call-student",
            label: "Call Student",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"]
        },
        {
            id: "students",
            label: "Students",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
        },
        {
            id: "announcements",
            label: "Announcements",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__["Megaphone"]
        },
        {
            id: "devices",
            label: "Devices",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__["Wifi"]
        },
        {
            id: "logs",
            label: "Logs & Reports",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"]
        },
        {
            id: "settings",
            label: "Settings",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "hidden lg:block w-64 bg-sidebar border-r border-sidebar-border p-6 overflow-y-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold text-sidebar-foreground",
                        children: "SchoolBell"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/school-bell-system/components/sidebar.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-sidebar-foreground/60",
                        children: "Automation System"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/school-bell-system/components/sidebar.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/school-bell-system/components/sidebar.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "space-y-2",
                children: menuItems.map((item)=>{
                    const Icon = item.icon;
                    const isActive = currentPage === item.id;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: isActive ? "default" : "ghost",
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full justify-start gap-3", isActive && "bg-sidebar-primary text-sidebar-primary-foreground"),
                        onClick: ()=>setCurrentPage(item.id),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/school-bell-system/components/sidebar.tsx",
                                lineNumber: 45,
                                columnNumber: 15
                            }, this),
                            item.label
                        ]
                    }, item.id, true, {
                        fileName: "[project]/Downloads/school-bell-system/components/sidebar.tsx",
                        lineNumber: 36,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/Downloads/school-bell-system/components/sidebar.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/school-bell-system/components/sidebar.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_c = Sidebar;
var _c;
__turbopack_context__.k.register(_c, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/school-bell-system/components/mobile-header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MobileHeader",
    ()=>MobileHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/components/ui/button.tsx [app-client] (ecmascript)");
"use client";
;
;
;
const pageNames = {
    dashboard: "Dashboard",
    timetable: "Timetables",
    "call-student": "Call Student",
    students: "Students",
    announcements: "Announcements",
    devices: "Devices",
    logs: "Logs & Reports",
    settings: "Settings"
};
function MobileHeader({ onMenuToggle, isMenuOpen, currentPage }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "fixed top-0 left-0 right-0 z-40 bg-background border-b border-border lg:hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        size: "sm",
                        onClick: onMenuToggle,
                        className: "p-2",
                        "aria-label": isMenuOpen ? "Close menu" : "Open menu",
                        children: isMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "w-6 h-6"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/school-bell-system/components/mobile-header.tsx",
                            lineNumber: 35,
                            columnNumber: 27
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                            className: "w-6 h-6"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/school-bell-system/components/mobile-header.tsx",
                            lineNumber: 35,
                            columnNumber: 55
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/school-bell-system/components/mobile-header.tsx",
                        lineNumber: 28,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-lg font-bold text-foreground",
                                children: "SchoolBell"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/school-bell-system/components/mobile-header.tsx",
                                lineNumber: 38,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-foreground/60",
                                children: pageNames[currentPage] || "Dashboard"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/school-bell-system/components/mobile-header.tsx",
                                lineNumber: 39,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/school-bell-system/components/mobile-header.tsx",
                        lineNumber: 37,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/school-bell-system/components/mobile-header.tsx",
                lineNumber: 27,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/school-bell-system/components/mobile-header.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/school-bell-system/components/mobile-header.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_c = MobileHeader;
var _c;
__turbopack_context__.k.register(_c, "MobileHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/school-bell-system/components/mobile-menu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MobileMenu",
    ()=>MobileMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/lucide-react/dist/esm/icons/bell.js [app-client] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/lucide-react/dist/esm/icons/megaphone.js [app-client] (ecmascript) <export default as Megaphone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/lucide-react/dist/esm/icons/wifi.js [app-client] (ecmascript) <export default as Wifi>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function MobileMenu({ currentPage, setCurrentPage, isOpen, onClose }) {
    const menuItems = [
        {
            id: "dashboard",
            label: "Dashboard",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"],
            description: "Overview & Stats"
        },
        {
            id: "timetable",
            label: "Timetables",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"],
            description: "Bell Schedules"
        },
        {
            id: "call-student",
            label: "Call Student",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"],
            description: "Student Announcements"
        },
        {
            id: "students",
            label: "Students",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
            description: "Student Database"
        },
        {
            id: "announcements",
            label: "Announcements",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__["Megaphone"],
            description: "Public Announcements"
        },
        {
            id: "devices",
            label: "Devices",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__["Wifi"],
            description: "Connected Devices"
        },
        {
            id: "logs",
            label: "Logs & Reports",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
            description: "System Logs"
        },
        {
            id: "settings",
            label: "Settings",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"],
            description: "System Configuration"
        }
    ];
    const handlePageSelect = (pageId)=>{
        setCurrentPage(pageId);
        onClose();
    };
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-50 bg-background lg:hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pt-20 pb-6 px-4 h-full overflow-y-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold text-foreground mb-1",
                                children: "SchoolBell"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/school-bell-system/components/mobile-menu.tsx",
                                lineNumber: 41,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-foreground/60",
                                children: "Automation System"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/school-bell-system/components/mobile-menu.tsx",
                                lineNumber: 42,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/school-bell-system/components/mobile-menu.tsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-3 max-w-2xl mx-auto",
                        children: menuItems.map((item)=>{
                            const Icon = item.icon;
                            const isActive = currentPage === item.id;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handlePageSelect(item.id),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col items-center justify-center p-6 rounded-lg border-2 transition-all", "min-h-[120px] text-center", isActive ? "bg-primary text-primary-foreground border-primary shadow-lg scale-105" : "bg-card text-card-foreground border-border hover:border-primary/50 hover:shadow-md active:scale-95"),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-8 h-8 mb-3", isActive ? "text-primary-foreground" : "text-primary")
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/school-bell-system/components/mobile-menu.tsx",
                                        lineNumber: 62,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-sm mb-1",
                                        children: item.label
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/school-bell-system/components/mobile-menu.tsx",
                                        lineNumber: 63,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-xs", isActive ? "text-primary-foreground/80" : "text-muted-foreground"),
                                        children: item.description
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/school-bell-system/components/mobile-menu.tsx",
                                        lineNumber: 64,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, item.id, true, {
                                fileName: "[project]/Downloads/school-bell-system/components/mobile-menu.tsx",
                                lineNumber: 51,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/Downloads/school-bell-system/components/mobile-menu.tsx",
                        lineNumber: 46,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8 text-center text-xs text-muted-foreground",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Tap any option to navigate"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/school-bell-system/components/mobile-menu.tsx",
                            lineNumber: 74,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/school-bell-system/components/mobile-menu.tsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/school-bell-system/components/mobile-menu.tsx",
                lineNumber: 38,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/school-bell-system/components/mobile-menu.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
_c = MobileMenu;
var _c;
__turbopack_context__.k.register(_c, "MobileMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/school-bell-system/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/school-bell-system/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/school-bell-system/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/school-bell-system/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/school-bell-system/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/school-bell-system/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c4 = CardAction;
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('px-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/school-bell-system/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c5 = CardContent;
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center px-6 [.border-t]:pt-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/school-bell-system/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/school-bell-system/lib/store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useStore",
    ()=>useStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/zustand/esm/middleware.mjs [app-client] (ecmascript)");
;
;
const useStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persist"])((set)=>({
        students: [],
        timetables: [],
        devices: [],
        callRequests: [],
        settings: {
            defaultVoice: "openai-onyx",
            defaultLanguage: "english",
            defaultRepeatCount: 1,
            azanEnabled: false,
            prayerTimes: {
                fajr: "05:30",
                dhuhr: "12:30",
                asr: "15:00",
                maghrib: "17:45",
                isha: "19:00"
            },
            // Default AI voice settings
            aiVoice: {
                aiVoiceEnabled: false,
                primaryProvider: "openai",
                fallbackProvider: "azure",
                voiceProfiles: {
                    announcement: {
                        id: "default-announcement",
                        name: "Professional Announcer",
                        language: "english",
                        gender: "neutral",
                        category: "announcement",
                        provider: "openai"
                    },
                    prayer: {
                        id: "default-prayer",
                        name: "Islamic Prayer Voice",
                        language: "arabic",
                        gender: "male",
                        category: "religious",
                        provider: "openai"
                    },
                    bell: {
                        id: "default-bell",
                        name: "School Bell Voice",
                        language: "english",
                        gender: "neutral",
                        category: "bell",
                        provider: "openai"
                    },
                    general: {
                        id: "default-general",
                        name: "General Purpose Voice",
                        language: "english",
                        gender: "female",
                        category: "standard",
                        provider: "openai"
                    }
                },
                cacheSettings: {
                    maxSize: 100,
                    maxAge: 30,
                    enabled: true
                },
                usageSettings: {
                    monthlyLimit: 100000,
                    costThreshold: 50,
                    optimizationEnabled: true
                },
                providerConfigs: {
                    openai: {
                        apiKey: "",
                        enabled: false,
                        priority: 1,
                        rateLimit: {
                            requestsPerMinute: 50,
                            charactersPerDay: 50000
                        }
                    },
                    elevenlabs: {
                        apiKey: "",
                        enabled: false,
                        priority: 2,
                        rateLimit: {
                            requestsPerMinute: 20,
                            charactersPerDay: 20000
                        }
                    },
                    azure: {
                        apiKey: "",
                        endpoint: "",
                        enabled: false,
                        priority: 3,
                        rateLimit: {
                            requestsPerMinute: 100,
                            charactersPerDay: 100000
                        }
                    }
                }
            }
        },
        addStudent: (student)=>set((state)=>({
                    students: [
                        ...state.students,
                        student
                    ]
                })),
        removeStudent: (id)=>set((state)=>({
                    students: state.students.filter((s)=>s.id !== id)
                })),
        addTimetable: (timetable)=>{
            console.log("🔵 Store: addTimetable called with:", timetable);
            set((state)=>{
                const newTimetables = [
                    ...state.timetables,
                    timetable
                ];
                console.log("🔵 Store: New timetables array:", newTimetables);
                return {
                    timetables: newTimetables
                };
            });
            console.log("🔵 Store: addTimetable completed");
        },
        removeTimetable: (id)=>{
            console.log("🔵 Store: removeTimetable called with id:", id);
            set((state)=>({
                    timetables: state.timetables.filter((t)=>t.id !== id)
                }));
        },
        updateTimetable: (id, updates)=>{
            console.log("🔵 Store: updateTimetable called with id:", id, "updates:", updates);
            set((state)=>({
                    timetables: state.timetables.map((t)=>t.id === id ? {
                            ...t,
                            ...updates
                        } : t)
                }));
        },
        addDevice: (device)=>set((state)=>({
                    devices: [
                        ...state.devices,
                        device
                    ]
                })),
        removeDevice: (id)=>set((state)=>({
                    devices: state.devices.filter((d)=>d.id !== id)
                })),
        addCallRequest: (request)=>set((state)=>({
                    callRequests: [
                        ...state.callRequests,
                        request
                    ]
                })),
        clearCallRequests: ()=>set(()=>({
                    callRequests: []
                })),
        updateSettings: (newSettings)=>set((state)=>({
                    settings: {
                        ...state.settings,
                        ...newSettings
                    }
                }))
    }), {
    name: "school-bell-storage",
    onRehydrateStorage: ()=>(state)=>{
            console.log("🔄 Store rehydrated from localStorage");
            if (state) {
                console.log("📊 Rehydrated state:", {
                    studentsCount: state.students.length,
                    timetablesCount: state.timetables.length,
                    devicesCount: state.devices.length
                });
            }
        }
}));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/school-bell-system/lib/ai-voice-types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Core AI Voice Generation Types and Interfaces
__turbopack_context__.s([
    "AIVoiceError",
    ()=>AIVoiceError,
    "AuthenticationError",
    ()=>AuthenticationError,
    "RateLimitError",
    ()=>RateLimitError,
    "ServiceUnavailableError",
    ()=>ServiceUnavailableError
]);
class AIVoiceError extends Error {
    provider;
    code;
    retryable;
    constructor(message, provider, code, retryable = false){
        super(message), this.provider = provider, this.code = code, this.retryable = retryable;
        this.name = 'AIVoiceError';
    }
}
class RateLimitError extends AIVoiceError {
    constructor(provider, retryAfter){
        super(`Rate limit exceeded for ${provider}`, provider, 'RATE_LIMIT', true);
        this.retryAfter = retryAfter;
    }
    retryAfter;
}
class AuthenticationError extends AIVoiceError {
    constructor(provider){
        super(`Authentication failed for ${provider}`, provider, 'AUTH_FAILED', false);
    }
}
class ServiceUnavailableError extends AIVoiceError {
    constructor(provider){
        super(`Service unavailable for ${provider}`, provider, 'SERVICE_UNAVAILABLE', true);
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/school-bell-system/lib/ai-voice-constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AUDIO_TEMPLATES",
    ()=>AUDIO_TEMPLATES,
    "DEFAULT_RATE_LIMITS",
    ()=>DEFAULT_RATE_LIMITS,
    "DEFAULT_VOICE_PROFILES",
    ()=>DEFAULT_VOICE_PROFILES,
    "PRAYER_PHRASES",
    ()=>PRAYER_PHRASES,
    "PROVIDER_CAPABILITIES",
    ()=>PROVIDER_CAPABILITIES,
    "PROVIDER_COSTS",
    ()=>PROVIDER_COSTS,
    "generateCacheKey",
    ()=>generateCacheKey
]);
const DEFAULT_VOICE_PROFILES = {
    openai: [
        {
            id: "openai-alloy",
            name: "Alloy",
            language: "english",
            gender: "neutral",
            category: "standard",
            provider: "openai"
        },
        {
            id: "openai-echo",
            name: "Echo",
            language: "english",
            gender: "male",
            category: "announcement",
            provider: "openai"
        },
        {
            id: "openai-fable",
            name: "Fable",
            language: "english",
            gender: "neutral",
            category: "standard",
            provider: "openai"
        },
        {
            id: "openai-onyx",
            name: "Onyx",
            language: "english",
            gender: "male",
            category: "announcement",
            provider: "openai"
        },
        {
            id: "openai-nova",
            name: "Nova",
            language: "english",
            gender: "female",
            category: "standard",
            provider: "openai"
        },
        {
            id: "openai-shimmer",
            name: "Shimmer",
            language: "english",
            gender: "female",
            category: "announcement",
            provider: "openai"
        }
    ],
    elevenlabs: [
        {
            id: "elevenlabs-rachel",
            name: "Rachel",
            language: "english",
            gender: "female",
            accent: "american",
            category: "standard",
            provider: "elevenlabs"
        },
        {
            id: "elevenlabs-drew",
            name: "Drew",
            language: "english",
            gender: "male",
            accent: "american",
            category: "announcement",
            provider: "elevenlabs"
        },
        {
            id: "elevenlabs-clyde",
            name: "Clyde",
            language: "english",
            gender: "male",
            accent: "american",
            category: "standard",
            provider: "elevenlabs"
        },
        {
            id: "elevenlabs-paul",
            name: "Paul",
            language: "english",
            gender: "male",
            accent: "american",
            category: "announcement",
            provider: "elevenlabs"
        }
    ],
    azure: [
        {
            id: "azure-jenny",
            name: "Jenny",
            language: "english",
            gender: "female",
            accent: "american",
            category: "standard",
            provider: "azure"
        },
        {
            id: "azure-guy",
            name: "Guy",
            language: "english",
            gender: "male",
            accent: "american",
            category: "announcement",
            provider: "azure"
        },
        {
            id: "azure-aria",
            name: "Aria",
            language: "english",
            gender: "female",
            accent: "american",
            category: "announcement",
            provider: "azure"
        },
        {
            id: "azure-davis",
            name: "Davis",
            language: "english",
            gender: "male",
            accent: "american",
            category: "standard",
            provider: "azure"
        }
    ]
};
const PROVIDER_CAPABILITIES = {
    openai: {
        maxCharacters: 4096,
        supportedLanguages: [
            "english",
            "spanish",
            "french",
            "german",
            "italian",
            "portuguese",
            "russian",
            "japanese",
            "korean",
            "chinese",
            "arabic"
        ],
        supportedFormats: [
            "mp3",
            "opus",
            "aac",
            "flac"
        ],
        realTimeGeneration: true,
        voiceCloning: false,
        emotionControl: false
    },
    elevenlabs: {
        maxCharacters: 5000,
        supportedLanguages: [
            "english",
            "spanish",
            "french",
            "german",
            "italian",
            "portuguese",
            "polish",
            "hindi",
            "arabic"
        ],
        supportedFormats: [
            "mp3",
            "wav",
            "ogg"
        ],
        realTimeGeneration: true,
        voiceCloning: true,
        emotionControl: true
    },
    azure: {
        maxCharacters: 10000,
        supportedLanguages: [
            "english",
            "spanish",
            "french",
            "german",
            "italian",
            "portuguese",
            "russian",
            "japanese",
            "korean",
            "chinese",
            "arabic",
            "hindi",
            "dutch",
            "swedish"
        ],
        supportedFormats: [
            "mp3",
            "wav",
            "ogg",
            "webm"
        ],
        realTimeGeneration: true,
        voiceCloning: false,
        emotionControl: true
    }
};
const PRAYER_PHRASES = {
    fajr: {
        arabic: "حي على الصلاة، حي على الفلاح، الصلاة خير من النوم",
        transliteration: "Hayya 'ala as-salah, hayya 'ala al-falah, as-salatu khayrun min an-nawm",
        english: "Come to prayer, come to success, prayer is better than sleep"
    },
    dhuhr: {
        arabic: "حي على الصلاة، حي على الفلاح",
        transliteration: "Hayya 'ala as-salah, hayya 'ala al-falah",
        english: "Come to prayer, come to success"
    },
    asr: {
        arabic: "حي على الصلاة، حي على الفلاح",
        transliteration: "Hayya 'ala as-salah, hayya 'ala al-falah",
        english: "Come to prayer, come to success"
    },
    maghrib: {
        arabic: "حي على الصلاة، حي على الفلاح",
        transliteration: "Hayya 'ala as-salah, hayya 'ala al-falah",
        english: "Come to prayer, come to success"
    },
    isha: {
        arabic: "حي على الصلاة، حي على الفلاح",
        transliteration: "Hayya 'ala as-salah, hayya 'ala al-falah",
        english: "Come to prayer, come to success"
    }
};
const AUDIO_TEMPLATES = {
    bell: {
        class: "School bell - Class time",
        break: "School bell - Break time",
        assembly: "School bell - Assembly time",
        dismissal: "School bell - Dismissal time"
    },
    announcement: {
        attention: "Attention students and staff",
        general: "This is a general announcement",
        emergency: "This is an emergency announcement"
    }
};
const generateCacheKey = (text, voice, provider)=>{
    const hash = btoa(text + voice + provider).replace(/[^a-zA-Z0-9]/g, '').substring(0, 32);
    return `ai-voice-${provider}-${voice}-${hash}`;
};
const PROVIDER_COSTS = {
    openai: 0.015,
    elevenlabs: 0.30,
    azure: 0.016 // $0.016 per 1000 characters
};
const DEFAULT_RATE_LIMITS = {
    openai: {
        requestsPerMinute: 50,
        charactersPerDay: 50000
    },
    elevenlabs: {
        requestsPerMinute: 20,
        charactersPerDay: 20000
    },
    azure: {
        requestsPerMinute: 100,
        charactersPerDay: 100000
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/school-bell-system/lib/providers/openai-provider.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OpenAIProvider",
    ()=>OpenAIProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$ai$2d$voice$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/lib/ai-voice-types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$ai$2d$voice$2d$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/lib/ai-voice-constants.ts [app-client] (ecmascript)");
;
;
class OpenAIProvider {
    name = "OpenAI TTS";
    apiKey;
    baseUrl = "https://api.openai.com/v1";
    constructor(apiKey){
        this.apiKey = apiKey;
    }
    async generateSpeech(text, options) {
        if (!this.apiKey) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$ai$2d$voice$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthenticationError"]("OpenAI");
        }
        const requestBody = {
            model: "tts-1",
            input: text,
            voice: this.mapVoiceId(options.voice),
            response_format: "mp3",
            speed: Math.max(0.25, Math.min(4.0, options.speed)) // OpenAI supports 0.25 to 4.0
        };
        try {
            const response = await fetch(`${this.baseUrl}/audio/speech`, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${this.apiKey}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(requestBody)
            });
            if (!response.ok) {
                await this.handleErrorResponse(response);
            }
            const arrayBuffer = await response.arrayBuffer();
            return await this.convertMp3ToAudioBuffer(arrayBuffer);
        } catch (error) {
            if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$ai$2d$voice$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AIVoiceError"]) {
                throw error;
            }
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$ai$2d$voice$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ServiceUnavailableError"]("OpenAI");
        }
    }
    async getAvailableVoices() {
        // OpenAI TTS voices are predefined
        return [
            {
                id: "openai-alloy",
                name: "Alloy",
                language: "english",
                gender: "neutral",
                category: "standard",
                provider: "openai"
            },
            {
                id: "openai-echo",
                name: "Echo",
                language: "english",
                gender: "male",
                category: "announcement",
                provider: "openai"
            },
            {
                id: "openai-fable",
                name: "Fable",
                language: "english",
                gender: "neutral",
                category: "standard",
                provider: "openai"
            },
            {
                id: "openai-onyx",
                name: "Onyx",
                language: "english",
                gender: "male",
                category: "announcement",
                provider: "openai"
            },
            {
                id: "openai-nova",
                name: "Nova",
                language: "english",
                gender: "female",
                category: "standard",
                provider: "openai"
            },
            {
                id: "openai-shimmer",
                name: "Shimmer",
                language: "english",
                gender: "female",
                category: "announcement",
                provider: "openai"
            }
        ];
    }
    async validateCredentials() {
        if (!this.apiKey) {
            return false;
        }
        try {
            // Test with a minimal request
            const response = await fetch(`${this.baseUrl}/audio/speech`, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${this.apiKey}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    model: "tts-1",
                    input: "test",
                    voice: "alloy",
                    response_format: "mp3"
                })
            });
            return response.ok || response.status === 400 // 400 might be due to minimal input, but auth is valid
            ;
        } catch (error) {
            return false;
        }
    }
    estimateCost(text, voice) {
        const characterCount = text.length;
        return characterCount / 1000 * __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$ai$2d$voice$2d$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROVIDER_COSTS"].openai;
    }
    mapVoiceId(voiceId) {
        // Map our voice IDs to OpenAI voice names
        const voiceMap = {
            "openai-alloy": "alloy",
            "openai-echo": "echo",
            "openai-fable": "fable",
            "openai-onyx": "onyx",
            "openai-nova": "nova",
            "openai-shimmer": "shimmer"
        };
        return voiceMap[voiceId] || "alloy" // Default to alloy
        ;
    }
    async handleErrorResponse(response) {
        const errorText = await response.text();
        let errorData = {};
        try {
            errorData = JSON.parse(errorText);
        } catch  {
        // If JSON parsing fails, use the raw text
        }
        switch(response.status){
            case 401:
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$ai$2d$voice$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthenticationError"]("OpenAI");
            case 429:
                const retryAfter = response.headers.get("retry-after");
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$ai$2d$voice$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RateLimitError"]("OpenAI", retryAfter ? parseInt(retryAfter) : undefined);
            case 500:
            case 502:
            case 503:
            case 504:
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$ai$2d$voice$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ServiceUnavailableError"]("OpenAI");
            default:
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$ai$2d$voice$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AIVoiceError"](errorData.error?.message || `OpenAI API error: ${response.status}`, "OpenAI", `HTTP_${response.status}`, response.status >= 500);
        }
    }
    async convertMp3ToAudioBuffer(mp3ArrayBuffer) {
        // Create AudioContext
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        const audioContext = new AudioContext();
        try {
            // Decode the MP3 data
            const audioBuffer = await audioContext.decodeAudioData(mp3ArrayBuffer.slice(0));
            return audioBuffer;
        } catch (error) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$ai$2d$voice$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AIVoiceError"]("Failed to decode audio data from OpenAI", "OpenAI", "DECODE_ERROR", false);
        }
    }
    // Utility method to check if a language is supported
    isLanguageSupported(language) {
        // OpenAI TTS supports many languages, but voices are primarily English
        const supportedLanguages = [
            "english",
            "spanish",
            "french",
            "german",
            "italian",
            "portuguese",
            "russian",
            "japanese",
            "korean",
            "chinese",
            "arabic",
            "hindi",
            "dutch"
        ];
        return supportedLanguages.includes(language.toLowerCase());
    }
    // Get the maximum character limit for OpenAI
    getMaxCharacters() {
        return 4096;
    }
    // Get supported audio formats
    getSupportedFormats() {
        return [
            "mp3",
            "opus",
            "aac",
            "flac"
        ];
    }
    // Update API key
    updateApiKey(apiKey) {
        this.apiKey = apiKey;
    }
    // Get current API key (masked for security)
    getApiKeyMask() {
        if (!this.apiKey) return "";
        return this.apiKey.substring(0, 7) + "..." + this.apiKey.substring(this.apiKey.length - 4);
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/school-bell-system/lib/providers/elevenlabs-provider.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ElevenLabsProvider",
    ()=>ElevenLabsProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$ai$2d$voice$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/lib/ai-voice-types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$ai$2d$voice$2d$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/lib/ai-voice-constants.ts [app-client] (ecmascript)");
;
;
class ElevenLabsProvider {
    name = "ElevenLabs";
    apiKey;
    baseUrl = "https://api.elevenlabs.io/v1";
    constructor(apiKey){
        this.apiKey = apiKey;
    }
    async generateSpeech(text, options) {
        if (!this.apiKey) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$ai$2d$voice$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthenticationError"]("ElevenLabs");
        }
        const voiceId = this.mapVoiceId(options.voice);
        const requestBody = {
            text: text,
            model_id: "eleven_monolingual_v1",
            voice_settings: {
                stability: options.stability || 0.5,
                similarity_boost: options.clarity || 0.75,
                style: 0.0,
                use_speaker_boost: true
            }
        };
        try {
            const response = await fetch(`${this.baseUrl}/text-to-speech/${voiceId}`, {
                method: "POST",
                headers: {
                    "Accept": "audio/mpeg",
                    "Content-Type": "application/json",
                    "xi-api-key": this.apiKey
                },
                body: JSON.stringify(requestBody)
            });
            if (!response.ok) {
                await this.handleErrorResponse(response);
            }
            const arrayBuffer = await response.arrayBuffer();
            return await this.convertMp3ToAudioBuffer(arrayBuffer);
        } catch (error) {
            if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$ai$2d$voice$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AIVoiceError"]) {
                throw error;
            }
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$ai$2d$voice$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ServiceUnavailableError"]("ElevenLabs");
        }
    }
    async getAvailableVoices() {
        if (!this.apiKey) {
            // Return default voices if no API key
            return this.getDefaultVoices();
        }
        try {
            const response = await fetch(`${this.baseUrl}/voices`, {
                headers: {
                    "xi-api-key": this.apiKey
                }
            });
            if (!response.ok) {
                // Fallback to default voices if API call fails
                return this.getDefaultVoices();
            }
            const data = await response.json();
            return this.mapElevenLabsVoices(data.voices || []);
        } catch (error) {
            // Fallback to default voices
            return this.getDefaultVoices();
        }
    }
    async validateCredentials() {
        if (!this.apiKey) {
            return false;
        }
        try {
            const response = await fetch(`${this.baseUrl}/user`, {
                headers: {
                    "xi-api-key": this.apiKey
                }
            });
            return response.ok;
        } catch (error) {
            return false;
        }
    }
    estimateCost(text, voice) {
        const characterCount = text.length;
        return characterCount / 1000 * __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$ai$2d$voice$2d$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROVIDER_COSTS"].elevenlabs;
    }
    getDefaultVoices() {
        return [
            {
                id: "elevenlabs-rachel",
                name: "Rachel",
                language: "english",
                gender: "female",
                accent: "american",
                category: "standard",
                provider: "elevenlabs"
            },
            {
                id: "elevenlabs-drew",
                name: "Drew",
                language: "english",
                gender: "male",
                accent: "american",
                category: "announcement",
                provider: "elevenlabs"
            },
            {
                id: "elevenlabs-clyde",
                name: "Clyde",
                language: "english",
                gender: "male",
                accent: "american",
                category: "standard",
                provider: "elevenlabs"
            },
            {
                id: "elevenlabs-paul",
                name: "Paul",
                language: "english",
                gender: "male",
                accent: "american",
                category: "announcement",
                provider: "elevenlabs"
            },
            {
                id: "elevenlabs-domi",
                name: "Domi",
                language: "english",
                gender: "female",
                accent: "american",
                category: "standard",
                provider: "elevenlabs"
            },
            {
                id: "elevenlabs-dave",
                name: "Dave",
                language: "english",
                gender: "male",
                accent: "british",
                category: "announcement",
                provider: "elevenlabs"
            }
        ];
    }
    mapElevenLabsVoices(voices) {
        return voices.map((voice)=>({
                id: `elevenlabs-${voice.voice_id}`,
                name: voice.name,
                language: this.detectLanguage(voice.labels || {}),
                gender: this.detectGender(voice.labels || {}),
                accent: this.detectAccent(voice.labels || {}),
                category: this.detectCategory(voice.labels || {}),
                provider: "elevenlabs",
                previewUrl: voice.preview_url
            }));
    }
    detectLanguage(labels) {
        const language = labels.language || labels.accent || "english";
        return language.toLowerCase();
    }
    detectGender(labels) {
        const gender = labels.gender || labels.sex || "";
        if (gender.toLowerCase().includes("male")) return "male";
        if (gender.toLowerCase().includes("female")) return "female";
        return "neutral";
    }
    detectAccent(labels) {
        return labels.accent || labels.region || undefined;
    }
    detectCategory(labels) {
        const description = (labels.description || "").toLowerCase();
        const useCase = (labels.use_case || "").toLowerCase();
        if (description.includes("announcement") || useCase.includes("announcement")) {
            return "announcement";
        }
        if (description.includes("religious") || useCase.includes("religious")) {
            return "religious";
        }
        if (description.includes("bell") || useCase.includes("bell")) {
            return "bell";
        }
        return "standard";
    }
    mapVoiceId(voiceId) {
        // Map our voice IDs to ElevenLabs voice IDs
        const voiceMap = {
            "elevenlabs-rachel": "21m00Tcm4TlvDq8ikWAM",
            "elevenlabs-drew": "29vD33N1CtxCmqQRPOHJ",
            "elevenlabs-clyde": "2EiwWnXFnvU5JabPnv8n",
            "elevenlabs-paul": "5Q0t7uMcjvnagumLfvZi",
            "elevenlabs-domi": "AZnzlk1XvdvUeBnXmlld",
            "elevenlabs-dave": "CYw3kZ02Hs0563khs1Fj"
        };
        // If it's already a direct voice ID (from API), use it
        if (voiceId.length === 20 && !voiceId.includes("-")) {
            return voiceId;
        }
        return voiceMap[voiceId] || "21m00Tcm4TlvDq8ikWAM" // Default to Rachel
        ;
    }
    async handleErrorResponse(response) {
        const errorText = await response.text();
        let errorData = {};
        try {
            errorData = JSON.parse(errorText);
        } catch  {
        // If JSON parsing fails, use the raw text
        }
        switch(response.status){
            case 401:
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$ai$2d$voice$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthenticationError"]("ElevenLabs");
            case 429:
                const retryAfter = response.headers.get("retry-after");
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$ai$2d$voice$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RateLimitError"]("ElevenLabs", retryAfter ? parseInt(retryAfter) : undefined);
            case 500:
            case 502:
            case 503:
            case 504:
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$ai$2d$voice$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ServiceUnavailableError"]("ElevenLabs");
            default:
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$ai$2d$voice$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AIVoiceError"](errorData.detail?.message || errorData.message || `ElevenLabs API error: ${response.status}`, "ElevenLabs", `HTTP_${response.status}`, response.status >= 500);
        }
    }
    async convertMp3ToAudioBuffer(mp3ArrayBuffer) {
        // Create AudioContext
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        const audioContext = new AudioContext();
        try {
            // Decode the MP3 data
            const audioBuffer = await audioContext.decodeAudioData(mp3ArrayBuffer.slice(0));
            return audioBuffer;
        } catch (error) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$ai$2d$voice$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AIVoiceError"]("Failed to decode audio data from ElevenLabs", "ElevenLabs", "DECODE_ERROR", false);
        }
    }
    // Utility method to check if a language is supported
    isLanguageSupported(language) {
        const supportedLanguages = [
            "english",
            "spanish",
            "french",
            "german",
            "italian",
            "portuguese",
            "polish",
            "hindi",
            "arabic",
            "japanese",
            "korean",
            "chinese"
        ];
        return supportedLanguages.includes(language.toLowerCase());
    }
    // Get the maximum character limit for ElevenLabs
    getMaxCharacters() {
        return 5000;
    }
    // Get supported audio formats
    getSupportedFormats() {
        return [
            "mp3",
            "wav",
            "ogg"
        ];
    }
    // Update API key
    updateApiKey(apiKey) {
        this.apiKey = apiKey;
    }
    // Get current API key (masked for security)
    getApiKeyMask() {
        if (!this.apiKey) return "";
        return this.apiKey.substring(0, 7) + "..." + this.apiKey.substring(this.apiKey.length - 4);
    }
    // ElevenLabs specific methods
    async getVoiceSettings(voiceId) {
        if (!this.apiKey) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$ai$2d$voice$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthenticationError"]("ElevenLabs");
        }
        try {
            const response = await fetch(`${this.baseUrl}/voices/${voiceId}/settings`, {
                headers: {
                    "xi-api-key": this.apiKey
                }
            });
            if (!response.ok) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$ai$2d$voice$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AIVoiceError"]("Failed to get voice settings", "ElevenLabs", "SETTINGS_ERROR", false);
            }
            return await response.json();
        } catch (error) {
            if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$ai$2d$voice$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AIVoiceError"]) {
                throw error;
            }
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$ai$2d$voice$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ServiceUnavailableError"]("ElevenLabs");
        }
    }
    async getUserInfo() {
        if (!this.apiKey) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$ai$2d$voice$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthenticationError"]("ElevenLabs");
        }
        try {
            const response = await fetch(`${this.baseUrl}/user`, {
                headers: {
                    "xi-api-key": this.apiKey
                }
            });
            if (!response.ok) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$ai$2d$voice$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AIVoiceError"]("Failed to get user info", "ElevenLabs", "USER_INFO_ERROR", false);
            }
            return await response.json();
        } catch (error) {
            if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$ai$2d$voice$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AIVoiceError"]) {
                throw error;
            }
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$ai$2d$voice$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ServiceUnavailableError"]("ElevenLabs");
        }
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/school-bell-system/lib/providers/azure-provider.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AzureProvider",
    ()=>AzureProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$ai$2d$voice$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/lib/ai-voice-types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$ai$2d$voice$2d$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/lib/ai-voice-constants.ts [app-client] (ecmascript)");
;
;
class AzureProvider {
    name = "Azure Cognitive Services";
    apiKey;
    region;
    baseUrl;
    constructor(apiKey, endpoint){
        this.apiKey = apiKey;
        // Extract region from endpoint or use default
        if (endpoint) {
            const match = endpoint.match(/https:\/\/([^.]+)\.tts\.speech\.microsoft\.com/);
            this.region = match ? match[1] : "eastus";
            this.baseUrl = endpoint;
        } else {
            this.region = "eastus";
            this.baseUrl = `https://${this.region}.tts.speech.microsoft.com`;
        }
    }
    async generateSpeech(text, options) {
        if (!this.apiKey) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$ai$2d$voice$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthenticationError"]("Azure");
        }
        // Get access token first
        const accessToken = await this.getAccessToken();
        const voiceInfo = this.mapVoiceId(options.voice);
        const ssml = this.generateSSML(text, voiceInfo, options);
        try {
            const response = await fetch(`${this.baseUrl}/cognitiveservices/v1`, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${accessToken}`,
                    "Content-Type": "application/ssml+xml",
                    "X-Microsoft-OutputFormat": "audio-16khz-128kbitrate-mono-mp3",
                    "User-Agent": "SchoolBellSystem"
                },
                body: ssml
            });
            if (!response.ok) {
                await this.handleErrorResponse(response);
            }
            const arrayBuffer = await response.arrayBuffer();
            return await this.convertMp3ToAudioBuffer(arrayBuffer);
        } catch (error) {
            if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$ai$2d$voice$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AIVoiceError"]) {
                throw error;
            }
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$ai$2d$voice$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ServiceUnavailableError"]("Azure");
        }
    }
    async getAvailableVoices() {
        if (!this.apiKey) {
            return this.getDefaultVoices();
        }
        try {
            const accessToken = await this.getAccessToken();
            const response = await fetch(`${this.baseUrl}/cognitiveservices/voices/list`, {
                headers: {
                    "Authorization": `Bearer ${accessToken}`
                }
            });
            if (!response.ok) {
                return this.getDefaultVoices();
            }
            const voices = await response.json();
            return this.mapAzureVoices(voices);
        } catch (error) {
            return this.getDefaultVoices();
        }
    }
    async validateCredentials() {
        if (!this.apiKey) {
            return false;
        }
        try {
            const accessToken = await this.getAccessToken();
            return !!accessToken;
        } catch (error) {
            return false;
        }
    }
    estimateCost(text, voice) {
        const characterCount = text.length;
        return characterCount / 1000 * __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$ai$2d$voice$2d$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROVIDER_COSTS"].azure;
    }
    async getAccessToken() {
        const tokenUrl = `https://${this.region}.api.cognitive.microsoft.com/sts/v1.0/issueToken`;
        try {
            const response = await fetch(tokenUrl, {
                method: "POST",
                headers: {
                    "Ocp-Apim-Subscription-Key": this.apiKey,
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: ""
            });
            if (!response.ok) {
                if (response.status === 401 || response.status === 403) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$ai$2d$voice$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthenticationError"]("Azure");
                }
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$ai$2d$voice$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ServiceUnavailableError"]("Azure");
            }
            return await response.text();
        } catch (error) {
            if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$ai$2d$voice$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AIVoiceError"]) {
                throw error;
            }
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$ai$2d$voice$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ServiceUnavailableError"]("Azure");
        }
    }
    generateSSML(text, voiceInfo, options) {
        const rate = this.mapSpeedToRate(options.speed);
        const pitch = this.mapPitchToSSML(options.pitch);
        return `
      <speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="${voiceInfo.locale}">
        <voice name="${voiceInfo.name}">
          <prosody rate="${rate}" pitch="${pitch}">
            ${this.escapeXML(text)}
          </prosody>
        </voice>
      </speak>
    `.trim();
    }
    mapSpeedToRate(speed) {
        // Convert speed (0.25-4.0) to Azure rate format
        if (speed <= 0.5) return "x-slow";
        if (speed <= 0.75) return "slow";
        if (speed <= 1.25) return "medium";
        if (speed <= 1.5) return "fast";
        return "x-fast";
    }
    mapPitchToSSML(pitch) {
        // Convert pitch (0.5-2.0) to Azure pitch format
        if (pitch <= 0.75) return "low";
        if (pitch <= 1.25) return "medium";
        return "high";
    }
    escapeXML(text) {
        return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
    }
    getDefaultVoices() {
        return [
            {
                id: "azure-jenny",
                name: "Jenny",
                language: "english",
                gender: "female",
                accent: "american",
                category: "standard",
                provider: "azure"
            },
            {
                id: "azure-guy",
                name: "Guy",
                language: "english",
                gender: "male",
                accent: "american",
                category: "announcement",
                provider: "azure"
            },
            {
                id: "azure-aria",
                name: "Aria",
                language: "english",
                gender: "female",
                accent: "american",
                category: "announcement",
                provider: "azure"
            },
            {
                id: "azure-davis",
                name: "Davis",
                language: "english",
                gender: "male",
                accent: "american",
                category: "standard",
                provider: "azure"
            },
            {
                id: "azure-jane",
                name: "Jane",
                language: "english",
                gender: "female",
                accent: "american",
                category: "standard",
                provider: "azure"
            },
            {
                id: "azure-jason",
                name: "Jason",
                language: "english",
                gender: "male",
                accent: "american",
                category: "announcement",
                provider: "azure"
            }
        ];
    }
    mapAzureVoices(voices) {
        return voices.filter((voice)=>voice.VoiceType === "Neural") // Only use neural voices
        .map((voice)=>({
                id: `azure-${voice.ShortName.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
                name: voice.DisplayName,
                language: this.mapLocaleToLanguage(voice.Locale),
                gender: voice.Gender.toLowerCase(),
                accent: this.extractAccent(voice.LocaleName),
                category: this.categorizeVoice(voice.StyleList || []),
                provider: "azure"
            })).slice(0, 20) // Limit to first 20 voices to avoid overwhelming UI
        ;
    }
    mapLocaleToLanguage(locale) {
        const languageMap = {
            "en-US": "english",
            "en-GB": "english",
            "en-AU": "english",
            "en-CA": "english",
            "es-ES": "spanish",
            "es-MX": "spanish",
            "fr-FR": "french",
            "fr-CA": "french",
            "de-DE": "german",
            "it-IT": "italian",
            "pt-BR": "portuguese",
            "pt-PT": "portuguese",
            "ru-RU": "russian",
            "ja-JP": "japanese",
            "ko-KR": "korean",
            "zh-CN": "chinese",
            "ar-SA": "arabic",
            "hi-IN": "hindi",
            "nl-NL": "dutch",
            "sv-SE": "swedish"
        };
        return languageMap[locale] || "english";
    }
    extractAccent(localeName) {
        if (localeName.includes("United States")) return "american";
        if (localeName.includes("United Kingdom")) return "british";
        if (localeName.includes("Australia")) return "australian";
        if (localeName.includes("Canada")) return "canadian";
        return undefined;
    }
    categorizeVoice(styleList) {
        const styles = styleList.join(" ").toLowerCase();
        if (styles.includes("newscast") || styles.includes("announcement")) {
            return "announcement";
        }
        if (styles.includes("religious") || styles.includes("prayer")) {
            return "religious";
        }
        return "standard";
    }
    mapVoiceId(voiceId) {
        // Map our voice IDs to Azure voice names
        const voiceMap = {
            "azure-jenny": {
                name: "en-US-JennyNeural",
                locale: "en-US"
            },
            "azure-guy": {
                name: "en-US-GuyNeural",
                locale: "en-US"
            },
            "azure-aria": {
                name: "en-US-AriaNeural",
                locale: "en-US"
            },
            "azure-davis": {
                name: "en-US-DavisNeural",
                locale: "en-US"
            },
            "azure-jane": {
                name: "en-US-JaneNeural",
                locale: "en-US"
            },
            "azure-jason": {
                name: "en-US-JasonNeural",
                locale: "en-US"
            }
        };
        return voiceMap[voiceId] || {
            name: "en-US-JennyNeural",
            locale: "en-US"
        };
    }
    async handleErrorResponse(response) {
        const errorText = await response.text();
        let errorData = {};
        try {
            errorData = JSON.parse(errorText);
        } catch  {
        // If JSON parsing fails, use the raw text
        }
        switch(response.status){
            case 401:
            case 403:
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$ai$2d$voice$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthenticationError"]("Azure");
            case 429:
                const retryAfter = response.headers.get("retry-after");
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$ai$2d$voice$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RateLimitError"]("Azure", retryAfter ? parseInt(retryAfter) : undefined);
            case 500:
            case 502:
            case 503:
            case 504:
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$ai$2d$voice$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ServiceUnavailableError"]("Azure");
            default:
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$ai$2d$voice$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AIVoiceError"](errorData.error?.message || `Azure API error: ${response.status}`, "Azure", `HTTP_${response.status}`, response.status >= 500);
        }
    }
    async convertMp3ToAudioBuffer(mp3ArrayBuffer) {
        // Create AudioContext
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        const audioContext = new AudioContext();
        try {
            // Decode the MP3 data
            const audioBuffer = await audioContext.decodeAudioData(mp3ArrayBuffer.slice(0));
            return audioBuffer;
        } catch (error) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$ai$2d$voice$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AIVoiceError"]("Failed to decode audio data from Azure", "Azure", "DECODE_ERROR", false);
        }
    }
    // Utility method to check if a language is supported
    isLanguageSupported(language) {
        const supportedLanguages = [
            "english",
            "spanish",
            "french",
            "german",
            "italian",
            "portuguese",
            "russian",
            "japanese",
            "korean",
            "chinese",
            "arabic",
            "hindi",
            "dutch",
            "swedish",
            "norwegian",
            "danish",
            "finnish"
        ];
        return supportedLanguages.includes(language.toLowerCase());
    }
    // Get the maximum character limit for Azure
    getMaxCharacters() {
        return 10000;
    }
    // Get supported audio formats
    getSupportedFormats() {
        return [
            "mp3",
            "wav",
            "ogg",
            "webm"
        ];
    }
    // Update API key and region
    updateCredentials(apiKey, endpoint) {
        this.apiKey = apiKey;
        if (endpoint) {
            const match = endpoint.match(/https:\/\/([^.]+)\.tts\.speech\.microsoft\.com/);
            this.region = match ? match[1] : "eastus";
            this.baseUrl = endpoint;
        }
    }
    // Get current API key (masked for security)
    getApiKeyMask() {
        if (!this.apiKey) return "";
        return this.apiKey.substring(0, 7) + "..." + this.apiKey.substring(this.apiKey.length - 4);
    }
    // Get current region
    getRegion() {
        return this.region;
    }
    // Azure specific methods
    async getVoiceStyles(voiceName) {
        // This would require additional API calls to get voice styles
        // For now, return common styles
        return [
            "default",
            "newscast",
            "customerservice",
            "chat",
            "cheerful",
            "empathetic"
        ];
    }
    async getSpeechSynthesisMarkup(text, voiceName, options) {
        const rate = options?.rate || "medium";
        const pitch = options?.pitch || "medium";
        const volume = options?.volume || "medium";
        const style = options?.style || "default";
        return `
      <speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="en-US">
        <voice name="${voiceName}">
          <mstts:express-as style="${style}">
            <prosody rate="${rate}" pitch="${pitch}" volume="${volume}">
              ${this.escapeXML(text)}
            </prosody>
          </mstts:express-as>
        </voice>
      </speak>
    `.trim();
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/school-bell-system/lib/providers/provider-factory.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProviderFactory",
    ()=>ProviderFactory,
    "createProviderSafely",
    ()=>createProviderSafely
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$providers$2f$openai$2d$provider$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/lib/providers/openai-provider.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$providers$2f$elevenlabs$2d$provider$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/lib/providers/elevenlabs-provider.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$providers$2f$azure$2d$provider$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/lib/providers/azure-provider.ts [app-client] (ecmascript)");
;
;
;
class ProviderFactory {
    static providers = new Map();
    static createProvider(type, config) {
        const key = `${type}-${config.apiKey.substring(0, 8)}`;
        // Return existing provider if already created with same config
        if (this.providers.has(key)) {
            const existingProvider = this.providers.get(key);
            return existingProvider;
        }
        let provider;
        switch(type){
            case "openai":
                provider = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$providers$2f$openai$2d$provider$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OpenAIProvider"](config.apiKey);
                break;
            case "elevenlabs":
                provider = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$providers$2f$elevenlabs$2d$provider$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ElevenLabsProvider"](config.apiKey);
                break;
            case "azure":
                provider = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$providers$2f$azure$2d$provider$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AzureProvider"](config.apiKey, config.endpoint);
                break;
            default:
                throw new Error(`Unknown provider type: ${type}`);
        }
        this.providers.set(key, provider);
        return provider;
    }
    static getProvider(type, config) {
        const key = `${type}-${config.apiKey.substring(0, 8)}`;
        return this.providers.get(key) || null;
    }
    static removeProvider(type, config) {
        const key = `${type}-${config.apiKey.substring(0, 8)}`;
        this.providers.delete(key);
    }
    static clearAllProviders() {
        this.providers.clear();
    }
    static getActiveProviders() {
        const activeProviders = [];
        for (const [key, provider] of this.providers.entries()){
            const type = key.split("-")[0];
            activeProviders.push({
                type,
                provider
            });
        }
        return activeProviders;
    }
    static async validateAllProviders() {
        const results = {};
        for (const [key, provider] of this.providers.entries()){
            try {
                results[key] = await provider.validateCredentials();
            } catch (error) {
                results[key] = false;
            }
        }
        return results;
    }
    static getSupportedProviders() {
        return [
            "openai",
            "elevenlabs",
            "azure"
        ];
    }
    static isProviderSupported(type) {
        return this.getSupportedProviders().includes(type);
    }
}
const createProviderSafely = async (type, config)=>{
    try {
        if (!ProviderFactory.isProviderSupported(type)) {
            return {
                provider: null,
                error: `Provider ${type} is not yet supported`
            };
        }
        const provider = ProviderFactory.createProvider(type, config);
        // Validate credentials
        const isValid = await provider.validateCredentials();
        if (!isValid) {
            return {
                provider: null,
                error: `Invalid credentials for ${type} provider`
            };
        }
        return {
            provider,
            error: null
        };
    } catch (error) {
        return {
            provider: null,
            error: error instanceof Error ? error.message : `Failed to create ${type} provider`
        };
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/school-bell-system/lib/audio-cache.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IndexedDBAudioCache",
    ()=>IndexedDBAudioCache,
    "createAudioCache",
    ()=>createAudioCache,
    "getAudioCache",
    ()=>getAudioCache
]);
// IndexedDB database configuration
const DB_NAME = "AIVoiceCache";
const DB_VERSION = 1;
const AUDIO_STORE = "audioFiles";
const METADATA_STORE = "metadata";
class IndexedDBAudioCache {
    db = null;
    initPromise = null;
    constructor(){
        this.initPromise = this.initializeDB();
    }
    async initializeDB() {
        return new Promise((resolve, reject)=>{
            if (("TURBOPACK compile-time value", "object") === "undefined" || !window.indexedDB) {
                reject(new Error("IndexedDB not available"));
                return;
            }
            const request = indexedDB.open(DB_NAME, DB_VERSION);
            request.onerror = ()=>{
                reject(new Error("Failed to open IndexedDB"));
            };
            request.onsuccess = ()=>{
                this.db = request.result;
                resolve();
            };
            request.onupgradeneeded = (event)=>{
                const db = event.target.result;
                // Create audio files store
                if (!db.objectStoreNames.contains(AUDIO_STORE)) {
                    const audioStore = db.createObjectStore(AUDIO_STORE, {
                        keyPath: "key"
                    });
                    audioStore.createIndex("timestamp", "metadata.timestamp", {
                        unique: false
                    });
                    audioStore.createIndex("provider", "metadata.provider", {
                        unique: false
                    });
                    audioStore.createIndex("usage", "metadata.usage", {
                        unique: false
                    });
                }
                // Create metadata store for quick queries
                if (!db.objectStoreNames.contains(METADATA_STORE)) {
                    const metadataStore = db.createObjectStore(METADATA_STORE, {
                        keyPath: "key"
                    });
                    metadataStore.createIndex("timestamp", "timestamp", {
                        unique: false
                    });
                    metadataStore.createIndex("provider", "provider", {
                        unique: false
                    });
                    metadataStore.createIndex("size", "size", {
                        unique: false
                    });
                    metadataStore.createIndex("usage", "usage", {
                        unique: false
                    });
                }
            };
        });
    }
    async ensureDB() {
        if (!this.initPromise) {
            this.initPromise = this.initializeDB();
        }
        await this.initPromise;
        if (!this.db) {
            throw new Error("Database not initialized");
        }
        return this.db;
    }
    async store(key, audio, metadata) {
        const db = await this.ensureDB();
        // Convert AudioBuffer to ArrayBuffer for storage
        const arrayBuffer = this.audioBufferToArrayBuffer(audio);
        const audioData = {
            key,
            audioBuffer: arrayBuffer,
            metadata: {
                ...metadata,
                timestamp: Date.now(),
                size: arrayBuffer.byteLength
            }
        };
        const metadataRecord = {
            key,
            ...audioData.metadata
        };
        return new Promise((resolve, reject)=>{
            const transaction = db.transaction([
                AUDIO_STORE,
                METADATA_STORE
            ], "readwrite");
            transaction.onerror = ()=>{
                reject(new Error("Failed to store audio data"));
            };
            transaction.oncomplete = ()=>{
                resolve();
            };
            // Store audio data
            const audioStore = transaction.objectStore(AUDIO_STORE);
            audioStore.put(audioData);
            // Store metadata separately for quick queries
            const metadataStore = transaction.objectStore(METADATA_STORE);
            metadataStore.put(metadataRecord);
        });
    }
    async retrieve(key) {
        const db = await this.ensureDB();
        return new Promise((resolve, reject)=>{
            const transaction = db.transaction([
                AUDIO_STORE,
                METADATA_STORE
            ], "readwrite");
            const audioStore = transaction.objectStore(AUDIO_STORE);
            const metadataStore = transaction.objectStore(METADATA_STORE);
            const request = audioStore.get(key);
            request.onerror = ()=>{
                reject(new Error("Failed to retrieve audio data"));
            };
            request.onsuccess = ()=>{
                const result = request.result;
                if (!result) {
                    resolve(null);
                    return;
                }
                try {
                    // Convert ArrayBuffer back to AudioBuffer
                    const audioBuffer = this.arrayBufferToAudioBuffer(result.audioBuffer);
                    // Update usage count
                    const updateRequest = metadataStore.get(key);
                    updateRequest.onsuccess = ()=>{
                        const metadata = updateRequest.result;
                        if (metadata) {
                            metadata.usage += 1;
                            metadataStore.put(metadata);
                            // Also update in audio store
                            result.metadata.usage += 1;
                            audioStore.put(result);
                        }
                    };
                    resolve(audioBuffer);
                } catch (error) {
                    reject(new Error("Failed to convert stored data to AudioBuffer"));
                }
            };
        });
    }
    async exists(key) {
        const db = await this.ensureDB();
        return new Promise((resolve, reject)=>{
            const transaction = db.transaction(METADATA_STORE, "readonly");
            const store = transaction.objectStore(METADATA_STORE);
            const request = store.count(key);
            request.onerror = ()=>{
                reject(new Error("Failed to check if key exists"));
            };
            request.onsuccess = ()=>{
                resolve(request.result > 0);
            };
        });
    }
    async clear(pattern) {
        const db = await this.ensureDB();
        return new Promise((resolve, reject)=>{
            const transaction = db.transaction([
                AUDIO_STORE,
                METADATA_STORE
            ], "readwrite");
            transaction.onerror = ()=>{
                reject(new Error("Failed to clear cache"));
            };
            transaction.oncomplete = ()=>{
                resolve();
            };
            if (!pattern) {
                // Clear all data
                transaction.objectStore(AUDIO_STORE).clear();
                transaction.objectStore(METADATA_STORE).clear();
            } else {
                // Clear data matching pattern
                this.clearByPattern(transaction, pattern);
            }
        });
    }
    clearByPattern(transaction, pattern) {
        const metadataStore = transaction.objectStore(METADATA_STORE);
        const audioStore = transaction.objectStore(AUDIO_STORE);
        const request = metadataStore.openCursor();
        request.onsuccess = (event)=>{
            const cursor = event.target.result;
            if (cursor) {
                const metadata = cursor.value;
                // Simple pattern matching - check if key contains pattern
                if (metadata.key.includes(pattern) || metadata.provider.includes(pattern) || metadata.voice.includes(pattern)) {
                    // Delete from both stores
                    audioStore.delete(metadata.key);
                    metadataStore.delete(metadata.key);
                }
                cursor.continue();
            }
        };
    }
    async getUsageStats() {
        const db = await this.ensureDB();
        return new Promise((resolve, reject)=>{
            const transaction = db.transaction(METADATA_STORE, "readonly");
            const store = transaction.objectStore(METADATA_STORE);
            const request = store.openCursor();
            let totalSize = 0;
            let totalFiles = 0;
            let totalUsage = 0;
            let oldestFile = Date.now();
            let newestFile = 0;
            request.onerror = ()=>{
                reject(new Error("Failed to get usage stats"));
            };
            request.onsuccess = (event)=>{
                const cursor = event.target.result;
                if (cursor) {
                    const metadata = cursor.value;
                    totalSize += metadata.size;
                    totalFiles += 1;
                    totalUsage += metadata.usage;
                    if (metadata.timestamp < oldestFile) {
                        oldestFile = metadata.timestamp;
                    }
                    if (metadata.timestamp > newestFile) {
                        newestFile = metadata.timestamp;
                    }
                    cursor.continue();
                } else {
                    // Calculate hit rate (simplified - based on average usage)
                    const hitRate = totalFiles > 0 ? totalUsage / totalFiles * 100 : 0;
                    resolve({
                        totalSize,
                        totalFiles,
                        hitRate: Math.min(hitRate, 100),
                        oldestFile: totalFiles > 0 ? oldestFile : 0,
                        newestFile: totalFiles > 0 ? newestFile : 0
                    });
                }
            };
        });
    }
    async cleanup() {
        const stats = await this.getUsageStats();
        const maxSize = 100 * 1024 * 1024 // 100MB default
        ;
        const maxAge = 30 * 24 * 60 * 60 * 1000 // 30 days in milliseconds
        ;
        if (stats.totalSize <= maxSize) {
            // Only clean up old files if not over size limit
            await this.cleanupOldFiles(maxAge);
            return;
        }
        // If over size limit, clean up least used files first
        await this.cleanupLeastUsedFiles(maxSize);
    }
    async cleanupOldFiles(maxAge) {
        const db = await this.ensureDB();
        const cutoffTime = Date.now() - maxAge;
        return new Promise((resolve, reject)=>{
            const transaction = db.transaction([
                AUDIO_STORE,
                METADATA_STORE
            ], "readwrite");
            transaction.onerror = ()=>{
                reject(new Error("Failed to cleanup old files"));
            };
            transaction.oncomplete = ()=>{
                resolve();
            };
            const metadataStore = transaction.objectStore(METADATA_STORE);
            const audioStore = transaction.objectStore(AUDIO_STORE);
            const index = metadataStore.index("timestamp");
            const request = index.openCursor(IDBKeyRange.upperBound(cutoffTime));
            request.onsuccess = (event)=>{
                const cursor = event.target.result;
                if (cursor) {
                    const metadata = cursor.value;
                    // Delete old files
                    audioStore.delete(metadata.key);
                    metadataStore.delete(metadata.key);
                    cursor.continue();
                }
            };
        });
    }
    async cleanupLeastUsedFiles(maxSize) {
        const db = await this.ensureDB();
        return new Promise((resolve, reject)=>{
            const transaction = db.transaction([
                AUDIO_STORE,
                METADATA_STORE
            ], "readwrite");
            transaction.onerror = ()=>{
                reject(new Error("Failed to cleanup least used files"));
            };
            transaction.oncomplete = ()=>{
                resolve();
            };
            const metadataStore = transaction.objectStore(METADATA_STORE);
            const audioStore = transaction.objectStore(AUDIO_STORE);
            const index = metadataStore.index("usage");
            let currentSize = 0;
            const request = index.openCursor() // Opens in ascending order (least used first)
            ;
            request.onsuccess = (event)=>{
                const cursor = event.target.result;
                if (cursor && currentSize < maxSize) {
                    const metadata = cursor.value;
                    currentSize += metadata.size;
                    if (currentSize > maxSize) {
                        // Delete this file to get under the limit
                        audioStore.delete(metadata.key);
                        metadataStore.delete(metadata.key);
                    }
                    cursor.continue();
                }
            };
        });
    }
    // Utility methods for AudioBuffer conversion
    audioBufferToArrayBuffer(audioBuffer) {
        const numberOfChannels = audioBuffer.numberOfChannels;
        const length = audioBuffer.length;
        const sampleRate = audioBuffer.sampleRate;
        // Create a simple format: [numberOfChannels, length, sampleRate, ...channelData]
        const headerSize = 3 * 4 // 3 32-bit integers
        ;
        const dataSize = numberOfChannels * length * 4 // 32-bit floats
        ;
        const arrayBuffer = new ArrayBuffer(headerSize + dataSize);
        const headerView = new Int32Array(arrayBuffer, 0, 3);
        headerView[0] = numberOfChannels;
        headerView[1] = length;
        headerView[2] = sampleRate;
        let offset = headerSize;
        for(let channel = 0; channel < numberOfChannels; channel++){
            const channelData = audioBuffer.getChannelData(channel);
            const channelView = new Float32Array(arrayBuffer, offset, length);
            channelView.set(channelData);
            offset += length * 4;
        }
        return arrayBuffer;
    }
    arrayBufferToAudioBuffer(arrayBuffer) {
        const headerView = new Int32Array(arrayBuffer, 0, 3);
        const numberOfChannels = headerView[0];
        const length = headerView[1];
        const sampleRate = headerView[2];
        // Create AudioContext if not available (for Node.js environments)
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        const audioContext = new AudioContext();
        const audioBuffer = audioContext.createBuffer(numberOfChannels, length, sampleRate);
        let offset = 3 * 4 // Skip header
        ;
        for(let channel = 0; channel < numberOfChannels; channel++){
            const channelView = new Float32Array(arrayBuffer, offset, length);
            const channelData = audioBuffer.getChannelData(channel);
            channelData.set(channelView);
            offset += length * 4;
        }
        return audioBuffer;
    }
}
const createAudioCache = ()=>{
    return new IndexedDBAudioCache();
};
// Singleton instance for global use
let cacheInstance = null;
const getAudioCache = ()=>{
    if (!cacheInstance) {
        cacheInstance = createAudioCache();
    }
    return cacheInstance;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/school-bell-system/lib/cache-manager.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CacheManager",
    ()=>CacheManager,
    "getCacheManager",
    ()=>getCacheManager,
    "initializeCacheManager",
    ()=>initializeCacheManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$audio$2d$cache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/lib/audio-cache.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$ai$2d$voice$2d$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/lib/ai-voice-constants.ts [app-client] (ecmascript)");
;
;
class CacheManager {
    cache;
    settings = null;
    constructor(cache){
        this.cache = cache || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$audio$2d$cache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAudioCache"])();
    }
    updateSettings(settings) {
        this.settings = settings;
    }
    async storeAudio(text, voice, provider, audioBuffer) {
        if (!this.settings?.cacheSettings.enabled) {
            return;
        }
        const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$ai$2d$voice$2d$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateCacheKey"])(text, voice, provider);
        const metadata = {
            text: text.substring(0, 100),
            voice,
            provider,
            timestamp: Date.now(),
            size: this.estimateAudioBufferSize(audioBuffer),
            usage: 0
        };
        await this.cache.store(key, audioBuffer, metadata);
        // Check if cleanup is needed after storing
        await this.performMaintenanceIfNeeded();
    }
    async retrieveAudio(text, voice, provider) {
        if (!this.settings?.cacheSettings.enabled) {
            return null;
        }
        const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$ai$2d$voice$2d$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateCacheKey"])(text, voice, provider);
        return await this.cache.retrieve(key);
    }
    async hasAudio(text, voice, provider) {
        if (!this.settings?.cacheSettings.enabled) {
            return false;
        }
        const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$ai$2d$voice$2d$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateCacheKey"])(text, voice, provider);
        return await this.cache.exists(key);
    }
    async clearProviderCache(provider) {
        await this.cache.clear(provider);
    }
    async clearVoiceCache(voice) {
        await this.cache.clear(voice);
    }
    async clearAllCache() {
        await this.cache.clear();
    }
    async getCacheStats() {
        return await this.cache.getUsageStats();
    }
    async getCacheHealth() {
        const stats = await this.getCacheStats();
        const issues = [];
        const recommendations = [];
        const maxSize = (this.settings?.cacheSettings.maxSize || 100) * 1024 * 1024 // Convert MB to bytes
        ;
        const maxAge = (this.settings?.cacheSettings.maxAge || 30) * 24 * 60 * 60 * 1000 // Convert days to ms
        ;
        // Check size
        if (stats.totalSize > maxSize * 0.9) {
            issues.push("Cache is approaching size limit");
            recommendations.push("Consider increasing cache size or cleaning up old files");
        }
        // Check age of oldest files
        const oldestAge = Date.now() - stats.oldestFile;
        if (oldestAge > maxAge) {
            issues.push("Cache contains very old files");
            recommendations.push("Run cache cleanup to remove expired files");
        }
        // Check hit rate
        if (stats.hitRate < 20) {
            issues.push("Low cache hit rate");
            recommendations.push("Consider adjusting voice generation patterns or cache settings");
        }
        // Check file count
        if (stats.totalFiles > 1000) {
            issues.push("Large number of cached files");
            recommendations.push("Consider more aggressive cleanup policies");
        }
        return {
            healthy: issues.length === 0,
            issues,
            recommendations
        };
    }
    async performMaintenance() {
        const beforeStats = await this.getCacheStats();
        const errors = [];
        try {
            await this.cache.cleanup();
        } catch (error) {
            errors.push(`Cleanup failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
        const afterStats = await this.getCacheStats();
        return {
            filesRemoved: beforeStats.totalFiles - afterStats.totalFiles,
            spaceSaved: beforeStats.totalSize - afterStats.totalSize,
            errors
        };
    }
    async performMaintenanceIfNeeded() {
        if (!this.settings) return;
        const stats = await this.getCacheStats();
        const maxSize = this.settings.cacheSettings.maxSize * 1024 * 1024 // Convert MB to bytes
        ;
        // Perform maintenance if over 90% of max size
        if (stats.totalSize > maxSize * 0.9) {
            try {
                await this.cache.cleanup();
            } catch (error) {
                console.warn("Cache maintenance failed:", error);
            }
        }
    }
    estimateAudioBufferSize(audioBuffer) {
        // Estimate size: numberOfChannels * length * 4 bytes per sample + overhead
        return audioBuffer.numberOfChannels * audioBuffer.length * 4 + 100;
    }
    // Utility methods for cache optimization
    async getTopUsedVoices(limit = 10) {
        // This would require extending the cache interface to support more complex queries
        // For now, return empty array - can be implemented later if needed
        return [];
    }
    async getCacheUsageByProvider() {
        // This would require extending the cache interface to support aggregation queries
        // For now, return empty object - can be implemented later if needed
        return {};
    }
    async optimizeCache() {
        const optimizationApplied = [];
        let duplicatesRemoved = 0;
        let spaceSaved = 0;
        // Future optimization strategies:
        // 1. Remove duplicate content with different keys
        // 2. Compress old audio files
        // 3. Convert to more efficient formats
        // 4. Merge similar content
        optimizationApplied.push("Basic cleanup performed");
        try {
            const maintenanceResult = await this.performMaintenance();
            spaceSaved = maintenanceResult.spaceSaved;
            optimizationApplied.push("Expired files removed");
        } catch (error) {
            console.warn("Cache optimization failed:", error);
        }
        return {
            duplicatesRemoved,
            spaceSaved,
            optimizationApplied
        };
    }
}
// Global cache manager instance
let cacheManagerInstance = null;
const getCacheManager = ()=>{
    if (!cacheManagerInstance) {
        cacheManagerInstance = new CacheManager();
    }
    return cacheManagerInstance;
};
const initializeCacheManager = (settings)=>{
    const manager = getCacheManager();
    manager.updateSettings(settings);
    return manager;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/school-bell-system/lib/rate-limiter.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RateLimiter",
    ()=>RateLimiter,
    "getRateLimiter",
    ()=>getRateLimiter
]);
class RateLimiter {
    limits = new Map();
    state = new Map();
    queues = new Map();
    processing = new Map();
    MINUTE_MS = 60 * 1000;
    DAY_MS = 24 * 60 * 60 * 1000;
    MAX_QUEUE_SIZE = 100;
    MAX_RETRY_COUNT = 3;
    RETRY_DELAY_BASE = 1000 // 1 second
    ;
    constructor(){
        // Start queue processing
        this.startQueueProcessor();
    }
    updateProviderLimits(provider, limits) {
        this.limits.set(provider, limits);
        if (!this.state.has(provider)) {
            this.state.set(provider, {
                requests: [],
                characters: [],
                lastReset: Date.now()
            });
        }
        if (!this.queues.has(provider)) {
            this.queues.set(provider, []);
        }
        if (!this.processing.has(provider)) {
            this.processing.set(provider, false);
        }
    }
    async executeWithRateLimit(provider, request, executor) {
        return new Promise((resolve, reject)=>{
            const queuedRequest = {
                id: request.id,
                request,
                resolve,
                reject,
                timestamp: Date.now(),
                retryCount: 0
            };
            this.enqueueRequest(provider, queuedRequest, executor);
        });
    }
    enqueueRequest(provider, queuedRequest, executor) {
        const queue = this.queues.get(provider);
        if (!queue) {
            queuedRequest.reject(new Error(`Provider ${provider} not configured`));
            return;
        }
        // Check queue size limit
        if (queue.length >= this.MAX_QUEUE_SIZE) {
            queuedRequest.reject(new Error(`Queue full for provider ${provider}`));
            return;
        }
        // Add executor to the request
        queuedRequest.executor = executor;
        // Priority queue: high priority requests go first
        if (queuedRequest.request.priority === 'high') {
            queue.unshift(queuedRequest);
        } else {
            queue.push(queuedRequest);
        }
        // Start processing if not already running
        this.processQueue(provider);
    }
    async processQueue(provider) {
        if (this.processing.get(provider)) {
            return; // Already processing
        }
        this.processing.set(provider, true);
        const queue = this.queues.get(provider);
        if (!queue) {
            this.processing.set(provider, false);
            return;
        }
        while(queue.length > 0){
            const queuedRequest = queue.shift();
            try {
                // Check if request has expired (older than 5 minutes)
                if (Date.now() - queuedRequest.timestamp > 5 * 60 * 1000) {
                    queuedRequest.reject(new Error("Request expired"));
                    continue;
                }
                // Wait for rate limit availability
                await this.waitForRateLimit(provider, queuedRequest.request);
                // Execute the request
                const executor = queuedRequest.executor;
                const result = await executor();
                // Record the request
                this.recordRequest(provider, queuedRequest.request);
                queuedRequest.resolve(result);
            } catch (error) {
                // Handle retries
                if (queuedRequest.retryCount < this.MAX_RETRY_COUNT && this.isRetryableError(error)) {
                    queuedRequest.retryCount++;
                    // Exponential backoff
                    const delay = this.RETRY_DELAY_BASE * Math.pow(2, queuedRequest.retryCount - 1);
                    setTimeout(()=>{
                        queue.push(queuedRequest); // Re-queue for retry
                    }, delay);
                } else {
                    queuedRequest.reject(error);
                }
            }
        }
        this.processing.set(provider, false);
    }
    async waitForRateLimit(provider, request) {
        const limits = this.limits.get(provider);
        if (!limits) return;
        while(true){
            if (this.canMakeRequest(provider, request)) {
                return;
            }
            // Wait before checking again
            await this.sleep(1000); // Wait 1 second
        }
    }
    canMakeRequest(provider, request) {
        const limits = this.limits.get(provider);
        const state = this.state.get(provider);
        if (!limits || !state) return true;
        const now = Date.now();
        // Clean up old entries
        this.cleanupOldEntries(state, now);
        // Check requests per minute limit
        if (state.requests.length >= limits.requestsPerMinute) {
            return false;
        }
        // Check characters per day limit
        const todayCharacters = state.characters.reduce((sum, chars)=>sum + chars, 0);
        if (todayCharacters + request.text.length > limits.charactersPerDay) {
            return false;
        }
        return true;
    }
    cleanupOldEntries(state, now) {
        // Remove requests older than 1 minute
        const minuteAgo = now - this.MINUTE_MS;
        state.requests = state.requests.filter((timestamp)=>timestamp > minuteAgo);
        // Reset daily counters if it's a new day
        if (now - state.lastReset > this.DAY_MS) {
            state.characters = [];
            state.lastReset = now;
        }
    }
    recordRequest(provider, request) {
        const state = this.state.get(provider);
        if (!state) return;
        const now = Date.now();
        // Record request timestamp
        state.requests.push(now);
        // Record character count
        state.characters.push(request.text.length);
    }
    isRetryableError(error) {
        // Retry on rate limits and temporary service issues
        return error?.code === 'RATE_LIMIT' || error?.code === 'SERVICE_UNAVAILABLE' || error?.retryable === true;
    }
    sleep(ms) {
        return new Promise((resolve)=>setTimeout(resolve, ms));
    }
    startQueueProcessor() {
        // Process queues every second
        setInterval(()=>{
            for (const provider of this.queues.keys()){
                if (!this.processing.get(provider)) {
                    this.processQueue(provider);
                }
            }
        }, 1000);
    }
    // Public methods for monitoring
    getQueueStatus() {
        const status = {};
        for (const [provider, queue] of this.queues.entries()){
            const oldestRequest = queue.length > 0 ? queue[0].timestamp : undefined;
            status[provider] = {
                queueLength: queue.length,
                processing: this.processing.get(provider) || false,
                oldestRequest
            };
        }
        return status;
    }
    getRateLimitStatus() {
        const status = {};
        for (const [provider, state] of this.state.entries()){
            const limits = this.limits.get(provider);
            if (!limits) continue;
            const now = Date.now();
            this.cleanupOldEntries(state, now);
            const requestsInLastMinute = state.requests.length;
            const charactersToday = state.characters.reduce((sum, chars)=>sum + chars, 0);
            const requestUtilization = requestsInLastMinute / limits.requestsPerMinute * 100;
            const characterUtilization = charactersToday / limits.charactersPerDay * 100;
            const utilizationPercent = Math.max(requestUtilization, characterUtilization);
            status[provider] = {
                requestsInLastMinute,
                charactersToday,
                requestsPerMinuteLimit: limits.requestsPerMinute,
                charactersPerDayLimit: limits.charactersPerDay,
                utilizationPercent: Math.round(utilizationPercent)
            };
        }
        return status;
    }
    clearQueue(provider) {
        const queue = this.queues.get(provider);
        if (queue) {
            // Reject all pending requests
            for (const request of queue){
                request.reject(new Error("Queue cleared"));
            }
            queue.length = 0;
        }
    }
    clearAllQueues() {
        for (const provider of this.queues.keys()){
            this.clearQueue(provider);
        }
    }
    getEstimatedWaitTime(provider) {
        const queue = this.queues.get(provider);
        const limits = this.limits.get(provider);
        if (!queue || !limits || queue.length === 0) {
            return 0;
        }
        // Simple estimation: queue length / requests per minute * 60 seconds
        return Math.ceil(queue.length / limits.requestsPerMinute * 60);
    }
}
// Global rate limiter instance
let rateLimiterInstance = null;
const getRateLimiter = ()=>{
    if (!rateLimiterInstance) {
        rateLimiterInstance = new RateLimiter();
    }
    return rateLimiterInstance;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/school-bell-system/lib/ai-voice-service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AIVoiceService",
    ()=>AIVoiceService,
    "getAIVoiceService",
    ()=>getAIVoiceService,
    "initializeAIVoiceService",
    ()=>initializeAIVoiceService,
    "updateAIVoiceService",
    ()=>updateAIVoiceService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$ai$2d$voice$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/lib/ai-voice-types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$providers$2f$provider$2d$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/lib/providers/provider-factory.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$cache$2d$manager$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/lib/cache-manager.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$rate$2d$limiter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/lib/rate-limiter.ts [app-client] (ecmascript)");
;
;
;
;
class AIVoiceService {
    settings;
    providers = new Map();
    providerHealth = new Map();
    HEALTH_CHECK_INTERVAL = 5 * 60 * 1000 // 5 minutes
    ;
    MAX_CONSECUTIVE_FAILURES = 3;
    RETRY_BACKOFF_BASE = 2 * 60 * 1000 // 2 minutes
    ;
    constructor(settings){
        this.settings = settings;
        this.initializeProviders();
    }
    async updateSettings(settings) {
        this.settings = settings;
        await this.initializeProviders();
        // Update cache manager settings
        const cacheManager = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$cache$2d$manager$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCacheManager"])();
        cacheManager.updateSettings(settings);
        // Update rate limiter settings
        const rateLimiter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$rate$2d$limiter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRateLimiter"])();
        for (const [providerType, config] of Object.entries(settings.providerConfigs)){
            if (config.enabled) {
                rateLimiter.updateProviderLimits(providerType, config.rateLimit);
            }
        }
    }
    async initializeProviders() {
        this.providers.clear();
        this.providerHealth.clear();
        for (const [providerType, config] of Object.entries(this.settings.providerConfigs)){
            if (!config.enabled) continue;
            const type = providerType;
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$providers$2f$provider$2d$factory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createProviderSafely"])(type, config);
            if (result.provider) {
                this.providers.set(type, result.provider);
                this.providerHealth.set(type, {
                    healthy: true,
                    lastCheck: Date.now(),
                    consecutiveFailures: 0,
                    nextRetry: 0
                });
            } else {
                console.warn(`Failed to initialize ${type} provider:`, result.error);
                this.providerHealth.set(type, {
                    healthy: false,
                    lastCheck: Date.now(),
                    consecutiveFailures: 1,
                    nextRetry: Date.now() + this.RETRY_BACKOFF_BASE
                });
            }
        }
    }
    async generateSpeech(text, type, options) {
        if (!this.settings.aiVoiceEnabled) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$ai$2d$voice$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AIVoiceError"]("AI voice generation is disabled", "System", "DISABLED", false);
        }
        // Get voice profile for the type
        const voiceProfile = this.settings.voiceProfiles[type];
        if (!voiceProfile) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$ai$2d$voice$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AIVoiceError"](`No voice profile configured for type: ${type}`, "System", "CONFIG_ERROR", false);
        }
        // Build voice options
        const voiceOptions = {
            voice: options?.voice || voiceProfile.id,
            language: options?.language || voiceProfile.language,
            speed: options?.speed || 1.0,
            pitch: options?.pitch || 1.0,
            stability: options?.stability,
            clarity: options?.clarity
        };
        // Check cache first
        const cacheManager = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$cache$2d$manager$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCacheManager"])();
        const cachedAudio = await cacheManager.retrieveAudio(text, voiceProfile.id, voiceProfile.provider);
        if (cachedAudio) {
            return cachedAudio;
        }
        // Generate with provider failover
        const audioBuffer = await this.generateWithFailover(text, voiceOptions, voiceProfile);
        // Cache the result
        await cacheManager.storeAudio(text, voiceProfile.id, voiceProfile.provider, audioBuffer);
        return audioBuffer;
    }
    async generateWithFailover(text, options, voiceProfile) {
        const providers = this.getOrderedProviders(voiceProfile.provider);
        let lastError = null;
        const rateLimiter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$rate$2d$limiter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRateLimiter"])();
        for (const { type, provider } of providers){
            try {
                // Check if provider is healthy
                if (!await this.isProviderHealthy(type)) {
                    continue;
                }
                // Create generation request
                const request = {
                    id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
                    text,
                    type: 'general',
                    voice: voiceProfile,
                    options,
                    priority: 'normal',
                    timestamp: Date.now(),
                    status: 'pending',
                    retryCount: 0,
                    estimatedCost: provider.estimateCost(text, options.voice)
                };
                // Execute with rate limiting
                const audioBuffer = await rateLimiter.executeWithRateLimit(type, request, ()=>provider.generateSpeech(text, options));
                // Mark provider as healthy on success
                this.markProviderHealthy(type);
                return audioBuffer;
            } catch (error) {
                lastError = error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$ai$2d$voice$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AIVoiceError"] ? error : new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$ai$2d$voice$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ServiceUnavailableError"](type);
                // Handle different error types
                if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$ai$2d$voice$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RateLimitError"]) {
                    this.handleRateLimit(type, error.retryAfter);
                } else if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$ai$2d$voice$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthenticationError"]) {
                    this.markProviderUnhealthy(type);
                } else if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$ai$2d$voice$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ServiceUnavailableError"]) {
                    this.markProviderUnhealthy(type);
                }
                console.warn(`Provider ${type} failed:`, error);
            }
        }
        // All providers failed
        throw lastError || new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$ai$2d$voice$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AIVoiceError"]("All voice providers failed", "System", "ALL_PROVIDERS_FAILED", true);
    }
    getOrderedProviders(preferredProvider) {
        const providers = [];
        // Add all available providers with their priorities
        for (const [type, provider] of this.providers.entries()){
            const config = this.settings.providerConfigs[type];
            if (config?.enabled) {
                let priority = config.priority;
                // Boost priority for preferred provider
                if (type === preferredProvider) {
                    priority -= 100; // Lower number = higher priority
                }
                providers.push({
                    type,
                    provider,
                    priority
                });
            }
        }
        // Sort by priority (lower number = higher priority)
        providers.sort((a, b)=>a.priority - b.priority);
        return providers.map(({ type, provider })=>({
                type,
                provider
            }));
    }
    async isProviderHealthy(type) {
        const health = this.providerHealth.get(type);
        if (!health) return false;
        // If marked unhealthy and retry time hasn't passed, skip
        if (!health.healthy && Date.now() < health.nextRetry) {
            return false;
        }
        // If it's been a while since last check, do a health check
        if (Date.now() - health.lastCheck > this.HEALTH_CHECK_INTERVAL) {
            await this.performHealthCheck(type);
        }
        return this.providerHealth.get(type)?.healthy || false;
    }
    async performHealthCheck(type) {
        const provider = this.providers.get(type);
        const health = this.providerHealth.get(type);
        if (!provider || !health) return;
        try {
            const isValid = await provider.validateCredentials();
            if (isValid) {
                this.markProviderHealthy(type);
            } else {
                this.markProviderUnhealthy(type);
            }
        } catch (error) {
            this.markProviderUnhealthy(type);
        }
    }
    markProviderHealthy(type) {
        const health = this.providerHealth.get(type);
        if (health) {
            health.healthy = true;
            health.lastCheck = Date.now();
            health.consecutiveFailures = 0;
            health.nextRetry = 0;
        }
    }
    markProviderUnhealthy(type) {
        const health = this.providerHealth.get(type);
        if (health) {
            health.healthy = false;
            health.lastCheck = Date.now();
            health.consecutiveFailures += 1;
            // Exponential backoff for retry
            const backoffMultiplier = Math.pow(2, Math.min(health.consecutiveFailures - 1, 5));
            health.nextRetry = Date.now() + this.RETRY_BACKOFF_BASE * backoffMultiplier;
        }
    }
    handleRateLimit(type, retryAfter) {
        const health = this.providerHealth.get(type);
        if (health) {
            health.healthy = false;
            health.lastCheck = Date.now();
            health.nextRetry = Date.now() + (retryAfter ? retryAfter * 1000 : this.RETRY_BACKOFF_BASE);
        }
    }
    async getAvailableVoices() {
        const voices = {};
        for (const [type, provider] of this.providers.entries()){
            try {
                if (await this.isProviderHealthy(type)) {
                    voices[type] = await provider.getAvailableVoices();
                }
            } catch (error) {
                console.warn(`Failed to get voices from ${type}:`, error);
                voices[type] = [];
            }
        }
        return voices;
    }
    async validateAllProviders() {
        const results = {};
        for (const [type, provider] of this.providers.entries()){
            try {
                const isValid = await provider.validateCredentials();
                results[type] = {
                    valid: isValid
                };
                if (isValid) {
                    this.markProviderHealthy(type);
                } else {
                    this.markProviderUnhealthy(type);
                    results[type].error = "Invalid credentials";
                }
            } catch (error) {
                this.markProviderUnhealthy(type);
                results[type] = {
                    valid: false,
                    error: error instanceof Error ? error.message : "Unknown error"
                };
            }
        }
        return results;
    }
    getProviderHealth() {
        const health = {};
        for (const [type, healthInfo] of this.providerHealth.entries()){
            health[type] = {
                ...healthInfo
            };
        }
        return health;
    }
    async estimateCost(text, type) {
        const voiceProfile = this.settings.voiceProfiles[type];
        if (!voiceProfile) {
            return {
                provider: "unknown",
                cost: 0,
                cached: false
            };
        }
        // Check if already cached
        const cacheManager = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$cache$2d$manager$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCacheManager"])();
        const isCached = await cacheManager.hasAudio(text, voiceProfile.id, voiceProfile.provider);
        if (isCached) {
            return {
                provider: voiceProfile.provider,
                cost: 0,
                cached: true
            };
        }
        // Get provider and estimate cost
        const provider = this.providers.get(voiceProfile.provider);
        if (!provider) {
            return {
                provider: voiceProfile.provider,
                cost: 0,
                cached: false
            };
        }
        const cost = provider.estimateCost(text, voiceProfile.id);
        return {
            provider: voiceProfile.provider,
            cost,
            cached: false
        };
    }
    getSettings() {
        return {
            ...this.settings
        };
    }
    isEnabled() {
        return this.settings.aiVoiceEnabled;
    }
    hasHealthyProviders() {
        for (const health of this.providerHealth.values()){
            if (health.healthy) return true;
        }
        return false;
    }
    getRateLimitStatus() {
        const rateLimiter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$rate$2d$limiter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRateLimiter"])();
        return rateLimiter.getRateLimitStatus();
    }
    getQueueStatus() {
        const rateLimiter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$rate$2d$limiter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRateLimiter"])();
        return rateLimiter.getQueueStatus();
    }
    getEstimatedWaitTime(provider) {
        const rateLimiter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$rate$2d$limiter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRateLimiter"])();
        return rateLimiter.getEstimatedWaitTime(provider);
    }
}
// Global service instance
let aiVoiceServiceInstance = null;
const getAIVoiceService = ()=>{
    return aiVoiceServiceInstance;
};
const initializeAIVoiceService = (settings)=>{
    aiVoiceServiceInstance = new AIVoiceService(settings);
    return aiVoiceServiceInstance;
};
const updateAIVoiceService = async (settings)=>{
    if (aiVoiceServiceInstance) {
        await aiVoiceServiceInstance.updateSettings(settings);
    } else {
        initializeAIVoiceService(settings);
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/school-bell-system/lib/voice-fallback.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VoiceFallbackHandler",
    ()=>VoiceFallbackHandler,
    "getVoiceFallbackHandler",
    ()=>getVoiceFallbackHandler,
    "playAnnouncementWithFallback",
    ()=>playAnnouncementWithFallback,
    "playBellWithFallback",
    ()=>playBellWithFallback,
    "playPrayerCallWithFallback",
    ()=>playPrayerCallWithFallback,
    "playWithSmartFallback",
    ()=>playWithSmartFallback
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$ai$2d$voice$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/lib/ai-voice-service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$ai$2d$voice$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/lib/ai-voice-types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$voice$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/lib/voice-utils.ts [app-client] (ecmascript)");
;
;
;
class VoiceFallbackHandler {
    defaultOptions = {
        maxRetries: 2,
        retryDelay: 1000,
        preferAI: true,
        fallbackToTTS: true,
        logErrors: true
    };
    async playWithFallback(text, voice, language = "english", type = 'general', options) {
        const opts = {
            ...this.defaultOptions,
            ...options
        };
        const startTime = Date.now();
        let retries = 0;
        let lastError;
        // Determine playback strategy
        const strategies = this.getPlaybackStrategies(opts);
        for (const strategy of strategies){
            for(let attempt = 0; attempt <= opts.maxRetries; attempt++){
                try {
                    const success = await this.executeStrategy(strategy, text, voice, language, type);
                    if (success) {
                        const duration = Date.now() - startTime;
                        return {
                            success: true,
                            method: strategy,
                            provider: strategy === 'ai' ? await this.getActiveProvider(type) : undefined,
                            retries: attempt,
                            duration
                        };
                    }
                } catch (error) {
                    lastError = error instanceof Error ? error.message : 'Unknown error';
                    retries = attempt + 1;
                    if (opts.logErrors) {
                        console.warn(`[VoiceFallback] ${strategy} attempt ${attempt + 1} failed:`, lastError);
                    }
                    // Wait before retry (except on last attempt)
                    if (attempt < opts.maxRetries) {
                        await this.sleep(opts.retryDelay * (attempt + 1)); // Exponential backoff
                    }
                }
            }
        }
        // All strategies failed
        const duration = Date.now() - startTime;
        return {
            success: false,
            method: 'none',
            error: lastError || 'All playback methods failed',
            retries,
            duration
        };
    }
    getPlaybackStrategies(options) {
        const strategies = [];
        if (options.preferAI) {
            strategies.push('ai');
            strategies.push('network-tts');
            if (options.fallbackToTTS) {
                strategies.push('tts');
            }
        } else {
            strategies.push('network-tts');
            strategies.push('tts');
            if (options.preferAI) {
                strategies.push('ai');
            }
        }
        return strategies;
    }
    async executeStrategy(strategy, text, voice, language, type) {
        switch(strategy){
            case 'ai':
                return await this.tryAIVoice(text, type, {
                    voice,
                    language
                });
            case 'network-tts':
                return await this.tryNetworkTTS(text, language);
            case 'tts':
                return await this.tryBrowserTTS(text, voice, language);
            default:
                throw new Error(`Unknown strategy: ${strategy}`);
        }
    }
    async tryNetworkTTS(text, language) {
        const { playGoogleTTS } = await __turbopack_context__.A("[project]/Downloads/school-bell-system/lib/google-tts.ts [app-client] (ecmascript, async loader)");
        // Only use for short texts (< 200 chars) due to URL limits
        if (text.length > 200) return false;
        return await playGoogleTTS(text, language);
    }
    async tryAIVoice(text, type, options) {
        const aiVoiceService = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$ai$2d$voice$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAIVoiceService"])();
        // Quick availability check
        if (!aiVoiceService || !aiVoiceService.isEnabled()) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$ai$2d$voice$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AIVoiceError"]("AI voice service not available", "System", "SERVICE_UNAVAILABLE", false);
        }
        if (!aiVoiceService.hasHealthyProviders()) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$ai$2d$voice$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AIVoiceError"]("No healthy AI voice providers", "System", "NO_PROVIDERS", true);
        }
        // Generate and play AI voice
        const audioBuffer = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$voice$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateAIVoice"])(text, type, options);
        if (!audioBuffer) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$ai$2d$voice$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AIVoiceError"]("AI voice generation returned null", "System", "GENERATION_FAILED", true);
        }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$voice$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playAudioBuffer"])(audioBuffer);
        return true;
    }
    async tryBrowserTTS(text, voice, language) {
        // Check TTS availability
        if (("TURBOPACK compile-time value", "object") === "undefined" || !("speechSynthesis" in window) || !window.speechSynthesis) {
            throw new Error("Browser TTS not available");
        }
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$voice$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playBrowserTTS"])(text, voice, language);
        if (!result) {
            throw new Error("Browser TTS playback failed");
        }
        return true;
    }
    async getActiveProvider(type) {
        const aiVoiceService = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$ai$2d$voice$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAIVoiceService"])();
        if (!aiVoiceService) return undefined;
        const settings = aiVoiceService.getSettings();
        const voiceProfile = settings.voiceProfiles[type];
        return voiceProfile?.provider;
    }
    sleep(ms) {
        return new Promise((resolve)=>setTimeout(resolve, ms));
    }
    // Utility methods for system health checking
    async checkSystemHealth() {
        const aiStatus = await this.checkAIVoiceHealth();
        const ttsStatus = this.checkTTSHealth();
        let recommendation = 'none';
        if (aiStatus.available && ttsStatus.available) {
            recommendation = 'both';
        } else if (aiStatus.available) {
            recommendation = 'ai';
        } else if (ttsStatus.available) {
            recommendation = 'tts';
        }
        return {
            ai: aiStatus,
            tts: ttsStatus,
            recommendation
        };
    }
    async checkAIVoiceHealth() {
        try {
            const aiVoiceService = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$ai$2d$voice$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAIVoiceService"])();
            if (!aiVoiceService) {
                return {
                    available: false,
                    providers: [],
                    error: "AI voice service not initialized"
                };
            }
            if (!aiVoiceService.isEnabled()) {
                return {
                    available: false,
                    providers: [],
                    error: "AI voice disabled in settings"
                };
            }
            const health = aiVoiceService.getProviderHealth();
            const healthyProviders = Object.entries(health).filter(([_, status])=>status.healthy).map(([provider, _])=>provider);
            if (healthyProviders.length === 0) {
                return {
                    available: false,
                    providers: [],
                    error: "No healthy providers available"
                };
            }
            return {
                available: true,
                providers: healthyProviders
            };
        } catch (error) {
            return {
                available: false,
                providers: [],
                error: error instanceof Error ? error.message : "Unknown error"
            };
        }
    }
    checkTTSHealth() {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        if (!("speechSynthesis" in window)) {
            return {
                available: false,
                error: "Speech Synthesis API not supported"
            };
        }
        if (!window.speechSynthesis) {
            return {
                available: false,
                error: "Speech Synthesis API not available"
            };
        }
        return {
            available: true
        };
    }
    // Performance monitoring
    async measurePerformance(text, voice, language, type, iterations = 3) {
        const aiResults = [];
        const ttsResults = [];
        // Test AI voice performance
        for(let i = 0; i < iterations; i++){
            const startTime = Date.now();
            try {
                await this.tryAIVoice(text, type, {
                    voice,
                    language
                });
                aiResults.push({
                    time: Date.now() - startTime,
                    success: true
                });
            } catch (error) {
                aiResults.push({
                    time: Date.now() - startTime,
                    success: false,
                    error: error instanceof Error ? error.message : 'Unknown error'
                });
            }
            // Small delay between tests
            await this.sleep(500);
        }
        // Test TTS performance
        for(let i = 0; i < iterations; i++){
            const startTime = Date.now();
            try {
                await this.tryBrowserTTS(text, voice, language);
                ttsResults.push({
                    time: Date.now() - startTime,
                    success: true
                });
            } catch (error) {
                ttsResults.push({
                    time: Date.now() - startTime,
                    success: false,
                    error: error instanceof Error ? error.message : 'Unknown error'
                });
            }
            // Small delay between tests
            await this.sleep(500);
        }
        return {
            ai: {
                avgTime: aiResults.reduce((sum, r)=>sum + r.time, 0) / aiResults.length,
                successRate: aiResults.filter((r)=>r.success).length / aiResults.length * 100,
                errors: aiResults.filter((r)=>!r.success).map((r)=>r.error || 'Unknown')
            },
            tts: {
                avgTime: ttsResults.reduce((sum, r)=>sum + r.time, 0) / ttsResults.length,
                successRate: ttsResults.filter((r)=>r.success).length / ttsResults.length * 100,
                errors: ttsResults.filter((r)=>!r.success).map((r)=>r.error || 'Unknown')
            }
        };
    }
}
// Global fallback handler instance
let fallbackHandlerInstance = null;
const getVoiceFallbackHandler = ()=>{
    if (!fallbackHandlerInstance) {
        fallbackHandlerInstance = new VoiceFallbackHandler();
    }
    return fallbackHandlerInstance;
};
const playWithSmartFallback = async (text, voice, language = "english", type = 'general')=>{
    const handler = getVoiceFallbackHandler();
    const result = await handler.playWithFallback(text, voice, language, type);
    return result.success;
};
const playAnnouncementWithFallback = async (text)=>{
    return playWithSmartFallback(text, "standard-male", "english", "announcement");
};
const playPrayerCallWithFallback = async (prayerName)=>{
    const prayerText = `${prayerName} prayer time. Come and pray.`;
    return playWithSmartFallback(prayerText, "azan-islamic", "arabic", "prayer");
};
const playBellWithFallback = async (eventName)=>{
    const bellText = `Bell ring for ${eventName}`;
    return playWithSmartFallback(bellText, "standard-female", "english", "bell");
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/school-bell-system/lib/prayer-call-generator.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PrayerCallGenerator",
    ()=>PrayerCallGenerator,
    "generateSchoolPrayerCall",
    ()=>generateSchoolPrayerCall,
    "generateSimplePrayerCall",
    ()=>generateSimplePrayerCall,
    "generateTraditionalPrayerCall",
    ()=>generateTraditionalPrayerCall,
    "getPrayerCallGenerator",
    ()=>getPrayerCallGenerator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$ai$2d$voice$2d$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/lib/ai-voice-constants.ts [app-client] (ecmascript)");
;
class PrayerCallGenerator {
    TAKBIR = "الله أكبر الله أكبر" // Allahu Akbar Allahu Akbar
    ;
    TAKBIR_TRANSLITERATION = "Allahu Akbar Allahu Akbar";
    TAKBIR_ENGLISH = "Allah is the Greatest, Allah is the Greatest";
    BASMALA = "بسم الله الرحمن الرحيم" // Bismillah ar-Rahman ar-Raheem
    ;
    BASMALA_TRANSLITERATION = "Bismillah ar-Rahman ar-Raheem";
    BASMALA_ENGLISH = "In the name of Allah, the Most Gracious, the Most Merciful";
    SHAHADA = "أشهد أن لا إله إلا الله، أشهد أن محمداً رسول الله";
    SHAHADA_TRANSLITERATION = "Ashhadu an la ilaha illa Allah, Ashhadu anna Muhammadan rasul Allah";
    SHAHADA_ENGLISH = "I bear witness that there is no god but Allah, I bear witness that Muhammad is the messenger of Allah";
    generatePrayerCall(prayerName, options = {}) {
        const defaultOptions = {
            includeArabic: true,
            includeTransliteration: true,
            includeEnglish: true,
            includeBasmala: false,
            includeTakbir: true,
            customMessage: '',
            voiceStyle: 'traditional'
        };
        const opts = {
            ...defaultOptions,
            ...options
        };
        const prayer = prayerName.toLowerCase();
        const components = [];
        let arabicText = '';
        let transliterationText = '';
        let englishText = '';
        // Add Basmala if requested
        if (opts.includeBasmala) {
            if (opts.includeArabic) arabicText += this.BASMALA + '. ';
            if (opts.includeTransliteration) transliterationText += this.BASMALA_TRANSLITERATION + '. ';
            if (opts.includeEnglish) englishText += this.BASMALA_ENGLISH + '. ';
            components.push('basmala');
        }
        // Add Takbir if requested
        if (opts.includeTakbir) {
            if (opts.includeArabic) arabicText += this.TAKBIR + '. ';
            if (opts.includeTransliteration) transliterationText += this.TAKBIR_TRANSLITERATION + '. ';
            if (opts.includeEnglish) englishText += this.TAKBIR_ENGLISH + '. ';
            components.push('takbir');
        }
        // Add prayer-specific content
        const prayerContent = this.getPrayerSpecificContent(prayer);
        if (prayerContent) {
            if (opts.includeArabic) arabicText += prayerContent.arabic + '. ';
            if (opts.includeTransliteration) transliterationText += prayerContent.transliteration + '. ';
            if (opts.includeEnglish) englishText += prayerContent.english + '. ';
            components.push('prayer-call');
        }
        // Add Shahada for traditional style
        if (opts.voiceStyle === 'traditional') {
            if (opts.includeArabic) arabicText += this.SHAHADA + '. ';
            if (opts.includeTransliteration) transliterationText += this.SHAHADA_TRANSLITERATION + '. ';
            if (opts.includeEnglish) englishText += this.SHAHADA_ENGLISH + '. ';
            components.push('shahada');
        }
        // Add prayer time announcement
        const timeAnnouncement = this.getPrayerTimeAnnouncement(prayer);
        if (opts.includeEnglish) englishText += timeAnnouncement + '. ';
        components.push('time-announcement');
        // Add custom message if provided
        if (opts.customMessage) {
            if (opts.includeEnglish) englishText += opts.customMessage + '. ';
            components.push('custom-message');
        }
        // Create combined text based on style
        const combined = this.createCombinedText(arabicText.trim(), transliterationText.trim(), englishText.trim(), opts.voiceStyle);
        return {
            arabic: arabicText.trim(),
            transliteration: transliterationText.trim(),
            english: englishText.trim(),
            combined,
            metadata: {
                prayer: prayerName,
                timestamp: Date.now(),
                style: opts.voiceStyle,
                components
            }
        };
    }
    getPrayerSpecificContent(prayer) {
        const prayerData = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$ai$2d$voice$2d$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRAYER_PHRASES"][prayer];
        if (!prayerData) return null;
        return {
            arabic: prayerData.arabic,
            transliteration: prayerData.transliteration,
            english: prayerData.english
        };
    }
    getPrayerTimeAnnouncement(prayer) {
        const prayerNames = {
            fajr: "Fajr prayer time",
            dhuhr: "Dhuhr prayer time",
            asr: "Asr prayer time",
            maghrib: "Maghrib prayer time",
            isha: "Isha prayer time"
        };
        return prayerNames[prayer] || `${prayer.charAt(0).toUpperCase() + prayer.slice(1)} prayer time`;
    }
    createCombinedText(arabic, transliteration, english, style) {
        switch(style){
            case 'traditional':
                // Arabic first, then transliteration, then English
                return [
                    arabic,
                    transliteration,
                    english
                ].filter(Boolean).join(' ');
            case 'modern':
                // Mix Arabic and English for modern audiences
                return [
                    arabic,
                    english
                ].filter(Boolean).join(' ');
            case 'simple':
                // English only for simplicity
                return english;
            default:
                return [
                    arabic,
                    english
                ].filter(Boolean).join(' ');
        }
    }
    // Generate prayer call for specific times with contextual content
    generateContextualPrayerCall(prayerName, currentTime, options = {}) {
        const hour = currentTime.getHours();
        const contextualOptions = {
            ...options
        };
        // Add contextual elements based on time
        switch(prayerName.toLowerCase()){
            case 'fajr':
                // Dawn prayer - emphasize waking up
                contextualOptions.customMessage = "Wake up for the dawn prayer. Prayer is better than sleep.";
                break;
            case 'dhuhr':
                // Noon prayer - during work/school hours
                contextualOptions.customMessage = "Take a break from your activities for the noon prayer.";
                break;
            case 'asr':
                // Afternoon prayer
                contextualOptions.customMessage = "Time for the afternoon prayer before sunset.";
                break;
            case 'maghrib':
                // Sunset prayer - end of day
                contextualOptions.customMessage = "The sun has set. Time for Maghrib prayer.";
                break;
            case 'isha':
                // Night prayer
                contextualOptions.customMessage = "Complete your day with the night prayer.";
                break;
        }
        return this.generatePrayerCall(prayerName, contextualOptions);
    }
    // Generate prayer call with school-specific context
    generateSchoolPrayerCall(prayerName, schoolContext = {}, options = {}) {
        const contextualOptions = {
            ...options
        };
        if (schoolContext.isSchoolHours && schoolContext.hasStudents) {
            // School-specific messaging
            const schoolMessages = {
                fajr: "Students and staff, it's time for Fajr prayer before school begins.",
                dhuhr: "Students and staff, please proceed to the prayer area for Dhuhr prayer.",
                asr: "Students and staff, time for Asr prayer. Classes will resume after prayer.",
                maghrib: "Students and staff, Maghrib prayer time. School day is ending.",
                isha: "Students and staff, time for Isha prayer before going home."
            };
            const schoolMessage = schoolMessages[prayerName.toLowerCase()];
            if (schoolMessage) {
                contextualOptions.customMessage = schoolMessage;
            }
        }
        if (schoolContext.location) {
            contextualOptions.customMessage = (contextualOptions.customMessage || '') + ` Please gather at ${schoolContext.location}.`;
        }
        return this.generatePrayerCall(prayerName, contextualOptions);
    }
    // Generate multiple language versions
    generateMultilingualPrayerCall(prayerName, languages, options = {}) {
        const results = {};
        for (const language of languages){
            const langOptions = {
                ...options
            };
            switch(language){
                case 'arabic':
                    langOptions.includeArabic = true;
                    langOptions.includeEnglish = false;
                    langOptions.includeTransliteration = false;
                    break;
                case 'english':
                    langOptions.includeArabic = false;
                    langOptions.includeEnglish = true;
                    langOptions.includeTransliteration = true;
                    break;
                case 'hausa':
                case 'twi':
                    // For local languages, include English and transliteration
                    langOptions.includeArabic = true;
                    langOptions.includeEnglish = true;
                    langOptions.includeTransliteration = true;
                    // Add local language greeting
                    langOptions.customMessage = this.getLocalLanguageGreeting(language, prayerName);
                    break;
            }
            results[language] = this.generatePrayerCall(prayerName, langOptions);
        }
        return results;
    }
    getLocalLanguageGreeting(language, prayerName) {
        const greetings = {
            hausa: {
                fajr: "Lokacin sallah ta asuba ya yi. Ku zo mu yi sallah.",
                dhuhr: "Lokacin sallah ta rana ya yi. Ku zo mu yi sallah.",
                asr: "Lokacin sallah ta yamma ya yi. Ku zo mu yi sallah.",
                maghrib: "Lokacin sallah ta magariba ya yi. Ku zo mu yi sallah.",
                isha: "Lokacin sallah ta dare ya yi. Ku zo mu yi sallah."
            },
            twi: {
                fajr: "Anɔpa mpaebɔ berɛ aso. Mommra yɛn kɔ bɔ mpae.",
                dhuhr: "Awia mpaebɔ berɛ aso. Mommra yɛn kɔ bɔ mpae.",
                asr: "Anwummere mpaebɔ berɛ aso. Mommra yɛn kɔ bɔ mpae.",
                maghrib: "Anwummere mpaebɔ berɛ aso. Mommra yɛn kɔ bɔ mpae.",
                isha: "Anadwo mpaebɔ berɛ aso. Mommra yɛn kɔ bɔ mpae."
            }
        };
        return greetings[language]?.[prayerName.toLowerCase()] || `Time for ${prayerName} prayer. Come and pray.`;
    }
    // Validate prayer call content
    validatePrayerCall(content) {
        const errors = [];
        const warnings = [];
        // Check if content is not empty
        if (!content.combined.trim()) {
            errors.push("Prayer call content is empty");
        }
        // Check for minimum required components
        if (!content.metadata.components.includes('prayer-call')) {
            warnings.push("Prayer call does not include traditional prayer phrases");
        }
        if (!content.metadata.components.includes('time-announcement')) {
            warnings.push("Prayer call does not include time announcement");
        }
        // Check Arabic content if included
        if (content.arabic && !this.containsArabicText(content.arabic)) {
            warnings.push("Arabic content may not contain proper Arabic text");
        }
        // Check length (should not be too long for voice generation)
        if (content.combined.length > 1000) {
            warnings.push("Prayer call content is very long and may affect voice generation quality");
        }
        return {
            valid: errors.length === 0,
            errors,
            warnings
        };
    }
    containsArabicText(text) {
        // Check if text contains Arabic characters
        const arabicRegex = /[\u0600-\u06FF]/;
        return arabicRegex.test(text);
    }
    // Get prayer call statistics
    getContentStatistics(content) {
        const words = content.combined.split(/\s+/).filter((word)=>word.length > 0);
        return {
            totalLength: content.combined.length,
            arabicLength: content.arabic.length,
            englishLength: content.english.length,
            wordCount: words.length,
            estimatedDuration: Math.ceil(words.length * 0.6),
            components: content.metadata.components
        };
    }
}
// Global prayer call generator instance
let prayerCallGeneratorInstance = null;
const getPrayerCallGenerator = ()=>{
    if (!prayerCallGeneratorInstance) {
        prayerCallGeneratorInstance = new PrayerCallGenerator();
    }
    return prayerCallGeneratorInstance;
};
const generateSimplePrayerCall = (prayerName)=>{
    const generator = getPrayerCallGenerator();
    const content = generator.generatePrayerCall(prayerName, {
        voiceStyle: 'simple',
        includeArabic: false,
        includeTransliteration: false,
        includeEnglish: true
    });
    return content.combined;
};
const generateTraditionalPrayerCall = (prayerName)=>{
    const generator = getPrayerCallGenerator();
    const content = generator.generatePrayerCall(prayerName, {
        voiceStyle: 'traditional',
        includeBasmala: true,
        includeTakbir: true
    });
    return content.combined;
};
const generateSchoolPrayerCall = (prayerName, isSchoolHours = true)=>{
    const generator = getPrayerCallGenerator();
    const content = generator.generateSchoolPrayerCall(prayerName, {
        isSchoolHours,
        hasStudents: true,
        location: "prayer area"
    });
    return content.combined;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/school-bell-system/lib/voice-utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LANGUAGE_NAMES",
    ()=>LANGUAGE_NAMES,
    "VOICE_OPTIONS",
    ()=>VOICE_OPTIONS,
    "estimateVoiceCost",
    ()=>estimateVoiceCost,
    "generateAIVoice",
    ()=>generateAIVoice,
    "generatePrayerCallText",
    ()=>generatePrayerCallText,
    "getLanguageCode",
    ()=>getLanguageCode,
    "getTTSStatus",
    ()=>getTTSStatus,
    "getVoiceSystemStatus",
    ()=>getVoiceSystemStatus,
    "isAIVoiceAvailable",
    ()=>isAIVoiceAvailable,
    "isTTSAvailable",
    ()=>isTTSAvailable,
    "playAnnouncement",
    ()=>playAnnouncement,
    "playAudioBuffer",
    ()=>playAudioBuffer,
    "playAzanCall",
    ()=>playAzanCall,
    "playBrowserTTS",
    ()=>playBrowserTTS,
    "playTextToSpeech",
    ()=>playTextToSpeech,
    "translateMessage",
    ()=>translateMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$ai$2d$voice$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/lib/ai-voice-service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$ai$2d$voice$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/lib/ai-voice-types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$voice$2d$fallback$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/lib/voice-fallback.ts [app-client] (ecmascript)");
;
;
;
const VOICE_OPTIONS = {
    "standard-male": {
        name: "Standard Male",
        language: "english",
        description: "Clear English voice"
    },
    "standard-female": {
        name: "Standard Female",
        language: "english",
        description: "Clear English voice"
    },
    "azan-islamic": {
        name: "Islamic Azan",
        language: "arabic",
        description: "Islamic prayer call (Azan)"
    },
    hausa: {
        name: "Hausa",
        language: "hausa",
        description: "Native Hausa speaker"
    },
    twi: {
        name: "Twi",
        language: "twi",
        description: "Native Twi speaker"
    },
    arabic: {
        name: "Arabic",
        language: "arabic",
        description: "Native Arabic speaker"
    },
    // OpenAI Voices
    "openai-alloy": {
        name: "OpenAI Alloy",
        language: "english",
        description: "Neutral, balanced voice"
    },
    "openai-echo": {
        name: "OpenAI Echo",
        language: "english",
        description: "Warm, rounded male voice"
    },
    "openai-fable": {
        name: "OpenAI Fable",
        language: "english",
        description: "British accent, storytelling voice"
    },
    "openai-onyx": {
        name: "OpenAI Onyx",
        language: "english",
        description: "Deep, authoritative male voice"
    },
    "openai-nova": {
        name: "OpenAI Nova",
        language: "english",
        description: "Energetic female voice"
    },
    "openai-shimmer": {
        name: "OpenAI Shimmer",
        language: "english",
        description: "Clear, bright female voice"
    },
    // ElevenLabs Voices
    "elevenlabs-rachel": {
        name: "ElevenLabs Rachel",
        language: "english",
        description: "American female, narrative"
    },
    "elevenlabs-drew": {
        name: "ElevenLabs Drew",
        language: "english",
        description: "American male, news"
    },
    "elevenlabs-clyde": {
        name: "ElevenLabs Clyde",
        language: "english",
        description: "American male, deep"
    },
    "elevenlabs-paul": {
        name: "ElevenLabs Paul",
        language: "english",
        description: "American male, soft"
    },
    // Azure Voices
    "azure-jenny": {
        name: "Azure Jenny",
        language: "english",
        description: "American female, conversational"
    },
    "azure-guy": {
        name: "Azure Guy",
        language: "english",
        description: "American male, conversational"
    },
    "azure-aria": {
        name: "Azure Aria",
        language: "english",
        description: "American female, helpful"
    },
    "azure-davis": {
        name: "Azure Davis",
        language: "english",
        description: "American male, casual"
    }
};
const LANGUAGE_NAMES = {
    english: "English",
    hausa: "Hausa",
    twi: "Twi",
    arabic: "Arabic"
};
// Voice configuration with pitch and rate adjustments
const VOICE_CONFIG = {
    "standard-male": {
        pitch: 0.8,
        rate: 1.0,
        volume: 1
    },
    "standard-female": {
        pitch: 1.3,
        rate: 1.0,
        volume: 1
    },
    "azan-islamic": {
        pitch: 1.2,
        rate: 0.8,
        volume: 1
    },
    hausa: {
        pitch: 1.1,
        rate: 0.95,
        volume: 1
    },
    twi: {
        pitch: 1.05,
        rate: 0.95,
        volume: 1
    },
    arabic: {
        pitch: 1.2,
        rate: 0.9,
        volume: 1
    },
    // OpenAI Voices
    "openai-alloy": {
        pitch: 1.0,
        rate: 1.0,
        volume: 1
    },
    "openai-echo": {
        pitch: 1.0,
        rate: 1.0,
        volume: 1
    },
    "openai-fable": {
        pitch: 1.0,
        rate: 1.0,
        volume: 1
    },
    "openai-onyx": {
        pitch: 0.9,
        rate: 1.0,
        volume: 1
    },
    "openai-nova": {
        pitch: 1.0,
        rate: 1.0,
        volume: 1
    },
    "openai-shimmer": {
        pitch: 1.0,
        rate: 1.0,
        volume: 1
    },
    // ElevenLabs Voices
    "elevenlabs-rachel": {
        pitch: 1.0,
        rate: 1.0,
        volume: 1
    },
    "elevenlabs-drew": {
        pitch: 1.0,
        rate: 1.0,
        volume: 1
    },
    "elevenlabs-clyde": {
        pitch: 1.0,
        rate: 1.0,
        volume: 1
    },
    "elevenlabs-paul": {
        pitch: 1.0,
        rate: 1.0,
        volume: 1
    },
    // Azure Voices
    "azure-jenny": {
        pitch: 1.0,
        rate: 1.0,
        volume: 1
    },
    "azure-guy": {
        pitch: 1.0,
        rate: 1.0,
        volume: 1
    },
    "azure-aria": {
        pitch: 1.0,
        rate: 1.0,
        volume: 1
    },
    "azure-davis": {
        pitch: 1.0,
        rate: 1.0,
        volume: 1
    }
};
const playTextToSpeech = async (text, voice, language = "english", repeatCount)=>{
    // Get repeat count from store settings if not provided
    const { useStore } = await __turbopack_context__.A("[project]/Downloads/school-bell-system/lib/store.ts [app-client] (ecmascript, async loader)");
    const settings = useStore.getState().settings;
    const timesToRepeat = repeatCount ?? settings.defaultRepeatCount ?? 1;
    console.log(`[v0] Playing text ${timesToRepeat} time(s): "${text.substring(0, 50)}..."`);
    let allSuccessful = true;
    for(let i = 0; i < timesToRepeat; i++){
        console.log(`[v0] Playing repetition ${i + 1} of ${timesToRepeat}`);
        // Use the comprehensive fallback system
        const fallbackHandler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$voice$2d$fallback$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVoiceFallbackHandler"])();
        const result = await fallbackHandler.playWithFallback(text, voice, language, 'general', {
            maxRetries: 1,
            retryDelay: 500,
            preferAI: true,
            fallbackToTTS: true,
            logErrors: false // Keep console clean for regular usage
        });
        if (!result.success) {
            allSuccessful = false;
            console.error(`[v0] Repetition ${i + 1} failed`);
        }
        // Add delay between repetitions (except for the last one)
        if (i < timesToRepeat - 1) {
            await new Promise((resolve)=>setTimeout(resolve, 1000)); // 1 second delay
        }
    }
    console.log(`[v0] Completed ${timesToRepeat} repetitions. Success: ${allSuccessful}`);
    return allSuccessful;
};
const generateAIVoice = async (text, type = 'general', options)=>{
    try {
        const aiVoiceService = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$ai$2d$voice$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAIVoiceService"])();
        if (!aiVoiceService || !aiVoiceService.isEnabled()) {
            return null;
        }
        console.log("[v0] Generating AI voice - Text:", text.substring(0, 50), "Type:", type);
        const voiceOptions = {
            voice: options?.voice,
            language: options?.language,
            speed: options?.speed || 1.0,
            pitch: options?.pitch || 1.0
        };
        const audioBuffer = await aiVoiceService.generateSpeech(text, type, voiceOptions);
        console.log("[v0] AI voice generation successful");
        return audioBuffer;
    } catch (error) {
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$ai$2d$voice$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AIVoiceError"]) {
            console.error("[v0] AI Voice Error:", error.message, "Provider:", error.provider);
        } else {
            console.error("[v0] AI voice generation failed:", error);
        }
        return null;
    }
};
const playAudioBuffer = async (audioBuffer)=>{
    return new Promise((resolve, reject)=>{
        try {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            const audioContext = new AudioContext();
            const source = audioContext.createBufferSource();
            source.buffer = audioBuffer;
            source.connect(audioContext.destination);
            source.onended = ()=>{
                console.log("[v0] AI voice playback finished");
                resolve();
            };
            // Set up error handling with timeout as fallback
            const timeoutId = setTimeout(()=>{
                console.error("[v0] Audio playback timeout");
                reject(new Error("Audio playback timeout"));
            }, audioBuffer.duration * 1000 + 5000) // Buffer duration + 5 seconds
            ;
            source.onended = ()=>{
                clearTimeout(timeoutId);
                console.log("[v0] AI voice playback finished");
                resolve();
            };
            source.start(0);
            console.log("[v0] AI voice playback started");
        } catch (error) {
            console.error("[v0] Failed to play audio buffer:", error);
            reject(error);
        }
    });
};
const playBrowserTTS = async (text, voice, language = "english")=>{
    if (("TURBOPACK compile-time value", "object") === "undefined" || !("speechSynthesis" in window)) {
        console.error("[v0] Speech Synthesis not supported in this browser");
        return false;
    }
    // Check if speech synthesis is available and not disabled
    if (!window.speechSynthesis) {
        console.error("[v0] Speech Synthesis API is not available");
        return false;
    }
    // Ensure voices are loaded
    let voices = window.speechSynthesis.getVoices();
    if (voices.length === 0) {
        await new Promise((resolve)=>{
            const onVoicesChanged = ()=>{
                voices = window.speechSynthesis.getVoices();
                window.speechSynthesis.removeEventListener('voiceschanged', onVoicesChanged);
                resolve();
            };
            window.speechSynthesis.addEventListener('voiceschanged', onVoicesChanged);
            // Fallback timeout in case voiceschanged never fires
            setTimeout(resolve, 1000);
        });
    }
    return new Promise((resolve)=>{
        try {
            // Only cancel if nothing is currently speaking
            // This allows sequential playback for repetitions
            if (!window.speechSynthesis.speaking) {
                window.speechSynthesis.cancel();
            }
            const utterance = new SpeechSynthesisUtterance(text);
            const config = VOICE_CONFIG[voice];
            const langCode = getLanguageCode(language);
            console.log("[v0] Available Browser Voices:", voices.map((v)=>`${v.name} (${v.lang})`));
            let selectedBrowserVoice;
            // Helper to find voice by name or gender
            const findVoice = (keywords, gender)=>{
                // First try to find a voice that matches both language and keywords
                let match = voices.find((v)=>v.lang.startsWith(langCode.split('-')[0]) && keywords.some((k)=>v.name.toLowerCase().includes(k)));
                // If no specific match, try to find any voice of the correct gender for the language
                if (!match) {
                    // Common identifiers for gender in voice names
                    const maleIdentifiers = [
                        'male',
                        'david',
                        'james',
                        'daniel',
                        'mark',
                        'george'
                    ];
                    const femaleIdentifiers = [
                        'female',
                        'zira',
                        'samantha',
                        'susan',
                        'hazel',
                        'heather'
                    ];
                    const targetIdentifiers = gender === 'male' ? maleIdentifiers : femaleIdentifiers;
                    match = voices.find((v)=>v.lang.startsWith(langCode.split('-')[0]) && targetIdentifiers.some((id)=>v.name.toLowerCase().includes(id)));
                }
                return match;
            };
            // Map AI voices to browser voice characteristics
            if (voice === 'openai-onyx' || voice === 'openai-echo' || voice === 'standard-male' || voice === 'azure-guy' || voice === 'azure-davis' || voice === 'elevenlabs-clyde' || voice === 'elevenlabs-drew' || voice === 'elevenlabs-paul') {
                // Look for male voices
                selectedBrowserVoice = findVoice([
                    'male',
                    'david',
                    'james',
                    'daniel'
                ], 'male');
            } else if (voice === 'openai-nova' || voice === 'openai-shimmer' || voice === 'openai-alloy' || voice === 'standard-female' || voice === 'azure-jenny' || voice === 'azure-aria' || voice === 'elevenlabs-rachel') {
                // Look for female voices
                selectedBrowserVoice = findVoice([
                    'female',
                    'zira',
                    'samantha',
                    'google us english'
                ], 'female');
            }
            // If specific match found, use it. Otherwise let browser default for language.
            if (selectedBrowserVoice) {
                utterance.voice = selectedBrowserVoice;
                console.log(`[v0] Selected browser voice: ${selectedBrowserVoice.name}`);
            } else {
                console.log(`[v0] No specific voice match found, using browser default for ${langCode}`);
            }
            utterance.pitch = config.pitch;
            utterance.rate = config.rate;
            utterance.volume = config.volume;
            utterance.lang = langCode;
            console.log("[v0] Playing Browser TTS - Text:", text.substring(0, 50), "Voice:", voice, "Lang:", langCode);
            // Event handlers
            utterance.onstart = ()=>{
                console.log("[v0] Browser TTS started");
            };
            utterance.onend = ()=>{
                console.log("[v0] Browser TTS finished");
                resolve(true);
            };
            utterance.onerror = (event)=>{
                console.error("[v0] Browser TTS error:", event.error);
                resolve(false);
            };
            // Speak immediately
            window.speechSynthesis.speak(utterance);
        } catch (error) {
            console.error("[v0] Browser TTS Error:", error);
            resolve(false);
        }
    });
};
const getLanguageCode = (language)=>{
    const codes = {
        english: "en-US",
        hausa: "ha",
        twi: "ak",
        arabic: "ar"
    };
    return codes[language] || "en-US";
};
const translateMessage = (text, targetLanguage)=>{
    // Simple translation dictionary for common messages
    const translations = {
        english: {},
        hausa: {
            "should report to the office": "ya kamata ya je ofis",
            "your parent is waiting at the gate": "mahaifiyar ku tana jira a baje",
            "please come to the staff common room": "zo gida mai aiki da fushi",
            "report to the headteacher's office now": "je ofis mai shugaba yanzu"
        },
        twi: {
            "should report to the office": "forow kye ofis no",
            "your parent is waiting at the gate": "wo/wo maame/papa retua wɔ apon no",
            "please come to the staff common room": "ba stamfo no",
            "report to the headteacher's office now": "kɔ ofis osofo mu"
        },
        arabic: {
            "should report to the office": "يجب أن تتوجه إلى المكتب",
            "your parent is waiting at the gate": "والدك ينتظر عند البوابة",
            "please come to the staff common room": "يرجى الحضور إلى غرفة الموظفين",
            "report to the headteacher's office now": "توجه إلى مكتب مدير المدرسة الآن"
        }
    };
    if (targetLanguage === "english") return text;
    let translated = text;
    const trans = translations[targetLanguage] || {};
    Object.entries(trans).forEach(([en, local])=>{
        translated = translated.replace(new RegExp(en, "gi"), local);
    });
    return translated;
};
const isTTSAvailable = ()=>{
    return ("TURBOPACK compile-time value", "object") !== "undefined" && "speechSynthesis" in window && !!window.speechSynthesis;
};
const getTTSStatus = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if (!("speechSynthesis" in window)) {
        return {
            available: false,
            message: "Speech Synthesis not supported in this browser"
        };
    }
    if (!window.speechSynthesis) {
        return {
            available: false,
            message: "Speech Synthesis API is not available"
        };
    }
    return {
        available: true,
        message: "TTS is ready"
    };
};
const getVoiceSystemStatus = async ()=>{
    const aiVoiceService = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$ai$2d$voice$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAIVoiceService"])();
    const ttsStatus = getTTSStatus();
    const fallbackHandler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$voice$2d$fallback$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVoiceFallbackHandler"])();
    let aiVoiceStatus = {
        available: false,
        message: "AI voice not initialized"
    };
    let providers = [];
    if (aiVoiceService) {
        if (aiVoiceService.isEnabled()) {
            const hasHealthy = aiVoiceService.hasHealthyProviders();
            if (hasHealthy) {
                aiVoiceStatus = {
                    available: true,
                    message: "AI voice ready"
                };
                // Get available providers
                const health = aiVoiceService.getProviderHealth();
                providers = Object.entries(health).filter(([_, status])=>status.healthy).map(([provider, _])=>provider);
            } else {
                aiVoiceStatus = {
                    available: false,
                    message: "No healthy AI voice providers"
                };
            }
        } else {
            aiVoiceStatus = {
                available: false,
                message: "AI voice disabled"
            };
        }
    }
    // Get fallback system health
    const fallbackHealth = await fallbackHandler.checkSystemHealth();
    const recommended = aiVoiceStatus.available ? 'ai' : ttsStatus.available ? 'tts' : 'none';
    return {
        aiVoice: {
            ...aiVoiceStatus,
            providers
        },
        browserTTS: ttsStatus,
        fallback: {
            available: fallbackHealth.recommendation !== 'none',
            recommendation: fallbackHealth.recommendation
        },
        recommended
    };
};
const isAIVoiceAvailable = (type = 'general')=>{
    const aiVoiceService = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$ai$2d$voice$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAIVoiceService"])();
    if (!aiVoiceService || !aiVoiceService.isEnabled()) {
        return false;
    }
    const settings = aiVoiceService.getSettings();
    const voiceProfile = settings.voiceProfiles[type];
    if (!voiceProfile) {
        return false;
    }
    const health = aiVoiceService.getProviderHealth();
    const providerHealth = health[voiceProfile.provider];
    return providerHealth?.healthy || false;
};
const estimateVoiceCost = async (text, type = 'general')=>{
    const aiVoiceService = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$ai$2d$voice$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAIVoiceService"])();
    if (!aiVoiceService || !aiVoiceService.isEnabled()) {
        return null;
    }
    try {
        return await aiVoiceService.estimateCost(text, type);
    } catch (error) {
        console.error("[v0] Cost estimation failed:", error);
        return null;
    }
};
const playAnnouncement = async (text, voice, language, repeatCount)=>{
    const { useStore } = await __turbopack_context__.A("[project]/Downloads/school-bell-system/lib/store.ts [app-client] (ecmascript, async loader)");
    const settings = useStore.getState().settings;
    const selectedVoice = voice || settings.defaultVoice;
    const selectedLanguage = language || settings.defaultLanguage;
    const timesToRepeat = repeatCount ?? settings.defaultRepeatCount ?? 1;
    console.log(`[v0] Playing announcement ${timesToRepeat} time(s)`);
    let allSuccessful = true;
    for(let i = 0; i < timesToRepeat; i++){
        console.log(`[v0] Announcement repetition ${i + 1} of ${timesToRepeat}`);
        const fallbackHandler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$voice$2d$fallback$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVoiceFallbackHandler"])();
        const result = await fallbackHandler.playWithFallback(text, selectedVoice, selectedLanguage, 'announcement', {
            maxRetries: 2,
            retryDelay: 1000,
            preferAI: true,
            fallbackToTTS: true,
            logErrors: true
        });
        if (!result.success) {
            allSuccessful = false;
            console.error(`[v0] Announcement repetition ${i + 1} failed`);
        }
        // Add delay between repetitions (except for the last one)
        if (i < timesToRepeat - 1) {
            await new Promise((resolve)=>setTimeout(resolve, 2000)); // 2 second delay for announcements
        }
    }
    console.log(`[v0] Announcement completed. ${timesToRepeat} repetitions. Success: ${allSuccessful}`);
    return allSuccessful;
};
const playAzanCall = async (prayerName)=>{
    // Enhanced prayer call with traditional Islamic phrases
    const azanText = generatePrayerCallText(prayerName);
    // Use the comprehensive fallback system with prayer-specific settings
    const fallbackHandler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$voice$2d$fallback$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVoiceFallbackHandler"])();
    const result = await fallbackHandler.playWithFallback(azanText, "azan-islamic", "arabic", 'prayer', {
        maxRetries: 2,
        retryDelay: 1000,
        preferAI: true,
        fallbackToTTS: true,
        logErrors: true // Log errors for prayer calls
    });
    if (result.success) {
        console.log(`[v0] Prayer call played successfully using ${result.method} (${result.provider || 'browser'})`);
    } else {
        console.error(`[v0] Prayer call failed: ${result.error}`);
    }
    return result.success;
};
const generatePrayerCallText = (prayerName)=>{
    // Import here to avoid circular dependencies
    const { generateSchoolPrayerCall } = __turbopack_context__.r("[project]/Downloads/school-bell-system/lib/prayer-call-generator.ts [app-client] (ecmascript)");
    // Generate school-appropriate prayer call
    return generateSchoolPrayerCall(prayerName, true);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/school-bell-system/lib/bell-sounds.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Bell Sound Generation using Web Audio API
 * Generates pleasant tones for different bell types
 */ __turbopack_context__.s([
    "playBellSound",
    ()=>playBellSound
]);
const playBellSound = (type)=>{
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    switch(type){
        case 'bell':
            playSchoolBell(audioContext);
            break;
        case 'announcement':
            playAnnouncementTone(audioContext);
            break;
        case 'chime':
            playChime(audioContext);
            break;
        case 'electronic-bell':
            playElectronicBell(audioContext);
            break;
        case 'westminster-chimes':
            playWestminsterChimes(audioContext);
            break;
        case 'double-ring':
            playDoubleRing(audioContext);
            break;
        case 'triple-ring':
            playTripleRing(audioContext);
            break;
        case 'long-ring':
            playLongRing(audioContext);
            break;
        case 'emergency-alert':
            playEmergencyAlert(audioContext);
            break;
        case 'dismissal-bell':
            playDismissalBell(audioContext);
            break;
        case 'adhan-call':
            playAdhanCall(audioContext);
            break;
        case 'islamic-chime':
            playIslamicChime(audioContext);
            break;
        case 'prayer-bell':
            playPrayerBell(audioContext);
            break;
        // New natural school bell sounds
        case 'classic-hand-bell':
            playClassicHandBell(audioContext);
            break;
        case 'brass-school-bell':
            playBrassSchoolBell(audioContext);
            break;
        case 'vintage-bell':
            playVintageBell(audioContext);
            break;
        case 'mechanical-bell':
            playMechanicalBell(audioContext);
            break;
        case 'fire-alarm-bell':
            playFireAlarmBell(audioContext);
            break;
        case 'recess-bell':
            playRecessBell(audioContext);
            break;
    }
};
/**
 * Traditional school bell sound
 * Multiple harmonics with decay for realistic bell tone
 */ const playSchoolBell = (audioContext)=>{
    const now = audioContext.currentTime;
    const duration = 2.5;
    // Create multiple oscillators for rich bell sound
    const frequencies = [
        800,
        1000,
        1200,
        1600
    ] // Harmonics
    ;
    const gains = [
        0.3,
        0.5,
        0.2,
        0.1
    ];
    frequencies.forEach((freq, index)=>{
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(freq, now);
        // Exponential decay for realistic bell
        gainNode.gain.setValueAtTime(gains[index], now);
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + duration);
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        oscillator.start(now);
        oscillator.stop(now + duration);
    });
};
/**
 * Modern electronic bell/buzzer
 * Sharp, clear electronic tone
 */ const playElectronicBell = (audioContext)=>{
    const now = audioContext.currentTime;
    const beepDuration = 0.15;
    const beepCount = 3;
    const gap = 0.1;
    for(let i = 0; i < beepCount; i++){
        const startTime = now + (beepDuration + gap) * i;
        createTone(audioContext, 1200, startTime, beepDuration, 0.4, 'square');
    }
};
/**
 * Westminster chimes (like Big Ben)
 * Classic four-note chime sequence
 */ const playWestminsterChimes = (audioContext)=>{
    const now = audioContext.currentTime;
    const noteDuration = 0.6;
    const gap = 0.1;
    // Westminster quarter chime notes (E-C-D-G)
    const notes = [
        659.25,
        523.25,
        587.33,
        783.99
    ];
    notes.forEach((freq, index)=>{
        const startTime = now + (noteDuration + gap) * index;
        createChimeTone(audioContext, freq, startTime, noteDuration + 0.8, 0.3);
    });
};
/**
 * Double ring - two quick rings
 */ const playDoubleRing = (audioContext)=>{
    const now = audioContext.currentTime;
    const ringDuration = 0.8;
    const gap = 0.3;
    // First ring
    playSchoolBellAtTime(audioContext, now, ringDuration);
    // Second ring
    playSchoolBellAtTime(audioContext, now + ringDuration + gap, ringDuration);
};
/**
 * Triple ring - three quick rings
 */ const playTripleRing = (audioContext)=>{
    const now = audioContext.currentTime;
    const ringDuration = 0.6;
    const gap = 0.2;
    for(let i = 0; i < 3; i++){
        playSchoolBellAtTime(audioContext, now + (ringDuration + gap) * i, ringDuration);
    }
};
/**
 * Long continuous ring
 */ const playLongRing = (audioContext)=>{
    const now = audioContext.currentTime;
    const duration = 4.0;
    const frequencies = [
        800,
        1000,
        1200,
        1600
    ];
    const gains = [
        0.25,
        0.4,
        0.15,
        0.08
    ];
    frequencies.forEach((freq, index)=>{
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(freq, now);
        // Sustained with slow fade
        gainNode.gain.setValueAtTime(gains[index], now);
        gainNode.gain.setValueAtTime(gains[index], now + duration - 0.5);
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + duration);
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        oscillator.start(now);
        oscillator.stop(now + duration);
    });
};
/**
 * Emergency alert - urgent siren-like sound
 */ const playEmergencyAlert = (audioContext)=>{
    const now = audioContext.currentTime;
    const cycleDuration = 0.4;
    const cycles = 6;
    for(let i = 0; i < cycles; i++){
        const startTime = now + cycleDuration * i;
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        oscillator.type = 'sawtooth';
        // Sweep from high to low
        oscillator.frequency.setValueAtTime(1400, startTime);
        oscillator.frequency.exponentialRampToValueAtTime(700, startTime + cycleDuration);
        gainNode.gain.setValueAtTime(0.5, startTime);
        gainNode.gain.setValueAtTime(0.5, startTime + cycleDuration - 0.05);
        gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + cycleDuration);
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        oscillator.start(startTime);
        oscillator.stop(startTime + cycleDuration);
    }
};
/**
 * Dismissal bell - cheerful ascending melody
 */ const playDismissalBell = (audioContext)=>{
    const now = audioContext.currentTime;
    const noteDuration = 0.3;
    const gap = 0.05;
    // Happy ascending scale (C-D-E-G-C)
    const notes = [
        523.25,
        587.33,
        659.25,
        783.99,
        1046.50
    ];
    notes.forEach((freq, index)=>{
        const startTime = now + (noteDuration + gap) * index;
        createChimeTone(audioContext, freq, startTime, noteDuration + 0.4, 0.3);
    });
};
/**
 * Attention-getting announcement tone
 * Two-tone alert sound
 */ const playAnnouncementTone = (audioContext)=>{
    const now = audioContext.currentTime;
    const toneDuration = 0.3;
    const gap = 0.1;
    // First tone (higher)
    createTone(audioContext, 1000, now, toneDuration, 0.4);
    // Second tone (lower)
    createTone(audioContext, 800, now + toneDuration + gap, toneDuration, 0.4);
    // Repeat for emphasis
    createTone(audioContext, 1000, now + (toneDuration + gap) * 2, toneDuration, 0.3);
    createTone(audioContext, 800, now + (toneDuration + gap) * 3, toneDuration, 0.3);
};
/**
 * Soft melodic chime
 * Pleasant ascending notes
 */ const playChime = (audioContext)=>{
    const now = audioContext.currentTime;
    const noteDuration = 0.4;
    const gap = 0.05;
    // Ascending melody (C-E-G chord)
    const notes = [
        523.25,
        659.25,
        783.99
    ] // C5, E5, G5
    ;
    notes.forEach((freq, index)=>{
        const startTime = now + (noteDuration + gap) * index;
        createChimeTone(audioContext, freq, startTime, noteDuration + 0.5, 0.25);
    });
};
/**
 * Helper function to play school bell at specific time
 */ const playSchoolBellAtTime = (audioContext, startTime, duration)=>{
    const frequencies = [
        800,
        1000,
        1200,
        1600
    ];
    const gains = [
        0.3,
        0.5,
        0.2,
        0.1
    ];
    frequencies.forEach((freq, index)=>{
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(freq, startTime);
        gainNode.gain.setValueAtTime(gains[index], startTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + duration);
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        oscillator.start(startTime);
        oscillator.stop(startTime + duration);
    });
};
/**
 * Helper function to create a simple tone
 */ const createTone = (audioContext, frequency, startTime, duration, volume, type = 'sine')=>{
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, startTime);
    gainNode.gain.setValueAtTime(volume, startTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + duration);
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    oscillator.start(startTime);
    oscillator.stop(startTime + duration);
};
/**
 * Helper function to create a chime tone with harmonics
 */ const createChimeTone = (audioContext, frequency, startTime, duration, volume)=>{
    // Fundamental frequency
    const oscillator1 = audioContext.createOscillator();
    const gainNode1 = audioContext.createGain();
    oscillator1.type = 'sine';
    oscillator1.frequency.setValueAtTime(frequency, startTime);
    gainNode1.gain.setValueAtTime(volume, startTime);
    gainNode1.gain.exponentialRampToValueAtTime(0.01, startTime + duration);
    oscillator1.connect(gainNode1);
    gainNode1.connect(audioContext.destination);
    // Add subtle harmonic for richness
    const oscillator2 = audioContext.createOscillator();
    const gainNode2 = audioContext.createGain();
    oscillator2.type = 'sine';
    oscillator2.frequency.setValueAtTime(frequency * 2, startTime);
    gainNode2.gain.setValueAtTime(volume * 0.2, startTime);
    gainNode2.gain.exponentialRampToValueAtTime(0.01, startTime + duration);
    oscillator2.connect(gainNode2);
    gainNode2.connect(audioContext.destination);
    oscillator1.start(startTime);
    oscillator1.stop(startTime + duration);
    oscillator2.start(startTime);
    oscillator2.stop(startTime + duration);
};
/**
 * Adhan Call - Islamic call to prayer tone
 * Reverent, melodic tone inspired by the call to prayer
 */ const playAdhanCall = (audioContext)=>{
    const now = audioContext.currentTime;
    const noteDuration = 0.8;
    const gap = 0.15;
    // Melodic sequence inspired by traditional Adhan intervals
    // Using maqam-like intervals (Middle Eastern scale)
    const notes = [
        440.00,
        493.88,
        523.25,
        587.33,
        523.25,
        493.88,
        440.00 // A (return to root)
    ];
    notes.forEach((freq, index)=>{
        const startTime = now + (noteDuration + gap) * index;
        createPrayerTone(audioContext, freq, startTime, noteDuration + 1.0, 0.25);
    });
};
/**
 * Islamic Chime - Gentle reminder for prayer times
 * Soft, respectful chime
 */ const playIslamicChime = (audioContext)=>{
    const now = audioContext.currentTime;
    const noteDuration = 0.5;
    const gap = 0.1;
    // Peaceful descending pattern
    const notes = [
        783.99,
        659.25,
        523.25,
        392.00 // G4
    ];
    notes.forEach((freq, index)=>{
        const startTime = now + (noteDuration + gap) * index;
        createPrayerTone(audioContext, freq, startTime, noteDuration + 0.8, 0.2);
    });
};
/**
 * Prayer Bell - Simple, reverent bell for prayer time
 * Single sustained tone with gentle decay
 */ const playPrayerBell = (audioContext)=>{
    const now = audioContext.currentTime;
    const duration = 3.0;
    // Lower, more reverent frequencies
    const frequencies = [
        440,
        550,
        660
    ] // A, C#, E (harmonious triad)
    ;
    const gains = [
        0.3,
        0.2,
        0.1
    ];
    frequencies.forEach((freq, index)=>{
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(freq, now);
        // Gentle, sustained tone with slow decay
        gainNode.gain.setValueAtTime(gains[index], now);
        gainNode.gain.setValueAtTime(gains[index] * 0.8, now + duration * 0.7);
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + duration);
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        oscillator.start(now);
        oscillator.stop(now + duration);
    });
};
/**
 * Helper function to create prayer tones with warm character
 */ const createPrayerTone = (audioContext, frequency, startTime, duration, volume)=>{
    // Fundamental with warm character
    const oscillator1 = audioContext.createOscillator();
    const gainNode1 = audioContext.createGain();
    oscillator1.type = 'sine';
    oscillator1.frequency.setValueAtTime(frequency, startTime);
    // Gentle attack and decay
    gainNode1.gain.setValueAtTime(0.01, startTime);
    gainNode1.gain.exponentialRampToValueAtTime(volume, startTime + 0.1);
    gainNode1.gain.setValueAtTime(volume * 0.7, startTime + duration * 0.6);
    gainNode1.gain.exponentialRampToValueAtTime(0.01, startTime + duration);
    oscillator1.connect(gainNode1);
    gainNode1.connect(audioContext.destination);
    // Add subtle lower harmonic for warmth
    const oscillator2 = audioContext.createOscillator();
    const gainNode2 = audioContext.createGain();
    oscillator2.type = 'sine';
    oscillator2.frequency.setValueAtTime(frequency * 0.5, startTime);
    gainNode2.gain.setValueAtTime(0.01, startTime);
    gainNode2.gain.exponentialRampToValueAtTime(volume * 0.15, startTime + 0.1);
    gainNode2.gain.exponentialRampToValueAtTime(0.01, startTime + duration);
    oscillator2.connect(gainNode2);
    gainNode2.connect(audioContext.destination);
    oscillator1.start(startTime);
    oscillator1.stop(startTime + duration);
    oscillator2.start(startTime);
    oscillator2.stop(startTime + duration);
};
// ============================================================================
// NEW NATURAL SCHOOL BELL SOUNDS
// ============================================================================
/**
 * Classic Hand Bell - Traditional teacher's hand bell
 * High-pitched metallic ring with natural decay
 * Mimics the sound of a brass hand bell being rung
 */ const playClassicHandBell = (audioContext)=>{
    const now = audioContext.currentTime;
    const duration = 3.0;
    // Hand bells have a bright, high-pitched fundamental with many harmonics
    const frequencies = [
        1200,
        2400,
        3600,
        4800,
        6000,
        7200
    ];
    const gains = [
        0.4,
        0.25,
        0.15,
        0.1,
        0.06,
        0.04
    ];
    frequencies.forEach((freq, index)=>{
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        // Mix of sine and triangle for metallic quality
        oscillator.type = index < 2 ? 'triangle' : 'sine';
        oscillator.frequency.setValueAtTime(freq, now);
        // Quick attack, long decay - characteristic of hand bells
        gainNode.gain.setValueAtTime(0.01, now);
        gainNode.gain.exponentialRampToValueAtTime(gains[index], now + 0.02);
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + duration);
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        oscillator.start(now);
        oscillator.stop(now + duration);
    });
    // Add slight metallic shimmer with noise
    addMetallicShimmer(audioContext, now, 0.5, 0.08);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/school-bell-system/lib/combined-audio.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CombinedAudioPlayer",
    ()=>CombinedAudioPlayer,
    "generateVoiceMessage",
    ()=>generateVoiceMessage,
    "getToneForTaskType",
    ()=>getToneForTaskType,
    "playAnnouncementTone",
    ()=>playAnnouncementTone,
    "playBreakChime",
    ()=>playBreakChime,
    "playClassBell",
    ()=>playClassBell,
    "playEmergencyAlert",
    ()=>playEmergencyAlert,
    "playHighQualityAnnouncement",
    ()=>playHighQualityAnnouncement,
    "playNormalAnnouncement",
    ()=>playNormalAnnouncement,
    "playTaskAudio",
    ()=>playTaskAudio,
    "playToneAndAnnouncement",
    ()=>playToneAndAnnouncement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$bell$2d$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/lib/bell-sounds.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$voice$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/lib/voice-utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/lib/store.ts [app-client] (ecmascript)");
;
;
;
class CombinedAudioPlayer {
    static async playToneAndAnnouncement(taskName, options = {}) {
        const settings = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"].getState().settings;
        const { tone = "bell", voice = settings.defaultVoice, language = settings.defaultLanguage, repeatCount = settings.defaultRepeatCount, delayBetweenToneAndVoice = 1500, delayBetweenRepeats = 3000 } = options;
        console.log(`[CombinedAudio] Playing ${repeatCount} time(s): ${tone} + "${taskName}"`);
        let allSuccessful = true;
        for(let i = 0; i < repeatCount; i++){
            console.log(`[CombinedAudio] Repetition ${i + 1} of ${repeatCount}`);
            try {
                // 1. Play the tone first
                console.log(`[CombinedAudio] Playing ${tone} tone...`);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$bell$2d$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playBellSound"])(tone);
                // 2. Wait for tone to finish
                await new Promise((resolve)=>setTimeout(resolve, delayBetweenToneAndVoice));
                // 3. Play voice announcement
                console.log(`[CombinedAudio] Playing voice announcement: "${taskName}"`);
                const voiceSuccess = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$voice$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playAnnouncement"])(taskName, voice, language, 1) // Single announcement per repetition
                ;
                if (!voiceSuccess) {
                    allSuccessful = false;
                    console.error(`[CombinedAudio] Voice announcement failed for repetition ${i + 1}`);
                }
                // 4. Wait between repetitions (except for the last one)
                if (i < repeatCount - 1) {
                    console.log(`[CombinedAudio] Waiting ${delayBetweenRepeats}ms before next repetition...`);
                    await new Promise((resolve)=>setTimeout(resolve, delayBetweenRepeats));
                }
            } catch (error) {
                allSuccessful = false;
                console.error(`[CombinedAudio] Error in repetition ${i + 1}:`, error);
            }
        }
        console.log(`[CombinedAudio] Completed ${repeatCount} repetitions. Success: ${allSuccessful}`);
        return allSuccessful;
    }
    // Specific functions for different task types
    static async playClassBell(taskName, options) {
        return this.playToneAndAnnouncement(taskName, {
            tone: "bell",
            delayBetweenToneAndVoice: 2000,
            ...options
        });
    }
    static async playBreakChime(taskName, options) {
        return this.playToneAndAnnouncement(taskName, {
            tone: "chime",
            delayBetweenToneAndVoice: 1000,
            ...options
        });
    }
    static async playAnnouncement(taskName, options) {
        return this.playToneAndAnnouncement(taskName, {
            tone: "announcement",
            delayBetweenToneAndVoice: 800,
            ...options
        });
    }
    static async playEmergencyAlert(taskName, options) {
        return this.playToneAndAnnouncement(taskName, {
            tone: "emergency-alert",
            delayBetweenToneAndVoice: 500,
            repeatCount: 3,
            delayBetweenRepeats: 2000,
            ...options
        });
    }
    // High-quality AI voice announcement (no tone, just premium voice)
    static async playHighQualityAnnouncement(message, options) {
        const settings = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"].getState().settings;
        const { voice = "openai-nova", language = settings.defaultLanguage, repeatCount = settings.defaultRepeatCount } = options || {};
        console.log(`[CombinedAudio] Playing high-quality announcement: "${message}"`);
        let allSuccessful = true;
        for(let i = 0; i < repeatCount; i++){
            console.log(`[CombinedAudio] High-quality announcement repetition ${i + 1} of ${repeatCount}`);
            try {
                const voiceSuccess = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$voice$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playAnnouncement"])(message, voice, language, 1);
                if (!voiceSuccess) {
                    allSuccessful = false;
                    console.error(`[CombinedAudio] High-quality announcement failed for repetition ${i + 1}`);
                }
                // Wait between repetitions (except for the last one)
                if (i < repeatCount - 1) {
                    await new Promise((resolve)=>setTimeout(resolve, 3000));
                }
            } catch (error) {
                allSuccessful = false;
                console.error(`[CombinedAudio] Error in high-quality announcement repetition ${i + 1}:`, error);
            }
        }
        console.log(`[CombinedAudio] High-quality announcement completed. Success: ${allSuccessful}`);
        return allSuccessful;
    }
    // Normal announcement with tone + high-quality AI voice
    static async playNormalAnnouncement(message, options) {
        return this.playToneAndAnnouncement(message, {
            tone: "announcement",
            voice: "openai-nova",
            delayBetweenToneAndVoice: 800,
            ...options
        });
    }
    // Smart task-based audio player
    static async playTaskAudio(taskName, taskType, bellType, options) {
        console.log(`[CombinedAudio] Playing task audio for: "${taskName}" (Type: ${taskType}, Bell: ${bellType})`);
        // Determine appropriate tone and settings based on task type and bell type
        let tone = bellType || "bell";
        let delayBetweenToneAndVoice = 1500;
        let voiceMessage = taskName;
        // Customize based on task type
        switch(taskType.toLowerCase()){
            case "class":
            case "lesson":
                tone = bellType || "bell";
                delayBetweenToneAndVoice = 2000;
                voiceMessage = `Attention all students, it is time for ${taskName}. Please proceed to your classrooms.`;
                break;
            case "break":
            case "recess":
                tone = bellType || "chime";
                delayBetweenToneAndVoice = 1000;
                voiceMessage = `Attention all students, it is time for ${taskName}. You may now leave your classrooms.`;
                break;
            case "assembly":
            case "meeting":
                tone = bellType || "announcement";
                delayBetweenToneAndVoice = 800;
                voiceMessage = `Attention all students and staff, it is time for ${taskName}. Please proceed to the assembly hall.`;
                break;
            case "lunch":
            case "meal":
                tone = bellType || "chime";
                delayBetweenToneAndVoice = 1200;
                voiceMessage = `Attention all students, it is time for ${taskName}. Please proceed to the dining hall.`;
                break;
            case "dismissal":
            case "end":
                tone = bellType || "dismissal-bell";
                delayBetweenToneAndVoice = 2000;
                voiceMessage = `Attention all students, it is time for ${taskName}. Please collect your belongings and proceed to the exit.`;
                break;
            case "emergency":
            case "drill":
                tone = bellType || "emergency-alert";
                delayBetweenToneAndVoice = 500;
                voiceMessage = `Emergency alert. ${taskName}. All students and staff must follow emergency procedures immediately.`;
                break;
            default:
                // Use provided bell type or default
                tone = bellType || "bell";
                voiceMessage = `Attention all students, it is time for ${taskName}.`;
        }
        return this.playToneAndAnnouncement(voiceMessage, {
            tone,
            delayBetweenToneAndVoice,
            ...options
        });
    }
    // Get appropriate tone for task type
    static getToneForTaskType(taskType) {
        switch(taskType.toLowerCase()){
            case "class":
            case "lesson":
            case "dismissal":
                return "bell";
            case "break":
            case "recess":
            case "lunch":
                return "chime";
            case "assembly":
            case "meeting":
            case "announcement":
                return "announcement";
            case "emergency":
            case "drill":
                return "emergency-alert";
            default:
                return "bell";
        }
    }
    // Generate appropriate voice message for task
    static generateVoiceMessage(taskName, taskType) {
        const baseMessages = {
            class: `Attention all students, it is time for ${taskName}. Please proceed to your classrooms.`,
            lesson: `Attention all students, it is time for ${taskName}. Please proceed to your classrooms.`,
            break: `Attention all students, it is time for ${taskName}. You may now leave your classrooms.`,
            recess: `Attention all students, it is time for ${taskName}. You may now leave your classrooms.`,
            lunch: `Attention all students, it is time for ${taskName}. Please proceed to the dining hall.`,
            assembly: `Attention all students and staff, it is time for ${taskName}. Please proceed to the assembly hall.`,
            meeting: `Attention all students and staff, it is time for ${taskName}. Please proceed to the designated area.`,
            announcement: `Attention all students and staff, it is time for ${taskName}. Please listen carefully.`,
            dismissal: `Attention all students, it is time for ${taskName}. Please collect your belongings and proceed to the exit.`,
            end: `Attention all students, it is time for ${taskName}. Please collect your belongings and proceed to the exit.`,
            emergency: `Emergency alert. ${taskName}. All students and staff must follow emergency procedures immediately.`,
            drill: `Emergency drill. ${taskName}. All students and staff must follow drill procedures immediately.`
        };
        return baseMessages[taskType.toLowerCase()] || `Attention all students, it is time for ${taskName}.`;
    }
}
const playToneAndAnnouncement = (taskName, options)=>CombinedAudioPlayer.playToneAndAnnouncement(taskName, options);
const playClassBell = (taskName, options)=>CombinedAudioPlayer.playClassBell(taskName, options);
const playBreakChime = (taskName, options)=>CombinedAudioPlayer.playBreakChime(taskName, options);
const playAnnouncementTone = (taskName, options)=>CombinedAudioPlayer.playAnnouncement(taskName, options);
const playEmergencyAlert = (taskName, options)=>CombinedAudioPlayer.playEmergencyAlert(taskName, options);
const playHighQualityAnnouncement = (message, options)=>CombinedAudioPlayer.playHighQualityAnnouncement(message, options);
const playNormalAnnouncement = (message, options)=>CombinedAudioPlayer.playNormalAnnouncement(message, options);
const playTaskAudio = (taskName, taskType, bellType, options)=>CombinedAudioPlayer.playTaskAudio(taskName, taskType, bellType, options);
const getToneForTaskType = (taskType)=>CombinedAudioPlayer.getToneForTaskType(taskType);
const generateVoiceMessage = (taskName, taskType)=>CombinedAudioPlayer.generateVoiceMessage(taskName, taskType);
// Make it available globally for console testing
if ("TURBOPACK compile-time truthy", 1) {
    window.CombinedAudioPlayer = CombinedAudioPlayer;
    window.playToneAndAnnouncement = playToneAndAnnouncement;
    window.playTaskAudio = playTaskAudio;
    window.playHighQualityAnnouncement = playHighQualityAnnouncement;
    window.playNormalAnnouncement = playNormalAnnouncement;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/school-bell-system/lib/high-quality-announcements.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HighQualityAnnouncementSystem",
    ()=>HighQualityAnnouncementSystem,
    "demonstrateAnnouncementTypes",
    ()=>demonstrateAnnouncementTypes,
    "getAvailablePremiumVoices",
    ()=>getAvailablePremiumVoices,
    "playAdministrativeAnnouncement",
    ()=>playAdministrativeAnnouncement,
    "playCustomAnnouncement",
    ()=>playCustomAnnouncement,
    "playEmergencyAnnouncement",
    ()=>playEmergencyAnnouncement,
    "playFriendlyAnnouncement",
    ()=>playFriendlyAnnouncement,
    "playSchoolAnnouncement",
    ()=>playSchoolAnnouncement,
    "quickHighQualityTest",
    ()=>quickHighQualityTest,
    "testAllPremiumVoices",
    ()=>testAllPremiumVoices
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$combined$2d$audio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/lib/combined-audio.ts [app-client] (ecmascript)");
;
class HighQualityAnnouncementSystem {
    // Premium AI voices for different announcement types
    static PREMIUM_VOICES = {
        professional: "openai-nova",
        authoritative: "openai-onyx",
        friendly: "openai-shimmer",
        warm: "openai-echo",
        storytelling: "openai-fable",
        balanced: "openai-alloy",
        elevenlabs: "elevenlabs-rachel",
        azure: "azure-aria"
    };
    // Play a custom announcement with high-quality AI voice
    static async playCustomAnnouncement(message, options = {}) {
        const { voice = this.PREMIUM_VOICES.professional, language = "english", repeatCount = 1, withTone = false } = options;
        console.log(`[HighQuality] Playing custom announcement with ${voice}`);
        console.log(`[HighQuality] Message: "${message}"`);
        if (withTone) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$combined$2d$audio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playNormalAnnouncement"])(message, {
                voice,
                language,
                repeatCount
            });
        } else {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$combined$2d$audio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playHighQualityAnnouncement"])(message, {
                voice,
                language,
                repeatCount
            });
        }
    }
    // Professional school announcements
    static async playSchoolAnnouncement(title, details, options = {}) {
        const message = `Attention all students and staff. ${title}. ${details}`;
        return this.playCustomAnnouncement(message, {
            voice: this.PREMIUM_VOICES.professional,
            withTone: true,
            ...options
        });
    }
    // Emergency announcements with authoritative voice
    static async playEmergencyAnnouncement(emergency, instructions, options = {}) {
        const message = `Emergency alert. ${emergency}. ${instructions}. Please follow all safety procedures immediately.`;
        return this.playCustomAnnouncement(message, {
            voice: this.PREMIUM_VOICES.authoritative,
            withTone: true,
            repeatCount: 2,
            ...options
        });
    }
    // Friendly announcements for positive news
    static async playFriendlyAnnouncement(message, options = {}) {
        return this.playCustomAnnouncement(message, {
            voice: this.PREMIUM_VOICES.friendly,
            withTone: true,
            ...options
        });
    }
    // Administrative announcements
    static async playAdministrativeAnnouncement(message, options = {}) {
        return this.playCustomAnnouncement(message, {
            voice: this.PREMIUM_VOICES.balanced,
            withTone: true,
            ...options
        });
    }
    // Test all premium voices
    static async testAllPremiumVoices() {
        console.log("🎤 Testing All Premium AI Voices");
        console.log("=".repeat(50));
        const testMessage = "This is a test of the high-quality announcement system.";
        for (const [name, voice] of Object.entries(this.PREMIUM_VOICES)){
            console.log(`\n🔊 Testing ${name} voice (${voice})`);
            await this.playCustomAnnouncement(testMessage, {
                voice,
                repeatCount: 1,
                withTone: false
            });
            // Wait between tests
            await new Promise((resolve)=>setTimeout(resolve, 4000));
        }
        console.log("\n✅ Premium voice testing completed!");
    }
    // Demonstrate different announcement types
    static async demonstrateAnnouncementTypes() {
        console.log("📢 Demonstrating High-Quality Announcement Types");
        console.log("=".repeat(60));
        const demonstrations = [
            {
                type: "School Announcement",
                func: ()=>this.playSchoolAnnouncement("Morning Assembly", "All students please proceed to the main hall for our weekly assembly")
            },
            {
                type: "Emergency Announcement",
                func: ()=>this.playEmergencyAnnouncement("Fire drill in progress", "Please exit the building using the nearest emergency exit")
            },
            {
                type: "Friendly Announcement",
                func: ()=>this.playFriendlyAnnouncement("Congratulations to our basketball team for winning the championship! Well done everyone!")
            },
            {
                type: "Administrative Announcement",
                func: ()=>this.playAdministrativeAnnouncement("Reminder that parent-teacher conferences are scheduled for next week. Please check your emails for appointment times.")
            },
            {
                type: "Custom High-Quality",
                func: ()=>this.playCustomAnnouncement("This is a demonstration of our premium AI voice system with crystal-clear audio quality.", {
                        voice: this.PREMIUM_VOICES.elevenlabs,
                        withTone: false
                    })
            }
        ];
        for (const demo of demonstrations){
            console.log(`\n🎯 ${demo.type}`);
            await demo.func();
            // Wait between demonstrations
            await new Promise((resolve)=>setTimeout(resolve, 6000));
        }
        console.log("\n✅ All announcement type demonstrations completed!");
    }
    // Quick test with the best voice
    static async quickHighQualityTest() {
        console.log("⚡ Quick High-Quality Voice Test");
        await this.playCustomAnnouncement("Attention all students, this is a test of our premium AI voice announcement system. The audio quality should be crystal clear and professional.", {
            voice: this.PREMIUM_VOICES.professional,
            withTone: true,
            repeatCount: 1
        });
        console.log("✅ Quick test completed!");
    }
    // Get available premium voices
    static getAvailablePremiumVoices() {
        return [
            {
                name: "Professional",
                voice: this.PREMIUM_VOICES.professional,
                description: "Clear, professional female voice"
            },
            {
                name: "Authoritative",
                voice: this.PREMIUM_VOICES.authoritative,
                description: "Deep, authoritative male voice"
            },
            {
                name: "Friendly",
                voice: this.PREMIUM_VOICES.friendly,
                description: "Bright, friendly female voice"
            },
            {
                name: "Warm",
                voice: this.PREMIUM_VOICES.warm,
                description: "Warm, rounded male voice"
            },
            {
                name: "Storytelling",
                voice: this.PREMIUM_VOICES.storytelling,
                description: "British accent, engaging voice"
            },
            {
                name: "Balanced",
                voice: this.PREMIUM_VOICES.balanced,
                description: "Neutral, balanced voice"
            },
            {
                name: "ElevenLabs Premium",
                voice: this.PREMIUM_VOICES.elevenlabs,
                description: "Premium ElevenLabs voice"
            },
            {
                name: "Azure Premium",
                voice: this.PREMIUM_VOICES.azure,
                description: "Microsoft Azure premium voice"
            }
        ];
    }
}
const playCustomAnnouncement = (message, options)=>HighQualityAnnouncementSystem.playCustomAnnouncement(message, options);
const playSchoolAnnouncement = (title, details, options)=>HighQualityAnnouncementSystem.playSchoolAnnouncement(title, details, options);
const playEmergencyAnnouncement = (emergency, instructions, options)=>HighQualityAnnouncementSystem.playEmergencyAnnouncement(emergency, instructions, options);
const playFriendlyAnnouncement = (message, options)=>HighQualityAnnouncementSystem.playFriendlyAnnouncement(message, options);
const playAdministrativeAnnouncement = (message, options)=>HighQualityAnnouncementSystem.playAdministrativeAnnouncement(message, options);
const testAllPremiumVoices = ()=>HighQualityAnnouncementSystem.testAllPremiumVoices();
const demonstrateAnnouncementTypes = ()=>HighQualityAnnouncementSystem.demonstrateAnnouncementTypes();
const quickHighQualityTest = ()=>HighQualityAnnouncementSystem.quickHighQualityTest();
const getAvailablePremiumVoices = ()=>HighQualityAnnouncementSystem.getAvailablePremiumVoices();
// Make it available globally for console testing
if ("TURBOPACK compile-time truthy", 1) {
    window.HighQualityAnnouncementSystem = HighQualityAnnouncementSystem;
    window.playCustomAnnouncement = playCustomAnnouncement;
    window.playSchoolAnnouncement = playSchoolAnnouncement;
    window.playEmergencyAnnouncement = playEmergencyAnnouncement;
    window.playFriendlyAnnouncement = playFriendlyAnnouncement;
    window.playAdministrativeAnnouncement = playAdministrativeAnnouncement;
    window.testAllPremiumVoices = testAllPremiumVoices;
    window.demonstrateAnnouncementTypes = demonstrateAnnouncementTypes;
    window.quickHighQualityTest = quickHighQualityTest;
    window.getAvailablePremiumVoices = getAvailablePremiumVoices;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/school-bell-system/lib/audio-storage.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Audio Storage using IndexedDB
 * Stores custom audio files for timetables and prayer bells
 */ __turbopack_context__.s([
    "audioStorage",
    ()=>audioStorage,
    "playStoredAudio",
    ()=>playStoredAudio
]);
const DB_NAME = 'SchoolBellAudioDB';
const DB_VERSION = 1;
const STORE_NAME = 'audioFiles';
class AudioStorageDB {
    db = null;
    async init() {
        if (this.db) return;
        return new Promise((resolve, reject)=>{
            console.log('[AudioStorage] Opening IndexedDB...');
            const request = indexedDB.open(DB_NAME, DB_VERSION);
            request.onerror = ()=>{
                console.error('[AudioStorage] DB Open Error:', request.error);
                reject(request.error);
            };
            request.onsuccess = ()=>{
                console.log('[AudioStorage] DB Opened Successfully');
                this.db = request.result;
                resolve();
            };
            request.onupgradeneeded = (event)=>{
                console.log('[AudioStorage] DB Upgrade Needed');
                const db = event.target.result;
                if (!db.objectStoreNames.contains(STORE_NAME)) {
                    const objectStore = db.createObjectStore(STORE_NAME, {
                        keyPath: 'id'
                    });
                    objectStore.createIndex('category', 'category', {
                        unique: false
                    });
                    objectStore.createIndex('uploadDate', 'uploadDate', {
                        unique: false
                    });
                }
            };
        });
    }
    async saveAudio(file, category) {
        console.log(`[AudioStorage] Saving audio: ${file.name}, size: ${file.size}, type: ${file.type}`);
        if (!this.db) await this.init();
        const id = `audio_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        // Get audio duration
        const duration = await this.getAudioDuration(file);
        const metadata = {
            id,
            name: file.name.replace(/\.[^/.]+$/, ''),
            fileName: file.name,
            fileSize: file.size,
            duration,
            uploadDate: new Date().toISOString(),
            mimeType: file.type,
            category
        };
        const storedAudio = {
            ...metadata,
            audioBlob: file
        };
        return new Promise((resolve, reject)=>{
            const transaction = this.db.transaction([
                STORE_NAME
            ], 'readwrite');
            const objectStore = transaction.objectStore(STORE_NAME);
            const request = objectStore.add(storedAudio);
            request.onsuccess = ()=>resolve(metadata);
            request.onerror = ()=>reject(request.error);
        });
    }
    async getAudio(id) {
        if (!this.db) await this.init();
        return new Promise((resolve, reject)=>{
            const transaction = this.db.transaction([
                STORE_NAME
            ], 'readonly');
            const objectStore = transaction.objectStore(STORE_NAME);
            const request = objectStore.get(id);
            request.onsuccess = ()=>resolve(request.result || null);
            request.onerror = ()=>reject(request.error);
        });
    }
    async listAudios(category) {
        if (!this.db) await this.init();
        return new Promise((resolve, reject)=>{
            const transaction = this.db.transaction([
                STORE_NAME
            ], 'readonly');
            const objectStore = transaction.objectStore(STORE_NAME);
            let request;
            if (category) {
                const index = objectStore.index('category');
                request = index.getAll(category);
            } else {
                request = objectStore.getAll();
            }
            request.onsuccess = ()=>{
                const audios = request.result.map((audio)=>{
                    const { audioBlob, ...metadata } = audio;
                    return metadata;
                });
                resolve(audios);
            };
            request.onerror = ()=>reject(request.error);
        });
    }
    async deleteAudio(id) {
        if (!this.db) await this.init();
        return new Promise((resolve, reject)=>{
            const transaction = this.db.transaction([
                STORE_NAME
            ], 'readwrite');
            const objectStore = transaction.objectStore(STORE_NAME);
            const request = objectStore.delete(id);
            request.onsuccess = ()=>resolve();
            request.onerror = ()=>reject(request.error);
        });
    }
    async exportAll() {
        if (!this.db) await this.init();
        const audios = await new Promise((resolve, reject)=>{
            const transaction = this.db.transaction([
                STORE_NAME
            ], 'readonly');
            const objectStore = transaction.objectStore(STORE_NAME);
            const request = objectStore.getAll();
            request.onsuccess = ()=>resolve(request.result);
            request.onerror = ()=>reject(request.error);
        });
        // Create a JSON structure with base64 encoded audio
        const exportData = await Promise.all(audios.map(async (audio)=>{
            const arrayBuffer = await audio.audioBlob.arrayBuffer();
            const base64 = this.arrayBufferToBase64(arrayBuffer);
            return {
                metadata: {
                    id: audio.id,
                    name: audio.name,
                    fileName: audio.fileName,
                    fileSize: audio.fileSize,
                    duration: audio.duration,
                    uploadDate: audio.uploadDate,
                    mimeType: audio.mimeType,
                    category: audio.category
                },
                audioData: base64
            };
        }));
        const jsonString = JSON.stringify({
            version: 1,
            audios: exportData
        }, null, 2);
        return new Blob([
            jsonString
        ], {
            type: 'application/json'
        });
    }
    async importAll(file) {
        if (!this.db) await this.init();
        const text = await file.text();
        const data = JSON.parse(text);
        if (data.version !== 1 || !Array.isArray(data.audios)) {
            throw new Error('Invalid export file format');
        }
        let imported = 0;
        for (const item of data.audios){
            try {
                const arrayBuffer = this.base64ToArrayBuffer(item.audioData);
                const blob = new Blob([
                    arrayBuffer
                ], {
                    type: item.metadata.mimeType
                });
                const storedAudio = {
                    ...item.metadata,
                    audioBlob: blob
                };
                await new Promise((resolve, reject)=>{
                    const transaction = this.db.transaction([
                        STORE_NAME
                    ], 'readwrite');
                    const objectStore = transaction.objectStore(STORE_NAME);
                    const request = objectStore.put(storedAudio);
                    request.onsuccess = ()=>resolve();
                    request.onerror = ()=>reject(request.error);
                });
                imported++;
            } catch (error) {
                console.error('Failed to import audio:', item.metadata.name, error);
            }
        }
        return imported;
    }
    async getAudioDuration(file) {
        return new Promise((resolve)=>{
            const audio = new Audio();
            const url = URL.createObjectURL(file);
            audio.onloadedmetadata = ()=>{
                URL.revokeObjectURL(url);
                resolve(audio.duration);
            };
            audio.onerror = ()=>{
                URL.revokeObjectURL(url);
                resolve(0);
            };
            audio.src = url;
        });
    }
    arrayBufferToBase64(buffer) {
        const bytes = new Uint8Array(buffer);
        let binary = '';
        for(let i = 0; i < bytes.byteLength; i++){
            binary += String.fromCharCode(bytes[i]);
        }
        return btoa(binary);
    }
    base64ToArrayBuffer(base64) {
        const binary = atob(base64);
        const bytes = new Uint8Array(binary.length);
        for(let i = 0; i < binary.length; i++){
            bytes[i] = binary.charCodeAt(i);
        }
        return bytes.buffer;
    }
}
const audioStorage = new AudioStorageDB();
async function playStoredAudio(audioId) {
    try {
        const storedAudio = await audioStorage.getAudio(audioId);
        if (!storedAudio) {
            console.error('[AudioStorage] Audio not found:', audioId);
            return false;
        }
        const url = URL.createObjectURL(storedAudio.audioBlob);
        const audio = new Audio(url);
        return new Promise((resolve)=>{
            audio.onended = ()=>{
                URL.revokeObjectURL(url);
                resolve(true);
            };
            audio.onerror = ()=>{
                URL.revokeObjectURL(url);
                resolve(false);
            };
            audio.play().catch(()=>resolve(false));
        });
    } catch (error) {
        console.error('[AudioStorage] Playback error:', error);
        return false;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/school-bell-system/lib/complete-bell-system.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CompleteBellSystem",
    ()=>CompleteBellSystem,
    "demonstrateEmergencyDrills",
    ()=>demonstrateEmergencyDrills,
    "demonstrateSchoolDay",
    ()=>demonstrateSchoolDay,
    "getBellSystemStatus",
    ()=>getBellSystemStatus,
    "playAssemblyBell",
    ()=>playAssemblyBell,
    "playBreakBell",
    ()=>playBreakBell,
    "playClassBell",
    ()=>playClassBell,
    "playCustomBell",
    ()=>playCustomBell,
    "playDismissalBell",
    ()=>playDismissalBell,
    "playEmergencyBell",
    ()=>playEmergencyBell,
    "playLunchBell",
    ()=>playLunchBell,
    "playPrayerBell",
    ()=>playPrayerBell,
    "showAllBellOptions",
    ()=>showAllBellOptions,
    "testAllBellTypes",
    ()=>testAllBellTypes,
    "testAllVoices",
    ()=>testAllVoices
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$combined$2d$audio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/lib/combined-audio.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$high$2d$quality$2d$announcements$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/lib/high-quality-announcements.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$bell$2d$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/lib/bell-sounds.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/lib/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$audio$2d$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/lib/audio-storage.ts [app-client] (ecmascript)");
;
;
;
;
;
class CompleteBellSystem {
    // All available bell types with descriptions
    static BELL_TYPES = {
        // Traditional bells
        "bell": "Traditional school bell - classic ringing sound",
        "electronic-bell": "Modern electronic bell - sharp beeps",
        "double-ring": "Double ring bell - two quick rings",
        "triple-ring": "Triple ring bell - three quick rings",
        "long-ring": "Long continuous ring - extended bell sound",
        "dismissal-bell": "Dismissal bell - cheerful ascending melody",
        // Chimes and soft tones
        "chime": "Soft melodic chime - pleasant ascending notes",
        "westminster-chimes": "Westminster chimes - Big Ben style",
        "islamic-chime": "Islamic chime - gentle prayer reminder",
        "prayer-bell": "Prayer bell - reverent sustained tone",
        // Announcement and alert tones
        "announcement": "Announcement tone - attention-getting sound",
        "emergency-alert": "Emergency alert - urgent siren sound",
        // Special purpose
        "adhan-call": "Adhan call - Islamic prayer call tone"
    };
    // Premium voice options for announcements
    static PREMIUM_VOICES = {
        "openai-nova": "Professional female - clear and authoritative",
        "openai-onyx": "Deep male - authoritative and commanding",
        "openai-shimmer": "Bright female - friendly and welcoming",
        "openai-echo": "Warm male - rounded and approachable",
        "openai-fable": "British storytelling - engaging and articulate",
        "openai-alloy": "Balanced neutral - versatile for all uses",
        "elevenlabs-rachel": "Premium ElevenLabs - natural and expressive",
        "azure-aria": "Microsoft Azure - helpful and conversational"
    };
    // Play a complete bell sequence (tone + voice)
    static async playBellSequence(bellName, message, options = {}) {
        const settings = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"].getState().settings;
        const { bellType = "bell", voice = settings.defaultVoice, language = settings.defaultLanguage, repeatCount = settings.defaultRepeatCount, delayBetweenToneAndVoice = 1500, delayBetweenRepeats = 3000, useHighQualityVoice = true, customAudioId } = options;
        console.log(`[BellSystem] Playing bell sequence: ${bellName}`);
        console.log(`[BellSystem] Bell type: ${bellType}, Voice: ${voice}`);
        console.log(`[BellSystem] Message: "${message}"`);
        let allSuccessful = true;
        for(let i = 0; i < repeatCount; i++){
            console.log(`[BellSystem] Sequence ${i + 1} of ${repeatCount}`);
            try {
                // 1. Play the bell/tone first
                console.log(`[BellSystem] Playing ${bellType} tone...`);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$bell$2d$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playBellSound"])(bellType);
                // 2. Wait for tone to finish
                await new Promise((resolve)=>setTimeout(resolve, delayBetweenToneAndVoice));
                // 3. Play voice announcement (custom audio or TTS)
                console.log(`[BellSystem] Playing voice: "${message}"`);
                let voiceSuccess = false;
                // Check for custom audio first
                if (customAudioId) {
                    console.log(`[BellSystem] Using custom audio: ${customAudioId}`);
                    voiceSuccess = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$audio$2d$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playStoredAudio"])(customAudioId);
                    if (!voiceSuccess) {
                        console.warn(`[BellSystem] Custom audio failed, falling back to TTS`);
                    }
                }
                // Fall back to TTS if no custom audio or if it failed
                if (!customAudioId || !voiceSuccess) {
                    if (useHighQualityVoice && this.isAIVoice(voice)) {
                        voiceSuccess = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$high$2d$quality$2d$announcements$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playCustomAnnouncement"])(message, {
                            voice,
                            language,
                            withTone: false // We already played the tone
                        });
                    } else {
                        voiceSuccess = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$combined$2d$audio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playToneAndAnnouncement"])(message, {
                            tone: "bell",
                            voice,
                            language,
                            repeatCount: 1
                        });
                    }
                }
                if (!voiceSuccess) {
                    // Final fallback to built-in tone when custom audio and TTS both fail
                    console.log('[BellSystem] Falling back to built-in bell tone');
                    try {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$bell$2d$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playBellSound"])("bell");
                        voiceSuccess = true;
                    } catch (e) {
                        console.error('[BellSystem] Built-in tone failed', e);
                        allSuccessful = false;
                        console.error(`[BellSystem] Voice failed for sequence ${i + 1}`);
                    }
                }
                // 4. Wait between repetitions
                if (i < repeatCount - 1) {
                    console.log(`[BellSystem] Waiting ${delayBetweenRepeats}ms before next sequence...`);
                    await new Promise((resolve)=>setTimeout(resolve, delayBetweenRepeats));
                }
            } catch (error) {
                allSuccessful = false;
                console.error(`[BellSystem] Error in sequence ${i + 1}:`, error);
            }
        }
        console.log(`[BellSystem] Bell sequence completed. Success: ${allSuccessful}`);
        return allSuccessful;
    }
    // School-specific bell functions
    static async playClassBell(className, options) {
        const message = `Attention all students, it is time for ${className}. Please proceed to your classrooms.`;
        return this.playBellSequence(className, message, {
            bellType: "bell",
            delayBetweenToneAndVoice: 2000,
            ...options
        });
    }
    static async playBreakBell(breakName, options) {
        const message = `Attention all students, it is time for ${breakName}. You may now leave your classrooms.`;
        return this.playBellSequence(breakName, message, {
            bellType: "chime",
            delayBetweenToneAndVoice: 1000,
            ...options
        });
    }
    static async playLunchBell(options) {
        const message = "Attention all students, it is time for lunch. Please proceed to the dining hall.";
        return this.playBellSequence("Lunch Time", message, {
            bellType: "chime",
            delayBetweenToneAndVoice: 1200,
            ...options
        });
    }
    static async playAssemblyBell(assemblyName, options) {
        const message = `Attention all students and staff, it is time for ${assemblyName}. Please proceed to the assembly hall.`;
        return this.playBellSequence(assemblyName, message, {
            bellType: "announcement",
            delayBetweenToneAndVoice: 800,
            ...options
        });
    }
    static async playDismissalBell(options) {
        const message = "Attention all students, it is time for school dismissal. Please collect your belongings and proceed to the exit.";
        return this.playBellSequence("School Dismissal", message, {
            bellType: "dismissal-bell",
            delayBetweenToneAndVoice: 2000,
            ...options
        });
    }
    static async playEmergencyBell(emergency, instructions, options) {
        const message = `Emergency alert. ${emergency}. ${instructions}. All students and staff must follow emergency procedures immediately.`;
        return this.playBellSequence("Emergency", message, {
            bellType: "emergency-alert",
            delayBetweenToneAndVoice: 500,
            repeatCount: 3,
            delayBetweenRepeats: 2000,
            voice: "openai-onyx",
            ...options
        });
    }
    static async playPrayerBell(prayerName, options) {
        const settings = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"].getState().settings;
        const customAudioId = settings.prayerAudioIds?.[prayerName.toLowerCase()];
        const message = `It is time for ${prayerName} prayer. Please proceed to the prayer area.`;
        return this.playBellSequence(prayerName, message, {
            bellType: "prayer-bell",
            delayBetweenToneAndVoice: 1500,
            voice: "azan-islamic",
            language: "arabic",
            customAudioId,
            ...options
        });
    }
    // Custom bell with any message
    static async playCustomBell(bellName, message, bellType, options) {
        return this.playBellSequence(bellName, message, {
            bellType,
            ...options
        });
    }
    // Test all bell types
    static async testAllBellTypes() {
        console.log("🔔 Testing All Bell Types");
        console.log("=".repeat(50));
        for (const [bellType, description] of Object.entries(this.BELL_TYPES)){
            console.log(`\n🔊 Testing: ${bellType}`);
            console.log(`   Description: ${description}`);
            await this.playBellSequence(`Test ${bellType}`, `This is a test of the ${bellType} with voice announcement.`, {
                bellType: bellType,
                repeatCount: 1,
                useHighQualityVoice: true,
                voice: "openai-nova"
            });
            // Wait between tests
            await new Promise((resolve)=>setTimeout(resolve, 4000));
        }
        console.log("\n✅ All bell types tested!");
    }
    // Test all premium voices
    static async testAllVoices() {
        console.log("🎤 Testing All Premium Voices");
        console.log("=".repeat(50));
        const testMessage = "This is a test of the premium voice with bell system integration.";
        for (const [voice, description] of Object.entries(this.PREMIUM_VOICES)){
            console.log(`\n🗣️ Testing: ${voice}`);
            console.log(`   Description: ${description}`);
            await this.playBellSequence(`Voice Test`, testMessage, {
                bellType: "chime",
                voice: voice,
                repeatCount: 1,
                useHighQualityVoice: true
            });
            // Wait between tests
            await new Promise((resolve)=>setTimeout(resolve, 4000));
        }
        console.log("\n✅ All voices tested!");
    }
    // Demonstrate a complete school day
    static async demonstrateSchoolDay() {
        console.log("🏫 Complete School Day Bell Demonstration");
        console.log("=".repeat(60));
        const schoolSchedule = [
            {
                time: "08:00",
                func: ()=>this.playAssemblyBell("Morning Assembly")
            },
            {
                time: "08:30",
                func: ()=>this.playClassBell("First Period - Mathematics")
            },
            {
                time: "09:30",
                func: ()=>this.playBreakBell("Morning Break")
            },
            {
                time: "09:45",
                func: ()=>this.playClassBell("Second Period - English")
            },
            {
                time: "10:45",
                func: ()=>this.playClassBell("Third Period - Science")
            },
            {
                time: "11:45",
                func: ()=>this.playLunchBell()
            },
            {
                time: "12:30",
                func: ()=>this.playClassBell("Fourth Period - History")
            },
            {
                time: "13:30",
                func: ()=>this.playClassBell("Fifth Period - Art")
            },
            {
                time: "14:30",
                func: ()=>this.playDismissalBell()
            }
        ];
        for (const event of schoolSchedule){
            console.log(`\n🕐 ${event.time} - Playing school bell...`);
            await event.func();
            // Wait between events (shorter for demo)
            await new Promise((resolve)=>setTimeout(resolve, 6000));
        }
        console.log("\n✅ Complete school day demonstration finished!");
    }
    // Emergency drill demonstration
    static async demonstrateEmergencyDrills() {
        console.log("🚨 Emergency Drill Demonstrations");
        console.log("=".repeat(50));
        const emergencies = [
            {
                name: "Fire Drill",
                instructions: "Please exit the building using the nearest emergency exit and proceed to the assembly point"
            },
            {
                name: "Earthquake Drill",
                instructions: "Drop, cover, and hold on. Stay under your desks until the shaking stops"
            },
            {
                name: "Lockdown Drill",
                instructions: "Please remain in your classrooms and follow lockdown procedures"
            },
            {
                name: "Severe Weather Alert",
                instructions: "Please move to the designated safe areas immediately"
            }
        ];
        for (const emergency of emergencies){
            console.log(`\n🚨 ${emergency.name}`);
            await this.playEmergencyBell(emergency.name, emergency.instructions, {
                repeatCount: 2 // Emergency drills repeat twice
            });
            // Wait between drills
            await new Promise((resolve)=>setTimeout(resolve, 8000));
        }
        console.log("\n✅ Emergency drill demonstrations completed!");
    }
    // Get system status
    static getSystemStatus() {
        return {
            bellTypes: Object.keys(this.BELL_TYPES).length,
            voices: Object.keys(this.PREMIUM_VOICES).length,
            features: [
                "Tone + Voice Combination",
                "High-Quality AI Voices",
                "Multiple Bell Types",
                "School Schedule Integration",
                "Emergency Alert System",
                "Prayer Time Support",
                "Custom Messages",
                "Repeat Functionality"
            ]
        };
    }
    // Helper function to check if voice is AI
    static isAIVoice(voice) {
        return voice.startsWith("openai-") || voice.startsWith("elevenlabs-") || voice.startsWith("azure-");
    }
    // Show all available options
    static showAllOptions() {
        console.log("🔔 COMPLETE BELL SYSTEM OPTIONS");
        console.log("=".repeat(60));
        console.log("\n🔊 AVAILABLE BELL TYPES:");
        Object.entries(this.BELL_TYPES).forEach(([type, desc], index)=>{
            console.log(`${index + 1}. ${type} - ${desc}`);
        });
        console.log("\n🎤 AVAILABLE PREMIUM VOICES:");
        Object.entries(this.PREMIUM_VOICES).forEach(([voice, desc], index)=>{
            console.log(`${index + 1}. ${voice} - ${desc}`);
        });
        console.log("\n📚 SCHOOL BELL FUNCTIONS:");
        console.log("• playClassBell(className)");
        console.log("• playBreakBell(breakName)");
        console.log("• playLunchBell()");
        console.log("• playAssemblyBell(assemblyName)");
        console.log("• playDismissalBell()");
        console.log("• playEmergencyBell(emergency, instructions)");
        console.log("• playPrayerBell(prayerName)");
        console.log("• playCustomBell(name, message, bellType)");
        console.log("\n🧪 TEST FUNCTIONS:");
        console.log("• testAllBellTypes()");
        console.log("• testAllVoices()");
        console.log("• demonstrateSchoolDay()");
        console.log("• demonstrateEmergencyDrills()");
        const status = this.getSystemStatus();
        console.log(`\n📊 SYSTEM STATUS:`);
        console.log(`• ${status.bellTypes} bell types available`);
        console.log(`• ${status.voices} premium voices available`);
        console.log(`• ${status.features.length} features supported`);
        console.log("=".repeat(60));
    }
}
const playClassBell = (className, options)=>CompleteBellSystem.playClassBell(className, options);
const playBreakBell = (breakName, options)=>CompleteBellSystem.playBreakBell(breakName, options);
const playLunchBell = (options)=>CompleteBellSystem.playLunchBell(options);
const playAssemblyBell = (assemblyName, options)=>CompleteBellSystem.playAssemblyBell(assemblyName, options);
const playDismissalBell = (options)=>CompleteBellSystem.playDismissalBell(options);
const playEmergencyBell = (emergency, instructions, options)=>CompleteBellSystem.playEmergencyBell(emergency, instructions, options);
const playPrayerBell = (prayerName, options)=>CompleteBellSystem.playPrayerBell(prayerName, options);
const playCustomBell = (name, message, bellType, options)=>CompleteBellSystem.playCustomBell(name, message, bellType, options);
const testAllBellTypes = ()=>CompleteBellSystem.testAllBellTypes();
const testAllVoices = ()=>CompleteBellSystem.testAllVoices();
const demonstrateSchoolDay = ()=>CompleteBellSystem.demonstrateSchoolDay();
const demonstrateEmergencyDrills = ()=>CompleteBellSystem.demonstrateEmergencyDrills();
const showAllBellOptions = ()=>CompleteBellSystem.showAllOptions();
const getBellSystemStatus = ()=>CompleteBellSystem.getSystemStatus();
// Make it available globally for console testing
if ("TURBOPACK compile-time truthy", 1) {
    window.CompleteBellSystem = CompleteBellSystem;
    window.playClassBell = playClassBell;
    window.playBreakBell = playBreakBell;
    window.playLunchBell = playLunchBell;
    window.playAssemblyBell = playAssemblyBell;
    window.playDismissalBell = playDismissalBell;
    window.playEmergencyBell = playEmergencyBell;
    window.playPrayerBell = playPrayerBell;
    window.playCustomBell = playCustomBell;
    window.testAllBellTypes = testAllBellTypes;
    window.testAllVoices = testAllVoices;
    window.demonstrateSchoolDay = demonstrateSchoolDay;
    window.demonstrateEmergencyDrills = demonstrateEmergencyDrills;
    window.showAllBellOptions = showAllBellOptions;
    window.getBellSystemStatus = getBellSystemStatus;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/school-bell-system/components/bell-system-status.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BellSystemStatus",
    ()=>BellSystemStatus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/lucide-react/dist/esm/icons/volume-2.js [app-client] (ecmascript) <export default as Volume2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/lucide-react/dist/esm/icons/bell.js [app-client] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/lucide-react/dist/esm/icons/mic.js [app-client] (ecmascript) <export default as Mic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$complete$2d$bell$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/lib/complete-bell-system.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function BellSystemStatus() {
    _s();
    const [isTestingBell, setIsTestingBell] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isTestingVoice, setIsTestingVoice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isTestingComplete, setIsTestingComplete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const systemStatus = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$complete$2d$bell$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CompleteBellSystem"].getSystemStatus();
    const testBellOnly = async ()=>{
        setIsTestingBell(true);
        try {
            const { playBellSound } = await __turbopack_context__.A("[project]/Downloads/school-bell-system/lib/bell-sounds.ts [app-client] (ecmascript, async loader)");
            playBellSound("bell");
            setTimeout(()=>setIsTestingBell(false), 3000);
        } catch (error) {
            console.error("Bell test failed:", error);
            setIsTestingBell(false);
        }
    };
    const testVoiceOnly = async ()=>{
        setIsTestingVoice(true);
        try {
            const { playCustomAnnouncement } = await __turbopack_context__.A("[project]/Downloads/school-bell-system/lib/high-quality-announcements.ts [app-client] (ecmascript, async loader)");
            await playCustomAnnouncement("This is a test of the high-quality AI voice system.", {
                voice: "openai-nova",
                withTone: false
            });
        } catch (error) {
            console.error("Voice test failed:", error);
        } finally{
            setIsTestingVoice(false);
        }
    };
    const testCompleteBell = async ()=>{
        setIsTestingComplete(true);
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$complete$2d$bell$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CompleteBellSystem"].playBellSequence("Complete System Test", "This demonstrates the complete bell system with perfect tone and voice synchronization.", {
                bellType: "bell",
                voice: "openai-nova",
                useHighQualityVoice: true,
                repeatCount: 1
            });
        } catch (error) {
            console.error("Complete bell test failed:", error);
        } finally{
            setIsTestingComplete(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/school-bell-system/components/bell-system-status.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this),
                                "Bell System Status"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/school-bell-system/components/bell-system-status.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/school-bell-system/components/bell-system-status.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-foreground/60",
                                                children: "Bell Tones Available"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/school-bell-system/components/bell-system-status.tsx",
                                                lineNumber: 76,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold text-green-600",
                                                children: systemStatus.bellTypes
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/school-bell-system/components/bell-system-status.tsx",
                                                lineNumber: 77,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/school-bell-system/components/bell-system-status.tsx",
                                        lineNumber: 75,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-foreground/60",
                                                children: "Premium Voices"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/school-bell-system/components/bell-system-status.tsx",
                                                lineNumber: 80,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold text-green-600",
                                                children: systemStatus.voices
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/school-bell-system/components/bell-system-status.tsx",
                                                lineNumber: 81,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/school-bell-system/components/bell-system-status.tsx",
                                        lineNumber: 79,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-foreground/60",
                                                children: "System Status"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/school-bell-system/components/bell-system-status.tsx",
                                                lineNumber: 84,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold text-green-600",
                                                children: "Ready"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/school-bell-system/components/bell-system-status.tsx",
                                                lineNumber: 85,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/school-bell-system/components/bell-system-status.tsx",
                                        lineNumber: 83,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-foreground/60",
                                                children: "Integration"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/school-bell-system/components/bell-system-status.tsx",
                                                lineNumber: 88,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold text-green-600",
                                                children: "Active"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/school-bell-system/components/bell-system-status.tsx",
                                                lineNumber: 89,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/school-bell-system/components/bell-system-status.tsx",
                                        lineNumber: 87,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/school-bell-system/components/bell-system-status.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 pt-4 border-t",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-semibold mb-2",
                                        children: "Features Active:"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/school-bell-system/components/bell-system-status.tsx",
                                        lineNumber: 94,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-1 text-sm",
                                        children: systemStatus.features.map((feature, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-2 h-2 bg-green-500 rounded-full"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/school-bell-system/components/bell-system-status.tsx",
                                                        lineNumber: 98,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-foreground/70",
                                                        children: feature
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/school-bell-system/components/bell-system-status.tsx",
                                                        lineNumber: 99,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/Downloads/school-bell-system/components/bell-system-status.tsx",
                                                lineNumber: 97,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/school-bell-system/components/bell-system-status.tsx",
                                        lineNumber: 95,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/school-bell-system/components/bell-system-status.tsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/school-bell-system/components/bell-system-status.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/school-bell-system/components/bell-system-status.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/school-bell-system/components/bell-system-status.tsx",
                                    lineNumber: 111,
                                    columnNumber: 13
                                }, this),
                                "Test Bell System"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/school-bell-system/components/bell-system-status.tsx",
                            lineNumber: 110,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/school-bell-system/components/bell-system-status.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: testBellOnly,
                                        disabled: isTestingBell,
                                        variant: "outline",
                                        className: "w-full justify-start gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/school-bell-system/components/bell-system-status.tsx",
                                                lineNumber: 123,
                                                columnNumber: 15
                                            }, this),
                                            isTestingBell ? "Playing Bell Tone..." : "Test Bell Tone Only"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/school-bell-system/components/bell-system-status.tsx",
                                        lineNumber: 117,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: testVoiceOnly,
                                        disabled: isTestingVoice,
                                        variant: "outline",
                                        className: "w-full justify-start gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/school-bell-system/components/bell-system-status.tsx",
                                                lineNumber: 133,
                                                columnNumber: 15
                                            }, this),
                                            isTestingVoice ? "Playing Voice..." : "Test AI Voice Only"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/school-bell-system/components/bell-system-status.tsx",
                                        lineNumber: 127,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: testCompleteBell,
                                        disabled: isTestingComplete,
                                        className: "w-full justify-start gap-2 bg-green-600 hover:bg-green-700 text-white",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/school-bell-system/components/bell-system-status.tsx",
                                                lineNumber: 142,
                                                columnNumber: 15
                                            }, this),
                                            isTestingComplete ? "Playing Complete Bell..." : "Test Complete Bell System"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/school-bell-system/components/bell-system-status.tsx",
                                        lineNumber: 137,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/school-bell-system/components/bell-system-status.tsx",
                                lineNumber: 116,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 pt-4 border-t",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-foreground/60",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mb-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Complete Bell System:"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/school-bell-system/components/bell-system-status.tsx",
                                                lineNumber: 149,
                                                columnNumber: 35
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/school-bell-system/components/bell-system-status.tsx",
                                            lineNumber: 149,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "🔔 Plays bell tone first"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/school-bell-system/components/bell-system-status.tsx",
                                            lineNumber: 150,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "🗣️ Follows with AI voice announcement"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/school-bell-system/components/bell-system-status.tsx",
                                            lineNumber: 151,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "🎯 Perfect synchronization"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/school-bell-system/components/bell-system-status.tsx",
                                            lineNumber: 152,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/school-bell-system/components/bell-system-status.tsx",
                                    lineNumber: 148,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/school-bell-system/components/bell-system-status.tsx",
                                lineNumber: 147,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/school-bell-system/components/bell-system-status.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/school-bell-system/components/bell-system-status.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/school-bell-system/components/bell-system-status.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
_s(BellSystemStatus, "fVqDw5DV1fuz4HFFFsEkx6tE3Hs=");
_c = BellSystemStatus;
var _c;
__turbopack_context__.k.register(_c, "BellSystemStatus");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/school-bell-system/lib/background-sync.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/background-sync.ts
__turbopack_context__.s([
    "registerBellSync",
    ()=>registerBellSync,
    "syncTimetablesToSW",
    ()=>syncTimetablesToSW
]);
const registerBellSync = async ()=>{
    if (("TURBOPACK compile-time value", "object") === 'undefined' || !('serviceWorker' in navigator)) return;
    try {
        const registration = await navigator.serviceWorker.register('/sw.js');
        console.log('Service Worker registered with scope:', registration.scope);
        // Register periodic sync if supported
        if ('periodicSync' in registration) {
            try {
                // @ts-ignore - periodicSync is not yet in standard types
                const status = await navigator.permissions.query({
                    name: 'periodic-background-sync'
                });
                if (status.state === 'granted') {
                    // @ts-ignore
                    await registration.periodicSync.register('bell-schedule', {
                        minInterval: 60 * 1000 // 1 minute
                    });
                    console.log('Periodic sync registered');
                }
            } catch (e) {
                console.warn('Periodic sync registration failed:', e);
            }
        }
    } catch (error) {
        console.error('Service Worker registration failed:', error);
    }
};
const syncTimetablesToSW = async (timetables)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return new Promise((resolve, reject)=>{
        const request = indexedDB.open('SchoolBellSyncDB', 1);
        request.onerror = ()=>reject(request.error);
        request.onupgradeneeded = (event)=>{
            const db = event.target.result;
            if (!db.objectStoreNames.contains('timetables')) {
                db.createObjectStore('timetables', {
                    keyPath: 'id'
                });
            }
        };
        request.onsuccess = ()=>{
            const db = request.result;
            const transaction = db.transaction('timetables', 'readwrite');
            const store = transaction.objectStore('timetables');
            // Clear existing
            store.clear();
            // Add all timetables
            timetables.forEach((tt)=>{
                store.put(tt);
            });
            transaction.oncomplete = ()=>resolve();
            transaction.onerror = ()=>reject(transaction.error);
        };
    });
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/school-bell-system/components/dashboard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dashboard",
    ()=>Dashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/lucide-react/dist/esm/icons/bell.js [app-client] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/lucide-react/dist/esm/icons/volume-2.js [app-client] (ecmascript) <export default as Volume2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/lucide-react/dist/esm/icons/wifi.js [app-client] (ecmascript) <export default as Wifi>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/lib/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$voice$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/lib/voice-utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$complete$2d$bell$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/lib/complete-bell-system.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$bell$2d$system$2d$status$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/components/bell-system-status.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$background$2d$sync$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/lib/background-sync.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
// Helper function to derive task type from timetable name
const deriveTaskType = (name)=>{
    const lowerName = name.toLowerCase();
    if (lowerName.includes("assembly") || lowerName.includes("meeting")) return "assembly";
    if (lowerName.includes("break") || lowerName.includes("recess")) return "break";
    if (lowerName.includes("lunch") || lowerName.includes("meal")) return "lunch";
    if (lowerName.includes("dismissal") || lowerName.includes("end") || lowerName.includes("home")) return "dismissal";
    if (lowerName.includes("emergency") || lowerName.includes("drill") || lowerName.includes("fire")) return "emergency";
    if (lowerName.includes("class") || lowerName.includes("period") || lowerName.includes("lesson")) return "class";
    // Default to class for most school activities
    return "class";
};
;
function Dashboard() {
    _s();
    const { timetables, students, devices, settings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])();
    const lastCheckedPrayerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])("");
    const lastCheckedTimetableRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])("");
    const [ttsStatus, setTtsStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        available: true,
        message: "TTS is ready"
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Dashboard.useEffect": ()=>{
            // Check TTS status on client side only
            setTtsStatus((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$voice$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTTSStatus"])());
            // Register background sync if enabled
            if (settings.backgroundEnabled) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$background$2d$sync$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerBellSync"])();
            }
        }
    }["Dashboard.useEffect"], [
        settings.backgroundEnabled
    ]);
    // Sync timetables to SW whenever they change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Dashboard.useEffect": ()=>{
            if (settings.backgroundEnabled) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$background$2d$sync$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["syncTimetablesToSW"])(timetables);
            }
        }
    }["Dashboard.useEffect"], [
        timetables,
        settings.backgroundEnabled
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Dashboard.useEffect": ()=>{
            if (!settings.azanEnabled || !settings.prayerTimes) return;
            const checkPrayerTimes = {
                "Dashboard.useEffect.checkPrayerTimes": async ()=>{
                    const now = new Date();
                    const currentTime = now.getHours().toString().padStart(2, "0") + ":" + now.getMinutes().toString().padStart(2, "0");
                    // Only play once per minute to avoid multiple triggers
                    if (currentTime === lastCheckedPrayerRef.current) return;
                    lastCheckedPrayerRef.current = currentTime;
                    console.log("[v0] Checking prayer times. Current time:", currentTime);
                    for (const [prayer, time] of Object.entries(settings.prayerTimes || {})){
                        if (currentTime === time) {
                            console.log("[v0] Prayer time matched! Playing Azan for:", prayer);
                            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$voice$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playAzanCall"])(prayer);
                        }
                    }
                }
            }["Dashboard.useEffect.checkPrayerTimes"];
            // Check immediately on mount
            checkPrayerTimes();
            // Check every minute
            const interval = setInterval(checkPrayerTimes, 60000);
            return ({
                "Dashboard.useEffect": ()=>clearInterval(interval)
            })["Dashboard.useEffect"];
        }
    }["Dashboard.useEffect"], [
        settings.azanEnabled,
        settings.prayerTimes
    ]);
    // Timetable scheduler
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Dashboard.useEffect": ()=>{
            if (timetables.length === 0) return;
            const checkTimetables = {
                "Dashboard.useEffect.checkTimetables": async ()=>{
                    const now = new Date();
                    const currentTime = now.getHours().toString().padStart(2, "0") + ":" + now.getMinutes().toString().padStart(2, "0");
                    const currentDay = now.toLocaleDateString('en-US', {
                        weekday: 'long'
                    });
                    // Only play once per minute to avoid multiple triggers
                    if (currentTime === lastCheckedTimetableRef.current) return;
                    lastCheckedTimetableRef.current = currentTime;
                    console.log("[v0] Checking timetables. Current time:", currentTime, "Day:", currentDay);
                    for (const timetable of timetables){
                        // Check if this timetable should trigger now
                        const shouldTrigger = currentTime === timetable.bellTime && (timetable.day === "Daily" || timetable.day === currentDay);
                        if (shouldTrigger) {
                            console.log("[v0] Timetable matched! Triggering:", timetable.name, "Type:", timetable.bellType);
                            // Use Complete Bell System - perfect tone + voice combination
                            let message;
                            // Use custom message if provided, otherwise generate based on task type
                            if (timetable.customMessage) {
                                message = timetable.customMessage;
                            } else {
                                // Auto-generate message based on task type
                                const taskType = deriveTaskType(timetable.name);
                                switch(taskType){
                                    case "class":
                                    case "lesson":
                                        message = `Attention all students, it is time for ${timetable.name}. Please proceed to your classrooms.`;
                                        break;
                                    case "break":
                                    case "recess":
                                        message = `Attention all students, it is time for ${timetable.name}. You may now leave your classrooms.`;
                                        break;
                                    case "assembly":
                                    case "meeting":
                                        message = `Attention all students and staff, it is time for ${timetable.name}. Please proceed to the assembly hall.`;
                                        break;
                                    case "lunch":
                                    case "meal":
                                        message = `Attention all students, it is time for ${timetable.name}. Please proceed to the dining hall.`;
                                        break;
                                    case "dismissal":
                                    case "end":
                                        message = `Attention all students, it is time for ${timetable.name}. Please collect your belongings and proceed to the exit.`;
                                        break;
                                    case "emergency":
                                    case "drill":
                                        message = `Emergency alert. ${timetable.name}. All students and staff must follow emergency procedures immediately.`;
                                        break;
                                    default:
                                        message = `Attention all students, it is time for ${timetable.name}.`;
                                }
                            }
                            // Play complete bell sequence: tone first → voice announcement
                            await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$complete$2d$bell$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CompleteBellSystem"].playBellSequence(timetable.name, message, {
                                bellType: timetable.bellType,
                                voice: timetable.voice || settings.defaultVoice,
                                language: settings.defaultLanguage,
                                repeatCount: settings.defaultRepeatCount,
                                useHighQualityVoice: true,
                                customAudioId: timetable.customAudioId // Use custom audio if available
                            });
                        }
                    }
                }
            }["Dashboard.useEffect.checkTimetables"];
            // Check immediately on mount
            checkTimetables();
            // Check every minute
            const interval = setInterval(checkTimetables, 60000);
            return ({
                "Dashboard.useEffect": ()=>clearInterval(interval)
            })["Dashboard.useEffect"];
        }
    }["Dashboard.useEffect"], [
        timetables,
        settings.defaultVoice,
        settings.defaultLanguage
    ]);
    // Calculate next timetable event
    const getNextTimetableEvent = ()=>{
        if (timetables.length === 0) {
            return {
                name: "No Timetables Set",
                timeUntil: "Create in Timetables"
            };
        }
        const now = new Date();
        const currentTime = now.getHours() * 60 + now.getMinutes();
        const currentDay = now.toLocaleDateString('en-US', {
            weekday: 'long'
        });
        // Get today's timetables
        const todayTimetables = timetables.filter((tt)=>tt.day === "Daily" || tt.day === currentDay).map((tt)=>{
            const [hours, minutes] = tt.bellTime.split(':').map(Number);
            const eventMinutes = hours * 60 + minutes;
            return {
                ...tt,
                minutes: eventMinutes
            };
        }).sort((a, b)=>a.minutes - b.minutes);
        // Find next event today
        let nextEvent = todayTimetables.find((tt)=>tt.minutes > currentTime);
        if (nextEvent) {
            const minutesUntil = nextEvent.minutes - currentTime;
            const hoursUntil = Math.floor(minutesUntil / 60);
            const minsUntil = minutesUntil % 60;
            return {
                name: nextEvent.name,
                timeUntil: `In ${hoursUntil}h ${minsUntil}m`
            };
        }
        // If no event today, find tomorrow's first event
        const tomorrowEvents = timetables.filter((tt)=>tt.day === "Daily").map((tt)=>{
            const [hours, minutes] = tt.bellTime.split(':').map(Number);
            return {
                ...tt,
                minutes: hours * 60 + minutes
            };
        }).sort((a, b)=>a.minutes - b.minutes);
        if (tomorrowEvents.length > 0) {
            const nextEvent = tomorrowEvents[0];
            const minutesUntil = 24 * 60 - currentTime + nextEvent.minutes;
            const hoursUntil = Math.floor(minutesUntil / 60);
            const minsUntil = minutesUntil % 60;
            return {
                name: `${nextEvent.name} (Tomorrow)`,
                timeUntil: `In ${hoursUntil}h ${minsUntil}m`
            };
        }
        return {
            name: "No Upcoming Events",
            timeUntil: "Check timetables"
        };
    };
    // Calculate next prayer time
    const getNextPrayerTime = ()=>{
        if (!settings.azanEnabled || !settings.prayerTimes) {
            return {
                name: "No Prayer Times Set",
                timeUntil: "Configure in Settings"
            };
        }
        const now = new Date();
        const currentTime = now.getHours() * 60 + now.getMinutes() // Convert to minutes since midnight
        ;
        const prayerTimes = Object.entries(settings.prayerTimes).map(([name, time])=>{
            const [hours, minutes] = time.split(':').map(Number);
            const prayerMinutes = hours * 60 + minutes;
            return {
                name: name.charAt(0).toUpperCase() + name.slice(1),
                time,
                minutes: prayerMinutes
            };
        }).sort((a, b)=>a.minutes - b.minutes);
        // Find next prayer time
        let nextPrayer = prayerTimes.find((prayer)=>prayer.minutes > currentTime);
        // If no prayer found today, use first prayer of tomorrow
        if (!nextPrayer) {
            nextPrayer = prayerTimes[0];
            const minutesUntil = 24 * 60 - currentTime + nextPrayer.minutes;
            const hoursUntil = Math.floor(minutesUntil / 60);
            const minsUntil = minutesUntil % 60;
            return {
                name: `${nextPrayer.name} (Tomorrow)`,
                timeUntil: `In ${hoursUntil}h ${minsUntil}m`
            };
        }
        const minutesUntil = nextPrayer.minutes - currentTime;
        const hoursUntil = Math.floor(minutesUntil / 60);
        const minsUntil = minutesUntil % 60;
        return {
            name: nextPrayer.name,
            timeUntil: `In ${hoursUntil}h ${minsUntil}m`
        };
    };
    const nextPrayer = getNextPrayerTime();
    const nextTimetableEvent = getNextTimetableEvent();
    const stats = [
        {
            title: "Active Timetables",
            value: timetables.length,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"],
            color: "text-blue-600"
        },
        {
            title: "Students",
            value: students.length,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
            color: "text-green-600"
        },
        {
            title: "Announcements Today",
            value: "3",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"],
            color: "text-purple-600"
        },
        {
            title: "Connected Devices",
            value: devices.filter((d)=>d.status === "online").length,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__["Wifi"],
            color: "text-orange-600"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4 md:p-6 lg:p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6 md:mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2",
                        children: "Dashboard"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/school-bell-system/components/dashboard.tsx",
                        lineNumber: 300,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm md:text-base text-foreground/60",
                        children: "System Overview & Quick Stats"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/school-bell-system/components/dashboard.tsx",
                        lineNumber: 301,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/school-bell-system/components/dashboard.tsx",
                lineNumber: 299,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8",
                children: stats.map((stat, idx)=>{
                    const Icon = stat.icon;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                className: "flex flex-row items-center justify-between space-y-0 pb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        className: "text-sm font-medium",
                                        children: stat.title
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/school-bell-system/components/dashboard.tsx",
                                        lineNumber: 310,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        className: `w-4 h-4 ${stat.color}`
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/school-bell-system/components/dashboard.tsx",
                                        lineNumber: 311,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/school-bell-system/components/dashboard.tsx",
                                lineNumber: 309,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-2xl font-bold",
                                    children: stat.value
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/school-bell-system/components/dashboard.tsx",
                                    lineNumber: 314,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/school-bell-system/components/dashboard.tsx",
                                lineNumber: 313,
                                columnNumber: 15
                            }, this)
                        ]
                    }, idx, true, {
                        fileName: "[project]/Downloads/school-bell-system/components/dashboard.tsx",
                        lineNumber: 308,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/Downloads/school-bell-system/components/dashboard.tsx",
                lineNumber: 304,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "text-base md:text-lg",
                                    children: "Next Timetable Event"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/school-bell-system/components/dashboard.tsx",
                                    lineNumber: 324,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/school-bell-system/components/dashboard.tsx",
                                lineNumber: 323,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xl md:text-2xl font-bold text-green-600",
                                        children: nextTimetableEvent.name
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/school-bell-system/components/dashboard.tsx",
                                        lineNumber: 327,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm md:text-base text-foreground/60 mt-2",
                                        children: nextTimetableEvent.timeUntil
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/school-bell-system/components/dashboard.tsx",
                                        lineNumber: 328,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/school-bell-system/components/dashboard.tsx",
                                lineNumber: 326,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/school-bell-system/components/dashboard.tsx",
                        lineNumber: 322,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "text-base md:text-lg",
                                    children: "Next Prayer Time"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/school-bell-system/components/dashboard.tsx",
                                    lineNumber: 334,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/school-bell-system/components/dashboard.tsx",
                                lineNumber: 333,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xl md:text-2xl font-bold text-blue-600",
                                        children: nextPrayer.name
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/school-bell-system/components/dashboard.tsx",
                                        lineNumber: 337,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm md:text-base text-foreground/60 mt-2",
                                        children: nextPrayer.timeUntil
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/school-bell-system/components/dashboard.tsx",
                                        lineNumber: 338,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/school-bell-system/components/dashboard.tsx",
                                lineNumber: 336,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/school-bell-system/components/dashboard.tsx",
                        lineNumber: 332,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/school-bell-system/components/dashboard.tsx",
                lineNumber: 321,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "text-base md:text-lg",
                                    children: "Today's Prayer Times"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/school-bell-system/components/dashboard.tsx",
                                    lineNumber: 346,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/school-bell-system/components/dashboard.tsx",
                                lineNumber: 345,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: settings.azanEnabled && settings.prayerTimes ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: Object.entries(settings.prayerTimes).map(([prayer, time])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between text-sm md:text-base",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-foreground/60 capitalize",
                                                    children: prayer
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/school-bell-system/components/dashboard.tsx",
                                                    lineNumber: 353,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold",
                                                    children: time
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/school-bell-system/components/dashboard.tsx",
                                                    lineNumber: 354,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, prayer, true, {
                                            fileName: "[project]/Downloads/school-bell-system/components/dashboard.tsx",
                                            lineNumber: 352,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/school-bell-system/components/dashboard.tsx",
                                    lineNumber: 350,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm md:text-base text-foreground/60",
                                    children: "Prayer times not configured"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/school-bell-system/components/dashboard.tsx",
                                    lineNumber: 359,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/school-bell-system/components/dashboard.tsx",
                                lineNumber: 348,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/school-bell-system/components/dashboard.tsx",
                        lineNumber: 344,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "text-base md:text-lg",
                                    children: "System Status"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/school-bell-system/components/dashboard.tsx",
                                    lineNumber: 366,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/school-bell-system/components/dashboard.tsx",
                                lineNumber: 365,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between text-sm md:text-base",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-foreground/60",
                                                    children: "Database"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/school-bell-system/components/dashboard.tsx",
                                                    lineNumber: 371,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-green-600 font-semibold",
                                                    children: "Online"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/school-bell-system/components/dashboard.tsx",
                                                    lineNumber: 372,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/school-bell-system/components/dashboard.tsx",
                                            lineNumber: 370,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between text-sm md:text-base",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-foreground/60",
                                                    children: "TTS Engine"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/school-bell-system/components/dashboard.tsx",
                                                    lineNumber: 375,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: ttsStatus.available ? "text-green-600 font-semibold" : "text-red-600 font-semibold",
                                                    children: ttsStatus.available ? "Ready" : "Unavailable"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/school-bell-system/components/dashboard.tsx",
                                                    lineNumber: 376,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/school-bell-system/components/dashboard.tsx",
                                            lineNumber: 374,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between text-sm md:text-base",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-foreground/60",
                                                    children: "Prayer Scheduler"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/school-bell-system/components/dashboard.tsx",
                                                    lineNumber: 381,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: settings.azanEnabled ? "text-green-600 font-semibold" : "text-gray-500 font-semibold",
                                                    children: settings.azanEnabled ? "Active" : "Disabled"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/school-bell-system/components/dashboard.tsx",
                                                    lineNumber: 382,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/school-bell-system/components/dashboard.tsx",
                                            lineNumber: 380,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between text-sm md:text-base",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-foreground/60",
                                                    children: "Timetable Scheduler"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/school-bell-system/components/dashboard.tsx",
                                                    lineNumber: 387,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: timetables.length > 0 ? "text-green-600 font-semibold" : "text-gray-500 font-semibold",
                                                    children: timetables.length > 0 ? "Active" : "No Timetables"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/school-bell-system/components/dashboard.tsx",
                                                    lineNumber: 388,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/school-bell-system/components/dashboard.tsx",
                                            lineNumber: 386,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/school-bell-system/components/dashboard.tsx",
                                    lineNumber: 369,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/school-bell-system/components/dashboard.tsx",
                                lineNumber: 368,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/school-bell-system/components/dashboard.tsx",
                        lineNumber: 364,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/school-bell-system/components/dashboard.tsx",
                lineNumber: 343,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$bell$2d$system$2d$status$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BellSystemStatus"], {}, void 0, false, {
                fileName: "[project]/Downloads/school-bell-system/components/dashboard.tsx",
                lineNumber: 398,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/school-bell-system/components/dashboard.tsx",
        lineNumber: 298,
        columnNumber: 5
    }, this);
}
_s(Dashboard, "sOAnDELKrU0haZefq+Wzr7QACUQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"]
    ];
});
_c = Dashboard;
var _c;
__turbopack_context__.k.register(_c, "Dashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/school-bell-system/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/lib/utils.ts [app-client] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm', 'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]', 'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/school-bell-system/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Input;
;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/school-bell-system/components/timetable.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Timetable",
    ()=>Timetable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/lib/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/lucide-react/dist/esm/icons/pen.js [app-client] (ecmascript) <export default as Edit2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/lucide-react/dist/esm/icons/volume-2.js [app-client] (ecmascript) <export default as Volume2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$audio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileAudio$3e$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/lucide-react/dist/esm/icons/file-audio.js [app-client] (ecmascript) <export default as FileAudio>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$complete$2d$bell$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/lib/complete-bell-system.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$voice$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/lib/voice-utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$audio$2d$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/lib/audio-storage.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
function Timetable() {
    _s();
    const { timetables, addTimetable, removeTimetable, updateTimetable } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])();
    const [showForm, setShowForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingId, setEditingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [availableAudios, setAvailableAudios] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        day: "Monday",
        bellTime: "",
        bellType: "bell",
        voice: "openai-onyx",
        customMessage: "",
        customAudioId: ""
    });
    // Load available audio files
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Timetable.useEffect": ()=>{
            const loadAudios = {
                "Timetable.useEffect.loadAudios": async ()=>{
                    try {
                        const audios = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$audio$2d$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["audioStorage"].listAudios();
                        setAvailableAudios(audios);
                    } catch (error) {
                        console.error('Failed to load audio files:', error);
                    }
                }
            }["Timetable.useEffect.loadAudios"];
            loadAudios();
        }
    }["Timetable.useEffect"], []);
    const days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
        "Daily"
    ];
    const bellTypes = [
        "bell",
        "electronic-bell",
        "westminster-chimes",
        "double-ring",
        "triple-ring",
        "long-ring",
        "chime",
        "announcement",
        "emergency-alert",
        "dismissal-bell",
        "adhan-call",
        "islamic-chime",
        "prayer-bell"
    ];
    const formatBellTypeName = (type)=>{
        const names = {
            'bell': 'Traditional Bell',
            'electronic-bell': 'Electronic Bell',
            'westminster-chimes': 'Westminster Chimes',
            'double-ring': 'Double Ring',
            'triple-ring': 'Triple Ring',
            'long-ring': 'Long Ring',
            'chime': 'Soft Chime',
            'announcement': 'Announcement Tone',
            'emergency-alert': 'Emergency Alert',
            'dismissal-bell': 'Dismissal Bell',
            'adhan-call': 'Adhan Call (Islamic)',
            'islamic-chime': 'Islamic Chime',
            'prayer-bell': 'Prayer Bell (Islamic)'
        };
        return names[type] || type;
    };
    // Get available voices for selection
    const getAvailableVoices = ()=>{
        return Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$voice$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VOICE_OPTIONS"]).map(([key, info])=>({
                value: key,
                label: info.name,
                description: info.description
            }));
    };
    // Get recommended voices for different bell types
    const getRecommendedVoice = (bellType)=>{
        const recommendations = {
            'emergency-alert': 'openai-onyx',
            'announcement': 'openai-onyx',
            'prayer-bell': 'azan-islamic',
            'adhan-call': 'azan-islamic',
            'islamic-chime': 'azan-islamic',
            'dismissal-bell': 'openai-shimmer',
            'chime': 'openai-echo'
        };
        return recommendations[bellType] || 'openai-onyx';
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("=== TIMETABLE FORM SUBMISSION START ===");
        console.log("Form data:", formData);
        console.log("Editing ID:", editingId);
        // Validation
        if (!formData.name || !formData.bellTime) {
            console.error("❌ Validation failed: Name or Bell Time missing");
            console.error("Name:", formData.name);
            console.error("Bell Time:", formData.bellTime);
            alert("Please fill in both Name and Time fields");
            return;
        }
        try {
            if (editingId) {
                console.log("📝 Updating existing timetable:", editingId);
                updateTimetable(editingId, formData);
                console.log("✅ Update completed");
                setEditingId(null);
            } else {
                const newTimetable = {
                    id: Date.now().toString(),
                    ...formData
                };
                console.log("➕ Adding new timetable:", newTimetable);
                addTimetable(newTimetable);
                console.log("✅ Add completed");
                console.log("Current timetables count:", timetables.length + 1);
            }
            // Reset form
            setFormData({
                name: "",
                day: "Monday",
                bellTime: "",
                bellType: "bell",
                voice: "openai-onyx",
                customMessage: "",
                customAudioId: ""
            });
            setShowForm(false);
            console.log("=== TIMETABLE FORM SUBMISSION END ===");
        } catch (error) {
            console.error("❌ Error saving timetable:", error);
            alert("Failed to save timetable. Please try again.");
        }
    };
    const startEdit = (id)=>{
        const timetable = timetables.find((t)=>t.id === id);
        if (timetable) {
            setFormData({
                name: timetable.name,
                day: timetable.day,
                bellTime: timetable.bellTime,
                bellType: timetable.bellType,
                voice: timetable.voice || "openai-onyx",
                customMessage: timetable.customMessage || "",
                customAudioId: timetable.customAudioId || ""
            });
            setEditingId(id);
            setShowForm(true);
        }
    };
    const cancelEdit = ()=>{
        setEditingId(null);
        setFormData({
            name: "",
            day: "Monday",
            bellTime: "",
            bellType: "bell",
            voice: "openai-onyx",
            customMessage: "",
            customAudioId: ""
        });
        setShowForm(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8 flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl font-bold text-foreground mb-2",
                                children: "Timetables"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/school-bell-system/components/timetable.tsx",
                                lineNumber: 189,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-foreground/60",
                                children: "Manage bell schedules and announcements"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/school-bell-system/components/timetable.tsx",
                                lineNumber: 190,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/school-bell-system/components/timetable.tsx",
                        lineNumber: 188,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: async ()=>{
                                    // Test the complete bell system
                                    await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$complete$2d$bell$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CompleteBellSystem"].playBellSequence("System Test", "This is a test of the complete bell system. Bell tone first, followed by voice announcement.", {
                                        bellType: "bell",
                                        voice: "openai-onyx",
                                        useHighQualityVoice: true,
                                        repeatCount: 1
                                    });
                                },
                                variant: "outline",
                                className: "gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/school-bell-system/components/timetable.tsx",
                                        lineNumber: 210,
                                        columnNumber: 13
                                    }, this),
                                    "Test Bell System"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/school-bell-system/components/timetable.tsx",
                                lineNumber: 193,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: ()=>setShowForm(!showForm),
                                className: "bg-blue-600 hover:bg-blue-700 text-white gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/school-bell-system/components/timetable.tsx",
                                        lineNumber: 214,
                                        columnNumber: 13
                                    }, this),
                                    "Add New Bell"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/school-bell-system/components/timetable.tsx",
                                lineNumber: 213,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/school-bell-system/components/timetable.tsx",
                        lineNumber: 192,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/school-bell-system/components/timetable.tsx",
                lineNumber: 187,
                columnNumber: 7
            }, this),
            showForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "mb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "pt-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit,
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-sm font-semibold text-foreground mb-1 block",
                                        children: "Bell Name"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/school-bell-system/components/timetable.tsx",
                                        lineNumber: 225,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        value: formData.name,
                                        onChange: (e)=>setFormData({
                                                ...formData,
                                                name: e.target.value
                                            }),
                                        placeholder: "e.g., Morning Assembly"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/school-bell-system/components/timetable.tsx",
                                        lineNumber: 226,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/school-bell-system/components/timetable.tsx",
                                lineNumber: 224,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-3 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-sm font-semibold text-foreground mb-1 block",
                                                children: "Day"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/school-bell-system/components/timetable.tsx",
                                                lineNumber: 235,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: formData.day,
                                                onChange: (e)=>setFormData({
                                                        ...formData,
                                                        day: e.target.value
                                                    }),
                                                className: "w-full p-2 border border-border rounded-lg bg-background",
                                                children: days.map((day)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: day,
                                                        children: day
                                                    }, day, false, {
                                                        fileName: "[project]/Downloads/school-bell-system/components/timetable.tsx",
                                                        lineNumber: 242,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/school-bell-system/components/timetable.tsx",
                                                lineNumber: 236,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/school-bell-system/components/timetable.tsx",
                                        lineNumber: 234,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-sm font-semibold text-foreground mb-1 block",
                                                children: "Time"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/school-bell-system/components/timetable.tsx",
                                                lineNumber: 250,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                type: "time",
                                                value: formData.bellTime,
                                                onChange: (e)=>setFormData({
                                                        ...formData,
                                                        bellTime: e.target.value
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/school-bell-system/components/timetable.tsx",
                                                lineNumber: 251,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/school-bell-system/components/timetable.tsx",
                                        lineNumber: 249,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-sm font-semibold text-foreground mb-1 block",
                                                children: "Bell Type"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/school-bell-system/components/timetable.tsx",
                                                lineNumber: 259,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: formData.bellType,
                                                onChange: (e)=>{
                                                    const newBellType = e.target.value;
                                                    setFormData({
                                                        ...formData,
                                                        bellType: newBellType,
                                                        voice: getRecommendedVoice(newBellType) // Auto-select recommended voice
                                                    });
                                                },
                                                className: "w-full p-2 border border-border rounded-lg bg-background",
                                                children: bellTypes.map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: type,
                                                        children: formatBellTypeName(type)
                                                    }, type, false, {
                                                        fileName: "[project]/Downloads/school-bell-system/components/timetable.tsx",
                                                        lineNumber: 273,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/school-bell-system/components/timetable.tsx",
                                                lineNumber: 260,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/school-bell-system/components/timetable.tsx",
                                        lineNumber: 258,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/school-bell-system/components/timetable.tsx",
                                lineNumber: 233,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-sm font-semibold text-foreground mb-1 block",
                                                children: [
                                                    "Voice Selection",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-foreground/60 ml-2",
                                                        children: "(AI Voice for Announcement)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/school-bell-system/components/timetable.tsx",
                                                        lineNumber: 285,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/school-bell-system/components/timetable.tsx",
                                                lineNumber: 283,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: formData.voice,
                                                onChange: (e)=>setFormData({
                                                        ...formData,
                                                        voice: e.target.value
                                                    }),
                                                className: "w-full p-2 border border-border rounded-lg bg-background",
                                                children: getAvailableVoices().map((voice)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: voice.value,
                                                        children: [
                                                            voice.label,
                                                            " - ",
                                                            voice.description
                                                        ]
                                                    }, voice.value, true, {
                                                        fileName: "[project]/Downloads/school-bell-system/components/timetable.tsx",
                                                        lineNumber: 293,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/school-bell-system/components/timetable.tsx",
                                                lineNumber: 287,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-foreground/60 mt-1",
                                                children: [
                                                    "Recommended: ",
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$voice$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VOICE_OPTIONS"][getRecommendedVoice(formData.bellType)]?.name
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/school-bell-system/components/timetable.tsx",
                                                lineNumber: 298,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/school-bell-system/components/timetable.tsx",
                                        lineNumber: 282,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-sm font-semibold text-foreground mb-1 block",
                                                children: [
                                                    "Preview Voice",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-foreground/60 ml-2",
                                                        children: "(Test Selected Voice)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/school-bell-system/components/timetable.tsx",
                                                        lineNumber: 306,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/school-bell-system/components/timetable.tsx",
                                                lineNumber: 304,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                type: "button",
                                                variant: "outline",
                                                onClick: async ()=>{
                                                    const { playCustomAnnouncement } = await __turbopack_context__.A("[project]/Downloads/school-bell-system/lib/high-quality-announcements.ts [app-client] (ecmascript, async loader)");
                                                    await playCustomAnnouncement(`This is a preview of the ${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$voice$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VOICE_OPTIONS"][formData.voice]?.name} voice for ${formData.name || 'your bell'}.`, {
                                                        voice: formData.voice,
                                                        withTone: false
                                                    });
                                                },
                                                className: "w-full gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/school-bell-system/components/timetable.tsx",
                                                        lineNumber: 320,
                                                        columnNumber: 21
                                                    }, this),
                                                    "Test Voice"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/school-bell-system/components/timetable.tsx",
                                                lineNumber: 308,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/school-bell-system/components/timetable.tsx",
                                        lineNumber: 303,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/school-bell-system/components/timetable.tsx",
                                lineNumber: 281,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-sm font-semibold text-foreground mb-1 block",
                                        children: [
                                            "Custom Message (Optional)",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-foreground/60 ml-2",
                                                children: "(Leave empty for auto-generated message)"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/school-bell-system/components/timetable.tsx",
                                                lineNumber: 329,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/school-bell-system/components/timetable.tsx",
                                        lineNumber: 327,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        value: formData.customMessage,
                                        onChange: (e)=>setFormData({
                                                ...formData,
                                                customMessage: e.target.value
                                            }),
                                        placeholder: "e.g., Attention all students, please proceed to the main hall for assembly."
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/school-bell-system/components/timetable.tsx",
                                        lineNumber: 331,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-foreground/60 mt-1",
                                        children: "If empty, message will be auto-generated based on bell name and type"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/school-bell-system/components/timetable.tsx",
                                        lineNumber: 336,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/school-bell-system/components/timetable.tsx",
                                lineNumber: 326,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-sm font-semibold text-foreground mb-1 block flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$audio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileAudio$3e$__["FileAudio"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/school-bell-system/components/timetable.tsx",
                                                lineNumber: 344,
                                                columnNumber: 19
                                            }, this),
                                            "Custom Audio (Optional)",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-foreground/60 font-normal",
                                                children: "(Use your own recording instead of TTS)"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/school-bell-system/components/timetable.tsx",
                                                lineNumber: 346,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/school-bell-system/components/timetable.tsx",
                                        lineNumber: 343,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: formData.customAudioId,
                                        onChange: (e)=>setFormData({
                                                ...formData,
                                                customAudioId: e.target.value
                                            }),
                                        className: "w-full p-2 border border-border rounded-lg bg-background",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "No custom audio (use text-to-speech)"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/school-bell-system/components/timetable.tsx",
                                                lineNumber: 353,
                                                columnNumber: 19
                                            }, this),
                                            availableAudios.map((audio)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: audio.id,
                                                    children: [
                                                        audio.name,
                                                        " (",
                                                        Math.floor(audio.duration),
                                                        "s)"
                                                    ]
                                                }, audio.id, true, {
                                                    fileName: "[project]/Downloads/school-bell-system/components/timetable.tsx",
                                                    lineNumber: 355,
                                                    columnNumber: 21
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/school-bell-system/components/timetable.tsx",
                                        lineNumber: 348,
                                        columnNumber: 17
                                    }, this),
                                    formData.customAudioId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        type: "button",
                                        variant: "outline",
                                        size: "sm",
                                        onClick: async ()=>{
                                            const { playStoredAudio } = await __turbopack_context__.A("[project]/Downloads/school-bell-system/lib/audio-storage.ts [app-client] (ecmascript, async loader)");
                                            await playStoredAudio(formData.customAudioId);
                                        },
                                        className: "mt-2 gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/school-bell-system/components/timetable.tsx",
                                                lineNumber: 371,
                                                columnNumber: 21
                                            }, this),
                                            "Preview Custom Audio"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/school-bell-system/components/timetable.tsx",
                                        lineNumber: 361,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-foreground/60 mt-1",
                                        children: availableAudios.length === 0 ? "No audio files uploaded yet. Upload audio files in Settings → Audio Library" : "Select a custom audio file to play instead of text-to-speech announcement"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/school-bell-system/components/timetable.tsx",
                                        lineNumber: 375,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/school-bell-system/components/timetable.tsx",
                                lineNumber: 342,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        type: "submit",
                                        className: "bg-green-600 hover:bg-green-700 text-white",
                                        children: editingId ? "Update Bell" : "Save Bell"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/school-bell-system/components/timetable.tsx",
                                        lineNumber: 384,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        type: "button",
                                        variant: "outline",
                                        onClick: cancelEdit,
                                        children: "Cancel"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/school-bell-system/components/timetable.tsx",
                                        lineNumber: 387,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/school-bell-system/components/timetable.tsx",
                                lineNumber: 383,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/school-bell-system/components/timetable.tsx",
                        lineNumber: 223,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/school-bell-system/components/timetable.tsx",
                    lineNumber: 222,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/school-bell-system/components/timetable.tsx",
                lineNumber: 221,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: timetables.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                        className: "pt-6 text-center text-foreground/60",
                        children: "No timetables yet. Create your first bell schedule."
                    }, void 0, false, {
                        fileName: "[project]/Downloads/school-bell-system/components/timetable.tsx",
                        lineNumber: 399,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/school-bell-system/components/timetable.tsx",
                    lineNumber: 398,
                    columnNumber: 11
                }, this) : timetables.map((tt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            className: "pt-6 flex justify-between items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-semibold text-foreground",
                                            children: tt.name
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/school-bell-system/components/timetable.tsx",
                                            lineNumber: 408,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-foreground/60",
                                            children: [
                                                tt.day,
                                                " at ",
                                                tt.bellTime,
                                                " • ",
                                                formatBellTypeName(tt.bellType)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/school-bell-system/components/timetable.tsx",
                                            lineNumber: 409,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-foreground/50",
                                            children: [
                                                "Voice: ",
                                                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$voice$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VOICE_OPTIONS"][tt.voice]?.name || __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$voice$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VOICE_OPTIONS"]["openai-onyx"].name,
                                                tt.customMessage && " • Custom Message"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/school-bell-system/components/timetable.tsx",
                                            lineNumber: 412,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/school-bell-system/components/timetable.tsx",
                                    lineNumber: 407,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "ghost",
                                            size: "sm",
                                            onClick: async ()=>{
                                                // Use custom message if provided, otherwise generate based on task type
                                                let message;
                                                if (tt.customMessage) {
                                                    message = tt.customMessage;
                                                } else {
                                                    // Auto-generate message based on task type
                                                    const taskType = tt.name.toLowerCase().includes("assembly") ? "assembly" : tt.name.toLowerCase().includes("break") ? "break" : tt.name.toLowerCase().includes("lunch") ? "lunch" : tt.name.toLowerCase().includes("dismissal") ? "dismissal" : tt.name.toLowerCase().includes("emergency") ? "emergency" : "class";
                                                    switch(taskType){
                                                        case "class":
                                                            message = `Attention all students, it is time for ${tt.name}. Please proceed to your classrooms.`;
                                                            break;
                                                        case "break":
                                                            message = `Attention all students, it is time for ${tt.name}. You may now leave your classrooms.`;
                                                            break;
                                                        case "assembly":
                                                            message = `Attention all students and staff, it is time for ${tt.name}. Please proceed to the assembly hall.`;
                                                            break;
                                                        case "lunch":
                                                            message = `Attention all students, it is time for ${tt.name}. Please proceed to the dining hall.`;
                                                            break;
                                                        case "dismissal":
                                                            message = `Attention all students, it is time for ${tt.name}. Please collect your belongings and proceed to the exit.`;
                                                            break;
                                                        case "emergency":
                                                            message = `Emergency alert. ${tt.name}. All students and staff must follow emergency procedures immediately.`;
                                                            break;
                                                        default:
                                                            message = `Attention all students, it is time for ${tt.name}.`;
                                                    }
                                                }
                                                await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$complete$2d$bell$2d$system$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CompleteBellSystem"].playBellSequence(tt.name, message, {
                                                    bellType: tt.bellType,
                                                    voice: tt.voice || "openai-onyx",
                                                    useHighQualityVoice: true,
                                                    repeatCount: 1,
                                                    customAudioId: tt.customAudioId // Pass custom audio ID
                                                });
                                            },
                                            className: "text-green-600 hover:text-green-700",
                                            title: "Test Complete Bell (Tone + Voice)",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/school-bell-system/components/timetable.tsx",
                                                lineNumber: 474,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/school-bell-system/components/timetable.tsx",
                                            lineNumber: 418,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "ghost",
                                            size: "sm",
                                            onClick: ()=>startEdit(tt.id),
                                            className: "text-blue-600 hover:text-blue-700",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/school-bell-system/components/timetable.tsx",
                                                lineNumber: 482,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/school-bell-system/components/timetable.tsx",
                                            lineNumber: 476,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "ghost",
                                            size: "sm",
                                            onClick: ()=>removeTimetable(tt.id),
                                            className: "text-red-600 hover:text-red-700",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/school-bell-system/components/timetable.tsx",
                                                lineNumber: 490,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/school-bell-system/components/timetable.tsx",
                                            lineNumber: 484,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/school-bell-system/components/timetable.tsx",
                                    lineNumber: 417,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/school-bell-system/components/timetable.tsx",
                            lineNumber: 406,
                            columnNumber: 15
                        }, this)
                    }, tt.id, false, {
                        fileName: "[project]/Downloads/school-bell-system/components/timetable.tsx",
                        lineNumber: 405,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Downloads/school-bell-system/components/timetable.tsx",
                lineNumber: 396,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/school-bell-system/components/timetable.tsx",
        lineNumber: 186,
        columnNumber: 5
    }, this);
}
_s(Timetable, "idIeOVVhc4R9DXT9eb8IAuVJg7s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"]
    ];
});
_c = Timetable;
var _c;
__turbopack_context__.k.register(_c, "Timetable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/school-bell-system/components/students.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Students",
    ()=>Students
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/lib/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function Students() {
    _s();
    const { students, addStudent, removeStudent } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])();
    const [showForm, setShowForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        firstName: "",
        lastName: "",
        class: "",
        useCustomClass: false
    });
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const classes = [
        "JHS 1 Blue",
        "JHS 1 Green",
        "JHS 1 Red",
        "JHS 2 Blue",
        "JHS 2 Green",
        "JHS 2 Red",
        "JHS 3 Blue",
        "JHS 3 Green",
        "JHS 3 Red"
    ];
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (!formData.firstName || !formData.lastName) return;
        addStudent({
            id: Date.now().toString(),
            firstName: formData.firstName,
            lastName: formData.lastName,
            class: formData.class || undefined
        });
        setFormData({
            firstName: "",
            lastName: "",
            class: "",
            useCustomClass: false
        });
        setShowForm(false);
    };
    const filteredStudents = students.filter((s)=>`${s.firstName} ${s.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8 flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl font-bold text-foreground mb-2",
                                children: "Students"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/school-bell-system/components/students.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-foreground/60",
                                children: "Manage student database"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/school-bell-system/components/students.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/school-bell-system/components/students.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: ()=>setShowForm(!showForm),
                        className: "bg-blue-600 hover:bg-blue-700 text-white gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/school-bell-system/components/students.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            "Add Student"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/school-bell-system/components/students.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/school-bell-system/components/students.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                    placeholder: "Search by name...",
                    value: searchTerm,
                    onChange: (e)=>setSearchTerm(e.target.value)
                }, void 0, false, {
                    fileName: "[project]/Downloads/school-bell-system/components/students.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/school-bell-system/components/students.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            showForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "mb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "pt-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit,
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-sm font-semibold text-foreground mb-1 block",
                                                children: "First Name"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/school-bell-system/components/students.tsx",
                                                lineNumber: 77,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                value: formData.firstName,
                                                onChange: (e)=>setFormData({
                                                        ...formData,
                                                        firstName: e.target.value
                                                    }),
                                                placeholder: "First name",
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/school-bell-system/components/students.tsx",
                                                lineNumber: 78,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/school-bell-system/components/students.tsx",
                                        lineNumber: 76,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-sm font-semibold text-foreground mb-1 block",
                                                children: "Last Name"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/school-bell-system/components/students.tsx",
                                                lineNumber: 87,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                value: formData.lastName,
                                                onChange: (e)=>setFormData({
                                                        ...formData,
                                                        lastName: e.target.value
                                                    }),
                                                placeholder: "Last name",
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/school-bell-system/components/students.tsx",
                                                lineNumber: 88,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/school-bell-system/components/students.tsx",
                                        lineNumber: 86,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/school-bell-system/components/students.tsx",
                                lineNumber: 75,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                id: "useCustom",
                                                checked: formData.useCustomClass,
                                                onChange: (e)=>setFormData({
                                                        ...formData,
                                                        useCustomClass: e.target.checked,
                                                        class: ""
                                                    }),
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/school-bell-system/components/students.tsx",
                                                lineNumber: 99,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "useCustom",
                                                className: "text-sm font-semibold text-foreground",
                                                children: "Use custom class name"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/school-bell-system/components/students.tsx",
                                                lineNumber: 106,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/school-bell-system/components/students.tsx",
                                        lineNumber: 98,
                                        columnNumber: 17
                                    }, this),
                                    formData.useCustomClass ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        value: formData.class,
                                        onChange: (e)=>setFormData({
                                                ...formData,
                                                class: e.target.value
                                            }),
                                        placeholder: "e.g., Form 2A, Grade 7, Senior 2"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/school-bell-system/components/students.tsx",
                                        lineNumber: 112,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: formData.class,
                                        onChange: (e)=>setFormData({
                                                ...formData,
                                                class: e.target.value
                                            }),
                                        className: "w-full p-2 border border-border rounded-lg bg-background",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "Select class (optional)"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/school-bell-system/components/students.tsx",
                                                lineNumber: 123,
                                                columnNumber: 21
                                            }, this),
                                            classes.map((cls)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: cls,
                                                    children: cls
                                                }, cls, false, {
                                                    fileName: "[project]/Downloads/school-bell-system/components/students.tsx",
                                                    lineNumber: 125,
                                                    columnNumber: 23
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/school-bell-system/components/students.tsx",
                                        lineNumber: 118,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/school-bell-system/components/students.tsx",
                                lineNumber: 97,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        type: "submit",
                                        className: "bg-green-600 hover:bg-green-700 text-white",
                                        children: "Add Student"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/school-bell-system/components/students.tsx",
                                        lineNumber: 134,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        type: "button",
                                        variant: "outline",
                                        onClick: ()=>setShowForm(false),
                                        children: "Cancel"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/school-bell-system/components/students.tsx",
                                        lineNumber: 137,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/school-bell-system/components/students.tsx",
                                lineNumber: 133,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/school-bell-system/components/students.tsx",
                        lineNumber: 74,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/school-bell-system/components/students.tsx",
                    lineNumber: 73,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/school-bell-system/components/students.tsx",
                lineNumber: 72,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                children: filteredStudents.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    className: "col-span-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                        className: "pt-6 text-center text-foreground/60",
                        children: "No students found."
                    }, void 0, false, {
                        fileName: "[project]/Downloads/school-bell-system/components/students.tsx",
                        lineNumber: 149,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/school-bell-system/components/students.tsx",
                    lineNumber: 148,
                    columnNumber: 11
                }, this) : filteredStudents.map((student)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            className: "pt-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-start mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-semibold text-foreground",
                                                children: [
                                                    student.firstName,
                                                    " ",
                                                    student.lastName
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/school-bell-system/components/students.tsx",
                                                lineNumber: 157,
                                                columnNumber: 21
                                            }, this),
                                            student.class && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-foreground/60",
                                                children: student.class
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/school-bell-system/components/students.tsx",
                                                lineNumber: 160,
                                                columnNumber: 39
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/school-bell-system/components/students.tsx",
                                        lineNumber: 156,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        size: "sm",
                                        onClick: ()=>removeStudent(student.id),
                                        className: "text-red-600 hover:text-red-700",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/school-bell-system/components/students.tsx",
                                            lineNumber: 168,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/school-bell-system/components/students.tsx",
                                        lineNumber: 162,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/school-bell-system/components/students.tsx",
                                lineNumber: 155,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/school-bell-system/components/students.tsx",
                            lineNumber: 154,
                            columnNumber: 15
                        }, this)
                    }, student.id, false, {
                        fileName: "[project]/Downloads/school-bell-system/components/students.tsx",
                        lineNumber: 153,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Downloads/school-bell-system/components/students.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/school-bell-system/components/students.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
_s(Students, "pA8vq3536F9iuY/53gWWgl1939I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"]
    ];
});
_c = Students;
var _c;
__turbopack_context__.k.register(_c, "Students");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/school-bell-system/components/call-student.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CallStudent",
    ()=>CallStudent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/lib/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/lucide-react/dist/esm/icons/volume-2.js [app-client] (ecmascript) <export default as Volume2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$voice$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/lib/voice-utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function CallStudent() {
    _s();
    const { students, devices, settings, addCallRequest } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])();
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedStudent, setSelectedStudent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [customMessage, setCustomMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedTemplate, setSelectedTemplate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("office");
    const [selectedVoice, setSelectedVoice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(settings.defaultVoice);
    const [selectedLanguage, setSelectedLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(settings.defaultLanguage);
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const templates = [
        {
            id: "office",
            text: "should report to the office"
        },
        {
            id: "parent",
            text: "your parent is waiting at the gate"
        },
        {
            id: "staff",
            text: "please come to the staff common room"
        }
    ];
    const filteredStudents = students.filter((s)=>`${s.firstName} ${s.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()));
    const handleCallStudent = async ()=>{
        if (!selectedStudent) return;
        const student = students.find((s)=>s.id === selectedStudent);
        if (!student) return;
        const baseMessage = customMessage || `Student ${student.firstName} ${student.lastName}, ${templates.find((t)=>t.id === selectedTemplate)?.text || ""}`;
        const finalMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$voice$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translateMessage"])(baseMessage, selectedLanguage);
        const request = {
            id: Date.now().toString(),
            studentId: selectedStudent,
            message: finalMessage,
            timestamp: new Date().toISOString(),
            status: "played",
            voice: selectedVoice,
            language: selectedLanguage
        };
        addCallRequest(request);
        setIsPlaying(true);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$voice$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playTextToSpeech"])(finalMessage, selectedVoice, selectedLanguage);
        setIsPlaying(false);
        setSelectedStudent(null);
        setCustomMessage("");
    };
    const playAudio = async (text, voice)=>{
        setIsPlaying(true);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$voice$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playTextToSpeech"])(text, voice, selectedLanguage);
        setIsPlaying(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl font-bold text-foreground mb-2",
                        children: "Call Student"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/school-bell-system/components/call-student.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-foreground/60",
                        children: "Use Text-to-Speech to call students in multiple languages"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/school-bell-system/components/call-student.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/school-bell-system/components/call-student.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        children: "Search & Call Student"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/school-bell-system/components/call-student.tsx",
                                        lineNumber: 81,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/school-bell-system/components/call-student.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-sm font-semibold text-foreground mb-2 block",
                                                    children: "Search Student"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/school-bell-system/components/call-student.tsx",
                                                    lineNumber: 85,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                    placeholder: "Type student name...",
                                                    value: searchTerm,
                                                    onChange: (e)=>setSearchTerm(e.target.value),
                                                    disabled: isPlaying
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/school-bell-system/components/call-student.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/school-bell-system/components/call-student.tsx",
                                            lineNumber: 84,
                                            columnNumber: 15
                                        }, this),
                                        searchTerm && filteredStudents.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-sm font-semibold text-foreground mb-2 block",
                                                    children: [
                                                        "Results (",
                                                        filteredStudents.length,
                                                        ")"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/school-bell-system/components/call-student.tsx",
                                                    lineNumber: 96,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2 max-h-48 overflow-y-auto",
                                                    children: filteredStudents.map((student)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setSelectedStudent(student.id),
                                                            disabled: isPlaying,
                                                            className: `w-full p-3 text-left rounded-lg border-2 transition ${selectedStudent === student.id ? "border-blue-500 bg-blue-50 dark:bg-blue-950" : "border-border hover:border-blue-300"} ${isPlaying ? "opacity-50 cursor-not-allowed" : ""}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "font-semibold text-foreground",
                                                                    children: [
                                                                        student.firstName,
                                                                        " ",
                                                                        student.lastName
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Downloads/school-bell-system/components/call-student.tsx",
                                                                    lineNumber: 110,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm text-foreground/60",
                                                                    children: student.class || "No class assigned"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/school-bell-system/components/call-student.tsx",
                                                                    lineNumber: 113,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, student.id, true, {
                                                            fileName: "[project]/Downloads/school-bell-system/components/call-student.tsx",
                                                            lineNumber: 101,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/school-bell-system/components/call-student.tsx",
                                                    lineNumber: 99,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/school-bell-system/components/call-student.tsx",
                                            lineNumber: 95,
                                            columnNumber: 17
                                        }, this),
                                        selectedStudent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-sm font-semibold text-foreground mb-2 block",
                                                            children: "Message Template"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/school-bell-system/components/call-student.tsx",
                                                            lineNumber: 123,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-2",
                                                            children: templates.map((tmpl)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>setSelectedTemplate(tmpl.id),
                                                                    disabled: isPlaying,
                                                                    className: `w-full p-3 text-left rounded-lg border-2 transition ${selectedTemplate === tmpl.id ? "border-green-500 bg-green-50 dark:bg-green-950" : "border-border"} ${isPlaying ? "opacity-50 cursor-not-allowed" : ""}`,
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "font-semibold text-foreground",
                                                                        children: [
                                                                            "Student ",
                                                                            students.find((s)=>s.id === selectedStudent)?.firstName,
                                                                            ", ",
                                                                            tmpl.text
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Downloads/school-bell-system/components/call-student.tsx",
                                                                        lineNumber: 135,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, tmpl.id, false, {
                                                                    fileName: "[project]/Downloads/school-bell-system/components/call-student.tsx",
                                                                    lineNumber: 126,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/school-bell-system/components/call-student.tsx",
                                                            lineNumber: 124,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/school-bell-system/components/call-student.tsx",
                                                    lineNumber: 122,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-sm font-semibold text-foreground mb-2 block",
                                                            children: "Custom Message (Optional)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/school-bell-system/components/call-student.tsx",
                                                            lineNumber: 144,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                            placeholder: "Enter custom message or leave blank to use template...",
                                                            value: customMessage,
                                                            onChange: (e)=>setCustomMessage(e.target.value),
                                                            disabled: isPlaying,
                                                            className: "w-full p-3 border border-border rounded-lg bg-background text-foreground disabled:opacity-50",
                                                            rows: 3
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/school-bell-system/components/call-student.tsx",
                                                            lineNumber: 147,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/school-bell-system/components/call-student.tsx",
                                                    lineNumber: 143,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    onClick: handleCallStudent,
                                                    disabled: isPlaying,
                                                    className: "w-full bg-blue-600 hover:bg-blue-700 text-white gap-2 disabled:opacity-50",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/school-bell-system/components/call-student.tsx",
                                                            lineNumber: 162,
                                                            columnNumber: 21
                                                        }, this),
                                                        isPlaying ? "Playing..." : "Call Now"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/school-bell-system/components/call-student.tsx",
                                                    lineNumber: 157,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/school-bell-system/components/call-student.tsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/school-bell-system/components/call-student.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/school-bell-system/components/call-student.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                            className: "text-lg",
                                            children: "Speaker Zones"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/school-bell-system/components/call-student.tsx",
                                            lineNumber: 174,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/school-bell-system/components/call-student.tsx",
                                        lineNumber: 173,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                        className: "space-y-2",
                                        children: devices.map((device)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-3 rounded-lg bg-muted flex items-center justify-between",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-semibold text-foreground",
                                                            children: device.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/school-bell-system/components/call-student.tsx",
                                                            lineNumber: 180,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `text-xs ${device.status === "online" ? "text-green-600" : "text-red-600"}`,
                                                            children: device.status === "online" ? "● Online" : "● Offline"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/school-bell-system/components/call-student.tsx",
                                                            lineNumber: 181,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/school-bell-system/components/call-student.tsx",
                                                    lineNumber: 179,
                                                    columnNumber: 19
                                                }, this)
                                            }, device.id, false, {
                                                fileName: "[project]/Downloads/school-bell-system/components/call-student.tsx",
                                                lineNumber: 178,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/school-bell-system/components/call-student.tsx",
                                        lineNumber: 176,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/school-bell-system/components/call-student.tsx",
                                lineNumber: 172,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                            className: "text-lg",
                                            children: "Quick Info"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/school-bell-system/components/call-student.tsx",
                                            lineNumber: 192,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/school-bell-system/components/call-student.tsx",
                                        lineNumber: 191,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                        className: "text-sm text-foreground/70 space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "✓ Select a student"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/school-bell-system/components/call-student.tsx",
                                                lineNumber: 195,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "✓ Select message template"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/school-bell-system/components/call-student.tsx",
                                                lineNumber: 196,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: '✓ Click "Call Now" to play'
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/school-bell-system/components/call-student.tsx",
                                                lineNumber: 197,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/school-bell-system/components/call-student.tsx",
                                        lineNumber: 194,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/school-bell-system/components/call-student.tsx",
                                lineNumber: 190,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/school-bell-system/components/call-student.tsx",
                        lineNumber: 171,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/school-bell-system/components/call-student.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/school-bell-system/components/call-student.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
_s(CallStudent, "wW+xtAvxDulcvgf7rxgmoWIxSaE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"]
    ];
});
_c = CallStudent;
var _c;
__turbopack_context__.k.register(_c, "CallStudent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/school-bell-system/components/announcements.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Announcements",
    ()=>Announcements
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$voice$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/lib/voice-utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/lib/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/lucide-react/dist/esm/icons/volume-2.js [app-client] (ecmascript) <export default as Volume2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/lucide-react/dist/esm/icons/pencil.js [app-client] (ecmascript) <export default as Pencil>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function Announcements() {
    _s();
    const { settings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])();
    const [announcements, setAnnouncements] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: 1,
            title: "Assembly Tomorrow",
            content: "All students attend assembly at 8 AM tomorrow",
            date: "2024-01-15",
            voice: settings.defaultVoice,
            language: settings.defaultLanguage,
            repeatCount: 1
        }
    ]);
    const [showForm, setShowForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        title: "",
        content: "",
        voice: settings.defaultVoice,
        language: settings.defaultLanguage,
        repeatCount: settings.defaultRepeatCount || 1
    });
    const [playingId, setPlayingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [lastPlayedId, setLastPlayedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editingId, setEditingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleSubmit = (e)=>{
        e.preventDefault();
        const newAnnouncement = {
            id: Date.now(),
            title: formData.title,
            content: formData.content,
            date: new Date().toISOString().split("T")[0],
            voice: formData.voice,
            language: formData.language,
            repeatCount: formData.repeatCount
        };
        if (editingId) {
            setAnnouncements(announcements.map((a)=>a.id === editingId ? {
                    ...newAnnouncement,
                    id: editingId,
                    date: a.date
                } : a));
            setEditingId(null);
        } else {
            setAnnouncements([
                ...announcements,
                newAnnouncement
            ]);
        }
        setFormData({
            title: "",
            content: "",
            voice: settings.defaultVoice,
            language: settings.defaultLanguage,
            repeatCount: settings.defaultRepeatCount || 1
        });
        setShowForm(false);
    };
    const playAnnouncement = async (id, text, voice, language, repeatCount = 1)=>{
        console.log('Playing announcement with repeat count:', repeatCount);
        setPlayingId(id);
        for(let i = 0; i < repeatCount; i++){
            console.log(`Playing repetition ${i + 1} of ${repeatCount}`);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$voice$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playTextToSpeech"])(text, voice, language);
            // Add a small delay between repetitions if not the last one
            if (i < repeatCount - 1) {
                await new Promise((resolve)=>setTimeout(resolve, 1500));
            }
        }
        setPlayingId(null);
        setLastPlayedId(id);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8 flex justify-between items-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl font-bold text-foreground mb-2",
                            children: "Announcements"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/school-bell-system/components/announcements.tsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-foreground/60",
                            children: "Create and manage audio announcements in multiple voices & languages"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/school-bell-system/components/announcements.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/school-bell-system/components/announcements.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/school-bell-system/components/announcements.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                onClick: ()=>{
                    setShowForm(!showForm);
                    setEditingId(null);
                    setFormData({
                        title: "",
                        content: "",
                        voice: settings.defaultVoice,
                        language: settings.defaultLanguage,
                        repeatCount: settings.defaultRepeatCount || 1
                    });
                },
                className: "bg-blue-600 hover:bg-blue-700 text-white gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/school-bell-system/components/announcements.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this),
                    "New Announcement"
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/school-bell-system/components/announcements.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            showForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "mb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "pt-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit,
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-sm font-semibold text-foreground mb-1 block",
                                        children: "Title"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/school-bell-system/components/announcements.tsx",
                                        lineNumber: 113,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: formData.title,
                                        onChange: (e)=>setFormData({
                                                ...formData,
                                                title: e.target.value
                                            }),
                                        className: "w-full p-2 border border-border rounded-lg bg-background",
                                        placeholder: "Announcement title",
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/school-bell-system/components/announcements.tsx",
                                        lineNumber: 114,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/school-bell-system/components/announcements.tsx",
                                lineNumber: 112,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-sm font-semibold text-foreground mb-1 block",
                                        children: "Message"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/school-bell-system/components/announcements.tsx",
                                        lineNumber: 125,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        value: formData.content,
                                        onChange: (e)=>setFormData({
                                                ...formData,
                                                content: e.target.value
                                            }),
                                        className: "w-full p-2 border border-border rounded-lg bg-background",
                                        placeholder: "Write announcement message",
                                        rows: 4,
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/school-bell-system/components/announcements.tsx",
                                        lineNumber: 126,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/school-bell-system/components/announcements.tsx",
                                lineNumber: 124,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-sm font-semibold text-foreground mb-1 block",
                                        children: "Voice"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/school-bell-system/components/announcements.tsx",
                                        lineNumber: 137,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: formData.voice,
                                        onChange: (e)=>setFormData({
                                                ...formData,
                                                voice: e.target.value
                                            }),
                                        className: "w-full p-2 border border-border rounded-lg bg-background text-foreground",
                                        children: Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$voice$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VOICE_OPTIONS"]).map(([key, data])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: key,
                                                children: data.name
                                            }, key, false, {
                                                fileName: "[project]/Downloads/school-bell-system/components/announcements.tsx",
                                                lineNumber: 144,
                                                columnNumber: 23
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/school-bell-system/components/announcements.tsx",
                                        lineNumber: 138,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/school-bell-system/components/announcements.tsx",
                                lineNumber: 136,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-sm font-semibold text-foreground mb-1 block",
                                        children: "Language"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/school-bell-system/components/announcements.tsx",
                                        lineNumber: 152,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: formData.language,
                                        onChange: (e)=>setFormData({
                                                ...formData,
                                                language: e.target.value
                                            }),
                                        className: "w-full p-2 border border-border rounded-lg bg-background text-foreground",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "english",
                                                children: "English"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/school-bell-system/components/announcements.tsx",
                                                lineNumber: 158,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "hausa",
                                                children: "Hausa"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/school-bell-system/components/announcements.tsx",
                                                lineNumber: 159,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "twi",
                                                children: "Twi"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/school-bell-system/components/announcements.tsx",
                                                lineNumber: 160,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "arabic",
                                                children: "Arabic"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/school-bell-system/components/announcements.tsx",
                                                lineNumber: 161,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/school-bell-system/components/announcements.tsx",
                                        lineNumber: 153,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/school-bell-system/components/announcements.tsx",
                                lineNumber: 151,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-sm font-semibold text-foreground mb-1 block",
                                        children: "Repeat Count"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/school-bell-system/components/announcements.tsx",
                                        lineNumber: 166,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        min: "1",
                                        max: "10",
                                        value: formData.repeatCount,
                                        onChange: (e)=>setFormData({
                                                ...formData,
                                                repeatCount: parseInt(e.target.value) || 1
                                            }),
                                        className: "w-full p-2 border border-border rounded-lg bg-background",
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/school-bell-system/components/announcements.tsx",
                                        lineNumber: 167,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/school-bell-system/components/announcements.tsx",
                                lineNumber: 165,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        type: "submit",
                                        className: "bg-green-600 hover:bg-green-700 text-white",
                                        children: editingId ? "Update Announcement" : "Create Announcement"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/school-bell-system/components/announcements.tsx",
                                        lineNumber: 179,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        type: "button",
                                        variant: "outline",
                                        onClick: ()=>setShowForm(false),
                                        children: "Cancel"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/school-bell-system/components/announcements.tsx",
                                        lineNumber: 182,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/school-bell-system/components/announcements.tsx",
                                lineNumber: 178,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/school-bell-system/components/announcements.tsx",
                        lineNumber: 111,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/school-bell-system/components/announcements.tsx",
                    lineNumber: 110,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/school-bell-system/components/announcements.tsx",
                lineNumber: 109,
                columnNumber: 11
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: announcements.map((ann)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            className: "pt-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-start",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-semibold text-foreground",
                                                        children: ann.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/school-bell-system/components/announcements.tsx",
                                                        lineNumber: 199,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        variant: "ghost",
                                                        size: "icon",
                                                        className: "h-6 w-6 text-foreground/40 hover:text-foreground",
                                                        onClick: ()=>{
                                                            setFormData({
                                                                title: ann.title,
                                                                content: ann.content,
                                                                voice: ann.voice,
                                                                language: ann.language,
                                                                repeatCount: ann.repeatCount || 1
                                                            });
                                                            setEditingId(ann.id);
                                                            setShowForm(true);
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                                            className: "w-3 h-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/school-bell-system/components/announcements.tsx",
                                                            lineNumber: 216,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/school-bell-system/components/announcements.tsx",
                                                        lineNumber: 200,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/school-bell-system/components/announcements.tsx",
                                                lineNumber: 198,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-foreground/70 mt-1",
                                                children: ann.content
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/school-bell-system/components/announcements.tsx",
                                                lineNumber: 219,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-4 text-xs text-foreground/60 mt-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "Voice: ",
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$voice$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VOICE_OPTIONS"][ann.voice]?.name || "Standard"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/school-bell-system/components/announcements.tsx",
                                                        lineNumber: 221,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "Language: ",
                                                            ann.language
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/school-bell-system/components/announcements.tsx",
                                                        lineNumber: 222,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "Repeats: ",
                                                            ann.repeatCount || 1
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/school-bell-system/components/announcements.tsx",
                                                        lineNumber: 223,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: ann.date
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/school-bell-system/components/announcements.tsx",
                                                        lineNumber: 224,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/school-bell-system/components/announcements.tsx",
                                                lineNumber: 220,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/school-bell-system/components/announcements.tsx",
                                        lineNumber: 197,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "outline",
                                        size: "sm",
                                        onClick: ()=>playAnnouncement(ann.id, ann.content, ann.voice, ann.language, ann.repeatCount || 1),
                                        disabled: playingId === ann.id,
                                        className: "gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/school-bell-system/components/announcements.tsx",
                                                lineNumber: 234,
                                                columnNumber: 19
                                            }, this),
                                            playingId === ann.id ? "Playing..." : "Preview"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/school-bell-system/components/announcements.tsx",
                                        lineNumber: 227,
                                        columnNumber: 17
                                    }, this),
                                    lastPlayedId === ann.id && playingId !== ann.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        size: "sm",
                                        onClick: ()=>playAnnouncement(ann.id, ann.content, ann.voice, ann.language, ann.repeatCount || 1),
                                        className: "gap-2 ml-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/school-bell-system/components/announcements.tsx",
                                                lineNumber: 244,
                                                columnNumber: 21
                                            }, this),
                                            "Replay"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/school-bell-system/components/announcements.tsx",
                                        lineNumber: 238,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/school-bell-system/components/announcements.tsx",
                                lineNumber: 196,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/school-bell-system/components/announcements.tsx",
                            lineNumber: 195,
                            columnNumber: 13
                        }, this)
                    }, ann.id, false, {
                        fileName: "[project]/Downloads/school-bell-system/components/announcements.tsx",
                        lineNumber: 194,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Downloads/school-bell-system/components/announcements.tsx",
                lineNumber: 192,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/school-bell-system/components/announcements.tsx",
        lineNumber: 86,
        columnNumber: 5
    }, this);
}
_s(Announcements, "8knL+lAcTYRnI0UALEc4MTVqaFs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"]
    ];
});
_c = Announcements;
var _c;
__turbopack_context__.k.register(_c, "Announcements");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/school-bell-system/components/devices.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Devices",
    ()=>Devices
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/lib/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/lucide-react/dist/esm/icons/wifi.js [app-client] (ecmascript) <export default as Wifi>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__WifiOff$3e$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/lucide-react/dist/esm/icons/wifi-off.js [app-client] (ecmascript) <export default as WifiOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function Devices() {
    _s();
    const { devices, addDevice, removeDevice } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])();
    const [showForm, setShowForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        type: "esp32"
    });
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (!formData.name) return;
        addDevice({
            id: Date.now().toString(),
            name: formData.name,
            type: formData.type,
            status: "online",
            lastSeen: new Date().toISOString()
        });
        setFormData({
            name: "",
            type: "esp32"
        });
        setShowForm(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8 flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl font-bold text-foreground mb-2",
                                children: "Devices"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/school-bell-system/components/devices.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-foreground/60",
                                children: "Manage speakers and hardware devices"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/school-bell-system/components/devices.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/school-bell-system/components/devices.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: ()=>setShowForm(!showForm),
                        className: "bg-blue-600 hover:bg-blue-700 text-white gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/school-bell-system/components/devices.tsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this),
                            "Add Device"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/school-bell-system/components/devices.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/school-bell-system/components/devices.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            showForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "mb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "pt-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit,
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-sm font-semibold text-foreground mb-1 block",
                                        children: "Device Name"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/school-bell-system/components/devices.tsx",
                                        lineNumber: 54,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        value: formData.name,
                                        onChange: (e)=>setFormData({
                                                ...formData,
                                                name: e.target.value
                                            }),
                                        placeholder: "e.g., Office Speaker"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/school-bell-system/components/devices.tsx",
                                        lineNumber: 55,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/school-bell-system/components/devices.tsx",
                                lineNumber: 53,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-sm font-semibold text-foreground mb-1 block",
                                        children: "Device Type"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/school-bell-system/components/devices.tsx",
                                        lineNumber: 63,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: formData.type,
                                        onChange: (e)=>setFormData({
                                                ...formData,
                                                type: e.target.value
                                            }),
                                        className: "w-full p-2 border border-border rounded-lg bg-background",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "esp32",
                                                children: "ESP32 + DFPlayer"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/school-bell-system/components/devices.tsx",
                                                lineNumber: 69,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "raspberry-pi",
                                                children: "Raspberry Pi"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/school-bell-system/components/devices.tsx",
                                                lineNumber: 70,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/school-bell-system/components/devices.tsx",
                                        lineNumber: 64,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/school-bell-system/components/devices.tsx",
                                lineNumber: 62,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        type: "submit",
                                        className: "bg-green-600 hover:bg-green-700 text-white",
                                        children: "Add Device"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/school-bell-system/components/devices.tsx",
                                        lineNumber: 75,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        type: "button",
                                        variant: "outline",
                                        onClick: ()=>setShowForm(false),
                                        children: "Cancel"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/school-bell-system/components/devices.tsx",
                                        lineNumber: 78,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/school-bell-system/components/devices.tsx",
                                lineNumber: 74,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/school-bell-system/components/devices.tsx",
                        lineNumber: 52,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/school-bell-system/components/devices.tsx",
                    lineNumber: 51,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/school-bell-system/components/devices.tsx",
                lineNumber: 50,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                children: devices.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    className: "col-span-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                        className: "pt-6 text-center text-foreground/60",
                        children: "No devices paired yet."
                    }, void 0, false, {
                        fileName: "[project]/Downloads/school-bell-system/components/devices.tsx",
                        lineNumber: 90,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/school-bell-system/components/devices.tsx",
                    lineNumber: 89,
                    columnNumber: 11
                }, this) : devices.map((device)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            className: "pt-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-start mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-semibold text-foreground",
                                                    children: device.name
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/school-bell-system/components/devices.tsx",
                                                    lineNumber: 98,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-foreground/60 capitalize",
                                                    children: device.type.replace("-", " ")
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/school-bell-system/components/devices.tsx",
                                                    lineNumber: 99,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/school-bell-system/components/devices.tsx",
                                            lineNumber: 97,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "ghost",
                                            size: "sm",
                                            onClick: ()=>removeDevice(device.id),
                                            className: "text-red-600",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/school-bell-system/components/devices.tsx",
                                                lineNumber: 102,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/school-bell-system/components/devices.tsx",
                                            lineNumber: 101,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/school-bell-system/components/devices.tsx",
                                    lineNumber: 96,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 mb-2",
                                    children: device.status === "online" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__["Wifi"], {
                                                className: "w-4 h-4 text-green-600"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/school-bell-system/components/devices.tsx",
                                                lineNumber: 109,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-green-600 font-semibold",
                                                children: "Online"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/school-bell-system/components/devices.tsx",
                                                lineNumber: 110,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__WifiOff$3e$__["WifiOff"], {
                                                className: "w-4 h-4 text-red-600"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/school-bell-system/components/devices.tsx",
                                                lineNumber: 114,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-red-600 font-semibold",
                                                children: "Offline"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/school-bell-system/components/devices.tsx",
                                                lineNumber: 115,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/school-bell-system/components/devices.tsx",
                                    lineNumber: 106,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-foreground/50",
                                    children: [
                                        "Last seen: ",
                                        new Date(device.lastSeen).toLocaleDateString()
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/school-bell-system/components/devices.tsx",
                                    lineNumber: 120,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/school-bell-system/components/devices.tsx",
                            lineNumber: 95,
                            columnNumber: 15
                        }, this)
                    }, device.id, false, {
                        fileName: "[project]/Downloads/school-bell-system/components/devices.tsx",
                        lineNumber: 94,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Downloads/school-bell-system/components/devices.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "mt-8 bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                            className: "text-blue-900 dark:text-blue-100",
                            children: "Offline Mode Support"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/school-bell-system/components/devices.tsx",
                            lineNumber: 131,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/school-bell-system/components/devices.tsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                        className: "text-blue-800 dark:text-blue-100 space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "✓ All devices store schedules locally"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/school-bell-system/components/devices.tsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "✓ Bells ring automatically even without internet"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/school-bell-system/components/devices.tsx",
                                lineNumber: 135,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "✓ Student name calls queued and played when online"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/school-bell-system/components/devices.tsx",
                                lineNumber: 136,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/school-bell-system/components/devices.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/school-bell-system/components/devices.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/school-bell-system/components/devices.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_s(Devices, "ODfs8AeFOHlIb1DlW12ENr/qhCM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"]
    ];
});
_c = Devices;
var _c;
__turbopack_context__.k.register(_c, "Devices");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/school-bell-system/components/logs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Logs",
    ()=>Logs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/lib/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Logs() {
    _s();
    const { callRequests, timetables, clearCallRequests } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])();
    const logs = [
        ...timetables.map((tt)=>({
                id: tt.id,
                type: "bell",
                message: `${tt.name} triggered`,
                timestamp: new Date().toISOString(),
                status: "success"
            })),
        ...callRequests.map((cr)=>({
                id: cr.id,
                type: "student-call",
                message: cr.message,
                timestamp: cr.timestamp,
                status: cr.status
            }))
    ].sort((a, b)=>new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
    const handleClearLogs = ()=>{
        if (window.confirm("Are you sure you want to clear all logs? This cannot be undone.")) {
            clearCallRequests();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8 flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl font-bold text-foreground mb-2",
                                children: "Logs & Reports"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/school-bell-system/components/logs.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-foreground/60",
                                children: "Activity history and system events"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/school-bell-system/components/logs.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/school-bell-system/components/logs.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    logs.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: handleClearLogs,
                        className: "bg-red-600 hover:bg-red-700 text-white gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/school-bell-system/components/logs.tsx",
                                lineNumber: 43,
                                columnNumber: 13
                            }, this),
                            "Clear All Logs"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/school-bell-system/components/logs.tsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/school-bell-system/components/logs.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                            children: "Recent Activity"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/school-bell-system/components/logs.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/school-bell-system/components/logs.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                        children: logs.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-foreground/60 text-center py-8",
                            children: "No activity yet"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/school-bell-system/components/logs.tsx",
                            lineNumber: 55,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: logs.map((log)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-start pb-3 border-b border-border last:border-b-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm font-semibold text-foreground capitalize",
                                                    children: log.type === "bell" ? "Bell" : "Student Call"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/school-bell-system/components/logs.tsx",
                                                    lineNumber: 64,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-foreground/70 mt-1",
                                                    children: log.message
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/school-bell-system/components/logs.tsx",
                                                    lineNumber: 67,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/school-bell-system/components/logs.tsx",
                                            lineNumber: 63,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-right",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `text-xs px-2 py-1 rounded-full ${log.status === "success" || log.status === "played" ? "bg-green-100 text-green-800 dark:bg-green-950 dark:text-green-200" : "bg-yellow-100 text-yellow-800 dark:bg-yellow-950 dark:text-yellow-200"}`,
                                                    children: log.status
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/school-bell-system/components/logs.tsx",
                                                    lineNumber: 70,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-foreground/50 mt-1",
                                                    children: new Date(log.timestamp).toLocaleTimeString()
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/school-bell-system/components/logs.tsx",
                                                    lineNumber: 79,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/school-bell-system/components/logs.tsx",
                                            lineNumber: 69,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, log.id, true, {
                                    fileName: "[project]/Downloads/school-bell-system/components/logs.tsx",
                                    lineNumber: 59,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/school-bell-system/components/logs.tsx",
                            lineNumber: 57,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/school-bell-system/components/logs.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/school-bell-system/components/logs.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/school-bell-system/components/logs.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_s(Logs, "F1KJTMFx2nY9dW61+eXKewUB7dI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"]
    ];
});
_c = Logs;
var _c;
__turbopack_context__.k.register(_c, "Logs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/school-bell-system/hooks/use-toast.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "reducer",
    ()=>reducer,
    "toast",
    ()=>toast,
    "useToast",
    ()=>useToast
]);
// Inspired by react-hot-toast library
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;
const actionTypes = {
    ADD_TOAST: 'ADD_TOAST',
    UPDATE_TOAST: 'UPDATE_TOAST',
    DISMISS_TOAST: 'DISMISS_TOAST',
    REMOVE_TOAST: 'REMOVE_TOAST'
};
let count = 0;
function genId() {
    count = (count + 1) % Number.MAX_SAFE_INTEGER;
    return count.toString();
}
const toastTimeouts = new Map();
const addToRemoveQueue = (toastId)=>{
    if (toastTimeouts.has(toastId)) {
        return;
    }
    const timeout = setTimeout(()=>{
        toastTimeouts.delete(toastId);
        dispatch({
            type: 'REMOVE_TOAST',
            toastId: toastId
        });
    }, TOAST_REMOVE_DELAY);
    toastTimeouts.set(toastId, timeout);
};
const reducer = (state, action)=>{
    switch(action.type){
        case 'ADD_TOAST':
            return {
                ...state,
                toasts: [
                    action.toast,
                    ...state.toasts
                ].slice(0, TOAST_LIMIT)
            };
        case 'UPDATE_TOAST':
            return {
                ...state,
                toasts: state.toasts.map((t)=>t.id === action.toast.id ? {
                        ...t,
                        ...action.toast
                    } : t)
            };
        case 'DISMISS_TOAST':
            {
                const { toastId } = action;
                // ! Side effects ! - This could be extracted into a dismissToast() action,
                // but I'll keep it here for simplicity
                if (toastId) {
                    addToRemoveQueue(toastId);
                } else {
                    state.toasts.forEach((toast)=>{
                        addToRemoveQueue(toast.id);
                    });
                }
                return {
                    ...state,
                    toasts: state.toasts.map((t)=>t.id === toastId || toastId === undefined ? {
                            ...t,
                            open: false
                        } : t)
                };
            }
        case 'REMOVE_TOAST':
            if (action.toastId === undefined) {
                return {
                    ...state,
                    toasts: []
                };
            }
            return {
                ...state,
                toasts: state.toasts.filter((t)=>t.id !== action.toastId)
            };
    }
};
const listeners = [];
let memoryState = {
    toasts: []
};
function dispatch(action) {
    memoryState = reducer(memoryState, action);
    listeners.forEach((listener)=>{
        listener(memoryState);
    });
}
function toast({ ...props }) {
    const id = genId();
    const update = (props)=>dispatch({
            type: 'UPDATE_TOAST',
            toast: {
                ...props,
                id
            }
        });
    const dismiss = ()=>dispatch({
            type: 'DISMISS_TOAST',
            toastId: id
        });
    dispatch({
        type: 'ADD_TOAST',
        toast: {
            ...props,
            id,
            open: true,
            onOpenChange: (open)=>{
                if (!open) dismiss();
            }
        }
    });
    return {
        id: id,
        dismiss,
        update
    };
}
function useToast() {
    _s();
    const [state, setState] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](memoryState);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useToast.useEffect": ()=>{
            listeners.push(setState);
            return ({
                "useToast.useEffect": ()=>{
                    const index = listeners.indexOf(setState);
                    if (index > -1) {
                        listeners.splice(index, 1);
                    }
                }
            })["useToast.useEffect"];
        }
    }["useToast.useEffect"], [
        state
    ]);
    return {
        ...state,
        toast,
        dismiss: (toastId)=>dispatch({
                type: 'DISMISS_TOAST',
                toastId
            })
    };
}
_s(useToast, "SPWE98mLGnlsnNfIwu/IAKTSZtk=");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/school-bell-system/components/audio-upload.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AudioUpload",
    ()=>AudioUpload
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/lucide-react/dist/esm/icons/pause.js [app-client] (ecmascript) <export default as Pause>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$audio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileAudio$3e$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/lucide-react/dist/esm/icons/file-audio.js [app-client] (ecmascript) <export default as FileAudio>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$audio$2d$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/lib/audio-storage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/hooks/use-toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function AudioUpload({ category = 'general', onAudioSelect, selectedAudioId }) {
    _s();
    const [audios, setAudios] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [uploading, setUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [playingId, setPlayingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [dragActive, setDragActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const audioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AudioUpload.useEffect": ()=>{
            loadAudios();
        }
    }["AudioUpload.useEffect"], [
        category
    ]);
    const loadAudios = async ()=>{
        try {
            const audioList = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$audio$2d$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["audioStorage"].listAudios(category);
            setAudios(audioList.sort((a, b)=>new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime()));
        } catch (error) {
            console.error('Failed to load audios:', error);
            toast({
                title: "Error",
                description: "Failed to load audio files",
                variant: "destructive"
            });
        }
    };
    const handleFileSelect = async (files)=>{
        if (!files || files.length === 0) return;
        const file = files[0];
        // Validate file type
        // Validate file type
        const validTypes = [
            'audio/mpeg',
            'audio/mp3',
            'audio/wav',
            'audio/x-wav',
            'audio/wave',
            'audio/ogg',
            'audio/mp4',
            'audio/x-m4a',
            'audio/aac',
            'audio/webm',
            'audio/flac'
        ];
        const validExtensions = [
            '.mp3',
            '.wav',
            '.ogg',
            '.m4a',
            '.mp4',
            '.aac',
            '.webm',
            '.flac'
        ];
        const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();
        if (!validTypes.includes(file.type) && !validExtensions.includes(fileExtension)) {
            console.error('Invalid file type:', file.type, 'Extension:', fileExtension);
            toast({
                title: "Invalid File",
                description: `File type ${file.type || 'unknown'} not supported. Please upload an audio file.`,
                variant: "destructive"
            });
            return;
        }
        // Validate file size (max 10MB)
        if (file.size > 10 * 1024 * 1024) {
            toast({
                title: "File Too Large",
                description: "Please upload a file smaller than 10MB",
                variant: "destructive"
            });
            return;
        }
        setUploading(true);
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$audio$2d$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["audioStorage"].saveAudio(file, category);
            toast({
                title: "Success",
                description: `${file.name} uploaded successfully`
            });
            await loadAudios();
        } catch (error) {
            console.error('Upload failed:', error);
            toast({
                title: "Upload Failed",
                description: "Failed to save audio file",
                variant: "destructive"
            });
        } finally{
            setUploading(false);
            if (fileInputRef.current) {
                fileInputRef.current.value = '';
            }
        }
    };
    const handleDrag = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };
    const handleDrop = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        handleFileSelect(e.dataTransfer.files);
    };
    const playAudio = async (audio)=>{
        try {
            // Stop current audio if playing
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
            if (playingId === audio.id) {
                setPlayingId(null);
                return;
            }
            const storedAudio = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$audio$2d$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["audioStorage"].getAudio(audio.id);
            if (!storedAudio) return;
            const url = URL.createObjectURL(storedAudio.audioBlob);
            const audioElement = new Audio(url);
            audioElement.onended = ()=>{
                setPlayingId(null);
                URL.revokeObjectURL(url);
            };
            audioElement.onerror = ()=>{
                setPlayingId(null);
                URL.revokeObjectURL(url);
                toast({
                    title: "Playback Error",
                    description: "Failed to play audio file",
                    variant: "destructive"
                });
            };
            audioRef.current = audioElement;
            setPlayingId(audio.id);
            await audioElement.play();
        } catch (error) {
            console.error('Playback failed:', error);
            setPlayingId(null);
        }
    };
    const deleteAudio = async (audioId)=>{
        if (!confirm('Are you sure you want to delete this audio file?')) return;
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$audio$2d$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["audioStorage"].deleteAudio(audioId);
            toast({
                title: "Deleted",
                description: "Audio file deleted successfully"
            });
            await loadAudios();
            if (playingId === audioId) {
                audioRef.current?.pause();
                setPlayingId(null);
            }
        } catch (error) {
            console.error('Delete failed:', error);
            toast({
                title: "Error",
                description: "Failed to delete audio file",
                variant: "destructive"
            });
        }
    };
    const exportAudios = async ()=>{
        try {
            const blob = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$audio$2d$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["audioStorage"].exportAll();
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `school-bell-audio-backup-${new Date().toISOString().split('T')[0]}.json`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            toast({
                title: "Export Successful",
                description: "Audio files exported successfully"
            });
        } catch (error) {
            console.error('Export failed:', error);
            toast({
                title: "Export Failed",
                description: "Failed to export audio files",
                variant: "destructive"
            });
        }
    };
    const importAudios = async (files)=>{
        if (!files || files.length === 0) return;
        const file = files[0];
        if (file.type !== 'application/json') {
            toast({
                title: "Invalid File",
                description: "Please select a valid backup JSON file",
                variant: "destructive"
            });
            return;
        }
        try {
            const imported = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$audio$2d$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["audioStorage"].importAll(file);
            toast({
                title: "Import Successful",
                description: `Imported ${imported} audio file(s)`
            });
            await loadAudios();
        } catch (error) {
            console.error('Import failed:', error);
            toast({
                title: "Import Failed",
                description: "Failed to import audio files",
                variant: "destructive"
            });
        }
    };
    const formatFileSize = (bytes)=>{
        if (bytes < 1024) return bytes + ' B';
        if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
        return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
    };
    const formatDuration = (seconds)=>{
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                        children: "Audio Library"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/school-bell-system/components/audio-upload.tsx",
                        lineNumber: 258,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                        children: "Upload and manage custom audio files for announcements and bells"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/school-bell-system/components/audio-upload.tsx",
                        lineNumber: 259,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/school-bell-system/components/audio-upload.tsx",
                lineNumber: 257,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-2 border-dashed rounded-lg p-8 text-center transition-colors", dragActive ? "border-primary bg-primary/5" : "border-muted-foreground/25", uploading && "opacity-50 pointer-events-none"),
                        onDragEnter: handleDrag,
                        onDragLeave: handleDrag,
                        onDragOver: handleDrag,
                        onDrop: handleDrop,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                className: "w-12 h-12 mx-auto mb-4 text-muted-foreground"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/school-bell-system/components/audio-upload.tsx",
                                lineNumber: 276,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-medium mb-2",
                                children: "Drag and drop audio file here, or click to browse"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/school-bell-system/components/audio-upload.tsx",
                                lineNumber: 277,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-muted-foreground mb-4",
                                children: "Supports MP3, WAV, OGG, M4A (max 10MB)"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/school-bell-system/components/audio-upload.tsx",
                                lineNumber: 280,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                ref: fileInputRef,
                                type: "file",
                                accept: "audio/mpeg,audio/wav,audio/ogg,audio/mp4,audio/x-m4a",
                                onChange: (e)=>handleFileSelect(e.target.files),
                                className: "hidden"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/school-bell-system/components/audio-upload.tsx",
                                lineNumber: 283,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: ()=>fileInputRef.current?.click(),
                                disabled: uploading,
                                children: uploading ? "Uploading..." : "Select File"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/school-bell-system/components/audio-upload.tsx",
                                lineNumber: 290,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/school-bell-system/components/audio-upload.tsx",
                        lineNumber: 265,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                size: "sm",
                                onClick: exportAudios,
                                disabled: audios.length === 0,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                        className: "w-4 h-4 mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/school-bell-system/components/audio-upload.tsx",
                                        lineNumber: 306,
                                        columnNumber: 25
                                    }, this),
                                    "Export All"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/school-bell-system/components/audio-upload.tsx",
                                lineNumber: 300,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                size: "sm",
                                onClick: ()=>{
                                    const input = document.createElement('input');
                                    input.type = 'file';
                                    input.accept = 'application/json';
                                    input.onchange = (e)=>importAudios(e.target.files);
                                    input.click();
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                        className: "w-4 h-4 mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/school-bell-system/components/audio-upload.tsx",
                                        lineNumber: 320,
                                        columnNumber: 25
                                    }, this),
                                    "Import Backup"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/school-bell-system/components/audio-upload.tsx",
                                lineNumber: 309,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/school-bell-system/components/audio-upload.tsx",
                        lineNumber: 299,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: audios.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center py-8 text-muted-foreground",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$audio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileAudio$3e$__["FileAudio"], {
                                    className: "w-12 h-12 mx-auto mb-2 opacity-50"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/school-bell-system/components/audio-upload.tsx",
                                    lineNumber: 329,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm",
                                    children: "No audio files uploaded yet"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/school-bell-system/components/audio-upload.tsx",
                                    lineNumber: 330,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/school-bell-system/components/audio-upload.tsx",
                            lineNumber: 328,
                            columnNumber: 25
                        }, this) : audios.map((audio)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-3 p-3 rounded-lg border transition-colors", selectedAudioId === audio.id ? "border-primary bg-primary/5" : "border-border", onAudioSelect && "cursor-pointer hover:bg-muted/50"),
                                onClick: ()=>onAudioSelect?.(audio.id),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$audio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileAudio$3e$__["FileAudio"], {
                                        className: "w-8 h-8 text-muted-foreground flex-shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/school-bell-system/components/audio-upload.tsx",
                                        lineNumber: 343,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-medium truncate",
                                                children: audio.name
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/school-bell-system/components/audio-upload.tsx",
                                                lineNumber: 345,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-muted-foreground",
                                                children: [
                                                    formatDuration(audio.duration),
                                                    " • ",
                                                    formatFileSize(audio.fileSize)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/school-bell-system/components/audio-upload.tsx",
                                                lineNumber: 346,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/school-bell-system/components/audio-upload.tsx",
                                        lineNumber: 344,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: "ghost",
                                                size: "icon",
                                                onClick: (e)=>{
                                                    e.stopPropagation();
                                                    playAudio(audio);
                                                },
                                                children: playingId === audio.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/school-bell-system/components/audio-upload.tsx",
                                                    lineNumber: 360,
                                                    columnNumber: 45
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/school-bell-system/components/audio-upload.tsx",
                                                    lineNumber: 362,
                                                    columnNumber: 45
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/school-bell-system/components/audio-upload.tsx",
                                                lineNumber: 351,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: "ghost",
                                                size: "icon",
                                                onClick: (e)=>{
                                                    e.stopPropagation();
                                                    deleteAudio(audio.id);
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/school-bell-system/components/audio-upload.tsx",
                                                    lineNumber: 373,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/school-bell-system/components/audio-upload.tsx",
                                                lineNumber: 365,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/school-bell-system/components/audio-upload.tsx",
                                        lineNumber: 350,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, audio.id, true, {
                                fileName: "[project]/Downloads/school-bell-system/components/audio-upload.tsx",
                                lineNumber: 334,
                                columnNumber: 29
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/school-bell-system/components/audio-upload.tsx",
                        lineNumber: 326,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/school-bell-system/components/audio-upload.tsx",
                lineNumber: 263,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/school-bell-system/components/audio-upload.tsx",
        lineNumber: 256,
        columnNumber: 9
    }, this);
}
_s(AudioUpload, "BkrPLSio7LvQWuPPfXg3E7SUofo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = AudioUpload;
var _c;
__turbopack_context__.k.register(_c, "AudioUpload");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/school-bell-system/components/settings.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Settings",
    ()=>Settings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/lib/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SettingsIcon$3e$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as SettingsIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/lucide-react/dist/esm/icons/volume-2.js [app-client] (ecmascript) <export default as Volume2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/lucide-react/dist/esm/icons/mic.js [app-client] (ecmascript) <export default as Mic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/lucide-react/dist/esm/icons/wifi.js [app-client] (ecmascript) <export default as Wifi>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$voice$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/lib/voice-utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$audio$2d$upload$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/components/audio-upload.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$audio$2d$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/lib/audio-storage.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function Settings() {
    _s();
    const { settings, updateSettings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])();
    const [tempSettings, setTempSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(settings);
    const [availableAudios, setAvailableAudios] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Settings.useEffect": ()=>{
            const loadAudios = {
                "Settings.useEffect.loadAudios": async ()=>{
                    const audios = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$audio$2d$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["audioStorage"].listAudios();
                    setAvailableAudios(audios);
                }
            }["Settings.useEffect.loadAudios"];
            loadAudios();
        }
    }["Settings.useEffect"], []);
    const handleSave = ()=>{
        updateSettings(tempSettings);
        alert("Settings saved successfully!");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl font-bold text-foreground mb-2",
                        children: "System Settings"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/school-bell-system/components/settings.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-foreground/60",
                        children: "Configure voices, languages, and Islamic prayer times"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/school-bell-system/components/settings.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/school-bell-system/components/settings.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/school-bell-system/components/settings.tsx",
                                            lineNumber: 43,
                                            columnNumber: 15
                                        }, this),
                                        "Default Voice & Language"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/school-bell-system/components/settings.tsx",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/school-bell-system/components/settings.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-sm font-semibold text-foreground mb-2 block",
                                                children: "Default Voice"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/school-bell-system/components/settings.tsx",
                                                lineNumber: 49,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: tempSettings.defaultVoice,
                                                onChange: (e)=>setTempSettings({
                                                        ...tempSettings,
                                                        defaultVoice: e.target.value
                                                    }),
                                                className: "w-full p-2 border border-border rounded-lg bg-background text-foreground",
                                                children: Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$voice$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VOICE_OPTIONS"]).map(([key, data])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: key,
                                                        children: data.name
                                                    }, key, false, {
                                                        fileName: "[project]/Downloads/school-bell-system/components/settings.tsx",
                                                        lineNumber: 61,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/school-bell-system/components/settings.tsx",
                                                lineNumber: 50,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-foreground/60 mt-2",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$voice$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VOICE_OPTIONS"][tempSettings.defaultVoice].description
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/school-bell-system/components/settings.tsx",
                                                lineNumber: 66,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/school-bell-system/components/settings.tsx",
                                        lineNumber: 48,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-sm font-semibold text-foreground mb-2 block",
                                                children: "Default Language"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/school-bell-system/components/settings.tsx",
                                                lineNumber: 70,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: tempSettings.defaultLanguage,
                                                onChange: (e)=>setTempSettings({
                                                        ...tempSettings,
                                                        defaultLanguage: e.target.value
                                                    }),
                                                className: "w-full p-2 border border-border rounded-lg bg-background text-foreground",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "english",
                                                        children: "English"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/school-bell-system/components/settings.tsx",
                                                        lineNumber: 81,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "hausa",
                                                        children: "Hausa"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/school-bell-system/components/settings.tsx",
                                                        lineNumber: 82,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "twi",
                                                        children: "Twi"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/school-bell-system/components/settings.tsx",
                                                        lineNumber: 83,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "arabic",
                                                        children: "Arabic"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/school-bell-system/components/settings.tsx",
                                                        lineNumber: 84,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/school-bell-system/components/settings.tsx",
                                                lineNumber: 71,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/school-bell-system/components/settings.tsx",
                                        lineNumber: 69,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-sm font-semibold text-foreground mb-2 block",
                                                children: "Default Repeat Count"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/school-bell-system/components/settings.tsx",
                                                lineNumber: 89,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                min: "1",
                                                max: "10",
                                                value: tempSettings.defaultRepeatCount,
                                                onChange: (e)=>setTempSettings({
                                                        ...tempSettings,
                                                        defaultRepeatCount: parseInt(e.target.value) || 1
                                                    }),
                                                className: "w-full p-2 border border-border rounded-lg bg-background text-foreground"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/school-bell-system/components/settings.tsx",
                                                lineNumber: 90,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/school-bell-system/components/settings.tsx",
                                        lineNumber: 88,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/school-bell-system/components/settings.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/school-bell-system/components/settings.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/school-bell-system/components/settings.tsx",
                                            lineNumber: 111,
                                            columnNumber: 15
                                        }, this),
                                        "Islamic Prayer Times (Azan)"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/school-bell-system/components/settings.tsx",
                                    lineNumber: 110,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/school-bell-system/components/settings.tsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                checked: tempSettings.azanEnabled,
                                                onChange: (e)=>setTempSettings({
                                                        ...tempSettings,
                                                        azanEnabled: e.target.checked
                                                    }),
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/school-bell-system/components/settings.tsx",
                                                lineNumber: 117,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-sm font-semibold text-foreground",
                                                children: "Enable Azan (Islamic Call to Prayer)"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/school-bell-system/components/settings.tsx",
                                                lineNumber: 128,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/school-bell-system/components/settings.tsx",
                                        lineNumber: 116,
                                        columnNumber: 13
                                    }, this),
                                    tempSettings.azanEnabled && tempSettings.prayerTimes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: Object.entries(tempSettings.prayerTimes).map(([prayer, time])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-3 border border-border rounded-lg bg-background/50",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-center mb-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-sm font-semibold text-foreground capitalize",
                                                            children: [
                                                                prayer,
                                                                " Time"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Downloads/school-bell-system/components/settings.tsx",
                                                            lineNumber: 136,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/school-bell-system/components/settings.tsx",
                                                        lineNumber: 135,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-1 md:grid-cols-2 gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "text-xs text-foreground/60 mb-1 block",
                                                                        children: "Time"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Downloads/school-bell-system/components/settings.tsx",
                                                                        lineNumber: 140,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "time",
                                                                        value: time,
                                                                        onChange: (e)=>setTempSettings({
                                                                                ...tempSettings,
                                                                                prayerTimes: {
                                                                                    ...tempSettings.prayerTimes,
                                                                                    [prayer]: e.target.value
                                                                                }
                                                                            }),
                                                                        className: "w-full p-2 border border-border rounded-lg bg-background text-foreground"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Downloads/school-bell-system/components/settings.tsx",
                                                                        lineNumber: 141,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Downloads/school-bell-system/components/settings.tsx",
                                                                lineNumber: 139,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "text-xs text-foreground/60 mb-1 block",
                                                                        children: "Custom Audio (Optional)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Downloads/school-bell-system/components/settings.tsx",
                                                                        lineNumber: 157,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                        value: tempSettings.prayerAudioIds?.[prayer] || "",
                                                                        onChange: (e)=>setTempSettings({
                                                                                ...tempSettings,
                                                                                prayerAudioIds: {
                                                                                    ...tempSettings.prayerAudioIds,
                                                                                    [prayer]: e.target.value || undefined
                                                                                }
                                                                            }),
                                                                        className: "w-full p-2 border border-border rounded-lg bg-background text-foreground",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "",
                                                                                children: "Default Azan"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Downloads/school-bell-system/components/settings.tsx",
                                                                                lineNumber: 171,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            availableAudios.map((audio)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: audio.id,
                                                                                    children: audio.name
                                                                                }, audio.id, false, {
                                                                                    fileName: "[project]/Downloads/school-bell-system/components/settings.tsx",
                                                                                    lineNumber: 173,
                                                                                    columnNumber: 29
                                                                                }, this))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Downloads/school-bell-system/components/settings.tsx",
                                                                        lineNumber: 158,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Downloads/school-bell-system/components/settings.tsx",
                                                                lineNumber: 156,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/school-bell-system/components/settings.tsx",
                                                        lineNumber: 138,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, prayer, true, {
                                                fileName: "[project]/Downloads/school-bell-system/components/settings.tsx",
                                                lineNumber: 134,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/school-bell-system/components/settings.tsx",
                                        lineNumber: 132,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/school-bell-system/components/settings.tsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/school-bell-system/components/settings.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/school-bell-system/components/settings.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/school-bell-system/components/settings.tsx",
                                        lineNumber: 193,
                                        columnNumber: 15
                                    }, this),
                                    "Custom Audio Library"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/school-bell-system/components/settings.tsx",
                                lineNumber: 192,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/school-bell-system/components/settings.tsx",
                            lineNumber: 191,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-foreground/60 mb-4",
                                    children: "Upload your own voice recordings or custom sounds to use in timetables and announcements. Files are stored locally in your browser."
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/school-bell-system/components/settings.tsx",
                                    lineNumber: 198,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$audio$2d$upload$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AudioUpload"], {}, void 0, false, {
                                    fileName: "[project]/Downloads/school-bell-system/components/settings.tsx",
                                    lineNumber: 202,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/school-bell-system/components/settings.tsx",
                            lineNumber: 197,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/school-bell-system/components/settings.tsx",
                    lineNumber: 190,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/school-bell-system/components/settings.tsx",
                lineNumber: 189,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__["Wifi"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/school-bell-system/components/settings.tsx",
                                        lineNumber: 211,
                                        columnNumber: 15
                                    }, this),
                                    "Background & Offline"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/school-bell-system/components/settings.tsx",
                                lineNumber: 210,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/school-bell-system/components/settings.tsx",
                            lineNumber: 209,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center space-x-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "checkbox",
                                            id: "background-mode",
                                            className: "h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary",
                                            checked: tempSettings.backgroundEnabled ?? false,
                                            onChange: (e)=>setTempSettings({
                                                    ...tempSettings,
                                                    backgroundEnabled: e.target.checked
                                                })
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/school-bell-system/components/settings.tsx",
                                            lineNumber: 217,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "background-mode",
                                            className: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                                            children: "Enable background bell playback (runs when app is closed)"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/school-bell-system/components/settings.tsx",
                                            lineNumber: 224,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/school-bell-system/components/settings.tsx",
                                    lineNumber: 216,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-foreground/60 mt-2 ml-6",
                                    children: "Allows the bell system to run in the background using a Service Worker. Requires permission."
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/school-bell-system/components/settings.tsx",
                                    lineNumber: 228,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/school-bell-system/components/settings.tsx",
                            lineNumber: 215,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/school-bell-system/components/settings.tsx",
                    lineNumber: 208,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/school-bell-system/components/settings.tsx",
                lineNumber: 207,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 flex gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: handleSave,
                        className: "bg-green-600 hover:bg-green-700 text-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SettingsIcon$3e$__["SettingsIcon"], {
                                className: "w-4 h-4 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/school-bell-system/components/settings.tsx",
                                lineNumber: 237,
                                columnNumber: 11
                            }, this),
                            "Save Settings"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/school-bell-system/components/settings.tsx",
                        lineNumber: 236,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "outline",
                        onClick: ()=>setTempSettings(settings),
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/school-bell-system/components/settings.tsx",
                        lineNumber: 240,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/school-bell-system/components/settings.tsx",
                lineNumber: 235,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/school-bell-system/components/settings.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_s(Settings, "ldWvyiI3aOQNESzdTeThbJ0/fow=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"]
    ];
});
_c = Settings;
var _c;
__turbopack_context__.k.register(_c, "Settings");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/school-bell-system/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/components/sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$mobile$2d$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/components/mobile-header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$mobile$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/components/mobile-menu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$dashboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/components/dashboard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$timetable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/components/timetable.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$students$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/components/students.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$call$2d$student$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/components/call-student.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$announcements$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/components/announcements.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$devices$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/components/devices.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$logs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/components/logs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$settings$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/school-bell-system/components/settings.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
function Home() {
    _s();
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("dashboard");
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const renderPage = ()=>{
        switch(currentPage){
            case "dashboard":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$dashboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dashboard"], {}, void 0, false, {
                    fileName: "[project]/Downloads/school-bell-system/app/page.tsx",
                    lineNumber: 23,
                    columnNumber: 16
                }, this);
            case "timetable":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$timetable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Timetable"], {}, void 0, false, {
                    fileName: "[project]/Downloads/school-bell-system/app/page.tsx",
                    lineNumber: 25,
                    columnNumber: 16
                }, this);
            case "students":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$students$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Students"], {}, void 0, false, {
                    fileName: "[project]/Downloads/school-bell-system/app/page.tsx",
                    lineNumber: 27,
                    columnNumber: 16
                }, this);
            case "call-student":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$call$2d$student$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CallStudent"], {}, void 0, false, {
                    fileName: "[project]/Downloads/school-bell-system/app/page.tsx",
                    lineNumber: 29,
                    columnNumber: 16
                }, this);
            case "announcements":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$announcements$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Announcements"], {}, void 0, false, {
                    fileName: "[project]/Downloads/school-bell-system/app/page.tsx",
                    lineNumber: 31,
                    columnNumber: 16
                }, this);
            case "devices":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$devices$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Devices"], {}, void 0, false, {
                    fileName: "[project]/Downloads/school-bell-system/app/page.tsx",
                    lineNumber: 33,
                    columnNumber: 16
                }, this);
            case "logs":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$logs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logs"], {}, void 0, false, {
                    fileName: "[project]/Downloads/school-bell-system/app/page.tsx",
                    lineNumber: 35,
                    columnNumber: 16
                }, this);
            case "settings":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$settings$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Settings"], {}, void 0, false, {
                    fileName: "[project]/Downloads/school-bell-system/app/page.tsx",
                    lineNumber: 37,
                    columnNumber: 16
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$dashboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dashboard"], {}, void 0, false, {
                    fileName: "[project]/Downloads/school-bell-system/app/page.tsx",
                    lineNumber: 39,
                    columnNumber: 16
                }, this);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sidebar"], {
                currentPage: currentPage,
                setCurrentPage: setCurrentPage
            }, void 0, false, {
                fileName: "[project]/Downloads/school-bell-system/app/page.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$mobile$2d$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MobileHeader"], {
                onMenuToggle: ()=>setMobileMenuOpen(!mobileMenuOpen),
                isMenuOpen: mobileMenuOpen,
                currentPage: currentPage
            }, void 0, false, {
                fileName: "[project]/Downloads/school-bell-system/app/page.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$components$2f$mobile$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MobileMenu"], {
                currentPage: currentPage,
                setCurrentPage: setCurrentPage,
                isOpen: mobileMenuOpen,
                onClose: ()=>setMobileMenuOpen(false)
            }, void 0, false, {
                fileName: "[project]/Downloads/school-bell-system/app/page.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$school$2d$bell$2d$system$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 overflow-auto pt-16 lg:pt-0",
                children: renderPage()
            }, void 0, false, {
                fileName: "[project]/Downloads/school-bell-system/app/page.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/school-bell-system/app/page.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_s(Home, "rpH8fHSGUhNf74R8qesh51/THyA=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Downloads_school-bell-system_7ed5d8aa._.js.map