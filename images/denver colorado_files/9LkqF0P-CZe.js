;/*FB_PKG_DELIM*/

__d("SecurePostMessage",["invariant"],(function(a,b,c,d,e,f,g){"use strict";var h="*";a={sendMessageToSpecificOrigin:function(a,b,c,d){c!==h||g(0,21157),a.postMessage(b,c,d)},sendMessageForCurrentOrigin:function(a,b){a.postMessage(b)},sendMessageAllowAnyOrigin_UNSAFE:function(a,b,c){a.postMessage(b,h,c)}};e.exports=a}),null);
__d("XAsyncRequest",["cr:1042"],(function(a,b,c,d,e,f,g){"use strict";g["default"]=b("cr:1042")}),98);
__d("XAsyncRequestWWW",["AsyncRequest"],(function(a,b,c,d,e,f,g){a=function(){function a(a){var b=this;this.setAllowCrossPageTransition=function(a){b.$1.setAllowCrossPageTransition(a);return b};this.$1=new(c("AsyncRequest"))(a)}var b=a.prototype;b.setURI=function(a){this.$1.setURI(a);return this};b.setTimeoutHandler=function(a,b){this.$1.setTimeoutHandler(a,b);return this};b.setOption=function(a,b){this.$1.setOption(a,b);return this};b.setMethod=function(a){this.$1.setMethod(a);return this};b.setAutoProcess=function(a){this.$1.setOption("suppressEvaluation",a);return this};b.setData=function(a){this.$1.setData(a);return this};b.setHandler=function(a){this.$1.setHandler(a);return this};b.setPayloadHandler=function(a){this.setHandler(function(b){return a(b.payload)});return this};b.setErrorHandler=function(a){this.$1.setErrorHandler(a);return this};b.send=function(){this.$1.send();return this};b.abort=function(){this.$1.abort()};b.setReadOnly=function(a){this.$1.setReadOnly(a);return this};b.setAllowCrossOrigin=function(a){this.$1.setAllowCrossOrigin(a);return this};b.setAllowCredentials=function(a){this.$1.setAllowCredentials(a);return this};return a}();g["default"]=a}),98);
__d("XControllerURIBuilder",["invariant","URI","gkx","isInternalFBURI"],(function(a,b,c,d,e,f,g,h){var i;a=function(){function a(a,b){this.$1={},this.$2=a,this.$3=b}var b=a.prototype;b.setInt=function(a,b){return this.__setParam(a,"Int",b)};b.setFBID=function(a,b){return this.__setParam(a,"FBID",b)};b.setFloat=function(a,b){return this.__setParam(a,"Float",b)};b.setString=function(a,b){return this.__setParam(a,"String",b)};b.setExists=function(a,b){b===!1&&(b=void 0);return this.__setParam(a,"Exists",b)};b.setBool=function(a,b){return this.__setParam(a,"Bool",b)};b.setBoolVector=function(a,b){return this.__setParam(a,"BoolVector",b)};b.setEnum=function(a,b){return this.__setParam(a,"Enum",b)};b.setPath=function(a,b){return this.__setParam(a,"Path",b)};b.setIntVector=function(a,b){return this.__setParam(a,"IntVector",b)};b.setIntKeyset=function(a,b){return this.__setParam(a,"IntKeyset",b)};b.setIntSet=function(a,b){return this.__setParam(a,"IntSet",b.join(","))};b.setFloatVector=function(a,b){return this.__setParam(a,"FloatVector",b)};b.setFloatSet=function(a,b){return this.__setParam(a,"FloatSet",b.join(","))};b.setStringVector=function(a,b){return this.__setParam(a,"StringVector",b)};b.setStringKeyset=function(a,b){return this.__setParam(a,"StringKeyset",b)};b.setStringSet=function(a,b){return this.__setParam(a,"StringSet",b)};b.setFBIDVector=function(a,b){return this.__setParam(a,"FBIDVector",b)};b.setFBIDSet=function(a,b){return this.__setParam(a,"FBIDSet",b)};b.setFBIDKeyset=function(a,b){return this.__setParam(a,"FBIDKeyset",b)};b.setEnumVector=function(a,b){return this.__setParam(a,"EnumVector",b)};b.setEnumSet=function(a,b){return this.__setParam(a,"EnumSet",b)};b.setEnumKeyset=function(a,b){return this.__setParam(a,"EnumKeyset",b)};b.setIntToIntMap=function(a,b){return this.__setParam(a,"IntToIntMap",b)};b.setIntToFloatMap=function(a,b){return this.__setParam(a,"IntToFloatMap",b)};b.setIntToStringMap=function(a,b){return this.__setParam(a,"IntToStringMap",b)};b.setIntToBoolMap=function(a,b){return this.__setParam(a,"IntToBoolMap",b)};b.setStringToIntMap=function(a,b){return this.__setParam(a,"StringToIntMap",b)};b.setStringToFloatMap=function(a,b){return this.__setParam(a,"StringToFloatMap",b)};b.setStringToStringMap=function(a,b){return this.__setParam(a,"StringToStringMap",b)};b.setStringToNullableStringMap=function(a,b){return this.__setParam(a,"StringToNullableStringMap",b)};b.setStringToBoolMap=function(a,b){return this.__setParam(a,"StringToBoolMap",b)};b.setStringToEnumMap=function(a,b){return this.__setParam(a,"StringToEnumMap",b)};b.setEnumToStringVectorMap=function(a,b){return this.__setParam(a,"EnumToStringVectorMap",b)};b.setEnumToStringMap=function(a,b){return this.__setParam(a,"EnumToStringMap",b)};b.setEnumToBoolMap=function(a,b){return this.__setParam(a,"EnumToBoolMap",b)};b.setEnumToEnumMap=function(a,b){return this.__setParam(a,"EnumToEnumMap",b)};b.setEnumToIntMap=function(a,b){return this.__setParam(a,"EnumToIntMap",b)};b.setEnumToFBIDVectorMap=function(a,b){return this.__setParam(a,"EnumToFBIDVectorMap",b)};b.setStringToIntDict=function(a,b){return this.__setParam(a,"StringToIntDict",b)};b.setStringToNullableIntDict=function(a,b){return this.__setParam(a,"StringToNullableIntDict",b)};b.setStringToFloatDict=function(a,b){return this.__setParam(a,"StringToFloatDict",b)};b.setStringToStringKeysetDict=function(a,b){return this.__setParam(a,"StringToStringKeysetDict",b)};b.setStringToNullableFloatDict=function(a,b){return this.__setParam(a,"StringToNullableFloatDict",b)};b.setStringToStringDict=function(a,b){return this.__setParam(a,"StringToStringDict",b)};b.setStringToNullableStringDict=function(a,b){return this.__setParam(a,"StringToNullableStringDict",b)};b.setStringToBoolDict=function(a,b){return this.__setParam(a,"StringToBoolDict",b)};b.setStringToEnumDict=function(a,b){return this.__setParam(a,"StringToEnumDict",b)};b.setEnumToIntDict=function(a,b){return this.__setParam(a,"EnumToIntDict",b)};b.setEnumToStringDict=function(a,b){return this.__setParam(a,"EnumToStringDict",b)};b.setHackType=function(a,b){return this.__setParam(a,"HackType",b)};b.setTypeAssert=function(a,b){return this.__setParam(a,"TypeAssert",b)};b.__validateRequiredParamsExistence=function(){for(var a in this.$3)!this.$3[a].required||Object.prototype.hasOwnProperty.call(this.$1,a)||h(0,903,a)};b.setParams=function(a){for(var b in a){this.__assertParamExists(b);var c=this.$3[b].type;this.__setParam(b,c,a[b])}return this};b.__assertParamExists=function(a){a in this.$3||h(0,37339,a)};b.__setParam=function(a,b,c){this.__assertParamExists(a);var d=this.$3[a].type,e={StringOrPFBID:"String",IntOrPFBID:"Int",FBIDOrPFBID:"FBID",PaymentLegacyAdAccountID:"Int"};e=e[d];d===b||e===b||h(0,37340,a,b,d);this.__setParamInt(a,c);return this};b.__setParamInt=function(a,b){this.$1[a]=b};b.getRequest_LEGACY_UNTYPED=function(a){return a.setReplaceTransportMarkers().setURI(this.getURI())};b.setPreviousActorIsPageVoice=function(a){this.__setParamInt("paipv",a?1:0);return this};b.getURI=function(){this.__validateRequiredParamsExistence();var a={},b="",d=/^(.*)?\{(\?)?(\*)?(.+?)\}(.*)?$/,e=this.$2.split("/"),f=!1;for(var g=0;g<e.length;g++){var j=e[g];if(j==="")continue;var k=d.exec(j);if(!k)b+="/"+j;else{j=k[2]==="?";var l=k[4],m=this.$3[l];m||h(0,11837,l,this.$2);if(j&&f)continue;if(this.$1[l]==null&&j){f=!0;continue}j=this.$1[l]!=null?this.$1[l]:m.defaultValue;j!=null||h(0,907,l);m=k[1]?k[1]:"";k=k[5]?k[5]:"";b+="/"+m+j+k;a[l]=!0}}this.$2.slice(-1)==="/"&&(b+="/");b===""&&(b="/");m=new(i||(i=c("URI")))(b);for(j in this.$1){k=this.$1[j];if(!a[j]&&k!=null){l=this.$3[j];m.addQueryData(j,l&&l.type==="Exists"?null:k)}}return m};b.getLookasideURI=function(){var a="lookaside.facebook.com";c("isInternalFBURI")((i||(i=c("URI"))).getRequestURI())?a="lookaside.internalfb.com":c("gkx")("21116")&&(a="lookaside.internmc.facebook.com");return this.getURI().setDomain(a).setProtocol("https")};a.create=function(b,c){return function(){return new a(b,c)}};return a}();a.prototype.getRequest=function(a){return this.getRequest_LEGACY_UNTYPED(a)};g["default"]=a}),98);
__d("XRequest",["invariant"],(function(a,b,c,d,e,f,g){var h=function a(b,c,d){var e;switch(b){case"Bool":e=c&&c!=="false"&&c!=="0"||!1;break;case"Int":e=c.toString();/-?\d+/.test(e)||g(0,11839,c);break;case"Float":e=parseFloat(c,10);isNaN(e)&&g(0,11840,c);break;case"FBID":e=c.toString();for(var f=0;f<e.length;++f){var h=e.charCodeAt(f);48<=h&&h<=57||g(0,11841,c)}break;case"String":e=c.toString();break;case"Enum":d===0?e=a("Int",c,null):d===1?e=a("String",c,null):d===2?e=c:g(0,5044,d);break;default:if(h=/^Nullable(\w+)$/.exec(b))c===null?e=null:e=a(h[1],c,d);else if(f=/^(\w+)Vector$/.exec(b)){!Array.isArray(c)?(e=c.toString(),e=e===""?[]:e.split(",")):e=c;var i=f[1];typeof i==="string"||g(0,5045);e=e.map(function(b){return a(i,b,d&&d.member)})}else if(h=/^(\w+)(Set|Keyset)$/.exec(b))!Array.isArray(c)?(e=c.toString(),e=e===""?[]:e.split(",")):e=c,e=e.reduce(function(a,b){a[b]=b;return a},{}),i=h[1],typeof i==="string"||g(0,5045),e=Object.keys(e).map(function(b){return a(i,e[b],d&&d.member)});else if(f=/^(\w+)To(\w+)Map$/.exec(b)){e={};var j=f[1],k=f[2];typeof j==="string"&&typeof k==="string"||g(0,5045);Object.keys(c).forEach(function(b){e[a(j,b,d&&d.key)]=a(k,c[b],d&&d.value)})}else g(0,11842,b)}return e};a=function(){function a(a,b,c){var d=this;this.$1=b;this.$2=babelHelpers["extends"]({},c.getQueryData());b=a.split("/").filter(function(a){return a});a=c.getPath().split("/").filter(function(a){return a});var e;for(var f=0;f<b.length;++f){var h=/^\{(\?)?(\*)?(\w+)\}$/.exec(b[f]);if(!h){b[f]===a[f]||g(0,5047,c.getPath());continue}var i=!!h[1],j=!!h[2];!j||f===b.length-1||g(0,11843,e);e=h[3];Object.prototype.hasOwnProperty.call(this.$1,e)||g(0,11844,e);this.$1[e].required?i&&g(0,5050,e):i||this.$1[e].defaultValue!=null||g(0,5057,e);a[f]&&(this.$2[e]=j?a.slice(f).join("/"):a[f])}Object.keys(this.$1).forEach(function(a){!d.$1[a].required||Object.prototype.hasOwnProperty.call(d.$2,a)||g(0,5051)})}var b=a.prototype;b.getExists=function(a){return this.$2[a]!==void 0};b.getBool=function(a){return this.$3(a,"Bool")};b.getInt=function(a){return this.$3(a,"Int")};b.getFloat=function(a){return this.$3(a,"Float")};b.getFBID=function(a){return this.$3(a,"FBID")};b.getString=function(a){return this.$3(a,"String")};b.getEnum=function(a){return this.$3(a,"Enum")};b.getOptionalInt=function(a){return this.$4(a,"Int")};b.getOptionalFloat=function(a){return this.$4(a,"Float")};b.getOptionalFBID=function(a){return this.$4(a,"FBID")};b.getOptionalString=function(a){return this.$4(a,"String")};b.getOptionalEnum=function(a){return this.$4(a,"Enum")};b.getIntVector=function(a){return this.$3(a,"IntVector")};b.getFloatVector=function(a){return this.$3(a,"FloatVector")};b.getFBIDVector=function(a){return this.$3(a,"FBIDVector")};b.getStringVector=function(a){return this.$3(a,"StringVector")};b.getEnumVector=function(a){return this.$3(a,"EnumVector")};b.getOptionalIntVector=function(a){return this.$4(a,"IntVector")};b.getOptionalFloatVector=function(a){return this.$4(a,"FloatVector")};b.getOptionalFBIDVector=function(a){return this.$4(a,"FBIDVector")};b.getOptionalStringVector=function(a){return this.$4(a,"StringVector")};b.getOptionalEnumVector=function(a){return this.$4(a,"EnumVector")};b.getIntSet=function(a){return this.$3(a,"IntSet")};b.getFBIDSet=function(a){return this.$3(a,"FBIDSet")};b.getFBIDKeyset=function(a){return this.$3(a,"FBIDKeyset")};b.getStringSet=function(a){return this.$3(a,"StringSet")};b.getEnumKeyset=function(a){return this.$3(a,"EnumKeyset")};b.getOptionalIntSet=function(a){return this.$4(a,"IntSet")};b.getOptionalFBIDSet=function(a){return this.$4(a,"FBIDSet")};b.getOptionalFBIDKeyset=function(a){return this.$4(a,"FBIDKeyset")};b.getOptionalStringSet=function(a){return this.$4(a,"StringSet")};b.getEnumToBoolMap=function(a){return this.$3(a,"EnumToBoolMap")};b.getEnumToEnumMap=function(a){return this.$3(a,"EnumToEnumMap")};b.getEnumToFloatMap=function(a){return this.$3(a,"EnumToFloatMap")};b.getEnumToIntMap=function(a){return this.$3(a,"EnumToIntMap")};b.getEnumToStringMap=function(a){return this.$3(a,"EnumToStringMap")};b.getIntToBoolMap=function(a){return this.$3(a,"IntToBoolMap")};b.getIntToEnumMap=function(a){return this.$3(a,"IntToEnumMap")};b.getIntToFloatMap=function(a){return this.$3(a,"IntToFloatMap")};b.getIntToIntMap=function(a){return this.$3(a,"IntToIntMap")};b.getIntToStringMap=function(a){return this.$3(a,"IntToStringMap")};b.getStringToBoolMap=function(a){return this.$3(a,"StringToBoolMap")};b.getStringToEnumMap=function(a){return this.$3(a,"StringToEnumMap")};b.getStringToFloatMap=function(a){return this.$3(a,"StringToFloatMap")};b.getStringToIntMap=function(a){return this.$3(a,"StringToIntMap")};b.getStringToStringMap=function(a){return this.$3(a,"StringToStringMap")};b.getOptionalEnumToBoolMap=function(a){return this.$4(a,"EnumToBoolMap")};b.getOptionalEnumToEnumMap=function(a){return this.$4(a,"EnumToEnumMap")};b.getOptionalEnumToFloatMap=function(a){return this.$4(a,"EnumToFloatMap")};b.getOptionalEnumToIntMap=function(a){return this.$4(a,"EnumToIntMap")};b.getOptionalEnumToStringMap=function(a){return this.$4(a,"EnumToStringMap")};b.getOptionalIntToBoolMap=function(a){return this.$4(a,"IntToBoolMap")};b.getOptionalIntToEnumMap=function(a){return this.$4(a,"IntToEnumMap")};b.getOptionalIntToFloatMap=function(a){return this.$4(a,"IntToFloatMap")};b.getOptionalIntToIntMap=function(a){return this.$4(a,"IntToIntMap")};b.getOptionalIntToStringMap=function(a){return this.$4(a,"IntToStringMap")};b.getOptionalStringToBoolMap=function(a){return this.$4(a,"StringToBoolMap")};b.getOptionalStringToEnumMap=function(a){return this.$4(a,"StringToEnumMap")};b.getOptionalStringToFloatMap=function(a){return this.$4(a,"StringToFloatMap")};b.getOptionalStringToIntMap=function(a){return this.$4(a,"StringToIntMap")};b.getOptionalStringToStringMap=function(a){return this.$4(a,"StringToStringMap")};b.getEnumToNullableEnumMap=function(a){return this.$3(a,"EnumToNullableEnumMap")};b.getEnumToNullableFloatMap=function(a){return this.$3(a,"EnumToNullableFloatMap")};b.getEnumToNullableIntMap=function(a){return this.$3(a,"EnumToNullableIntMap")};b.getEnumToNullableStringMap=function(a){return this.$3(a,"EnumToNullableStringMap")};b.getIntToNullableEnumMap=function(a){return this.$3(a,"IntToNullableEnumMap")};b.getIntToNullableFloatMap=function(a){return this.$3(a,"IntToNullableFloatMap")};b.getIntToNullableIntMap=function(a){return this.$3(a,"IntToNullableIntMap")};b.getIntToNullableStringMap=function(a){return this.$3(a,"IntToNullableStringMap")};b.getStringToNullableEnumMap=function(a){return this.$3(a,"StringToNullableEnumMap")};b.getStringToNullableFloatMap=function(a){return this.$3(a,"StringToNullableFloatMap")};b.getStringToNullableIntMap=function(a){return this.$3(a,"StringToNullableIntMap")};b.getStringToNullableStringMap=function(a){return this.$3(a,"StringToNullableStringMap")};b.getOptionalEnumToNullableEnumMap=function(a){return this.$4(a,"EnumToNullableEnumMap")};b.getOptionalEnumToNullableFloatMap=function(a){return this.$4(a,"EnumToNullableFloatMap")};b.getOptionalEnumToNullableIntMap=function(a){return this.$4(a,"EnumToNullableIntMap")};b.getOptionalEnumToNullableStringMap=function(a){return this.$4(a,"EnumToNullableStringMap")};b.getOptionalIntToNullableEnumMap=function(a){return this.$4(a,"IntToNullableEnumMap")};b.getOptionalIntToNullableFloatMap=function(a){return this.$4(a,"IntToNullableFloatMap")};b.getOptionalIntToNullableIntMap=function(a){return this.$4(a,"IntToNullableIntMap")};b.getOptionalIntToNullableStringMap=function(a){return this.$4(a,"IntToNullableStringMap")};b.getOptionalStringToNullableEnumMap=function(a){return this.$4(a,"StringToNullableEnumMap")};b.getOptionalStringToNullableFloatMap=function(a){return this.$4(a,"StringToNullableFloatMap")};b.getOptionalStringToNullableIntMap=function(a){return this.$4(a,"StringToNullableIntMap")};b.getOptionalStringToNullableStringMap=function(a){return this.$4(a,"StringToNullableStringMap")};b.$3=function(a,b){this.$5(a,b);var c=this.$1[a];if(!Object.prototype.hasOwnProperty.call(this.$2,a)&&c.defaultValue!=null){c.required&&g(0,5052);return h(b,c.defaultValue,c.enumType)}c.required||b==="Bool"||c.defaultValue!=null||g(0,11845,b,a,b,a);return h(b,this.$2[a],c.enumType)};b.$4=function(a,b){this.$5(a,b);var c=this.$1[a];c.required&&g(0,11846,b,a,b,a);c.defaultValue&&g(0,5052);return Object.prototype.hasOwnProperty.call(this.$2,a)?h(b,this.$2[a],c.enumType):null};b.$5=function(a,b){Object.prototype.hasOwnProperty.call(this.$1,a)||g(0,37317,a),this.$1[a].type===b||g(0,11848,a,b,this.$1[a].type)};return a}();f["default"]=a}),66);
__d("XController",["XControllerURIBuilder","XRequest"],(function(a,b,c,d,e,f,g){a=function(){function a(a,b){this.$1=a,this.$2=b}var b=a.prototype;b.getURIBuilder=function(a){var b=this,d=new(c("XControllerURIBuilder"))(this.$1,this.$2);if(a){var e=this.getRequest(a);Object.keys(this.$2).forEach(function(a){var c=b.$2[a],f="";!c.required&&!Object.prototype.hasOwnProperty.call(c,"defaultValue")&&(f="Optional");f="get"+f+c.type;f=e[f](a);if(f==null||Object.prototype.hasOwnProperty.call(c,"defaultValue")&&f===c.defaultValue)return;c="set"+c.type;d[c](a,f)})}return d};b.getRequest=function(a){return new(c("XRequest"))(this.$1,this.$2,a)};a.create=function(b,c){return new a(b,c)};return a}();g["default"]=a}),98);
__d("XVideoPermalinkController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/{vanity}/videos/{?set_token}/{video_id}/{?story_token}/{?*extra_junk}/",{extid:{type:"String"},mibextid:{type:"String"},share_url:{type:"String"},comment_id:{type:"IntOrPFBID"},photo_id:{type:"Int"},set_token:{type:"String"},type:{type:"Enum",defaultValue:3,enumType:0},link_share:{type:"String"},subject:{type:"Int"},object_id:{type:"Int"},opaque_cursor:{type:"String"},legacy_user_id:{type:"IntOrPFBID"},legacy_photo_id:{type:"Int"},video_id:{type:"Int"},notif_t:{type:"String"},is_notification_preview:{type:"Bool",defaultValue:!1},force_theater:{type:"Bool",defaultValue:!1},story_token:{type:"String"},reply_comment_id:{type:"IntOrPFBID"},comment_tracking:{type:"String"},vanity:{type:"String"},__tn__:{type:"String"},privacy_mutation_token:{type:"String"},t:{type:"Int"},flite:{type:"String"},__so__:{type:"Enum",enumType:1},__rv__:{type:"Enum",enumType:1},redirect:{type:"Bool",defaultValue:!0},depth:{type:"Int"},extra_junk:{type:"String"},comments_modal:{type:"Bool",defaultValue:!1},idorvanity:{type:"String"}})}),null);
__d("useJSON",["react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||d("react")).useMemo;function a(a,b){return i(function(){return JSON.parse(a,b)},[a,b])}g["default"]=a}),98);