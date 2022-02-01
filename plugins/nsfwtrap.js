let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let res = await fetch('https://api.waifu.pics/nsfw/trap')
  if (!res.ok) throw 'Error Website sedang down'
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', 'Sange kok sama trap???', m, 0, { thumbnail: Buffer.alloc(0) })
}
handler.help = ['trapnsfw']
handler.tags = ['nsfw']
handler.command = /^(trapnsfw)$/i



module.exports = handler
