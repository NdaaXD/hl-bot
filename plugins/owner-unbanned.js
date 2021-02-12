let handler = async (m, { conn, text }) => {
	if(isNaN(text)) {
		var number = text.split`@`[1]
	} else if(!isNaN(text)) {
		var number = text
	}
	
	if(!text && !m.quoted) return conn.reply(m.chat, `*Give a number or reply chat target.*`, m)
	if(number.length > 15) return conn.reply(m.chat, `*Format is Invalid.*`, m)
	
try {
	if(text) {
		var user = number + '@s.whatsapp.net'
	} else if(m.quoted.sender) {
		var user = m.quoted.sender
	} else if(m.mentionedJid) {
		var user = number + '@s.whatsapp.net'
	} 
} catch (e) {
		} finally {
			if(global.DATABASE._data.users[user].isBanned == false){
			  conn.reply(m.chat, `*Target is already unisBanned.*`, m)
			}else{
				global.DATABASE._data.users[user].isBanned = false
				global.DATABASE._data.users[user].isBanned = false
				global.DATABASE._data.isBanned -= 1
				var banTotal = global.DATABASE._data.isBanned
				conn.reply(m.chat, `*UnBanned Sukses*\n*Bilang Makasih Dulu Sama Owner*\n\n○ *Total Banned : ${banTotal}*`, m)
			}
	}	
}

handler.help = ['*62xx*','*@user*','*(reply)*'].map(v => 'unban ' + v)
handler.tags = ['']
handler.command = /^unban$/i
handler.owner = true
module.exports = handler