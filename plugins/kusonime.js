let fetch = require('node-fetch')
let handler = async function (m, { text, isPrems, isOwner }) {
    if (!text) throw '_Cari Apa Kak?_'
    await m.reply('sabar kak')
  let res = await fetch('https://ardhixsquerpants.herokuapp.com/api/kuso?q=' + encodeURIComponent(text))
let json= await res.json()
  const ardi =  `*judul:* "${json.title}"\n\n*info:* ${json.info}\n\n*sinopsis:* ${json.sinopsis}\n\n*link download:* ${json.link_dl}`
     conn.sendFile(m.chat,json.thumb, 'image.jpg', ardi, m)
}
handler.help = ['anime <judul>']
handler.tags = ['anime']
handler.command = /^anime$/i
handler.group = false

module.exports = handler
