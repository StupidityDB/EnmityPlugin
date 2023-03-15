function D(e,n,o){window.enmity.settings.set(e,n,o)}function b(e,n,o){return window.enmity.settings.get(e,n,o)}function le(e){window.enmity.plugins.registerPlugin(e)}const N={byProps:(...e)=>window.enmity.modules.filters.byProps(...e),byName:(e,n)=>window.enmity.modules.filters.byName(e,n),byTypeName:(e,n)=>window.enmity.modules.filters.byTypeName(e,n),byDisplayName:(e,n)=>window.enmity.modules.filters.byDisplayName(e,n)};function ce(e,n){return window.enmity.modules.getModule(e,n)}function H(...e){return window.enmity.modules.bulk(...e)}function x(...e){return window.enmity.modules.getByProps(...e)}function G(...e){return window.enmity.modules.getByName(...e)}window.enmity.modules.common;const s=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const t=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage;const h=window.enmity.modules.common.Toasts,I=window.enmity.modules.common.Dialog;window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings;const $=window.enmity.modules.common.Users,F=window.enmity.modules.common.Navigation,me=window.enmity.modules.common.NavigationNative,de=window.enmity.modules.common.NavigationStack;window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const W=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale;const K=window.enmity.modules.common.Profiles;window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes;function ue(e){return window.enmity.patcher.create(e)}function pe(e,n,o){return window.enmity.utilities.findInReactTree(e,n,o)}var A="ReviewDB",P="1.9.1",we="Review other users. These reviews are visible to anyone with this type of plugin on any platform.",he=[{name:"spin",id:"308440976723148800",profile:"https://spin.rip/",icon:"https://cdn.discordapp.com/emojis/884010019543212053.gif?size=128"},{name:"Rosie<3",id:"581573474296791211",profile:"https://github.com/acquitelol",icon:"https://cdn.discordapp.com/emojis/884010019543212053.gif?size=128"}],ge="#ff0069",L={hash:"04805eac"},Y={source:"https://github.com/StupidityDB/EnmityPlugin/",dist:"https://raw.githubusercontent.com/StupidityDB/EnmityPlugin/master/dist/ReviewDB.js",api:"https://manti.vendicated.dev"},m={name:A,version:P,description:we,authors:he,color:ge,plugin:L,links:Y};const{components:r}=window.enmity;r.Alert,r.Button,r.FlatList;const O=r.Image;r.ImageBackground,r.KeyboardAvoidingView,r.Modal,r.Pressable,r.RefreshControl;const ye=r.ScrollView;r.SectionList,r.StatusBar,r.StyleSheet,r.Switch;const w=r.Text;r.TextInput,r.TouchableHighlight;const T=r.TouchableOpacity;r.TouchableWithoutFeedback,r.Touchable;const u=r.View;r.VirtualizedList,r.Form,r.FormArrow,r.FormCTA,r.FormCTAButton,r.FormCardSection,r.FormCheckbox;const X=r.FormDivider;r.FormHint,r.FormIcon;const J=r.FormInput;r.FormLabel,r.FormRadio;const E=r.FormRow;r.FormSection,r.FormSelect,r.FormSubLabel,r.FormSwitch,r.FormTernaryCheckBox,r.FormText,r.FormTextColors,r.FormTextSizes;const fe=({name:e,image:n})=>{const o={wrapper:{alignItems:"center",flexDirection:"row",justifyContent:"flex-end"},image:{width:24,height:24,resizeMode:"contain",marginHorizontal:2}};return t.createElement(u,{style:o.wrapper},t.createElement(T,{onPress:()=>h.open({content:e,source:{uri:n}})},t.createElement(O,{style:o.image,source:{uri:n}})))};function C(e){return window.enmity.assets.getIDByName(e)}var p={Failed:C("Small"),Pencil:C("ic_pencil_24px"),Success:C("ic_selection_checked_24px"),Warning:C("ic_warning_24px"),Copy:C("toast_copy_link"),Open:C("ic_leave_stage"),Clipboard:C("pending-alert"),Shield:C("ic_person_shield"),Self:C("friends_toast_icon")};const Te=(e=.1)=>({shadowColor:"#000",shadowOffset:{width:1,height:4},shadowOpacity:e,shadowRadius:4.65,elevation:8}),Ee=(e,n)=>{h.open({content:n=="clipboard"?`Copied ${e} to clipboard.`:e,source:n=="clipboard"?p.Clipboard:p.Self})};var q={shadow:Te,displayToast:Ee},Z=(e,n,o,a,c)=>{try{return e(...n)}catch(d){console.warn(`[${o}] The following error happened when trying to ${a} ${c??"unspecificied label"}: ${d}`);return}};const{native:k}=window.enmity;function ve(){k.reload()}const be=k.version;k.build,k.device,k.version;async function Ce(){await Z(async function(){const e=`${Y.dist}?${Math.floor(Math.random()*1001)}.js`,n=await(await fetch(e)).text(),o=n.match(/\d+\.\d+\.\d+/g),a=n.match(/hash:"(.*?)"/);if(!o&&!a)return Se(A,[P,L.hash]);const c=o&&o[0],d=a&&a[1];return c&&c!=P?Q(e,c,"version"):d&&d!=L.hash?Q(e,d,"build"):Re(A,[P,L.hash])},[Y,P,L],A,"checking if latest version at","the async check for updates callback")}const Q=(e,n,o)=>{I.show({title:"Update found",body:`A newer ${o} is available for ${A}. ${o=="build"?`
The version will remain at ${P}, but the build will update to ${n}.`:""}
Would you like to install ${o} \`${n}\` now?`,confirmText:"Update",cancelText:"Not now",onConfirm:()=>De(e,n,o)})},Re=(e,[n,o])=>{console.log(`[${e}] Plugin is on the latest update, which is version ${n} and build ${o}`),I.show({title:"Already on latest",body:`${e} is already updated to the latest version.
Version: \`${n}\`
Build: \`${o}\``,confirmText:"Okay"})},Se=(e,[n,o])=>{console.log(`[${e}] Plugin failed to update to the latest version and build, remaining at ${n} and ${o}`),I.show({title:"Failed",body:`${e} to find a new version or build.
The current versions will remain as follows:
Version: \`${n}\`
Build: \`${o}\``,confirmText:"Okay"})};async function De(e,n,o){await Z(async function(){window.enmity.plugins.installPlugin(e,({data:a})=>{a=="installed_plugin"||a=="overridden_plugin"?I.show({title:`Updated ${A}`,body:`Successfully updated to ${o} \`${n}\`. 
Would you like to reload Discord now?`,confirmText:"Reload",cancelText:"Not now",onConfirm:()=>ve()}):console.log(`[${A}] Plugin failed to update to ${o} ${n}.`)})},[e,n,o],A,"installing plugin at","new version available")}var Ae={checkForUpdates:Ce};const _=18,i=W.createThemedStyleSheet({container:{marginTop:12,marginLeft:12,alignSelf:"flex-start",width:"95%"},buttonContainer:{flexDirection:"row",alignItems:"center",justifyContent:"center"},reviewContainer:{borderRadius:9,padding:1,marginBottom:8,width:"98%"},reviewWindow:{margin:12,borderRadius:10,borderWidth:1,borderColor:"rgba(75, 75, 75, 0.7)"},systemContainer:{marginLeft:4,backgroundColor:s.ThemeColorMap.BACKGROUND_SECONDARY,borderRadius:6,flexDirection:"row",justifyContent:"center",alignItems:"center"},formrowContainer:{width:"90%",marginLeft:"5%",borderRadius:10,backgroundColor:s.ThemeColorMap.BACKGROUND_MOBILE_SECONDARY,...q.shadow()},button:{width:"98%",height:40,backgroundColor:s.ThemeColorMap.BACKGROUND_SECONDARY_ALT,borderRadius:8,marginTop:6,marginBottom:6,flexDirection:"row",justifyContent:"center",alignItems:"center"},content:{fontSize:14,paddingRight:8,paddingTop:8,paddingBottom:8},messageContent:{color:s.ThemeColorMap.TEXT_NORMAL,fontFamily:s.Fonts.DISPLAY_NORMAL,opacity:.985,fontSize:16},text:{fontFamily:s.Fonts.DISPLAY_BOLD},buttonText:{fontSize:16,marginLeft:4},mainText:{opacity:.975,letterSpacing:.25},safeText:{color:s.ThemeColorMap.TEXT_NORMAL},dangerousText:{color:s.ThemeColorMap.TEXT_MUTED},fallback:{color:s.ThemeColorMap.BACKGROUND_SECONDARY_ALT},systemText:{fontSize:12,paddingVertical:2,paddingRight:4},subheaderText:{color:s.ThemeColorMap.HEADER_SECONDARY,textAlign:"center",margin:10,marginBottom:50,letterSpacing:.25,fontFamily:s.Fonts.PRIMARY_BOLD,fontSize:14},sectionWrapperText:{color:s.ThemeColorMap.HEADER_SECONDARY,paddingLeft:"5.5%",paddingRight:10,marginBottom:10,letterSpacing:.25,fontFamily:s.Fonts.PRIMARY_BOLD,fontSize:12},timestamp:{color:s.ThemeColorMap.HEADER_PRIMARY,fontFamily:s.Fonts.DISPLAY_NORMAL,opacity:.985,fontSize:12,marginLeft:4,marginTop:_/12},eyebrow:{textTransform:"uppercase",fontSize:12,lineHeight:16,fontFamily:s.Fonts.PRIMARY_BOLD,color:s.ThemeColorMap.TEXT_NORMAL},authorName:{color:s.ThemeColorMap.HEADER_PRIMARY,fontFamily:s.Fonts.DISPLAY_BOLD,fontSize:_,letterSpacing:.25,marginTop:-3},avatarContainer:{display:"flex",flexDirection:"row",flex:0,alignSelf:"flex-start"},avatarAuthor:{width:_,height:_,borderRadius:100,marginTop:1},rdbBadge:{width:_*.85,height:_*.85,marginTop:1,marginLeft:4},icon:{width:16,height:16,marginRight:4,color:s.ThemeColorMap.INTERACTIVE_NORMAL},systemIcon:{width:12,height:12,marginHorizontal:4},dangerousIcon:{tintColor:s.ThemeColorMap.TEXT_MUTED},safeIcon:{tintColor:s.ThemeColorMap.INTERACTIVE_NORMAL},authContainer:{backgroundColor:s.ThemeColorMap.BACKGROUND_MOBILE_SECONDARY,flex:.5},authCard:{backgroundColor:s.ThemeColorMap.BACKGROUND_MOBILE_PRIMARY,color:s.ThemeColorMap.TEXT_NORMAL},authHeader:{backgroundColor:s.ThemeColorMap.BACKGROUND_MOBILE_SECONDARY,shadowColor:"transparent",elevation:0},authText:{color:s.ThemeColorMap.HEADER_PRIMARY,fontFamily:s.Fonts.PRIMARY_NORMAL,fontSize:16,marginLeft:16,backgroundColor:"transparent"}}),xe=({title:e,userID:n,confirmText:o="Confirm",onConfirm:a,existing:c,placeholder:d})=>{const l=$.getUser(n);I.show({title:e,children:t.createElement(t.Fragment,null,t.createElement(w,{style:[i.text,i.safeText,i.mainText,i.buttonText,{paddingTop:10,marginLeft:0}]},"Reviewing: ",l?.username,"#",l?.discriminator),t.createElement(u,{style:{paddingHorizontal:0,paddingVertical:-5,marginTop:10,borderRadius:10,borderWidth:1,borderColor:"rgba(120, 120, 120, 0.3)"}},t.createElement(u,{style:{marginBottom:-25}}),t.createElement(J,{placeholder:d??"",value:c??b(m.name,"inputValue",""),onChange:y=>D(m.name,"inputValue",y),autoFocus:!0,showBorder:!0,multiline:!0,numberOfLines:2}))),confirmText:o,cancelText:"Cancel",onConfirm:()=>a(b(m.name,"inputValue",""),y=>D(m.name,"inputValue",y)),onCancel:()=>{D(m.name,"inputValue","")}})};function B({text:e,image:n="ic_new_group",dangerous:o,onPress:a,style:c}){return t.createElement(u,{style:[i.buttonContainer,c]},t.createElement(T,{style:i.button,onPress:a??console.log("No press function provided.")},t.createElement(E.Icon,{source:C(n),style:[i.icon,o?i.dangerousIcon:i.safeIcon]}),t.createElement(w,{style:[i.text,o?i.dangerousText:i.safeText,i.buttonText]},e)))}const ee=de.createStackNavigator();var Ie=({component:e=u}={})=>t.createElement(me.NavigationContainer,{independent:!0},t.createElement(ee.Navigator,{initialRouteName:"ReviewDB",style:i.authContainer,screenOptions:{cardOverlayEnabled:!1,cardShadowEnabled:!1,cardStyle:i.authCard,headerStyle:i.authHeader,headerTitleContainerStyle:{color:s.ThemeColorMap.HEADER_PRIMARY},headerTitleAlign:"center",safeAreaInsets:{top:0}}},t.createElement(ee.Screen,{name:"",component:()=>t.createElement(t.Fragment,null,t.createElement(u,{style:{marginTop:-45}}),t.createElement(e,null)),options:{headerLeft:()=>t.createElement(T,{onPress:()=>{F.pop()}},t.createElement(w,{style:i.authText},"Close"))}})));const z=()=>b(m.name,"rdbToken",""),Pe=G("OAuth2AuthorizeModal");let M=!1;const V=()=>M?!1:z()?!0:(M=!0,I.show({title:"Unauthorized",body:"You have not set your ReviewDB Auth Token. Please do so in the settings panel.",confirmText:"Get ReviewDB Token",cancelText:"Close",onConfirm:()=>{te(),M=!1},onCancel:()=>{M=!1}}),!1),te=()=>b(m.name,"rdbToken","")==""?F.push(Ie,{component:()=>t.createElement(Pe,{clientId:"915703782174752809",redirectUri:m.links.api+"/api/reviewdb/auth",scopes:["identify"],responseType:"code",permissions:0n,cancelCompletesFlow:!1,callback:async function({location:e}){try{const n=new URL(e);n.searchParams.append("returnType","json"),n.searchParams.append("clientMod","enmity");const o=await fetch(n,{headers:{accept:"application/json"}}),{token:a,success:c,message:d}=await o.json();throw c&&D(m.name,"rdbToken",a),new Error(`Status returned by backend was not OK: ${d}`)}catch(n){F.pop(),console.error(`[${m.name}] Error when authorizing account: ${n}`)}},dismissOAuthModal:()=>F.pop()})}):h.open({content:"You already have a token set!",source:p.Self});async function _e(e){try{const n=await fetch(`${m.links.api}/api/reviewdb/users/${e}/reviews`,{method:"GET"}),{reviews:o,success:a,message:c}=await n.json();if(a)return o;throw new Error("Error when getting reviews: "+c)}catch(n){h.open({content:"Error while fetching reviews. Check logs for more info.",source:p.Failed}),console.log("[ReviewDB] Error while fetching reviews:",n)}}async function Le(e,n){if(!V())return new Promise((c,d)=>d("Invalid token!"));const o=await fetch(`${m.links.api}/api/reviewdb/users/${n}`,{method:"PUT",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}),{message:a}=await o.json();return a&&h.open({content:a+"!",source:p.Pencil}),console.log("[ReviewDB]",Response[a]??Response.error)}async function ke(e,n){if(!V())return new Promise((c,d)=>d("Invalid token!"));const o=await fetch(`${m.links.api}/api/reviewdb/users/${n}/reviews`,{method:"DELETE",headers:new Headers({"Content-Type":"application/json",Accept:"application/json"}),body:JSON.stringify({reviewid:e,token:z()})}),{message:a}=await o.json().catch(console.log);h.open({content:(a??"Response is empty")+"!",source:p.Success})}async function Be(e){if(!V())return new Promise((a,c)=>c("Invalid token!"));const n=await fetch(`${m.links.api}/api/reviewdb/reports`,{method:"PUT",headers:new Headers({"Content-Type":"application/json",Accept:"application/json"}),body:JSON.stringify({reviewid:e,token:z()})}),{message:o}=await n.json();h.open({content:(o??"Response is empty")+"!",source:p.Success})}const Ne=(e,n,o)=>o.includes(n)??e.sender.discordID==n,[{ProfileGradientCard:$e},Fe]=H(N.byProps("ProfileGradientCard"),N.byProps("fetchProfile"));var ne=({review:e,onSubmit:n})=>{const[o,a]=t.useState();return t.useEffect(()=>{Boolean(e.timestamp)&&a(new Date(e.timestamp*1e3).toLocaleString(void 0,{hour:"numeric",minute:"numeric",day:"numeric",month:"numeric",year:"numeric"}).split(",").map(c=>c.replace(/ /g,"")).reverse().join(" "))}),t.createElement($e,{style:i.reviewContainer,fallbackBackground:i.fallback.color},t.createElement(T,{onPress:n},t.createElement(u,{style:{padding:8}},t.createElement(T,{onPress:()=>{$.getUser(e.sender.discordID)?K.showUserProfile({userId:e.sender.discordID}):Fe.getUser(e.sender.discordID).then(()=>K.showUserProfile({userId:e.sender.discordID}))},style:i.avatarContainer},Boolean(e.sender.profilePhoto)&&t.createElement(O,{loading:"lazy",style:i.avatarAuthor,source:{uri:e.sender.profilePhoto?.replace("?size=128","?size=48")}}),Boolean(e.sender.username)&&t.createElement(u,{style:{marginLeft:6}},t.createElement(w,{style:[i.mainText,i.authorName]},e.sender.username)),e.type===3&&t.createElement(T,{style:i.systemContainer,onPress:()=>h.open({source:p.Shield,content:"This is an automated system review."})},t.createElement(E.Icon,{source:p.Warning,style:[i.systemIcon,i.dangerousIcon]}),t.createElement(w,{style:[i.text,i.mainText,i.dangerousText,i.systemText]},"SYSTEM")),Boolean(e.sender.badges?.length>0)&&e.sender.badges.map(c=>t.createElement(T,{onPress:()=>h.open({source:{uri:c.icon},content:c.name})},t.createElement(O,{loading:"lazy",style:i.rdbBadge,source:{uri:c.icon}}))),Boolean(e.timestamp)&&t.createElement(w,{style:{...i.mainText,...i.timestamp}},o)),t.createElement(w,{style:i.messageContent},e.comment??"Invalid message content."))))};const oe=(ce(e=>e.default?.render?.name=="ActionSheet")??{default:{render:!1}}).default.render,Oe=x("BottomSheetScrollView").BottomSheetScrollView,Me=x("openLazy","hideActionSheet"),ie=x("setString");function Ue(e,n){oe?Me?.openLazy(new Promise(o=>o({default:e})),"ReviewActionSheet",n):h.open({content:"You cannot open ActionSheets on this version! Upgrade to 163+",source:p.Failed})}function Ye({onConfirm:e,review:n,currentUserID:o,admins:a}){return t.createElement(oe,null,t.createElement(Oe,{contentContainerStyle:{marginBottom:10}},t.createElement(u,{style:{flexDirection:"column",paddingLeft:10,paddingRight:10,marginTop:14,marginBottom:14,alignItems:"center",justifyContent:"center"}},t.createElement(ne,{review:n,onSubmit:()=>{}}),Boolean(n.comment)&&t.createElement(B,{text:"Copy Text",image:"ic_message_copy",onPress:()=>{ie.setString(n.comment),h.open({content:"Copied to clipboard!",source:p.Success}),e()}}),Boolean(n.id)&&t.createElement(B,{text:"Copy ID",image:"ic_copy_id",onPress:()=>{ie.setString(n.id?.toString()),h.open({content:"Copied to clipboard!",source:p.Success}),e()}}),Ne(n,o,a)&&t.createElement(B,{text:"Delete Review",image:"ic_message_delete",dangerous:!0,onPress:()=>{ke(n.id,n.sender.discordID).then(()=>{e()})}}),Boolean(n.id)&&t.createElement(B,{text:"Report Review",image:"ic_warning_24px",dangerous:!0,onPress:()=>{Be(n.id).then(()=>{e()})}}))))}const ze=x("openLazy","hideActionSheet");var Ve=({userID:e,currentUserID:n=$.getCurrentUser()?.id,admins:o=[]})=>{const[a,c]=t.useState(),d=a?.find(l=>l.sender.discordID===n);return t.useEffect(()=>{_e(e).then(l=>{l&&c(l)})},[]),t.createElement(t.Fragment,null,t.createElement(u,{style:i.container},t.createElement(w,{style:i.eyebrow},"User Reviews")),t.createElement(u,{style:i.reviewWindow},t.createElement(u,{style:i.container},a&&a.length>0?a.map(l=>t.createElement(ne,{review:l,onSubmit:()=>Ue(Ye,{onConfirm:()=>ze?.hideActionSheet(),review:l,currentUserID:n,admins:o})})):t.createElement(w,{style:[i.text,i.safeText,i.content,{alignSelf:"center"}]},"No reviews yet. You could be the first!")),t.createElement(B,{text:d?"Update Review":"Create Review",image:d?"ic_edit_24px":"img_nitro_star",onPress:()=>{xe({title:d?"Update Review":"Create Review",confirmText:d?"Update":"Create",placeholder:`Tap here to ${d?"update your existing review":"create a new review"}...`,onConfirm:(l,y)=>{l?Le({comment:l.trim(),token:b(m.name,"rdbToken","")},e).then(()=>y("")):h.open({content:"Please enter a review before submitting.",source:p.Failed})},userID:e,existing:d?d?.comment:void 0})},style:{paddingLeft:9,paddingRight:9,paddingTop:6,paddingBottom:6}})))};const U=window.enmity.modules.common.Components.General.Animated,[re,je]=H(N.byProps("transitionToGuild","openURL"),N.byProps("setString")),g=W.createThemedStyleSheet({container:{paddingTop:30,paddingLeft:20,flexDirection:"row"},textContainer:{paddingLeft:15,paddingTop:5,flexDirection:"column",flexWrap:"wrap"},image:{width:75,height:75,borderRadius:10},mainText:{opacity:.975,letterSpacing:.25,fontFamily:s.Fonts.DISPLAY_NORMAL},header:{color:s.ThemeColorMap.HEADER_PRIMARY,fontFamily:s.Fonts.DISPLAY_BOLD,fontSize:25,letterSpacing:.25},subHeader:{color:s.ThemeColorMap.HEADER_SECONDARY,opacity:.975,fontSize:12.75}});var He=({manifest:e})=>{const n=t.useRef(new U.Value(1)).current,o=()=>{U.spring(n,{toValue:1.1,duration:250,useNativeDriver:!0}).start()},a=()=>{U.spring(n,{toValue:1,duration:250,useNativeDriver:!0}).start()},c=()=>{re.openURL(e.links.source)},d={transform:[{scale:n}]};return t.createElement(u,{style:g.container},t.createElement(T,{onPress:c,onPressIn:o,onPressOut:a},t.createElement(U.View,{style:[d]},t.createElement(O,{style:[g.image],source:{uri:"https://cdn.spin.rip/r/l9uevwe4ia0.jpg"}}))),t.createElement(u,{style:g.textContainer},t.createElement(T,{onPress:c},t.createElement(w,{style:[g.mainText,g.header]},e.name," ")),t.createElement(u,{style:{flexDirection:"row"}},t.createElement(w,{style:[g.mainText,g.subHeader]},"A plugin by"),e.authors.map((l,y,v)=>t.createElement(T,{onPress:()=>re.openURL(l.profile)},t.createElement(w,{style:[g.mainText,i.safeText,g.subHeader,{paddingLeft:4,fontFamily:s.Fonts.DISPLAY_BOLD,flexDirection:"row"}]},l.name,y<v.length-1?",":null)))),t.createElement(u,null,t.createElement(T,{style:{flexDirection:"row"},onPress:()=>{je.setString(`**${e.name}** v${e.version}`),q.displayToast("plugin name and version","clipboard")}},t.createElement(w,{style:[g.mainText,g.subHeader]},"Version:"),t.createElement(w,{style:[g.mainText,g.subHeader,{paddingLeft:4,fontFamily:s.Fonts.DISPLAY_BOLD}]},e.version," ")))))},ae=({label:e,children:n,style:o})=>t.createElement(u,{style:[o,{marginTop:10}]},t.createElement(w,{style:i.sectionWrapperText},e.toUpperCase()),n);const Ge=x("openURL","transitionToGuild"),We=parseInt(be.split(".")[0])>163?15:0;var Ke=({manifest:e})=>t.createElement(ye,null,t.createElement(He,{manifest:e}),t.createElement(ae,{label:"Authentication"},t.createElement(u,{style:i.formrowContainer},t.createElement(E,{label:"Authenticate with ReviewDB",subLabel:"Open a modal to authenticate your account with the ReviewDB API.",trailing:t.createElement(E.Arrow,{style:{marginLeft:-We}}),leading:t.createElement(E.Icon,{source:p.Self}),onPress:()=>te()}),t.createElement(X,null),t.createElement(J,{placeholder:"Your token goes here",value:b(e.name,"rdbToken",""),onChange:n=>/^[A-Za-z0-9]{30,32}$/.test(n)?D(e.name,"rdbToken",n.trim()):D(e.name,"rdbToken",""),title:"ReviewDB Authentication Token"}))),t.createElement(ae,{label:"Source"},t.createElement(u,{style:i.formrowContainer},t.createElement(E,{label:"Check for Updates",subLabel:`Check for any plugin updates for ${e.name}.`,leading:t.createElement(E.Icon,{source:p.Copy}),trailing:E.Arrow,onPress:()=>{Ae.checkForUpdates()}}),t.createElement(X,null),t.createElement(E,{label:"Source",subLabel:`View ${e.name} source code`,leading:t.createElement(E.Icon,{source:p.Open}),trailing:E.Arrow,onPress:()=>Ge.openURL(e.links.source)}))),t.createElement(w,{style:i.subheaderText},`Version: (${e.version}) Build: (${e.plugin.hash})`));const j=ue(m.name),Xe=x("PRIMARY_INFO_TOP_OFFSET","SECONDARY_INFO_TOP_MARGIN","SIDE_PADDING"),Je=G("ProfileBadges",{all:!0,default:!1}),qe={...m,async onStart(){let e=b(m.name,"currentUser",void 0),n=0;const o=()=>{e||n>=20||(n++,setTimeout(()=>{if(e=$.getCurrentUser().id,!e)return o();D(m.name,"currentUser",e)},25))};o();const a=await fetch(m.links.api+"/admins").then(l=>l.json()),c=await fetch(m.links.api+"/api/reviewdb/badges").then(l=>l.json());b(m.name,"rdbToken","")&&fetch(m.links.api+"/api/reviewdb/users",{method:"POST",body:JSON.stringify({token:b(m.name,"rdbToken","")}),headers:{"Content-Type":"application/json"}}).then(l=>l.json()).then(l=>{(l.lastReviewID??0)>b(m.name,"lastReview",0)&&(h.open({source:p.Pencil,content:"You have new reviews on your profile!"}),D(m.name,"lastReview",l.lastReview))});const d=({res:l,name:y,image:v,ensure:R})=>{if(R){const S=()=>t.createElement(fe,{name:y,image:v});l.props.badges?l.props.badges.push(t.createElement(S,null)):l.props.children.push(t.createElement(S,null))}};for(const l of Je)j.after(l,"default",(y,[{user:{id:v}}],R)=>{c.forEach(f=>{d({res:R,ensure:f.discordID===v,name:f.name,image:f.icon})});const S=m.authors.find(f=>f.id===v);d({res:R,ensure:Boolean(S),name:"Enmity ReviewDB Developer",image:S?.icon})});j.after(Xe.default,"type",(l,y,v)=>{const R=pe(v,f=>f?.props?.children.find(se=>typeof se?.props?.displayProfile?.userId=="string")&&f?.type?.displayName==="View"&&Array?.isArray(f?.props?.style))?.props?.children;if(!R)return v;const{userId:S}=R?.find(f=>typeof f?.props?.displayProfile?.userId=="string")?.props?.displayProfile??{};if(!S)return v;R?.push(t.createElement(Ve,{userID:S,currentUserID:e,admins:a}))})},onStop(){j.unpatchAll()},getSettingsPanel({settings:e}){return t.createElement(Ke,{manifest:m,settings:e})}};le(qe);
