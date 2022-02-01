let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = `https://api.xteam.xyz/asupan/darkjoke?APIKEY=HIRO`
  conn.sendFile(m.chat, res, 'gelap.jpg', `senter mana senter`, m, false)
}
handler.help = ['darkjoke'].map(v => v + ' ')
handler.tags = ['asupan']

handler.command = /^(darkjoke)$/i

module.exports = handler

