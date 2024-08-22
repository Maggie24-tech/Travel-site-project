;/*FB_PKG_DELIM*/

__d("PolarisDynamicExploreLoadingSpinner.react",["IGDSSpinner.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).c,j=h;function a(){var a=i(1),b;a[0]===Symbol["for"]("react.memo_cache_sentinel")?(b=j.jsx(c("IGDSSpinner.react"),{position:"absolute",size:"medium"}),a[0]=b):b=a[0];return b}g["default"]=a}),98);
__d("PolarisDynamicExploreGridItemOverlay.react",["PolarisDynamicExploreMediaHelpers","PolarisPostsGridItemStatsOverlay.react","PolarisShouldHideLikeCountsWithControls","nullthrows","polarisDynamicExploreSelectors","react","usePolarisSelector","usePolarisViewer"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).c,j=h;function a(a){var b=i(19),e=a.exploreGridQuery,f=a.exploreGridType,g=a.postId;a=c("usePolarisViewer")();var h;b[0]!==g||b[1]!==f||b[2]!==e?(h=function(a){return d("polarisDynamicExploreSelectors").getGridItemFromPostId(a,g,f,e)},b[0]=g,b[1]=f,b[2]=e,b[3]=h):h=b[3];h=c("usePolarisSelector")(h);var k,l,m,n,o;b[4]!==h||b[5]!==a?(o=c("nullthrows")(h),k=c("PolarisPostsGridItemStatsOverlay.react"),l=o.comments_disabled,m=d("PolarisShouldHideLikeCountsWithControls").shouldHideLikeCountsWithControls(a==null?void 0:a.hideLikeAndViewCounts,o.like_and_view_counts_disabled),n=d("PolarisDynamicExploreMediaHelpers").getIsVideo(o),b[4]=h,b[5]=a,b[6]=k,b[7]=l,b[8]=m,b[9]=n,b[10]=o):(k=b[6],l=b[7],m=b[8],n=b[9],o=b[10]);b[11]!==k||b[12]!==l||b[13]!==m||b[14]!==n||b[15]!==o.comment_count||b[16]!==o.like_count||b[17]!==o.view_count?(h=j.jsx(k,{commentsDisabled:l,hideLikes:m,isVideo:n,numComments:o.comment_count,numPreviewLikes:o.like_count,videoViews:o.view_count}),b[11]=k,b[12]=l,b[13]=m,b[14]=n,b[15]=o.comment_count,b[16]=o.like_count,b[17]=o.view_count,b[18]=h):h=b[18];return h}g["default"]=a}),98);
__d("PolarisDynamicExploreGridItem.react",["CometErrorBoundary.react","IGDSBox.react","IGDSText.react","PolarisConfig","PolarisDynamicExploreGridItemOverlay.react","PolarisDynamicExploreMediaHelpers","PolarisFastLink.react","PolarisGridItemVideoPreview.react","PolarisMediaConstants","PolarisMediaTypes","PolarisPhoto.react","PolarisPostsGridQEHelpers","PolarisReactRedux.react","PolarisSizing","PolarisUA","PolarisViewpointReact.react","getPolarisVideoSourceByVersions","nullthrows","polarisDynamicExploreSelectors","qex","react","stylex","usePolarisDisplayProperties"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||(i=d("react"));b=i;b.useCallback;var k=b.useEffect,l=b.useState,m=b.c,n={oneByTwoPlaceholder:{paddingBottom:"x1hgrsv6","@media (min-width: 736px)_paddingBottom":"x1azhor3",$$css:!0},oneByTwoPlaceholder4px:{paddingBottom:"x1hgrsv6","@media (min-width: 736px)_paddingBottom":"xw0xz5u",$$css:!0},videoPreviewWrapper:{paddingBottom:"xs9ks74",$$css:!0},videoPreviewWrapper28px:{"@media (min-width: 736px)_paddingBottom":"x1azhor3",$$css:!0},videoPreviewWrapper4px:{"@media (min-width: 736px)_paddingBottom":"xw0xz5u",$$css:!0}};function a(a){var b=m(56),e=a.constructedLink,f=a.enablePostCaptionsInGrid,g=a.exploreGridQuery,i=a.exploreGridType,p=a.id,q=a.onClick,r=a.onMediaRendered,s=a.size;a=a.viewpointActions;f=f===void 0?!1:f;var t=l(!1),u=t[0],v=t[1];t=l(!1);var w=t[0],x=t[1];t=l(!1);var y=t[0],z=t[1];b[0]!==p||b[1]!==i||b[2]!==g?(t=function(a){return d("polarisDynamicExploreSelectors").getGridItemFromPostId(a,p,i,g)},b[0]=p,b[1]=i,b[2]=g,b[3]=t):t=b[3];t=c("nullthrows")(d("PolarisReactRedux.react").useSelector(t));var A=d("PolarisDynamicExploreMediaHelpers").getSrcSet(t),B=t.media_type===d("PolarisMediaConstants").MediaTypes.VIDEO,C=c("getPolarisVideoSourceByVersions")(t.video_versions,[d("PolarisMediaTypes").MediaVersionType.VIDEO_480_HIGH,d("PolarisMediaTypes").MediaVersionType.VIDEO_480_LOW]),D;b[4]!==r||b[5]!==p?(D=function(a,b){r&&r(p,b)},b[4]=r,b[5]=p,b[6]=D):D=b[6];D=D;var E=c("usePolarisDisplayProperties")();E=E.viewportWidth;E=E>d("PolarisSizing").MEDIUM_SCREEN_MIN;var F;b[7]!==u||b[8]!==y||b[9]!==w?(F=d("PolarisUA").isDesktop()&&(u&&!y||w),b[7]=u,b[8]=y,b[9]=w,b[10]=F):F=b[10];u=F;b[11]!==a||b[12]!==p?(y={action:a,id:p},b[11]=a,b[12]=p,b[13]=y):y=b[13];var G=d("PolarisViewpointReact.react").useViewpoint(y);b[14]===Symbol["for"]("react.memo_cache_sentinel")?(w=function(){z(!1)},b[14]=w):w=b[14];var H=w;F=d("PolarisDynamicExploreMediaHelpers").getPostIcon(t);a=d("PolarisPostsGridQEHelpers").getMarginForPostsGridItems();b[15]!==G.current?(y=function(){var a=G.current;if(!a)return function(){};a.addEventListener("keyup",H);return function(){a.removeEventListener("keyup",H)}},b[15]=G.current,b[16]=y):y=b[16];b[17]!==G?(w=[H,G],b[17]=G,b[18]=w):w=b[18];k(y,w);y=f&&t.caption!=null;w=c("IGDSBox.react");f="dynamic-explore-grid-item";f="block";var I="relative",J="100%",K=c("PolarisFastLink.react"),L;b[19]===Symbol["for"]("react.memo_cache_sentinel")?(L="x4gyw5p",b[19]=L):L=b[19];var M;b[20]===Symbol["for"]("react.memo_cache_sentinel")?(M=function(){return v(!1)},b[20]=M):M=b[20];var N;b[21]!==q?(N=function(a){a.detail===1&&z(!0),q&&q(a)},b[21]=q,b[22]=N):N=b[22];var O,P,Q,R;b[23]===Symbol["for"]("react.memo_cache_sentinel")?(O=function(){return v(!0)},P=function(){return x(!0)},Q=function(){return x(!1)},R=d("PolarisUA").isDesktop()&&d("PolarisConfig").isLoggedIn(),b[23]=O,b[24]=P,b[25]=Q,b[26]=R):(O=b[23],P=b[24],Q=b[25],R=b[26]);B=B&&s===d("PolarisDynamicExploreMediaHelpers").GRID_ITEM_SIZE.ONE_BY_TWO&&C!=null&&c("qex")._("35")===!0?j.jsx("div",{className:(h||(h=c("stylex")))([n.videoPreviewWrapper,a===28&&n.videoPreviewWrapper28px,a===4&&n.videoPreviewWrapper4px]),children:j.jsx("div",{className:"x5yr21d x10l6tqk x17qophe x13vifvy xh8yej3",children:j.jsx(c("PolarisGridItemVideoPreview.react"),{coverPhoto:t==null?void 0:(B=t.image_versions2)==null?void 0:(B=B.additional_candidates)==null?void 0:(B=B.first_frame)==null?void 0:B.url,videoID:p,videoSrc:C})})}):j.jsx(c("PolarisPhoto.react"),{accessibilityCaption:d("PolarisDynamicExploreMediaHelpers").getAccessibilityCaption(t),caption:d("PolarisDynamicExploreMediaHelpers").getPostCaption(t),onPhotoRendered:D,placeholderClassName:(h||(h=c("stylex")))(s===d("PolarisDynamicExploreMediaHelpers").GRID_ITEM_SIZE.ONE_BY_TWO&&a===28&&n.oneByTwoPlaceholder,s===d("PolarisDynamicExploreMediaHelpers").GRID_ITEM_SIZE.ONE_BY_TWO&&a===4&&n.oneByTwoPlaceholder4px),rich:!0,src:c("nullthrows")(A[0]).src,srcSet:A});b[27]!==F||b[28]!==E?(C=F&&j.jsx("div",{className:"xuk3077 x1ey2m1c x9f619 x78zum5 xds687c xdt5ytf x2lah0s x1nhvcw1 x1ok221b x1t4t16n xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x47corl x10l6tqk x17qophe x13vifvy x11njtxf x1rxg9gp x11sgtky xsybdxg x1bzgcud",children:j.jsx(F.icon,{alt:F.alt,color:"ig-stroke-on-media",shadow:!0,size:E?24:18})}),b[27]=F,b[28]=E,b[29]=C):C=b[29];b[30]!==u||b[31]!==g||b[32]!==i||b[33]!==p?(D=u&&j.jsx(c("CometErrorBoundary.react"),{fallback:o,children:j.jsx(c("PolarisDynamicExploreGridItemOverlay.react"),{exploreGridQuery:g,exploreGridType:i,postId:p})}),b[30]=u,b[31]=g,b[32]=i,b[33]=p,b[34]=D):D=b[34];if(b[35]!==y||b[36]!==t){a=y&&j.jsx("div",{className:"x1s85apg",children:j.jsx(c("IGDSText.react").Footnote,{elementType:"h2",maxLines:1,zeroMargin:!0,children:(s=t.caption)==null?void 0:s.text})});b[35]=y;b[36]=t;b[37]=a}else a=b[37];b[38]!==K||b[39]!==L||b[40]!==e||b[41]!==M||b[42]!==N||b[43]!==O||b[44]!==P||b[45]!==Q||b[46]!==R||b[47]!==B||b[48]!==C||b[49]!==D||b[50]!==a?(A=j.jsxs(K,{className:L,href:e,onBlur:M,onClick:N,onFocus:O,onMouseEnter:P,onMouseLeave:Q,shouldOpenModal:R,children:[B,C,D,a]}),b[38]=K,b[39]=L,b[40]=e,b[41]=M,b[42]=N,b[43]=O,b[44]=P,b[45]=Q,b[46]=R,b[47]=B,b[48]=C,b[49]=D,b[50]=a,b[51]=A):A=b[51];b[52]!==w||b[53]!==G||b[54]!==A?(F=j.jsx(w,{containerRef:G,"data-testid":void 0,display:f,position:I,width:J,children:A}),b[52]=w,b[53]=G,b[54]=A,b[55]=F):F=b[55];return F}function o(){return null}g["default"]=a}),98);
__d("PolarisPPRLoggedDynamicExploreGridItem",["PolarisDynamicExploreGridItem.react","polarisWithPPRLogging"],(function(a,b,c,d,e,f,g){"use strict";a=c("polarisWithPPRLogging")(c("PolarisDynamicExploreGridItem.react"));g["default"]=a}),98);
__d("PolarisDynamicExploreSectionalItem.react",["IGDSBox.react","PolarisDynamicExploreMediaHelpers","PolarisPPRLoggedDynamicExploreGridItem","PolarisPostsGridQEHelpers","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=(i||(i=d("react"))).c,k=i,l={baseItem:{alignItems:"x1qjc9v5",borderTopWidth:"x972fbf",borderEndWidth:"xcfux6l",borderBottomWidth:"x1qhh985",borderStartWidth:"xm0m39n",boxSizing:"x9f619",display:"x1lliihq",flexDirection:"xdt5ytf",flexShrink:"x2lah0s","float":"xrbpyxo",marginTop:"x1a7h2tk",marginEnd:"x14miiyz",marginBottom:"xat24cr",marginStart:"x1mh8g0r",paddingTop:"xexx8yu",paddingEnd:"x4uap5",paddingBottom:"x18d9i69",paddingStart:"xkhd6sd",position:"x1n2onr6",verticalAlign:"x11njtxf",width:"x1bfs520",$$css:!0},item:{"@media (min-width: 736px)_marginTop":"xph46j","@media (min-width: 736px)_marginEnd":"x1wrihxl","@media (min-width: 736px)_marginBottom":"x1xo4fhm","@media (min-width: 736px)_marginStart":"x1bzgcud","@media (min-width: 736px)_width":"x15uqtui",$$css:!0},item4px:{"@media (min-width: 736px)_marginTop":"xph46j","@media (min-width: 736px)_marginEnd":"x9i3mqj","@media (min-width: 736px)_marginBottom":"xcghwft","@media (min-width: 736px)_marginStart":"x1bzgcud","@media (min-width: 736px)_width":"xhdunbi",$$css:!0},itemLeft:{"float":"xrbpyxo",$$css:!0},itemRight:{"float":"x1guec7k",$$css:!0},oneByTwoItem:{width:"x1bfs520","@media (min-width: 736px)_width":"x15uqtui",$$css:!0},oneByTwoItem4px:{width:"x1bfs520","@media (min-width: 736px)_width":"xhdunbi",$$css:!0},twoByTwoItem:{width:"xgczaz5","@media (min-width: 736px)_width":"xibe6o0",$$css:!0},twoByTwoItem4px:{width:"xgczaz5","@media (min-width: 736px)_width":"x1rzo0p5",$$css:!0}};function a(a){var b=j(53),e=a.analyticsContext,f=a.enablePostCaptionsInGrid,g=a.exploreGridQuery,i=a.exploreGridType,m=a.isVisible,n=a.logGridItemImpression,o=a.mediaLinkBuilder,p=a.onGridItemClick;a=a.sectionalItem;var q=a.layout_content,r=a.layout_type;b[0]!==p?(a=function(a){return function(b){p&&p(b,a,a.row,a.column)}},b[0]=p,b[1]=a):a=b[1];var s=a;b[2]!==o?(a=function(a){return!o?null:o(a)},b[2]=o,b[3]=a):a=b[3];var t=a;b[4]!==n?(a=function(a){var b=a.item;a=a.size;return n!=null?[n(b,a)]:[]},b[4]=n,b[5]=a):a=b[5];var u=a,v,w,x;if(b[6]!==r||b[7]!==q||b[8]!==t||b[9]!==s||b[10]!==u||b[11]!==e||b[12]!==f||b[13]!==g||b[14]!==i||b[15]!==m||b[16]!==o){a=d("PolarisDynamicExploreMediaHelpers").getGridItemPlacement(r);var y=a.position;a=a.size;var z=q.fill_items,A=q.primary_item;z=z;var B;b[23]===Symbol["for"]("react.memo_cache_sentinel")?(B=d("PolarisPostsGridQEHelpers").getMarginForPostsGridItems(),b[23]=B):B=b[23];v=B;B=c("IGDSBox.react");w="block";x="relative";y=A!=null&&k.jsx("div",{className:(h||(h=c("stylex")))(l.baseItem,v===28&&l.item,v===4&&l.item4px,a===d("PolarisDynamicExploreMediaHelpers").GRID_ITEM_SIZE.ONE_BY_TWO&&v===28&&l.oneByTwoItem,a===d("PolarisDynamicExploreMediaHelpers").GRID_ITEM_SIZE.ONE_BY_TWO&&v===4&&l.oneByTwoItem4px,a===d("PolarisDynamicExploreMediaHelpers").GRID_ITEM_SIZE.TWO_BY_TWO&&v===28&&l.twoByTwoItem,a===d("PolarisDynamicExploreMediaHelpers").GRID_ITEM_SIZE.TWO_BY_TWO&&v===4&&l.twoByTwoItem4px,y===d("PolarisDynamicExploreMediaHelpers").GRID_ITEM_POSITION.LEFT&&l.itemLeft,y===d("PolarisDynamicExploreMediaHelpers").GRID_ITEM_POSITION.RIGHT&&l.itemRight),children:k.jsx(c("PolarisPPRLoggedDynamicExploreGridItem"),{analyticsContext:e,constructedLink:t(A),enablePostCaptionsInGrid:f,exploreGridQuery:g,exploreGridType:i,id:d("PolarisDynamicExploreMediaHelpers").getPostId(A),isGridView:!0,isVisible:m,mediaLinkBuilder:o,onClick:s(A),size:a,viewpointActions:u({item:A,size:a})})});b[6]=r;b[7]=q;b[8]=t;b[9]=s;b[10]=u;b[11]=e;b[12]=f;b[13]=g;b[14]=i;b[15]=m;b[16]=o;b[17]=v;b[18]=z;b[19]=B;b[20]=w;b[21]=x;b[22]=y}else v=b[17],z=b[18],B=b[19],w=b[20],x=b[21],y=b[22];if(b[24]!==v||b[25]!==e||b[26]!==t||b[27]!==g||b[28]!==i||b[29]!==m||b[30]!==o||b[31]!==s||b[32]!==r||b[33]!==u||b[34]!==z){b[36]!==v||b[37]!==e||b[38]!==t||b[39]!==g||b[40]!==i||b[41]!==m||b[42]!==o||b[43]!==s||b[44]!==r||b[45]!==u?(A=function(a){return k.jsx("div",{className:(h||(h=c("stylex")))(l.baseItem,v===28&&l.item,v===4&&l.item4px),children:k.jsx(c("PolarisPPRLoggedDynamicExploreGridItem"),{analyticsContext:e,constructedLink:t(a),exploreGridQuery:g,exploreGridType:i,id:d("PolarisDynamicExploreMediaHelpers").getPostId(a),isGridView:!0,isVisible:m,mediaLinkBuilder:o,onClick:s(a),size:d("PolarisDynamicExploreMediaHelpers").getGridFillItemsSize(r),viewpointActions:u({item:a,size:d("PolarisDynamicExploreMediaHelpers").GRID_ITEM_SIZE.ONE_BY_ONE})})},a.id)},b[36]=v,b[37]=e,b[38]=t,b[39]=g,b[40]=i,b[41]=m,b[42]=o,b[43]=s,b[44]=r,b[45]=u,b[46]=A):A=b[46];a=z.map(A);b[24]=v;b[25]=e;b[26]=t;b[27]=g;b[28]=i;b[29]=m;b[30]=o;b[31]=s;b[32]=r;b[33]=u;b[34]=z;b[35]=a}else a=b[35];b[47]!==B||b[48]!==w||b[49]!==x||b[50]!==y||b[51]!==a?(q=k.jsxs(B,{display:w,position:x,children:[y,a]}),b[47]=B,b[48]=w,b[49]=x,b[50]=y,b[51]=a,b[52]=q):q=b[52];return q}g["default"]=a}),98);
__d("PolarisDynamicExploreGrid.react",["PolarisDynamicExploreLoadingSpinner.react","PolarisDynamicExploreSectionalItem.react","PolarisErrorRetrySection.react","PolarisGenericVirtualFeed.react","PolarisSizeCache","PolarisUA","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=(i||(i=d("react"))).c,k=i;b=800;var l=1,m=1,n=1.5,o=6,p={list:{display:"x78zum5",flexDirection:"xdt5ytf",marginEnd:"xwrv7xz",marginLeft:null,marginRight:null,position:"x1n2onr6","@media (min-width: 736px)_marginTop":"xph46j","@media (min-width: 736px)_marginEnd":"xfcsdxf","@media (min-width: 736px)_marginBottom":"xsybdxg","@media (min-width: 736px)_marginStart":"x1bzgcud",$$css:!0},listLoggedOut:{display:"x78zum5",flexDirection:"xdt5ytf",marginEnd:"xwrv7xz",marginLeft:null,marginRight:null,position:"x1n2onr6",$$css:!0}},q=new(c("PolarisSizeCache"))({estimatedSize:b});function a(a){var b=j(24),e=a.analyticsContext,f=a.enablePostCaptionsInGrid,g=a.exploreGridQuery,i=a.exploreGridType,r=a.hasNextPage,s=a.isFetching,t=a.isLoggedOut,u=a.logGridItemImpression,v=a.mediaLinkBuilder,w=a.onGridItemClick,x=a.onNextPage,y=a.onRetry,z=a.sectionalItems;a=t===void 0?!1:t;b[0]!==w?(t=function(a){return function(b,c,d,e){w&&w(b,c,a,d,e)}},b[0]=w,b[1]=t):t=b[1];var A=t;b[2]!==z||b[3]!==e||b[4]!==f||b[5]!==g||b[6]!==i||b[7]!==u||b[8]!==v||b[9]!==A?(t=function(a){var b=a.index;a=a.isVisible;var d=z[b];return k.jsx(c("PolarisDynamicExploreSectionalItem.react"),{analyticsContext:e,enablePostCaptionsInGrid:f,exploreGridQuery:g,exploreGridType:i,isVisible:a,logGridItemImpression:u,mediaLinkBuilder:v,onGridItemClick:A(d),sectionalItem:d},b)},b[2]=z,b[3]=e,b[4]=f,b[5]=g,b[6]=i,b[7]=u,b[8]=v,b[9]=A,b[10]=t):t=b[10];t=t;if(z.length===0){if(s){var B;b[11]===Symbol["for"]("react.memo_cache_sentinel")?(B=k.jsx(c("PolarisDynamicExploreLoadingSpinner.react"),{}),b[11]=B):B=b[11];return B}b[12]!==y?(B=k.jsx(c("PolarisErrorRetrySection.react"),{onRetry:y}),b[12]=y,b[13]=B):B=b[13];return B}y=a?p.listLoggedOut:p.list;b[14]!==y?(B=(h||(h=c("stylex")))(y),b[14]=y,b[15]=B):B=b[15];b[16]!==e||b[17]!==B||b[18]!==r||b[19]!==s||b[20]!==z||b[21]!==x||b[22]!==t?(a=k.jsx(c("PolarisGenericVirtualFeed.react"),{allowSampledScrollLogging:!0,analyticsContext:e,className:B,"data-testid":void 0,enablePrefetch:d("PolarisUA").isMobile()!==!0,enablePriorityFetching:!1,hasNextPage:r,initialRenderCount:l,isFetching:s,items:z,nextPageThreshold:m,onNextPage:x,overscanCount:o,prefetchNextPageThreshold:n,renderFeedItem:t,sizeCache:q,visibleCount:z.length}),b[16]=e,b[17]=B,b[18]=r,b[19]=s,b[20]=z,b[21]=x,b[22]=t,b[23]=a):a=b[23];return a}g["default"]=a}),98);
__d("PolarisExploreVariants",["$InternalEnum"],(function(a,b,c,d,e,f){a=b("$InternalEnum")({FOR_YOU:"for_you",NONPERSONALIZED:"nonpersonalized"});c=a;f["default"]=c}),66);
__d("PolarisDynamicExploreVariantsHelper",["PolarisExploreVariants"],(function(a,b,c,d,e,f,g){"use strict";function a(a){return a==null||c("PolarisExploreVariants").cast(String(a))==="for_you"?!1:!0}g.shouldShowNonPersonalizedExplore=a}),98);
__d("PolarisExplorePagePersonalizationMenuMobile.react",["fbt","IGDSBox.react","IGDSMoreHorizontalPanoOutlineIcon.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=(i||(i=d("react"))).c,k=i,l=h._("__JHASH__DH3Yocyq_w7__JHASH__");function a(){var a=j(2),b;a[0]===Symbol["for"]("react.memo_cache_sentinel")?(b="x1pi30zi",a[0]=b):b=a[0];a[1]===Symbol["for"]("react.memo_cache_sentinel")?(b=k.jsx("div",{className:b,children:k.jsx(c("IGDSBox.react"),{alignItems:"center",height:24,justifyContent:"center",position:"relative",width:24,children:k.jsx(c("IGDSMoreHorizontalPanoOutlineIcon.react"),{alt:l,color:"ig-primary-text"})})}),a[1]=b):b=a[1];return b}g["default"]=a}),226);
__d("PolarisKeywordExploreStrings",["fbt"],(function(a,b,c,d,e,f,g,h){"use strict";a=h._("__JHASH__CdKcEifxFn-__JHASH__");b=h._("__JHASH__p3XTyV2187D__JHASH__");c=h._("__JHASH__olQZtTO0Zl4__JHASH__");d=h._("__JHASH__IEYBqphYb44__JHASH__");e=h._("__JHASH__Uu4Dg54Se_q__JHASH__");f=h._("__JHASH__8EIUUA8XAQc__JHASH__");g.NO_KEYWORD_GRID_RESULTS_BODY=a;g.NO_KEYWORD_GRID_RESULTS_HEADER=b;g.NO_KEYWORD_GRID_RESULTS_SEARCH_ICON=c;g.FOR_YOU=d;g.NOT_PERSONALIZED=e;g.DOWN_CHEVRON=f}),226);
__d("PolarisExploreUtil",["$InternalEnum","PolarisKeywordExploreStrings"],(function(a,b,c,d,e,f,g){"use strict";var h=b("$InternalEnum")({FOR_YOU:"for_you",NOT_PERSONALIZED:"nonpersonalized"});a=function(a){switch(a){case h.FOR_YOU:return d("PolarisKeywordExploreStrings").FOR_YOU;case h.NOT_PERSONALIZED:return d("PolarisKeywordExploreStrings").NOT_PERSONALIZED}};c=function(a){return a?h.NOT_PERSONALIZED:h.FOR_YOU};g.ExplorePersonalizationOptions=h;g.getExplorePersonalizationOptionName=a;g.getExplorePersonalizationOptionKey=c}),98);
__d("XPolarisExploreControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/explore/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("PolarisExplorePagePersonalizationHeader.react",["CometPressable.react","IGDSBox.react","IGDSChevronDownPanoOutline24Icon.react","IGDSHeroTab.react","IGDSHeroTabGroup.react","IGDSText.react","PolarisExplorePagePersonalizationMenuMobile.react","PolarisExploreUtil","PolarisKeywordExploreStrings","PolarisNavigationLayoutContext","PolarisNavigationUtils","PolarisUA","XPolarisExploreControllerRouteBuilder","polarisLogAction","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));b=h;b.useCallback;var j=b.c,k={variantsMobileHeader:{alignItems:"x6s0dn4",backgroundColor:"x1gjpkn9",borderTopStartRadius:"x1lq5wgf",borderTopEndRadius:"xgqcy7u",borderBottomEndRadius:"x30kzoy",borderBottomStartRadius:"x9jhf4c",height:"x10w6t97",lineHeight:"x17ydfre",marginEnd:"xq8finb",marginLeft:null,marginRight:null,marginStart:"x16n37ib",paddingStart:"x1swvt13",paddingLeft:null,paddingRight:null,paddingEnd:"x1pi30zi",textOverflow:"xlyipyv",":active_opacity":"xcdnw81",":hover_backgroundColor":"xsz8vos",$$css:!0}},l=c("XPolarisExploreControllerRouteBuilder").buildURL({variant:"for_you"}),m=c("XPolarisExploreControllerRouteBuilder").buildURL({variant:"nonpersonalized"});function a(a){var b=j(5),e=a.contextRef,f=a.onShow;a=a.selectedFilterLabelKey;var g=n,h=d("PolarisNavigationLayoutContext").usePolarisNavigationLayoutContext();h=h.navigationPosition;h=h==="bottom";b[0]!==a||b[1]!==h||b[2]!==f||b[3]!==e?(g=d("PolarisUA").isDesktop()?i.jsxs(c("IGDSHeroTabGroup.react"),{hasDivider:!1,onChange:g,value:a,children:[i.jsx(c("IGDSHeroTab.react"),{label:d("PolarisKeywordExploreStrings").FOR_YOU,value:d("PolarisExploreUtil").ExplorePersonalizationOptions.FOR_YOU}),i.jsx(c("IGDSHeroTab.react"),{label:d("PolarisKeywordExploreStrings").NOT_PERSONALIZED,value:d("PolarisExploreUtil").ExplorePersonalizationOptions.NOT_PERSONALIZED})]}):h?i.jsx(c("CometPressable.react"),{onPress:f,ref:e,children:i.jsx(c("PolarisExplorePagePersonalizationMenuMobile.react"),{})}):i.jsx(c("CometPressable.react"),{onPress:f,ref:e,xstyle:k.variantsMobileHeader,children:i.jsxs(c("IGDSBox.react"),{alignItems:"stretch",direction:"row",display:"flex",children:[i.jsx(c("IGDSBox.react"),{marginEnd:1,children:i.jsx(c("IGDSText.react"),{weight:"semibold",children:d("PolarisExploreUtil").getExplorePersonalizationOptionName(a)})}),i.jsx(c("IGDSChevronDownPanoOutline24Icon.react"),{alt:d("PolarisKeywordExploreStrings").DOWN_CHEVRON,size:12})]})}),b[0]=a,b[1]=h,b[2]=f,b[3]=e,b[4]=g):g=b[4];return g}function n(a){c("polarisLogAction")("dsaTabSwitch",{intent_source:"KeywordSearchExplorePage",source:a===d("PolarisExploreUtil").ExplorePersonalizationOptions.FOR_YOU?"default":"non_profiled"}),d("PolarisNavigationUtils").openURL(a===d("PolarisExploreUtil").ExplorePersonalizationOptions.FOR_YOU?l:m)}g["default"]=a}),98);
__d("PolarisExplorePagePersonalizationPopoverHeaderItem.react",["CometRouteParams","IGDSLazyPopoverTrigger.react","JSResourceForInteraction","PolarisDynamicExploreVariantsHelper","PolarisExplorePagePersonalizationHeader.react","PolarisExploreUtil","emptyFunction","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));b=h;var j=b.useEffect,k=b.useState,l=b.c,m=c("JSResourceForInteraction")("PolarisExplorePagePersonalizationMenu.react").__setRef("PolarisExplorePagePersonalizationPopoverHeaderItem.react");function a(a){var b=l(15);a=a.currentKeyword;var e=d("CometRouteParams").useRouteParams();e=e.variant;var f,g,h;b[0]!==e?(h=d("PolarisDynamicExploreVariantsHelper").shouldShowNonPersonalizedExplore(e),f=k,g=d("PolarisExploreUtil").getExplorePersonalizationOptionKey(h),b[0]=e,b[1]=f,b[2]=g,b[3]=h):(f=b[1],g=b[2],h=b[3]);e=f(g);var n=e[0],o=e[1];b[4]!==h?(f=function(){return o(d("PolarisExploreUtil").getExplorePersonalizationOptionKey(h))},g=[h],b[4]=h,b[5]=f,b[6]=g):(f=b[5],g=b[6]);j(f,g);b[7]!==a||b[8]!==n?(e={keyword:a,onClose:c("emptyFunction"),parentState:n,setParentState:o},b[7]=a,b[8]=n,b[9]=e):e=b[9];b[10]!==n?(f=function(a,b){return i.jsx(c("PolarisExplorePagePersonalizationHeader.react"),{contextRef:a,onShow:b,selectedFilterLabelKey:n})},b[10]=n,b[11]=f):f=b[11];b[12]!==e||b[13]!==f?(g=i.jsx(c("IGDSLazyPopoverTrigger.react"),{align:"start",popoverProps:e,popoverResource:m,position:"below",preloadTrigger:"button",children:f}),b[12]=e,b[13]=f,b[14]=g):g=b[14];return g}g.PolarisExplorePagePersonalizationPopoverHeaderItem=a}),98);
__d("PolarisKeywordSearchExploreHeaderContent.react",["IGDSBox.react","IGDSText.react","PolarisDsaQEHelpers","PolarisGenericMobileHeader.react","PolarisNavBackButton.react","PolarisStringUtils","PolarisUA","cr:10215","isStringNullOrEmpty","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).c,j=h,k={bottomMargin:{marginBottom:"x1e56ztr",$$css:!0},container:{alignItems:"x1pha0wt",display:"x78zum5",flexDirection:"x1q0g3np",justifyContent:"x1qughib",$$css:!0},extraBottomMargin:{marginBottom:"xieb3on",$$css:!0}};function a(a){var e=i(15),f=a.hashtagHeaderButtonsQueryReference;a=a.keyword;var g=d("PolarisDsaQEHelpers").hasNonProfiledExperienceEnabled(),h=!c("isStringNullOrEmpty")(a);if(d("PolarisUA").isMobile()&&h&&a!=null){var l;e[0]===Symbol["for"]("react.memo_cache_sentinel")?(l=j.jsx(c("PolarisNavBackButton.react"),{}),e[0]=l):l=e[0];var m;e[1]!==a?(m=d("PolarisStringUtils").lowercaseAndCapitalizeFirst(a),e[1]=a,e[2]=m):m=e[2];e[3]!==m?(l=j.jsx(c("PolarisGenericMobileHeader.react"),{leftActions:l,title:m}),e[3]=m,e[4]=l):l=e[4];return l}e[5]===Symbol["for"]("react.memo_cache_sentinel")?(m=[k.container,g?k.bottomMargin:k.extraBottomMargin],e[5]=m):m=e[5];e[6]!==h||e[7]!==a?(l=h&&a!=null&&j.jsx(c("IGDSBox.react"),{children:j.jsx(c("IGDSText.react"),{size:"title",weight:"semibold",children:d("PolarisStringUtils").lowercaseAndCapitalizeFirst(a)})}),e[6]=h,e[7]=a,e[8]=l):l=e[8];e[9]!==f||e[10]!==a?(g=f&&b("cr:10215")&&j.jsx(b("cr:10215"),{hashtagHeaderButtonsQueryReference:f,keyword:a}),e[9]=f,e[10]=a,e[11]=g):g=e[11];e[12]!==l||e[13]!==g?(h=j.jsxs(c("IGDSBox.react"),{xstyle:m,children:[l,g]}),e[12]=l,e[13]=g,e[14]=h):h=e[14];return h}g["default"]=a}),98);
__d("PolarisKeywordSearchExploreHeader.react",["IGDSBox.react","PolarisDsaQEHelpers","PolarisExplorePagePersonalizationPopoverHeaderItem.react","PolarisKeywordSearchExploreHeaderContent.react","PolarisNavigationLayoutContext","react","usePolarisNonPersonalizedTabsImpressionLogger"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).c,j=h,k={emptyGridHeader:{marginTop:"xqui205",marginEnd:"xqmxbcd",marginBottom:"x1hq5gj4",marginStart:"xmupa6y",$$css:!0},header:{backgroundColor:"xvbhtw8",paddingTop:"x1p5oq8j",position:"x7wzq59",top:"x13vifvy",zIndex:"x1vjfegm","@media (min-width: 736px)_marginTop":"xph46j","@media (min-width: 736px)_marginEnd":"x1pca17w","@media (min-width: 736px)_marginBottom":"xsybdxg","@media (min-width: 736px)_marginStart":"x1bzgcud",$$css:!0}};function a(a){var b=i(12),e=a.hashtagHeaderButtonsQueryReference,f=a.hasMedia;a=a.keyword;f=f===void 0?!0:f;var g;b[0]===Symbol["for"]("react.memo_cache_sentinel")?(g=d("PolarisDsaQEHelpers").hasNonProfiledExperienceEnabled(),b[0]=g):g=b[0];g=g;var h=d("PolarisNavigationLayoutContext").usePolarisNavigationLayoutContext();h=h.navigationPosition;h=h==="bottom";var l=c("usePolarisNonPersonalizedTabsImpressionLogger")("exploreLandingPage");if(h)return null;h=f?k.header:k.emptyGridHeader;var m;b[1]!==e||b[2]!==a?(m=j.jsx(c("PolarisKeywordSearchExploreHeaderContent.react"),{hashtagHeaderButtonsQueryReference:e,keyword:a}),b[1]=e,b[2]=a,b[3]=m):m=b[3];b[4]!==f||b[5]!==a?(e=f&&g&&j.jsx(d("PolarisExplorePagePersonalizationPopoverHeaderItem.react").PolarisExplorePagePersonalizationPopoverHeaderItem,{currentKeyword:a}),b[4]=f,b[5]=a,b[6]=e):e=b[6];b[7]!==l||b[8]!==h||b[9]!==m||b[10]!==e?(g=j.jsxs(c("IGDSBox.react"),{containerRef:l,xstyle:h,children:[m,e]}),b[7]=l,b[8]=h,b[9]=m,b[10]=e,b[11]=g):g=b[11];return g}g["default"]=a}),98);
__d("PolarisDynamicExplorePageSharedGrid.react",["CometPlaceholder.react","FBLogger","IGRouter_DO_NOT_USE.react","PolarisDynamicExploreGrid.react","PolarisDynamicExploreMediaHelpers","PolarisKeywordSearchExploreHeader.react","PolarisUA","deferredLoadComponent","logPolarisPostModalOpen","polarisDynamicExploreSelectors","polarisLogAction","react","requireDeferred"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));b=h;var j=b.useEffect,k=b.useState,l=c("deferredLoadComponent")(c("requireDeferred")("PolarisDynamicExplorePostModal.react").__setRef("PolarisDynamicExplorePageSharedGrid.react")),m=1;function a(a){var b=a.exploreGridQuery,e=a.exploreGridType,f=a.hashtagHeaderButtonsQueryReference,g=a.logGridItemClick,h=a.logGridItemImpression,n=a.mediaLinkBuilder,o=a.modalEntryPath,p=a.onNextPage,q=a.pageID,r=a.pagination,s=a.requestInitialGrid,t=a.sectionalItems;a=k(!1);var u=a[0],v=a[1];a=k(null);var w=a[0],x=a[1],y=d("IGRouter_DO_NOT_USE.react").useIGHistory();a=function(a,b,e,f,h){var i=e.layout_content,j=e.layout_type;i=i.fill_items.find(function(a){return a.id===b.id});i=i?d("PolarisDynamicExploreMediaHelpers").GRID_ITEM_SIZE.ONE_BY_ONE:d("PolarisDynamicExploreMediaHelpers").getGridItemPlacement(j).size;g&&g(b,i,e,f,h);c("polarisLogAction")("exploreGridItemClicked");d("PolarisUA").isDesktop()&&(a.preventDefault(),z(d("PolarisDynamicExploreMediaHelpers").getPostId(b)))};function z(a){v(!0);x(a);var b=t.findIndex(function(b){return d("polarisDynamicExploreSelectors").getGridItemsFromSectionalItem(b).some(function(b){return b.pk===a})}),e=d("polarisDynamicExploreSelectors").getGridItemsFromSectionalItem(t[b]).find(function(b){return b.pk===a});e=(e=e==null?void 0:e.media_type)!=null?e:0;e===0&&c("FBLogger")("ig_web").mustfix("DynamicExplorePageSharedContent: missing media type for post modal log event");c("logPolarisPostModalOpen")(q,e,"explore_page");e=t.length-b-1;(r==null?void 0:r.moreAvailable)===!0&&!r.isLoading&&e<m&&p()}var A=function(){v(!1),x(null)};j(function(){return y.listen(function(a){y.action==="POP"&&A()})},[y]);return i.jsxs(i.Fragment,{children:[i.jsx(c("CometPlaceholder.react"),{fallback:null,children:i.jsx(c("PolarisKeywordSearchExploreHeader.react"),{hashtagHeaderButtonsQueryReference:f,keyword:b})}),i.jsx(c("PolarisDynamicExploreGrid.react"),{analyticsContext:q,exploreGridQuery:b,exploreGridType:e,hasNextPage:(f=r==null?void 0:r.moreAvailable)!=null?f:!1,isFetching:(f=r==null?void 0:r.isLoading)!=null?f:!1,logGridItemImpression:h,mediaLinkBuilder:n,onGridItemClick:a,onNextPage:p,onRetry:s,sectionalItems:t}),u&&w!=null&&i.jsx(l,{analyticsContext:q,exploreGridQuery:b,exploreGridType:e,modalEntryPath:o,onClose:A,onOpen:z,postId:w})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisDynamicExploreMediaPageGrid.react",["PolarisDynamicExploreActions","PolarisDynamicExploreMediaHelpers","PolarisDynamicExplorePageSharedGrid.react","PolarisDynamicExploreTypes","PolarisExploreLogger","PolarisLinkBuilder","PolarisOrganicThumbnailImpression","PolarisReactRedux.react","PolarisRoutes","PolarisUA","emptyFunction","polarisDynamicExploreSelectors","polarisLogAction","react","usePolarisGetQuerySetup"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function j(a){return d("PolarisUA").isMobile()?d("PolarisLinkBuilder").buildChainingMediaLink(d("PolarisDynamicExploreMediaHelpers").getPostCode(a)):d("PolarisLinkBuilder").buildMediaLink(d("PolarisDynamicExploreMediaHelpers").getPostCode(a))}function a(a){var b=a.exploreGridType,e=a.exploreQuery,f=a.pageID,g=(a=d("PolarisReactRedux.react")).useDispatch(),h=a.useSelector(function(a){return a.dynamicExplore.isNonPersonalizedExplore});c("usePolarisGetQuerySetup")(e,d("PolarisDynamicExploreActions").setupDynamicExploreGrid({isNonPersonalizedExplore:h}));var k=a.useSelector(function(a){return a.dynamicExplore.pagination});function l(){c("polarisLogAction")("discoverNextLoadAttempt"),g(d("PolarisDynamicExploreActions").requestDynamicExploreGrid({cursor:h?k.nonpersonalized.cursor:k.personalized.cursor,isNonPersonalizedExplore:h,retryHandler:l}))}e=a.useSelector(function(a){return d("polarisDynamicExploreSelectors").getSupportedSectionalItems(a,d("PolarisDynamicExploreTypes").DYNAMIC_EXPLORE_GRID_TYPES.home_explore_grid)});a=function(a,b,c,e,f){d("PolarisExploreLogger").logExploreHomeClick({column:f,gridItemSize:b,mediaType:d("PolarisDynamicExploreMediaHelpers").getMediaType(a),postId:d("PolarisDynamicExploreMediaHelpers").getPostId(a),row:e,type:d("PolarisExploreLogger").getDynamicExploreGridItemType(a)})};var m=function(a,b){return d("PolarisOrganicThumbnailImpression").makeThumbnailImpressionAction({analyticsContext:f,column:a.column,gridItemSize:b,itemType:a.item_type,mediaType:(b=a.media_type)!=null?b:void 0,postId:d("PolarisDynamicExploreMediaHelpers").getPostId(a),row:a.row})};return i.jsx(c("PolarisDynamicExplorePageSharedGrid.react"),{exploreGridType:b,logGridItemClick:a,logGridItemImpression:m,mediaLinkBuilder:j,modalEntryPath:d("PolarisRoutes").DISCOVER_MEDIA_PATH,onNextPage:l,pageID:f,pagination:h?k.nonpersonalized:k.personalized,requestInitialGrid:c("emptyFunction"),sectionalItems:e})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisErrorBoundaryWithRetry.react",["ErrorBoundary.react","react","useCounter"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));b=h;b.useCallback;var j=b.c;function a(a){var b=j(15),d,e,f;b[0]!==a?(e=a.fallback,d=a.onError,f=babelHelpers.objectWithoutPropertiesLoose(a,["fallback","onError"]),b[0]=a,b[1]=d,b[2]=e,b[3]=f):(d=b[1],e=b[2],f=b[3]);a=c("useCounter")();var g=a[0];a=a[1];var h=a.increment;b[4]!==d||b[5]!==h?(a=function(a){d(a,h)},b[4]=d,b[5]=h,b[6]=a):a=b[6];a=a;var k;b[7]!==e||b[8]!==h?(k=function(a){return e(a,h)},b[7]=e,b[8]=h,b[9]=k):k=b[9];k=k;var l;b[10]!==k||b[11]!==g||b[12]!==a||b[13]!==f?(l=i.jsx(c("ErrorBoundary.react"),babelHelpers["extends"]({fallback:k,forceResetErrorCount:g,onError:a},f)),b[10]=k,b[11]=g,b[12]=a,b[13]=f,b[14]=l):l=b[14];return l}g["default"]=a}),98);
__d("usePolarisGetQueryRefetcher",["react","useCounter","usePolarisQueryStore"],(function(a,b,c,d,e,f,g){"use strict";var h;b=h||d("react");b.useCallback;var i=b.c;function a(a){var b=i(4),d=c("useCounter")();d[0];d=d[1];var e=d.increment,f=c("usePolarisQueryStore")();b[0]!==f||b[1]!==a||b[2]!==e?(d=function(b){f.refetchGetQuery(a,b),e()},b[0]=f,b[1]=a,b[2]=e,b[3]=d):d=b[3];return d}g["default"]=a}),98);
__d("PolarisDynamicExploreMediaPageGridWithRetry.react",["CometPlaceholder.react","PolarisDynamicExploreActions","PolarisDynamicExploreLoadingSpinner.react","PolarisDynamicExploreMediaPageGrid.react","PolarisDynamicExploreTypes","PolarisErrorBoundaryWithRetry.react","PolarisErrorRetrySection.react","PolarisReactRedux.react","react","usePolarisGetQueryRefetcher"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));b=h;b.useCallback;var j=b.c;function a(a){var b=j(15),e=a.exploreQuery;a=a.pageID;var f=d("PolarisReactRedux.react").useDispatch(),g=c("usePolarisGetQueryRefetcher")(e),h;b[0]!==g?(h=function(a){return function(){g(),a()}},b[0]=g,b[1]=h):h=b[1];var k=h;b[2]!==f||b[3]!==k?(h=function(a,b){f(d("PolarisDynamicExploreActions").logErrorAndShowRetryToast(a,k(b)))},b[2]=f,b[3]=k,b[4]=h):h=b[4];h=h;var l;b[5]!==k?(l=function(a,b){return i.jsx(c("PolarisErrorRetrySection.react"),{onRetry:k(b)})},b[5]=k,b[6]=l):l=b[6];l=l;var m;b[7]===Symbol["for"]("react.memo_cache_sentinel")?(m=i.jsx(c("PolarisDynamicExploreLoadingSpinner.react"),{}),b[7]=m):m=b[7];var n;b[8]!==e||b[9]!==a?(n=i.jsx(c("PolarisDynamicExploreMediaPageGrid.react"),{exploreGridType:d("PolarisDynamicExploreTypes").DYNAMIC_EXPLORE_GRID_TYPES.home_explore_grid,exploreQuery:e,pageID:a}),b[8]=e,b[9]=a,b[10]=n):n=b[10];b[11]!==l||b[12]!==h||b[13]!==n?(e=i.jsx(c("CometPlaceholder.react"),{fallback:m,children:i.jsx(c("PolarisErrorBoundaryWithRetry.react"),{fallback:l,onError:h,children:n})}),b[11]=l,b[12]=h,b[13]=n,b[14]=e):e=b[14];return e}g["default"]=a}),98);
__d("PolarisDynamicExplorePageContentWrapper.react",["CometErrorBoundary.react","PolarisNavigationLayoutContext","PolarisSearchResultDisplayTypes","PolarisUA","cr:4474","cr:6698","react","stylex","usePolarisIsOnExplorePage"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=(i||(i=d("react"))).c,k=i,l={root:{display:"x78zum5",flexDirection:"xdt5ytf",flexGrow:"x1iyjqo2",marginTop:"xdj266r",marginEnd:"xkrivgy",marginBottom:"x4n8cb0",marginStart:"x1gryazu",maxWidth:"x1fawyso",width:"xh8yej3","@media (max-width: 735px)_backgroundColor":"x19b80pe","@media (max-width: 735px)_marginBottom":"xhae0no","@media (min-width: 736px)_boxSizing":"xmjrnx3","@media (min-width: 736px)_paddingTop":"x103t36t","@media (min-width: 736px)_paddingEnd":"x16mfq2j","@media (min-width: 736px)_paddingBottom":"x1e49onv","@media (min-width: 736px)_paddingStart":"x7flfwp","@media (min-width: 736px)_width":"x1ugxg0y",$$css:!0},rootDesktop:{"@media (max-width: 735px)_paddingTop":"x1oqrbt2","@media (min-width: 736px)_paddingTop":"xgzdhx4",$$css:!0}};function a(a){var e=j(11),f=a.children;a=a.pageId;var g=d("PolarisNavigationLayoutContext").usePolarisNavigationLayoutContext();g=g.navigationPosition;g=c("usePolarisIsOnExplorePage")()&&d("PolarisUA").isDesktop()&&g==="bottom";var i;e[0]===Symbol["for"]("react.memo_cache_sentinel")?(i=(h||(h=c("stylex")))(l.root,d("PolarisUA").isDesktop()&&l.rootDesktop),e[0]=i):i=e[0];var m;e[1]!==g||e[2]!==a?(m=g&&b("cr:4474")!=null&&k.jsx(b("cr:4474"),{analyticsContext:a,searchBoxOnExplore:!0,useHistory:!1}),e[1]=g,e[2]=a,e[3]=m):m=e[3];var n;e[4]!==g||e[5]!==a?(n=g&&b("cr:6698")!=null&&k.jsx(c("CometErrorBoundary.react"),{children:k.jsx(b("cr:6698"),{analyticsContext:a,resultDisplayType:c("PolarisSearchResultDisplayTypes").Popover})}),e[4]=g,e[5]=a,e[6]=n):n=e[6];e[7]!==m||e[8]!==n||e[9]!==f?(g=k.jsxs("div",{className:i,"data-testid":void 0,children:[m,n,f]}),e[7]=m,e[8]=n,e[9]=f,e[10]=g):g=e[10];return g}g["default"]=a}),98);
__d("PolarisExploreMobileHeader.react",["IGDSBox.react","PolarisDsaQEHelpers","PolarisExplorePagePersonalizationPopoverHeaderItem.react","PolarisGenericMobileHeader.react","PolarisSearchBoxContainer.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).c,j=h;function a(a){var b=i(12),e=a.analyticsContext;a=a.isSearchOpen;var f;b[0]===Symbol["for"]("react.memo_cache_sentinel")?(f="xnz67gz",b[0]=f):f=b[0];var g=!a&&d("PolarisDsaQEHelpers").hasNonProfiledExperienceEnabled()?"93%":"100%",h;b[1]!==e||b[2]!==a?(h=j.jsx(c("PolarisSearchBoxContainer.react"),{analyticsContext:e,isActive:a,useHistory:!0}),b[1]=e,b[2]=a,b[3]=h):h=b[3];b[4]!==g||b[5]!==h?(e=j.jsx(c("IGDSBox.react"),{marginEnd:4,width:g,children:h}),b[4]=g,b[5]=h,b[6]=e):e=b[6];b[7]!==a?(g=!a&&d("PolarisDsaQEHelpers").hasNonProfiledExperienceEnabled()&&j.jsx(d("PolarisExplorePagePersonalizationPopoverHeaderItem.react").PolarisExplorePagePersonalizationPopoverHeaderItem,{currentKeyword:""}),b[7]=a,b[8]=g):g=b[8];b[9]!==e||b[10]!==g?(h=j.jsx(c("PolarisGenericMobileHeader.react"),{className:f,title:j.jsx(c("IGDSBox.react"),{alignItems:"center",direction:"row",position:"relative",children:j.jsx(c("IGDSBox.react"),{flex:"grow",position:"relative",children:j.jsxs(c("IGDSBox.react"),{alignItems:"center",direction:"row",display:"flex",children:[e,g]})})})}),b[9]=e,b[10]=g,b[11]=h):h=b[11];return h}g["default"]=a}),98);
__d("PolarisExploreRootContent.react",["CometPlaceholder.react","FBLogger","PolarisDynamicExploreLoadingSpinner.react","PolarisDynamicExploreMediaPageGridWithRetry.react","PolarisDynamicExplorePageContentWrapper.react","PolarisQPManager.react","PolarisReactRedux.react","PolarisRoutes","PolarisSearchResultsListContainer.react","PolarisUA","cr:6792","polarisSearchSelectors","react","useCometRouterDispatcher","usePolarisPreloadedGetQuery"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react")),j=h.useEffect,k="exploreLandingPage";function a(a){a=a.routeProps;var e=a.is_search_open,f=a.nonpersonalized;a=a.polaris_preload;var g=c("useCometRouterDispatcher")(),h=d("PolarisReactRedux.react").useDispatch();h({isNonPersonalizedExplore:f,type:"NON_PERSONALIZED_EXPLORE"});h=c("usePolarisPreloadedGetQuery")(a.explore);f=d("PolarisReactRedux.react").useSelector(d("polarisSearchSelectors").selectPendingQuery);j(function(){if(d("PolarisUA").isMobile())try{g==null?void 0:g.prefetchRouteDefinition(d("PolarisRoutes").DISCOVER_SEARCH_PATH)}catch(a){c("FBLogger")("ig_web").catching(a)}},[g]);a=e===!0&&d("PolarisUA").isMobile();return i.jsxs(c("PolarisDynamicExplorePageContentWrapper.react"),{pageId:k,children:[i.jsx(c("PolarisQPManager.react"),{slot:"explore"}),a?i.jsxs(i.Fragment,{children:[f.length>0&&b("cr:6792")!=null&&i.jsx(b("cr:6792"),{pendingQuery:f}),i.jsx(c("PolarisSearchResultsListContainer.react"),{analyticsContext:k,isVisibleInPopup:!1})]}):i.jsx(c("CometPlaceholder.react"),{fallback:i.jsx(c("PolarisDynamicExploreLoadingSpinner.react"),{}),children:i.jsx(c("PolarisDynamicExploreMediaPageGridWithRetry.react"),{exploreQuery:h,pageID:k})})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisExploreRoot.react",["PolarisExploreMobileHeader.react","PolarisExploreRootContent.react","PolarisMobileHeaderWrapper.react","react","usePolarisPageID","withPolarisShell.react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).c,j=h;function a(a){var b=i(8);a=a.props;a=a.routeProps;var d=a.is_search_open,e=c("usePolarisPageID")();d=d===!0;var f;b[0]!==e||b[1]!==d?(f=j.jsx(c("PolarisMobileHeaderWrapper.react"),{children:j.jsx(c("PolarisExploreMobileHeader.react"),{analyticsContext:e,isSearchOpen:d})}),b[0]=e,b[1]=d,b[2]=f):f=b[2];b[3]!==a?(e=j.jsx(c("PolarisExploreRootContent.react"),{routeProps:a}),b[3]=a,b[4]=e):e=b[4];b[5]!==f||b[6]!==e?(d=j.jsxs(j.Fragment,{children:[f,e]}),b[5]=f,b[6]=e,b[7]=d):d=b[7];return d}b=c("withPolarisShell.react")(a);g["default"]=b}),98);