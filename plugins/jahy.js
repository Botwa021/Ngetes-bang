let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = `https://api.xteam.xyz/randomimage/jahy?apikey=HIRO`
  conn.sendFile(m.chat, res, 'jahy.jpg', `wangy wangy wangy`, m, false)
}
handler.help = ['jahy'].map(v => v + ' ')
handler.tags = ['image']

handler.command = /^(jahy)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler

