let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = `https://tessyy-api.herokuapp.com/wpnime`
  conn.sendFile(m.chat, res, 'wallpaper.jpg', `nih wallpaper mu kak`, m, false)
}
handler.help = ['wall'].map(v => v + ' ')
handler.tags = ['image']

handler.command = /^(wall)$/i
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

