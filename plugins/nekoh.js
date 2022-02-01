let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  let res = await fetch('https://waifu.pics/nsfw/neko')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', 'Antum birahi sama kartun???', m)
}
handler.help = ['nekonsfw']
handler.tags = ['nsfw']
handler.command = /^(nekonsfw)$/i
//MADE IN ERPAN 1140 BERKOLABORASI DENGAN BTS
module.exports = handler
