let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('*[❗] Wait,Tunggu Bentar Kak Sedang Dalam Proses...*')
  let res = `http://lolhuman.herokuapp.com/api/photooxy3/bannerlol?apikey=HIRO&text=${response}`
  conn.sendFile(m.chat, res, 'bannerlol.jpg', `Nih Kak`, m, false)
}
handler.help = ['lolbanner'].map(v => v + ' <teks>')
handler.tags = ['sticker']
handler.command = /^(lolbanner)$/i
handler.limit = false
handler.register = true

module.exports = handler

//31caf10e4a64e86c1a92bcba
