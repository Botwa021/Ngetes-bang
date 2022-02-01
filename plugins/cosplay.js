let handler = async (m, { conn }) => {
    let yh = global.cosplay
    let url = yh[Math.floor(Math.random() * yh.length)]
    let buffer = (await conn.getFile(url)).data
    conn.sendButton(m.chat, 'Punya Ku', author, buffer, [[
        'next', '/cosplay'
    ]], { quoted: m })
}
handler.command = /^(cosplay)$/i
handler.tags = ['anime']
handler.help = ['cosplay']
module.exports = handler

global.cosplay = [
  "https://i.pinimg.com/236x/cc/e3/f8/cce3f8f3dba31b496bb7e5a2698f5882.jpg",
  "https://i.pinimg.com/236x/0c/55/ed/0c55edd4f64a4dc287921912b35ff757.jpg",
  "https://i.pinimg.com/236x/eb/cb/d5/ebcbd5b84c7adf20f01710e4f5acfaee.jpg",
  "https://i.pinimg.com/236x/d6/45/68/d64568e995285dbc35569fab9365f98b.jpg",
  "https://i.pinimg.com/236x/0b/ea/b7/0beab7e7f46ff21516b126bd1749fd1a.jpg",
  "https://i.pinimg.com/236x/6e/39/3d/6e393dc6a70e0bf3742eb583d0c2ce7d.jpg",
  "https://i.pinimg.com/236x/1d/6a/d5/1d6ad5b4d29643b2b74a71a43f03914d.jpg",
  "https://i.pinimg.com/236x/73/0b/ce/730bcec9d7ff9d29e966ec2128c211cf.jpg",
  "https://i.pinimg.com/236x/80/88/5b/80885b6710daf14bfd20ead87e5b8090.jpg",
  "https://i.pinimg.com/236x/80/88/5b/80885b6710daf14bfd20ead87e5b8090.jpg",
  "https://i.pinimg.com/236x/2b/0a/03/2b0a037d2a1469bc2e24b7ae274c9aa6.jpg",
  "https://i.pinimg.com/236x/08/3d/7d/083d7d73c843d2a879a1c2bdb146afb4.jpg",
  "https://i.pinimg.com/236x/26/18/d6/2618d656352df6e1b9e998969299011a.jpg",
  "https://i.pinimg.com/236x/f0/bf/14/f0bf1418fb94ed211138192046bc14cc.jpg",
  "https://i.pinimg.com/236x/78/64/47/7864478f2519ea21236b7b76baec09ee.jpg",
  "https://i.pinimg.com/236x/98/1f/5e/981f5ef7c3166c7ab9d60da64f6404cc.jpg",
  "https://i.pinimg.com/236x/8a/b2/cf/8ab2cf45e2dceae945f1dcb211169872.jpg",
  "https://i.pinimg.com/236x/bc/80/2c/bc802c7134f56de9f74493006b83821b.jpg",
  "https://i.pinimg.com/236x/eb/82/c6/eb82c619ce5ee4ac8efeb32c82ab2659.jpg",
  "https://i.pinimg.com/236x/3a/6e/91/3a6e91b46803ead29e9481caf3d1e05b.jpg",
  "https://i.pinimg.com/236x/97/60/9b/97609ba64090a5ccaa0d1ced204f86f6.jpg",
  "https://i.pinimg.com/236x/2f/a9/bc/2fa9bc4ee9cdf11698fceec6279d4220.jpg",
  "https://i.pinimg.com/236x/cb/6a/3d/cb6a3dcf0105dd4937a1fb7ddcc0113b.jpg",
  "https://i.pinimg.com/236x/fd/ee/86/fdee86c96a0a6fc4d758d08749a2d1d2.jpg",
  "https://i.pinimg.com/236x/2b/94/b7/2b94b75fd07a373b9e38f1fcae0d53d3.jpg",
  "https://i.pinimg.com/236x/42/0d/69/420d691d7855932853d881536c8e5a50.jpg",
  "https://i.pinimg.com/236x/07/35/59/073559cf4326471e58820db44abdaaf6.jpg",
  "https://i.pinimg.com/236x/19/98/5b/19985b2d6833f99ee3f8c9bc473d22b1.jpg",
  "https://i.pinimg.com/236x/c9/d8/5d/c9d85d31b8adbfed2fb1acde9ae8cb59.jpg",
  "https://i.pinimg.com/236x/f6/8e/99/f68e996ffaff8d1ba4cbb0505315d8e4.jpg",
  "https://i.pinimg.com/236x/74/34/01/7434016865130cd816a230893d8509f4.jpg",
  "https://i.pinimg.com/236x/3d/37/db/3d37db446e7cc206d749e25a39635608.jpg",
  "https://i.pinimg.com/236x/ce/50/aa/ce50aa49e8b9ed584cb10ec487c307b2.jpg",
  "https://i.pinimg.com/236x/82/8a/13/828a13486d89b5d99240bfcda1babd69.jpg",
  "https://i.pinimg.com/236x/b3/2b/7b/b32b7b059bb378c5dc7862bec3998be4.jpg",
  "https://i.pinimg.com/236x/14/d9/59/14d959051b9e4912b7ebc3c87dbc9a1a.jpg",
  "https://i.pinimg.com/236x/eb/0f/33/eb0f3319d6b57a199e983d6b6d29d07e.jpg",
  "https://i.pinimg.com/236x/71/ba/84/71ba84c022bc491acd12ce74a23f90dd.jpg",
  "https://i.pinimg.com/236x/2d/e7/d2/2de7d2bb9d9922d2d5b0b5ec5c24b492.jpg",
  "https://i.pinimg.com/236x/35/0c/b9/350cb91f3a7498de8d4ea0297dcb28be.jpg",
  "https://i.pinimg.com/236x/d9/c2/47/d9c2471351b987e57751315bf427f688.jpg",
  "https://i.pinimg.com/236x/2a/78/3e/2a783ead9d7962b4e459316f36d04c26.jpg",
  "https://i.pinimg.com/236x/db/30/94/db309483a295362934ef9e740e4e5a03.jpg",
  "https://i.pinimg.com/236x/0e/6b/89/0e6b897dc4abf1bdef21e95f758858a9.jpg",
  "https://i.pinimg.com/236x/1a/ab/f1/1aabf1115d810c2bcb56902242a35ef6.jpg",
  "https://i.pinimg.com/236x/79/69/53/79695355413fcc441582e294882fbc18.jpg",
  "https://i.pinimg.com/236x/3b/8e/5e/3b8e5eb6692a7631886cc68350908b0e.jpg",
  "https://i.pinimg.com/236x/f5/38/49/f538497916a00978ae367901d349d185.jpg",
  "https://i.pinimg.com/236x/b1/8a/f3/b18af3a005856abce5d2b72a68413ffd.jpg",
  "https://i.pinimg.com/236x/32/60/05/3260056cc84e11dac8b9e43f76a0ef92.jpg",
  "https://i.pinimg.com/236x/c3/0f/57/c30f57214c48ffa8cecea89a28e620b6.jpg",
  "https://i.pinimg.com/236x/73/37/03/733703b21888ce75a2f15a4fbaaf154f.jpg",
  "https://i.pinimg.com/236x/56/3c/d3/563cd3088e2841a5e698e21d0e728ecb.jpg",
  "https://i.pinimg.com/236x/bc/9e/90/bc9e908afadf60e6f2032e0b95b215e2.jpg",
  "https://i.pinimg.com/236x/02/f9/0f/02f90f55f6edcc25b6c782869408bb78.jpg",
  "https://i.pinimg.com/236x/eb/21/1b/eb211b03879ebf229285f8792349c02b.jpg",
  "https://i.pinimg.com/236x/fd/89/4d/fd894db668a6eac04c5cbfb58d26e773.jpg",
  "https://i.pinimg.com/236x/ca/7b/74/ca7b74fc32c3173ba4f296937c23d7be.jpg",
  "https://i.pinimg.com/236x/79/24/31/792431837927b4771ad4c9e1b9bb4ce6.jpg",
  "https://i.pinimg.com/236x/09/a2/55/09a255bcfd0a19d3e16d5e16c9c333d9.jpg",
  "https://i.pinimg.com/236x/b3/71/d9/b371d9f995e12529e9c69aa99ab8cbc6.jpg",
  "https://i.pinimg.com/236x/9f/5c/7a/9f5c7a54b7c272eaceb2f673e4a94b6f.jpg",
  "https://i.pinimg.com/236x/c9/e6/79/c9e679ac5d048ff262b7f66713b893ed.jpg",
  "https://i.pinimg.com/236x/e2/1f/c5/e21fc59929fb68105de822a50c826173.jpg",
  "https://i.pinimg.com/236x/68/b0/7b/68b07b553324666586e3b7a56f03e434.jpg",
  "https://i.pinimg.com/236x/3a/0b/cc/3a0bccbf6d8c424283413e14e428fe9d.jpg",
  "https://i.pinimg.com/236x/59/22/a7/5922a786d5bdf695b6db8e32de2899be.jpg",
  "https://i.pinimg.com/736x/93/0c/74/930c74b965de3200685bc95d2795ef37.jpg",
  "https://i.pinimg.com/236x/c3/4d/e8/c34de8617642c45b67f44c86ea150eba.jpg",
  "https://i.pinimg.com/236x/72/0c/f2/720cf27602c0e409a74690c482c5e736.jpg",
  "https://i.pinimg.com/236x/05/f9/90/05f9900089fe57aabf1385d72761b457.jpg",
  "https://i.pinimg.com/236x/8f/d9/f0/8fd9f09dbf77398b8d50708b4329aa91.jpg",
  "https://i.pinimg.com/236x/8f/d9/f0/8fd9f09dbf77398b8d50708b4329aa91.jpg",
  "https://i.pinimg.com/236x/d3/63/85/d3638520e349babf4f3207ba2cda69b7.jpg",
  "https://i.pinimg.com/236x/11/0f/ce/110fce76af200f56c4f40b236c554ff1.jpg",
  "https://i.pinimg.com/236x/f8/ea/ad/f8eaad59ccac7400bb76aa3c2698c30a.jpg",
  "https://i.pinimg.com/236x/bc/be/f3/bcbef3c622e409882ef6b3c20af628dd.jpg",
  "https://i.pinimg.com/236x/99/36/22/993622d9aa55c4d9ac5c6eda491a802b.jpg",
  "https://i.pinimg.com/236x/dc/ae/ca/dcaeca5054b6bb65461e53b575069143.jpg",
  "https://i.pinimg.com/236x/ae/38/c8/ae38c8c74023b885192790fa2b0c6796.jpg",
  "https://i.pinimg.com/236x/5d/9c/4d/5d9c4dc01a7a689aead1385f7e250cd3.jpg",
  "https://i.pinimg.com/236x/af/50/c8/af50c86f61b2ba2de5b932ddbc9df72c.jpg",
  "https://i.pinimg.com/236x/07/60/65/076065691e2f78a680ad5de1f8380f9a.jpg",
  "https://i.pinimg.com/236x/21/9a/43/219a43e295016c93dfbba8301b0abce4.jpg",
  "https://i.pinimg.com/236x/b4/f1/55/b4f15509f16048d0a4326d2b6e5fc183.jpg",
  "https://i.pinimg.com/236x/ee/f6/bd/eef6bd264d0fc543a6d5cc1d5b3258dc.jpg",
  "https://i.pinimg.com/236x/50/93/96/5093965c4bc1ecb8130eb4fee41c4ba2.jpg",
  "https://i.pinimg.com/236x/1c/63/46/1c6346f15495f01781cd1fbcb0e13288.jpg",
  "https://i.pinimg.com/236x/e8/9b/49/e89b49a57e173d5d0f19dea225e058dc.jpg",
  "https://i.pinimg.com/236x/b0/d4/65/b0d46575c705adf77d698e33730396c4.jpg",
  "https://i.pinimg.com/236x/8c/d6/50/8cd650a4fd720de8efd3bb6e77e45f53.jpg",
  "https://i.pinimg.com/236x/17/76/dc/1776dcf04afda40493974f90c72f2688.jpg",
  "https://i.pinimg.com/236x/cd/a1/42/cda142414388a208e35aaca7507f1273.jpg",
  "https://i.pinimg.com/236x/22/bf/ec/22bfecbb92bc8756843bdff71dd93eb9.jpg",
  "https://i.pinimg.com/236x/31/92/2c/31922c1cb4789c8ba614c15b1ed79a6d.jpg",
  "https://i.pinimg.com/236x/a4/72/f7/a472f7cc1de0608b3648a517daef9d39.jpg",
  "https://i.pinimg.com/236x/72/a7/b8/72a7b80585927fc780acc1d62a131893.jpg",
  "https://i.pinimg.com/236x/95/c5/ab/95c5ab3b7b3dee2acb8f0884bf0f152d.jpg",
  "https://i.pinimg.com/236x/ce/b2/90/ceb2905247f4e7f726ab65e9fd926abd.jpg",
  "https://i.pinimg.com/236x/0d/a9/0e/0da90edb7bcb79340b4345389f834e8e.jpg",
  "https://i.pinimg.com/236x/b5/c0/12/b5c012d44abe4f31d1477745f9209bca.jpg",
  "https://i.pinimg.com/236x/e2/ee/41/e2ee4111b0be624d87b5e1438ace5a72.jpg",
  "https://i.pinimg.com/236x/65/02/6a/65026a4f800523016e7a860d49b05c3e.jpg",
  "https://i.pinimg.com/236x/b6/8c/1d/b68c1d4f2d6dcca51fe73b249c2f1c14.jpg",
  "https://i.pinimg.com/236x/cd/08/d0/cd08d08d9e914abf871b66047c10a6d1.jpg",
  "https://i.pinimg.com/236x/f3/b1/68/f3b168b45b328ff671d94c567ce992fa.jpg",
  "https://i.pinimg.com/236x/19/9c/70/199c70f5506a2f22bd9e08068e5ea97c.jpg",
  "https://i.pinimg.com/236x/75/b3/99/75b399a50c4ac54e49261dd6e0f81a5b.jpg",
"https://i.pinimg.com/236x/9f/d4/15/9fd41515aa5dab05e7565c7859086af2.jpg"


























































































































































]
