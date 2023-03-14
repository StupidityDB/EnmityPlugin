function R(e,n,o){window.enmity.settings.set(e,n,o)}function S(e,n,o){return window.enmity.settings.get(e,n,o)}function se(e){window.enmity.plugins.registerPlugin(e)}const B={byProps:(...e)=>window.enmity.modules.filters.byProps(...e),byName:(e,n)=>window.enmity.modules.filters.byName(e,n),byTypeName:(e,n)=>window.enmity.modules.filters.byTypeName(e,n),byDisplayName:(e,n)=>window.enmity.modules.filters.byDisplayName(e,n)};function le(e,n){return window.enmity.modules.getModule(e,n)}function j(...e){return window.enmity.modules.bulk(...e)}function A(...e){return window.enmity.modules.getByProps(...e)}function H(...e){return window.enmity.modules.getByName(...e)}window.enmity.modules.common;const s=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const t=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage;const h=window.enmity.modules.common.Toasts,D=window.enmity.modules.common.Dialog;window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings;const N=window.enmity.modules.common.Users,k=window.enmity.modules.common.Navigation,ce=window.enmity.modules.common.NavigationNative,me=window.enmity.modules.common.NavigationStack;window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const G=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale;const W=window.enmity.modules.common.Profiles;window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes;function de(e){return window.enmity.patcher.create(e)}function ue(e,n,o){return window.enmity.utilities.findInReactTree(e,n,o)}var v="ReviewDB",x="1.9.1",pe="Review other users. These reviews are visible to anyone with this type of plugin on any platform.",we=[{name:"spin",id:"308440976723148800",profile:"https://spin.rip/"},{name:"Rosie<3",id:"581573474296791211",profile:"https://github.com/acquitelol"}],ge="#ff0069",P={hash:"1f4371c5"},U={source:"https://raw.githubusercontent.com/StupidityDB/EnmityPlugin/",dist:"https://raw.githubusercontent.com/StupidityDB/EnmityPlugin/master/dist/ReviewDB.js",api:"https://manti.vendicated.dev"},m={name:v,version:x,description:pe,authors:we,color:ge,plugin:P,links:U};const{components:r}=window.enmity;r.Alert,r.Button,r.FlatList;const F=r.Image;r.ImageBackground,r.KeyboardAvoidingView,r.Modal,r.Pressable,r.RefreshControl;const he=r.ScrollView;r.SectionList,r.StatusBar,r.StyleSheet,r.Switch;const w=r.Text;r.TextInput,r.TouchableHighlight;const f=r.TouchableOpacity;r.TouchableWithoutFeedback,r.Touchable;const u=r.View;r.VirtualizedList,r.Form,r.FormArrow,r.FormCTA,r.FormCTAButton,r.FormCardSection,r.FormCheckbox;const K=r.FormDivider;r.FormHint,r.FormIcon;const X=r.FormInput;r.FormLabel,r.FormRadio;const T=r.FormRow;r.FormSection,r.FormSelect,r.FormSubLabel,r.FormSwitch,r.FormTernaryCheckBox,r.FormText,r.FormTextColors,r.FormTextSizes;const J=({name:e,image:n})=>{const o={wrapper:{alignItems:"center",flexDirection:"row",justifyContent:"flex-end"},image:{width:24,height:24,resizeMode:"contain",marginHorizontal:2}};return t.createElement(u,{style:o.wrapper},t.createElement(f,{onPress:()=>h.open({content:e,source:{uri:n}})},t.createElement(F,{style:o.image,source:{uri:n}})))};function E(e){return window.enmity.assets.getIDByName(e)}var g={Failed:E("Small"),Pencil:E("ic_pencil_24px"),Success:E("ic_selection_checked_24px"),Warning:E("ic_warning_24px"),Copy:E("toast_copy_link"),Open:E("ic_leave_stage"),Clipboard:E("pending-alert"),Shield:E("ic_person_shield"),Self:E("friends_toast_icon")};const ye=(e=.1)=>({shadowColor:"#000",shadowOffset:{width:1,height:4},shadowOpacity:e,shadowRadius:4.65,elevation:8}),fe=(e,n)=>{h.open({content:n=="clipboard"?`Copied ${e} to clipboard.`:e,source:n=="clipboard"?g.Clipboard:g.Self})};var q={shadow:ye,displayToast:fe},Z=(e,n,o,l,a)=>{try{return e(...n)}catch(d){console.warn(`[${o}] The following error happened when trying to ${l} ${a??"unspecificied label"}: ${d}`);return}};const{native:_}=window.enmity;function Te(){_.reload()}const Ee=_.version;_.build,_.device,_.version;async function be(){await Z(async function(){const e=`${U.dist}?${Math.floor(Math.random()*1001)}.js`,n=await(await fetch(e)).text(),o=n.match(/\d+\.\d+\.\d+/g),l=n.match(/hash:"(.*?)"/);if(!o&&!l)return Ce(v,[x,P.hash]);const a=o&&o[0],d=l&&l[1];return a&&a!=x?Q(e,a,"version"):d&&d!=P.hash?Q(e,d,"build"):ve(v,[x,P.hash])},[U,x,P],v,"checking if latest version at","the async check for updates callback")}const Q=(e,n,o)=>{D.show({title:"Update found",body:`A newer ${o} is available for ${v}. ${o=="build"?`
The version will remain at ${x}, but the build will update to ${n}.`:""}
Would you like to install ${o} \`${n}\` now?`,confirmText:"Update",cancelText:"Not now",onConfirm:()=>Re(e,n,o)})},ve=(e,[n,o])=>{console.log(`[${e}] Plugin is on the latest update, which is version ${n} and build ${o}`),D.show({title:"Already on latest",body:`${e} is already updated to the latest version.
Version: \`${n}\`
Build: \`${o}\``,confirmText:"Okay"})},Ce=(e,[n,o])=>{console.log(`[${e}] Plugin failed to update to the latest version and build, remaining at ${n} and ${o}`),D.show({title:"Failed",body:`${e} to find a new version or build.
The current versions will remain as follows:
Version: \`${n}\`
Build: \`${o}\``,confirmText:"Okay"})};async function Re(e,n,o){await Z(async function(){window.enmity.plugins.installPlugin(e,({data:l})=>{l=="installed_plugin"||l=="overridden_plugin"?D.show({title:`Updated ${v}`,body:`Successfully updated to ${o} \`${n}\`. 
Would you like to reload Discord now?`,confirmText:"Reload",cancelText:"Not now",onConfirm:()=>Te()}):console.log(`[${v}] Plugin failed to update to ${o} ${n}.`)})},[e,n,o],v,"installing plugin at","new version available")}var Se={checkForUpdates:be};const I=18,i=G.createThemedStyleSheet({container:{marginTop:12,marginLeft:12,alignSelf:"flex-start",width:"95%"},buttonContainer:{flexDirection:"row",alignItems:"center",justifyContent:"center"},reviewContainer:{borderRadius:9,padding:1,marginBottom:8,width:"98%"},reviewWindow:{margin:12,borderRadius:10,borderWidth:1,borderColor:"rgba(75, 75, 75, 0.7)"},systemContainer:{marginLeft:4,backgroundColor:s.ThemeColorMap.BACKGROUND_SECONDARY,borderRadius:6,flexDirection:"row",justifyContent:"center",alignItems:"center"},formrowContainer:{width:"90%",marginLeft:"5%",borderRadius:10,backgroundColor:s.ThemeColorMap.BACKGROUND_MOBILE_SECONDARY,...q.shadow()},button:{width:"98%",height:40,backgroundColor:s.ThemeColorMap.BACKGROUND_SECONDARY_ALT,borderRadius:8,marginTop:6,marginBottom:6,flexDirection:"row",justifyContent:"center",alignItems:"center"},content:{fontSize:14,paddingRight:8,paddingTop:8,paddingBottom:8},messageContent:{color:s.ThemeColorMap.TEXT_NORMAL,fontFamily:s.Fonts.DISPLAY_NORMAL,opacity:.985,fontSize:16},text:{fontFamily:s.Fonts.DISPLAY_BOLD},buttonText:{fontSize:16,marginLeft:4},mainText:{opacity:.975,letterSpacing:.25},safeText:{color:s.ThemeColorMap.TEXT_NORMAL},dangerousText:{color:s.ThemeColorMap.TEXT_MUTED},fallback:{color:s.ThemeColorMap.BACKGROUND_SECONDARY_ALT},systemText:{fontSize:12,paddingVertical:2,paddingRight:4},subheaderText:{color:s.ThemeColorMap.HEADER_SECONDARY,textAlign:"center",margin:10,marginBottom:50,letterSpacing:.25,fontFamily:s.Fonts.PRIMARY_BOLD,fontSize:14},sectionWrapperText:{color:s.ThemeColorMap.HEADER_SECONDARY,paddingLeft:"5.5%",paddingRight:10,marginBottom:10,letterSpacing:.25,fontFamily:s.Fonts.PRIMARY_BOLD,fontSize:12},timestamp:{color:s.ThemeColorMap.HEADER_PRIMARY,fontFamily:s.Fonts.DISPLAY_NORMAL,opacity:.985,fontSize:12,marginLeft:4,marginTop:I/12},eyebrow:{textTransform:"uppercase",fontSize:12,lineHeight:16,fontFamily:s.Fonts.PRIMARY_BOLD,color:s.ThemeColorMap.TEXT_NORMAL},authorName:{color:s.ThemeColorMap.HEADER_PRIMARY,fontFamily:s.Fonts.DISPLAY_BOLD,fontSize:I,letterSpacing:.25,marginTop:-3},avatarContainer:{display:"flex",flexDirection:"row",flex:0,alignSelf:"flex-start"},avatarAuthor:{width:I,height:I,borderRadius:100,marginTop:1},rdbBadge:{width:I*.85,height:I*.85,marginTop:1,marginLeft:4},icon:{width:16,height:16,marginRight:4,color:s.ThemeColorMap.INTERACTIVE_NORMAL},systemIcon:{width:12,height:12,marginHorizontal:4},dangerousIcon:{tintColor:s.ThemeColorMap.TEXT_MUTED},safeIcon:{tintColor:s.ThemeColorMap.INTERACTIVE_NORMAL},authContainer:{backgroundColor:s.ThemeColorMap.BACKGROUND_MOBILE_SECONDARY,flex:.5},authCard:{backgroundColor:s.ThemeColorMap.BACKGROUND_MOBILE_PRIMARY,color:s.ThemeColorMap.TEXT_NORMAL},authHeader:{backgroundColor:s.ThemeColorMap.BACKGROUND_MOBILE_SECONDARY,shadowColor:"transparent",elevation:0},authText:{color:s.ThemeColorMap.HEADER_PRIMARY,fontFamily:s.Fonts.PRIMARY_NORMAL,fontSize:16,marginLeft:16,backgroundColor:"transparent"}}),Ae=({title:e,userID:n,confirmText:o="Confirm",onConfirm:l,existing:a,placeholder:d})=>{const c=N.getUser(n);D.show({title:e,children:t.createElement(t.Fragment,null,t.createElement(w,{style:[i.text,i.safeText,i.mainText,i.buttonText,{paddingTop:10,marginLeft:0}]},"Reviewing: ",c?.username,"#",c?.discriminator),t.createElement(u,{style:{paddingHorizontal:0,paddingVertical:-5,marginTop:10,borderRadius:10,borderWidth:1,borderColor:"rgba(120, 120, 120, 0.3)"}},t.createElement(u,{style:{marginBottom:-25}}),t.createElement(X,{placeholder:d??"",value:a??S(m.name,"inputValue",""),onChange:p=>R(m.name,"inputValue",p),autoFocus:!0,showBorder:!0,multiline:!0,numberOfLines:2}))),confirmText:o,cancelText:"Cancel",onConfirm:()=>l(S(m.name,"inputValue",""),p=>R(m.name,"inputValue",p)),onCancel:()=>{R(m.name,"inputValue","")}})};function L({text:e,image:n="ic_new_group",dangerous:o,onPress:l,style:a}){return t.createElement(u,{style:[i.buttonContainer,a]},t.createElement(f,{style:i.button,onPress:l??console.log("No press function provided.")},t.createElement(T.Icon,{source:E(n),style:[i.icon,o?i.dangerousIcon:i.safeIcon]}),t.createElement(w,{style:[i.text,o?i.dangerousText:i.safeText,i.buttonText]},e)))}const ee=me.createStackNavigator();var De=({component:e=u}={})=>t.createElement(ce.NavigationContainer,{independent:!0},t.createElement(ee.Navigator,{initialRouteName:"ReviewDB",style:i.authContainer,screenOptions:{cardOverlayEnabled:!1,cardShadowEnabled:!1,cardStyle:i.authCard,headerStyle:i.authHeader,headerTitleContainerStyle:{color:s.ThemeColorMap.HEADER_PRIMARY},headerTitleAlign:"center",safeAreaInsets:{top:0}}},t.createElement(ee.Screen,{name:"",component:()=>t.createElement(t.Fragment,null,t.createElement(u,{style:{marginTop:-45}}),t.createElement(e,null)),options:{headerLeft:()=>t.createElement(f,{onPress:()=>{k.pop()}},t.createElement(w,{style:i.authText},"Close"))}})));const Y=()=>S(m.name,"rdbToken",""),xe=H("OAuth2AuthorizeModal");let $=!1;const z=()=>$?!1:Y()?!0:($=!0,D.show({title:"Unauthorized",body:"You have not set your ReviewDB Auth Token. Please do so in the settings panel.",confirmText:"Get ReviewDB Token",cancelText:"Close",onConfirm:()=>{te(),$=!1},onCancel:()=>{$=!1}}),!1),te=()=>S(m.name,"rdbToken","")==""?k.push(De,{component:()=>t.createElement(xe,{clientId:"915703782174752809",redirectUri:m.links.api+"/api/reviewdb/auth",scopes:["identify"],responseType:"code",permissions:0n,cancelCompletesFlow:!1,callback:async function({location:e}){try{const n=new URL(e);n.searchParams.append("returnType","json"),n.searchParams.append("clientMod","enmity");const o=await fetch(n,{headers:{accept:"application/json"}}),{token:l,success:a,message:d}=await o.json();throw a&&R(m.name,"rdbToken",l),new Error(`Status returned by backend was not OK: ${d}`)}catch(n){k.pop(),console.error(`[${m.name}] Error when authorizing account: ${n}`)}},dismissOAuthModal:()=>k.pop()})}):h.open({content:"You already have a token set!",source:g.Self});async function Ie(e){try{const n=await fetch(`${m.links.api}/api/reviewdb?snowflakeFormat=string&discordid=${e}`,{method:"GET"}),{reviews:o,success:l,message:a}=await n.json();if(l)return o;throw new Error("Error when getting reviews: "+a)}catch(n){h.open({content:"Error while fetching reviews. Check logs for more info.",source:g.Failed}),console.log("[ReviewDB] Error while fetching reviews:",n)}}async function Pe(e){if(!z())return new Promise((l,a)=>a("Invalid token!"));const n=await fetch(m.links.api+"/api/reviewdb",{method:"PUT",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}),{message:o}=await n.json();return o&&h.open({content:o+"!",source:g.Pencil}),console.log("[ReviewDB]",Response[o]??Response.error)}async function _e(e){if(!z())return new Promise((l,a)=>a("Invalid token!"));const n=await fetch(m.links.api+"/api/reviewdb",{method:"DELETE",headers:new Headers({"Content-Type":"application/json",Accept:"application/json"}),body:JSON.stringify({reviewid:e,token:Y()})}),{message:o}=await n.json();h.open({content:(o??"Response is empty")+"!",source:g.Success})}async function Le(e){if(!z())return new Promise((l,a)=>a("Invalid token!"));const n=await fetch(m.links.api+"/api/reviewdb",{method:"REPORT",headers:new Headers({"Content-Type":"application/json",Accept:"application/json"}),body:JSON.stringify({reviewid:e,token:Y()})}),{message:o}=await n.json();h.open({content:(o??"Response is empty")+"!",source:g.Success})}const Be=(e,n,o)=>o.includes(n)??e.sender.discordID==n,[{ProfileGradientCard:Ne},ke]=j(B.byProps("ProfileGradientCard"),B.byProps("fetchProfile"));var ne=({review:e,onSubmit:n})=>{const[o,l]=t.useState();return t.useEffect(()=>{Boolean(e.timestamp)&&l(new Date(e.timestamp*1e3).toLocaleString(void 0,{hour:"numeric",minute:"numeric",day:"numeric",month:"numeric",year:"numeric"}).split(",").map(a=>a.replace(/ /g,"")).reverse().join(" "))}),t.createElement(Ne,{style:i.reviewContainer,fallbackBackground:i.fallback.color},t.createElement(f,{onPress:n},t.createElement(u,{style:{padding:8}},t.createElement(f,{onPress:()=>{N.getUser(e.sender.discordID)?W.showUserProfile({userId:e.sender.discordID}):ke.getUser(e.sender.discordID).then(()=>W.showUserProfile({userId:e.sender.discordID}))},style:i.avatarContainer},Boolean(e.sender.profilePhoto)&&t.createElement(F,{loading:"lazy",style:i.avatarAuthor,source:{uri:e.sender.profilePhoto?.replace("?size=128","?size=48")}}),Boolean(e.sender.username)&&t.createElement(u,{style:{marginLeft:6}},t.createElement(w,{style:[i.mainText,i.authorName]},e.sender.username)),e.type===3&&t.createElement(f,{style:i.systemContainer,onPress:()=>h.open({source:g.Shield,content:"This is an automated system review."})},t.createElement(T.Icon,{source:g.Warning,style:[i.systemIcon,i.dangerousIcon]}),t.createElement(w,{style:[i.text,i.mainText,i.dangerousText,i.systemText]},"SYSTEM")),Boolean(e.sender.badges?.length>0)&&e.sender.badges.map(a=>t.createElement(f,{onPress:()=>h.open({source:{uri:a.icon},content:a.name})},t.createElement(F,{loading:"lazy",style:i.rdbBadge,source:{uri:a.icon}}))),Boolean(e.timestamp)&&t.createElement(w,{style:{...i.mainText,...i.timestamp}},o)),t.createElement(w,{style:i.messageContent},e.comment??"Invalid message content."))))};const oe=(le(e=>e.default?.render?.name=="ActionSheet")??{default:{render:!1}}).default.render,Fe=A("BottomSheetScrollView").BottomSheetScrollView,$e=A("openLazy","hideActionSheet"),ie=A("setString");function Oe(e,n){oe?$e?.openLazy(new Promise(o=>o({default:e})),"ReviewActionSheet",n):h.open({content:"You cannot open ActionSheets on this version! Upgrade to 163+",source:g.Failed})}function Me({onConfirm:e,review:n,currentUserID:o,admins:l}){return t.createElement(oe,null,t.createElement(Fe,{contentContainerStyle:{marginBottom:10}},t.createElement(u,{style:{flexDirection:"column",paddingLeft:10,paddingRight:10,marginTop:14,marginBottom:14,alignItems:"center",justifyContent:"center"}},t.createElement(ne,{review:n,onSubmit:()=>{}}),Boolean(n.comment)&&t.createElement(L,{text:"Copy Text",image:"ic_message_copy",onPress:()=>{ie.setString(n.comment),h.open({content:"Copied to clipboard!",source:g.Success}),e()}}),Boolean(n.id)&&t.createElement(L,{text:"Copy ID",image:"ic_copy_id",onPress:()=>{ie.setString(n.id?.toString()),h.open({content:"Copied to clipboard!",source:g.Success}),e()}}),Be(n,o,l)&&t.createElement(L,{text:"Delete Review",image:"ic_message_delete",dangerous:!0,onPress:()=>{_e(n.id).then(()=>{e()})}}),Boolean(n.id)&&t.createElement(L,{text:"Report Review",image:"ic_warning_24px",dangerous:!0,onPress:()=>{Le(n.id).then(()=>{e()})}}))))}const Ue=A("openLazy","hideActionSheet");var Ye=({userID:e,currentUserID:n=N.getCurrentUser()?.id,admins:o=[]})=>{const[l,a]=t.useState(),d=l?.find(c=>c.sender.discordID===n);return t.useEffect(()=>{Ie(e).then(c=>{c&&a(c)})},[]),t.createElement(t.Fragment,null,t.createElement(u,{style:i.container},t.createElement(w,{style:i.eyebrow},"User Reviews")),t.createElement(u,{style:i.reviewWindow},t.createElement(u,{style:i.container},l&&l.length>0?l.map(c=>t.createElement(ne,{review:c,onSubmit:()=>Oe(Me,{onConfirm:()=>Ue?.hideActionSheet(),review:c,currentUserID:n,admins:o})})):t.createElement(w,{style:[i.text,i.safeText,i.content,{alignSelf:"center"}]},"No reviews yet. You could be the first!")),t.createElement(L,{text:d?"Update Review":"Create Review",image:d?"ic_edit_24px":"img_nitro_star",onPress:()=>{Ae({title:d?"Update Review":"Create Review",confirmText:d?"Update":"Create",placeholder:`Tap here to ${d?"update your existing review":"create a new review"}...`,onConfirm:(c,p)=>{c?Pe({userid:e,comment:c.trim(),token:S(m.name,"rdbToken","")}).then(()=>p?.("")):h.open({content:"Please enter a review before submitting.",source:g.Failed})},userID:e,existing:d?d?.comment:void 0})},style:{paddingLeft:9,paddingRight:9,paddingTop:6,paddingBottom:6}})))};const O=window.enmity.modules.common.Components.General.Animated,[re,ze]=j(B.byProps("transitionToGuild","openURL"),B.byProps("setString")),y=G.createThemedStyleSheet({container:{paddingTop:30,paddingLeft:20,flexDirection:"row"},textContainer:{paddingLeft:15,paddingTop:5,flexDirection:"column",flexWrap:"wrap"},image:{width:75,height:75,borderRadius:10},mainText:{opacity:.975,letterSpacing:.25,fontFamily:s.Fonts.DISPLAY_NORMAL},header:{color:s.ThemeColorMap.HEADER_PRIMARY,fontFamily:s.Fonts.DISPLAY_BOLD,fontSize:25,letterSpacing:.25},subHeader:{color:s.ThemeColorMap.HEADER_SECONDARY,opacity:.975,fontSize:12.75}});var Ve=({manifest:e})=>{const n=t.useRef(new O.Value(1)).current,o=()=>{O.spring(n,{toValue:1.1,duration:250,useNativeDriver:!0}).start()},l=()=>{O.spring(n,{toValue:1,duration:250,useNativeDriver:!0}).start()},a=()=>{re.openURL(e.links.source)},d={transform:[{scale:n}]};return t.createElement(u,{style:y.container},t.createElement(f,{onPress:a,onPressIn:o,onPressOut:l},t.createElement(O.View,{style:[d]},t.createElement(F,{style:[y.image],source:{uri:"https://cdn.spin.rip/r/l9uevwe4ia0.jpg"}}))),t.createElement(u,{style:y.textContainer},t.createElement(f,{onPress:a},t.createElement(w,{style:[y.mainText,y.header]},e.name," ")),t.createElement(u,{style:{flexDirection:"row"}},t.createElement(w,{style:[y.mainText,y.subHeader]},"A plugin by"),e.authors.map((c,p,C)=>t.createElement(f,{onPress:()=>re.openURL(c.profile)},t.createElement(w,{style:[y.mainText,i.safeText,y.subHeader,{paddingLeft:4,fontFamily:s.Fonts.DISPLAY_BOLD,flexDirection:"row"}]},c.name,p<C.length-1?",":null)))),t.createElement(u,null,t.createElement(f,{style:{flexDirection:"row"},onPress:()=>{ze.setString(`**${e.name}** v${e.version}`),q.displayToast("plugin name and version","clipboard")}},t.createElement(w,{style:[y.mainText,y.subHeader]},"Version:"),t.createElement(w,{style:[y.mainText,y.subHeader,{paddingLeft:4,fontFamily:s.Fonts.DISPLAY_BOLD}]},e.version," ")))))},ae=({label:e,children:n,style:o})=>t.createElement(u,{style:[o,{marginTop:10}]},t.createElement(w,{style:i.sectionWrapperText},e.toUpperCase()),n);const je=A("openURL","transitionToGuild"),He=parseInt(Ee?.split(".")[0])>163?15:0;var Ge=({manifest:e})=>t.createElement(he,null,t.createElement(Ve,{manifest:e}),t.createElement(ae,{label:"Authentication"},t.createElement(u,{style:i.formrowContainer},t.createElement(T,{label:"Authenticate with ReviewDB",subLabel:"Open a modal to authenticate your account with the ReviewDB API.",trailing:t.createElement(T.Arrow,{style:{marginLeft:-He}}),leading:t.createElement(T.Icon,{source:g.Self}),onPress:()=>te()}),t.createElement(K,null),t.createElement(X,{placeholder:"Your token goes here",value:S(e.name,"rdbToken",""),onChange:n=>/^[A-Za-z0-9]{30,32}$/.test(n)?R(e.name,"rdbToken",n.trim()):R(e.name,"rdbToken",""),title:"ReviewDB Authentication Token"}))),t.createElement(ae,{label:"Source"},t.createElement(u,{style:i.formrowContainer},t.createElement(T,{label:"Check for Updates",subLabel:`Check for any plugin updates for ${e.name}.`,leading:t.createElement(T.Icon,{source:g.Copy}),trailing:T.Arrow,onPress:()=>{Se.checkForUpdates()}}),t.createElement(K,null),t.createElement(T,{label:"Source",subLabel:`View ${e.name} source code`,leading:t.createElement(T.Icon,{source:g.Open}),trailing:T.Arrow,onPress:()=>je.openURL(e.links.source)}))),t.createElement(w,{style:i.subheaderText},`Version: (${e.version}) Build: (${e.plugin.hash})`));const V=de(m.name),We=A("PRIMARY_INFO_TOP_OFFSET","SECONDARY_INFO_TOP_MARGIN","SIDE_PADDING"),Ke=H("ProfileBadges",{all:!0,default:!1}),Xe={...m,async onStart(){let e=S(m.name,"currentUser",void 0),n=0;const o=()=>{e||n>=20||(n++,setTimeout(()=>{if(e=N.getCurrentUser().id,!e)return o();R(m.name,"currentUser",e)},25))};o();const l=await fetch(m.links.api+"/admins").then(a=>a.json());for(const a of Ke)V.after(a,"default",(d,[{user:{id:c}}],p)=>{const C=()=>t.createElement(J,{name:"ReviewDB Administrator",image:"https://cdn.discordapp.com/emojis/1040004306100826122.gif?size=128"}),b=()=>t.createElement(J,{name:"Enmity ReviewDB Developer",image:"https://cdn.discordapp.com/emojis/884010019543212053.gif?size=128"});l.includes(c)&&(p.props.badges?p.props.badges.push(t.createElement(C,null)):p.props.children.push(t.createElement(C,null))),m.authors.find(M=>M.id===c)&&(p.props.badges?p.props.badges.push(t.createElement(b,null)):p.props.children.push(t.createElement(b,null)))});V.after(We.default,"type",(a,d,c)=>{const p=ue(c,b=>b?.props?.children.find(M=>typeof M?.props?.displayProfile?.userId=="string")&&b?.type?.displayName==="View"&&Array?.isArray(b?.props?.style))?.props?.children;if(!p)return c;const{userId:C}=p?.find(b=>typeof b?.props?.displayProfile?.userId=="string")?.props?.displayProfile??{};if(!C)return c;p?.push(t.createElement(Ye,{userID:C,currentUserID:e,admins:l}))})},onStop(){V.unpatchAll()},getSettingsPanel({settings:e}){return t.createElement(Ge,{manifest:m,settings:e})}};se(Xe);
