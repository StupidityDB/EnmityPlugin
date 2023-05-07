function P(e,n,o){window.enmity.settings.set(e,n,o)}function v(e,n,o){return window.enmity.settings.get(e,n,o)}function we(e){window.enmity.plugins.registerPlugin(e)}const F={byProps:(...e)=>window.enmity.modules.filters.byProps(...e),byName:(e,n)=>window.enmity.modules.filters.byName(e,n),byTypeName:(e,n)=>window.enmity.modules.filters.byTypeName(e,n),byDisplayName:(e,n)=>window.enmity.modules.filters.byDisplayName(e,n)};function ye(e,n){return window.enmity.modules.getModule(e,n)}function te(...e){return window.enmity.modules.bulk(...e)}function T(...e){return window.enmity.modules.getByProps(...e)}function N(...e){return window.enmity.modules.getByName(...e)}window.enmity.modules.common;const l=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const t=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage;const f=window.enmity.modules.common.Toasts,M=window.enmity.modules.common.Dialog;window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings;const k=window.enmity.modules.common.Users,U=window.enmity.modules.common.Navigation,fe=window.enmity.modules.common.NavigationNative,Te=window.enmity.modules.common.NavigationStack;window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const Ee=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale;const X=window.enmity.modules.common.Profiles;window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes;function Ce(e){return window.enmity.patcher.create(e)}function Se(e,n,o){return window.enmity.utilities.findInReactTree(e,n,o)}var A="ReviewDB",$="2.1.0",be="Review other users. These reviews are visible to anyone with this type of plugin on any platform.",ve=[{name:"spin",id:"308440976723148800",profile:"https://spin.rip/",icon:"https://cdn.discordapp.com/emojis/884010019543212053.gif?size=128"},{name:"Rosie<3",id:"581573474296791211",profile:"https://github.com/acquitelol",icon:"https://cdn.discordapp.com/emojis/884010019543212053.gif?size=128"}],Re="#ff0069",B={hash:"383442e9"},K={source:"https://github.com/StupidityDB/EnmityPlugin/",dist:"https://raw.githubusercontent.com/StupidityDB/EnmityPlugin/master/dist/ReviewDB.js",api:"https://manti.vendicated.dev"},d={name:A,version:$,description:be,authors:ve,color:Re,plugin:B,links:K};function x(e){return window.enmity.assets.getIDByName(e)}var w={Failed:x("Small"),Pencil:x("ic_pencil_24px"),Success:x("ic_selection_checked_24px"),Warning:x("ic_warning_24px"),Copy:x("toast_copy_link"),Open:x("ic_leave_stage"),Clipboard:x("pending-alert"),Shield:x("ic_person_shield"),Self:x("friends_toast_icon")};const xe=(e=.1)=>({shadowColor:"#000",shadowOffset:{width:1,height:4},shadowOpacity:e,shadowRadius:4.65,elevation:8}),De=(e,n)=>{f.open({content:n=="clipboard"?`Copied ${e} to clipboard.`:e,source:n=="clipboard"?w.Clipboard:w.Self})};var J={shadow:xe,displayToast:De},ne=(e,n,o,a,r)=>{try{return e(...n)}catch(s){console.warn(`[${o}] The following error happened when trying to ${a} ${r??"unspecificied label"}: ${s}`);return}};const{native:O}=window.enmity;function Pe(){O.reload()}const Ae=O.version,Ie=O.build;O.device,O.version;async function _e(){await ne(async function(){const e=`${K.dist}?${Math.floor(Math.random()*1001)}.js`,n=await(await fetch(e)).text(),o=n.match(/\d+\.\d+\.\d+/g),a=n.match(/hash:"(.*?)"/);if(!o&&!a)return $e(A,[$,B.hash]);const r=o&&o[0],s=a&&a[1];return r&&r!=$?oe(e,r,"version"):s&&s!=B.hash?oe(e,s,"build"):Me(A,[$,B.hash])},[K,$,B],A,"checking if latest version at","the async check for updates callback")}const oe=(e,n,o)=>{M.show({title:"Update found",body:`A newer ${o} is available for ${A}. ${o=="build"?`
The version will remain at ${$}, but the build will update to ${n}.`:""}
Would you like to install ${o} \`${n}\` now?`,confirmText:"Update",cancelText:"Not now",onConfirm:()=>Le(e,n,o)})},Me=(e,[n,o])=>{console.log(`[${e}] Plugin is on the latest update, which is version ${n} and build ${o}`),M.show({title:"Already on latest",body:`${e} is already updated to the latest version.
Version: \`${n}\`
Build: \`${o}\``,confirmText:"Okay"})},$e=(e,[n,o])=>{console.log(`[${e}] Plugin failed to update to the latest version and build, remaining at ${n} and ${o}`),M.show({title:"Failed",body:`${e} to find a new version or build.
The current versions will remain as follows:
Version: \`${n}\`
Build: \`${o}\``,confirmText:"Okay"})};async function Le(e,n,o){await ne(async function(){window.enmity.plugins.installPlugin(e,({data:a})=>{a=="installed_plugin"||a=="overridden_plugin"?M.show({title:`Updated ${A}`,body:`Successfully updated to ${o} \`${n}\`. 
Would you like to reload Discord now?`,confirmText:"Reload",cancelText:"Not now",onConfirm:()=>Pe()}):console.log(`[${A}] Plugin failed to update to ${o} ${n}.`)})},[e,n,o],A,"installing plugin at","new version available")}var Ne={checkForUpdates:_e};const{components:c}=window.enmity;c.Alert,c.Button,c.FlatList;const z=c.Image;c.ImageBackground,c.KeyboardAvoidingView,c.Modal,c.Pressable,c.RefreshControl;const ke=c.ScrollView;c.SectionList,c.StatusBar,c.StyleSheet,c.Switch;const C=c.Text;c.TextInput,c.TouchableHighlight;const R=c.TouchableOpacity;c.TouchableWithoutFeedback,c.Touchable;const y=c.View;c.VirtualizedList,c.Form,c.FormArrow,c.FormCTA,c.FormCTAButton,c.FormCardSection,c.FormCheckbox;const re=c.FormDivider;c.FormHint,c.FormIcon;const ie=c.FormInput;c.FormLabel,c.FormRadio;const S=c.FormRow;c.FormSection,c.FormSelect,c.FormSubLabel;const Be=c.FormSwitch;c.FormTernaryCheckBox,c.FormText,c.FormTextColors,c.FormTextSizes;const Oe=({name:e,image:n,size:o,margin:a})=>{const r={wrapper:{alignItems:"center",flexDirection:"row",justifyContent:"flex-end"},image:{width:o,height:o,resizeMode:"contain",marginLeft:a,marginRight:a+1}};return t.createElement(y,{style:r.wrapper},t.createElement(R,{onPress:()=>f.open({content:e,source:{uri:n}})},t.createElement(z,{style:r.image,source:{uri:n}})))},L=18,i=Ee.createThemedStyleSheet({container:{marginTop:12,marginLeft:12,marginBottom:4,alignSelf:"flex-start",width:"95%"},reviewContainer:{borderRadius:9,padding:1,marginBottom:8,width:"98%"},systemContainer:{marginLeft:4,backgroundColor:l.ThemeColorMap.BACKGROUND_SECONDARY,borderRadius:6,flexDirection:"row",justifyContent:"center",alignItems:"center"},formrowContainer:{width:"90%",marginLeft:"5%",borderRadius:10,backgroundColor:l.ThemeColorMap.BACKGROUND_MOBILE_SECONDARY,...J.shadow()},creditsContainer:{paddingTop:30,paddingLeft:20,flexDirection:"row"},creditsTextContainer:{paddingLeft:15,paddingTop:5,flexDirection:"column",flexWrap:"wrap"},button:{width:"98%",height:40,borderRadius:8,flexDirection:"row",justifyContent:"center",alignItems:"center"},content:{fontSize:14,paddingRight:8,paddingTop:8,paddingBottom:8},messageContent:{color:l.ThemeColorMap.TEXT_NORMAL,fontFamily:l.Fonts.DISPLAY_NORMAL,opacity:.985,fontSize:16},text:{fontSize:16,fontFamily:l.Fonts.DISPLAY_BOLD},mainText:{opacity:.975,letterSpacing:.25},safeText:{color:l.ThemeColorMap.TEXT_NORMAL},dangerousText:{color:l.ThemeColorMap.TEXT_MUTED},fallback:{color:l.ThemeColorMap.BACKGROUND_SECONDARY_ALT},systemText:{fontSize:12,paddingVertical:2,paddingRight:4},subheaderText:{color:l.ThemeColorMap.HEADER_SECONDARY,textAlign:"center",margin:10,marginBottom:50,letterSpacing:.25,fontFamily:l.Fonts.PRIMARY_BOLD,fontSize:14},sectionWrapperText:{color:l.ThemeColorMap.HEADER_SECONDARY,paddingLeft:"5.5%",paddingRight:10,marginBottom:10,letterSpacing:.25,fontFamily:l.Fonts.PRIMARY_BOLD,fontSize:12},creditsMainText:{opacity:.975,letterSpacing:.25,fontFamily:l.Fonts.DISPLAY_NORMAL},creditsHeader:{color:l.ThemeColorMap.HEADER_PRIMARY,fontFamily:l.Fonts.DISPLAY_BOLD,fontSize:25,letterSpacing:.25},creditsSubHeader:{color:l.ThemeColorMap.HEADER_SECONDARY,opacity:.975,fontSize:12.75},timestamp:{color:l.ThemeColorMap.HEADER_PRIMARY,fontFamily:l.Fonts.DISPLAY_NORMAL,opacity:.985,fontSize:12,marginLeft:4,marginTop:L/12},authorName:{color:l.ThemeColorMap.HEADER_PRIMARY,fontFamily:l.Fonts.DISPLAY_BOLD,fontSize:L,letterSpacing:.25,marginTop:-3},avatarContainer:{display:"flex",flexDirection:"row",flex:0,alignSelf:"flex-start"},avatarAuthor:{width:L,height:L,borderRadius:100,marginTop:1},badge:{width:L*.85,height:L*.85,marginTop:1,marginLeft:4},icon:{width:16,height:16,color:l.ThemeColorMap.INTERACTIVE_NORMAL},systemIcon:{width:12,height:12,marginHorizontal:4},dangerousIcon:{tintColor:l.ThemeColorMap.TEXT_MUTED},creditsImage:{width:75,height:75,borderRadius:10},authContainer:{backgroundColor:l.ThemeColorMap.BACKGROUND_MOBILE_SECONDARY,flex:.5},authCard:{backgroundColor:l.ThemeColorMap.BACKGROUND_MOBILE_PRIMARY,color:l.ThemeColorMap.TEXT_NORMAL},authHeader:{backgroundColor:l.ThemeColorMap.BACKGROUND_MOBILE_SECONDARY,shadowColor:"transparent",elevation:0},authText:{color:l.ThemeColorMap.HEADER_PRIMARY,fontFamily:l.Fonts.PRIMARY_NORMAL,fontSize:16,marginLeft:16,backgroundColor:"transparent"}}),ae=Te.createStackNavigator();var Fe=({component:e=y}={})=>t.createElement(fe.NavigationContainer,{independent:!0},t.createElement(ae.Navigator,{initialRouteName:"ReviewDB",style:i.authContainer,screenOptions:{cardOverlayEnabled:!1,cardShadowEnabled:!1,cardStyle:i.authCard,headerStyle:i.authHeader,headerTitleContainerStyle:{color:l.ThemeColorMap.HEADER_PRIMARY},headerTitleAlign:"center",safeAreaInsets:{top:0}}},t.createElement(ae.Screen,{name:"",component:()=>t.createElement(t.Fragment,null,t.createElement(y,{style:{marginTop:-45}}),t.createElement(e,null)),options:{headerLeft:()=>t.createElement(R,{onPress:()=>U.pop()},t.createElement(C,{style:i.authText},"Close"))}})));const q=()=>v(d.name,"rdbToken",""),Ue=N("OAuth2AuthorizeModal");let Y=!1;const Z=()=>Y?!1:q()?!0:(Y=!0,M.show({title:"Unauthorized",body:"You have not set your ReviewDB Auth Token. Please do so in the settings panel.",confirmText:"Get ReviewDB Token",cancelText:"Close",onConfirm:()=>{le({pagePanel:se}),Y=!1},onCancel:()=>{Y=!1}}),!1),se=()=>t.createElement(Ue,{clientId:"915703782174752809",redirectUri:d.links.api+"/api/reviewdb/auth",scopes:["identify"],responseType:"code",permissions:0n,cancelCompletesFlow:!1,callback:async function({location:e}){try{const n=new URL(e);n.searchParams.append("returnType","json"),n.searchParams.append("clientMod","enmity");const o=await fetch(n,{headers:{accept:"application/json"}}),{token:a,success:r,message:s}=await o.json();throw r&&P(d.name,"rdbToken",a),new Error(`Status returned by backend was not OK: ${s}`)}catch(n){U.pop(),console.error(`[${d.name}] Error when authorizing account: ${n}`)}},dismissOAuthModal:()=>U.pop()}),le=({pagePanel:e})=>v(d.name,"rdbToken","")==""?U.push(Fe,{component:e}):f.open({content:"You already have a token set!",source:w.Self});async function ze(e,n){try{let o=0;v(d.name,"showWarning",!0)||(o|=2);const a=await fetch(`${d.links.api}/api/reviewdb/users/${e}/reviews?offset=${n}&flags=${o}`,{method:"GET"}),{reviews:r,success:s,message:u}=await a.json();if(s)return r;throw new Error("Error when getting reviews: "+u)}catch(o){f.open({content:"Error while fetching reviews. Check logs for more info.",source:w.Failed}),console.log("[ReviewDB] Error while fetching reviews:",o)}}async function Ye(e,n){if(!Z())return new Promise((r,s)=>s("Invalid token!"));const o=await fetch(`${d.links.api}/api/reviewdb/users/${n}/reviews`,{method:"PUT",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}),{message:a}=await o.json();return a&&f.open({content:a+"!",source:w.Pencil}),console.log("[ReviewDB]",Response[a]??Response.error)}async function Ve(e,n){if(!Z())return new Promise((r,s)=>s("Invalid token!"));const o=await fetch(`${d.links.api}/api/reviewdb/users/${n}/reviews`,{method:"DELETE",headers:new Headers({"Content-Type":"application/json",Accept:"application/json"}),body:JSON.stringify({reviewid:e,token:q()})}),{message:a}=await o.json().catch(console.log);f.open({content:(a??"Response is empty")+"!",source:w.Success})}async function He(e){if(!Z())return new Promise((a,r)=>r("Invalid token!"));const n=await fetch(`${d.links.api}/api/reviewdb/reports`,{method:"PUT",headers:new Headers({"Content-Type":"application/json",Accept:"application/json"}),body:JSON.stringify({reviewid:e,token:q()})}),{message:o}=await n.json();f.open({content:(o??"Response is empty")+"!",source:w.Success})}const Ge=(e,n,o)=>o.includes(n)??e.sender.discordID==n,je=({title:e,userID:n,confirmText:o="Confirm",onConfirm:a,onAny:r,existing:s,placeholder:u})=>{const m=k.getUser(n);M.show({title:e,children:t.createElement(t.Fragment,null,t.createElement(C,{style:[i.text,i.safeText,i.mainText,i.buttonText,{paddingTop:10,marginLeft:0}]},"Reviewing: ",m?.username,"#",m?.discriminator),t.createElement(y,{style:{paddingHorizontal:0,paddingVertical:-5,marginTop:10,borderRadius:10,borderWidth:1,borderColor:"rgba(120, 120, 120, 0.3)"}},t.createElement(y,{style:{marginBottom:-25}}),t.createElement(ie,{placeholder:u??"",value:s??v(d.name,"inputValue",""),onChange:h=>P(d.name,"inputValue",h),autoFocus:!0,showBorder:!0,multiline:!0,numberOfLines:2}))),confirmText:o,cancelText:"Cancel",onConfirm:()=>{a(v(d.name,"inputValue",""),h=>P(d.name,"inputValue",h)),r?.(n)},onCancel:()=>{P(d.name,"inputValue",""),r?.(n)}})},{useThemeContext:We}=T("useThemeContext"),{meta:{resolveSemanticColor:V}}=T("colors","meta"),{ProfileGradientCard:Xe}=T("ProfileGradientCard"),{triggerHaptic:Ke}=T("triggerHaptic"),Je=({onPress:e,innerStyle:n,textStyle:o,dangerous:a,contextStyles:r,text:s,image:u,disabled:m,useImage:h=!0,useText:p=!0,textDirection:E="right"})=>{const b=p&&s&&typeof s=="string"?()=>t.createElement(C,{style:[i.text,a?r.dangerousText:r.safeText,o]},s):s;return t.createElement(R,{style:[i.button,n,m?{opacity:.5}:{}],onPress:e??console.log("No press function provided."),disabled:m},E==="left"&&t.createElement(b,null),h&&t.createElement(S.Icon,{source:x(u),style:[i.icon,a?r.dangerousIcon:r.safeIcon,o?.fontSize?{width:o.fontSize+4,height:o.fontSize+4}:{},E==="right"?{marginRight:4}:{marginLeft:4}]}),E==="right"&&t.createElement(b,null))};function D({text:e,image:n="ic_new_group",dangerous:o,onPress:a,style:r,innerStyle:s,textStyle:u,useGradient:m,useImage:h,useText:p,disabled:E,textDirection:b}){const g=We(),I={container:{width:"98%",padding:1,borderRadius:9},safeText:{color:V(g.theme,l.ThemeColorMap.TEXT_NORMAL)},dangerousText:{color:V(g.theme,l.ThemeColorMap.TEXT_MUTED)},safeIcon:{tintColor:V(g.theme,l.ThemeColorMap.INTERACTIVE_NORMAL)},dangerousIcon:{tintColor:V(g.theme,l.ThemeColorMap.TEXT_MUTED)}},_=()=>t.createElement(Je,{onPress:()=>{a?.(),Ke()},innerStyle:s,textStyle:u,dangerous:o,contextStyles:I,text:e,image:n,disabled:E,useImage:h,useText:p,textDirection:b});return m?t.createElement(Xe,{style:[I.container,r],fallbackBackground:i.fallback.color},t.createElement(_,null)):t.createElement(_,null)}const[{ProfileGradientCard:qe},Ze]=te(F.byProps("ProfileGradientCard"),F.byProps("fetchProfile"));var ce=({review:e,onSubmit:n,contextStyles:o})=>{const[a,r]=t.useState();return t.useEffect(()=>{Boolean(e.timestamp)&&r(new Date(e.timestamp*1e3).toLocaleString(void 0,{hour:"numeric",minute:"numeric",day:"numeric",month:"numeric",year:"numeric"}).split(",").map(s=>s.replace(/ /g,"")).reverse().join(" "))}),t.createElement(qe,{style:i.reviewContainer,fallbackBackground:i.fallback.color},t.createElement(R,{onPress:n},t.createElement(y,{style:{padding:8}},t.createElement(R,{onPress:()=>{k.getUser(e.sender.discordID)?X.showUserProfile({userId:e.sender.discordID}):Ze.getUser(e.sender.discordID).then(()=>X.showUserProfile({userId:e.sender.discordID}))},style:i.avatarContainer},Boolean(e.sender.profilePhoto)&&t.createElement(z,{loading:"lazy",style:i.avatarAuthor,source:{uri:e.sender.profilePhoto?.replace("?size=128","?size=48")}}),Boolean(e.sender.username)&&t.createElement(y,{style:{marginLeft:6}},t.createElement(C,{style:[i.mainText,i.authorName,o.author]},e.sender.username)),e.type===3&&t.createElement(R,{style:i.systemContainer,onPress:()=>f.open({source:w.Shield,content:"This is an automated system review."})},t.createElement(S.Icon,{source:w.Warning,style:[i.systemIcon,i.dangerousIcon]}),t.createElement(C,{style:[i.text,i.mainText,i.dangerousText,i.systemText,o.system]},"SYSTEM")),Boolean(e.sender.badges?.length>0)&&e.sender.badges.map(s=>t.createElement(R,{onPress:()=>f.open({source:{uri:s.icon},content:s.name})},t.createElement(z,{loading:"lazy",style:i.badge,source:{uri:s.icon}}))),Boolean(e.timestamp)&&t.createElement(C,{style:[i.mainText,i.timestamp,o.timestamp]},a)),t.createElement(C,{style:[i.messageContent,o.content]},e.comment??"Invalid message content."))))};const me=(ye(e=>e.default?.render?.name=="ActionSheet")??{default:{render:!1}}).default.render,Qe=T("BottomSheetScrollView").BottomSheetScrollView,et=T("openLazy","hideActionSheet"),de=T("setString"),{useThemeContext:tt}=T("useThemeContext"),{meta:{resolveSemanticColor:H}}=T("colors","meta");function nt(e,n){me?et?.openLazy(new Promise(o=>o({default:e})),"ReviewActionSheet",n):f.open({content:"You cannot open ActionSheets on this version! Upgrade to 163+",source:w.Failed})}function ot({onConfirm:e,review:n,currentUserID:o,admins:a}){const r=tt(),s={author:{color:H(r.theme,l.ThemeColorMap.HEADER_PRIMARY)},timestamp:{color:H(r.theme,l.ThemeColorMap.HEADER_PRIMARY)},system:{color:H(r.theme,l.ThemeColorMap.TEXT_MUTED)},content:{color:H(r.theme,l.ThemeColorMap.TEXT_NORMAL)}};return t.createElement(me,null,t.createElement(Qe,{contentContainerStyle:{marginBottom:10}},t.createElement(y,{style:{flexDirection:"column",paddingLeft:10,paddingRight:10,marginTop:14,marginBottom:14,alignItems:"center",justifyContent:"center"}},t.createElement(ce,{review:n,onSubmit:()=>{},contextStyles:s}),Boolean(n.comment)&&t.createElement(D,{text:"Copy Text",image:"ic_message_copy",onPress:()=>{de.setString(n.comment),f.open({content:"Copied to clipboard!",source:w.Success}),e()},style:{marginTop:8},useGradient:!0}),Boolean(n.id)&&t.createElement(D,{text:"Copy ID",image:"ic_copy_id",onPress:()=>{de.setString(n.id?.toString()),f.open({content:"Copied to clipboard!",source:w.Success}),e()},style:{marginTop:8},useGradient:!0}),Ge(n,o,a)&&t.createElement(D,{text:"Delete Review",image:"ic_message_delete",dangerous:!0,onPress:()=>{Ve(n.id,n.sender.discordID).then(()=>{e()})},style:{marginTop:8},useGradient:!0}),Boolean(n.id)&&t.createElement(D,{text:"Report Review",image:"ic_warning_24px",dangerous:!0,onPress:()=>{He(n.id).then(()=>{e()})},style:{marginTop:8},useGradient:!0}))))}const rt=T("openLazy","hideActionSheet"),it=N("UserProfileSection"),{useThemeContext:at}=T("useThemeContext"),{meta:{resolveSemanticColor:G}}=T("colors","meta"),{FlatList:st}=T("FlatList"),Q=50,ue=({existingReview:e,userID:n})=>t.createElement(y,{style:i.container},t.createElement(D,{text:`${e?"Update":"Create"} Review`,image:e?"ic_edit_24px":"img_nitro_star",onPress:()=>{je({title:`${e?"Update":"Create"} Review`,confirmText:e?"Update":"Create",placeholder:`Tap here to ${e?"update your existing review":"create a new review"}...`,onConfirm:(o,a)=>{if(o)return Ye({comment:o.trim(),token:v(d.name,"rdbToken","")},n).then(()=>a(""));f.open({content:"Please enter a review before submitting.",source:w.Failed})},onAny:o=>setTimeout(()=>X.showUserProfile({userId:o})),userID:n,existing:e?.comment})},style:{marginBottom:10},textStyle:{fontSize:16},useGradient:!0}));var lt=({userID:e,currentUserID:n=k.getCurrentUser()?.id,admins:o=[]})=>{const[a,r]=t.useState(0),[s,u]=t.useState([]),[m,h]=t.useState(null),p=at(),E={author:{color:G(p.theme,l.ThemeColorMap.HEADER_PRIMARY)},timestamp:{color:G(p.theme,l.ThemeColorMap.HEADER_PRIMARY)},system:{color:G(p.theme,l.ThemeColorMap.TEXT_MUTED)},content:{color:G(p.theme,l.ThemeColorMap.TEXT_NORMAL)}};let b=0;return t.useEffect(()=>{let g=!1;b++;let I=b;return setTimeout(()=>{b===I&&ze(e,a*Q).then(_=>{if(_){if(g)return;if(_.length<=0&&a!==0)return f.open({content:"Exceeded maximum pages! Returning to 1.",source:w.Warning}),r(0);u(_.reverse()),!m&&h(_.find(he=>he.sender.discordID===n)),b=0}})},300),()=>(g=!0)&&void 0},[a]),t.createElement(it,{showContainer:!0,title:"Reviews",style:{marginBottom:16}},t.createElement(ue,{existingReview:m,userID:e}),t.createElement(D,{text:"Refresh Reviews",image:"ic_message_retry",onPress:()=>{r(g=>g),f.open({content:`Refreshed reviews at Page ${a+1}!`,source:w.Success})},style:{marginVertical:0},innerStyle:{height:"auto",paddingBottom:12,marginTop:-4},textStyle:{fontSize:12},dangerous:!0}),t.createElement(y,{style:{flexDirection:"row",marginHorizontal:12}},t.createElement(D,{text:"Back",image:"ic_arrow_back_24px",onPress:()=>r(g=>g>0?g-1:g),style:{flex:.3},useGradient:!0,textDirection:"right",disabled:a<=0,textStyle:{fontSize:16,marginRight:4}}),t.createElement(D,{text:`Page ${a+1}`,onPress:()=>f.open({content:`Current Page: ${a+1}`,source:w.Self}),style:{flex:.4,marginLeft:12},useGradient:!0,useImage:!1}),t.createElement(D,{text:"Next",image:"ic_arrow_forward_24px",onPress:()=>r(g=>s.length>=Q?g+1:g),style:{flex:.3,marginLeft:12},useGradient:!0,textDirection:"left",disabled:s.length<Q,textStyle:{fontSize:16,marginLeft:4}})),t.createElement(y,{style:i.container},s&&s.length>0?t.createElement(st,{data:s,renderItem:({item:g})=>t.createElement(ce,{review:g,onSubmit:()=>nt(ot,{onConfirm:()=>rt?.hideActionSheet(),review:g,currentUserID:n,admins:o}),contextStyles:E}),keyExtractor:g=>g.id.toString()}):t.createElement(C,{style:[i.text,i.safeText,i.content,{alignSelf:"center"}]},"No reviews yet. You could be the first!")),s&&s.length>5&&t.createElement(ue,{existingReview:m,userID:e}))};const j=window.enmity.modules.common.Components.General.Animated,[pe,ct]=te(F.byProps("transitionToGuild","openURL"),F.byProps("setString"));var mt=({manifest:e})=>{const n=t.useRef(new j.Value(1)).current,o=()=>{j.spring(n,{toValue:1.1,duration:250,useNativeDriver:!0}).start()},a=()=>{j.spring(n,{toValue:1,duration:250,useNativeDriver:!0}).start()},r=()=>pe.openURL(e.links.source),s={transform:[{scale:n}]};return t.createElement(y,{style:i.creditsContainer},t.createElement(R,{onPress:r,onPressIn:o,onPressOut:a},t.createElement(j.View,{style:[s]},t.createElement(z,{style:[i.creditsImage],source:{uri:"https://cdn.spin.rip/r/l9uevwe4ia0.jpg"}}))),t.createElement(y,{style:i.creditsTextContainer},t.createElement(R,{onPress:r},t.createElement(C,{style:[i.creditsMainText,i.creditsHeader]},e.name)),t.createElement(y,{style:{flexDirection:"row"}},t.createElement(C,{style:[i.creditsMainText,i.creditsSubHeader]},"A plugin by"),e.authors.map((u,m,h)=>t.createElement(R,{onPress:()=>pe.openURL(u.profile)},t.createElement(C,{style:[i.creditsMainText,i.safeText,i.creditsSubHeader,{paddingLeft:4,fontFamily:l.Fonts.DISPLAY_BOLD,flexDirection:"row"}]},u.name,m<h.length-1?",":null)))),t.createElement(y,null,t.createElement(R,{style:{flexDirection:"row"},onPress:()=>{ct.setString(`**${e.name}** v${e.version}`),J.displayToast("plugin name and version","clipboard")}},t.createElement(C,{style:[i.creditsMainText,i.creditsSubHeader]},"Version:"),t.createElement(C,{style:[i.creditsMainText,i.creditsSubHeader,{paddingLeft:4,fontFamily:l.Fonts.DISPLAY_BOLD}]},e.version)))))},ee=({label:e,children:n,style:o})=>t.createElement(y,{style:[o,{marginTop:10}]},t.createElement(C,{style:i.sectionWrapperText},e.toUpperCase()),n);const dt=T("openURL","transitionToGuild"),ut=parseInt(Ae.split(".")[0])>163?15:0;var pt=({manifest:e})=>t.createElement(ke,null,t.createElement(mt,{manifest:e}),t.createElement(ee,{label:"Authentication"},t.createElement(y,{style:i.formrowContainer},t.createElement(S,{label:"Authenticate with ReviewDB",subLabel:"Open a modal to authenticate your account with the ReviewDB API.",trailing:t.createElement(S.Arrow,{style:{marginLeft:-ut}}),leading:t.createElement(S.Icon,{source:w.Self}),onPress:()=>le({pagePanel:se})}),t.createElement(re,null),t.createElement(ie,{placeholder:"Your token goes here",value:v(e.name,"rdbToken",""),onChange:n=>/^[A-Za-z0-9]{30,32}$/.test(n)?P(e.name,"rdbToken",n.trim()):P(e.name,"rdbToken",""),title:"ReviewDB Authentication Token"}))),t.createElement(ee,{label:"Preferences"},t.createElement(y,{style:i.formrowContainer},t.createElement(S,{label:"Show warning",leading:t.createElement(S.Icon,{source:w.Warning}),subLabel:"Display warning to be respectful to other users at the top of the review list",onLongPress:()=>J.displayToast("Shows a warning at the top of the reviews list reminding you to be respectful to other users.","tooltip"),trailing:()=>t.createElement(Be,{value:v(e.name,"showWarning",!0),onValueChange:n=>P(e.name,"showWarning",n)})}))),t.createElement(ee,{label:"Source"},t.createElement(y,{style:i.formrowContainer},t.createElement(S,{label:"Check for Updates",subLabel:`Check for any plugin updates for ${e.name}.`,leading:t.createElement(S.Icon,{source:w.Copy}),trailing:S.Arrow,onPress:()=>Ne.checkForUpdates()}),t.createElement(re,null),t.createElement(S,{label:"Source",subLabel:`View ${e.name} source code`,leading:t.createElement(S.Icon,{source:w.Open}),trailing:S.Arrow,onPress:()=>dt.openURL(e.links.source)}))),t.createElement(C,{style:i.subheaderText},`Version: (${e.version}) Build: (${e.plugin.hash})`));const W=Ce(d.name),gt=T("PRIMARY_INFO_TOP_OFFSET","SECONDARY_INFO_TOP_MARGIN","SIDE_PADDING"),ht=N("UserProfileName"),ge=T("_currentDispatchActionType"),wt=N("ProfileBadges",{all:!0,default:!1}),yt=N("ProfileBadges",{default:!1}),ft={...d,async onStart(){const e=await fetch(d.links.api+"/admins").then(r=>r.json()),n=await fetch(d.links.api+"/api/reviewdb/badges").then(r=>r.json());if(v(d.name,"rdbToken","")){const r=await(await fetch(d.links.api+"/api/reviewdb/users",{method:"POST",body:JSON.stringify({token:v(d.name,"rdbToken","")}),headers:{"Content-Type":"application/json"}})).json();r.lastReviewID>v(d.name,"lastReviewID",0)&&(f.open({source:w.Pencil,content:"You have new reviews on your profile!"}),P(d.name,"lastReviewID",r.lastReviewID))}const o=({id:r,style:s,res:u})=>{const m=({name:p,image:E,ensure:b})=>{if(b){const g=()=>t.createElement(Oe,{name:p,image:E,size:Array.isArray(s)?s.find(I=>I.paddingVertical&&I.paddingHorizontal)?16:22:16,margin:Array.isArray(s)?4:8});u.props.badges?u.props.badges.push(t.createElement(g,null)):u.props.children.push(t.createElement(g,null))}};n.forEach(p=>{m({ensure:p.discordID===r,name:p?.name,image:p?.icon})});const h=d.authors.find(p=>p.id===r);m({ensure:Boolean(h),name:"Enmity ReviewDB Developer",image:h?.icon})};if(Ie>="42235")W.after(yt,"default",(r,[{user:{id:s},style:u}],m)=>{const h=m;if(m||(m=t.createElement(y,{style:[u,{flexDirection:"row",flexWrap:"wrap",alignItems:"flex-end",justifyContent:"flex-end"}],accessibilityRole:"list",accessibilityLabel:"User Badges"}),m.props.children=[]),o({id:s,style:u,res:m}),!h)return m});else for(const r of wt)W.after(r,"default",(s,[{user:{id:u},isEnmity:m,style:h,...p}],E)=>{o({id:u,style:h,res:E})});const a=()=>{W.after(gt.default,"type",(r,s,u)=>{const m=Se(u,p=>p?.props?.children.find(E=>typeof E?.props?.displayProfile?.userId=="string")&&!p?.props.children.find(E=>E.type===ht)&&p?.type?.displayName==="View"&&Array?.isArray(p?.props?.style))?.props?.children;if(!m)return u;const{userId:h}=m?.find(p=>typeof p?.props?.displayProfile?.userId=="string")?.props?.displayProfile??{};if(!h)return u;m?.push(t.createElement(lt,{userID:h,currentUserID:k.getCurrentUser(),admins:e}))})};if(k.getCurrentUser())a();else{let r=function(){ge.unsubscribe("CONNECTION_OPEN",r),a()};ge.subscribe("CONNECTION_OPEN",r)}},onStop(){W.unpatchAll()},getSettingsPanel({settings:e}){return t.createElement(pt,{manifest:d,settings:e})}};we(ft);
