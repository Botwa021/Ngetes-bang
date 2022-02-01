let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  let res = await fetch('https://waifu.pics/nsfw/trap')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', 'Antum Birahi sama laki laki??????', m)
}
handler.help = ['trap']
handler.tags = ['nsfw']
handler.command = /^(trap)$/i
//MADE IN ERPAN 1140 BERKOLABORASI DENGAN BTS
module.exports = handler
