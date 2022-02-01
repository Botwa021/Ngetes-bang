global.DeveloperMode = 'false' //true Or false
global.linkGC = ['https://chat.whatsapp.com/', 'https://chat.whatsapp.com/']
global.Owner = {
  

  
  '6283866912878': { // put your number here
    name: 'Hah',
    isDev: false, // if true this number will send if bot have bug and developer mode true
    isReport: false, // if true this number will send if user use command /report or /join
    isCreator: true // if true this number will send if user use command /owner or /creator
  },
  '6283898194688': { // put your number here
    name : 'Ku pendam dalam mengagumi dirimu',
    isDev: true, // if true this number will send if bot have bug and developer mode true
    isReport: true, // if true this number will send if user use command /report or /join
    isCreator: true // if true this number will send if user use command /owner or /creator
  },
  '60177945983': { // put your number here
    name: 'Bot2',
    isDev: false, // if true this number will send if bot have bug and developer mode true
    isReport: true, // if true this number will send if user use command /report or /join
    isCreator: true // if true this number will send if user use command /owner or /creator
  },
  '': {
    name: 'Adiixyz',
    isReport: true, // if true this number will send if user use command /report or /join
  },
  '': {
    isReport: true
  },
  '': {} // ignore if you don't want anything, like name dll
}
global.mods = ['13479805233'] // Want some help?
global.prems = [] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  amel: 'https://melcanz.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz',
  hardianto: 'http://hardianto-chan.herokuapp.com',
  lol: 'https://api.lolhuman.xyz' ,
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://melcanz.com': 'trial',
  'https://api.xteam.xyz': 'HIRO',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'http://hardianto-chan.herokuapp.com': 'hardianto',
  'https://leyscoders-api.herokuapp.com': 'MIMINGANZ',
  'https://api.lolhuman.xyz': 'HIRO' 
}

// Sticker WM
global.packname = 'Bot Saya'
global.author = 'Bot Kita'

global.multiplier = 39 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
