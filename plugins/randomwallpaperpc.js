
let handler = async (m, { conn }) => {
    let yh = global.wallpaper
    let url = yh[Math.floor(Math.random() * yh.length)]
    let buffer = (await conn.getFile(url)).data
    conn.sendButton(m.chat, 'By alok', author, buffer, [[
        'next', '/wallpaperpc'
    ]], { quoted: m })
}
handler.command = /^(wallpaperpc|\wallpc)$/i
handler.tags = ['image']
handler.help = ['wallpaperpc']
module.exports = handler

global.wallpaper = [
   "https://cdn.discordapp.com/attachments/572788008735080479/905104057847386143/179-1795165_anime-wallpaper-for-laptop.jpg",
   "https://cdn.discordapp.com/attachments/572788008735080479/905104144715624468/137326.jpg",
   "https://cdn.discordapp.com/attachments/572788008735080479/905104160964349952/anime-girl-on-skateboard-scifi-oc.jpg",
   "https://cdn.discordapp.com/attachments/572788008735080479/905104154907787264/fun-winter-snowfall-original-anime.jpg",
   "https://cdn.discordapp.com/attachments/572788008735080479/905104169126473788/1334797.jpg",
   "https://cdn.discordapp.com/attachments/572788008735080479/905104197077336115/nightcore-anime-girl-do-2560x1440.jpg",
   "https://cdn.discordapp.com/attachments/572788008735080479/905117416835678258/unknown.png",
   "https://cdn.discordapp.com/attachments/572788008735080479/905122395243814942/unknown.png",
   "https://cdn.discordapp.com/attachments/572788008735080479/906019547251867648/FDCUkxYaUAArbv1.png",
   "https://cdn.discordapp.com/attachments/572788008735080479/906140157265199145/caption_this_3.jpg",
   "https://cdn.discordapp.com/attachments/572788008735080479/906140200424570930/caption_this_1.jpg",
   "https://cdn.discordapp.com/attachments/572788008735080479/906140309241626684/wallpaper_2.jpg",
   "https://cdn.discordapp.com/attachments/572788008735080479/906431779529961502/Virtual_Background.jpg",
   "https://cdn.discordapp.com/attachments/572788008735080479/906431779529961502/Virtual_Background.jpg",
"https://cdn.discordapp.com/attachments/572788008735080479/906765557536264212/2021-11-07_12.41.26.png",
"https://cdn.discordapp.com/attachments/572788008735080479/906765557536264212/2021-11-07_12.41.26.png",
"https://cdn.discordapp.com/attachments/572788008735080479/906765950261530684/2021-11-07_12.43.05.png",
"https://cdn.discordapp.com/attachments/572788008735080479/907526280625418260/Isekai_aja.jpg",
"https://cdn.discordapp.com/attachments/572788008735080479/907543174111707186/0125ccda08049e831b7ea0bf4d6637fe.jpg",
"https://cdn.discordapp.com/attachments/572788008735080479/909416387343155271/Ice_Cube_Phone_Res.png",
"https://cdn.discordapp.com/attachments/572788008735080479/909769952200912996/70bb7e2cbbb2f0dc33da0f40c5daf1ea.jpg",
"https://cdn.discordapp.com/attachments/572788008735080479/909995720436768778/illust_88691653_20211115_192326.png",
"https://cdn.discordapp.com/attachments/572788008735080479/909995757187256341/illust_88691653_20211115_192345.png",
"https://cdn.discordapp.com/attachments/572788008735080479/910053454733516820/4aee868370fddef03b3e5d8845d9707e_9188835425041689123.png",
"https://cdn.discordapp.com/attachments/572788008735080479/910127437424250920/1145723.png",
"https://cdn.discordapp.com/attachments/572788008735080479/910127554009137152/1172294.png",
"https://cdn.discordapp.com/attachments/572788008735080479/910541230457360414/wp9752842-shiroko-sunaookami-wallpapers.jpg",
"https://cdn.discordapp.com/attachments/572788008735080479/910765403314221076/unknown.png",
"https://cdn.discordapp.com/attachments/572788008735080479/910809298018369556/cb59290801e25611d3f4b0cf759d1968.jpg",
"https://cdn.discordapp.com/attachments/572788008735080479/910809298324570132/3d9ad5f6a5d971dd78c146c077753ae4.jpg",
"https://cdn.discordapp.com/attachments/572788008735080479/910859406969819136/8c5f33c0db69cb3a0a5c6915b14f69b1.jpg",
"https://cdn.discordapp.com/attachments/572788008735080479/911852849707778058/2021-11-21_12.12.46.png",
"https://cdn.discordapp.com/attachments/572788008735080479/917373917943971880/bp6gi2qbmxg21.png",
"https://cdn.discordapp.com/attachments/572788008735080479/924492632997126145/gambar_tk.png",
"https://cdn.discordapp.com/attachments/572788008735080479/924289208032583720/angkasa.png",
"https://cdn.discordapp.com/attachments/572788008735080479/924688034316845107/gambar_tk.png",
"https://cdn.discordapp.com/attachments/572788008735080479/926783118747238400/0000078483729283374672364763743.jpg",
"https://cdn.discordapp.com/attachments/572788008735080479/927079254062161950/stretched-1920-1080-1132526-01.jpeg",
"https://cdn.discordapp.com/attachments/572788008735080479/935745455910952970/SPOILER_820043.jpg",
"https://cdn.discordapp.com/attachments/572788008735080479/935882304767795240/Screenshot_181.png",
"https://cdn.discordapp.com/attachments/572788008735080479/935892505092841612/Screenshot_180.png",
"https://cdn.discordapp.com/attachments/572788008735080479/937169855742877726/wallapper.png",
"https://cdn.discordapp.com/attachments/890056749506256956/931507160314150922/anime-aesthetic-desktop-wallpaper-new-pink-aesthetic-anime-desktop-wallpapers-wallpaper-cave-of-anime-aesthetic-desktop-wallpaper-scaled.jpg",
"https://cdn.discordapp.com/attachments/890056749506256956/931958194949996634/58347dc8eb859fcb74a80b621fcabd49.jpg",
"https://cdn.discordapp.com/attachments/890056749506256956/932573469005185064/30155057541185ac7966f0b28c2a5882.jpg",,
"https://cdn.discordapp.com/attachments/890056749506256956/932573469332353065/fdf5809be6beb71a8e9fbd23c0ed362c.jpg",
"https://cdn.discordapp.com/attachments/890056749506256956/932573469621764126/ca8bdb2441a821a801b2a9068b8daae0.jpg",
"https://cdn.discordapp.com/attachments/890056749506256956/932573469852459038/d5b6c948b515089c3e56e7f75af8d44d.jpg",
"https://cdn.discordapp.com/attachments/890056749506256956/932693533725446284/IMG_20220118_005041.jpg",
"https://cdn.discordapp.com/attachments/890056749506256956/932863549653549076/-t2ig9l.jpg",
"https://cdn.discordapp.com/attachments/890056749506256956/932936328063111188/94445236_p0_square1200.webp",
"https://cdn.discordapp.com/attachments/890056749506256956/932936328331538473/95215848_p0_custom1200.webp",
"https://cdn.discordapp.com/attachments/890056749506256956/932948216310276126/thumb-1920-132937.jpg",
"https://cdn.discordapp.com/attachments/890056749506256956/933246691866472498/IMG_20220119_132759.jpg",
"https://cdn.discordapp.com/attachments/890056749506256956/933551601208131635/IMG_20220120_093958.jpg",
"https://cdn.discordapp.com/attachments/890056749506256956/933601947846582282/Screenshot_20220119-195959.jpg",
"https://cdn.discordapp.com/attachments/890056749506256956/933609736560066560/Levi-4badeacd-b1b9-4397-b8ac-08f7c60d8d49.jpg",
"https://cdn.discordapp.com/attachments/890056749506256956/933999997479960616/JoJos_Bizarre_Adventure__Image_Gallery_List_View.png",
"https://cdn.discordapp.com/attachments/890056749506256956/934467904068538419/cbd621477f642fc00cf95b18eb394473.jpg",
"https://cdn.discordapp.com/attachments/890056749506256956/928533354733797408/illust_85098200_20201114_122955.png",
"https://cdn.discordapp.com/attachments/890056749506256956/928523567933583400/RDT_20211121_0716252477074720704850200.jpg",
"https://cdn.discordapp.com/attachments/890056749506256956/927926623917969438/png_20211220_215324_0000.png",
"https://cdn.discordapp.com/attachments/890056749506256956/927926624165441586/ee06152489720c0792da8ad08ba92d39.jpg",
"https://cdn.discordapp.com/attachments/890056749506256956/927926623704064030/1e9ba57ef018f4cd62466ae5fa1cd1ff.jpg",
"https://cdn.discordapp.com/attachments/890056749506256956/927926623469207732/dc2f2e6416d4ddf815219832060cdf0d.jpg",
"https://cdn.discordapp.com/attachments/890056749506256956/927523773899489290/-_edits_2.jpeg",
"https://cdn.discordapp.com/attachments/890056749506256956/927523773626843217/-_edits.jpeg",
"https://cdn.discordapp.com/attachments/890056749506256956/927457102178451486/cksadjtd22471.png",
"https://cdn.discordapp.com/attachments/890056749506256956/927285197580406814/31332227a1d76b80d50a48e73a373e17.jpg",
"https://cdn.discordapp.com/attachments/890056749506256956/927219138991104091/anthony-ray-zenitsu-step-18.jpg",
"https://cdn.discordapp.com/attachments/890056749506256956/927153520564662312/PicsArt_01-02-05.55.54.jpg",
"https://cdn.discordapp.com/attachments/890056749506256956/926779920120696852/555a079ca7d449de9ab62bdf1d0a036b.jpg",
"https://cdn.discordapp.com/attachments/890056749506256956/926052296993939476/illust_93370626_20211229_004204.jpg",
"https://cdn.discordapp.com/attachments/890056749506256956/926033757436280882/wp3228155.png",
"https://cdn.discordapp.com/attachments/890056749506256956/926032269435604992/wallpaper-aesthetic-hd-for-pc-7.png",
"https://cdn.discordapp.com/attachments/890056749506256956/925913129643298926/d7e0eb014baca5719f87ae55734d1708.jpg",
"https://cdn.discordapp.com/attachments/890056749506256956/924638192370610196/IMG_20211226_150837.jpg",
"https://cdn.discordapp.com/attachments/890056749506256956/924293137415942174/e9ebb55782364c9250b49fa8c759ed51.jpg",
"https://cdn.discordapp.com/attachments/890056749506256956/923264151348990012/IMG_20211223_002033.jpg",
"https://cdn.discordapp.com/attachments/890056749506256956/922889510067511396/FGzbNOwacAMmTw8.jpeg",
"https://cdn.discordapp.com/attachments/890056749506256956/921517583793000469/698dafaf01cc0524ddb5b3fdb39aaeab71ebf2437c477ed56d93f26e62eca67d.jpg",
"https://cdn.discordapp.com/attachments/890056749506256956/921072500962631680/5eaf1eb6faf18b65186f838e806bfe09.jpg",
"https://cdn.discordapp.com/attachments/890056749506256956/921071858328141824/20211213_221444.jpg",
"https://cdn.discordapp.com/attachments/890056749506256956/921071597819932743/IMG_20211216_230926.jpg",
"https://cdn.discordapp.com/attachments/890056749506256956/918531759832965130/0256b2e90c6fc46d9cd6957d51f13699.jpg",
"https://cdn.discordapp.com/attachments/890056749506256956/918465886078271528/IMG_3007.png",
"https://cdn.discordapp.com/attachments/890056749506256956/915249605975875624/IMG-20211128-WA0056.jpg",
"https://cdn.discordapp.com/attachments/890056749506256956/915223410194391070/19-50-52-downloadfile.jpg",
"https://cdn.discordapp.com/attachments/890056749506256956/915222545396006912/42b00b90898be67dfd94ee911a01f274.jpg",
"https://cdn.discordapp.com/attachments/890056749506256956/915191234874732574/90fd3bfd73ad6bd18071a85effbccc01.jpg",
"https://cdn.discordapp.com/attachments/890056749506256956/914516265740161064/FFPLvTeaIAADzSV.jpeg",
"https://cdn.discordapp.com/attachments/890056749506256956/913474256858398781/4485B5D9-DCC0-447F-96A3-8E70D4227ED9.jpg",
"https://cdn.discordapp.com/attachments/890056749506256956/913474254480224276/CF942CD9-BD57-4623-8CBE-77BB63B100CB.jpg",
"https://cdn.discordapp.com/attachments/890056749506256956/912890159060631582/illust_93650590_20211123_133848.jpg",
"https://cdn.discordapp.com/attachments/890056749506256956/911980178744418354/calon.jpeg",
"https://cdn.discordapp.com/attachments/890056749506256956/909907260514385991/IMG_20211104_120708.jpg",
"https://cdn.discordapp.com/attachments/890056749506256956/909907260833165372/Screenshot_2021-11-04-12-06-46-16.jpg",
"https://cdn.discordapp.com/attachments/890056749506256956/909907260833165372/Screenshot_2021-11-04-12-06-46-16.jpg",
"https://cdn.discordapp.com/attachments/890056749506256956/907629466635890708/1621771615540.jpg",
"https://cdn.discordapp.com/attachments/890056749506256956/907453938020794458/e634291300129fe66c520f011ef1f39d.jpg"







































































































]
