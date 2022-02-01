let handler = async (m, { conn }) => {
    let yh = global.katomegumi
    let url = yh[Math.floor(Math.random() * yh.length)]
    let buffer = (await conn.getFile(url)).data
    conn.sendButton(m.chat, 'Perfect sih ini mah', author, buffer, [[
        'next', '/katomegumi'
    ]], { quoted: m })
}
handler.command = /^(katomegumi)$/i
handler.tags = ['anime']
handler.help = ['katomegumi']
module.exports = handler

global.katomegumi = [
   "https://i.pinimg.com/236x/04/0a/3f/040a3f5585d37dadf274e3b0a02638c1.jpg",
   "https://i.pinimg.com/236x/2e/95/e9/2e95e961349c81e900f6a4e393900a7e.jpg",
   "https://i.pinimg.com/236x/22/2e/17/222e17c4a519b1788b6017116389b044.jpg",
   "https://i.pinimg.com/236x/08/8b/21/088b21cb1ed71edeb27b8243b3ec61af.jpg",
   "https://i.pinimg.com/236x/0a/1f/79/0a1f7961c1bc5194d2884865e57660df.jpg",
   "https://i.pinimg.com/236x/6e/64/29/6e64295cf854e4ad117eef0530bce484.jpg",
   "https://i.pinimg.com/236x/02/31/c1/0231c158992a773f2367353352b2270f.jpg",
   "https://i.pinimg.com/236x/fc/f0/c7/fcf0c71c08cf23126018d5d68bb6a238.jpg",
   "https://i.pinimg.com/236x/55/93/c8/5593c8d05f985e674858367494b5129f.jpg",
   "https://i.pinimg.com/236x/34/b7/4e/34b74ee3bd69e59f38e26b8dcdacd0f3.jpg",
   "https://i.pinimg.com/236x/d4/3c/24/d43c2429f256433a770dca7bceb85d6a.jpg",
   "https://i.pinimg.com/236x/28/96/64/28966491a961697ad785384165e4fdd3.jpg",
   "https://i.pinimg.com/236x/4f/fd/3b/4ffd3ba4b5b3b72eaedcd5a1732bb99e.jpg",
   "https://i.pinimg.com/236x/98/7a/2a/987a2aea05b12d88fc8bd029f10e4015.jpg",
"https://i.pinimg.com/236x/4a/ae/c7/4aaec7221c73b8be67ac73bca4d6eb76.jpg",
"https://i.pinimg.com/236x/df/de/31/dfde313df9281f067a76595d361df3e3.jpg",
"https://i.pinimg.com/236x/55/e8/d3/55e8d3cd96fdd8e48b6b085a93dd6bef.jpg",
"https://i.pinimg.com/236x/76/f0/e1/76f0e15bc0936aa930047993b24b9d60.jpg",
"https://i.pinimg.com/236x/2e/4f/db/2e4fdbef7a1a1961c71b211a57892c79.jpg",
"https://i.pinimg.com/236x/ad/45/df/ad45df277f76d8959776839b6638fa28.jpg",
"https://i.pinimg.com/236x/af/54/2b/af542b29239ab0bf70c166b0a20cae47.jpg",
"https://i.pinimg.com/236x/8b/74/15/8b7415ed46d62701e15b982d32709f67.jpg",
"https://i.pinimg.com/236x/0b/ec/cd/0beccd9b8e359ab796b9b83499170f88.jpg",
"https://i.pinimg.com/236x/e7/60/a5/e760a58e68e58d3b331306eaa5de4a06.jpg",
"https://i.pinimg.com/236x/63/e4/ee/63e4ee1ef443335cdcd99717e955d9f8.jpg",
"https://i.pinimg.com/236x/0b/ec/cd/0beccd9b8e359ab796b9b83499170f88.jpg",
"https://i.pinimg.com/236x/91/2c/d0/912cd07f0fc0f45435071203a121a7c4.jpg",
"https://i.pinimg.com/236x/6b/b0/e4/6bb0e42f262ea5a525406e1cb02cff59.jpg",
"https://i.pinimg.com/236x/3d/6c/8e/3d6c8eed9eadc59ed9db77272a2f4df9.jpg",
"https://i.pinimg.com/236x/0a/de/97/0ade97d749ca0234ede7c8e74e9ff09e.jpg",
"https://i.pinimg.com/236x/02/05/b5/0205b55f856224abca31a208af8bddda.jpg",
"https://i.pinimg.com/236x/36/41/6b/36416b14d65477d0ea76c1c35a94da51.jpg",
"https://i.pinimg.com/236x/e3/9d/68/e39d68874e76c703afb4248e809a4565.jpg",
"https://i.pinimg.com/236x/36/f5/95/36f59564ea203dd8c4b83df596fe0cc6.jpg",
"https://i.pinimg.com/236x/23/f7/13/23f7138e494671e737446bed10373b5b.jpg",
"https://i.pinimg.com/236x/7a/a8/6d/7aa86da1f94ec357a50f00045f0451da.jpg",
"https://i.pinimg.com/236x/08/54/26/08542678e796e6e96f1556ca9a58974c.jpg",
"https://i.pinimg.com/236x/a6/b1/f3/a6b1f324b5862e9374779dac069e7a4d.jpg",
"https://i.pinimg.com/236x/31/fc/fb/31fcfba02b786be40423332cc011599c.jpg",
"https://i.pinimg.com/236x/26/0f/63/260f63a683a7ecd8e4d325e16ae60ec9.jpg",
"https://i.pinimg.com/236x/f2/0a/ba/f20aba080f4169a734b751bc53123d21.jpg",
"https://i.pinimg.com/236x/b6/6f/b5/b66fb594cdef076bc01b739ae59263a5.jpg"


























































































































































]
