let fetch = require("node-fetch")
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn}) => {
  try {
  let res = await fetch('https://api.waifu.pics/sfw/cry')
  let json = await res.json()
  let { 
result
} = json
let stiker = await sticker(null, result, 'Cry', '@Kokoronationz')
  conn.sendMessage(m.chat, stiker, MessageType.sticker, {
    quoted: m
  })
 } catch (e) {
  }
}
handler.help = ['cry']
handler.tags = ['anime']
handler.command = /^cry/i

module.exports = handler
