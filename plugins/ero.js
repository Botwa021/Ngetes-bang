let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = `https://api.xteam.xyz/randomimage/ero?apikey=HIRO`
  conn.sendFile(m.chat, res, 'ero.jpg', `wangy wangy wangy`, m, false)
}
handler.help = ['ero'].map(v => v + ' ')
handler.tags = ['dewasa']

handler.command = /^(ero)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler

