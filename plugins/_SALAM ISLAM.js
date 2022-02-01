let handler = m => m

handler.before = async function (m, { conn, isAdmin, isBotAdmin }) {
if (m.key.fromMe) return 
if (m.isBaileys) return 
  if (m.text.toLowerCase() == 'Assalamualaikum') {
    m.reply('waalaikumsalam') 
}
  return true
}

module.exports = handler
