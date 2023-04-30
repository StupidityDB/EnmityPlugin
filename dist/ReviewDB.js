function P(e,n,o){window.enmity.settings.set(e,n,o)}function C(e,n,o){return window.enmity.settings.get(e,n,o)}function we(e){window.enmity.plugins.registerPlugin(e)}const I={byProps:(...e)=>window.enmity.modules.filters.byProps(...e),byName:(e,n)=>window.enmity.modules.filters.byName(e,n),byTypeName:(e,n)=>window.enmity.modules.filters.byTypeName(e,n),byDisplayName:(e,n)=>window.enmity.modules.filters.byDisplayName(e,n)};function fe(e,n){return window.enmity.modules.getModule(e,n)}function Q(...e){return window.enmity.modules.bulk(...e)}function v(...e){return window.enmity.modules.getByProps(...e)}function k(...e){return window.enmity.modules.getByName(...e)}window.enmity.modules.common;const c=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const t=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage;const f=window.enmity.modules.common.Toasts,_=window.enmity.modules.common.Dialog;window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings;const O=window.enmity.modules.common.Users,U=window.enmity.modules.common.Navigation,Te=window.enmity.modules.common.NavigationNative,Ee=window.enmity.modules.common.NavigationStack;window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const ve=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale;const W=window.enmity.modules.common.Profiles;window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes;function Se(e){return window.enmity.patcher.create(e)}function be(e,n,o){return window.enmity.utilities.findInReactTree(e,n,o)}var A="ReviewDB",$="2.1.0",Ce="Review other users. These reviews are visible to anyone with this type of plugin on any platform.",xe=[{name:"spin",id:"308440976723148800",profile:"https://spin.rip/",icon:"https://cdn.discordapp.com/emojis/884010019543212053.gif?size=128"},{name:"Rosie<3",id:"581573474296791211",profile:"https://github.com/acquitelol",icon:"https://cdn.discordapp.com/emojis/884010019543212053.gif?size=128"}],Re="#ff0069",L={hash:"dd9c58c0"},X={source:"https://github.com/StupidityDB/EnmityPlugin/",dist:"https://raw.githubusercontent.com/StupidityDB/EnmityPlugin/master/dist/ReviewDB.js",api:"https://manti.vendicated.dev"},d={name:A,version:$,description:Ce,authors:xe,color:Re,plugin:L,links:X};function x(e){return window.enmity.assets.getIDByName(e)}var h={Failed:x("Small"),Pencil:x("ic_pencil_24px"),Success:x("ic_selection_checked_24px"),Warning:x("ic_warning_24px"),Copy:x("toast_copy_link"),Open:x("ic_leave_stage"),Clipboard:x("pending-alert"),Shield:x("ic_person_shield"),Self:x("friends_toast_icon")};const De=(e=.1)=>({shadowColor:"#000",shadowOffset:{width:1,height:4},shadowOpacity:e,shadowRadius:4.65,elevation:8}),Pe=(e,n)=>{f.open({content:n=="clipboard"?`Copied ${e} to clipboard.`:e,source:n=="clipboard"?h.Clipboard:h.Self})};var ee={shadow:De,displayToast:Pe},te=(e,n,o,i,s)=>{try{return e(...n)}catch(a){console.warn(`[${o}] The following error happened when trying to ${i} ${s??"unspecificied label"}: ${a}`);return}};const{native:N}=window.enmity;function Ae(){N.reload()}const Ie=N.version,_e=N.build;N.device,N.version;async function $e(){await te(async function(){const e=`${X.dist}?${Math.floor(Math.random()*1001)}.js`,n=await(await fetch(e)).text(),o=n.match(/\d+\.\d+\.\d+/g),i=n.match(/hash:"(.*?)"/);if(!o&&!i)return ke(A,[$,L.hash]);const s=o&&o[0],a=i&&i[1];return s&&s!=$?ne(e,s,"version"):a&&a!=L.hash?ne(e,a,"build"):Me(A,[$,L.hash])},[X,$,L],A,"checking if latest version at","the async check for updates callback")}const ne=(e,n,o)=>{_.show({title:"Update found",body:`A newer ${o} is available for ${A}. ${o=="build"?`
The version will remain at ${$}, but the build will update to ${n}.`:""}
Would you like to install ${o} \`${n}\` now?`,confirmText:"Update",cancelText:"Not now",onConfirm:()=>Le(e,n,o)})},Me=(e,[n,o])=>{console.log(`[${e}] Plugin is on the latest update, which is version ${n} and build ${o}`),_.show({title:"Already on latest",body:`${e} is already updated to the latest version.
Version: \`${n}\`
Build: \`${o}\``,confirmText:"Okay"})},ke=(e,[n,o])=>{console.log(`[${e}] Plugin failed to update to the latest version and build, remaining at ${n} and ${o}`),_.show({title:"Failed",body:`${e} to find a new version or build.
The current versions will remain as follows:
Version: \`${n}\`
Build: \`${o}\``,confirmText:"Okay"})};async function Le(e,n,o){await te(async function(){window.enmity.plugins.installPlugin(e,({data:i})=>{i=="installed_plugin"||i=="overridden_plugin"?_.show({title:`Updated ${A}`,body:`Successfully updated to ${o} \`${n}\`. 
Would you like to reload Discord now?`,confirmText:"Reload",cancelText:"Not now",onConfirm:()=>Ae()}):console.log(`[${A}] Plugin failed to update to ${o} ${n}.`)})},[e,n,o],A,"installing plugin at","new version available")}var Ne={checkForUpdates:$e};const{components:l}=window.enmity;l.Alert,l.Button,l.FlatList;const z=l.Image;l.ImageBackground,l.KeyboardAvoidingView,l.Modal,l.Pressable,l.RefreshControl;const Be=l.ScrollView;l.SectionList,l.StatusBar,l.StyleSheet,l.Switch;const T=l.Text;l.TextInput,l.TouchableHighlight;const S=l.TouchableOpacity;l.TouchableWithoutFeedback,l.Touchable;const y=l.View;l.VirtualizedList,l.Form,l.FormArrow,l.FormCTA,l.FormCTAButton,l.FormCardSection,l.FormCheckbox;const oe=l.FormDivider;l.FormHint,l.FormIcon;const ie=l.FormInput;l.FormLabel,l.FormRadio;const b=l.FormRow;l.FormSection,l.FormSelect,l.FormSubLabel,l.FormSwitch,l.FormTernaryCheckBox,l.FormText,l.FormTextColors,l.FormTextSizes;const Fe=({name:e,image:n,size:o,margin:i})=>{const s={wrapper:{alignItems:"center",flexDirection:"row",justifyContent:"flex-end"},image:{width:o,height:o,resizeMode:"contain",marginLeft:i,marginRight:i+1}};return t.createElement(y,{style:s.wrapper},t.createElement(S,{onPress:()=>f.open({content:e,source:{uri:n}})},t.createElement(z,{style:s.image,source:{uri:n}})))},M=18,r=ve.createThemedStyleSheet({container:{marginTop:12,marginLeft:12,alignSelf:"flex-start",width:"95%"},reviewContainer:{borderRadius:9,padding:1,marginBottom:8,width:"98%"},systemContainer:{marginLeft:4,backgroundColor:c.ThemeColorMap.BACKGROUND_SECONDARY,borderRadius:6,flexDirection:"row",justifyContent:"center",alignItems:"center"},formrowContainer:{width:"90%",marginLeft:"5%",borderRadius:10,backgroundColor:c.ThemeColorMap.BACKGROUND_MOBILE_SECONDARY,...ee.shadow()},creditsContainer:{paddingTop:30,paddingLeft:20,flexDirection:"row"},creditsTextContainer:{paddingLeft:15,paddingTop:5,flexDirection:"column",flexWrap:"wrap"},button:{width:"98%",height:40,borderRadius:8,flexDirection:"row",justifyContent:"center",alignItems:"center"},content:{fontSize:14,paddingRight:8,paddingTop:8,paddingBottom:8},messageContent:{color:c.ThemeColorMap.TEXT_NORMAL,fontFamily:c.Fonts.DISPLAY_NORMAL,opacity:.985,fontSize:16},text:{fontSize:16,fontFamily:c.Fonts.DISPLAY_BOLD},mainText:{opacity:.975,letterSpacing:.25},safeText:{color:c.ThemeColorMap.TEXT_NORMAL},dangerousText:{color:c.ThemeColorMap.TEXT_MUTED},fallback:{color:c.ThemeColorMap.BACKGROUND_SECONDARY_ALT},systemText:{fontSize:12,paddingVertical:2,paddingRight:4},subheaderText:{color:c.ThemeColorMap.HEADER_SECONDARY,textAlign:"center",margin:10,marginBottom:50,letterSpacing:.25,fontFamily:c.Fonts.PRIMARY_BOLD,fontSize:14},sectionWrapperText:{color:c.ThemeColorMap.HEADER_SECONDARY,paddingLeft:"5.5%",paddingRight:10,marginBottom:10,letterSpacing:.25,fontFamily:c.Fonts.PRIMARY_BOLD,fontSize:12},creditsMainText:{opacity:.975,letterSpacing:.25,fontFamily:c.Fonts.DISPLAY_NORMAL},creditsHeader:{color:c.ThemeColorMap.HEADER_PRIMARY,fontFamily:c.Fonts.DISPLAY_BOLD,fontSize:25,letterSpacing:.25},creditsSubHeader:{color:c.ThemeColorMap.HEADER_SECONDARY,opacity:.975,fontSize:12.75},timestamp:{color:c.ThemeColorMap.HEADER_PRIMARY,fontFamily:c.Fonts.DISPLAY_NORMAL,opacity:.985,fontSize:12,marginLeft:4,marginTop:M/12},authorName:{color:c.ThemeColorMap.HEADER_PRIMARY,fontFamily:c.Fonts.DISPLAY_BOLD,fontSize:M,letterSpacing:.25,marginTop:-3},avatarContainer:{display:"flex",flexDirection:"row",flex:0,alignSelf:"flex-start"},avatarAuthor:{width:M,height:M,borderRadius:100,marginTop:1},badge:{width:M*.85,height:M*.85,marginTop:1,marginLeft:4},icon:{width:16,height:16,color:c.ThemeColorMap.INTERACTIVE_NORMAL},systemIcon:{width:12,height:12,marginHorizontal:4},dangerousIcon:{tintColor:c.ThemeColorMap.TEXT_MUTED},creditsImage:{width:75,height:75,borderRadius:10},authContainer:{backgroundColor:c.ThemeColorMap.BACKGROUND_MOBILE_SECONDARY,flex:.5},authCard:{backgroundColor:c.ThemeColorMap.BACKGROUND_MOBILE_PRIMARY,color:c.ThemeColorMap.TEXT_NORMAL},authHeader:{backgroundColor:c.ThemeColorMap.BACKGROUND_MOBILE_SECONDARY,shadowColor:"transparent",elevation:0},authText:{color:c.ThemeColorMap.HEADER_PRIMARY,fontFamily:c.Fonts.PRIMARY_NORMAL,fontSize:16,marginLeft:16,backgroundColor:"transparent"}}),re=Ee.createStackNavigator();var Oe=({component:e=y}={})=>t.createElement(Te.NavigationContainer,{independent:!0},t.createElement(re.Navigator,{initialRouteName:"ReviewDB",style:r.authContainer,screenOptions:{cardOverlayEnabled:!1,cardShadowEnabled:!1,cardStyle:r.authCard,headerStyle:r.authHeader,headerTitleContainerStyle:{color:c.ThemeColorMap.HEADER_PRIMARY},headerTitleAlign:"center",safeAreaInsets:{top:0}}},t.createElement(re.Screen,{name:"",component:()=>t.createElement(t.Fragment,null,t.createElement(y,{style:{marginTop:-45}}),t.createElement(e,null)),options:{headerLeft:()=>t.createElement(S,{onPress:()=>U.pop()},t.createElement(T,{style:r.authText},"Close"))}})));const K=()=>C(d.name,"rdbToken",""),Ue=k("OAuth2AuthorizeModal");let Y=!1;const J=()=>Y?!1:K()?!0:(Y=!0,_.show({title:"Unauthorized",body:"You have not set your ReviewDB Auth Token. Please do so in the settings panel.",confirmText:"Get ReviewDB Token",cancelText:"Close",onConfirm:()=>{se({pageName:"",pagePanel:ae}),Y=!1},onCancel:()=>{Y=!1}}),!1),ae=()=>t.createElement(Ue,{clientId:"915703782174752809",redirectUri:d.links.api+"/api/reviewdb/auth",scopes:["identify"],responseType:"code",permissions:0n,cancelCompletesFlow:!1,callback:async function({location:e}){try{const n=new URL(e);n.searchParams.append("returnType","json"),n.searchParams.append("clientMod","enmity");const o=await fetch(n,{headers:{accept:"application/json"}}),{token:i,success:s,message:a}=await o.json();throw s&&P(d.name,"rdbToken",i),new Error(`Status returned by backend was not OK: ${a}`)}catch(n){U.pop(),console.error(`[${d.name}] Error when authorizing account: ${n}`)}},dismissOAuthModal:()=>U.pop()}),se=({pageName:e,pagePanel:n})=>C(d.name,"rdbToken","")==""?U.push(Oe,{component:n}):f.open({content:"You already have a token set!",source:h.Self});async function ze(e,n){try{const o=await fetch(`${d.links.api}/api/reviewdb/users/${e}/reviews?offset=${n}`,{method:"GET"}),{reviews:i,success:s,message:a}=await o.json();if(s)return i;throw new Error("Error when getting reviews: "+a)}catch(o){f.open({content:"Error while fetching reviews. Check logs for more info.",source:h.Failed}),console.log("[ReviewDB] Error while fetching reviews:",o)}}async function Ye(e,n){if(!J())return new Promise((s,a)=>a("Invalid token!"));const o=await fetch(`${d.links.api}/api/reviewdb/users/${n}/reviews`,{method:"PUT",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}),{message:i}=await o.json();return i&&f.open({content:i+"!",source:h.Pencil}),console.log("[ReviewDB]",Response[i]??Response.error)}async function Ve(e,n){if(!J())return new Promise((s,a)=>a("Invalid token!"));const o=await fetch(`${d.links.api}/api/reviewdb/users/${n}/reviews`,{method:"DELETE",headers:new Headers({"Content-Type":"application/json",Accept:"application/json"}),body:JSON.stringify({reviewid:e,token:K()})}),{message:i}=await o.json().catch(console.log);f.open({content:(i??"Response is empty")+"!",source:h.Success})}async function He(e){if(!J())return new Promise((i,s)=>s("Invalid token!"));const n=await fetch(`${d.links.api}/api/reviewdb/reports`,{method:"PUT",headers:new Headers({"Content-Type":"application/json",Accept:"application/json"}),body:JSON.stringify({reviewid:e,token:K()})}),{message:o}=await n.json();f.open({content:(o??"Response is empty")+"!",source:h.Success})}const je=(e,n,o)=>o.includes(n)??e.sender.discordID==n,Ge=({title:e,userID:n,confirmText:o="Confirm",onConfirm:i,onAny:s,existing:a,placeholder:m})=>{const g=O.getUser(n);_.show({title:e,children:t.createElement(t.Fragment,null,t.createElement(T,{style:[r.text,r.safeText,r.mainText,r.buttonText,{paddingTop:10,marginLeft:0}]},"Reviewing: ",g?.username,"#",g?.discriminator),t.createElement(y,{style:{paddingHorizontal:0,paddingVertical:-5,marginTop:10,borderRadius:10,borderWidth:1,borderColor:"rgba(120, 120, 120, 0.3)"}},t.createElement(y,{style:{marginBottom:-25}}),t.createElement(ie,{placeholder:m??"",value:a??C(d.name,"inputValue",""),onChange:u=>P(d.name,"inputValue",u),autoFocus:!0,showBorder:!0,multiline:!0,numberOfLines:2}))),confirmText:o,cancelText:"Cancel",onConfirm:()=>{i(C(d.name,"inputValue",""),u=>P(d.name,"inputValue",u)),s?.(n)},onCancel:()=>{P(d.name,"inputValue",""),s?.(n)}})},{useThemeContext:We}=v("useThemeContext"),{meta:{resolveSemanticColor:V}}=v("colors","meta"),{ProfileGradientCard:Xe}=v("ProfileGradientCard"),{triggerHaptic:Ke}=v("triggerHaptic"),Je=({onPress:e,innerStyle:n,textStyle:o,dangerous:i,contextStyles:s,text:a,image:m,disabled:g,useImage:u=!0,useText:w=!0,textDirection:p="right"})=>{const R=w&&a&&typeof a=="string"?()=>t.createElement(T,{style:[r.text,i?s.dangerousText:s.safeText,o]},a):a;return t.createElement(S,{style:[r.button,n,g?{opacity:.5}:{}],onPress:e??console.log("No press function provided."),disabled:g},p==="left"&&t.createElement(R,null),u&&t.createElement(b.Icon,{source:x(m),style:[r.icon,i?s.dangerousIcon:s.safeIcon,o?.fontSize?{width:o.fontSize+4,height:o.fontSize+4}:{},p==="right"?{marginRight:4}:{marginLeft:4}]}),p==="right"&&t.createElement(R,null))};function D({text:e,image:n="ic_new_group",dangerous:o,onPress:i,style:s,innerStyle:a,textStyle:m,useGradient:g,useImage:u,useText:w,disabled:p,textDirection:R}){const E=We(),F={container:{width:"98%",padding:1,borderRadius:9},safeText:{color:V(E.theme,c.ThemeColorMap.TEXT_NORMAL)},dangerousText:{color:V(E.theme,c.ThemeColorMap.TEXT_MUTED)},safeIcon:{tintColor:V(E.theme,c.ThemeColorMap.INTERACTIVE_NORMAL)},dangerousIcon:{tintColor:V(E.theme,c.ThemeColorMap.TEXT_MUTED)}},Z=()=>t.createElement(Je,{onPress:()=>{i?.(),Ke()},innerStyle:a,textStyle:m,dangerous:o,contextStyles:F,text:e,image:n,disabled:p,useImage:u,useText:w,textDirection:R});return g?t.createElement(Xe,{style:[F.container,s],fallbackBackground:r.fallback.color},t.createElement(Z,null)):t.createElement(Z,null)}const[{ProfileGradientCard:qe},Ze,{useThemeContext:Qe},{meta:{resolveSemanticColor:H}}]=Q(I.byProps("ProfileGradientCard"),I.byProps("fetchProfile"),I.byProps("useThemeContext"),I.byProps("colors","meta"));var le=({review:e,onSubmit:n})=>{const o=Qe(),i={author:{color:H(o.theme,c.ThemeColorMap.HEADER_PRIMARY)},timestamp:{color:H(o.theme,c.ThemeColorMap.HEADER_PRIMARY)},system:{color:H(o.theme,c.ThemeColorMap.TEXT_MUTED)},content:{color:H(o.theme,c.ThemeColorMap.TEXT_NORMAL)}},[s,a]=t.useState();return t.useEffect(()=>{Boolean(e.timestamp)&&a(new Date(e.timestamp*1e3).toLocaleString(void 0,{hour:"numeric",minute:"numeric",day:"numeric",month:"numeric",year:"numeric"}).split(",").map(m=>m.replace(/ /g,"")).reverse().join(" "))}),t.createElement(qe,{style:r.reviewContainer,fallbackBackground:r.fallback.color},t.createElement(S,{onPress:n},t.createElement(y,{style:{padding:8}},t.createElement(S,{onPress:()=>{O.getUser(e.sender.discordID)?W.showUserProfile({userId:e.sender.discordID}):Ze.getUser(e.sender.discordID).then(()=>W.showUserProfile({userId:e.sender.discordID}))},style:r.avatarContainer},Boolean(e.sender.profilePhoto)&&t.createElement(z,{loading:"lazy",style:r.avatarAuthor,source:{uri:e.sender.profilePhoto?.replace("?size=128","?size=48")}}),Boolean(e.sender.username)&&t.createElement(y,{style:{marginLeft:6}},t.createElement(T,{style:[r.mainText,r.authorName,i.author]},e.sender.username)),e.type===3&&t.createElement(S,{style:r.systemContainer,onPress:()=>f.open({source:h.Shield,content:"This is an automated system review."})},t.createElement(b.Icon,{source:h.Warning,style:[r.systemIcon,r.dangerousIcon]}),t.createElement(T,{style:[r.text,r.mainText,r.dangerousText,r.systemText,i.system]},"SYSTEM")),Boolean(e.sender.badges?.length>0)&&e.sender.badges.map(m=>t.createElement(S,{onPress:()=>f.open({source:{uri:m.icon},content:m.name})},t.createElement(z,{loading:"lazy",style:r.badge,source:{uri:m.icon}}))),Boolean(e.timestamp)&&t.createElement(T,{style:[r.mainText,r.timestamp,i.timestamp]},s)),t.createElement(T,{style:[r.messageContent,i.content]},e.comment??"Invalid message content."))))};const ce=(fe(e=>e.default?.render?.name=="ActionSheet")??{default:{render:!1}}).default.render,et=v("BottomSheetScrollView").BottomSheetScrollView,tt=v("openLazy","hideActionSheet"),me=v("setString");function nt(e,n){ce?tt?.openLazy(new Promise(o=>o({default:e})),"ReviewActionSheet",n):f.open({content:"You cannot open ActionSheets on this version! Upgrade to 163+",source:h.Failed})}function ot({onConfirm:e,review:n,currentUserID:o,admins:i}){return t.createElement(ce,null,t.createElement(et,{contentContainerStyle:{marginBottom:10}},t.createElement(y,{style:{flexDirection:"column",paddingLeft:10,paddingRight:10,marginTop:14,marginBottom:14,alignItems:"center",justifyContent:"center"}},t.createElement(le,{review:n,onSubmit:()=>{}}),Boolean(n.comment)&&t.createElement(D,{text:"Copy Text",image:"ic_message_copy",onPress:()=>{me.setString(n.comment),f.open({content:"Copied to clipboard!",source:h.Success}),e()},style:{marginTop:8},useGradient:!0}),Boolean(n.id)&&t.createElement(D,{text:"Copy ID",image:"ic_copy_id",onPress:()=>{me.setString(n.id?.toString()),f.open({content:"Copied to clipboard!",source:h.Success}),e()},style:{marginTop:8},useGradient:!0}),je(n,o,i)&&t.createElement(D,{text:"Delete Review",image:"ic_message_delete",dangerous:!0,onPress:()=>{Ve(n.id,n.sender.discordID).then(()=>{e()})},style:{marginTop:8},useGradient:!0}),Boolean(n.id)&&t.createElement(D,{text:"Report Review",image:"ic_warning_24px",dangerous:!0,onPress:()=>{He(n.id).then(()=>{e()})},style:{marginTop:8},useGradient:!0}))))}const it=v("openLazy","hideActionSheet"),rt=k("UserProfileSection"),{FlatList:at}=v("FlatList"),q=50,de=({existingReview:e,userID:n})=>t.createElement(y,{style:r.container},t.createElement(D,{text:`${e?"Update":"Create"} Review`,image:e?"ic_edit_24px":"img_nitro_star",onPress:()=>{Ge({title:`${e?"Update":"Create"} Review`,confirmText:e?"Update":"Create",placeholder:`Tap here to ${e?"update your existing review":"create a new review"}...`,onConfirm:(o,i)=>{o?Ye({comment:o.trim(),token:C(d.name,"rdbToken","")},n).then(()=>i("")):f.open({content:"Please enter a review before submitting.",source:h.Failed})},onAny:o=>setTimeout(()=>W.showUserProfile({userId:o})),userID:n,existing:e?e?.comment:void 0})},style:{marginBottom:10},textStyle:{fontSize:16},useGradient:!0}));var st=({userID:e,currentUserID:n=O.getCurrentUser()?.id,admins:o=[]})=>{const[i,s]=t.useState(0),[a,m]=t.useState([]),[g,u]=t.useState(null);let w=0;return t.useEffect(()=>{let p=!1;w++;let R=w;return setTimeout(()=>{w===R&&ze(e,i*q).then(E=>{if(E){if(p)return;if(E.length<=0&&i!==0)return f.open({content:"Exceeded maximum pages! Returning to 1.",source:h.Warning}),s(0);m(E),!g&&u(E?.find(F=>F.sender.discordID===n)),w=0}})},300),()=>(p=!0)&&void 0},[i]),t.createElement(rt,{showContainer:!0,title:"Reviews",style:{marginBottom:16}},t.createElement(de,{existingReview:g,userID:e}),t.createElement(D,{text:"Refresh Reviews",image:"ic_message_retry",onPress:()=>s(p=>p),style:{marginVertical:0},innerStyle:{height:"auto",paddingBottom:12,marginTop:-4},textStyle:{fontSize:12},dangerous:!0}),t.createElement(y,{style:{flexDirection:"row",marginHorizontal:12}},t.createElement(D,{text:"Back",image:"ic_arrow_back_24px",onPress:()=>s(p=>p>0?p-1:p),style:{flex:.3},useGradient:!0,textDirection:"right",disabled:i<=0,textStyle:{fontSize:16,marginRight:4}}),t.createElement(D,{text:`Page ${i+1}`,onPress:()=>f.open({content:`Current Page: ${i+1}`,source:h.Self}),style:{flex:.4,marginLeft:12},useGradient:!0,useImage:!1}),t.createElement(D,{text:"Next",image:"ic_arrow_forward_24px",onPress:()=>s(p=>a.length>=q?p+1:p),style:{flex:.3,marginLeft:12},useGradient:!0,textDirection:"left",disabled:a.length<q,textStyle:{fontSize:16,marginLeft:4}})),t.createElement(y,{style:r.container},a&&a.length>0?t.createElement(at,{data:a,renderItem:({item:p})=>t.createElement(le,{review:p,onSubmit:()=>nt(ot,{onConfirm:()=>it?.hideActionSheet(),review:p,currentUserID:n,admins:o})}),keyExtractor:p=>p.id.toString()}):t.createElement(T,{style:[r.text,r.safeText,r.content,{alignSelf:"center"}]},"No reviews yet. You could be the first!")),a&&a.length>5&&t.createElement(de,{existingReview:g,userID:e}))};const j=window.enmity.modules.common.Components.General.Animated,[ue,lt]=Q(I.byProps("transitionToGuild","openURL"),I.byProps("setString"));var ct=({manifest:e})=>{const n=t.useRef(new j.Value(1)).current,o=()=>{j.spring(n,{toValue:1.1,duration:250,useNativeDriver:!0}).start()},i=()=>{j.spring(n,{toValue:1,duration:250,useNativeDriver:!0}).start()},s=()=>ue.openURL(e.links.source),a={transform:[{scale:n}]};return t.createElement(y,{style:r.creditsContainer},t.createElement(S,{onPress:s,onPressIn:o,onPressOut:i},t.createElement(j.View,{style:[a]},t.createElement(z,{style:[r.creditsImage],source:{uri:"https://cdn.spin.rip/r/l9uevwe4ia0.jpg"}}))),t.createElement(y,{style:r.creditsTextContainer},t.createElement(S,{onPress:s},t.createElement(T,{style:[r.creditsMainText,r.creditsHeader]},e.name)),t.createElement(y,{style:{flexDirection:"row"}},t.createElement(T,{style:[r.creditsMainText,r.creditsSubHeader]},"A plugin by"),e.authors.map((m,g,u)=>t.createElement(S,{onPress:()=>ue.openURL(m.profile)},t.createElement(T,{style:[r.creditsMainText,r.safeText,r.creditsSubHeader,{paddingLeft:4,fontFamily:c.Fonts.DISPLAY_BOLD,flexDirection:"row"}]},m.name,g<u.length-1?",":null)))),t.createElement(y,null,t.createElement(S,{style:{flexDirection:"row"},onPress:()=>{lt.setString(`**${e.name}** v${e.version}`),ee.displayToast("plugin name and version","clipboard")}},t.createElement(T,{style:[r.creditsMainText,r.creditsSubHeader]},"Version:"),t.createElement(T,{style:[r.creditsMainText,r.creditsSubHeader,{paddingLeft:4,fontFamily:c.Fonts.DISPLAY_BOLD}]},e.version)))))},pe=({label:e,children:n,style:o})=>t.createElement(y,{style:[o,{marginTop:10}]},t.createElement(T,{style:r.sectionWrapperText},e.toUpperCase()),n);const mt=v("openURL","transitionToGuild"),dt=parseInt(Ie.split(".")[0])>163?15:0;var ut=({manifest:e,renderPage:n})=>t.createElement(Be,null,t.createElement(ct,{manifest:e}),t.createElement(pe,{label:"Authentication"},t.createElement(y,{style:r.formrowContainer},t.createElement(b,{label:"Authenticate with ReviewDB",subLabel:"Open a modal to authenticate your account with the ReviewDB API.",trailing:t.createElement(b.Arrow,{style:{marginLeft:-dt}}),leading:t.createElement(b.Icon,{source:h.Self}),onPress:()=>n(null,{pageName:"",pagePanel:ae})}),t.createElement(oe,null),t.createElement(ie,{placeholder:"Your token goes here",value:C(e.name,"rdbToken",""),onChange:o=>/^[A-Za-z0-9]{30,32}$/.test(o)?P(e.name,"rdbToken",o.trim()):P(e.name,"rdbToken",""),title:"ReviewDB Authentication Token"}))),t.createElement(pe,{label:"Source"},t.createElement(y,{style:r.formrowContainer},t.createElement(b,{label:"Check for Updates",subLabel:`Check for any plugin updates for ${e.name}.`,leading:t.createElement(b.Icon,{source:h.Copy}),trailing:b.Arrow,onPress:()=>Ne.checkForUpdates()}),t.createElement(oe,null),t.createElement(b,{label:"Source",subLabel:`View ${e.name} source code`,leading:t.createElement(b.Icon,{source:h.Open}),trailing:b.Arrow,onPress:()=>mt.openURL(e.links.source)}))),t.createElement(T,{style:r.subheaderText},`Version: (${e.version}) Build: (${e.plugin.hash})`));const G=Se(d.name),pt=v("PRIMARY_INFO_TOP_OFFSET","SECONDARY_INFO_TOP_MARGIN","SIDE_PADDING"),gt=k("UserProfileName"),ht=k("ProfileBadges",{all:!0,default:!1}),yt=k("ProfileBadges",{default:!1});let B=C(d.name,"currentUser",void 0),ge=0;const he=()=>{B||ge>=20||(ge++,setTimeout(()=>{if(B=O.getCurrentUser().id,!B)return he();P(d.name,"currentUser",B)},25))},ye={...d,renderPage(e,{pageName:n,pagePanel:o}){return se({pageName:n,pagePanel:o})},async onStart(){he();const e=await fetch(d.links.api+"/admins").then(i=>i.json()),n=await fetch(d.links.api+"/api/reviewdb/badges").then(i=>i.json());if(C(d.name,"rdbToken","")){const i=await(await fetch(d.links.api+"/api/reviewdb/users",{method:"POST",body:JSON.stringify({token:C(d.name,"rdbToken","")}),headers:{"Content-Type":"application/json"}})).json();i.lastReviewID>C(d.name,"lastReviewID",0)&&(f.open({source:h.Pencil,content:"You have new reviews on your profile!"}),P(d.name,"lastReviewID",i.lastReviewID))}const o=({id:i,style:s,res:a})=>{const m=({name:u,image:w,ensure:p})=>{if(p){const R=()=>t.createElement(Fe,{name:u,image:w,size:Array.isArray(s)?s.find(E=>E.paddingVertical&&E.paddingHorizontal)?16:22:16,margin:Array.isArray(s)?4:8});a.props.badges?a.props.badges.push(t.createElement(R,null)):a.props.children.push(t.createElement(R,null))}};n.forEach(u=>{m({ensure:u.discordID===i,name:u?.name,image:u?.icon})});const g=d.authors.find(u=>u.id===i);m({ensure:Boolean(g),name:"Enmity ReviewDB Developer",image:g?.icon})};if(_e>="42235")G.after(yt,"default",(i,[{user:{id:s},style:a}],m)=>{const g=m;if(m||(m=t.createElement(y,{style:[a,{flexDirection:"row",flexWrap:"wrap",alignItems:"flex-end",justifyContent:"flex-end"}],accessibilityRole:"list",accessibilityLabel:"User Badges"}),m.props.children=[]),o({id:s,style:a,res:m}),!g)return m});else for(const i of ht)G.after(i,"default",(s,[{user:{id:a},isEnmity:m,style:g,...u}],w)=>{o({id:a,style:g,res:w})});G.after(pt.default,"type",(i,s,a)=>{const m=be(a,u=>u?.props?.children.find(w=>typeof w?.props?.displayProfile?.userId=="string")&&!u?.props.children.find(w=>w.type===gt)&&u?.type?.displayName==="View"&&Array?.isArray(u?.props?.style))?.props?.children;if(!m)return a;const{userId:g}=m?.find(u=>typeof u?.props?.displayProfile?.userId=="string")?.props?.displayProfile??{};if(!g)return a;m?.push(t.createElement(st,{userID:g,currentUserID:B,admins:e}))})},onStop(){G.unpatchAll()},getSettingsPanel({settings:e}){return t.createElement(ut,{manifest:d,settings:e,renderPage:ye.renderPage})}};we(ye);
