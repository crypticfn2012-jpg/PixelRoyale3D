import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js';

const $ = id => document.getElementById(id);
const ASSET = 'https://raw.githubusercontent.com/crypticfn2012-jpg/PixelRoyale/main/';
const WORKER = 'https://pixelroyal-multiplayer.pixelroyal-21513.workers.dev';

const WEAPONS = [
  {name:'Pistol',icon:'Pistol.png',damage:16,rate:.30,mag:12,reload:1,spread:.035,pellets:1,range:90,speed:95,color:0xc7d1dd},
  {name:'SMG',icon:'SMG.png',damage:9,rate:.085,mag:30,reload:1.4,spread:.11,pellets:1,range:65,speed:83,color:0x62c8f2},
  {name:'Shotgun',icon:'Shotgun.png',damage:10,rate:.8,mag:6,reload:1.9,spread:.16,pellets:6,range:34,speed:73,color:0xffb451},
  {name:'Assault Rifle',icon:'AR.png',damage:18,rate:.16,mag:25,reload:1.7,spread:.045,pellets:1,range:105,speed:112,color:0x79df8a},
  {name:'Sniper',icon:'Sniper.png',damage:75,rate:1.3,mag:4,reload:2.3,spread:.004,pellets:1,range:160,speed:165,color:0xb68cff},
  {name:'Pulse Rifle',icon:'PulseRifle.png',damage:14,rate:.13,mag:24,reload:1.8,spread:.03,pellets:1,range:105,speed:110,color:0x4de3d0,pulse:true},
  {name:'Flint-Knock',icon:'Flint-Knock.png',damage:54,rate:.72,mag:1,reload:1.35,spread:.018,pellets:1,range:80,speed:130,color:0xf5bd78},
  {name:'The Outlaw',icon:'TheOutlaw.png',damage:34,rate:.62,mag:6,reload:1.65,spread:.018,pellets:1,range:125,speed:142,color:0xcf9c69},
  {name:'Scout DMR',icon:'Scout DMR.png',damage:25,rate:.34,mag:10,reload:1.65,spread:.014,pellets:1,range:140,speed:150,color:0x8fb9db},
  {name:'Pulse Blaster',icon:'Pulse Blaster.png',damage:26,rate:.4,mag:10,reload:1.5,spread:.009,pellets:1,range:92,speed:95,color:0x6ff6f0,pulse:true},
  {name:'Hand Cannon',icon:'Hand Cannon.png',damage:38,rate:.48,mag:7,reload:1.5,spread:.02,pellets:1,range:95,speed:150,color:0xe5b86f},
  {name:'Buzz SMG',icon:'Buzz SMG.png',damage:7,rate:.062,mag:40,reload:1.7,spread:.14,pellets:1,range:58,speed:82,color:0x62c8f2},
  {name:'Double Tap',icon:'DoubleTap.png',damage:7,rate:.92,mag:8,reload:2,spread:.13,pellets:10,range:36,speed:74,color:0xffb451},
  {name:'Burst AR',icon:'BurstAR.png',damage:13,rate:.34,mag:30,reload:1.8,spread:.04,pellets:3,range:105,speed:110,color:0x8fb9db},
  {name:'Pulse Pistol',icon:'PulseRifle.png',damage:15,rate:.28,mag:13,reload:1,spread:.03,pellets:1,range:93,speed:104,color:0x42efff,pulse:true},
  {name:'Pulse SMG',icon:'PulseBuzzSMG.png',damage:8.5,rate:.078,mag:28,reload:1.45,spread:.10,pellets:1,range:67,speed:88,color:0x42efff,pulse:true},
  {name:'Pulse Scattergun',icon:'PulseDoubleTap.png',damage:9,rate:.76,mag:6,reload:1.95,spread:.15,pellets:6,range:37,speed:79,color:0xff4bc8,pulse:true},
  {name:'Pulse Assault Rifle',icon:'PulseBurstAR.png',damage:17,rate:.155,mag:24,reload:1.75,spread:.04,pellets:1,range:110,speed:116,color:0x42efff,pulse:true},
  {name:'Pulse Longshot',icon:'PulseScout.png',damage:68,rate:1.22,mag:4,reload:2.4,spread:.003,pellets:1,range:165,speed:178,color:0xff4bc8,pulse:true},
  {name:'Pulsewave Rifle',icon:'PulseRifle.png',damage:13,rate:.125,mag:24,reload:1.85,spread:.028,pellets:1,range:108,speed:118,color:0x42efff,pulse:true},
  {name:'Pulse Flint',icon:'Flint-Knock.png',damage:50,rate:.68,mag:1,reload:1.4,spread:.014,pellets:1,range:86,speed:155,color:0xff4bc8,pulse:true},
  {name:'Pulse Outlaw',icon:'PulseOutlaw.png',damage:32,rate:.59,mag:6,reload:1.7,spread:.018,pellets:1,range:132,speed:157,color:0x42efff,pulse:true},
  {name:'Pulse Scout',icon:'PulseScout.png',damage:24,rate:.32,mag:10,reload:1.7,spread:.012,pellets:1,range:145,speed:168,color:0x42efff,pulse:true},
  {name:'Pulse Blaster',icon:'PulseBlaster.png',damage:24,rate:.38,mag:10,reload:1.55,spread:.009,pellets:1,range:100,speed:110,color:0xff4bc8,pulse:true},
  {name:'Pulse Hand Cannon',icon:'PulseHandCannon.png',damage:36,rate:.45,mag:7,reload:1.55,spread:.018,pellets:1,range:98,speed:164,color:0xff4bc8,pulse:true},
  {name:'Pulse Buzz SMG',icon:'PulseBuzzSMG.png',damage:6.5,rate:.058,mag:38,reload:1.75,spread:.13,pellets:1,range:62,speed:90,color:0x42efff,pulse:true},
  {name:'Pulse Double Tap',icon:'PulseDoubleTap.png',damage:6.5,rate:.88,mag:8,reload:2.05,spread:.12,pellets:10,range:39,speed:82,color:0xff4bc8,pulse:true},
  {name:'Pulse Burst AR',icon:'PulseBurstAR.png',damage:12.5,rate:.32,mag:27,reload:1.85,spread:.04,pellets:3,range:112,speed:120,color:0x42efff,pulse:true},
  {name:'Warden Core',icon:'WardenCore.png',damage:31,rate:.26,mag:22,reload:1.55,spread:.02,pellets:1,range:106,speed:130,color:0x42efff,pulse:true,bossOnly:true},
  {name:'Ravager Driver',icon:'RavagerDriver.png',damage:12,rate:.09,mag:36,reload:1.7,spread:.09,pellets:2,range:73,speed:107,color:0xff4bc8,pulse:true,bossOnly:true},
  {name:'Oracle Lance',icon:'PulseScout.png',damage:59,rate:.95,mag:5,reload:2.15,spread:.004,pellets:1,range:172,speed:185,color:0x9d8cff,pulse:true,bossOnly:true},
  {name:'Pulse Splash',icon:'PulseSplash.png',damage:0,rate:.5,mag:3,reload:0,spread:0,pellets:1,range:45,speed:37,color:0xcb62ff,pulse:true,healing:true}
];
const TIERS = [
  {name:'Field-Tested',color:0xb5c0ca,mult:1},
  {name:'Tuned',color:0x75dfcb,mult:1.08},
  {name:'Overclocked',color:0x62a7ff,mult:1.17},
  {name:'Prototype',color:0xc58cff,mult:1.28},
  {name:'Blacksite',color:0xffbd67,mult:1.42}
];
const SHARDS = [
  {id:'overdrive',name:'Overdrive Shard',color:'#42efff',desc:'Deal 18% more damage, but take 10% more damage',duration:6,cooldown:18},
  {id:'phase',name:'Phase Shard',color:'#ff4bc8',desc:'Move 45% faster and deal 10% less damage',duration:2.5,cooldown:16},
  {id:'aegis',name:'Aegis Shard',color:'#9d8cff',desc:'Gain 24 shield, move 12% slower',duration:5,cooldown:20},
  {id:'vitalflow',name:'Vitalflow Shard',color:'#6cffb1',desc:'Regenerate health and shield over 8 seconds',duration:8,cooldown:24},
  {id:'dashcore',name:'Dashcore Shard',color:'#d88bff',desc:'Hold up to 3 Pulse Dashes; recharge one every 5 seconds',duration:0,cooldown:0},
  {id:'pulseSurge',name:'Pulse Surge Shard',color:'#48eaff',desc:'Pulse weapons deal 16% more damage',duration:7,cooldown:21},
  {id:'quickcycle',name:'Quickcycle Shard',color:'#ffd166',desc:'Reload 22% faster',duration:7,cooldown:20},
  {id:'deadeye',name:'Deadeye Shard',color:'#ff9b68',desc:'Weapon spread reduced by 28%',duration:6,cooldown:20},
  {id:'kinetic',name:'Kinetic Shard',color:'#70d9ff',desc:'Move 20% faster',duration:5,cooldown:19},
  {id:'bulwark',name:'Bulwark Shard',color:'#a6b6ff',desc:'Take 18% less damage',duration:6,cooldown:22},
  {id:'capacitor',name:'Capacitor Shard',color:'#ffdf70',desc:'Fire 12% faster',duration:6,cooldown:20},
  {id:'medwave',name:'Medwave Shard',color:'#8dffcf',desc:'Instantly restore 30 health',duration:0,cooldown:24},
  {id:'shieldwave',name:'Shieldwave Shard',color:'#78caff',desc:'Instantly restore up to 35 shield',duration:0,cooldown:24},
  {id:'pulseguard',name:'Pulseguard Shard',color:'#bd8bff',desc:'Pulse damage +10%; incoming damage -8%',duration:6,cooldown:22},
  {id:'riftstep',name:'Riftstep Shard',color:'#ff70d2',desc:'Instantly gain one Pulse Dash, up to 3',duration:0,cooldown:18},
  {id:'overclock',name:'Overclock Shard',color:'#ffb15e',desc:'Fire and reload 8–10% faster',duration:5,cooldown:23}
];
const BOSSES = [
  {id:'warden',name:'THE WARDEN',title:'Containment Unit',x:58,z:54,color:0x42efff,attack:'ring',weapon:28},
  {id:'ravager',name:'THE RAVAGER',title:'Pursuit Prototype',x:-70,z:-56,color:0xff4bc8,attack:'volley',weapon:29},
  {id:'oracle',name:'THE ORACLE',title:'Signal Intelligence',x:0,z:4,color:0x9d8cff,attack:'burst',weapon:30}
];
const SKINS = [
  {name:'Blaze',color:0xff9f1c,cost:0},{name:'Mint',color:0x2ec4b6,cost:150},{name:'Rose',color:0xff4d8d,cost:300},
  {name:'Royal',color:0x8a6cff,cost:500},{name:'Lime',color:0x9be22b,cost:800},{name:'Gold',color:0xffd447,cost:1200},
  {name:'Shadow',color:0x3a3f55,cost:1800},{name:'Frost',color:0x9be7ff,cost:2500},{name:'Volt',color:0x68f0df,cost:3200},
  {name:'Ember',color:0xff704f,cost:3900},{name:'Glacier',color:0xdce7ff,cost:4600},{name:'Midnight',color:0x202b45,cost:5200},
  {name:'Solar',color:0xffdf4d,cost:5800},{name:'Cyber',color:0x42e6ff,cost:6400},{name:'Phantom',color:0xb86cff,cost:7000},
  {name:'Apex',color:0xff5d51,cost:7600},{name:'Pulse Sovereign',color:0x48edff,cost:9000},{name:'Pulse Drifter',color:0xc45cff,cost:8200},
  {name:'Neon Containment',color:0x4cf0ff,cost:8800},{name:'Blacksite Echo',color:0x7b59ff,cost:9600}
];
const HATS = [
  {name:'None',icon:'🚫',color:0xffffff,cost:0},{name:'Cap',icon:'🧢',color:0xd94a3d,cost:200},
  {name:'Horns',icon:'😈',color:0x9b3d43,cost:400},{name:'Halo',icon:'😇',color:0xffe66b,cost:700},
  {name:'Crown',icon:'👑',color:0xffd447,cost:1200},{name:'Wizard',icon:'🧙',color:0x7651b8,cost:1800},
  {name:'Bandana',icon:'🧣',color:0x2d7777,cost:2400},{name:'Headset',icon:'🎧',color:0x7fdcff,cost:3000},
  {name:'Antlers',icon:'🦌',color:0x946c43,cost:3600},{name:'Pixel Crown',icon:'👑',color:0xffcf4a,cost:4200},
  {name:'Chrome Visor',icon:'🕶️',color:0x55f5e4,cost:4800},{name:'Angel Wings',icon:'🪽',color:0xbfefff,cost:5400},
  {name:'Orbit Halo',icon:'💫',color:0xc65cff,cost:6000},{name:'Royal Mask',icon:'🎭',color:0x9a78dc,cost:6600},
  {name:'Neon Helmet',icon:'⛑️',color:0x55e9ff,cost:7200},{name:'Pulse Crown',icon:'♛',color:0x48edff,cost:7800},
  {name:'Signal Visor',icon:'◈',color:0x7b70ff,cost:8200},{name:'Containment Hood',icon:'⬡',color:0x6ce8d6,cost:8600}
];
const TRAILS = [
  {name:'Default',color:0xffffff,cost:0},{name:'Fire',color:0xff5a1f,cost:250},{name:'Ice',color:0x4dc9ff,cost:250},
  {name:'Toxic',color:0x9be22b,cost:500},{name:'Pink',color:0xff4d8d,cost:500},{name:'Rainbow',color:0xffd447,cost:1500},
  {name:'Comet',color:0xb5a0ff,cost:2200},{name:'Static',color:0xffe08a,cost:2800},{name:'Comet Fire',color:0xff9f43,cost:3400},
  {name:'Neon Flux',color:0x70ffff,cost:3900},{name:'Royal Aura',color:0xb38cff,cost:4500},{name:'Starfall',color:0xfff0a8,cost:5200},
  {name:'Pulse Shift',color:0x7dff9d,cost:5800},{name:'Starlight',color:0xe8e9ff,cost:6400},{name:'Pulse Orbit',color:0xc65cff,cost:7000},
  {name:'Rift Current',color:0x51eaff,cost:7600},{name:'Blacksite Wake',color:0x9a65ff,cost:8200}
];
const BUILD_STYLES = [
  {name:'Oak',color:0xb3813f,cost:0},{name:'Stone',color:0x8d939c,cost:300},{name:'Neon',color:0x243066,cost:600},
  {name:'Steel',color:0x7e8fa6,cost:900},{name:'Candy',color:0xff6fa8,cost:1200},{name:'Golden',color:0xe8b923,cost:2000},
  {name:'Pulse Glass',color:0x55e9ff,cost:2600},{name:'Void Rift',color:0x8b55ff,cost:3200},
  {name:'Toxic Circuit',color:0x65f078,cost:3800},{name:'Royal Prism',color:0xe3b6ff,cost:4500}
];
const ROULETTE_ORDER = [29,28,30,13,27,3,5,17,15,25,1,19,11,10,24,2,12,26,16,6,20,8,22,9,23,18,4,7,21,14,0];
const NAMES = ['RiftRunner','NovaByte','CrateKing','Minty','Vex','PixelPilot','Drift','Static','Echo','Rogue','Mako','Kairo','Sparrow','Juno','Hex','Orbit','Frostbite','Talon','Blitz','Kinetic','Rook','Comet','Axel'];

const state = {
  mode:'br',running:false,paused:false,elapsed:0,last:0,fps:60,fpsFrames:0,fpsTime:0,
  kills:0,alive:24,health:100,shield:0,wood:250,medkits:0,shields:0,chugs:0,splashes:0,
  player:null,bots:[],bosses:[],bullets:[],loot:[],particles:[],trailAt:0,builds:[],colliders:[],remotePlayers:new Map(),
  slots:[],selected:0,mouseDown:false,keys:{},cameraYaw:0,cameraPitch:-.08,
  storm:{phase:0,radius:145,start:145,target:145,timer:42,elapsed:0,damageTick:0,cx:0,cz:0},
  box:{round:1,playerScore:0,botScore:0,roundEnded:false,nextRoundAt:0,totalKills:0},roulette:{index:0,kills:0,deaths:0,respawnAt:0,timeLimit:300},botRespawns:[],
  shard:null,shardActiveUntil:0,shardCooldownUntil:0,dashes:0,dashChargeAt:0,
  itemUse:null,reloadTimer:0,fireTimer:0,jumpVelocity:0,wasMoving:false,tipTimer:0,
  coins:0,xp:0,level:1,totalKills:0,wins:0,matches:0,skin:'Blaze',ownedSkins:['Blaze'],hat:'None',ownedHats:['None'],trail:'Default',ownedTrails:['Default'],buildStyle:'Oak',ownedBuilds:['Oak'],premiumPass:false,
  upgrades:{health:0,reload:0,wood:0},settings:{quality:'high',fov:78,sensitivity:1,showFps:false},
  challenge:{matches:0,kills:0,loot:0,claimed:[]},roomSocket:null,roomCode:'',roomHost:false,roomMode:'br',roomPlayerId:'',queueMode:false,
  menuTime:0,saveTimer:0,invulnerable:0
};

let scene,camera,renderer,clock,terrain,water,playerModel,stormRing,coreMesh,coreRing,menuCameraTarget;
let raycaster = new THREE.Raycaster();
let collisionBuildings = [];
let lastHudUpdate = 0;
let lastNetUpdate = 0;
let trailerFrame = 0;
const vForward = new THREE.Vector3();
const vRight = new THREE.Vector3();
const vMove = new THREE.Vector3();
const vAim = new THREE.Vector3();
const vTemp = new THREE.Vector3();
const materialCache = new Map();

function mat(color,roughness=.82,metalness=0,emissive=0,emissiveIntensity=0){
  const key=[color,roughness,metalness,emissive,emissiveIntensity].join(':');
  if(materialCache.has(key))return materialCache.get(key);
  const m=new THREE.MeshStandardMaterial({color,roughness,metalness,emissive,emissiveIntensity});
  materialCache.set(key,m);return m;
}
function addBox(parent,w,h,d,color,x,y,z,options={}){
  const mesh=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),options.material||mat(color,options.roughness??.8,options.metalness??0,options.emissive??0,options.emissiveIntensity??0));
  mesh.position.set(x,y,z);mesh.castShadow=options.shadow!==false;mesh.receiveShadow=true;
  if(options.rotationY)mesh.rotation.y=options.rotationY;
  parent.add(mesh);return mesh;
}
function rand(min,max){return min+Math.random()*(max-min)}
function clamp(v,min,max){return Math.max(min,Math.min(max,v))}
function dist2(a,b){const dx=a.x-b.x,dz=a.z-b.z;return Math.sqrt(dx*dx+dz*dz)}
function groundHeight(x,z){
  const r=Math.sqrt(x*x+z*z);
  const hills=Math.sin(x*.052)*1.65+Math.cos(z*.047)*1.4+Math.sin((x+z)*.031)*1.25+Math.cos((x-z)*.075)*.45;
  const ridge=Math.max(0,1-Math.abs(x+z*.42)/38)*7;
  const islandEdge=Math.max(0,r-117)*.12;
  return hills+ridge-islandEdge-1.2;
}
function toast(message){
  const el=$('toast');if(!el)return;el.textContent=message;el.classList.remove('hidden');
  clearTimeout(toast.timer);toast.timer=setTimeout(()=>el.classList.add('hidden'),2300);
}
function show(id){$(id)?.classList.remove('hidden')}
function hide(id){$(id)?.classList.add('hidden')}
function asset(name){return ASSET+encodeURIComponent(name).replace(/%2F/g,'/')}
function randomTier(){const r=Math.random();return r<.5?0:r<.79?1:r<.93?2:r<.985?3:4}

function loadSave(){
  try{
    const saved=JSON.parse(localStorage.getItem('pixelroyale3d-save')||'{}');
    for(const k of ['coins','xp','level','totalKills','wins','matches','skin','premiumPass'])if(saved[k]!==undefined)state[k]=saved[k];
    if(Array.isArray(saved.ownedSkins))state.ownedSkins=saved.ownedSkins;
    for(const key of ['hat','trail','buildStyle'])if(saved[key]!==undefined)state[key]=saved[key];
    if(Array.isArray(saved.ownedHats))state.ownedHats=saved.ownedHats;
    if(Array.isArray(saved.ownedTrails))state.ownedTrails=saved.ownedTrails;
    if(Array.isArray(saved.ownedBuilds))state.ownedBuilds=saved.ownedBuilds;
    if(saved.upgrades)Object.assign(state.upgrades,saved.upgrades);
    if(saved.settings)Object.assign(state.settings,saved.settings);
    if(saved.challenge)Object.assign(state.challenge,saved.challenge);
  }catch(e){console.warn('Save data could not be read',e)}
  state.level=Math.max(1,Math.floor(state.xp/500)+1);
  $('fps-counter').classList.toggle('hidden',!state.settings.showFps);
  if(!state.ownedSkins.includes('Blaze'))state.ownedSkins.unshift('Blaze');
  if(!state.ownedSkins.includes(state.skin))state.skin='Blaze';
  for(const [value,list,key] of [['None',state.ownedHats,'hat'],['Default',state.ownedTrails,'trail'],['Oak',state.ownedBuilds,'buildStyle']]){if(!list.includes(value))list.unshift(value);if(!list.includes(state[key]))state[key]=value;}
  updateProfile();
}
function save(){
  try{localStorage.setItem('pixelroyale3d-save',JSON.stringify({
    coins:state.coins,xp:state.xp,level:state.level,totalKills:state.totalKills,wins:state.wins,matches:state.matches,
    skin:state.skin,ownedSkins:state.ownedSkins,hat:state.hat,ownedHats:state.ownedHats,trail:state.trail,ownedTrails:state.ownedTrails,buildStyle:state.buildStyle,ownedBuilds:state.ownedBuilds,premiumPass:state.premiumPass,upgrades:state.upgrades,settings:state.settings,challenge:state.challenge
  }))}catch(e){console.warn('Could not save progress',e)}
}
function updateProfile(){
  $('wallet-coins').textContent=state.coins.toLocaleString();
  $('profile-level').textContent='LEVEL '+state.level+' · '+(state.level<10?'RECRUIT':state.level<25?'FIELD AGENT':'ELITE');
  $('profile-name').textContent=(localStorage.getItem('pixelroyale-name')||'PLAYER').toUpperCase();
  $('profile-avatar').textContent=$('profile-name').textContent.slice(0,1);
}
function addProgress(xp,coins){
  state.xp+=xp;state.coins+=coins;state.level=Math.floor(state.xp/500)+1;updateProfile();save();
}

function initRenderer(){
  scene=new THREE.Scene();
  scene.background=new THREE.Color(0x83bdc9);
  scene.fog=new THREE.FogExp2(0x83bdc9,.0027);
  camera=new THREE.PerspectiveCamera(state.settings.fov,innerWidth/innerHeight,.1,650);
  renderer=new THREE.WebGLRenderer({canvas:$('game-canvas'),antialias:true,alpha:false,powerPreference:'high-performance'});
  renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));
  renderer.setSize(innerWidth,innerHeight);
  renderer.shadowMap.enabled=true;
  renderer.shadowMap.type=THREE.PCFSoftShadowMap;
  renderer.outputColorSpace=THREE.SRGBColorSpace;
  renderer.toneMapping=THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure=1.12;
  const hemi=new THREE.HemisphereLight(0xd6f2ff,0x526b4b,2.25);scene.add(hemi);
  const sun=new THREE.DirectionalLight(0xffedcf,3.1);sun.position.set(-75,105,48);sun.castShadow=true;
  sun.shadow.mapSize.set(2048,2048);sun.shadow.camera.left=-170;sun.shadow.camera.right=170;sun.shadow.camera.top=170;sun.shadow.camera.bottom=-170;sun.shadow.bias=-.00018;scene.add(sun);
  const fill=new THREE.DirectionalLight(0x65b6cd,.7);fill.position.set(70,32,-60);scene.add(fill);
  water=new THREE.Mesh(new THREE.PlaneGeometry(900,900),mat(0x1d657b,.3,.35));
  water.rotation.x=-Math.PI/2;water.position.y=-7;water.receiveShadow=true;scene.add(water);
  buildTerrain();buildIsland();buildPulseCore();
  stormRing=new THREE.Mesh(new THREE.TorusGeometry(1,.34,8,160),new THREE.MeshBasicMaterial({color:0x4ab9ff,transparent:true,opacity:.78}));
  stormRing.rotation.x=Math.PI/2;stormRing.position.y=16;scene.add(stormRing);
  const target=new THREE.Object3D();target.position.set(0,0,0);scene.add(target);menuCameraTarget=target;
  camera.position.set(0,17,32);camera.lookAt(0,0,0);
}
function buildTerrain(){
  const size=320,segments=128,geo=new THREE.PlaneGeometry(size,size,segments,segments);
  const pos=geo.attributes.position;const colors=[];
  const green=new THREE.Color(0x648f59),light=new THREE.Color(0x83a966),dark=new THREE.Color(0x496f50),sand=new THREE.Color(0xc1ad78),rock=new THREE.Color(0x77827c);
  for(let i=0;i<pos.count;i++){
    const x=pos.getX(i),z=-pos.getY(i),h=groundHeight(x,z);
    pos.setZ(i,h);
    const r=Math.sqrt(x*x+z*z);let c=green.clone();
    if(r>116)c.lerp(sand,clamp((r-116)/26,0,.85));
    if(h>4)c.lerp(rock,clamp((h-4)/6,0,.7));
    const variation=(Math.sin(x*.23+z*.12)+Math.cos(z*.2-x*.08))*.035;
    c.offsetHSL(0,0,variation);colors.push(c.r,c.g,c.b);
  }
  geo.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));geo.computeVertexNormals();
  terrain=new THREE.Mesh(geo,new THREE.MeshStandardMaterial({vertexColors:true,roughness:1,flatShading:true}));
  terrain.rotation.x=-Math.PI/2;terrain.receiveShadow=true;scene.add(terrain);
  const beach=new THREE.Mesh(new THREE.RingGeometry(116,145,128),mat(0xb7a77a,1));beach.rotation.x=-Math.PI/2;beach.position.y=-4.3;scene.add(beach);
}
const LOCATIONS=[
  {name:'SIGNAL RIDGE',x:-70,z:-58,tone:0x82939b,type:'radio'},
  {name:'DUSTY DEPOT',x:57,z:-60,tone:0xb18c61,type:'warehouse'},
  {name:'FROST FIELD',x:-76,z:52,tone:0x9bbabe,type:'frost'},
  {name:'PULSE CORE',x:62,z:54,tone:0x3e7284,type:'lab'},
  {name:'RESEARCH SITE',x:0,z:0,tone:0x778995,type:'lab'},
  {name:'OLD HARBOR',x:0,z:91,tone:0x728995,type:'harbor'}
];
function buildIsland(){
  const roadMat=mat(0x56605b,1),lineMat=mat(0xc4b784,1);
  const links=[[LOCATIONS[0],LOCATIONS[4]],[LOCATIONS[4],LOCATIONS[1]],[LOCATIONS[4],LOCATIONS[2]],[LOCATIONS[4],LOCATIONS[3]],[LOCATIONS[4],LOCATIONS[5]]];
  for(const pair of links){
    const a=pair[0],b=pair[1],dx=b.x-a.x,dz=b.z-a.z,len=Math.hypot(dx,dz),angle=Math.atan2(dx,dz);
    const road=new THREE.Mesh(new THREE.BoxGeometry(5,.12,len),roadMat);
    road.position.set((a.x+b.x)/2,groundHeight((a.x+b.x)/2,(a.z+b.z)/2)+.12,(a.z+b.z)/2);road.rotation.y=angle;road.receiveShadow=true;scene.add(road);
    for(let side=-1;side<=1;side+=2){
      const stripe=new THREE.Mesh(new THREE.BoxGeometry(.14,.13,len-2),lineMat);stripe.position.copy(road.position);stripe.position.x+=Math.cos(angle)*side*2.3;stripe.position.z-=Math.sin(angle)*side*2.3;stripe.rotation.y=angle;scene.add(stripe);
    }
  }
  for(let i=0;i<LOCATIONS.length;i++){
    const p=LOCATIONS[i];addBuilding(p);
    addLocationLabel(p.name,p.x,p.z);
  }
  const trunkGeo=new THREE.CylinderGeometry(.22,.38,3.1,6),leafGeo=new THREE.ConeGeometry(2.3,6.2,7);
  const trunkMat=mat(0x65472d),leafMats=[mat(0x285d43),mat(0x326d49),mat(0x3b794f)];
  for(let i=0;i<245;i++){
    const a=Math.random()*Math.PI*2,r=36+Math.random()*101,x=Math.cos(a)*r,z=Math.sin(a)*r;
    if(Math.sqrt(x*x+z*z)>143)continue;
    if(LOCATIONS.some(p=>Math.hypot(p.x-x,p.z-z)<23))continue;
    const group=new THREE.Group();group.position.set(x,groundHeight(x,z),z);group.rotation.y=Math.random()*Math.PI*2;
    const trunk=new THREE.Mesh(trunkGeo,trunkMat);trunk.position.y=1.5;trunk.castShadow=true;group.add(trunk);
    const crown=new THREE.Mesh(leafGeo,leafMats[i%leafMats.length]);crown.position.y=5.2+Math.random()*1.1;crown.scale.setScalar(.82+Math.random()*.5);crown.castShadow=true;group.add(crown);
    const crown2=new THREE.Mesh(new THREE.ConeGeometry(1.55,4.5,7),leafMats[(i+1)%leafMats.length]);crown2.position.y=7.3;crown2.castShadow=true;group.add(crown2);scene.add(group);
  }
  for(let i=0;i<80;i++){
    const a=Math.random()*Math.PI*2,r=28+Math.random()*115,x=Math.cos(a)*r,z=Math.sin(a)*r;
    if(LOCATIONS.some(p=>Math.hypot(p.x-x,p.z-z)<14))continue;
    const rock=new THREE.Mesh(new THREE.DodecahedronGeometry(rand(.5,1.5),0),mat(i%2?0x707b7d:0x8b9087));
    rock.position.set(x,groundHeight(x,z)+.45,z);rock.rotation.set(Math.random(),Math.random(),Math.random());rock.scale.set(1,.6,1.15);rock.castShadow=true;scene.add(rock);
  }
}
function addBuilding(point){
  const x=point.x,z=point.z,h=groundHeight(x,z),g=new THREE.Group();g.position.set(x,h,z);scene.add(g);
  const base=point.type==='lab'?0x3e5866:point.type==='warehouse'?0x8a755c:point.type==='frost'?0x829ca0:point.type==='harbor'?0x657d89:0x6b7e84;
  const wall=mat(base),roof=mat(point.type==='lab'?0x263d51:0x343e49,.75,.22),trim=mat(0x243747,.8,.25),windowMat=new THREE.MeshStandardMaterial({color:0x7dd9e5,emissive:0x1a7182,emissiveIntensity:.42,roughness:.25});
  const sizes=point.type==='lab'?[[15,9,12],[10,6,9]]:point.type==='warehouse'?[[20,8,14],[12,6,10]]:point.type==='harbor'?[[12,7,9],[9,5,8]]:[[12,7,10],[10,5,8]];
  for(let k=0;k<sizes.length;k++){
    const s=sizes[k],bx=(k===0?-8:9),bz=(k===0?0:10);const w=s[0],hh=s[1],d=s[2];
    addBox(g,w,.65,d,0x4c5553,bx,.35,bz);
    addBox(g,w,hh,d,base,bx,hh/2+.6,bz);
    addBox(g,w+.7,.55,d+.7,roof,bx,hh+.9,bz);
    addBox(g,w+.7,.23,.5,trim,bx,hh+1.28,bz-d/2);
    for(let q=-1;q<=1;q+=2){
      addBox(g,.18,hh+.3,.28,trim,bx+q*(w/2-.3),hh/2+.72,bz+d/2);
      addBox(g,1.65,1.3,.12,windowMat,bx+q*(w*.22),hh*.62,bz+d/2+.12,{material:windowMat,shadow:false});
    }
    addBox(g,1.8,3,.15,trim,bx,2.1,bz+d/2+.13);
    addBox(g,w+.25,.3,.35,trim,bx,1.05,bz+d/2+.06);
    for(let q=-1;q<=1;q++)addBox(g,.16,.18,d+.25,trim,bx+q*(w*.3),hh/2+.55,bz);
  }
  if(point.type==='radio'){
    const mast=new THREE.Group();mast.position.set(2,0,-9);g.add(mast);
    const pole=new THREE.Mesh(new THREE.CylinderGeometry(.18,.28,22,8),trim);pole.position.y=11;mast.add(pole);
    for(let y=5;y<22;y+=4){const ring=new THREE.Mesh(new THREE.TorusGeometry(1.7,.08,6,16),mat(0x8b9ca7,.6,.4));ring.position.y=y;mast.add(ring)}
    addBox(g,7,.6,5,trim,0,12,-8);
  }
  if(point.type==='lab'){
    const beacon=new THREE.Mesh(new THREE.CylinderGeometry(.5,.8,9,8),new THREE.MeshStandardMaterial({color:0x4de5ed,emissive:0x23d6dd,emissiveIntensity:1.3,metalness:.35}));beacon.position.set(0,8,0);g.add(beacon);
    for(let q=-1;q<=1;q+=2){addBox(g,.22,8,.22,0x3a6672,q*11,4,-8);addBox(g,5,.2,.2,0x5be9ec,q*11,8,-8)}
  }
  if(point.type==='frost'){
    for(let i=0;i<9;i++){const crystal=new THREE.Mesh(new THREE.OctahedronGeometry(rand(1.1,2.5)),new THREE.MeshStandardMaterial({color:0x8ee9f4,emissive:0x276e9a,emissiveIntensity:.28,metalness:.25,roughness:.22}));crystal.position.set(rand(-19,19),2,rand(-15,15));crystal.scale.y=rand(1.5,3);crystal.castShadow=true;g.add(crystal)}
  }
  for(let i=0;i<8;i++){
    const crate=new THREE.Mesh(new THREE.BoxGeometry(2,1.5,2),mat(i%2?0x8e6a42:0x9d865e));crate.position.set(rand(-22,22),.8,rand(-19,19));crate.rotation.y=Math.random()*1.5;crate.castShadow=true;g.add(crate);
  }
  collisionBuildings.push({x:x-8,z:z,w:17,d:14},{x:x+9,z:z+10,w:13,d:11});
  addBox(g,point.type==='lab'?32:27,.45,point.type==='lab'?27:24,0x536b69,0,.15,0,{shadow:false});
}
function addLocationLabel(name,x,z){
  const c=document.createElement('canvas');c.width=512;c.height=96;const ctx=c.getContext('2d');
  ctx.fillStyle='rgba(5,14,25,.78)';ctx.beginPath();ctx.roundRect(3,3,506,90,15);ctx.fill();
  ctx.strokeStyle='#70e6e1';ctx.lineWidth=4;ctx.stroke();
  ctx.fillStyle='#effbff';ctx.font='900 38px Arial';ctx.textAlign='center';ctx.fillText(name,256,60);
  const texture=new THREE.CanvasTexture(c);texture.colorSpace=THREE.SRGBColorSpace;
  const sprite=new THREE.Sprite(new THREE.SpriteMaterial({map:texture,transparent:true,depthWrite:false}));
  sprite.position.set(x,15,z);sprite.scale.set(22,4.1,1);scene.add(sprite);
}
function buildPulseCore(){
  const group=new THREE.Group();group.position.set(62,groundHeight(62,54),54);scene.add(group);
  const base=new THREE.Mesh(new THREE.CylinderGeometry(13,16,2,12),mat(0x223d54,.45,.5));base.position.y=1;group.add(base);
  for(let i=0;i<8;i++){const a=i*Math.PI/4,beam=addBox(group,.4,12,.4,0x3e8a9a,Math.cos(a)*8,7,Math.sin(a)*8);beam.material=mat(0x54e9ee,.4,.4,0x23b9d0,.6)}
  coreMesh=new THREE.Mesh(new THREE.OctahedronGeometry(4.4,1),new THREE.MeshStandardMaterial({color:0x47efff,emissive:0x087f9b,emissiveIntensity:2.8,metalness:.55,roughness:.17}));
  coreMesh.position.set(0,10,0);group.add(coreMesh);
  coreRing=new THREE.Mesh(new THREE.TorusGeometry(9,.28,8,80),new THREE.MeshStandardMaterial({color:0xe34ad5,emissive:0x8c238a,emissiveIntensity:1.3,metalness:.5,roughness:.3}));
  coreRing.position.y=10;coreRing.rotation.x=Math.PI/2;group.add(coreRing);
  for(let i=0;i<5;i++){const ring=new THREE.Mesh(new THREE.TorusGeometry(4+i*2,.08,6,64),new THREE.MeshBasicMaterial({color:i%2?0xff48c9:0x4beaff,transparent:true,opacity:.7}));ring.position.y=4+i*2.1;ring.rotation.x=Math.PI/2;group.add(ring)}
}

function buildWeaponModel(group,id){
  group.clear();
  const weapon=WEAPONS[id]||WEAPONS[0],name=weapon.name.toLowerCase(),pulse=!!weapon.pulse;
  const body=mat(pulse?0x25334c:0x344451,.42,.5),dark=mat(0x101923,.42,.55),accent=new THREE.MeshStandardMaterial({color:weapon.color,emissive:weapon.color,emissiveIntensity:pulse?1.35:.18,metalness:.42,roughness:.28});
  const pistol=name.includes('pistol')||name.includes('hand cannon')||name.includes('flint');
  const shotgun=name.includes('shotgun')||name.includes('scattergun')||name.includes('double tap');
  const sniper=name.includes('sniper')||name.includes('longshot')||name.includes('scout')||name.includes('oracle');
  const length=sniper?1.45:shotgun?1.05:pistol?.48:.88;
  const width=shotgun?.38:pistol?.25:.3;
  addBox(group,width,.23,.62,body,0,0,.12);
  addBox(group,width*.72,.1,.32,dark,0,-.09,-.22);
  addBox(group,.13,.31,.22,dark,0,-.24,-.02);
  const barrel=new THREE.Mesh(new THREE.CylinderGeometry(shotgun?.075:.055,shotgun?.085:.06,length,9),dark);barrel.rotation.x=Math.PI/2;barrel.position.set(0,.015,.39+length/2);group.add(barrel);
  const muzzle=new THREE.Mesh(new THREE.CylinderGeometry(shotgun?.11:.08,shotgun?.11:.08,.15,10),accent);muzzle.rotation.x=Math.PI/2;muzzle.position.set(0,.015,.4+length);group.add(muzzle);
  if(shotgun){for(const side of [-1,1]){const tube=new THREE.Mesh(new THREE.CylinderGeometry(.047,.047,.8,8),dark);tube.rotation.x=Math.PI/2;tube.position.set(side*.105,-.05,.72);group.add(tube)}}
  if(sniper||!pistol){
    addBox(group,.28,.12,.3,dark,0,.17,.2);
    const optic=new THREE.Mesh(new THREE.CylinderGeometry(.09,.09,.24,10),accent);optic.rotation.x=Math.PI/2;optic.position.set(0,.26,.18);group.add(optic);
    addBox(group,.07,.09,.7,accent,0,.14,.4,{shadow:false});
  }
  if(pulse){addBox(group,.08,.08,.8,accent,width*.62,.12,.28,{shadow:false});const core=new THREE.Mesh(new THREE.SphereGeometry(.11,8,7),accent);core.position.set(0,.17,.1);group.add(core)}
  const grip=new THREE.Mesh(new THREE.BoxGeometry(.13,.36,.18),dark);grip.position.set(0,-.26,-.02);grip.rotation.x=-.14;group.add(grip);
  if(!pistol){const mag=new THREE.Mesh(new THREE.BoxGeometry(.15,.34,.22),body);mag.position.set(0,-.26,.18);mag.rotation.x=.08;group.add(mag)}
  group.userData.weaponId=id;
}
function updateWeaponVisual(actor,id){
  if(!actor?.userData?.gunGroup||actor.userData.visualWeaponId===id)return;
  buildWeaponModel(actor.userData.gunGroup,id);actor.userData.visualWeaponId=id;
}
function createActor(options={}){
  const root=new THREE.Group();const mainColor=options.color??0x36c7bc;
  const outfit=mat(mainColor,.72,.08),dark=mat(0x182a39,.75,.12),skin=mat(options.skinColor??0xe5b58c),boot=mat(0x101a24,.9),visor=new THREE.MeshStandardMaterial({color:options.isBoss?mainColor:0x6fe9ec,emissive:options.isBoss?mainColor:0x155c66,emissiveIntensity:options.isBoss?1.1:.3,metalness:.55,roughness:.2});
  const torso=new THREE.Mesh(new THREE.CapsuleGeometry(options.isBoss?1.05:.47,options.isBoss?1.4:.85,5,9),outfit);torso.position.y=1.35;torso.castShadow=true;root.add(torso);
  const head=new THREE.Mesh(new THREE.SphereGeometry(options.isBoss?.76:.39,14,12),skin);head.position.y=2.55;head.castShadow=true;root.add(head);
  const face=new THREE.Mesh(new THREE.BoxGeometry(options.isBoss?1.1:.65,.2,.12),visor);face.position.set(0,2.56,options.isBoss?.68:.36);root.add(face);
  const pack=new THREE.Mesh(new THREE.BoxGeometry(options.isBoss?1.6:.76,options.isBoss?1.5:.9,.35),dark);pack.position.set(0,1.45,-.48);root.add(pack);
  const limbs=[];
  for(const side of [-1,1]){
    const arm=new THREE.Mesh(new THREE.CapsuleGeometry(options.isBoss?.28:.17,options.isBoss?.9:.63,4,7),outfit);arm.position.set(side*(options.isBoss?1.15:.58),1.55,.03);arm.rotation.z=side*.13;arm.castShadow=true;root.add(arm);limbs.push(arm);
    const leg=new THREE.Mesh(new THREE.CapsuleGeometry(options.isBoss?.35:.2,options.isBoss?1.1:.77,4,7),dark);leg.position.set(side*(options.isBoss?.48:.24),.47,0);leg.castShadow=true;root.add(leg);limbs.push(leg);
    const foot=new THREE.Mesh(new THREE.BoxGeometry(options.isBoss?.85:.48,.28,.75),boot);foot.position.set(side*(options.isBoss?.48:.24),.16,.13);root.add(foot);
  }
  const armour=mat(0x263a4d,.46,.28),metal=mat(0x718b9c,.38,.72),accent=new THREE.MeshStandardMaterial({color:mainColor,emissive:mainColor,emissiveIntensity:options.isBoss?1.3:.42,metalness:.4,roughness:.3});
  const neck=new THREE.Mesh(new THREE.CylinderGeometry(.17,.2,.28,9),skin);neck.position.y=2.12;root.add(neck);
  const chestPlate=new THREE.Mesh(new THREE.BoxGeometry(options.isBoss?1.55:.68,options.isBoss?1.05:.78,.16),armour);chestPlate.position.set(0,1.56,.39);chestPlate.rotation.x=-.08;chestPlate.castShadow=true;root.add(chestPlate);
  const chestMark=new THREE.Mesh(new THREE.OctahedronGeometry(options.isBoss?.25:.13,0),accent);chestMark.position.set(0,1.62,.51);root.add(chestMark);
  const belt=new THREE.Mesh(new THREE.BoxGeometry(options.isBoss?1.55:.78,.2,.62),metal);belt.position.y=.91;root.add(belt);
  const helmet=new THREE.Mesh(new THREE.SphereGeometry(options.isBoss?.78:.405,12,9),armour);helmet.scale.y=.38;helmet.position.set(0,2.84,0);helmet.castShadow=true;root.add(helmet);
  const helmetStripe=new THREE.Mesh(new THREE.BoxGeometry(options.isBoss?1.16:.54,.12,.12),accent);helmetStripe.position.set(0,2.91,.31);root.add(helmetStripe);
  const backStripe=new THREE.Mesh(new THREE.BoxGeometry(options.isBoss?1.25:.52,.16,.08),accent);backStripe.position.set(0,1.75,-.67);root.add(backStripe);
  for(const side of [-1,1]){
    const shoulder=new THREE.Mesh(new THREE.SphereGeometry(options.isBoss?.43:.27,9,7),metal);shoulder.position.set(side*(options.isBoss?1.22:.57),1.93,0);shoulder.scale.set(1,.72,1.12);shoulder.castShadow=true;root.add(shoulder);
    const forearm=new THREE.Mesh(new THREE.BoxGeometry(options.isBoss?.52:.3,options.isBoss?.42:.25,.38),armour);forearm.position.set(side*(options.isBoss?1.34:.64),1.2,.12);forearm.rotation.z=side*-.12;root.add(forearm);
    const knee=new THREE.Mesh(new THREE.BoxGeometry(options.isBoss?.68:.34,.27,.36),metal);knee.position.set(side*(options.isBoss?.48:.24),.51,.19);root.add(knee);
    const sole=new THREE.Mesh(new THREE.BoxGeometry(options.isBoss?.92:.52,.12,.8),mat(0x060d15));sole.position.set(side*(options.isBoss?.48:.24),.055,.16);root.add(sole);
  }
  const gunGroup=new THREE.Group();gunGroup.position.set(.48,1.45,.47);root.add(gunGroup);
  buildWeaponModel(gunGroup,options.weaponId??0);
  root.userData={
    isPlayer:!!options.isPlayer,isBot:!!options.isBot,isBoss:!!options.isBoss,isRemote:!!options.isRemote,
    name:options.name||'PLAYER',health:options.health??100,maxHealth:options.maxHealth??100,shield:options.shield??0,
    dead:false,speed:options.speed??4.1,weaponId:options.weaponId??0,ammo:options.ammo??WEAPONS[options.weaponId??0].mag,
    shootTimer:rand(.2,1),reloadTimer:0,target:null,thinkTimer:0,wanderAngle:Math.random()*6.28,limbs,gunGroup,
    moving:false,phase:Math.random()*6,damageFlash:0,visualWeaponId:options.weaponId??0
  };
  if(options.isBoss){
    root.scale.setScalar(1.85);
    const shoulder1=new THREE.Mesh(new THREE.SphereGeometry(.58,10,8),visor);shoulder1.position.set(-1.08,1.95,0);root.add(shoulder1);
    const shoulder2=shoulder1.clone();shoulder2.position.x=1.08;root.add(shoulder2);
    const crown=new THREE.Mesh(new THREE.TorusGeometry(.68,.1,8,28),visor);crown.position.y=3.45;root.add(crown);
  }
  return root;
}
function createWeaponSlot(id,tier=0,ammo){
  const w=WEAPONS[id]||WEAPONS[0];return {id,tier,ammo:ammo??w.mag};
}
function setPlayerLook(){
  if(!state.player)return;
  const skin=SKINS.find(s=>s.name===state.skin)||SKINS[0];
  const root=state.player;const torso=root.children[0];if(torso)torso.material=mat(skin.color);
}
function randomSpawn(min=35,max=125){
  for(let i=0;i<80;i++){
    const a=Math.random()*Math.PI*2,r=rand(min,max),x=Math.cos(a)*r,z=Math.sin(a)*r;
    if(Math.sqrt(x*x+z*z)<147&&!collisionBuildings.some(c=>Math.abs(c.x-x)<c.w/2+3&&Math.abs(c.z-z)<c.d/2+3))return{x,z};
  }
  return{x:rand(-90,90),z:rand(-90,90)};
}
function addActorToWorld(actor,x,z){
  actor.position.set(x,groundHeight(x,z),z);scene.add(actor);return actor;
}
function removeEntity(group){
  if(group?.parent)group.parent.remove(group);
}
function spawnBot(i){
  const p=randomSpawn(48,132),weaponPool=[0,1,3,5,11,13,7,8],weaponId=weaponPool[Math.floor(Math.random()*weaponPool.length)];
  const colors=[0xe29d46,0x957ce2,0x5f9a70,0xd36c66,0x59a6c4,0xb4aa5d,0xb66d9a];
  const actor=createActor({isBot:true,name:NAMES[i%NAMES.length],color:colors[i%colors.length],weaponId,health:100,shield:Math.random()<.24?25:0,speed:rand(3.1,4.4)});
  actor.userData.ammo=WEAPONS[weaponId].mag;actor.userData.botIndex=i;actor.userData.tier=randomTier();actor.userData.shardType=null;actor.userData.shardActiveUntil=0;actor.userData.shardCooldownUntil=0;actor.userData.lootThink=0;
  addActorToWorld(actor,p.x,p.z);state.bots.push(actor);
}
function spawnBoss(cfg){
  const p=randomSpawn(5,20);const actor=createActor({isBoss:true,name:cfg.name,color:cfg.color,health:760,maxHealth:760,weaponId:cfg.weapon,speed:4.7});
  actor.userData.bossConfig=cfg;actor.userData.attackTimer=2+Math.random();actor.userData.telegraph=0;actor.userData.phase=1;
  let pos=null;for(let i=0;i<90;i++){const a=Math.random()*Math.PI*2,d=25+Math.random()*18,x=cfg.x+Math.cos(a)*d,z=cfg.z+Math.sin(a)*d;if(!collides(x,z,2)){pos={x,z};break}}if(!pos)pos=randomSpawn(75,110);addActorToWorld(actor,pos.x,pos.z);state.bosses.push(actor);
}
function makeLootMesh(kind,color){
  const g=new THREE.Group();
  const ring=new THREE.Mesh(new THREE.TorusGeometry(.62,.07,7,24),new THREE.MeshBasicMaterial({color,transparent:true,opacity:.75}));ring.rotation.x=Math.PI/2;ring.position.y=.25;g.add(ring);
  let shape;
  if(kind==='weapon')shape=new THREE.Mesh(new THREE.BoxGeometry(.55,.32,1.05),mat(0x344c5a,.45,.35));
  else if(kind==='shard')shape=new THREE.Mesh(new THREE.OctahedronGeometry(.58,1),new THREE.MeshStandardMaterial({color,emissive:color,emissiveIntensity:1.25,metalness:.3,roughness:.2}));
  else shape=new THREE.Mesh(new THREE.DodecahedronGeometry(.5,0),new THREE.MeshStandardMaterial({color,emissive:color,emissiveIntensity:.3,metalness:.15,roughness:.35}));
  shape.position.y=.55;shape.castShadow=true;g.add(shape);return g;
}
function createLoot(data){
  const color=data.kind==='shard'?new THREE.Color(data.shard.color).getHex():data.kind==='weapon'?TIERS[data.tier||0].color:data.kind==='medkit'?0x4dce76:data.kind==='shield'?0x4cb9ef:data.kind==='chug'?0x9d6cf0:data.kind==='splash'?0xc45aff:0xf2c66d;
  const mesh=makeLootMesh(data.kind,color);const x=data.x,z=data.z;mesh.position.set(x,groundHeight(x,z)+.7,z);scene.add(mesh);
  state.loot.push({...data,mesh,createdAt:state.elapsed,expiresAt:state.elapsed+85});
  return mesh;
}
function spawnWorldLoot(count=72){
  const weaponPool=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27];
  for(let i=0;i<count;i++){
    const p=randomSpawn(8,130),roll=Math.random();
    if(roll<.60){const id=weaponPool[Math.floor(Math.random()*weaponPool.length)];createLoot({kind:'weapon',weaponId:id,tier:randomTier(),x:p.x,z:p.z})}
    else if(roll<.73)createLoot({kind:'medkit',x:p.x,z:p.z});
    else if(roll<.86)createLoot({kind:'shield',x:p.x,z:p.z});
    else if(roll<.92)createLoot({kind:'chug',x:p.x,z:p.z});
    else if(roll<.97)createLoot({kind:'splash',x:p.x,z:p.z});
    else createLoot({kind:'weapon',weaponId:5,tier:randomTier(),x:p.x,z:p.z});
  }
}
function clearMatchEntities(){
  for(const a of state.bots)removeEntity(a);
  for(const a of state.bosses)removeEntity(a);
  for(const b of state.bullets)removeEntity(b.mesh);
  for(const l of state.loot)removeEntity(l.mesh);
  for(const p of state.particles)removeEntity(p.mesh);
  for(const w of state.builds){removeEntity(w.mesh);const i=state.colliders.indexOf(w.collider);if(i>=0)state.colliders.splice(i,1)}
  for(const r of state.remotePlayers.values())removeEntity(r);
  state.bots=[];state.bosses=[];state.bullets=[];state.loot=[];state.particles=[];state.trailAt=0;state.builds=[];state.remotePlayers.clear();
  state.colliders=collisionBuildings.slice();
}
function setupPlayer(){
  if(state.player)removeEntity(state.player);
  const skin=SKINS.find(s=>s.name===state.skin)||SKINS[0];
  state.player=createActor({isPlayer:true,name:'YOU',color:skin.color,health:100,maxHealth:100,weaponId:0});
  applyPlayerCosmetics(state.player);
  state.player.userData.ammo=WEAPONS[0].mag;
  addActorToWorld(state.player,0,0);
}
function resetPlayerStats(){
  state.health=100;state.shield=state.mode==='box'?100:state.mode==='roulette'?50:Math.min(25,state.upgrades.health*5);state.wood=250+state.upgrades.wood*25;state.medkits=0;state.shields=0;state.chugs=0;state.splashes=0;
  state.slots=state.mode==='box'?[createWeaponSlot(3),createWeaponSlot(2)]:state.mode==='roulette'?[createWeaponSlot(ROULETTE_ORDER[0])]:[createWeaponSlot(0)];
  state.selected=0;state.reloadTimer=0;state.itemUse=null;state.fireTimer=0;state.invulnerable=2;
  state.shard=null;state.shardActiveUntil=0;state.shardCooldownUntil=0;state.dashes=0;state.dashChargeAt=0;
  state.player.userData.health=100;state.player.userData.shield=state.shield;state.player.userData.dead=false;state.player.visible=true;
  state.player.userData.ammo=state.slots[0].ammo;state.player.userData.weaponId=state.slots[0].id;
}
function startMatch(mode,fromRoom=false){
  if(!scene)return;
  state.mode=mode==='box'?'box':mode==='roulette'?'roulette':'br';state.running=true;state.paused=false;state.elapsed=0;state.kills=0;state.botRespawns=[];state.roulette={index:0,kills:0,deaths:0,respawnAt:0,timeLimit:300};
  clearMatchEntities();setupPlayer();resetPlayerStats();
  state.storm={phase:0,radius:145,start:145,target:145,timer:42,elapsed:0,damageTick:0,cx:0,cz:0};
  state.box={round:1,playerScore:0,botScore:0,roundEnded:false,nextRoundAt:0,totalKills:0};
  if(state.mode==='br'){
    for(let i=0;i<23;i++)spawnBot(i);
    for(const b of BOSSES)spawnBoss(b);
    spawnWorldLoot(82);
    const drop=randomSpawn(55,108);state.player.position.set(drop.x,groundHeight(drop.x,drop.z)+.05,drop.z);if(playerModel)playerModel.visible=false;
    state.cameraYaw=Math.atan2(-drop.x,-drop.z);
    setTip('Drop into the island. Find weapons, gather shields and survive the storm.');
  }else if(state.mode==='box'){
    if(!state.boxArenaBuilt){buildBoxArena();state.boxArenaBuilt=true;}startBoxRound(true);if(playerModel)playerModel.visible=false;
    setTip('BOX FIGHTS · Build, edit and win five rounds. You start with an AR and a shotgun.');
  }else{
    for(let i=0;i<23;i++)spawnBot(i);
    const drop=randomSpawn(35,90);state.player.position.set(drop.x,groundHeight(drop.x,drop.z)+.05,drop.z);if(playerModel)playerModel.visible=false;
    state.cameraYaw=Math.atan2(-drop.x,-drop.z);
    state.slots=[createWeaponSlot(ROULETTE_ORDER[0])];state.selected=0;state.player.userData.weaponId=ROULETTE_ORDER[0];state.player.userData.ammo=WEAPONS[ROULETTE_ORDER[0]].mag;
    updateWeaponVisual(state.player,ROULETTE_ORDER[0]);setTip('PURE WEAPON ROULETTE · EACH ELIMINATION ADVANCES YOUR WEAPON · FIRST TO 30');
  }
  hide('menu');hide('result-overlay');hide('pause-overlay');hide('lobby');show('game-hud');
  $('round-chip').classList.toggle('hidden',state.mode==='br');$('round-chip').querySelector('small').textContent=state.mode==='roulette'?'KILLS / 30':'ROUND';
  $('alive-count').parentElement.querySelector('small').textContent=state.mode==='box'?'PLAYERS':'PLAYERS LEFT';
  if(stormRing)stormRing.visible=state.mode==='br';
  $('boss-hud').classList.toggle('hidden',state.mode!=='br');
  state.last=performance.now();state.menuTime=0;state.saveTimer=0;
  updateHud(true);
  if(!fromRoom&&state.roomSocket&&state.roomSocket.readyState===WebSocket.OPEN)state.roomSocket.send(JSON.stringify({type:'start_game'}));
  if(document.pointerLockElement!==$('game-canvas'))toast('Click the island to lock your mouse and start playing.');
}
function setTip(text){$('game-tip').textContent=text;state.tipTimer=4}
function buildBoxArena(){
  const arenaZ=-98;const floor=new THREE.Mesh(new THREE.CylinderGeometry(28,29,.7,12),mat(0x394e54));floor.position.set(0,groundHeight(0,arenaZ)-.25,arenaZ);floor.receiveShadow=true;scene.add(floor);
  const markings=new THREE.Mesh(new THREE.TorusGeometry(21,.12,6,96),new THREE.MeshBasicMaterial({color:0x50d7d1}));markings.rotation.x=Math.PI/2;markings.position.set(0,groundHeight(0,arenaZ)+.15,arenaZ);scene.add(markings);
  for(let i=0;i<4;i++){
    const a=i*Math.PI/2,x=Math.cos(a)*28,z=arenaZ+Math.sin(a)*28;
    const post=addBox(scene,1.1,5,1.1,0x273b4a,x,groundHeight(x,z)+2.2,z);
    const bar=addBox(scene,1,3.1,1,0x597a82,x,groundHeight(x,z)+6,z);bar.material=mat(0x597a82,.5,.45);
  }
  addBox(scene,42,.6,.7,0x526a70,0,groundHeight(0,arenaZ-28)+.1,arenaZ-28);
  addBox(scene,42,.6,.7,0x526a70,0,groundHeight(0,arenaZ+28)+.1,arenaZ+28);
  addBox(scene,.7,.6,42,0x526a70,-28,groundHeight(-28,arenaZ)+.1,arenaZ);
  addBox(scene,.7,.6,42,0x526a70,28,groundHeight(28,arenaZ)+.1,arenaZ);
  const arenaBounds=[{x:0,z:arenaZ-28,w:42,d:1,yaw:0},{x:0,z:arenaZ+28,w:42,d:1,yaw:0},{x:-28,z:arenaZ,w:1,d:42,yaw:0},{x:28,z:arenaZ,w:1,d:42,yaw:0}];collisionBuildings.push(...arenaBounds);state.colliders.push(...arenaBounds);
  const label=addBox(scene,0.1,0.1,0.1,0xffffff,0,-30,arenaZ,{shadow:false});label.visible=false;
}
function startBoxRound(first=false){
  if(state.mode!=='box'||!state.running)return;
  for(const a of state.bots)removeEntity(a);state.bots=[];
  for(const b of state.bullets)removeEntity(b.mesh);state.bullets=[];
  for(const w of state.builds){removeEntity(w.mesh);const i=state.colliders.indexOf(w.collider);if(i>=0)state.colliders.splice(i,1)}state.builds=[];
  state.box.roundEnded=false;state.box.nextRoundAt=0;
  state.health=100;state.shield=100;state.player.userData.health=100;state.player.userData.shield=100;state.player.userData.dead=false;state.player.visible=true;
  state.slots=[createWeaponSlot(3),createWeaponSlot(2)];state.selected=0;state.wood=250;
  state.player.position.set(-2,groundHeight(-2,-86),-86);state.cameraYaw=Math.PI;
  const bot=createActor({isBot:true,name:NAMES[Math.floor(Math.random()*NAMES.length)],color:0xe19b48,weaponId:3,health:100,shield:100,speed:4.6});
  bot.userData.boxOpponent=true;bot.userData.ammo=WEAPONS[3].mag;addActorToWorld(bot,2,-110);state.bots.push(bot);
  if(!first){setTip('ROUND '+state.box.round+' · '+state.box.playerScore+'–'+state.box.botScore+' · FIRST TO FIVE')}
  updateHud(true);
}
function endBoxRound(winner){
  if(state.box.roundEnded)return;state.box.roundEnded=true;
  if(winner==='player'){state.box.playerScore++;state.box.totalKills++;state.kills++;state.challenge.kills++}
  else state.box.botScore++;
  state.box.nextRoundAt=state.elapsed+2.5;
  setTip(winner==='player'?'ROUND WON · '+state.box.playerScore+'–'+state.box.botScore:'ROUND LOST · '+state.box.playerScore+'–'+state.box.botScore);
  updateHud(true);
  if(state.box.playerScore>=5||state.box.botScore>=5)state.box.nextRoundAt=state.elapsed+2.7;
}
function finishMatch(win){
  if(!state.running)return;state.running=false;state.paused=false;state.mouseDown=false;if(state.player)state.player.visible=false;if(playerModel)playerModel.visible=true;
  const box=state.mode==='box',roulette=state.mode==='roulette';
  const coins=box?(state.box.playerScore*35+(win?120:20)):roulette?(win?260:40+state.kills*10):(win?220:35+state.kills*8);
  const xp=box?(win?280:90+state.box.playerScore*30):roulette?(win?500:100+state.kills*25):(win?450:100+state.kills*30);
  state.matches++;state.challenge.matches++;if(win)state.wins++;
  state.totalKills+=state.kills;addProgress(xp,coins);save();
  $('result-kicker').textContent=box?'BOX FIGHTS · SEASON 01':roulette?'PURE WEAPON ROULETTE · SEASON 01':'BATTLE ROYALE · SEASON 01';
  $('result-title').textContent=win?(box?'BOX FIGHTS VICTORY':roulette?'ROULETTE COMPLETE':'VICTORY ROYALE'):(box?'MATCH DEFEAT':roulette?'TIME UP':'MATCH OVER');
  $('result-title').style.color=win?'#ffd084':'#d4e1e9';
  if(box)$('result-content').innerHTML='<div class="result-score">'+state.box.playerScore+' — '+state.box.botScore+'</div><p>Rounds won · First to five</p><p>+'+coins+' coins · +'+xp+' XP</p>';
  else if(roulette)$('result-content').innerHTML='<div class="result-score">'+state.kills+' / 30</div><p>'+state.roulette.deaths+' deaths · '+formatTime(state.elapsed)+' / 05:00</p><p>'+(win?'All weapons completed':'Time expired')+'</p><p>+'+coins+' coins · +'+xp+' XP</p>';
  else $('result-content').innerHTML='<div class="result-score">'+(win?'#1':'#'+(state.bots.filter(a=>a.userData.dead).length+1))+'</div><p>'+state.kills+' eliminations · '+formatTime(state.elapsed)+'</p><p>+'+coins+' coins · +'+xp+' XP</p>';

  hide('pause-overlay');show('result-overlay');hide('game-hud');document.exitPointerLock?.();updateProfile();
}
function formatTime(t){const m=Math.floor(t/60),s=Math.floor(t%60);return String(m).padStart(2,'0')+':'+String(s).padStart(2,'0')}

function playerForward(){
  const cp=Math.cos(state.cameraPitch);
  return new THREE.Vector3(Math.sin(state.cameraYaw)*cp,Math.sin(state.cameraPitch),Math.cos(state.cameraYaw)*cp).normalize();
}
function fireWeapon(actor,remoteShot=false){
  if(!state.running||state.paused||actor.userData.dead)return;
  const isPlayer=actor===state.player,ud=actor.userData;
  const slot=isPlayer?state.slots[state.selected]:{id:ud.weaponId,tier:ud.tier||0,ammo:ud.ammo};
  if(!slot)return;
  const weapon=WEAPONS[slot.id]||WEAPONS[0],tier=TIERS[slot.tier||0];
  if(weapon.healing){if(isPlayer)usePulseSplash();return}
  if(isPlayer&&state.itemUse)return;
  if(isPlayer&&state.reloadTimer>0)return;
  if(slot.ammo<=0){if(isPlayer)startReload();else ud.reloadTimer=weapon.reload;return}
  if(isPlayer&&state.fireTimer>0)return;
  slot.ammo--;if(isPlayer){const fireMod=state.shard&&state.elapsed<state.shardActiveUntil&&state.shard==='capacitor'?.88:state.shard&&state.elapsed<state.shardActiveUntil&&state.shard==='overclock'?.92:1;state.fireTimer=weapon.rate*fireMod;ud.ammo=slot.ammo}else ud.ammo=slot.ammo;
  const forward=isPlayer?playerForward():new THREE.Vector3(Math.sin(actor.rotation.y),.01,Math.cos(actor.rotation.y)).normalize();
  const origin=actor.position.clone().add(new THREE.Vector3(0,isPlayer?1.5:1.45,0)).add(forward.clone().multiplyScalar(.85));
  const spread=weapon.spread*(1-(state.shard==='deadeye'&&state.elapsed<state.shardActiveUntil ? .28 : 0));
  let shardBoost=state.shard&&state.elapsed<state.shardActiveUntil&&state.shard==='overdrive'?1.18:state.shard&&state.elapsed<state.shardActiveUntil&&state.shard==='pulseSurge'&&weapon.pulse?1.16:state.shard&&state.elapsed<state.shardActiveUntil&&state.shard==='pulseguard'&&weapon.pulse?1.1:1;
  if(state.shard==='phase'&&state.elapsed<state.shardActiveUntil)shardBoost*=.9;
  for(let i=0;i<weapon.pellets;i++){
    const dir=forward.clone().add(new THREE.Vector3(rand(-spread,spread),rand(-spread,spread),rand(-spread,spread))).normalize();
    const damage=weapon.damage*tier.mult*shardBoost*(isPlayer?1:actor.userData.isBoss?1:0.65);
    spawnProjectile(origin,dir,damage,weapon.color,weapon.speed,weapon.range/weapon.speed,actor,false);
    if(isPlayer&&state.roomSocket?.readyState===WebSocket.OPEN){
      state.roomSocket.send(JSON.stringify({type:'shots',x:origin.x,y:origin.y,z:origin.z,dx:dir.x,dy:dir.y,dz:dir.z,damage:damage,speed:weapon.speed,color:weapon.color}));
    }
  }
  actor.userData.gunGroup.rotation.x=-.1;
  if(isPlayer&&weapon.name==='Flint-Knock')state.player.position.add(forward.clone().multiplyScalar(-1.1));
}
function spawnProjectile(origin,dir,damage,color,speed,life,owner,remote=false){
  const mesh=new THREE.Mesh(new THREE.SphereGeometry(remote ? .11 : .09,7,6),new THREE.MeshBasicMaterial({color:color,transparent:true,opacity:.95}));
  mesh.position.copy(origin);scene.add(mesh);
  const light=new THREE.PointLight(color,remote?.5:.35,3);mesh.add(light);
  state.bullets.push({mesh,dir:dir.clone().normalize(),damage,color,speed,life,owner,remote});
}
function startReload(){
  const slot=state.slots[state.selected];if(!slot)return;
  const weapon=WEAPONS[slot.id];if(slot.ammo>=weapon.mag||state.reloadTimer>0||state.itemUse)return;
  const shardMod=state.shard&&state.elapsed<state.shardActiveUntil&&['quickcycle','overclock'].includes(state.shard)?0.8:1;
  const upgradeMod=Math.max(.8,1-state.upgrades.reload*.04);
  state.reloadTimer=weapon.reload*shardMod*upgradeMod;setTip('RELOADING · '+weapon.name);
}
function finishReload(){
  const slot=state.slots[state.selected];if(!slot)return;slot.ammo=WEAPONS[slot.id].mag;state.player.userData.ammo=slot.ammo;state.reloadTimer=0;toast('RELOADED');
}
function switchWeapon(index){
  if(index<0||index>=state.slots.length||!state.slots[index])return;
  state.selected=index;state.player.userData.weaponId=state.slots[index].id;state.player.userData.ammo=state.slots[index].ammo;updateWeaponVisual(state.player,state.slots[index].id);state.fireTimer=0;updateHud(true);
}
function addWeapon(id,tier=0){
  const existing=state.slots.findIndex(s=>s.id===id);
  if(existing>=0){state.slots[existing].tier=Math.max(state.slots[existing].tier,tier);state.slots[existing].ammo=WEAPONS[id].mag;return}
  let slot=state.slots.findIndex(s=>!s);
  if(slot<0&&state.slots.length<5)slot=state.slots.length;
  if(slot<0)slot=state.selected;
  state.slots[slot]=createWeaponSlot(id,tier);switchWeapon(slot);
}
function reloadAmmoFromLoot(loot){
  if(loot.kind==='weapon')addWeapon(loot.weaponId,loot.tier);
}
function collectLoot(loot){
  if(!loot||!state.player)return;
  if(loot.kind==='weapon'){addWeapon(loot.weaponId,loot.tier);setTip(TIERS[loot.tier||0].name+' · '+WEAPONS[loot.weaponId].name)}
  else if(loot.kind==='medkit'){state.medkits++;toast('MEDKIT PICKED UP')}
  else if(loot.kind==='shield'){state.shields++;toast('SHIELD POTION PICKED UP')}
  else if(loot.kind==='chug'){state.chugs++;toast('CHUG JUG PICKED UP')}
  else if(loot.kind==='splash'){state.splashes++;toast('PULSE SPLASH PICKED UP')}
  else if(loot.kind==='shard'){state.shard=loot.shard.id;state.dashes=Math.max(state.dashes,loot.shard.id==='dashcore'?1:0);toast(loot.shard.name+' ACQUIRED')}
  state.challenge.loot++;save();
  removeEntity(loot.mesh);state.loot=state.loot.filter(x=>x!==loot);updateHud(true);
}
function pickupNearest(){
  let best=null,d=6.5;for(const l of state.loot){const n=dist2(state.player.position,l.mesh.position);if(n<d){d=n;best=l}}
  if(!best){setTip('No weapon or shard close enough to pick up.');return}
  collectLoot(best);
}
function autoPickup(){
  const p=state.player.position;
  for(const l of [...state.loot]){
    if(dist2(p,l.mesh.position)>2.1)continue;
    if(l.kind!=='weapon'&&l.kind!=='shard')collectLoot(l);
  }
}
function useConsumable(kind){
  if(!state.running||state.paused||state.itemUse)return;
  if(kind==='med'&&state.medkits>0&&state.health<100){state.itemUse={kind,time:2.1};state.medkits--;setTip('USING MEDKIT...');}
  else if(kind==='shield'&&state.shields>0&&state.shield<100){state.itemUse={kind,time:1.55};state.shields--;setTip('DRINKING SHIELD POTION...');}
  else if(kind==='chug'&&state.chugs>0&&(state.health<100||state.shield<100)){state.itemUse={kind,time:12.5};state.chugs--;setTip('USING CHUG JUG · 12.5 SECONDS');}
  else if(kind==='splash'&&state.splashes>0){usePulseSplash();state.splashes--}
  else toast('NO '+kind.toUpperCase()+' AVAILABLE');
}
function completeConsumable(){
  if(!state.itemUse)return;const kind=state.itemUse.kind;
  if(kind==='med')state.health=Math.min(100,state.health+50);
  if(kind==='shield')state.shield=Math.min(100,state.shield+50);
  if(kind==='chug'){state.health=100;state.shield=100}
  state.player.userData.health=state.health;state.player.userData.shield=state.shield;state.itemUse=null;toast('ITEM USED');updateHud(true);
}
function usePulseSplash(){
  if(!state.running)return;
  const p=state.player.position;
  state.health=Math.min(100,state.health+30);state.shield=Math.min(100,state.shield+10);state.player.userData.health=state.health;state.player.userData.shield=state.shield;state.dashes=3;state.dashChargeAt=state.elapsed+5;
  const burst=new THREE.Mesh(new THREE.SphereGeometry(1,18,14),new THREE.MeshBasicMaterial({color:0xb95dff,transparent:true,opacity:.22,side:THREE.DoubleSide}));
  burst.position.set(p.x,p.y+1,p.z);scene.add(burst);let size=1;const start=performance.now();
  function expand(){if(!burst.parent)return;size+=.28;burst.scale.setScalar(size);burst.material.opacity=Math.max(0,.24-(performance.now()-start)/850*.24);if(size<13)requestAnimationFrame(expand);else removeEntity(burst)}requestAnimationFrame(expand);
  toast('PULSE SPLASH · HEALTH RESTORED · 3 DASHES');updateHud(true);
}
function activateShard(){
  if(!state.shard){toast('DEFEAT A PULSE BOSS TO CLAIM A SHARD');return}
  if(state.elapsed<state.shardCooldownUntil){toast('SHARD COOLING DOWN · '+Math.ceil(state.shardCooldownUntil-state.elapsed)+'s');return}
  const shard=SHARDS.find(s=>s.id===state.shard);if(!shard)return;
  state.shardActiveUntil=state.elapsed+shard.duration;state.shardCooldownUntil=state.elapsed+shard.cooldown;
  if(state.shard==='aegis')state.shield=Math.min(100,state.shield+24);
  if(state.shard==='vitalflow')state.vitalFlowUntil=state.elapsed+8;
  if(state.shard==='medwave')state.health=Math.min(100,state.health+30);
  if(state.shard==='shieldwave')state.shield=Math.min(100,state.shield+35);
  if(state.shard==='riftstep')state.dashes=Math.min(3,state.dashes+1);
  if(state.shard==='dashcore'){state.dashes=3;state.dashChargeAt=state.elapsed+5}
  toast(shard.name.toUpperCase()+' ACTIVATED');updateHud(true);
}
function pulseDash(){
  if(!state.running||state.dashes<=0)return;
  const f=new THREE.Vector3(Math.sin(state.cameraYaw),0,Math.cos(state.cameraYaw));
  const move=new THREE.Vector3((state.keys.KeyD?1:0)-(state.keys.KeyA?1:0),0,(state.keys.KeyS?1:0)-(state.keys.KeyW?1:0));
  if(move.lengthSq()>0){move.normalize();const right=new THREE.Vector3(Math.cos(state.cameraYaw),0,-Math.sin(state.cameraYaw));f.copy(right.multiplyScalar(move.x).add(new THREE.Vector3(Math.sin(state.cameraYaw),0,Math.cos(state.cameraYaw)).multiplyScalar(-move.z))).normalize()}
  moveActor(state.player,f.x*14,f.z*14);state.dashes--;toast('PULSE DASH · '+state.dashes+' LEFT');updateHud(true);
}

function damageActor(actor,amount,owner=null){
  if(!actor||actor.userData.dead||amount<=0)return;
  const ud=actor.userData;
  if(actor===state.player&&state.invulnerable>0)return;
  let damage=amount;
  if(actor===state.player&&state.shard&&state.elapsed<state.shardActiveUntil){if(state.shard==='bulwark')damage*=.82;if(state.shard==='pulseguard')damage*=.92;if(state.shard==='phase')damage*=.9;if(state.shard==='overdrive')damage*=1.1;}
  if(actor!==state.player&&ud.shardType&&state.elapsed<ud.shardActiveUntil){if(ud.shardType==='bulwark')damage*=.82;if(ud.shardType==='pulseguard')damage*=.92;if(ud.shardType==='phase')damage*=.9;if(ud.shardType==='overdrive')damage*=1.1;}
  let rest=damage;
  if(ud.shield>0){const n=Math.min(ud.shield,rest);ud.shield-=n;rest-=n}
  ud.health=Math.max(0,ud.health-rest);
  if(actor===state.player){state.health=ud.health;state.shield=ud.shield}
  ud.damageFlash=.15;
  if(ud.health<=0)eliminateActor(actor,owner);
}
function eliminateActor(actor,owner){
  const ud=actor.userData;if(ud.dead)return;ud.dead=true;actor.visible=false;
  if(actor===state.player){
    if(state.mode==='box'){endBoxRound('bot');return}
    if(state.mode==='roulette'){state.roulette.deaths++;state.roulette.respawnAt=state.elapsed+1.65;state.player.visible=false;setTip('ELIMINATED · RESPAWNING IN 2...');updateHud(true);return}
    finishMatch(false);return;
  }
  if(ud.isBoss){
    const cfg=ud.bossConfig;toast(cfg.name+' DEFEATED · PULSE SHARD DROPPED');
    const shard=SHARDS[Math.floor(Math.random()*SHARDS.length)];
    createLoot({kind:'shard',shard,x:actor.position.x+2,z:actor.position.z+1});
    if(Math.random()<.8)createLoot({kind:'weapon',weaponId:cfg.weapon,tier:4,x:actor.position.x-2,z:actor.position.z-1});
    return;
  }
  if(state.mode==='box'){
    endBoxRound('player');return;
  }
  if(state.mode==='roulette'){
    if(owner===state.player){
      state.kills++;state.roulette.kills++;state.challenge.kills++;addProgress(20,10);
      state.roulette.index=Math.min(ROULETTE_ORDER.length-1,state.roulette.index+1);
      const nextId=ROULETTE_ORDER[state.roulette.index];state.slots=[createWeaponSlot(nextId)];state.selected=0;
      state.player.userData.weaponId=nextId;state.player.userData.ammo=WEAPONS[nextId].mag;updateWeaponVisual(state.player,nextId);
      toast('ELIMINATION · NEXT WEAPON: '+WEAPONS[nextId].name.toUpperCase());
      if(state.kills>=30||state.roulette.index>=ROULETTE_ORDER.length-1){finishMatch(true);return}
    }
    state.botRespawns.push({at:state.elapsed+1.45,index:ud.botIndex??0});
    state.alive=state.bots.filter(b=>!b.userData.dead).length+1;return;
  }
  if(owner===state.player){
    state.kills++;state.challenge.kills++;addProgress(25,12);
    $('kill-feed').innerHTML='<div>ELIMINATED · '+escapeText(ud.name)+'</div>'+ $('kill-feed').innerHTML;
    setTimeout(()=>{if($('kill-feed').children.length>4)$('kill-feed').lastElementChild.remove()},3200);
  }
  const drop=actor.position;
  if(Math.random()<.75)createLoot({kind:'weapon',weaponId:ud.weaponId,tier:ud.tier||0,x:drop.x+rand(-2,2),z:drop.z+rand(-2,2)});
  if(Math.random()<.45)createLoot({kind:'shield',x:drop.x+rand(-2,2),z:drop.z+rand(-2,2)});
  if(Math.random()<.3)createLoot({kind:'medkit',x:drop.x+rand(-2,2),z:drop.z+rand(-2,2)});
  state.alive=Math.max(1,state.bots.filter(b=>!b.userData.dead).length+1);
  if(state.alive<=1)finishMatch(true);
}
function escapeText(text){return String(text).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}

function createBuildWall(x,z,yaw,remote=false){
  const mesh=new THREE.Group();mesh.position.set(x,groundHeight(x,z),z);mesh.rotation.y=yaw;
  const style=BUILD_STYLES.find(s=>s.name===state.buildStyle)||BUILD_STYLES[0];
  const wood=mat(style.color,.72,.18,style.name.includes('Pulse')||style.name==='Neon'?style.color:0,(style.name.includes('Pulse')||style.name==='Neon')?.55:0),edge=mat(0x4e3724,.9),panel=mat(style.color,.68,.22,style.name.includes('Pulse')||style.name==='Neon'?style.color:0,(style.name.includes('Pulse')||style.name==='Neon')?.8:0);
  addBox(mesh,5,.22,.26,wood,0,1.7,0);
  addBox(mesh,5,.22,.26,edge,0,.12,0);
  for(let i=0;i<4;i++)addBox(mesh,.2,3.35,.27,wood,-2.4+i*1.6,1.78,0);
  for(let row=0;row<2;row++)for(let col=0;col<3;col++){
    const panelMesh=addBox(mesh,1.35,1.52,.12,panel,-1.6+col*1.6,.95+row*1.56,.08);
    panelMesh.userData.panel=true;panelMesh.userData.col=col;panelMesh.userData.row=row;
  }
  scene.add(mesh);
  const collider={x,z,w:5,d:.7,yaw,wall:true,source:mesh};
  const entry={mesh,collider,hp:250,remote,edited:false};
  state.builds.push(entry);state.colliders.push(collider);return entry;
}
function buildWall(){
  if(state.mode==='roulette'){toast('BUILDING IS DISABLED IN PURE WEAPON ROULETTE');return}
  if(!state.running||state.mode==='br'&&state.wood<10){toast('NOT ENOUGH WOOD');return}
  if(state.builds.filter(w=>!w.remote).length>=8){toast('BUILD LIMIT REACHED');return}
  const f=new THREE.Vector3(Math.sin(state.cameraYaw),0,Math.cos(state.cameraYaw));
  const x=state.player.position.x+f.x*4,z=state.player.position.z+f.z*4;
  if(state.colliders.some(c=>Math.abs(c.x-x)<(c.w||4)/2+1&&Math.abs(c.z-z)<(c.d||4)/2+1)){toast('BUILD SPACE BLOCKED');return}
  const wall=createBuildWall(x,z,state.cameraYaw);wall.hp=250;state.wood-=10;
  if(state.roomSocket?.readyState===WebSocket.OPEN)state.roomSocket.send(JSON.stringify({type:'build',x,z,yaw:state.cameraYaw}));
  updateHud(true);
}
function editNearestWall(){
  let best=null,d=7;
  for(const w of state.builds){if(w.remote)continue;const n=Math.hypot(w.collider.x-state.player.position.x,w.collider.z-state.player.position.z);if(n<d){best=w;d=n}}
  if(!best){toast('NO WALL CLOSE ENOUGH TO EDIT');return}
  best.edited=!best.edited;
  for(const child of best.mesh.children){if(child.userData.panel&&child.userData.col===1&&child.userData.row===0)child.visible=!best.edited}
  best.collider.d=best.edited?1.1:.7;
  toast(best.edited?'WALL EDITED · WINDOW OPENED':'WALL RESET');
}
function collides(x,z,radius=.7){
  for(const c of state.colliders){
    const dx=x-c.x,dz=z-c.z;
    const a=Math.cos(c.yaw||0),b=Math.sin(c.yaw||0);
    const lx=dx*a-dz*b,lz=dx*b+dz*a;
    if(Math.abs(lx)<(c.w||4)/2+radius&&Math.abs(lz)<(c.d||4)/2+radius)return true;
  }
  return false;
}
function moveActor(actor,dx,dz){
  let x=actor.position.x+dx,z=actor.position.z+dz;
  const r=actor===state.player ? .65 : .75;
  if(!collides(x,actor.position.z,r))actor.position.x=x;
  if(!collides(actor.position.x,z,r))actor.position.z=z;
  const radial=Math.hypot(actor.position.x,actor.position.z);
  if(radial>145){actor.position.x*=145/radial;actor.position.z*=145/radial}
  if(actor.position.y<groundHeight(actor.position.x,actor.position.z))actor.position.y=groundHeight(actor.position.x,actor.position.z);
}

function emitPlayerTrail(){
  if(!state.player||state.trail==='Default'||state.elapsed<state.trailAt)return;
  state.trailAt=state.elapsed+.075;
  const spec=TRAILS.find(t=>t.name===state.trail)||TRAILS[0];
  const color=state.trail==='Rainbow'?new THREE.Color().setHSL((state.elapsed*.55)%1,.92,.62):new THREE.Color(spec.color);
  const mesh=new THREE.Mesh(new THREE.SphereGeometry(.15,7,6),new THREE.MeshBasicMaterial({color,transparent:true,opacity:.72,depthWrite:false}));
  const back=new THREE.Vector3(-Math.sin(state.cameraYaw),0,-Math.cos(state.cameraYaw));
  mesh.position.set(state.player.position.x+back.x*.7,state.player.position.y+.18,state.player.position.z+back.z*.7);scene.add(mesh);
  state.particles.push({mesh,life:.48,maxLife:.48});
}
function updateParticles(dt){
  for(let i=state.particles.length-1;i>=0;i--){const p=state.particles[i];p.life-=dt;p.mesh.scale.multiplyScalar(1+dt*1.8);p.mesh.material.opacity=Math.max(0,p.life/p.maxLife*.72);if(p.life<=0){removeEntity(p.mesh);p.mesh.material.dispose();state.particles.splice(i,1)}}
}
function updatePlayer(dt){
  const p=state.player,ud=p.userData;if(!p||ud.dead)return;
  if(state.invulnerable>0)state.invulnerable-=dt;
  if(state.fireTimer>0)state.fireTimer-=dt;
  if(state.reloadTimer>0){state.reloadTimer-=dt;if(state.reloadTimer<=0)finishReload()}
  if(state.itemUse){state.itemUse.time-=dt;if(state.itemUse.time<=0)completeConsumable()}
  const using=!!state.itemUse;
  const f=new THREE.Vector3(Math.sin(state.cameraYaw),0,Math.cos(state.cameraYaw));
  const right=new THREE.Vector3(Math.cos(state.cameraYaw),0,-Math.sin(state.cameraYaw));
  let forward=(state.keys.KeyW?1:0)-(state.keys.KeyS?1:0);
  let sideways=(state.keys.KeyD?1:0)-(state.keys.KeyA?1:0);
  const movement=f.multiplyScalar(forward).add(right.multiplyScalar(sideways));
  const moving=movement.lengthSq()>0&&!using;
  if(moving){
    movement.normalize();const activeShard=state.shard&&state.elapsed<state.shardActiveUntil?state.shard:null;const shardSpeed=activeShard==='phase'?1.45:activeShard==='kinetic'?1.2:activeShard==='aegis'?.88:1;const speed=(state.keys.ShiftLeft||state.keys.ShiftRight?8.6:6.2)*shardSpeed;
    moveActor(p,movement.x*speed*dt,movement.z*speed*dt);
  }
  const gy=groundHeight(p.position.x,p.position.z);
  if(state.keys.Space&&p.position.y<=gy+.08){state.jumpVelocity=7.2;state.keys.Space=false}
  state.jumpVelocity-=19*dt;p.position.y+=state.jumpVelocity*dt;
  if(p.position.y<gy){p.position.y=gy;state.jumpVelocity=0}
  p.rotation.y=state.cameraYaw;
  ud.moving=moving;
  if(moving)emitPlayerTrail();
  if(state.mouseDown)fireWeapon(p);
  autoPickup();
  if(state.shard==='vitalflow'&&state.elapsed<state.vitalFlowUntil){state.health=Math.min(100,state.health+3*dt);state.shield=Math.min(100,state.shield+2*dt);ud.health=state.health;ud.shield=state.shield}
  if(state.shard==='dashcore'&&state.dashes<3&&state.elapsed>=state.dashChargeAt){state.dashes++;state.dashChargeAt=state.elapsed+5;updateHud(true)}
}
function updateBots(dt){
  for(const bot of state.bots){
    const ud=bot.userData;if(ud.dead||!bot.visible)continue;
    if(state.mode==='box'&&state.box.roundEnded)continue;
    ud.shootTimer-=dt;ud.thinkTimer-=dt;
    let target=null,best=Infinity;
    if(ud.thinkTimer<=0){
      ud.thinkTimer=.45+Math.random()*.35;
      const candidates=state.mode==='box'?[state.player]:[state.player,...state.bots.filter(a=>a!==bot&&!a.userData.dead),...state.bosses.filter(a=>!a.userData.dead)];
      for(const a of candidates){if(!a||a===bot||a.userData.dead)continue;const d=dist2(bot.position,a.position);if(d<best&&d<95){best=d;target=a}}
      ud.target=target;
      if(!target){ud.wanderAngle+=rand(-1.5,1.5);ud.targetPoint={x:bot.position.x+Math.cos(ud.wanderAngle)*18,z:bot.position.z+Math.sin(ud.wanderAngle)*18}}
    }
    target=ud.target;let moving=false;
    if(state.mode==='br'&&ud.shardType&&state.elapsed>=ud.shardCooldownUntil&&(ud.health<65||target&&dist2(bot.position,target.position)<55))activateBotShard(bot);
    if(ud.shardType==='vitalflow'&&state.elapsed<ud.shardActiveUntil){ud.health=Math.min(100,ud.health+3*dt);ud.shield=Math.min(100,ud.shield+2*dt)}
    if(target&&!target.userData.dead){
      const dx=target.position.x-bot.position.x,dz=target.position.z-bot.position.z,d=Math.max(.1,Math.hypot(dx,dz));
      const yaw=Math.atan2(dx,dz);bot.rotation.y=yaw;
      const close=state.mode==='box'?12:15;
      let mx=0,mz=0;
      if(d>close){mx=dx/d;mz=dz/d}
      else if(d<close*.58){mx=-dx/d;mz=-dz/d}
      const strafe=Math.sin(state.elapsed*1.7+ud.phase)*.35;
      mx+=Math.cos(yaw)*strafe;mz-=Math.sin(yaw)*strafe;
      const m=Math.hypot(mx,mz)||1;let shardSpeed=1;if(ud.shardType&&state.elapsed<ud.shardActiveUntil){if(ud.shardType==='phase')shardSpeed=1.45;if(ud.shardType==='kinetic')shardSpeed=1.2;if(ud.shardType==='aegis')shardSpeed=.88}const sp=ud.speed*(ud.health<45?1.12:1)*shardSpeed;
      if(d>9||Math.abs(strafe)>.2){moveActor(bot,mx/m*sp*dt,mz/m*sp*dt);moving=true}
      if(state.mode==='box'){const wanted=d<19?2:3;if(ud.weaponId!==wanted){ud.weaponId=wanted;ud.ammo=WEAPONS[wanted].mag;ud.reloadTimer=0}}
      updateWeaponVisual(bot,ud.weaponId);
      const weapon=WEAPONS[ud.weaponId]||WEAPONS[0];
      if(d<weapon.range*.72&&ud.shootTimer<=0){
        if(ud.ammo<=0){ud.reloadTimer=weapon.reload;ud.ammo=weapon.mag}
        else {ud.ammo--;ud.shootTimer=weapon.rate*rand(1.4,2.3);fireBotAt(bot,target)}
      }
    }else {
      if(state.mode==='br'&&(!ud.targetLoot||!state.loot.includes(ud.targetLoot)||ud.lootThink<=0)){
        ud.lootThink=1.2;let pick=null,near=22;for(const l of state.loot){const d=dist2(bot.position,{x:l.x,z:l.z});if(d<near){near=d;pick=l}}ud.targetLoot=pick;ud.targetPoint=pick?{x:pick.x,z:pick.z}:null;
      }
      if(ud.targetPoint){const dx=ud.targetPoint.x-bot.position.x,dz=ud.targetPoint.z-bot.position.z,d=Math.hypot(dx,dz);
        if(d>2){moveActor(bot,dx/d*ud.speed*.55*dt,dz/d*ud.speed*.55*dt);bot.rotation.y=Math.atan2(dx,dz);moving=true}
        else if(ud.targetLoot&&state.loot.includes(ud.targetLoot)){botCollectLoot(bot,ud.targetLoot);ud.targetLoot=null;ud.targetPoint=null;}
        else ud.targetPoint=null;
      }
    }
    ud.lootThink-=dt;
    if(ud.reloadTimer>0){ud.reloadTimer-=dt;if(ud.reloadTimer<=0)ud.ammo=WEAPONS[ud.weaponId].mag}
    ud.moving=moving;
    if(state.mode==='box'&&target===state.player&&ud.health<52&&Math.random()<dt*.24&&dist2(bot.position,state.player.position)<22){
      const f=new THREE.Vector3(Math.sin(bot.rotation.y),0,Math.cos(bot.rotation.y));createBuildWall(bot.position.x+f.x*3,bot.position.z+f.z*3,bot.rotation.y,true);
    }
  }
}
function botCollectLoot(bot,loot){
  const ud=bot.userData;
  if(loot.kind==='weapon'){
    const current=WEAPONS[ud.weaponId]||WEAPONS[0],candidate=WEAPONS[loot.weaponId]||WEAPONS[0];
    if((loot.tier||0)>(ud.tier||0)||candidate.damage*candidate.range>current.damage*current.range){ud.weaponId=loot.weaponId;ud.tier=loot.tier||0;ud.ammo=candidate.mag;}
  }else if(loot.kind==='shard'){ud.shardType=loot.shard.id;ud.shardCooldownUntil=state.elapsed;}
  else if(loot.kind==='medkit'&&ud.health<75)ud.health=Math.min(100,ud.health+45);
  else if(loot.kind==='shield'&&ud.shield<55)ud.shield=Math.min(100,ud.shield+45);
  else if(loot.kind==='chug'&&(ud.health<80||ud.shield<60)){ud.health=100;ud.shield=100}
  else if(loot.kind==='splash'){ud.health=Math.min(100,ud.health+30);ud.shield=Math.min(100,ud.shield+10);}
  removeEntity(loot.mesh);state.loot=state.loot.filter(x=>x!==loot);
}
function activateBotShard(bot){
  const ud=bot.userData,shard=SHARDS.find(s=>s.id===ud.shardType);if(!shard)return;
  ud.shardActiveUntil=state.elapsed+shard.duration;ud.shardCooldownUntil=state.elapsed+shard.cooldown;
  if(ud.shardType==='aegis')ud.shield=Math.min(100,ud.shield+24);
  if(ud.shardType==='vitalflow'){ud.health=Math.min(100,ud.health+18);ud.shield=Math.min(100,ud.shield+12)}
  if(ud.shardType==='medwave')ud.health=Math.min(100,ud.health+30);
  if(ud.shardType==='shieldwave')ud.shield=Math.min(100,ud.shield+35);
  if(ud.shardType==='riftstep'||ud.shardType==='dashcore')ud.dashes=3;
}
function fireBotAt(bot,target){
  const start=bot.position.clone().add(new THREE.Vector3(0,1.45,0));
  const aim=target.position.clone().add(new THREE.Vector3(0,1.25,0)).sub(start);
  const d=aim.length();aim.normalize();
  const weapon=WEAPONS[bot.userData.weaponId]||WEAPONS[0];
  const spread=weapon.spread*.9;
  let damage=weapon.damage*.52*TIERS[bot.userData.tier||0].mult;
  if(bot.userData.shardType&&state.elapsed<bot.userData.shardActiveUntil){if(bot.userData.shardType==='overdrive')damage*=1.18;if(bot.userData.shardType==='phase')damage*=.9;if(bot.userData.shardType==='pulseSurge'&&weapon.pulse)damage*=1.16;if(bot.userData.shardType==='pulseguard'&&weapon.pulse)damage*=1.1}
  for(let i=0;i<Math.max(1,weapon.pellets);i++){
    const dir=aim.clone().add(new THREE.Vector3(rand(-spread,spread),rand(-spread,spread),rand(-spread,spread))).normalize();
    spawnProjectile(start,dir,damage,weapon.color,weapon.speed*.82,Math.min(weapon.range/weapon.speed,2),bot,false);
  }
}
function updateBosses(dt){
  for(const boss of state.bosses){
    const ud=boss.userData;if(ud.dead)continue;
    const targets=[state.player,...state.bots.filter(b=>!b.userData.dead)];let target=null,best=Infinity;for(const candidate of targets){if(!candidate||candidate.userData.dead)continue;const d=dist2(boss.position,candidate.position);if(d<best){best=d;target=candidate}}if(!target)continue;ud.attackTarget=target;
    const dx=target.position.x-boss.position.x,dz=target.position.z-boss.position.z,d=Math.max(.1,Math.hypot(dx,dz));
    const yaw=Math.atan2(dx,dz);boss.rotation.y=yaw;
    ud.phase=ud.health<ud.maxHealth*.5?2:1;
    if(d>13){moveActor(boss,dx/d*ud.speed*(ud.phase===2?1.25:1)*dt,dz/d*ud.speed*(ud.phase===2?1.25:1)*dt);ud.moving=true}
    ud.attackTimer-=dt;
    if(ud.telegraph>0){ud.telegraph-=dt;if(ud.telegraph<=0)bossAttack(boss,ud.attackTarget||target)}
    else if(ud.attackTimer<=0){ud.telegraph=1.05;setTip(ud.name+' IS CHARGING AN ATTACK');ud.attackTimer=3.25*(ud.phase===2?.78:1)}
  }
}
function bossAttack(boss,target){
  const ud=boss.userData;target=target&&!target.userData.dead?target:state.player;const dx=target.position.x-boss.position.x,dz=target.position.z-boss.position.z,base=Math.atan2(dx,dz);
  if(ud.bossConfig.attack==='ring'){
    for(let i=0;i<12;i++){const a=i*Math.PI/6;const dir=new THREE.Vector3(Math.sin(a),0,Math.cos(a));spawnProjectile(boss.position.clone().add(new THREE.Vector3(0,2,0)),dir,9,ud.bossConfig.color,34,3,boss,false)}
  }else{
    const count=ud.bossConfig.attack==='volley'?3:5;
    for(let i=0;i<count;i++){const offset=(i-(count-1)/2)*(ud.phase===2?.14:.22),a=base+offset,dir=new THREE.Vector3(Math.sin(a),.03,Math.cos(a));spawnProjectile(boss.position.clone().add(new THREE.Vector3(0,2,0)),dir,ud.phase===2?15:11,ud.bossConfig.color,ud.phase===2?52:43,3,boss,false)}
  }
}
function projectileBlocked(pos,damage,owner){
  for(const c of state.colliders){
    const dx=pos.x-c.x,dz=pos.z-c.z,a=Math.cos(c.yaw||0),b=Math.sin(c.yaw||0),lx=dx*a-dz*b,lz=dx*b+dz*a;
    if(Math.abs(lx)>(c.w||4)/2+.12||Math.abs(lz)>(c.d||4)/2+.12)continue;
    const floor=groundHeight(pos.x,pos.z);if(pos.y<floor+.2||pos.y>floor+12)continue;
    if(c.wall){const wall=state.builds.find(w=>w.collider===c);if(wall){wall.hp-=damage;if(wall.hp<=0){removeEntity(wall.mesh);state.builds=state.builds.filter(w=>w!==wall);state.colliders=state.colliders.filter(x=>x!==c)}}}
    return true;
  }
  return false;
}
function segmentClosestPoint(start,end,point){
  const segment=end.clone().sub(start),lengthSq=segment.lengthSq();
  const t=lengthSq>0?clamp(point.clone().sub(start).dot(segment)/lengthSq,0,1):0;
  return start.clone().addScaledVector(segment,t);
}
function updateProjectiles(dt){
  for(let i=state.bullets.length-1;i>=0;i--){
    const b=state.bullets[i],start=b.mesh.position.clone();
    const travel=b.speed*dt,end=start.clone().addScaledVector(b.dir,travel);
    b.mesh.position.copy(end);b.life-=dt;
    let remove=b.life<=0;
    if(!remove){
      const steps=Math.max(1,Math.ceil(travel/.55));
      for(let n=1;n<=steps;n++){
        const sample=start.clone().lerp(end,n/steps);
        if(projectileBlocked(sample,b.damage,b.owner)){remove=true;break}
      }
    }
    if(!remove){
      if(b.remote){
        const closest=segmentClosestPoint(start,end,state.player.position.clone().add(new THREE.Vector3(0,1.2,0)));
        if(Math.hypot(closest.x-state.player.position.x,closest.z-state.player.position.z)<1.15&&Math.abs(closest.y-(state.player.position.y+1.2))<2.3){
          damageActor(state.player,b.damage,null);remove=true;
        }
      }else{
        const targets=b.owner===state.player?[...state.bots,...state.bosses]:b.owner?.userData.isBoss?[state.player,...state.bots]:[state.player,...state.bots.filter(a=>a!==b.owner),...state.bosses];
        for(const target of targets){
          if(!target||target.userData.dead||!target.visible)continue;
          const targetPoint=target.position.clone().add(new THREE.Vector3(0,target.userData.isBoss?2.2:1.2,0));
          const closest=segmentClosestPoint(start,end,targetPoint);
          const radius=target.userData.isBoss?2.25:1.05;
          if(Math.hypot(closest.x-target.position.x,closest.z-target.position.z)<radius&&Math.abs(closest.y-targetPoint.y)<(target.userData.isBoss?3.2:2.2)){
            damageActor(target,b.damage,b.owner);remove=true;break;
          }
        }
      }
    }
    if(remove){removeEntity(b.mesh);state.bullets.splice(i,1)}
  }
}
function updateLoot(dt){
  for(const l of [...state.loot]){
    l.mesh.rotation.y+=dt*1.1;l.mesh.position.y=groundHeight(l.x,l.z)+.72+Math.sin(state.elapsed*2.8+l.x)*.17;
    if(state.elapsed>l.expiresAt){removeEntity(l.mesh);state.loot=state.loot.filter(x=>x!==l)}
  }
}
function updateStorm(dt){
  if(state.mode!=='br')return;
  const s=state.storm;s.timer-=dt;s.elapsed+=dt;
  const sizes=[145,112,82,55,32,15];
  if(s.timer<=0&&s.phase<sizes.length-1){
    s.phase++;s.start=s.radius;s.target=sizes[s.phase];s.elapsed=0;s.timer=38;
    if(s.phase>1){s.cx=rand(-14,14);s.cz=rand(-14,14)}
    setTip('STORM CIRCLE IS SHRINKING · FIND THE SAFE ZONE');
  }
  const progress=clamp(s.elapsed/22,0,1);s.radius=s.start+(s.target-s.start)*progress;
  if(stormRing){stormRing.position.set(s.cx,15,s.cz);stormRing.scale.set(s.radius,s.radius,1)}
  const d=Math.hypot(state.player.position.x-s.cx,state.player.position.z-s.cz);
  if(d>s.radius){s.damageTick+=dt;if(s.damageTick>=1){s.damageTick=0;damageActor(state.player,2+s.phase*1.6,null);if(Math.random()<.1)toast('YOU ARE IN THE STORM')}}
  else s.damageTick=0;
  for(const bot of state.bots){if(bot.userData.dead)continue;const outside=Math.hypot(bot.position.x-s.cx,bot.position.z-s.cz)>s.radius;bot.userData.stormTick=(bot.userData.stormTick||0)+(outside?dt:0);if(!outside)bot.userData.stormTick=0;if(bot.userData.stormTick>=1){bot.userData.stormTick=0;damageActor(bot,2+s.phase*1.6,null)}}
  $('zone-status').innerHTML='<i></i> '+(s.timer>22?'STORM EYE MOVES IN ':'STORM SHRINKING · ')+formatTime(Math.max(0,s.timer));
}
function applyRemoteState(data){
  const id=data.from||data.playerId;if(!id||id===state.roomPlayerId)return;
  let actor=state.remotePlayers.get(id);
  if(!actor){
    actor=createActor({isRemote:true,name:'PARTY MEMBER',color:0x8d7bdf,health:100});scene.add(actor);state.remotePlayers.set(id,actor);
  }
  const p=data.p||data;if(typeof p.x!=='number'||typeof p.z!=='number')return;
  actor.position.lerp(new THREE.Vector3(p.x,groundHeight(p.x,p.z),p.z),.6);
  actor.rotation.y=Number(p.yaw)||0;actor.visible=p.alive!==false;
  actor.userData.health=p.hp??100;actor.userData.shield=p.sh??0;
  actor.userData.weaponId=p.weapon??0;updateWeaponVisual(actor,actor.userData.weaponId);
}
function sendNetState(){
  if(state.roomSocket?.readyState!==WebSocket.OPEN||!state.running)return;
  const p=state.player;
  state.roomSocket.send(JSON.stringify({type:'state',p:{x:p.position.x,z:p.position.z,yaw:p.rotation.y,hp:state.health,sh:state.shield,weapon:state.slots[state.selected]?.id||0,alive:!p.userData.dead}}));
}
function handleRemoteShot(data){
  if(!state.running||!data||typeof data.x!=='number')return;
  const origin=new THREE.Vector3(data.x,data.y,data.z),dir=new THREE.Vector3(data.dx,data.dy,data.dz);
  spawnProjectile(origin,dir,Math.min(100,Number(data.damage)||10),Number(data.color)||0x4de5e0,Number(data.speed)||100,1.8,null,true);
}
function connectSocket(url){
  return new Promise((resolve,reject)=>{
    try{
      const socket=new WebSocket(url);state.roomSocket=socket;
      socket.onopen=()=>resolve(socket);
      socket.onerror=()=>reject(new Error('Could not connect to the PixelRoyale room server.'));
      socket.onmessage=event=>{
        let data;try{data=JSON.parse(event.data)}catch(e){return}
        if(data.type==='room_joined'){state.roomPlayerId=data.playerId;state.roomHost=!!data.isHost;state.roomMode=data.mode;state.roomCode=data.room;$('lobby-code').textContent=data.room;$('lobby-title').textContent='PRIVATE PARTY';$('host-mode-wrap').classList.toggle('hidden',!state.roomHost);$('host-start').classList.toggle('hidden',!state.roomHost);$('lobby-status').textContent=state.roomHost?'You are the party leader. Start the match when everyone is ready.':'Connected to the party. Waiting for the host.';renderLobbyPlayers(data.players||[])}
        if(data.type==='lobby_update')renderLobbyPlayers(data.players||[]);
        if(data.type==='player_joined')toast('A player joined the party');
        if(data.type==='player_left'){const actor=state.remotePlayers.get(data.playerId);if(actor)removeEntity(actor);state.remotePlayers.delete(data.playerId);toast('A player left the party');}
        if(data.type==='kicked'){toast('You were removed from the party');socket.close();hide('lobby')}
        if(data.type==='host_changed'){state.roomHost=true;$('host-mode-wrap').classList.remove('hidden');$('host-start').classList.remove('hidden');$('lobby-status').textContent='You are now the party leader.'}
        if(data.type==='lobby_mode'){state.roomMode=data.mode;$('host-mode').value=data.mode}
        if(data.type==='game_start'){state.mode=data.mode;startMatch(data.mode,true)}
        if(data.type==='state')applyRemoteState(data);
        if(data.type==='shots')handleRemoteShot(data);
        if(data.type==='build'&&data.from!==state.roomPlayerId)createBuildWall(data.x,data.z,data.yaw,true);
        if(data.type==='match_found'){state.roomPlayerId=data.playerId||'';state.roomCode=data.room;$('party-status').textContent='Match found · '+data.room;hide('lobby');startMatch(data.mode,true);toast('MATCH FOUND');}
        if(data.type==='queue_waiting'){$('lobby-status').textContent='Searching for another player...';$('lobby-title').textContent='MATCHMAKING';}
        if(data.type==='error'){$('lobby-status').textContent=data.message||'Room error';$('party-status').textContent=data.message||'Room error'}
      };
      socket.onclose=()=>{if(state.roomSocket===socket){state.roomSocket=null;state.roomHost=false;state.roomPlayerId=''}};
    }catch(e){reject(e)}
  });
}
function renderLobbyPlayers(players){
  const list=$('lobby-player-list');list.innerHTML='';
  const all=[{playerId:state.roomPlayerId,host:state.roomHost},...players.filter(p=>p.playerId!==state.roomPlayerId)];
  $('lobby-count').textContent=Math.max(1,players.length||1)+' / 16';
  if(!all.length)all.push({playerId:'you',host:true});
  all.slice(0,16).forEach((p,i)=>{
    const li=document.createElement('li');li.className='lobby-member';
    const label=document.createElement('span');label.textContent=(p.playerId===state.roomPlayerId?'You':('Party member '+(i+1)))+(p.playerId===state.roomPlayerId&&state.roomHost?' · Party Leader':'');
    li.appendChild(label);
    if(state.roomHost&&p.playerId&&p.playerId!==state.roomPlayerId){
      const kick=document.createElement('button');kick.type='button';kick.className='kick-player';kick.textContent='KICK';
      kick.addEventListener('click',()=>{if(state.roomSocket?.readyState===WebSocket.OPEN){state.roomSocket.send(JSON.stringify({type:'kick_player',playerId:p.playerId}));kick.disabled=true;kick.textContent='SENT'}});
      li.appendChild(kick);
    }
    list.appendChild(li);
  });
}
async function createRoom(){
  if(state.mode==='roulette'){toast('PURE WEAPON ROULETTE IS SOLO ONLY RIGHT NOW');return}
  const mode=state.mode;
  $('party-status').textContent='Creating private room...';
  try{
    const response=await fetch(WORKER+'/api/rooms',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({mode})});
    const data=await response.json();if(!response.ok)throw new Error(data.error||'Room creation failed');
    state.roomCode=data.code;show('lobby');$('lobby-code').textContent=data.code;$('lobby-title').textContent='CONNECTING...';$('lobby-status').textContent='Connecting to the party server...';
    await connectSocket('wss://pixelroyal-multiplayer.pixelroyal-21513.workers.dev/ws?room='+encodeURIComponent(data.code));
  }catch(e){$('party-status').textContent=e.message;toast(e.message)}
}
async function joinRoom(){
  const code=$('room-code').value.trim().toUpperCase();
  if(code.length<4){toast('ENTER A VALID ROOM CODE');return}
  state.roomCode=code;$('party-status').textContent='Joining room...';show('lobby');$('lobby-code').textContent=code;$('lobby-title').textContent='JOINING PARTY';
  try{await connectSocket('wss://pixelroyal-multiplayer.pixelroyal-21513.workers.dev/ws?room='+encodeURIComponent(code))}
  catch(e){$('lobby-status').textContent=e.message;$('party-status').textContent=e.message}
}
async function quickMatch(){
  if(state.mode==='roulette'){toast('PURE WEAPON ROULETTE IS SOLO ONLY RIGHT NOW');return}
  $('party-status').textContent='Searching for another player...';show('lobby');$('lobby-title').textContent='MATCHMAKING';$('host-mode-wrap').classList.add('hidden');$('host-start').classList.add('hidden');
  try{await connectSocket('wss://pixelroyal-multiplayer.pixelroyal-21513.workers.dev/ws?mode='+state.mode);state.queueMode=true}
  catch(e){$('party-status').textContent='Matchmaking unavailable. You can still play solo.';hide('lobby');toast(e.message)}
}
function closeLobby(){
  if(state.roomSocket){state.roomSocket.close();state.roomSocket=null}
  state.roomCode='';state.queueMode=false;hide('lobby');$('party-status').textContent='Solo practice is ready. Create a room to invite friends.';
}
function copyRoom(){
  if(!state.roomCode)return;
  navigator.clipboard?.writeText(state.roomCode).then(()=>toast('ROOM CODE COPIED')).catch(()=>toast('ROOM CODE: '+state.roomCode));
}
function hostStart(){
  if(!state.roomHost){toast('ONLY THE PARTY LEADER CAN START');return}
  const mode=$('host-mode').value==='box'?'box':'br';
  if(state.roomSocket?.readyState===WebSocket.OPEN)state.roomSocket.send(JSON.stringify({type:'set_mode',mode}));
  state.mode=mode;
  if(state.roomSocket?.readyState===WebSocket.OPEN)state.roomSocket.send(JSON.stringify({type:'start_game'}));
}

function openContent(panel,category='skins'){
  const title=panel.toUpperCase();$('content-title').textContent=title;$('content-kicker').textContent='PIXELROYALE // '+title;
  const body=$('content-body');body.innerHTML='';
  if(panel==='stats'){
    body.innerHTML='<div class="stat-cards"><div class="stat-card"><small>ACCOUNT LEVEL</small><b>'+state.level+'</b></div><div class="stat-card"><small>ELIMINATIONS</small><b>'+state.totalKills+'</b></div><div class="stat-card"><small>VICTORIES</small><b>'+state.wins+'</b></div></div><p class="content-intro">Matches played: '+state.matches+' · Current season: Pulse · XP: '+state.xp+'</p>';
  }else if(panel==='shop'||panel==='locker'){
    const locker=panel==='locker';
    const catalog={
      skins:{label:'OUTFITS',items:SKINS,owned:state.ownedSkins,equipped:state.skin,icon:item=>'<span>PR</span>',equip:item=>{state.skin=item.name;setupMenuPlayerSkin()}},
      hats:{label:'HATS',items:HATS,owned:state.ownedHats,equipped:state.hat,icon:item=>'<span>'+item.icon+'</span>',equip:item=>{state.hat=item.name;setupMenuPlayerSkin()}},
      trails:{label:'TRAILS',items:TRAILS,owned:state.ownedTrails,equipped:state.trail,icon:item=>'<span>✦</span>',equip:item=>{state.trail=item.name}},
      builds:{label:'BUILDS',items:BUILD_STYLES,owned:state.ownedBuilds,equipped:state.buildStyle,icon:item=>'<span>▦</span>',equip:item=>{state.buildStyle=item.name}}
    };
    const cat=catalog[category]?category:'skins',cfg=catalog[cat];
    let html='<div class="cosmetic-tabs">'+Object.entries(catalog).map(([key,value])=>'<button class="cosmetic-tab '+(key===cat?'active':'')+'" data-cosmetic-category="'+key+'">'+value.label+'</button>').join('')+'</div>';
    html+='<p class="content-intro">'+(locker?'Equip any cosmetic you have unlocked.':'Spend match-earned coins to unlock new outfits, hats, trails and build styles.')+'</p><div class="store-grid">';
    const visible=locker?cfg.items.filter(item=>cfg.owned.includes(item.name)):cfg.items.filter(item=>!cfg.owned.includes(item.name));
    if(!visible.length)html+='<p class="content-intro">'+(locker?'No items in this collection yet.':'You have unlocked every item in this collection.')+'</p>';
    for(const item of visible){
      const owned=cfg.owned.includes(item.name),equipped=cfg.equipped===item.name;
      const artColor=item.color,art=cat==='skins'||cat==='trails'||cat==='builds'?'style="background:radial-gradient(circle,'+colorHex(artColor)+'77,#122337)"':'style="background:radial-gradient(circle,'+colorHex(artColor)+'55,#122337)"';
      html+='<article class="store-card"><div class="store-art" '+art+'>'+cfg.icon(item)+'</div><div class="store-info"><b>'+escapeText(item.name)+'</b><small>'+(owned?'OWNED':cfg.label.slice(0,-1)+' · '+item.cost.toLocaleString()+' COINS')+'</small></div><button data-cosmetic="'+escapeText(item.name)+'" '+(equipped?'class="equipped"':'')+'>'+(equipped?'EQUIPPED':owned?'EQUIP':'BUY')+'</button></article>';
    }
    html+='</div>';body.innerHTML=html;
    body.querySelectorAll('[data-cosmetic-category]').forEach(btn=>btn.addEventListener('click',()=>openContent(panel,btn.dataset.cosmeticCategory)));
    body.querySelectorAll('[data-cosmetic]').forEach(btn=>btn.addEventListener('click',()=>{
      const item=cfg.items.find(x=>x.name===btn.dataset.cosmetic);if(!item)return;
      if(cfg.owned.includes(item.name)){cfg.equip(item);save();openContent(panel,cat);toast(item.name.toUpperCase()+' EQUIPPED')}
      else if(state.coins>=item.cost){state.coins-=item.cost;cfg.owned.push(item.name);cfg.equip(item);save();updateProfile();openContent(panel,cat);toast(item.name.toUpperCase()+' UNLOCKED')}
      else toast('NOT ENOUGH COINS');
    }));
  }else if(panel==='upgrades'){
    const upgrades=[{id:'health',name:'FIELD TRAINING',desc:'+5 starting shield in Battle Royale',max:5,cost:450},{id:'reload',name:'QUICK HANDS',desc:'Reload 4% faster per level',max:5,cost:550},{id:'wood',name:'WOODCUTTER',desc:'+25 starting wood per level',max:5,cost:350}];
    body.innerHTML='<p class="content-intro">Permanent account upgrades. They apply to future matches.</p><div class="store-grid">'+upgrades.map(u=>'<article class="store-card"><div class="store-info"><b>'+u.name+'</b><small>'+u.desc+' · LEVEL '+state.upgrades[u.id]+'/'+u.max+'</small></div><button data-upgrade="'+u.id+'">'+(state.upgrades[u.id]>=u.max?'MAXED':u.cost.toLocaleString()+' COINS')+'</button></article>').join('')+'</div>';
    body.querySelectorAll('[data-upgrade]').forEach(btn=>btn.onclick=()=>{const u=upgrades.find(x=>x.id===btn.dataset.upgrade);if(state.upgrades[u.id]>=u.max)return;if(state.coins<u.cost){toast('NOT ENOUGH COINS');return}state.coins-=u.cost;state.upgrades[u.id]++;save();updateProfile();openContent(panel);toast(u.name+' UPGRADED')});
  }else if(panel==='pass'){
    const tier=Math.min(50,Math.floor(state.xp/250)),percent=(state.xp%250)/250*100;
    body.innerHTML='<p class="content-intro">SEASON 01: PULSE · 50 TIERS · '+tier+'/50 COMPLETE</p><div class="pass-progress"><i style="width:'+percent+'%"></i></div><p class="content-intro">'+state.xp+' XP · '+(state.premiumPass?'PREMIUM TRACK UNLOCKED':'FREE TRACK ACTIVE')+'</p><div class="pass-track">'+Array.from({length:10},(_,i)=>{const t=Math.min(50,Math.floor(tier/10)*10+i+1);return '<div class="pass-tier"><b>'+t+'</b><small>'+(t===50?'PULSE SOVEREIGN':t%5===0?'COINS':'XP BOOST')+'</small></div>'}).join('')+'</div><button id="pass-unlock" class="primary-button">'+(state.premiumPass?'PREMIUM TRACK UNLOCKED':'UNLOCK PREMIUM · 2,000 COINS')+'</button><p class="content-intro">Reach Tier 50 to claim the Pulse Sovereign outfit. Earn XP by playing matches and completing challenges.</p>';
    $('pass-unlock').onclick=()=>{if(state.premiumPass)return;if(state.coins<2000){toast('NOT ENOUGH COINS');return}state.coins-=2000;state.premiumPass=true;save();updateProfile();openContent(panel);toast('PREMIUM PIXELPASS UNLOCKED')};
    if(tier===50&&state.premiumPass&&!state.ownedSkins.includes('Pulse Sovereign'))body.innerHTML+='<button id="claim-pass" class="primary-button">CLAIM PULSE SOVEREIGN</button>';
    $('claim-pass')?.addEventListener('click',()=>{state.ownedSkins.push('Pulse Sovereign');save();toast('PULSE SOVEREIGN UNLOCKED');openContent(panel)});
  }else if(panel==='rewards'){
    const tasks=[{id:'matches',name:'DROP IN',desc:'Play 1 match',need:1,have:state.challenge.matches,reward:100},{id:'kills',name:'ELIMINATOR',desc:'Get 5 eliminations',need:5,have:state.challenge.kills,reward:180},{id:'loot',name:'SCAVENGER',desc:'Collect 5 items',need:5,have:state.challenge.loot,reward:120}];
    body.innerHTML='<p class="content-intro">Daily and weekly objectives · Progress is saved on this device.</p><div class="store-grid">'+tasks.map(t=>{const done=t.have>=t.need,claimed=state.challenge.claimed.includes(t.id);return '<article class="store-card"><div class="store-info"><b>'+t.name+'</b><small>'+t.desc+' · '+Math.min(t.have,t.need)+'/'+t.need+' · '+t.reward+' COINS</small></div><button data-challenge="'+t.id+'" '+(!done||claimed?'disabled':'')+'>'+(claimed?'CLAIMED':done?'CLAIM':'IN PROGRESS')+'</button></article>'}).join('')+'</div>';
    body.querySelectorAll('[data-challenge]').forEach(btn=>btn.onclick=()=>{const t=tasks.find(x=>x.id===btn.dataset.challenge);if(t.have<t.need||state.challenge.claimed.includes(t.id))return;state.challenge.claimed.push(t.id);state.coins+=t.reward;save();updateProfile();openContent(panel);toast('CHALLENGE REWARD CLAIMED')});
  }else if(panel==='settings'){
    body.innerHTML='<p class="content-intro">Adjust performance and camera settings. Changes are saved automatically.</p><div class="settings-row"><span>GRAPHICS QUALITY<small>Lower settings improve performance on slower devices.</small></span><select id="quality-setting" class="setting-select"><option value="high">HIGH</option><option value="medium">MEDIUM</option><option value="low">POTATO</option></select></div><div class="settings-row"><span>CAMERA FIELD OF VIEW</span><input id="fov-setting" type="range" min="65" max="100" value="'+state.settings.fov+'"></div><div class="settings-row"><span>MOUSE SENSITIVITY</span><input id="sens-setting" type="range" min=".4" max="2" step=".1" value="'+state.settings.sensitivity+'"></div><div class="settings-row"><span>SHOW FPS</span><input id="fps-setting" type="checkbox" '+(state.settings.showFps?'checked':'')+'></div>';
    $('quality-setting').value=state.settings.quality;
    $('quality-setting').onchange=e=>{state.settings.quality=e.target.value;applyQuality();save()};
    $('fov-setting').oninput=e=>{state.settings.fov=Number(e.target.value);camera.fov=state.settings.fov;camera.updateProjectionMatrix();save()};
    $('sens-setting').oninput=e=>{state.settings.sensitivity=Number(e.target.value);save()};
    $('fps-setting').onchange=e=>{state.settings.showFps=e.target.checked;$('fps-counter').classList.toggle('hidden',!e.target.checked);save()};
  }
  show('content-overlay');
}
function colorHex(color){return '#'+new THREE.Color(color).getHexString()}
function setupMenuPlayerSkin(){
  const skin=SKINS.find(s=>s.name===state.skin)||SKINS[0];
  for(const actor of [playerModel,state.player]){if(!actor)continue;const torso=actor.children[0];if(torso)torso.material=mat(skin.color);applyPlayerCosmetics(actor)}
}
function applyQuality(){
  const q=state.settings.quality;renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,q==='high'?1.7:q==='medium'?1.25:1));
  renderer.shadowMap.enabled=q!=='low';
  scene.fog.density=q==='low'?.0035:q==='medium'?.0029:.0027;
}
function updateHud(force=false){
  if(!state.player)return;const now=performance.now();if(!force&&now-lastHudUpdate<110)return;lastHudUpdate=now;
  $('health-fill').style.width=clamp(state.health,0,100)+'%';$('shield-fill').style.width=clamp(state.shield,0,100)+'%';
  $('health-value').textContent=Math.ceil(state.health);$('shield-value').textContent=Math.ceil(state.shield);
  $('alive-count').textContent=state.mode==='box'?'2':String(Math.max(1,state.bots.filter(b=>!b.userData.dead).length+1));
  if(state.mode==='roulette')$('alive-count').parentElement.querySelector('small').textContent='ALIVE';
  $('elim-count').textContent=state.kills;$('wood-count').textContent=state.wood;
  $('med-count').textContent=state.medkits;$('shield-pot-count').textContent=state.shields;$('chug-count').textContent=state.chugs;$('splash-count').textContent=state.splashes;
  $('shard-count').textContent=state.shard?state.shard.toUpperCase():'—';$('dash-count').textContent='DASH '+state.dashes;
  $('round-score').textContent=state.mode==='roulette'?state.kills+' / 30':state.box.playerScore+' - '+state.box.botScore;
  $('hotbar').innerHTML=Array.from({length:5},(_,i)=>{
    const s=state.slots[i],w=s?WEAPONS[s.id]:null;
    return '<div class="hotbar-slot '+(state.selected===i?'active':'')+'"><b>'+(i+1)+'</b>'+(w?'<img src="'+asset(w.icon)+'" alt=""><span>'+escapeText(w.name)+'</span><small>'+s.ammo+' / '+w.mag+'</small>':'<span>EMPTY</span>')+'</div>';
  }).join('');
  if(state.mode==='br'){
    const boss=state.bosses.find(b=>!b.userData.dead);
    if(boss&&dist2(boss.position,state.player.position)<95){$('boss-hud').classList.remove('hidden');$('boss-name').textContent=boss.userData.name;$('boss-health-fill').style.width=(boss.userData.health/boss.userData.maxHealth*100)+'%';$('boss-health-text').textContent=Math.ceil(boss.userData.health)+' / '+boss.userData.maxHealth}
    else $('boss-hud').classList.add('hidden');
  }
  if(state.settings.showFps)$('fps-counter').textContent='FPS '+Math.round(state.fps);
}
function drawMinimap(){
  const c=$('minimap'),ctx=c.getContext('2d'),w=c.width,h=c.height;
  ctx.clearRect(0,0,w,h);ctx.fillStyle='#35644d';ctx.fillRect(0,0,w,h);
  ctx.strokeStyle='#759a71';ctx.lineWidth=7;ctx.beginPath();ctx.moveTo(90,90);ctx.lineTo(15,47);ctx.moveTo(90,90);ctx.lineTo(168,45);ctx.moveTo(90,90);ctx.lineTo(88,170);ctx.stroke();
  const scale=.54;const sx=x=>90+x*scale,sz=z=>90+z*scale;
  ctx.strokeStyle='#6bbdff';ctx.lineWidth=2;ctx.beginPath();ctx.arc(sx(state.storm.cx),sz(state.storm.cz),state.storm.radius*scale,0,Math.PI*2);ctx.stroke();
  for(const b of state.bots)if(!b.userData.dead){ctx.fillStyle='#ef766e';ctx.fillRect(sx(b.position.x)-2,sz(b.position.z)-2,4,4)}
  for(const b of state.bosses)if(!b.userData.dead){ctx.fillStyle='#d15dff';ctx.beginPath();ctx.arc(sx(b.position.x),sz(b.position.z),4,0,Math.PI*2);ctx.fill()}
  ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(sx(state.player.position.x),sz(state.player.position.z),4.5,0,Math.PI*2);ctx.fill();
  ctx.strokeStyle='#fff';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(sx(state.player.position.x),sz(state.player.position.z));ctx.lineTo(sx(state.player.position.x)+Math.sin(state.cameraYaw)*9,sz(state.player.position.z)+Math.cos(state.cameraYaw)*9);ctx.stroke();
}
function updateCamera(dt){
  if(state.running&&state.player){
    const p=state.player.position,forward=new THREE.Vector3(Math.sin(state.cameraYaw),0,Math.cos(state.cameraYaw));
    const desired=p.clone().add(new THREE.Vector3(0,4.1,0)).addScaledVector(forward,-8.5);
    camera.position.lerp(desired,1-Math.pow(.0008,dt));
    const target=p.clone().add(new THREE.Vector3(0,1.8,0)).addScaledVector(forward,Math.cos(state.cameraPitch)*11);target.y+=Math.sin(state.cameraPitch)*9;
    camera.lookAt(target);
  }else{
    state.menuTime+=dt;
    const radius=31;camera.position.set(Math.cos(state.menuTime*.045)*radius,15+Math.sin(state.menuTime*.1)*2,Math.sin(state.menuTime*.045)*radius);
    camera.lookAt(0,groundHeight(0,0)+2,0);
    if(playerModel){playerModel.rotation.y=state.menuTime*.22}
  }
}
function updateAnimations(dt){
  const all=[state.player,...state.bots,...state.bosses,...state.remotePlayers.values()];
  for(const a of all){
    if(!a||!a.visible)continue;const ud=a.userData;ud.phase+=dt*(ud.moving?9:2.2);
    const swing=ud.moving?Math.sin(ud.phase)*.42:Math.sin(ud.phase)*.025;
    if(ud.limbs){ud.limbs[0].rotation.x=swing;ud.limbs[1].rotation.x=-swing;ud.limbs[2].rotation.x=-swing;ud.limbs[3].rotation.x=swing}
    if(ud.damageFlash>0)ud.damageFlash-=dt;
  }
}
function updateRoulette(dt){
  if(state.roulette.respawnAt>0&&state.elapsed>=state.roulette.respawnAt){
    const p=randomSpawn(35,95);state.player.position.set(p.x,groundHeight(p.x,p.z)+.05,p.z);
    state.health=100;state.shield=50;state.player.userData.health=100;state.player.userData.shield=50;state.player.userData.dead=false;state.player.visible=true;state.invulnerable=2;
    state.roulette.respawnAt=0;state.cameraYaw=Math.atan2(-p.x,-p.z);setTip('RESPAWNED · '+WEAPONS[ROULETTE_ORDER[state.roulette.index]].name.toUpperCase());updateHud(true);
  }
  const ready=state.botRespawns.filter(item=>state.elapsed>=item.at);state.botRespawns=state.botRespawns.filter(item=>state.elapsed<item.at);
  for(const item of ready){const old=state.bots.find(b=>b.userData.dead&&b.userData.botIndex===item.index);if(old){removeEntity(old);state.bots=state.bots.filter(b=>b!==old)}spawnBot(item.index)}
  $('zone-status').innerHTML='<i></i> WEAPON ROULETTE · '+formatTime(Math.max(0,state.roulette.timeLimit-state.elapsed));
  if(state.elapsed>=state.roulette.timeLimit)finishMatch(state.kills>=30);
}
function tick(dt){
  if(!state.running||state.paused)return;
  state.elapsed+=dt;
  updatePlayer(dt);
  updateBots(dt);
  updateBosses(dt);
  updateProjectiles(dt);
  updateLoot(dt);
  updateParticles(dt);
  updateStorm(dt);
  if(state.mode==='box'&&state.box.roundEnded&&state.elapsed>=state.box.nextRoundAt){
    if(state.box.playerScore>=5||state.box.botScore>=5)finishMatch(state.box.playerScore>=5);
    else{state.box.round++;startBoxRound();toast('ROUND '+state.box.round+' · FIGHT!')}
  }
  if(state.mode==='roulette')updateRoulette(dt);
  if(state.mode==='br'&&state.elapsed>20&&state.bots.filter(b=>!b.userData.dead).length===0)finishMatch(true);
  updateAnimations(dt);
  if(state.elapsed-lastNetUpdate>.1){lastNetUpdate=state.elapsed;sendNetState()}
  updateHud();
  drawMinimap();
}
function loop(t){
  requestAnimationFrame(loop);
  const dt=Math.min(.04,Math.max(0,(t-state.last)/1000||0));state.last=t;
  state.fpsFrames++;state.fpsTime+=dt;if(state.fpsTime>=.5){state.fps=state.fpsFrames/state.fpsTime;state.fpsFrames=0;state.fpsTime=0;}
  if(state.running)tick(dt);
  if(coreMesh){coreMesh.rotation.y+=dt*.55;coreMesh.rotation.x+=dt*.18;coreRing.rotation.z+=dt*.35}
  updateCamera(dt);
  if(renderer&&scene&&camera)renderer.render(scene,camera);
}

function returnToMenu(){
  state.running=false;state.paused=false;state.mouseDown=false;
  document.exitPointerLock?.();
  clearMatchEntities();
  if(state.player){removeEntity(state.player);state.player=null}
  if(playerModel)playerModel.visible=true;
  hide('result-overlay');hide('pause-overlay');hide('game-hud');hide('lobby');show('menu');
}
function pauseMatch(){
  if(!state.running)return;state.paused=!state.paused;
  if(state.paused){show('pause-overlay');document.exitPointerLock?.();state.mouseDown=false}
  else{hide('pause-overlay');$('game-canvas').requestPointerLock?.()}
}
function initEvents(){
  document.querySelectorAll('[data-mode]').forEach(btn=>btn.addEventListener('click',()=>{
    state.mode=btn.dataset.mode;document.querySelectorAll('[data-mode]').forEach(b=>b.classList.toggle('active',b===btn));
    $('play-mode-name').textContent=state.mode==='br'?'BATTLE ROYALE':state.mode==='box'?'BOX FIGHTS':'PURE WEAPON ROULETTE';
    $('party-status').textContent=state.mode==='roulette'?'Pure Weapon Roulette is currently solo only.':'Solo practice is ready. Create a room to invite your friends.';
  }));
  $('play-button').onclick=()=>{if(state.roomSocket)closeLobby();startMatch(state.mode)};
  $('create-room').onclick=createRoom;$('join-room').onclick=joinRoom;$('quick-match').onclick=quickMatch;
  $('leave-lobby').onclick=closeLobby;$('copy-room').onclick=copyRoom;$('host-start').onclick=hostStart;
  document.querySelectorAll('[data-panel]').forEach(btn=>btn.onclick=()=>openContent(btn.dataset.panel));
  $('content-close').onclick=()=>hide('content-overlay');
  $('open-news').onclick=()=>show('news-overlay');$('news-close').onclick=()=>hide('news-overlay');
  $('watch-trailer').onclick=playTrailer;$('trailer-exit').onclick=()=>hide('trailer-overlay');
  $('pause-button').onclick=pauseMatch;$('resume-button').onclick=pauseMatch;
  $('quit-button').onclick=returnToMenu;
  $('play-again').onclick=()=>startMatch(state.mode);$('result-menu').onclick=returnToMenu;
  $('game-canvas').addEventListener('pointerdown',e=>{
    if(!state.running||state.paused)return;
    if(document.pointerLockElement!==$('game-canvas')){$('game-canvas').requestPointerLock?.();return}
    if(e.button===0){state.mouseDown=true;fireWeapon(state.player)}
  });
  window.addEventListener('pointerup',()=>state.mouseDown=false);
  document.addEventListener('pointerlockchange',()=>{if(document.pointerLockElement!==$('game-canvas'))state.mouseDown=false});
  document.addEventListener('mousemove',e=>{
    if(!state.running||state.paused||document.pointerLockElement!==$('game-canvas'))return;
    state.cameraYaw-=e.movementX*.0021*state.settings.sensitivity;
    state.cameraPitch=clamp(state.cameraPitch-e.movementY*.0018*state.settings.sensitivity,-.5,.45);
  });
  window.addEventListener('keydown',e=>{
    if(e.repeat&&['Escape','KeyP','KeyE','KeyF','KeyV','KeyQ','KeyX'].includes(e.code))return;
    state.keys[e.code]=true;
    if(e.code==='Escape'||e.code==='KeyP'){pauseMatch();return}
    if(!state.running||state.paused)return;
    if(e.code.startsWith('Digit'))switchWeapon(Number(e.code.slice(5))-1);
    if(e.code==='KeyR')startReload();
    if(e.code==='KeyE')pickupNearest();
    if(e.code==='KeyF')buildWall();
    if(e.code==='KeyV')editNearestWall();
    if(e.code==='KeyH')useConsumable('med');
    if(e.code==='KeyJ')useConsumable('shield');
    if(e.code==='KeyK')useConsumable('chug');
    if(e.code==='KeyL')useConsumable('splash');
    if(e.code==='KeyQ')activateShard();
    if(e.code==='KeyX')pulseDash();
    if(e.code==='Space')e.preventDefault();
  });
  window.addEventListener('keyup',e=>state.keys[e.code]=false);
  document.querySelectorAll('[data-touch]').forEach(btn=>{
    const action=btn.dataset.touch;
    btn.addEventListener('pointerdown',e=>{e.preventDefault();if(action==='fire'){state.mouseDown=true;fireWeapon(state.player)}if(action==='jump')state.keys.Space=true;if(action==='build')buildWall();if(action==='pickup')pickupNearest();if(action==='dash')pulseDash()});
    btn.addEventListener('pointerup',()=>{if(action==='fire')state.mouseDown=false;if(action==='jump')state.keys.Space=false});
    btn.addEventListener('pointerleave',()=>{if(action==='fire')state.mouseDown=false});
  });
  window.addEventListener('resize',()=>{
    if(!camera||!renderer)return;camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();renderer.setSize(innerWidth,innerHeight);
  });
}
function playTrailer(){
  show('trailer-overlay');hide('news-overlay');const canvas=$('trailer-canvas'),ctx=canvas.getContext('2d');
  const titles=['THE SIGNAL IS ALIVE','THE ISLAND IS CHANGING','THREE BOSSES. ONE SECRET.','SEASON 01: PULSE'];
  const start=performance.now();cancelAnimationFrame(trailerFrame);
  function frame(now){
    if($('trailer-overlay').classList.contains('hidden'))return;
    const w=canvas.width=innerWidth,h=canvas.height=innerHeight,p=clamp((now-start)/34000,0,1),idx=Math.min(3,Math.floor(p*4));
    const grad=ctx.createLinearGradient(0,0,w,h);grad.addColorStop(0,'#061323');grad.addColorStop(.55,idx%2?'#341b58':'#07515c');grad.addColorStop(1,'#130d27');
    ctx.fillStyle=grad;ctx.fillRect(0,0,w,h);
    for(let i=0;i<90;i++){const x=(i*173+now*.018*(i%4+1))%w,y=(i*97+Math.sin(now*.0006+i)*35)%h;ctx.fillStyle=i%3?'rgba(79,239,242,.5)':'rgba(244,75,211,.6)';ctx.beginPath();ctx.arc(x,y,1+i%3,0,Math.PI*2);ctx.fill()}
    ctx.textAlign='left';ctx.fillStyle='#fff';ctx.font='900 '+Math.max(32,Math.min(90,w*.075))+'px Arial';ctx.fillText(titles[idx],w*.075,h*.78);
    ctx.fillStyle='#64e5e4';ctx.font='900 12px Arial';ctx.fillText('PIXELROYALE 3D  //  FIELD REPORT 001',w*.08,h*.85);
    $('trailer-title').textContent=titles[idx];$('trailer-progress-fill').style.width=(p*100)+'%';
    if(p<1)trailerFrame=requestAnimationFrame(frame);else setTimeout(()=>hide('trailer-overlay'),1300);
  }
  trailerFrame=requestAnimationFrame(frame);
}
async function boot(){
  try{
    initRenderer();loadSave();setupPlayerModel();initEvents();applyQuality();
    for(let i=0;i<=100;i+=10){$('boot-progress').style.width=i+'%';await new Promise(r=>setTimeout(r,28))}
    $('boot-caption').textContent='ISLAND READY';$('boot-screen').classList.add('hidden');show('menu');
    state.last=performance.now();requestAnimationFrame(loop);
  }catch(e){
    console.error(e);$('boot-caption').textContent='STARTUP ERROR · '+e.message;
  }
}
function applyPlayerCosmetics(actor){
  if(!actor)return;
  if(actor.userData.cosmeticHat)removeEntity(actor.userData.cosmeticHat);
  const hat=HATS.find(h=>h.name===state.hat)||HATS[0];
  if(hat.name==='None')return;
  const group=new THREE.Group();group.position.set(0,0,0);const color=mat(hat.color,.48,.3,hat.name.toLowerCase().includes('pulse')?hat.color:0,hat.name.toLowerCase().includes('pulse')?1:0);
  const dark=mat(0x182a39,.55,.2);
  if(hat.name==='Cap'){
    const dome=new THREE.Mesh(new THREE.SphereGeometry(.43,12,8,0,Math.PI*2,0,Math.PI*.55),color);dome.position.y=2.82;group.add(dome);
    addBox(group,.56,.08,.38,hat.color,0,2.75,.34);
  }else if(hat.name==='Horns'||hat.name==='Antlers'){
    for(const side of [-1,1]){
      const horn=new THREE.Mesh(new THREE.ConeGeometry(hat.name==='Horns'?.13:.11,hat.name==='Horns'?.65:.9,7),color);horn.position.set(side*.3,3.16,0);horn.rotation.z=side*-.35;group.add(horn);
      if(hat.name==='Antlers'){const branch=new THREE.Mesh(new THREE.ConeGeometry(.07,.38,6),color);branch.position.set(side*.49,3.22,.02);branch.rotation.z=side*.9;group.add(branch)}
    }
  }else if(hat.name.includes('Halo')||hat.name==='Orbit Halo'){
    const ring=new THREE.Mesh(new THREE.TorusGeometry(.5,.055,8,32),color);ring.position.y=3.25;ring.rotation.x=Math.PI/2;group.add(ring);
    if(hat.name==='Orbit Halo'){const orb=new THREE.Mesh(new THREE.SphereGeometry(.12,8,8),color);orb.position.set(.48,3.3,0);group.add(orb)}
  }else if(hat.name.includes('Crown')){
    addBox(group,.76,.12,.55,hat.color,0,2.96,0);
    for(let i=-2;i<=2;i++){const peak=new THREE.Mesh(new THREE.ConeGeometry(.09,.28,5),color);peak.position.set(i*.14,3.15,.03);group.add(peak)}
  }else if(hat.name==='Wizard'){
    const cone=new THREE.Mesh(new THREE.ConeGeometry(.48,.78,8),color);cone.position.y=3.25;group.add(cone);addBox(group,1,.09,.72,hat.color,0,2.91,0);
  }else if(hat.name==='Bandana'){
    addBox(group,.83,.18,.77,hat.color,0,2.56,.18);const tail=addBox(group,.18,.42,.11,hat.color,.43,2.43,-.16);tail.rotation.z=-.35;
  }else if(hat.name==='Headset'){
    const band=new THREE.Mesh(new THREE.TorusGeometry(.4,.07,8,24,Math.PI),color);band.position.y=2.76;band.rotation.z=Math.PI;group.add(band);
    for(const side of [-1,1]){const cup=new THREE.Mesh(new THREE.BoxGeometry(.15,.32,.22),dark);cup.position.set(side*.39,2.61,0);group.add(cup)}
  }else if(hat.name==='Chrome Visor'||hat.name==='Signal Visor'||hat.name==='Royal Mask'){
    const visor=new THREE.Mesh(new THREE.BoxGeometry(.88,.28,.16),color);visor.position.set(0,2.56,.41);group.add(visor);
    if(hat.name==='Royal Mask')addBox(group,.28,.45,.12,hat.color,0,2.3,.4);
  }else if(hat.name==='Angel Wings'){
    for(const side of [-1,1]){const wing=new THREE.Mesh(new THREE.ConeGeometry(.36,.95,5),color);wing.position.set(side*.55,2.35,-.48);wing.rotation.z=side*Math.PI/2;wing.rotation.x=-.4;group.add(wing)}
  }else if(hat.name==='Neon Helmet'||hat.name==='Containment Hood'){
    const shell=new THREE.Mesh(new THREE.SphereGeometry(.46,12,9,0,Math.PI*2,0,Math.PI*.62),color);shell.position.y=2.78;group.add(shell);
    addBox(group,.8,.12,.18,hat.color,0,2.58,.36);
  }
  actor.add(group);actor.userData.cosmeticHat=group;
}
function setupPlayerModel(){
  if(playerModel)removeEntity(playerModel);
  const skin=SKINS.find(s=>s.name===state.skin)||SKINS[0];
  playerModel=createActor({isPlayer:true,color:skin.color});applyPlayerCosmetics(playerModel);playerModel.position.set(0,groundHeight(0,0),0);scene.add(playerModel);
}
boot();