;/*FB_PKG_DELIM*/

__d("IGDSInfiniteScrollTrigger.react",["react","useAfterPaint","useVisibilityObserver"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));b=h;b.useCallback;var j=b.useRef,k=b.c;function a(a){var b=k(21),d=a.children,e=a["data-testid"],f=a.hasMore,g=a.isLoading,h=a.onLoadMore;a=a.rootMargin;a=a===void 0?0:a;var l=j(!1),m;b[0]!==f||b[1]!==g||b[2]!==h?(m=function(){f&&!g&&l.current&&h()},b[0]=f,b[1]=g,b[2]=h,b[3]=m):m=b[3];m=m;c("useAfterPaint")(m);b[4]!==f||b[5]!==g||b[6]!==h?(m=function(){var a=l.current;l.current=!0;!a&&f&&!g&&h()},b[4]=f,b[5]=g,b[6]=h,b[7]=m):m=b[7];m=m;var n;b[8]===Symbol["for"]("react.memo_cache_sentinel")?(n=function(){l.current=!1},b[8]=n):n=b[8];n=n;var o;b[9]!==a?(o={rootMargin:a},b[9]=a,b[10]=o):o=b[10];b[11]!==n||b[12]!==m||b[13]!==o?(a={onHidden:n,onVisible:m,options:o},b[11]=n,b[12]=m,b[13]=o,b[14]=a):a=b[14];n=c("useVisibilityObserver")(a);b[15]!==f||b[16]!==g||b[17]!==e||b[18]!==n||b[19]!==d?(m=f||g?i.jsx("div",{"data-testid":void 0,ref:n,children:d}):null,b[15]=f,b[16]=g,b[17]=e,b[18]=n,b[19]=d,b[20]=m):m=b[20];return m}g["default"]=a}),98);
__d("PolarisDesktopPostRoot.react",["CometPlaceholder.react","IGDSBox.react","IGDSSpinner.react","PolarisShell.react","deferredLoadComponent","react","requireDeferredForDisplay","usePolarisPageID"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).c,j=h,k=c("deferredLoadComponent")(c("requireDeferredForDisplay")("PolarisDesktopPostPage.react").__setRef("PolarisDesktopPostRoot.react"));function a(a){var b=i(7),d=a.props;a=a.queries;d=d.routeProps;d=d.media_id;var e=c("usePolarisPageID")(),f;b[0]===Symbol["for"]("react.memo_cache_sentinel")?(f=j.jsx(c("IGDSBox.react"),{alignItems:"center",display:"flex",flex:"grow",height:"100%",justifyContent:"center",width:"100%",children:j.jsx(c("IGDSSpinner.react"),{})}),b[0]=f):f=b[0];b[1]!==d||b[2]!==a?(f=j.jsx(c("CometPlaceholder.react"),{fallback:f,children:j.jsx(k,{postId:d,queries:a})}),b[1]=d,b[2]=a,b[3]=f):f=b[3];b[4]!==e||b[5]!==f?(d=j.jsx(c("PolarisShell.react"),{pageIdentifier:e,children:f}),b[4]=e,b[5]=f,b[6]=d):d=b[6];return d}g["default"]=a}),98);
__d("PolarisInfiniteScroll.react",["IGDSInfiniteScrollTrigger.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).c,j=h;function a(a){var b=i(5),d=a.children,e=a.handleLoadNext,f=a.hasNext;a=a.isLoadingNext;var g;b[0]!==f||b[1]!==a||b[2]!==e||b[3]!==d?(g=j.jsx(c("IGDSInfiniteScrollTrigger.react"),{"data-testid":void 0,hasMore:f,isLoading:a,onLoadMore:e,children:d}),b[0]=f,b[1]=a,b[2]=e,b[3]=d,b[4]=g):g=b[4];return g}g["default"]=a}),98);