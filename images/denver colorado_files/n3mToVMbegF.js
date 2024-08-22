;/*FB_PKG_DELIM*/

__d("IGDLegacyTLCBundleResource",["IGDLegacyTLCMainWebWorkerResource"],(function(a,b,c,d,e,f,g){"use strict";g["default"]=c("IGDLegacyTLCMainWebWorkerResource")}),98);
__d("PolarisPostFastOptionAboutThisAccount.react",["fbt","IGCoreDialog.react","PolarisAboutThisAccountUtils","PolarisPostModalContext.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=(i||(i=d("react"))).c,k=i;function a(a){var b=j(5);a=a.post;a=a.owner;a=a!=null&&d("PolarisAboutThisAccountUtils").getIsEligibleForATA(a);var c=d("PolarisPostModalContext.react").useSetPostModal();if(!a)return null;b[0]!==c?(a=function(){c("aboutThisAccount")},b[0]=c,b[1]=a):a=b[1];a=a;var e;b[2]===Symbol["for"]("react.memo_cache_sentinel")?(e=h._("__JHASH__nXVhUzKwAyS__JHASH__"),b[2]=e):e=b[2];b[3]!==a?(e=k.jsx(d("IGCoreDialog.react").IGCoreDialogItem,{onClick:a,children:e}),b[3]=a,b[4]=e):e=b[4];return e}g["default"]=a}),226);
__d("PolarisPostOwnerUtils",["PolarisConfig"],(function(a,b,c,d,e,f,g){"use strict";function a(a){return((a=a.owner)==null?void 0:a.id)===d("PolarisConfig").getViewerId()}g.getPostOwnedByViewer=a}),98);
__d("PolarisPostFastOptionDelete.react",["fbt","IGCoreDialog.react","PolarisPostModalContext.react","PolarisPostOwnerUtils","PolarisPostTypeUtils","PolarisUA","QPLUserFlow","polarisLogAction","qpl","react","usePolarisAnalyticsContext"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=(i||(i=d("react"))).c,k=i;function a(a){var b=j(9);a=a.post;var e=d("PolarisPostOwnerUtils").getPostOwnedByViewer(a),f;b[0]!==a?(f=d("PolarisPostTypeUtils").getPostType(a),b[0]=a,b[1]=f):f=b[1];var g=f,i=c("usePolarisAnalyticsContext")(),l=d("PolarisPostModalContext.react").useSetPostModal();a=d("PolarisUA").isMobile();d("PolarisUA").isDesktop()&&(a=!0);if(!e||!a)return null;b[2]!==i||b[3]!==g||b[4]!==l?(f=function(){c("polarisLogAction")("delete_post_click",{source:i,type:g}),c("QPLUserFlow").start(c("qpl")._(379202588,"719"),{annotations:{string:{source:i,type:g}}}),l("delete")},b[2]=i,b[3]=g,b[4]=l,b[5]=f):f=b[5];e=f;b[6]===Symbol["for"]("react.memo_cache_sentinel")?(a=h._("__JHASH__uSEtG_36DqP__JHASH__"),b[6]=a):a=b[6];b[7]!==e?(f=k.jsx(d("IGCoreDialog.react").IGCoreDialogItem,{color:"ig-error-or-destructive","data-testid":void 0,onClick:e,children:a}),b[7]=e,b[8]=f):f=b[8];return f}g["default"]=a}),226);
__d("PolarisPostFastOptionDemote.react",["IGCoreDialog.react","react","usePolarisAnalyticsContext","usePolarisHidePost"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).c,j=h;function a(a){var b=i(9),e=a.onClose;a=a.post;var f=c("usePolarisAnalyticsContext")(),g=a.feedDemotionControl,h=a.feedRecsDemotionControl,k=h!=null?"explore_story":"media_or_ad",l;b[0]!==k||b[1]!==a.id?(l={inventorySource:k,postId:a.id},b[0]=k,b[1]=a.id,b[2]=l):l=b[2];var m=d("usePolarisHidePost").usePolarisHidePost(l);if(g==null&&h==null||f!=="feedPage")return null;b[3]!==m||b[4]!==e?(k=function(){m(),e()},b[3]=m,b[4]=e,b[5]=k):k=b[5];l=k;k=(h=(g=a.feedDemotionControl)==null?void 0:g.title)!=null?h:(f=a.feedRecsDemotionControl)==null?void 0:f.title;b[6]!==l||b[7]!==k?(g=j.jsx(d("IGCoreDialog.react").IGCoreDialogItem,{onClick:l,children:k}),b[6]=l,b[7]=k,b[8]=g):g=b[8];return g}g["default"]=a}),98);
__d("PolarisPostFastOptionEdit.react",["fbt","IGCoreDialog.react","InstagramODS","PolarisCreationEditRoot.entrypoint","PolarisCreationModalPlaceholder.react","PolarisHasFeedCreation","PolarisPostOwnerUtils","PolarisUA","react","useIGDSEntryPointDialog"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=(i||(i=d("react"))).c,k=i;function l(a){var b=j(11),e=a.onClose;a=a.post;var f=d("PolarisPostOwnerUtils").getPostOwnedByViewer(a);a=(a=a.code)!=null?a:"";var g;b[0]!==a?(g={shortcode:a},b[0]=a,b[1]=g):g=b[1];b[2]===Symbol["for"]("react.memo_cache_sentinel")?(a={},b[2]=a):a=b[2];b[3]!==g?(a={routeParams:g,routeProps:a},b[3]=g,b[4]=a):a=b[4];g=c("useIGDSEntryPointDialog")(c("PolarisCreationEditRoot.entrypoint"),a,"button",m);var i=g[0];a=d("PolarisUA").isDesktop()&&d("PolarisHasFeedCreation").hasFeedCreation();if(!f||!a)return null;b[5]!==i||b[6]!==e?(g=function(){c("InstagramODS").incr("web.profile.edit_post_click"),i({}),e()},b[5]=i,b[6]=e,b[7]=g):g=b[7];f=g;b[8]===Symbol["for"]("react.memo_cache_sentinel")?(a=h._("__JHASH__NW8FGD6YRSe__JHASH__"),b[8]=a):a=b[8];b[9]!==f?(g=k.jsx(d("IGCoreDialog.react").IGCoreDialogItem,{onClick:f,children:a}),b[9]=f,b[10]=g):g=b[10];return g}function m(a){return k.jsx(c("PolarisCreationModalPlaceholder.react"),{onClose:a})}m.displayName=m.name+" [from "+f.id+"]";function a(a){var b=j(3),c=a.onClose;a=a.post;var d;b[0]!==c||b[1]!==a?(d=k.jsx(l,{onClose:c,post:a}),b[0]=c,b[1]=a,b[2]=d):d=b[2];return d}g["default"]=a}),226);
__d("PolarisPostFastOptionEmbed.react",["fbt","IGCoreDialog.react","PolarisPostModalContext.react","PolarisPostTypeUtils","polarisGetPostFromGraphMediaInterface","polarisLogAction","react","usePolarisAnalyticsContext"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=(i||(i=d("react"))).c,k=i;function a(a){var b=j(11),e=a.post,f=e.owner;a=f!=null&&d("polarisGetPostFromGraphMediaInterface").getUserIsEmbeddable(f);var g=d("PolarisPostModalContext.react").useSetPostModal(),i=c("usePolarisAnalyticsContext")(),l;b[0]!==e?(l=d("PolarisPostTypeUtils").getPostType(e),b[0]=e,b[1]=l):l=b[1];var m=l;if(!a)return null;b[2]!==e.id||b[3]!==f||b[4]!==i||b[5]!==m||b[6]!==g?(l=function(){c("polarisLogAction")("embedCodeClick",{mediaId:e.id,ownerId:f==null?void 0:f.id,source:i,type:m}),g("embed")},b[2]=e.id,b[3]=f,b[4]=i,b[5]=m,b[6]=g,b[7]=l):l=b[7];a=l;b[8]===Symbol["for"]("react.memo_cache_sentinel")?(l=h._("__JHASH__bRE3yEUh4U8__JHASH__"),b[8]=l):l=b[8];b[9]!==a?(l=k.jsx(d("IGCoreDialog.react").IGCoreDialogItem,{onClick:a,children:l}),b[9]=a,b[10]=l):l=b[10];return l}g["default"]=a}),226);
__d("PolarisPostFastOptionFavorite.react",["IGCoreDialog.react","PolarisFavoritesStrings","PolarisReactRedux.react","PolarisRelationshipActionFavoriteUser","PolarisRelationshipActionUnfavoriteUser","polarisRelationshipSelectors.react","react","usePolarisAnalyticsContext"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).c,j=h;function a(a){var b=i(11),e=a.onClose;a=a.post;var f=d("PolarisReactRedux.react").useDispatch(),g=a.owner,h=c("usePolarisAnalyticsContext")();a=d("polarisRelationshipSelectors.react").useRelationship(((a=a.owner)==null?void 0:a.id)||"");var k;b[0]!==a?(k=a!=null&&d("polarisRelationshipSelectors.react").favoritedByViewer(a),b[0]=a,b[1]=k):k=b[1];var l=k;k=a!=null&&d("polarisRelationshipSelectors.react").followedByViewer(a);b[2]!==g||b[3]!==l||b[4]!==f||b[5]!==h||b[6]!==e?(a=function(){if(!g)return;l?f(d("PolarisRelationshipActionUnfavoriteUser").unfavoriteUser(g.id,h)):f(d("PolarisRelationshipActionFavoriteUser").favoriteUser(g.id,h));e()},b[2]=g,b[3]=l,b[4]=f,b[5]=h,b[6]=e,b[7]=a):a=b[7];a=a;if(!k||!(h==="feedPage"||h==="postPage"))return null;k=l?d("PolarisFavoritesStrings").UNFAVORITE_MENU_TEXT:d("PolarisFavoritesStrings").FAVORITE_MENU_TEXT;var m;b[8]!==a||b[9]!==k?(m=j.jsx(d("IGCoreDialog.react").IGCoreDialogItem,{onClick:a,children:k}),b[8]=a,b[9]=k,b[10]=m):m=b[10];return m}g["default"]=a}),98);
__d("PolarisPostFastOptionGoToPost.react",["fbt","IGCoreDialog.react","IGDSText.react","PolarisFastLink.react","PolarisPostShareUtils","react","usePolarisIsOnPostPage"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=(i||(i=d("react"))).c,k=i;function a(a){var b,e=j(6);a=a.post;var f=c("usePolarisIsOnPostPage")();b=!!((b=a.code)==null?void 0:b.length)&&!f;e[0]!==a?(f=d("PolarisPostShareUtils").getShareURL(a),e[0]=a,e[1]=f):f=e[1];a=f;if(!b)return null;e[2]===Symbol["for"]("react.memo_cache_sentinel")?(f={navigation_source:"polaris_go_to_post"},e[2]=f):f=e[2];e[3]===Symbol["for"]("react.memo_cache_sentinel")?(b=k.jsx(c("IGDSText.react"),{color:"primaryText",children:h._("__JHASH__vGPcgAUZhRu__JHASH__")}),e[3]=b):b=e[3];e[4]!==a?(f=k.jsx(d("IGCoreDialog.react").IGCoreDialogItem,{"data-testid":void 0,children:k.jsx(c("PolarisFastLink.react"),{display:"block",href:a,traceParams:f,children:b})}),e[4]=a,e[5]=f):f=e[5];return f}g["default"]=a}),226);
__d("PolarisPostFastOptionHideAd.react",["InstagramODS","PolarisHideAdDialogItem.react","PolarisPostModalContext.react","PolarisViewpointActionUtils","polarisAdsSelectors.react","react","usePolarisAnalyticsContext"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).c,j=h;function a(a){var b=i(9);a=a.post;var e=d("PolarisPostModalContext.react").useSetPostModal(),f=c("usePolarisAnalyticsContext")(),g=d("polarisAdsSelectors.react").useFeedAdInfo(a.id,l),h=d("polarisAdsSelectors.react").useFeedAdInfo(a.id,k),m;b[0]!==a?(m=d("PolarisViewpointActionUtils").getMPKForFeedMedia(a),b[0]=a,b[1]=m):m=b[1];a=m;if(f!=="feedPage")return null;b[2]!==e?(m=function(){c("InstagramODS").incr("web.ads.feed.hide_option.click"),e("hideAd")},b[2]=e,b[3]=m):m=b[3];f=m;b[4]!==g||b[5]!==h||b[6]!==a||b[7]!==f?(m=j.jsx(c("PolarisHideAdDialogItem.react"),{adId:g,adTrackingToken:h,mpk:a,onClick:f}),b[4]=g,b[5]=h,b[6]=a,b[7]=f,b[8]=m):m=b[8];return m}function k(a){return a==null?void 0:a.tracking_token}function l(a){return a==null?void 0:a.ad_id}g["default"]=a}),98);
__d("PolarisPostFastOptionNominate.react",["fbt","IGCoreDialog.react","PolarisAPINominateClipsMedia","gkx","polarisGetPostFromGraphMediaInterface","promiseDone","react","usePolarisShowToast"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=(i||(i=d("react"))).c,k=i;function a(a){var b=j(6),e=a.post,f=c("usePolarisShowToast")();b[0]!==e||b[1]!==f?(a=function(){c("promiseDone")(d("PolarisAPINominateClipsMedia").nominateClipsMedia(e.id,e),function(a){f({text:"Thank you! We'll consider your nomination."})},function(a){f({text:"Request can't be completed. Try again later."})})},b[0]=e,b[1]=f,b[2]=a):a=b[2];a=a;if(c("gkx")("4256")&&d("polarisGetPostFromGraphMediaInterface").isClipsPost(e)){var g;b[3]===Symbol["for"]("react.memo_cache_sentinel")?(g=h._("__JHASH__y3XMRXzNsXl__JHASH__"),b[3]=g):g=b[3];b[4]!==a?(g=k.jsx(d("IGCoreDialog.react").IGCoreDialogItem,{onClick:a,children:g}),b[4]=a,b[5]=g):g=b[5];return g}return null}g["default"]=a}),226);
__d("PolarisPostFastOptionRemoveFromAdActivity.react",["CometRelayEnvironmentProvider","PolarisPostModalContext.react","PolarisRemoveFromAdActivityDialogItem.react","nullthrows","polarisAdsSelectors.react","react","usePolarisIsOnAdsActivityPage"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).c,j=h;function a(a){var b=i(6),e=a.onClose;a=a.post;var f=c("usePolarisIsOnAdsActivityPage")(),g=d("PolarisPostModalContext.react").useSetPostModal();a=d("polarisAdsSelectors.react").useFeedAdInfo(a.id,k);var h;b[0]!==a?(h=c("nullthrows")(a),b[0]=a,b[1]=h):h=b[1];a=h;if(!f)return null;b[2]!==a||b[3]!==e||b[4]!==g?(h=j.jsx(c("CometRelayEnvironmentProvider"),{children:j.jsx(c("PolarisRemoveFromAdActivityDialogItem.react"),{adInfo:a,onClose:e,setModal:g})}),b[2]=a,b[3]=e,b[4]=g,b[5]=h):h=b[5];return h}function k(a){return a}g["default"]=a}),98);
__d("PolarisPostFastOptionReport.react",["fbt","IGCoreDialog.react","PolarisConfig","PolarisExternalRoutes","PolarisLinkBuilder","PolarisNavigationUtils","PolarisPostModalContext.react","PolarisPostOwnerUtils","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=(i||(i=d("react"))).c,k=i,l=h._("__JHASH__EZpI8Gf5x6M__JHASH__");function a(a){var b=j(5),c=a.post;a=d("PolarisPostOwnerUtils").getPostOwnedByViewer(c);var e=d("PolarisPostModalContext.react").useSetPostModal();if(a)return null;b[0]!==c.code||b[1]!==e?(a=function(){if(!d("PolarisConfig").isLoggedIn()){var a=c.code;d("PolarisNavigationUtils").openExternalURL(d("PolarisLinkBuilder").buildLoggedOutReportLink(d("PolarisExternalRoutes").COMMUNITY_VIOLATIONS_GUIDELINES_CONTACT_FORM_PATH,a))}else e("report")},b[0]=c.code,b[1]=e,b[2]=a):a=b[2];a=a;var f;b[3]!==a?(f=k.jsx(d("IGCoreDialog.react").IGCoreDialogItem,{color:"ig-error-or-destructive","data-testid":void 0,onClick:a,children:l}),b[3]=a,b[4]=f):f=b[4];return f}g["default"]=a}),226);
__d("PolarisPostFastOptionReportAd.react",["InstagramODS","PolarisConfig","PolarisPostModalContext.react","PolarisPostOwnerUtils","PolarisReportAdDialogItem.react","PolarisViewpointActionUtils","polarisAdsSelectors.react","react","usePolarisAnalyticsContext"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).c,j=h;function a(a){var b=i(10);a=a.post;var e=d("PolarisPostOwnerUtils").getPostOwnedByViewer(a),f=d("PolarisPostModalContext.react").useSetPostModal(),g=c("usePolarisAnalyticsContext")(),h=d("polarisAdsSelectors.react").useFeedAdInfo(a.id,l),m=d("polarisAdsSelectors.react").useFeedAdInfo(a.id,k),n;b[0]!==a?(n=d("PolarisViewpointActionUtils").getMPKForFeedMedia(a),b[0]=a,b[1]=n):n=b[1];n=n;if(g!=="feedPage"&&g!=="adsActivityFeed"&&g!=="adsActivity")return null;if(e)return null;b[2]!==f?(g=function(){d("PolarisConfig").isLoggedIn()&&(c("InstagramODS").incr("web.ads.feed.report_option.click"),f("reportAd"))},b[2]=f,b[3]=g):g=b[3];e=g;b[4]!==h||b[5]!==m||b[6]!==n||b[7]!==e||b[8]!==a?(g=j.jsx(c("PolarisReportAdDialogItem.react"),{adId:h,adTrackingToken:m,mpk:n,onClick:e,post:a}),b[4]=h,b[5]=m,b[6]=n,b[7]=e,b[8]=a,b[9]=g):g=b[9];return g}function k(a){return a==null?void 0:a.tracking_token}function l(a){return a==null?void 0:a.ad_id}g["default"]=a}),98);
__d("PolarisPostFastOptionShare.react",["fbt","IGCoreDialog.react","IGDSText.react","PolarisPostModalContext.react","PolarisPostShareUtils","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=(i||(i=d("react"))).c,k=i;function a(a){var b=j(5);a=a.post;var e=d("PolarisPostModalContext.react").useSetPostModal();if(a.owner==null)return null;a=d("PolarisPostShareUtils").getIsShareable(a,a.owner)&&d("PolarisPostShareUtils").getIsMediaQuarantinedForShare(a);if(!a)return null;b[0]!==e?(a=function(){e("share")},b[0]=e,b[1]=a):a=b[1];a=a;var f;b[2]===Symbol["for"]("react.memo_cache_sentinel")?(f=k.jsx(c("IGDSText.react"),{children:h._("__JHASH__g7FO3r-qnxv__JHASH__")}),b[2]=f):f=b[2];b[3]!==a?(f=k.jsx(d("IGCoreDialog.react").IGCoreDialogItem,{"data-testid":void 0,onClick:a,children:f}),b[3]=a,b[4]=f):f=b[4];return f}g["default"]=a}),226);
__d("PolarisPostFastOptionTagged.react",["IGCoreDialog.react","PolarisConfig","PolarisPostModalContext.react","PolarisUserTaggedPostsStrings","qex","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).c,j=h;function a(a){var b=i(2);a=a.post;var e=d("PolarisPostModalContext.react").useSetPostModal();a=a.usertags;var f=d("PolarisConfig").getViewerId();if(f==null||a==null||!a.some(function(a){return a.user.id===f})||c("qex")._("152")!==!0)return null;b[0]!==e?(a=j.jsx(d("IGCoreDialog.react").IGCoreDialogItem,{"data-testid":void 0,onClick:function(){return e("tagOptions")},children:d("PolarisUserTaggedPostsStrings").TAG_OPTIONS}),b[0]=e,b[1]=a):a=b[1];return a}g["default"]=a}),98);
__d("PolarisPostFastOptionToggleCommenting.react",["fbt","IGCoreDialog.react","InstagramODS","PolarisGenericStrings","PolarisHasFeedCreation","PolarisInstapi","PolarisPostActionLoadPost","PolarisPostOwnerUtils","PolarisReactRedux.react","PolarisToastActions","PolarisUA","polarisGetPostFromGraphMediaInterface","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=(i||(i=d("react"))).c,k=i;function a(a){var b=j(22),c=a.onClose,e=a.post;a=d("PolarisPostOwnerUtils").getPostOwnedByViewer(e);var f;b[0]!==e?(f=d("polarisGetPostFromGraphMediaInterface").isPostCommentingOff(e),b[0]=e,b[1]=f):f=b[1];var g=f;f=d("PolarisUA").isDesktop()&&d("PolarisHasFeedCreation").hasFeedCreation();var i;b[2]!==e?(i=d("polarisGetPostFromGraphMediaInterface").getPostShortCode(e),b[2]=e,b[3]=i):i=b[3];var m=i,n=d("PolarisReactRedux.react").useDispatch();if(!a||!f)return null;b[4]!==n||b[5]!==e.id?(i=function(a){if(a===!0){n({postId:e.id,type:"ENABLE_POST_COMMENTS"});return d("PolarisInstapi").apiPost("/api/v1/media/{compound_media_id}/enable_comments/",{path:{compound_media_id:e.id}})}n({postId:e.id,type:"DISABLE_POST_COMMENTS"});return d("PolarisInstapi").apiPost("/api/v1/media/{compound_media_id}/disable_comments/",{path:{compound_media_id:e.id}})},b[4]=n,b[5]=e.id,b[6]=i):i=b[6];var o=i,p=l;b[7]!==g||b[8]!==o||b[9]!==n||b[10]!==m||b[11]!==e.id||b[12]!==c?(a=function(){var a;a=!1;p(g);o(g).then(function(){a||n(d("PolarisPostActionLoadPost").loadPost(m!=null?m:"",e.id))})["catch"](function(){n(d("PolarisToastActions").showToast({text:d("PolarisGenericStrings").GENERIC_ERROR_MESSAGE})),n(d("PolarisPostActionLoadPost").loadPost(m!=null?m:"",e.id))});c();return function(){a=!0}},b[7]=g,b[8]=o,b[9]=n,b[10]=m,b[11]=e.id,b[12]=c,b[13]=a):a=b[13];f=a;b[14]!==g?(i=g&&h._("__JHASH__HfLnSwUXfQ7__JHASH__"),b[14]=g,b[15]=i):i=b[15];b[16]!==g?(a=!g&&h._("__JHASH__AzNrpHYeV8O__JHASH__"),b[16]=g,b[17]=a):a=b[17];var q;b[18]!==f||b[19]!==i||b[20]!==a?(q=k.jsxs(d("IGCoreDialog.react").IGCoreDialogItem,{onClick:f,children:[i,a]}),b[18]=f,b[19]=i,b[20]=a,b[21]=q):q=b[21];return q}function l(a){c("InstagramODS").incr("web.profile.edit_post_click"),c("InstagramODS").incr("web.edit.toggle_commenting"),a===!0?c("InstagramODS").incr("web.edit.toggle_commenting_on"):c("InstagramODS").incr("web.edit.toggle_commenting_off")}g["default"]=a}),226);
__d("PolarisPostFastOptionToggleViewLikeCount.react",["fbt","IGCoreDialog.react","InstagramODS","PolarisGenericStrings","PolarisHasFeedCreation","PolarisInstapi","PolarisPostActionLoadPost","PolarisPostOwnerUtils","PolarisReactRedux.react","PolarisToastActions","PolarisUA","polarisGetPostFromGraphMediaInterface","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=(i||(i=d("react"))).c,k=i;function a(a){var b=j(23),c=a.onClose,e=a.post;a=d("PolarisPostOwnerUtils").getPostOwnedByViewer(e);var f;b[0]!==e?(f=d("polarisGetPostFromGraphMediaInterface").isPostLikeViewCountVisible(e),b[0]=e,b[1]=f):f=b[1];var g=f;f=d("PolarisUA").isDesktop()&&d("PolarisHasFeedCreation").hasFeedCreation();var i=d("PolarisReactRedux.react").useDispatch(),m;b[2]!==e?(m=d("polarisGetPostFromGraphMediaInterface").getPostShortCode(e),b[2]=e,b[3]=m):m=b[3];var n=m;if(!a||!f)return null;b[4]!==i||b[5]!==e.id||b[6]!==g?(m=function(a){a===!0?i({postId:e.id,type:"HIDE_POST_LIKE_COUNT"}):i({postId:e.id,type:"UNHIDE_POST_LIKE_COUNT"});return d("PolarisInstapi").apiPost("/api/v1/media/update_like_and_view_counts_visibility/",{body:{like_and_view_counts_disabled:g,media_id:e.id}})},b[4]=i,b[5]=e.id,b[6]=g,b[7]=m):m=b[7];var o=m,p=l;b[8]!==g||b[9]!==o||b[10]!==i||b[11]!==n||b[12]!==e.id||b[13]!==c?(a=function(){var a;a=!1;p(g);o(g).then(function(){a||i(d("PolarisPostActionLoadPost").loadPost(n!=null?n:"",e.id))})["catch"](function(){i(d("PolarisToastActions").showToast({text:d("PolarisGenericStrings").GENERIC_ERROR_MESSAGE})),i(d("PolarisPostActionLoadPost").loadPost(n!=null?n:"",e.id))});c();return function(){a=!0}},b[8]=g,b[9]=o,b[10]=i,b[11]=n,b[12]=e.id,b[13]=c,b[14]=a):a=b[14];f=a;b[15]!==g?(m=g&&h._("__JHASH__VBO1Ym96SW___JHASH__"),b[15]=g,b[16]=m):m=b[16];b[17]!==g?(a=!g&&h._("__JHASH__CgyBdcwcdM0__JHASH__"),b[17]=g,b[18]=a):a=b[18];var q;b[19]!==f||b[20]!==m||b[21]!==a?(q=k.jsxs(d("IGCoreDialog.react").IGCoreDialogItem,{onClick:f,children:[m,a]}),b[19]=f,b[20]=m,b[21]=a,b[22]=q):q=b[22];return q}function l(a){c("InstagramODS").incr("web.profile.edit_post_click"),c("InstagramODS").incr("web.edit.toggle_like_count_visibility"),a===!0?c("InstagramODS").incr("web.edit.toggle_like_count_visibility_hidden"):c("InstagramODS").incr("web.edit.toggle_like_count_visibility_unhidden")}g["default"]=a}),226);
__d("PolarisPostFastOptionUnfollow.react",["fbt","IGCoreDialog.react","PolarisConnectionsLogger","PolarisPostModalContext.react","PolarisReactRedux.react","QPLUserFlow","polarisRelationshipSelectors.react","qpl","react","usePolarisAnalyticsContext"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=(i||(i=d("react"))).c,k=i,l=h._("__JHASH__srXyzAiqXZ2__JHASH__");function m(a,b){b=b.owner;if(!b)return!1;a=d("polarisRelationshipSelectors.react").getRelationship(a.relationships,b.id);return d("polarisRelationshipSelectors.react").followedByViewer(a)}function a(a){var b,e=j(8),f=a.post;e[0]!==f?(a=function(a){return m(a,f)},e[0]=f,e[1]=a):a=e[1];a=d("PolarisReactRedux.react").useSelector(a);var g=d("PolarisPostModalContext.react").useSetPostModal(),h=(b=f.owner)==null?void 0:b.id,i=c("usePolarisAnalyticsContext")();if(!a)return null;e[2]!==i||e[3]!==h||e[4]!==g?(b=function(){d("PolarisConnectionsLogger").logConnectionAction({containerModule:i,eventName:"unfollow_button_tapped",targetId:h}),c("QPLUserFlow").start(c("qpl")._(379193744,"299"),{annotations:{string:{source:i}}}),g("unfollow")},e[2]=i,e[3]=h,e[4]=g,e[5]=b):b=e[5];a=b;e[6]!==a?(b=k.jsx(d("IGCoreDialog.react").IGCoreDialogItem,{color:"ig-error-or-destructive","data-testid":void 0,onClick:a,children:l}),e[6]=a,e[7]=b):b=e[7];return b}g["default"]=a}),226);
__d("PolarisPostFastOptionsModal.react",["IGCoreDialog.react","PolarisAboutAdsDialogItem.react","PolarisAdsGatingHelpers","PolarisGenericStrings","PolarisHasFeedCreation","PolarisPostFastOptionAboutThisAccount.react","PolarisPostFastOptionCopyLink.react","PolarisPostFastOptionDelete.react","PolarisPostFastOptionDemote.react","PolarisPostFastOptionEdit.react","PolarisPostFastOptionEmbed.react","PolarisPostFastOptionFavorite.react","PolarisPostFastOptionGenAITransparency.react","PolarisPostFastOptionGoToPost.react","PolarisPostFastOptionHideAd.react","PolarisPostFastOptionNominate.react","PolarisPostFastOptionRemoveFromAdActivity.react","PolarisPostFastOptionReport.react","PolarisPostFastOptionReportAd.react","PolarisPostFastOptionShare.react","PolarisPostFastOptionTagged.react","PolarisPostFastOptionToggleCommenting.react","PolarisPostFastOptionToggleViewLikeCount.react","PolarisPostFastOptionUnfollow.react","PolarisPostFastOptionWAIST.react","PolarisPostModalContext.react","PolarisReportUnderLawDialogItem.react","cr:1468","gkx","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).c,j=h;function a(a){var e=i(69),f=a.onClose;a=a.post;var g=d("PolarisPostModalContext.react").useSetPostModal(),h;e[0]===Symbol["for"]("react.memo_cache_sentinel")?(h=c("gkx")("4201"),e[0]=h):h=e[0];h=h;if(a.isSponsored===!0){var k,l,m;e[1]!==f||e[2]!==a?(k=j.jsx(c("PolarisPostFastOptionHideAd.react"),{onClose:f,post:a}),l=j.jsx(c("PolarisPostFastOptionReportAd.react"),{onClose:f,post:a}),m=j.jsx(c("PolarisPostFastOptionRemoveFromAdActivity.react"),{onClose:f,post:a}),e[1]=f,e[2]=a,e[3]=k,e[4]=l,e[5]=m):(k=e[3],l=e[4],m=e[5]);var n,o;e[6]===Symbol["for"]("react.memo_cache_sentinel")?(n=d("PolarisAdsGatingHelpers").hasAdWAIST()&&j.jsx(c("PolarisPostFastOptionWAIST.react"),{}),h=h&&j.jsx(c("PolarisPostFastOptionGenAITransparency.react"),{}),o=j.jsx(c("PolarisAboutAdsDialogItem.react"),{}),e[6]=n,e[7]=h,e[8]=o):(n=e[6],h=e[7],o=e[8]);var p;e[9]!==g?(p=b("cr:1468")!=null&&j.jsx(b("cr:1468"),{onClick:function(){g("viewAdDebugTool")}}),e[9]=g,e[10]=p):p=e[10];var q;e[11]!==f?(q=j.jsx(d("IGCoreDialog.react").IGCoreDialogItem,{onClick:f,children:d("PolarisGenericStrings").CANCEL_TEXT}),e[11]=f,e[12]=q):q=e[12];e[13]!==f||e[14]!==k||e[15]!==l||e[16]!==m||e[17]!==p||e[18]!==q?(n=j.jsxs(d("IGCoreDialog.react").IGCoreDialog,{onModalClose:f,children:[k,l,m,n,h,o,p,q]}),e[13]=f,e[14]=k,e[15]=l,e[16]=m,e[17]=p,e[18]=q,e[19]=n):n=e[19];return n}e[20]!==f||e[21]!==a?(h=j.jsx(c("PolarisPostFastOptionDelete.react"),{onClose:f,post:a}),o=d("PolarisHasFeedCreation").hasFeedCreation()&&j.jsx(c("PolarisPostFastOptionEdit.react"),{onClose:f,post:a}),e[20]=f,e[21]=a,e[22]=h,e[23]=o):(h=e[22],o=e[23]);e[24]!==f||e[25]!==a?(k=d("PolarisHasFeedCreation").hasFeedCreation()&&j.jsx(c("PolarisPostFastOptionToggleViewLikeCount.react"),{onClose:f,post:a}),e[24]=f,e[25]=a,e[26]=k):k=e[26];e[27]!==f||e[28]!==a?(l=d("PolarisHasFeedCreation").hasFeedCreation()&&j.jsx(c("PolarisPostFastOptionToggleCommenting.react"),{onClose:f,post:a}),e[27]=f,e[28]=a,e[29]=l):l=e[29];e[30]!==f||e[31]!==a?(m=j.jsx(c("PolarisPostFastOptionReport.react"),{onClose:f,post:a}),e[30]=f,e[31]=a,e[32]=m):m=e[32];q=(p=a.code)!=null?p:a.id;p=(n=a.owner)==null?void 0:n.username;e[33]!==q||e[34]!==p?(n=j.jsx(d("PolarisReportUnderLawDialogItem.react").ReportUnderLawDialogItem,{contentId:q,reportingType:d("PolarisReportUnderLawDialogItem.react").InstagramLegalReportingType.POST,username:p}),e[33]=q,e[34]=p,e[35]=n):n=e[35];var r,s,t,u,v,w,x,y;e[36]!==f||e[37]!==a?(q=j.jsx(c("PolarisPostFastOptionUnfollow.react"),{onClose:f,post:a}),p=j.jsx(c("PolarisPostFastOptionFavorite.react"),{onClose:f,post:a}),r=j.jsx(c("PolarisPostFastOptionDemote.react"),{onClose:f,post:a}),s=j.jsx(c("PolarisPostFastOptionNominate.react"),{onClose:f,post:a}),t=j.jsx(c("PolarisPostFastOptionGoToPost.react"),{onClose:f,post:a}),u=j.jsx(c("PolarisPostFastOptionTagged.react"),{onClose:f,post:a}),v=j.jsx(c("PolarisPostFastOptionShare.react"),{onClose:f,post:a}),w=j.jsx(d("PolarisPostFastOptionCopyLink.react").PostFastOptionCopyLink,{onClose:f,post:a}),x=j.jsx(c("PolarisPostFastOptionEmbed.react"),{onClose:f,post:a}),y=j.jsx(c("PolarisPostFastOptionAboutThisAccount.react"),{onClose:f,post:a}),e[36]=f,e[37]=a,e[38]=q,e[39]=p,e[40]=r,e[41]=s,e[42]=t,e[43]=u,e[44]=v,e[45]=w,e[46]=x,e[47]=y):(q=e[38],p=e[39],r=e[40],s=e[41],t=e[42],u=e[43],v=e[44],w=e[45],x=e[46],y=e[47]);e[48]!==f?(a=j.jsx(d("IGCoreDialog.react").IGCoreDialogItem,{onClick:f,children:d("PolarisGenericStrings").CANCEL_TEXT}),e[48]=f,e[49]=a):a=e[49];var z;e[50]!==f||e[51]!==h||e[52]!==o||e[53]!==k||e[54]!==l||e[55]!==m||e[56]!==n||e[57]!==q||e[58]!==p||e[59]!==r||e[60]!==s||e[61]!==t||e[62]!==u||e[63]!==v||e[64]!==w||e[65]!==x||e[66]!==y||e[67]!==a?(z=j.jsxs(d("IGCoreDialog.react").IGCoreDialog,{"data-testid":void 0,onModalClose:f,children:[h,o,k,l,m,n,q,p,r,s,t,u,v,w,x,y,a]}),e[50]=f,e[51]=h,e[52]=o,e[53]=k,e[54]=l,e[55]=m,e[56]=n,e[57]=q,e[58]=p,e[59]=r,e[60]=s,e[61]=t,e[62]=u,e[63]=v,e[64]=w,e[65]=x,e[66]=y,e[67]=a,e[68]=z):z=e[68];return z}g["default"]=a}),98);