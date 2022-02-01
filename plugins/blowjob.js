let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  let res = await fetch('hhttps://waifu.pics/nsfw/blowjob')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', 'Antum Birahi sama kartun??????', m)
}
handler.help = ['blowjob']
handler.tags = ['nsfw']
handler.command = /^(blowjob)$/i
//MADE IN ERPAN 1140 BERKOLABORASI DENGAN BTS
module.exports = handler
