let handler = m => m
handler.before = async function (m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/TEBAK KATA/i.test(m.quoted.text)) return
    conn.tebakkata  = conn.tebakkata  ? conn.tebakkata  : {}
    if (!(id in conn.tebakkata )) return m.reply('Soal itu telah berakhir')

    if (m.quoted.id == conn.tebakkata [id][0].id) {
        let json = JSON.parse(JSON.stringify(conn.tebakkata [id][1]))
        if (" " + m.text.toLowerCase() == json.result.jawaban.toLowerCase()) {
            global.DATABASE._data.users[m.sender].exp += conn.tebakkata [id][2]
            m.reply(`Benar!\n+ Rp. ${conn.tebakkata [id][2].toLocaleString()}`)
            clearTimeout(conn.tebakkata [id][3])
            delete conn.tebakkata [id]
        } else if (m.text.toLowerCase().endsWith(json.result.jawaban.split` `[1])) m.reply(`Dikit Lagi!`)
        else m.reply(`Salah!`)
    }
}
handler.exp = 0

module.exports = handler