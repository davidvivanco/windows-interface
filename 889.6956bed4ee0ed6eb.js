"use strict";(self.webpackChunkwindows_old_school=self.webpackChunkwindows_old_school||[]).push([[889],{4889:(N,f,c)=>{c.r(f),c.d(f,{HomePageModule:()=>H});var d=c(4755),b=c(7208),x=c(5641),t=c(9523),k=c(6550),w=c(1135);let h=(()=>{class i{constructor(){const e=window.innerWidth;this.isDesktop$=new w.X(e>578)}isDesktop(){return this.isDesktop$.asObservable()}resize(e){this.isDesktop$.next(e>960)}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})(),v=(()=>{class i{constructor(){this.theme$=new w.X("delorean"),this.theme$.asObservable().subscribe(e=>{this.updateCssVariables(e)})}getTheme(){return this.theme$.asObservable()}updateTheme(e){this.theme$.next(e)}updateCssVariables(e){const n=document.querySelector(":root");switch(e){case"firstRule":default:n.style.setProperty("--primary","#f597cf");break;case"fresh":n.style.setProperty("--primary","#d5a8fe");break;case"delorean":n.style.setProperty("--primary","#E86F68"),n.style.setProperty("--primary","black")}}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var a=c(5437);const C=function(i){return{checked:i}};let M=(()=>{class i{constructor(){this.checked=!1,this.text="false"}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-checkbox"]],inputs:{checked:"checked",text:"text"},decls:2,vars:4,consts:[[1,"checkbox","cp","flex",3,"ngClass"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t._uU(1),t.qZA()),2&e&&(t.Q6J("ngClass",t.VKq(2,C,n.checked)),t.xp6(1),t.Oqu(n.text))},dependencies:[d.mk],styles:['@charset "UTF-8";.checkbox[_ngcontent-%COMP%]{font-size:14px;padding:5px}.checkbox[_ngcontent-%COMP%]:before{display:inline-block;background:#fff;height:12px;width:12px;content:"";margin-right:5px;border:inset 2px;vertical-align:bottom}.checked[_ngcontent-%COMP%]:before{content:"\\2714";line-height:14px;font-weight:800}']}),i})();function P(i,s){if(1&i){const e=t.EpF();t.TgZ(0,"app-checkbox",12),t.NdJ("click",function(){const l=t.CHM(e).index,p=t.oxw();return t.KtG(p.onCheckChange(l))}),t.qZA()}if(2&i){const e=s.$implicit;t.Q6J("checked",e.checked)("text",e.text)}}let Z=(()=>{class i{constructor(e,n,o,l){this.cdr=e,this.ui=n,this.events=o,this.themeService=l,this.checkboxes=[{checked:!0,text:"First rule",theme:"firstRule"},{checked:!1,text:"Fresh",theme:"fresh"},{checked:!1,text:"Delorean",theme:"delorean"}],this.themeService.getTheme().subscribe(p=>{this.theme=p;const B=this.checkboxes.findIndex(_=>_.theme===this.theme);this.checkboxes.forEach(_=>_.checked=!1),this.checkboxes[B].checked=!0})}close(){this.ui.switchThemeModal.close()}onCheckChange(e){this.themeService.updateTheme(this.checkboxes[e].theme),this.checkboxes.forEach(n=>n.checked=!1),this.checkboxes[e].checked=!0,this.cdr.detectChanges()}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(t.sBO),t.Y36(r),t.Y36(h),t.Y36(v))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-theme-modal"]],decls:16,vars:1,consts:[["cdkDrag","","cdkDragRootElement",".cdk-overlay-pane","cdkDragHandle","",1,"window"],[1,"titlebar","flex"],[1,"window-titlebar-button",3,"click"],["src","./assets/icons/close-icon.png","alt",""],[1,"content"],[1,"flex","jc-c","img"],["width","100","src","./assets/icons/computer.png","alt",""],[1,"ml-6","label","t-center"],[1,"checkbox-list"],[3,"checked","text","click",4,"ngFor","ngForOf"],[1,"buttons"],[1,"button","cp",3,"click"],[3,"checked","text","click"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t._uU(2," Switch theme "),t.TgZ(3,"div")(4,"button",2),t.NdJ("click",function(){return n.close()}),t._UZ(5,"img",3),t.qZA()()(),t.TgZ(6,"div",4)(7,"div",5),t._UZ(8,"img",6),t.qZA(),t.TgZ(9,"div",7),t._uU(10,"Choose theme desktop"),t.qZA(),t.TgZ(11,"div",8),t.YNc(12,P,1,2,"app-checkbox",9),t.qZA(),t.TgZ(13,"div",10)(14,"div",11),t.NdJ("click",function(){return n.close()}),t._uU(15,"Let's Rock "),t.qZA()()()()),2&e&&(t.xp6(12),t.Q6J("ngForOf",n.checkboxes))},dependencies:[a.Zt,a.Bh,d.sg,M],styles:["[_ngcontent-%COMP%]:root{--primary: #f597cf;--hover: #bbefc8;--spotify: #1ae68c}.window[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{position:absolute;inset:22px 0 0}.window[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{margin-top:10px;font-size:14px}.window[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-top:30px}.window[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{background:var(--primary)}.window[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]:hover{background-color:var(--hover);color:#fff}.textbox[_ngcontent-%COMP%]{border:inset 2px;background:#fff;margin:5px;height:50px;padding:2px;font-size:14px;overflow:auto}.textbox[_ngcontent-%COMP%]:focus{border:inset 2px;outline:none}.checkbox-list[_ngcontent-%COMP%]{padding-left:10px;margin-top:5px}"]}),i})(),T=(()=>{class i{constructor(e){this.ui=e}close(){this.ui.aboutModal.close()}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(r))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-about"]],decls:23,vars:0,consts:[["cdkDrag","","cdkDragRootElement",".cdk-overlay-pane","cdkDragHandle","",1,"window",3,"click"],[1,"titlebar","flex"],[1,"window-titlebar-button-info",3,"click"],["src","./assets/icons/question-icon.png","alt",""],[1,"window-titlebar-button",3,"click"],["src","./assets/icons/close-icon.png","alt",""],[1,"content","flex","fd-rr","padding"],[1,"flex","jc-c","mt-10","w100"],[1,"polaroid"],["width","160","src","./assets/images/me.jpeg","alt","",1,"hide-mobile"],[1,"t-center","desc","flex","fd-col","jc-c"],[1,"mt-4"],[1,"mt-6"],[1,"buttons"],[1,"button","cp","flex","jc-c","ai-c",3,"click"],["width","20","src","./assets/icons/email.png","alt",""],[1,"flex","jc-c","ai-c","ml-4"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.NdJ("click",function(){return n.ui.aboutModal.addPanelClass("z-index-high")}),t.TgZ(1,"div",1)(2,"div"),t._uU(3,"About Me"),t.qZA(),t.TgZ(4,"div")(5,"button",2),t.NdJ("click",function(){return n.close()}),t._UZ(6,"img",3),t.qZA(),t.TgZ(7,"button",4),t.NdJ("click",function(){return n.close()}),t._UZ(8,"img",5),t.qZA()()(),t.TgZ(9,"div",6)(10,"div",7)(11,"div",8),t._UZ(12,"img",9),t.qZA()(),t.TgZ(13,"div",10)(14,"div",11),t._uU(15," Hi! My name is David Vivanco. I'm a Software Developer based in Madrid. I'm interested in freelance opportunities. "),t.qZA(),t.TgZ(16,"div",12),t._uU(17," I'm a specialist in JavaScript. Pro frameworks: Angular, Node, React, Ionic "),t.qZA()(),t.TgZ(18,"div",13)(19,"div",14),t.NdJ("click",function(){return n.close()}),t._UZ(20,"img",15),t.TgZ(21,"div",16),t._uU(22,"Text me!"),t.qZA()()()()())},dependencies:[a.Zt,a.Bh],styles:[".window[_ngcontent-%COMP%]{height:370px;width:600px}@media (min-width: 0px) and (max-width: 567px){.window[_ngcontent-%COMP%]{width:100vw;height:100vh}}@media (min-width: 0px) and (max-width: 567px){.window[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{padding-top:30%}}.window[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]{padding:15px}@media (min-width: 0px) and (max-width: 567px){.window[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]{font-size:16px}}.window[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{bottom:10px;right:10px;display:flex;background:var(--primary)}@media (min-width: 0px) and (max-width: 567px){.window[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{font-size:15px}}.window[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]:hover{background:var(--hover);color:#000}"]}),i})();var g=c(5085);function O(i,s){if(1&i){const e=t.EpF();t.TgZ(0,"div",10),t.NdJ("click",function(){const l=t.CHM(e).$implicit,p=t.oxw();return t.KtG(p.play(l.path))}),t.TgZ(1,"div",11),t._UZ(2,"img",12),t.qZA(),t.TgZ(3,"div",13)(4,"div",14),t._uU(5),t.qZA(),t.TgZ(6,"div",15),t._uU(7),t.qZA()(),t.TgZ(8,"div",16),t._UZ(9,"img",17),t.qZA()()}if(2&i){const e=s.$implicit,n=t.oxw();t.xp6(2),t.Q6J("src",n.avatarBasePath+e.avatar,t.LSH),t.xp6(3),t.Oqu(e.song),t.xp6(2),t.Oqu(e.artist),t.xp6(2),t.Q6J("src",n.audioIconPath,t.LSH)}}let y=(()=>{class i{constructor(e){this.ui=e,this.audioIconPath="./assets/icons/cd-icon.png",this.avatarBasePath="./assets/images/avatars/",this.audioBasePath="/assets/audio/",this.audioData=[{artist:"Fugees",song:"Killing me softly",path:"killing_me_softly.mp3",avatar:"fugees.jpeg"},{artist:"Bruno Mars",song:"24 Magic",path:"bruno_mars_24K.mp3",avatar:"bruno_mars.jpeg"}]}close(){this.ui.spotifyModal.close()}play(e){this.audioPath&&this.audioControl?.pause(),this.audioControl=document.getElementById("audio"),this.audioPath=this.audioBasePath+e,setTimeout(()=>{this.audioControl?.play()})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(r))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-spotify"]],decls:14,vars:2,consts:[["cdkDrag","","cdkDragRootElement",".cdk-overlay-pane","cdkDragHandle","",1,"window"],[1,"titlebar","flex"],[1,"window-titlebar-button",3,"click"],["src","./assets/icons/close-icon.png","alt",""],[1,"content","white"],[1,"flex","jc-c","mt-xl"],[1,"mt-xl"],["class","flex ai-c cp item",3,"click",4,"ngFor","ngForOf"],[1,"audio-controls"],["id","audio","controls","",3,"src"],[1,"flex","ai-c","cp","item",3,"click"],[1,"flex","jc-c","ai-c","avatar"],["width","40","alt","",1,"rounded",3,"src"],[1,"ml-10","flex","jc-c","ai-s","fd-col"],["matListItemTitle","",1,"song"],["matListItemLine","",1,"artist"],[1,"play-icon"],["width","28","alt","icon-audio",3,"src"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t._uU(2," Spotify "),t.TgZ(3,"div")(4,"button",2),t.NdJ("click",function(){return n.close()}),t._UZ(5,"img",3),t.qZA()()(),t.TgZ(6,"div",4)(7,"div")(8,"div",5),t._uU(9,"Mis favoritos"),t.qZA(),t.TgZ(10,"div",6),t.YNc(11,O,10,4,"div",7),t.qZA()(),t.TgZ(12,"div",8),t._UZ(13,"audio",9),t.qZA()()()),2&e&&(t.xp6(11),t.Q6J("ngForOf",n.audioData),t.xp6(2),t.Q6J("src",n.audioPath,t.LSH))},dependencies:[a.Zt,a.Bh,g.WW,g.sL,d.sg],styles:[".titlebar[_ngcontent-%COMP%]{background-color:var(--spotify)}.window[_ngcontent-%COMP%]{background:black;width:350px;height:450px}@media (min-width: 0px) and (max-width: 567px){.window[_ngcontent-%COMP%]{width:100vw;height:100vh}}.content[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{padding:8px 15px;position:relative;color:#fff}.content[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .artist[_ngcontent-%COMP%]{font-size:12px;margin-top:-10.5px;opacity:.6}.content[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .play-icon[_ngcontent-%COMP%]{position:absolute;right:20px}.audio-controls[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;justify-content:center;position:absolute;bottom:15px}.audio-controls[_ngcontent-%COMP%]   audio[_ngcontent-%COMP%]::-webkit-media-controls-play-button, .audio-controls[_ngcontent-%COMP%]   audio[_ngcontent-%COMP%]::-webkit-media-controls-panel{background-color:var(--spotify)}"]}),i})(),A=(()=>{class i{constructor(e){this.ui=e}close(){this.ui.myPicsModal.close()}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(r))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-my-pictures"]],decls:37,vars:0,consts:[["cdkDrag","","cdkDragRootElement",".cdk-overlay-pane","cdkDragHandle","",1,"window"],[1,"titlebar","flex"],[1,"window-titlebar-button",3,"click"],["src","./assets/icons/close-icon.png","alt",""],[1,"content"],[1,"photo-grid","flex","fd-col"],[1,"flex","jc-se"],[1,"flex","fd-col","jc-c","ai-c","cp",3,"click"],["width","100","src","./assets/images/mis_fotos/img_1.jpeg","alt",""],[1,"mt-xs"],["height","100","src","./assets/images/mis_fotos/img_2.jpeg","alt",""],["height","100","src","./assets/images/mis_fotos/selfie_jiujitsu.jpg","alt",""],[1,"mt-xl"],[1,"flex","jc-se","mt-m"],["width","100","src","./assets/images/mis_fotos/img_3.jpeg","alt",""],["width","100","src","./assets/images/mis_fotos/img_4.jpeg","alt",""],["width","100","src","./assets/images/mis_fotos/selfie.jpeg","alt",""]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div"),t._uU(3,"mis_fotos"),t.qZA(),t.TgZ(4,"div")(5,"button",2),t.NdJ("click",function(){return n.close()}),t._UZ(6,"img",3),t.qZA()()(),t.TgZ(7,"div",4)(8,"div",5)(9,"div")(10,"div",6)(11,"div",7),t.NdJ("click",function(){return n.ui.openPhotoDetailModal("img_1.jpeg")}),t._UZ(12,"img",8),t.TgZ(13,"div",9),t._uU(14,"img_1.jpeg"),t.qZA()(),t.TgZ(15,"div",7),t.NdJ("click",function(){return n.ui.openPhotoDetailModal("img_2.jpeg")}),t._UZ(16,"img",10),t.TgZ(17,"div",9),t._uU(18,"img_2.jpeg"),t.qZA()(),t.TgZ(19,"div",7),t.NdJ("click",function(){return n.ui.openPhotoDetailModal("selfie_jiujitsu.jpg")}),t._UZ(20,"img",11),t.TgZ(21,"div",9),t._uU(22,"selfie_jiujitsu.jpg"),t.qZA()()()(),t.TgZ(23,"div",12)(24,"div",13)(25,"div",7),t.NdJ("click",function(){return n.ui.openPhotoDetailModal("img_3.jpeg")}),t._UZ(26,"img",14),t.TgZ(27,"div",9),t._uU(28,"img_3.jpeg"),t.qZA()(),t.TgZ(29,"div",7),t.NdJ("click",function(){return n.ui.openPhotoDetailModal("img_4.jpeg")}),t._UZ(30,"img",15),t.TgZ(31,"div",9),t._uU(32,"img_4.jpeg"),t.qZA()(),t.TgZ(33,"div",7),t.NdJ("click",function(){return n.ui.openPhotoDetailModal("selfie.jpeg")}),t._UZ(34,"img",16),t.TgZ(35,"div",9),t._uU(36,"selfie.jpeg"),t.qZA()()()()()()())},dependencies:[a.Zt,a.Bh],styles:[".window[_ngcontent-%COMP%]{width:500px;height:480px}@media (min-width: 0px) and (max-width: 567px){.window[_ngcontent-%COMP%]{width:100vw;height:100vh}}.window[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{padding:30px}"]}),i})();var m=c(5580);let U=(()=>{class i{constructor(e,n,o){this.dialog=e,this.data=n,this.ui=o}ngOnInit(){this.fileBasePath="./assets/images/mis_fotos/",this.fileName=this.data.fileName}close(){this.ui.photosDetailModals[this.fileName]?.close()}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(m.so),t.Y36(m.WI),t.Y36(r))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-photo-detail"]],decls:10,vars:2,consts:[["cdkDrag","","cdkDragRootElement",".cdk-overlay-pane","cdkDragHandle","","scro","",1,"window"],[1,"titlebar","flex"],[1,"window-titlebar-button",3,"click"],["src","./assets/icons/close-icon.png","alt",""],[1,"content"],[1,"photo","flex","jc-c","ai-c"],["width","320","alt","",3,"src"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div"),t._uU(3),t.qZA(),t.TgZ(4,"div")(5,"button",2),t.NdJ("click",function(){return n.close()}),t._UZ(6,"img",3),t.qZA()()(),t.TgZ(7,"div",4)(8,"div",5),t._UZ(9,"img",6),t.qZA()()()),2&e&&(t.xp6(3),t.Oqu(n.fileName),t.xp6(6),t.Q6J("src",n.fileBasePath+n.fileName,t.LSH))},dependencies:[a.Zt,a.Bh],styles:[".window[_ngcontent-%COMP%]{width:400px;height:100%}.window[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{padding:10px;height:100%}.window[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .photo[_ngcontent-%COMP%]{width:100%;height:100%}"]}),i})(),D=(()=>{class i{constructor(e,n){this.dialog=e,this.ui=n}close(){this.ui.emuleModal.close()}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(m.so),t.Y36(r))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-emule"]],decls:16,vars:0,consts:[["cdkDrag","","cdkDragRootElement",".cdk-overlay-pane","cdkDragHandle","","scro","",1,"window"],[1,"titlebar","flex"],[1,"window-titlebar-button",3,"click"],["src","./assets/icons/close-icon.png","alt",""],[1,"content"],[1,"photo","flex","jc-c","ai-c"],["width","400","src","./assets/gifs/circle.gif","alt",""],[1,"t-center","mt-xl","gotcha"],[1,"buttons"],[1,"button","cp","flex","jc-c","ai-c",3,"click"],[1,"flex","jc-c","ai-c","ml-4"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div"),t._uU(3,"Gotcha"),t.qZA(),t.TgZ(4,"div")(5,"button",2),t.NdJ("click",function(){return n.close()}),t._UZ(6,"img",3),t.qZA()()(),t.TgZ(7,"div",4)(8,"div",5),t._UZ(9,"img",6),t.qZA(),t.TgZ(10,"div",7),t._uU(11,"Gotcha!"),t.qZA(),t.TgZ(12,"div",8)(13,"div",9),t.NdJ("click",function(){return n.close()}),t.TgZ(14,"div",10),t._uU(15,"Ou Yeah!"),t.qZA()()()()())},dependencies:[a.Zt,a.Bh],styles:[".window[_ngcontent-%COMP%]{width:500px;height:380px}@media (min-width: 0px) and (max-width: 567px){.window[_ngcontent-%COMP%]{width:100vw;height:100vh}}.content[_ngcontent-%COMP%]{padding:20px}.content[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{display:flex;background:var(--primary)}@media (min-width: 0px) and (max-width: 567px){.content[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{font-size:15px}}.content[_ngcontent-%COMP%]   .gotcha[_ngcontent-%COMP%]{font-size:25px}.content[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]:hover{background:var(--hover);color:#000}"]}),i})(),r=(()=>{class i{constructor(e,n){this.dialog=e,this.events=n,this.photosDetailModals={},this.windowsOpen=[],this.animations=["animate__heartBeat","animate__bounce","animate__rubberBand","animate__shakeX","animate__shakeY","animate__swing","animate__tada","animate__wobble","animate__jello","animate__heartBeat","animate__bounceIn","animate__flip"],this.events.isDesktop().subscribe(o=>this.isDesktop=o)}openSwitchThemeModal(){this.switchThemeModal?.close(),this.switchThemeModal=this.dialog.open(Z,{restoreFocus:!1,backdropClass:"hide",panelClass:["windows-window"]}),this.handlerOpenWindow("computer.png",this.switchThemeModal)}openMyPicsModal(){const e=this.getRandomAnimation();let n={restoreFocus:!1,backdropClass:"hide",panelClass:[...this.getDefaultPanelClass(),e],position:{}};this.isDesktop?n.position={left:"50%",bottom:"5%"}:n={...n,...this.getMobileDefaultOpts()},this.myPicsModal?.close(),this.myPicsModal=this.dialog.open(A,n),this.handlerOpenWindow("folder.png",this.myPicsModal),this.handlerAfterOpenedWindow(this.myPicsModal,e)}openAboutModal(){const e=this.getRandomAnimation();let n={restoreFocus:!1,backdropClass:["hide","about-backdrop"],panelClass:[...this.getDefaultPanelClass(),e]};this.isDesktop?n.position={left:"20%"}:n={...n,...this.getMobileDefaultOpts()},this.aboutModal?.close(),this.aboutModal=this.dialog.open(T,n),this.handlerAfterOpenedWindow(this.aboutModal,e),this.handlerOpenWindow("user.png",this.aboutModal)}openSpotifyModal(){const e=this.getRandomAnimation();let n={restoreFocus:!1,position:{},backdropClass:"hide",panelClass:[...this.getDefaultPanelClass(),e]};n=this.isDesktop?{...n,position:{left:"40%",top:"5%"}}:{...n,...this.getMobileDefaultOpts()},this.spotifyModal?.close(),this.spotifyModal=this.dialog.open(y,n),this.handlerAfterOpenedWindow(this.spotifyModal,e),this.handlerOpenWindow("spotify-icon.png",this.spotifyModal)}openPhotoDetailModal(e){const n=this.getRandomAnimation(),o=this.getPhotoDetailPosition(e);this.photosDetailModals[e]?.close(),this.photosDetailModals[e]=this.dialog.open(U,{restoreFocus:!1,position:o,height:"img_2.jpeg"===e||"selfie_jiujitsu.jpg"===e||"selfie.jpeg"===e?"580px":"380px",data:{fileName:e},backdropClass:"hide",panelClass:[...this.getDefaultPanelClass(),n]}),this.handlerAfterOpenedWindow(this.photosDetailModals[e],n)}openEmuleModal(){let e={restoreFocus:!1,position:{},backdropClass:"hide",panelClass:[...this.getDefaultPanelClass()]};e=this.isDesktop?{...e,position:{left:"25%",top:"5%"}}:{...e,...this.getMobileDefaultOpts()},this.emuleModal?.close(),this.emuleModal=this.dialog.open(D,e),this.handlerOpenWindow("emule.png",this.emuleModal)}handlerOpenWindow(e,n){this.windowsOpen=this.windowsOpen.filter(o=>o!==e),this.windowsOpen.length<11&&this.windowsOpen.push(e),n.afterClosed().subscribe(()=>{console.log(e),this.windowsOpen=this.windowsOpen.filter(o=>o!==e)})}handlerAfterOpenedWindow(e,n){e.afterOpened().subscribe(()=>{setTimeout(()=>{e.removePanelClass(["animate__animated",n])},1e3)})}getPhotoDetailPosition(e){let n;switch(e){case"img_1.jpeg":n={left:"50%",bottom:"10%"};break;case"img_2.jpeg":n={left:"20%",bottom:"5%"};break;case"img_3.jpeg":n={right:"10%",top:"20%"};break;case"img_4.jpeg":n={right:"10%",top:"10%"}}return n}getMobileDefaultOpts(){return{maxWidth:"100vw",width:"100vw",height:"100vh"}}getDefaultPanelClass(){return["windows-window","animate__animated"]}getRandomAnimation(){const e=Math.floor(12*Math.random()+0);return this.animations[e]}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(m.uw),t.LFG(h))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var u=c(2659),j=c(9383);function q(i,s){if(1&i&&(t.TgZ(0,"div",30),t._UZ(1,"img",31),t.qZA()),2&i){const e=s.$implicit;t.xp6(1),t.Q6J("src","./assets/icons/"+e,t.LSH)}}let J=(()=>{class i{constructor(e){this.ui=e}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(r))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-taskbar"]],decls:44,vars:5,consts:[[1,"windows-taskbar"],[1,"windows-taskbar__start-btn","hide-mobile",3,"matMenuTriggerFor"],[1,"hamburguer","hide-desktop",3,"matMenuTriggerFor"],["src","./assets/icons/menu.png","alt",""],[1,"flex","hide-mobile",2,"flex-wrap","wrap"],["readonly","","disabled","","class","window-open flex ai-c jc-c",4,"ngFor","ngForOf"],[1,"windows-menu"],["menu","matMenu"],[3,"multiple"],["mat-menu-item","",3,"matMenuTriggerFor"],[1,"flex"],["width","25","src","./assets/icons/settings.png","alt",""],[1,"ml-6","white",2,"font-size","13px"],["width","25","src","./assets/icons/email.png","alt",""],[3,"click"],["width","25","src","./assets/icons/user.png","alt",""],["settings","matMenu"],[2,"cursor","pointer","padding-bottom","6px","padding-top","6px",3,"click"],[1,"flex","cp"],["width","25","src","./assets/icons/computer.png","alt",""],[1,"ml-4",2,"font-size","13px"],[1,"mt-10",2,"cursor","pointer","padding-bottom","6px","padding-top","6px",3,"click"],[1,"flex","cp","ai-c"],["width","20","height","20","src","./assets/icons/uk.png","alt",""],[1,"ml-8",2,"font-size","13px"],[1,"ref","flex","jc-c","ai-c"],["width","20","src","./assets/icons/github.png","alt","",1,"cp","hide-mobile"],["width","20","src","./assets/icons/linkedin.png","alt","",1,"ml-4","cp","hide-mobile"],[1,"ml-6",3,"click"],["readonly","","disabled","","type","text","value","10:00",1,"windows-clock","cp"],["readonly","","disabled","",1,"window-open","flex","ai-c","jc-c"],["width","20","alt","",3,"src"]],template:function(e,n){if(1&e&&(t.TgZ(0,"mat-toolbar",0)(1,"button",1),t._uU(2," Inicio "),t.qZA(),t.TgZ(3,"div",2),t._UZ(4,"img",3),t.qZA(),t.TgZ(5,"div",4),t.YNc(6,q,2,1,"div",5),t.qZA(),t.TgZ(7,"mat-menu",6,7)(9,"mat-selection-list",8)(10,"button",9)(11,"div",10),t._UZ(12,"img",11),t.TgZ(13,"small",12),t._uU(14," Settings"),t.qZA()()(),t.TgZ(15,"mat-list-item")(16,"div",10),t._UZ(17,"img",13),t.TgZ(18,"small",12),t._uU(19," Contact"),t.qZA()()(),t.TgZ(20,"mat-list-item",14),t.NdJ("click",function(){return n.ui.openAboutModal()}),t.TgZ(21,"div",10),t._UZ(22,"img",15),t.TgZ(23,"small",12),t._uU(24," About me"),t.qZA()()()()(),t.TgZ(25,"mat-menu",6,16)(27,"mat-list-item",17),t.NdJ("click",function(){return n.ui.openSwitchThemeModal()}),t.TgZ(28,"div",18),t._UZ(29,"img",19),t.TgZ(30,"small",20),t._uU(31," Switch Theme"),t.qZA()()(),t.TgZ(32,"mat-list-item",21),t.NdJ("click",function(){return n.ui.openSwitchThemeModal()}),t.TgZ(33,"div",22),t._UZ(34,"img",23),t.TgZ(35,"small",24),t._uU(36," English"),t.qZA()()()(),t.TgZ(37,"div",25),t._UZ(38,"img",26)(39,"img",27),t.TgZ(40,"div")(41,"strong",28),t.NdJ("click",function(){return n.ui.openAboutModal()}),t._uU(42,"David Vivanco"),t.qZA()()(),t._UZ(43,"input",29),t.qZA()),2&e){const o=t.MAs(8),l=t.MAs(26);t.xp6(1),t.Q6J("matMenuTriggerFor",o),t.xp6(2),t.Q6J("matMenuTriggerFor",o),t.xp6(3),t.Q6J("ngForOf",null==n.ui?null:n.ui.windowsOpen),t.xp6(3),t.Q6J("multiple",!1),t.xp6(1),t.Q6J("matMenuTriggerFor",l)}},dependencies:[g.Ub,g.Tg,u.VK,u.OP,u.p6,j.Ye,d.sg],styles:["[_ngcontent-%COMP%]:root{--primary: #f597cf;--hover: #bbefc8;--spotify: #1ae68c}.windows-taskbar[_ngcontent-%COMP%]{color:#fff;height:40px;background:var(--primary);box-shadow:inset 0 1px #eee,inset 0 -1px #bbb,0 10px 20px #0000000f}@media (min-width: 960px){.windows-taskbar[_ngcontent-%COMP%]{position:absolute;bottom:0}}.windows-taskbar__start-btn[_ngcontent-%COMP%]{padding:4px 10px;font-weight:700;font-size:12px;background:white;border-radius:2px;border:2px outset;outline:none;width:70px;max-height:25px;cursor:pointer;border-top:1px solid #fff;border-left:1px solid #fff;border-right:1px solid gray;border-bottom:1px solid gray;box-shadow:1px 1px #dfdfdf,1px 0 #000,0 1px #000,1px 1px #000}.windows-taskbar__start-btn[_ngcontent-%COMP%]:active{border:2px inset}.windows-taskbar[_ngcontent-%COMP%]   .ref[_ngcontent-%COMP%]{font-size:12px;font-weight:700;cursor:pointer}.windows-taskbar[_ngcontent-%COMP%]   .ref[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:active{border:2px inset}@media (min-width: 960px){.windows-taskbar[_ngcontent-%COMP%]   .ref[_ngcontent-%COMP%]{position:absolute;right:7%}}@media (min-width: 0px) and (max-width: 567px){.windows-taskbar[_ngcontent-%COMP%]   .ref[_ngcontent-%COMP%]{text-align:center;width:100%}}.windows-taskbar[_ngcontent-%COMP%]   .ref[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{padding:3px}.windows-taskbar[_ngcontent-%COMP%]   .ref[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]:hover{background-color:var(--hover);color:#000}.windows-taskbar[_ngcontent-%COMP%]   .hamburguer[_ngcontent-%COMP%]{position:absolute;right:10px;top:2px}mat-list-item[_ngcontent-%COMP%]:hover{background:var(--hover);color:#000}mat-list-item[_ngcontent-%COMP%]:hover   small[_ngcontent-%COMP%]{color:#000}.white-icon[_ngcontent-%COMP%]{color:#fff}"]}),i})();function F(i,s){if(1&i){const e=t.EpF();t.TgZ(0,"div",1)(1,"div",2)(2,"div",3)(3,"div",4)(4,"div",5),t._UZ(5,"img",6),t.qZA(),t.TgZ(6,"div",5),t._uU(7,"Contact"),t.qZA()(),t.TgZ(8,"div",4)(9,"div",5),t._UZ(10,"img",7),t.qZA(),t.TgZ(11,"div",8),t._uU(12,"Play"),t.qZA()(),t.TgZ(13,"div",9),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.ui.openAboutModal())}),t.TgZ(14,"div",5),t._UZ(15,"img",10),t.qZA(),t.TgZ(16,"div",11),t._uU(17,"About me"),t.qZA()(),t.TgZ(18,"div",9),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.ui.openSpotifyModal())}),t.TgZ(19,"div",5),t._UZ(20,"img",12),t.qZA(),t.TgZ(21,"div",11),t._uU(22,"Spotify"),t.qZA()()(),t.TgZ(23,"div",3)(24,"div",9),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.ui.openMyPicsModal())}),t.TgZ(25,"div",5),t._UZ(26,"img",13),t.qZA(),t.TgZ(27,"div",5),t._uU(28,"mis_fotos"),t.qZA()(),t.TgZ(29,"div",9),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.ui.openEmuleModal())}),t.TgZ(30,"div",5),t._UZ(31,"img",14),t.qZA(),t.TgZ(32,"div",5),t._uU(33,"Emule"),t.qZA()()()(),t._UZ(34,"app-taskbar"),t.qZA()}if(2&i){const e=t.oxw();t.Udp("background",e.background),t.xp6(5),t.Q6J("width",e.imgWidth),t.xp6(5),t.Q6J("width",e.imgWidth),t.xp6(5),t.Q6J("width",e.imgWidth),t.xp6(5),t.Q6J("width",e.imgWidth),t.xp6(6),t.Q6J("width",e.imgWidth),t.xp6(5),t.Q6J("width",45)}}let S=(()=>{class i{onResize(e){this.events.innerWidth=window.innerWidth,this.events.resize(this.events.innerWidth)}constructor(e,n,o,l){this.sanitization=e,this.ui=n,this.events=o,this.themeService=l,this.background="#bbefc8",this.wallpaperBasePath="./assets/images/wallpapers/",this.setDesktopBackground(),this.setIconWidth(),this.setThemeObservable()}ngOnInit(){}setDesktopBackground(){this.desktopBackground={firstRule:this.wallpaperBasePath+"figth_club.jpeg",fresh:this.wallpaperBasePath+"fresh_prince.gif",delorean:this.wallpaperBasePath+"delorean.jpeg"}}setIconWidth(){this.imgWidth=this.ui.isDesktop?"35":"30"}setThemeObservable(){this.themeService.getTheme().subscribe(e=>{})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(k.H7),t.Y36(r),t.Y36(h),t.Y36(v))},i.\u0275cmp=t.Xpm({type:i,selectors:[["home"]],hostBindings:function(e,n){1&e&&t.NdJ("resize",function(l){return n.onResize(l)},!1,t.Jf7)},decls:1,vars:1,consts:[["class","desktop-container",3,"background",4,"ngIf"],[1,"desktop-container"],[1,"icons","flex"],[1,"col"],[1,"cp","icon"],[1,"flex","jc-c"],["src","./assets/icons/email.png","alt","",3,"width"],["src","./assets/icons/marciano.png","alt","",3,"width"],[1,"flex","jc-c","mt-10"],[1,"cp","icon",3,"click"],["src","./assets/icons/user.png","alt","",3,"width"],[1,"flex","jc-c","mt-6"],["src","./assets/icons/spotify-icon.png","alt","",3,"width"],["src","./assets/icons/folder.png","alt","",3,"width"],["src","./assets/icons/emule.png","alt","",3,"width"]],template:function(e,n){1&e&&t.YNc(0,F,35,8,"div",0),2&e&&t.Q6J("ngIf",n.background)},dependencies:[d.O5,J],styles:["[_ngcontent-%COMP%]:root{--primary: #f597cf;--hover: #bbefc8;--spotify: #1ae68c}.desktop-container[_ngcontent-%COMP%]{width:100vw;height:100vh;background-size:cover;position:relative}.icons[_ngcontent-%COMP%]{position:absolute;left:1%;top:3%}@media (min-width: 0px) and (max-width: 567px){.icons[_ngcontent-%COMP%]{top:5%}}.icons[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]{margin-left:10px}@media (min-width: 0px) and (max-width: 567px){.icons[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]{margin-left:0}}.icons[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{border-radius:10px;padding:5px 15px;margin-top:20px}.icons[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:hover{background-color:var(--primary);opacity:.65;color:#fff}"]}),i})(),H=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[b.m,d.ez,x.Bz.forChild([{path:"",component:S}])]}),i})()}}]);