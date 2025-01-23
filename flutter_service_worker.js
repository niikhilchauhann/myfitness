'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d069dab171f1fc6a8eaa897c6cfb198c",
".git/config": "7d8ca1dc57d160c3e6b98d615338198d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "8aac617feea9e85f2191ec4de7a72b28",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0cbe1a53711faf9c7fa144f8d61071c9",
".git/logs/refs/heads/main": "0cbe1a53711faf9c7fa144f8d61071c9",
".git/logs/refs/remotes/origin/main": "05443900a78913b315d7e25134bc4e66",
".git/objects/00/d13262a2c6f05d556795465a54b94cce3ffc9c": "40a97b61cb3ab54fe04fba5a27b6a1c5",
".git/objects/01/eb343222b02b5a86403c87ba3a8caf4521450d": "13f7e312ebbe9f45798851f1590a91d0",
".git/objects/02/061bc486c0568140450c1bb3829414d8ea778a": "9d9fb4019ff09c73d61d5ed04ef56fec",
".git/objects/02/d379985de129bf1118143f9405993014d84a88": "49a3fd720a605cdff3cce75df2a0f8a8",
".git/objects/03/ffe4b35ab04d4d2dbe7331bbb1e9d8d3e69159": "7b25f66964c357e0c035fded088fed16",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/06/d6a9431cc38c7695aa9d8316e41641c151c283": "333169db10c963d0c186edea34f1a016",
".git/objects/08/38e2dc6261e7ab2c978dbbb1aebcb6507b8246": "f952d45dc80dbd08fc003fe402d8cab1",
".git/objects/0b/51ae864e67e73719455784e5b0f3e9e55c0773": "51c3e49ee310412d2d83588bd907a878",
".git/objects/0b/57094b54c42a1a7b299bad7fa86af67543c00a": "5376a283a549bb3aeba444c3921a44e9",
".git/objects/0c/789fe61f20e0d058515e3ec5c373fe021f33bb": "69e3667b895a828d75e3785224769979",
".git/objects/0e/8a31d915c79536c34bca930895e700a15232b5": "931ba4842591f87d9ec9322f2c366825",
".git/objects/0f/2b82bf070cc02ea64ad10295087a57655366b3": "760ecc8d22aba80ee1e23b554e985e44",
".git/objects/11/a967a02b564bd540d4172bbf8231bf994049b0": "fc4a479d6dba692b438efa2b65af2213",
".git/objects/17/d39f27727c2a852461391eb71209913508f314": "a8494767d229fe34494bb3661c7c219e",
".git/objects/18/3b574bb7a778382a537d4c1f5fb60b66305d0b": "6a3e4c795aa49b3488de58bd689b3eec",
".git/objects/1a/7d86c6d436e8ebbccb24e8e8889fe63b4802f2": "43b3ec9327d47e1046e2ea249ac53ba5",
".git/objects/1a/ea716b2e58df547dac15e3f9acc3c540ef25ad": "1827eeaa463fe89df02c3e0aa594d8f9",
".git/objects/1c/82f2fe977e62d88f2ce84ae818fcff682d387e": "6c75d165b0c8a3d5e1e8b66b0c8b26c9",
".git/objects/1d/c7f958f3da245d8bfb849e4b4633e90512c0b2": "20b5b2cc4f9ee0bf3e6a504371665d06",
".git/objects/1e/2044de894fc50974f6edb53dcc7f1da07d4549": "05cc54e015746f9c99abe55b32569943",
".git/objects/1e/6f0b59098933b1a23bbc7cd66cbd4c051240cf": "2f77f01677695db87033647c7a8ad87c",
".git/objects/1e/b55e723637ffb2c40590ae0ac3019754b41ba6": "2541088f69fd4b433d4f8c39b95c172f",
".git/objects/1f/35a9bdc625774987b5db401867ef9f8ff7e536": "7188005a7ca5505625d109ea012a9883",
".git/objects/23/16cfb06b9a889502d793d7fee3dc9b8f445dab": "56e84de8d4f05d4f4acd244e029d31e5",
".git/objects/23/ed87a491063ea4ef12a1fd767be0d03bc1de1d": "cbc68f93005fc60e95f544f67d939c8c",
".git/objects/26/ab2fadbaa4e4071f656d5cebb10c6e323cb1ee": "60a3f25ce73e3d3645b0b1e38f4bd7e3",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/2a/87cc9466f48e5d251388fdfb5c8f09de06ad48": "af735cbb127a9c17da67e7af2275f329",
".git/objects/2e/e561ad939434b47ed90d669485108d8ebc0697": "b115a76b9e29ba2ae436865dd516dc2b",
".git/objects/2f/0246071e3311d53d804be776af02f2cdd9b2e1": "2a0c6c2e528451a9fb51d3c0463b70cf",
".git/objects/2f/c4e1b3d01ab4f5af37706a25bcf2597e689a77": "7d3e62e1159215b44e4e7e99ace65ba0",
".git/objects/35/789c8e624bb2fe4eac622b5c6af43136eda2f2": "71d048991cb7f52bdc78377a98cc3e6c",
".git/objects/3d/d1563a6bcec9f756169ad62d2ad21636a87ef0": "ecedb4b42b0c94c7941ca1285cacee7c",
".git/objects/3e/1a57e152d7007ad774eec09f78444fcffb5ffc": "c795ea24a053ae2617a1eb7f7f776042",
".git/objects/42/5d41ce4fe13f6a9a22711ff7a18dca5449187e": "738d42f3151356a4779e378c55425bd0",
".git/objects/43/a687ab30af943f575117f300f3e8f3d7fa3103": "db7e103b79f4f6eed8eee62f6f275b78",
".git/objects/47/0cfb5b1dd04b6955ed2b8f930ad2efef2c7b97": "113c7e716fd752a405cb889725565c7b",
".git/objects/49/71af7f92ff56c24ac449fb6b5a5f475b9c04e0": "1c24aa4f80277e6315beee6120faa50b",
".git/objects/49/f5cd3d6ecbb80529f5a463d34989ff013a8567": "23ab34379b3927ac80f79b75da35f7e8",
".git/objects/4b/5b196f783e1345d882e17a0e5f213867a464e9": "7f7f2e6b496f2f6ee5b053ecee44746f",
".git/objects/4d/66f4f0988e29ef85ca8b49233e0382b69b3b63": "be7ae01aae5db9f4480a5eae377f822b",
".git/objects/50/d28749adac4c9cbb75081bff9e5876cf8edb45": "7fe1eb9bedf7ecea5f4a941c5826c3b4",
".git/objects/53/341f303d143d1ad86050721d757a2c9d2570f8": "925f61089ae803bfd90d4438728e9117",
".git/objects/56/d7eced3d67fef7291a2314d31505fd912c6b2d": "a4e8a55072a1d988b3efd358070bf09c",
".git/objects/58/4d860c7ada1eda849e7621770af094df1b9394": "a081683df28459ae9b8cfeb5765b138e",
".git/objects/58/cafe4b0062cd49883756327433867b146cdff8": "ab9b09b5c9f3e3afbb13aa4bf2d3b933",
".git/objects/59/c41389b3a9cc182bb953cb41ce100ac008a1a8": "ab155815717b2508de851d11fcc520cc",
".git/objects/5b/10abd7dc51b39806e127733a5bba6f916b0d85": "07be685cbce55d92cd265b1d3f9e38f9",
".git/objects/5b/2b07fa06b7bc5a3ab6b28e766460597f2a0582": "fd4a1e26dceedd642079e02185021542",
".git/objects/5d/15672c94d052a73b76f679931d48a500ba7c7e": "f5f01d11ea277f6e147ede3404bdef3d",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/64/4b47496e5c4111dcfd00ba7177256008eb4c5d": "8437ba19c0cca9f63a39c892d79ffdbc",
".git/objects/65/a9df12f00081c400732d62c113aa0954bf396a": "275d637bffa61e65dd9820679a86c878",
".git/objects/65/f9e34b0b18f9868fc2727c587bab3e00c6c08e": "70fc78e483ffb99616504b9f7a79f639",
".git/objects/68/d1d8b4c732b2f06fb258f81f09e6cc407d41ec": "4f30d9867d93b8b632a48fa5b85f8886",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6f/16decd916568d97e8a23b6d6c5cafb9fdd4a15": "326cca1b8a29907e6fc2534b3beca741",
".git/objects/70/45d1066447257ef5a8569e7d95cce087d24003": "43b389cc6a9dd8201a4f0761e4b25d88",
".git/objects/70/db23a2316ea59b6640c08f5509c2f9c04629b0": "cc05951eae87fb5f2f931ee4bac34145",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/74/d99d9f927f0d180d2bd003a142fc413bf9e4d9": "9fa5a3eca468b67540bb3c94385eb0e0",
".git/objects/76/6e7ccfbbdc7598e5e28413fc626e7f088e06b6": "79707294faecf1745573185784c6a7d9",
".git/objects/78/e8826fbc653850df01aaa8bd51ff687ef6591d": "93bbb9450382d388ebc50dfd27c9daee",
".git/objects/79/6e0c56bf9c7ae6be1d83955c37026f547f4e58": "eb7b6d86d08bdf079e523cde75b97851",
".git/objects/7c/85d70cd0f019a4d6469c117deca13691669eff": "63dac58773a202f7d0f939fb2b4ee29f",
".git/objects/7f/5fc99eb56ee9abb308ec0b230fe314d690901a": "b4146fd4fbf7405c95fd7e90a4f040d7",
".git/objects/81/478f1f9bc38f783ba4ca309764df4ba5c1503b": "321d4bad95ec9737684b05fd1a2979f3",
".git/objects/84/62f56e056456b0beb371d3a1267c786b0f6569": "8e91566ef01e81ae7945a351a8c57254",
".git/objects/84/c4f58a0909e9dc0d81ab94a8aa7b9a1da25b53": "7cb1c836fe023d8afe5874667b5ba380",
".git/objects/84/e9a6454a9f25945605a8e9c1052508d3b47f93": "03ede858a4fad0098a48faf0880e168a",
".git/objects/85/944c3c5287b5dc219d1ea4608de6d80cf66ddb": "bee6d9c8d4422f6274d2f39789c6b1a8",
".git/objects/86/3860dc220ea557b5fdcc30f83b39095dba021c": "e351d7fc527a293b1096d5620807c8ab",
".git/objects/88/357d197d59c361886e5f22ecae71bbc0c862cf": "172cf2e5dd8705eab2b40d6eb604cb64",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/348cdd07b2f576330b60952226c2ecaab2690d": "8866e49e3afaea027aeea0ee182f4101",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/8d/b49987536700d781915c9413ab8a0f726ef5f8": "1e22be49cc5dbfacdf45313f2e5f03fe",
".git/objects/8e/174b306ab30a4795db9f1c62008f61dec059dc": "75eeaef35ebf76dd04eadadad3ff4158",
".git/objects/8e/3599c15373302812d59ccbe8e7baed47d9457e": "b8bb32c2cd4d2ea764f3609769506c95",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/97/d8c2a488e506746d198eea4e6c62f46ba3bb69": "8add19f14cceded01df2f1514211cc15",
".git/objects/a1/a66448ea15228e87975b3dddb86501a38eb6aa": "ee80956e028bb57b62dec980c88a269f",
".git/objects/a1/e16071c06b80217725da8a300b01a28e3f9c51": "2eec7f946131f85b27468ec2ac406f75",
".git/objects/a4/ccb6665b311ea87a0f360195a3486f6d4e6192": "9bcab4be38acc5009a334b6d6d005491",
".git/objects/a5/6514c952f03efd5505ab567253508bcb5ffc03": "003858c3a43ffe76057508681c74fb37",
".git/objects/a5/7acf55c6fb24efdb83a3611bdf957a6f52732c": "a1f8573818e729ecfeba8a5283bebbdd",
".git/objects/a7/5323178e665ba24474291352cf8d33c29d8ecd": "10e489a2798f04ae767f953930986502",
".git/objects/a7/72db429fa5ee06d17149f250261327460dd8b3": "f499b48d1ce12e6fcffac4c8c8496c79",
".git/objects/aa/f612d827cf5f42004e5488a68c84550b0cdd03": "f71200270e5b25239c5064258cc1de39",
".git/objects/ad/8f27ac060b561801f42e17258f59807c45e40c": "f67e7566399cc2deee228f1dd25a2828",
".git/objects/ae/9b23604bcc6c2d02c223f133e3b1df0709262a": "118a56d6d3e5f80492880941e047db45",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b2/7c9057971d0991fd6d71732d5d3c09f4908384": "465876c228b5981c7545e513b11c7bdc",
".git/objects/b3/51fff47b231d23593becd2c0e5bd591814cd91": "cdb1854f5375d582cca0076f283d55d0",
".git/objects/b3/79d55a7df1f1abf815275a10fed6b81d79565b": "52a9d7b00fe6906ad3893efd35aadac1",
".git/objects/b5/354b51d3326d1dac9f10b2cdde0ae45102da5c": "72b2c084f03710993ae653ff82e379a0",
".git/objects/b5/5e68978a1d1ccd1ef8164c760f2548d38877fa": "08b75fc5634b1274b5da480de7298a01",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/5abe6ccf311b8aca3dd89d4897d959a8fcd8dc": "3155dbc49fbf48f7a9977245ac543204",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/dc69eeb0564d3aacb0070903d84e2429c4901d": "eb549f1b32af595eb71912b517af876e",
".git/objects/bb/bde1eeaff1f330042cf9b1310379dcbc0ee093": "afdcdb7a23169a911e7e1852f346e896",
".git/objects/bc/9f356aca6ba6f7bb8006e8543289f59fde3c71": "0cf51414d99f923415355e8ae2ce39d3",
".git/objects/c0/4136ead9b53ca72c735fa776de082bf692487b": "a6e8c07b45128c4597a4e27ae4de414b",
".git/objects/c2/67ecd4855980e309520cb912b876f385de20e7": "48acd0fbfe6c5940ec46dec85092343d",
".git/objects/c3/a11c1254361ebb3a622e9212b4080f8f09f488": "1b24e665248ec0058dea47e8abbe9d0a",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c6/31a799822a3d06b72af75f7ec11024c2efcce0": "fe9a018bc22fa9e708e6fbb78a0df4a9",
".git/objects/c7/11ddabf1ef84f1a8179f34fb3d5b035467d188": "984a5c7718ff0090ec6411d3fed76106",
".git/objects/c7/f46e51751183716c75aa41c1ae2d3509599c1c": "8905335083dc6ad9fcd719ae992b9918",
".git/objects/c8/f63d330654168608158d6ca42fc2c7b92bc76d": "6122c547cdc88fdf0a70f3d02340167b",
".git/objects/cb/3cbb610ef10c9070224a511674fe9d65c68974": "835654ced74139c22db8346303d0e5b2",
".git/objects/cc/aa27a1d55e5dc4d00c4fcaf6bc73e15cafc691": "492229a48ece7284ef2f02010b581313",
".git/objects/ce/01815938ca8444329e04472614e66b1f712c00": "bb7d1994c9c553f1fbd8254bbd600283",
".git/objects/d2/f862d2f67e90dfae3528d20595e3abef4b55e0": "728ba05198c1e337191ea608ffdfbd6e",
".git/objects/d3/c4bb1a32f3315d6004e49cb0e58c661bb48686": "376509da38ed8db01a60e5a2d8b47bfc",
".git/objects/d4/22bd94ba65ebed542afe5e51f6a5dc918c4fc1": "ca784a3789386ef739c5d4a7d51ee054",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dd/090e33e3349435342aecae3befa84abd76c023": "56f4a2448936c7fa11d31c9afd50ee5e",
".git/objects/de/a00c1527ec8fa8e9f4f056f834a78eebdf1ddd": "5b5cb00272365d7854041a8eb8a6f29f",
".git/objects/e3/0b07947c2d954212a21771785e79e80b218b6c": "526bd819fdb6a9b06773fe2b781ff24a",
".git/objects/e4/a2ad81852f67117da05537490538af3aa10d07": "6214105b5f75dd638f5f017566b3bd6b",
".git/objects/e4/c3f5b2e400fcf70410dcac105303fa3316613c": "a0c6e7bc1defe76489525a183fe45a90",
".git/objects/e7/be01ce1dbad36374ff7082964153af9c82f82d": "cc9b2a9455f9a5150528a64461121e6e",
".git/objects/e8/95cf7553344eb1dc647bec2bbbac4504a49e1f": "2d2fb2a90aad41a010ee1ee044d75509",
".git/objects/e9/308dd1b78185846b42bc03b4b5a9252ed3f131": "c5e810b0aca9c067c20ac288789ecabc",
".git/objects/e9/d1c069a2673c7b84a83ccbd4635551fbd5ca5a": "4c61666f11016f57e1bdee8fb18dab77",
".git/objects/eb/709d6f3bc29bd4c96ad09587e718867635d79f": "45405e986c29953d28574d29d7992bbf",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/ec/8e287b4005fb1b0becd0f381c9086db450dada": "54470b9cde0ea64c0b2d0993466f3168",
".git/objects/f0/30c3f16b0f300304852a248a1a2d7f01013dfa": "8debde8a89fee89d1f9268cb900ae02f",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/294297f7b9eb72cd8ae25ec8058e6aea3bfc48": "63b96f309c1f4b3a92bec4a41edd11cf",
".git/objects/f3/c1d3602a35b7c16331c76d4f3478673af35692": "9cdf96eb2e79d3ac4763680cb0885ba3",
".git/objects/f4/2168d5ff0599389cd01bb2f54f817980b28348": "569aaff9b7a5702f7ec93dc3c6cd9c3d",
".git/objects/f5/3f29cf523bf4ec06c942149cd2fea8504e1314": "6ae242495858682aac6b585fecf93519",
".git/objects/fe/b189a3ab2d3f1b4ecfdb3eda8531271c4898f0": "c0b7a4f21f046d7c3a1e48f91383a560",
".git/refs/heads/main": "283912a8280c332e1509504a1857e0fb",
".git/refs/remotes/origin/main": "283912a8280c332e1509504a1857e0fb",
"assets/AssetManifest.bin": "58aa4ec3d5952840207f8693ae0fd42b",
"assets/AssetManifest.bin.json": "d6293d57e313a0fc122cf4f5ad5153fd",
"assets/AssetManifest.json": "32a5f4a7ff1e35cdc447adc5a846d2c7",
"assets/assets/exercise.json": "62a35f3f776b8a9f7c46531ab9bb8c1c",
"assets/assets/fitness_app/back.png": "af6b0e6121d6eb48289cce3a3b8d8963",
"assets/assets/fitness_app/breakfast.png": "1d2b0e6a7e46a44723131c663471f811",
"assets/assets/fitness_app/dinner.png": "d61779f47b560d09b0df15b346323ac4",
"assets/assets/fitness_app/glass.png": "266bca612c726abd6e481a4d890cef8e",
"assets/assets/fitness_app/lunch.png": "6855159f38835c1f03289b102a2e8b52",
"assets/assets/fitness_app/runner.png": "efb26bd46e91d305bda3b4b3c5a57c54",
"assets/assets/fitness_app/snack.png": "14a3e91c7a517b0a2f71dbcd86d2104d",
"assets/assets/fonts/gilroy/Gilroy-Black.ttf": "b8a3b3a91be25a0030d694a34e152217",
"assets/assets/fonts/gilroy/Gilroy-Bold.ttf": "b381c2abd2972024a6a7e3d882208d9b",
"assets/assets/fonts/gilroy/Gilroy-ExtraBold.ttf": "b487bfc69e2a1cb0578fe2a910da8b2b",
"assets/assets/fonts/gilroy/Gilroy-Medium.ttf": "c83281ae1ca703d0741a770ee7e7c091",
"assets/assets/fonts/gilroy/Gilroy-SemiBold.ttf": "a5cf732b15078843b237bd58f3ed44cd",
"assets/assets/images/branding.png": "c08f42fe102b1343e18e5a294d4b743b",
"assets/assets/images/branding12.png": "d5e5acaef9dcafc6162054596c2fd91f",
"assets/assets/images/icon.png": "5bf445d5abf241191bb290f4da83b28d",
"assets/assets/images/placeholder.jpg": "811a7c456b90de6a108f4197e7a6e36f",
"assets/assets/images/splash.png": "b7bb81cccdc9b7823c6e2932f2ffe80b",
"assets/assets/images/splash12.png": "742416420d3363ba3b2c5dba0b65d0cb",
"assets/assets/images/workout/band_m.png": "93eada700542326a0c31c57cc5d6cea3",
"assets/assets/images/workout/band_w.png": "8ac8471bfa287cb2e6cff321aba8d430",
"assets/assets/images/workout/db_m.png": "18631591177ba62f308600e64cc291e1",
"assets/assets/images/workout/db_w.png": "2fb862f4fae65367248f3039e9c73b58",
"assets/assets/images/workout/hiit_m.png": "144bce073521e9a36d4ff38c6568a07b",
"assets/assets/images/workout/hiit_w.png": "edebff011d5c06c61173f60c69c2c6b8",
"assets/assets/images/workout/home_m.png": "0318ea0df69502b186d366fc9ba9aa7b",
"assets/assets/images/workout/home_w.png": "8957fb835761e957b3b139167f25c5a3",
"assets/assets/images/workout/stretching_m.png": "d87aa553c4cb4af6e57ef1f0b5195a46",
"assets/assets/images/workout/stretching_w.png": "2e27d6fc4c921f588068c8d474bd939b",
"assets/assets/images/workout/weightloss_m.png": "ea3e3b0c020fad95c57bb3b87228e0e8",
"assets/assets/images/workout/weightloss_w.png": "fe932b729e230b1eb3b74259b9d5cd96",
"assets/assets/images/workout/yoga_m.png": "09e0603eef57b8d212dc3c3a1f82069e",
"assets/assets/images/workout/yoga_w.png": "89e98a62e3b0d3d851b93949922cc0a7",
"assets/assets/man/abs.jpg": "cdf8c51be49f58f0edd2147f097dbc2f",
"assets/assets/man/arms.jpg": "6403b920a091aec4a0b436f6d3404dbc",
"assets/assets/man/back.jpg": "e404381ae204f14c3af683cb3dbe3873",
"assets/assets/man/chest.jpg": "ce00fc672b1d7563abb3b30239569d3a",
"assets/assets/man/legs.jpg": "a539da0552098903369d1acb0ca8386f",
"assets/assets/man/man.jpg": "62e635eef3166016551b123d49b5ec50",
"assets/assets/man/shoulder.jpg": "8943591e1b4ffdb1cf366b3275ee3f3b",
"assets/assets/woman/abs.jpg": "b307cd3b48a724c7e2021e7bd6da5e0b",
"assets/assets/woman/arms.jpg": "70a4bb73f410ca88d4b275c251e95c5a",
"assets/assets/woman/back.jpg": "6cbb7009139f23c67555472d00028bc2",
"assets/assets/woman/chest.jpg": "4e3fc98fc5729798c48902be92df4ec0",
"assets/assets/woman/legs.jpg": "64c89a33e02c3ef4cc767351294058e5",
"assets/assets/woman/shoulders.jpg": "31c54088aaa693524b9182f13a4c3562",
"assets/assets/woman/women.jpg": "903e5c408b32b8ca1bbc4c0595872855",
"assets/FontManifest.json": "75e313a4e9bda6b7d9f5790bb7a1e304",
"assets/fonts/MaterialIcons-Regular.otf": "058d30496b069a6f549f02004d6e30d1",
"assets/NOTICES": "6299d2463fc59a28f004893e9f179002",
"assets/packages/awesome_dialog/assets/flare/error.flr": "e3b124665e57682dab45f4ee8a16b3c9",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/awesome_dialog/assets/rive/error.riv": "e74e21f8b53de4b541dd037c667027c1",
"assets/packages/awesome_dialog/assets/rive/info.riv": "2a425920b11404228f613bc51b30b2fb",
"assets/packages/awesome_dialog/assets/rive/info_reverse.riv": "c6e814d66c0e469f1574a2f171a13a76",
"assets/packages/awesome_dialog/assets/rive/question.riv": "00f02da4d08c2960079d4cd8211c930c",
"assets/packages/awesome_dialog/assets/rive/success.riv": "73618ab4166b406e130c2042dc595f42",
"assets/packages/awesome_dialog/assets/rive/warning.riv": "0becf971559a68f9a74c8f0c6e0f8335",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "0c4c692470da536931f56b4f6803276e",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-arrow.png": "8efbd753127a917b4dc02bf856d32a47",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-attachment.png": "9c8f255d58a0a4b634009e19d4f182fa",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-delivered.png": "b6b5d85c3270a5cad19b74651d78c507",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-document.png": "e61ec1c2da405db33bff22f774fb8307",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-error.png": "5a59dc97f28a33691ff92d0a128c2b7f",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-seen.png": "10c256cc3c194125f8fffa25de5d6b8a",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-send.png": "2a7d5341fd021e6b75842f6dadb623dd",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-arrow.png": "3ea423a6ae14f8f6cf1e4c39618d3e4b",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-attachment.png": "fcf6bfd600820e85f90a846af94783f4",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-delivered.png": "28f141c87a74838fc20082e9dea44436",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-document.png": "4578cb3d3f316ef952cd2cf52f003df2",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-error.png": "872d7d57b8fff12c1a416867d6c1bc02",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-seen.png": "684348b596f7960e59e95cff5475b2f8",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-send.png": "8e7e62d5bc4a0e37e3f953fb8af23d97",
"assets/packages/flutter_chat_ui/assets/icon-arrow.png": "678ebcc99d8f105210139b30755944d6",
"assets/packages/flutter_chat_ui/assets/icon-attachment.png": "17fc0472816ace725b2411c7e1450cdd",
"assets/packages/flutter_chat_ui/assets/icon-delivered.png": "b064b7cf3e436d196193258848eae910",
"assets/packages/flutter_chat_ui/assets/icon-document.png": "b4477562d9152716c062b6018805d10b",
"assets/packages/flutter_chat_ui/assets/icon-error.png": "4fceef32b6b0fd8782c5298ee463ea56",
"assets/packages/flutter_chat_ui/assets/icon-seen.png": "b9d597e29ff2802fd7e74c5086dfb106",
"assets/packages/flutter_chat_ui/assets/icon-send.png": "34e43bc8840ecb609e14d622569cda6a",
"assets/packages/youtube_player_iframe/assets/player.html": "663ba81294a9f52b1afe96815bb6ecf9",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "c7bc3a5ecc93936c3cf8d4aab22e1326",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d1f45a139b78336846cdc0e3e7aa615e",
"/": "d1f45a139b78336846cdc0e3e7aa615e",
"main.dart.js": "5d42306324709c9588fe0067a25b28df",
"manifest.json": "ad46801e971e08a6bcbb022ce4e4ea3f",
"version.json": "34a3700e011259bbeb613d510f7f1a53"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
