let handler = async (m, { conn, args, text }) =>{
m.reply('Unlimited')

}
handler.help = ['limit [@user]']
handler.tags = ['rpg']
handler.command = /^(my|limit)$/i
module.exports = handler
