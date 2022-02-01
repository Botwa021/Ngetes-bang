let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = ``
  conn.sendFile(m.chat, res, '.jpg', `Wangy Wangy wangy`, m, false)
}
handler.help = [''].map(v => v + ' ')
handler.tags = ['']

handler.command = /^()$/i

module.exports = handler

