// Store settings for the money vault game. You can edit the text between the quotes.
window.STORE_CONFIG = {
  // What the player reads at the top of the store: how to pay you and how they get their code.
  payText: '',
  // Optional: a web link to your payment page. Leave empty if you take payment another way.
  payUrl: '',
  // Ads: leave empty to hide the ad button. Write 'test' to try the 3-second pretend ad. A real ad provider supplies window.VaultAds.
  adMode: '',
  // What is for sale. "price" is in Egyptian pounds.
  products: [
    {
      "id": "bonus2k",
      "name": "شنطة حوافز صغيرة",
      "desc": "2,000 جنيه حوافز تصرفها في مكتب الترقيات",
      "price": 15,
      "give": {
        "bonus": 2000
      }
    },
    {
      "id": "bonus10k",
      "name": "شنطة حوافز كبيرة",
      "desc": "10,000 جنيه حوافز تصرفها في مكتب الترقيات",
      "price": 50,
      "give": {
        "bonus": 10000
      }
    },
    {
      "id": "team",
      "name": "باقة الفريق",
      "desc": "عامل بيلمّ معاك (المستوى 1) + حارس أمن + سير بين المكنتين",
      "price": 75,
      "give": {
        "up": {
          "worker": 1,
          "guard": 1,
          "belt": 1
        }
      }
    },
    {
      "id": "decor",
      "name": "طقم ديكور المكتب",
      "desc": "زرع وسجادة وبرواز دهب للمكتب — مرة واحدة",
      "price": 30,
      "give": { "up": { "plant": 1, "rug": 1, "frame": 1 } }
    },
    {
      "id": "fxoffice",
      "name": "مكتب الصرافة",
      "desc": "مكان جديد لوحده بطلبيات عملات بقواعد جديدة. طلبية «شحنة صرافة» العادية هتفضل مجانية",
      "price": 0,
      "soon": true,
      "give": {}
    }
  ],
  // Fingerprints of the valid purchase codes (the codes themselves are in store-codes.txt, which you keep private).
  codes: {"20n3zn3kraj":"bonus2k","24kne24uto3":"bonus2k","1hpogqat79g":"bonus2k","uk6vbp02hy":"bonus2k","2b1av8iutwr":"bonus2k","s9vf543sz1":"bonus2k","18mf7pzs8ek":"bonus2k","1kpwse5race":"bonus2k","jic0j6lu8k":"bonus2k","1i6fnny4w1g":"bonus2k","1qi32isk1ca":"bonus2k","9rq5rmqril":"bonus2k","1t8xl7l9ni7":"bonus2k","yslknzyyld":"bonus2k","22dj187twnt":"bonus2k","1v65gea27mn":"bonus2k","1r2l5orj5le":"bonus2k","5j3mlvvgup":"bonus2k","28gxqzcb9wu":"bonus2k","y5cdg4p46q":"bonus2k","11r92q9okti":"bonus2k","1kvyywtndf2":"bonus2k","1cyro6zn5ie":"bonus2k","12vpi5mnanf":"bonus2k","1lpil18yp5y":"bonus2k","13t5hq84u4v":"bonus10k","13bmqynxflp":"bonus10k","18u5zcarq1r":"bonus10k","19mrml3k2me":"bonus10k","txou2ypfc6":"bonus10k","1v5z9d1yojm":"bonus10k","28r798sywfo":"bonus10k","1s3g7052de7":"bonus10k","2bb4322soxt":"bonus10k","1qvaxanurbu":"bonus10k","1p7xpg69eie":"bonus10k","m7sliq14zr":"bonus10k","1ahl8x9dxxf":"bonus10k","pnooh5avbl":"bonus10k","1p2ya9lkhtm":"bonus10k","1mt8mdyz6z":"bonus10k","29b2vdz6hc5":"bonus10k","1jgnyvmjlmc":"bonus10k","1dg2zbhtoz3":"bonus10k","1nawzgjmx3x":"bonus10k","1kholyk72qi":"bonus10k","kyh4crz2az":"bonus10k","2950up569b9":"bonus10k","9qd7mtvsx0":"bonus10k","292ghb0ttzc":"bonus10k","1e5ptz77ce6":"team","a96hch7qgn":"team","6q99d13m66":"team","1tu0h02qh5h":"team","229eylr7wnj":"team","1hlke5tixit":"team","16mw77v9qps":"team","252lxujbf4u":"team","g2ws1ag71a":"team","1rzpte75gge":"team","2cnem3db370":"team","27q76o0q44d":"team","10lxa78s8oy":"team","4gvh1z5dzj":"team","16u6gxyhunu":"team","c1bl9mn9o2":"team","12yys7pu92v":"team","27dpwdoptrb":"team","lsczgbtbm4":"team","pb9jpun0ox":"team","1tdjobtqkod":"team","1pkfnwppe4q":"team","1qu81a572z5":"team","2a0eotxc5kt":"team","gxuk1n045o":"team","274kfqz82re":"decor","iquwa4f3fw":"decor","1ufayf4gz7w":"decor","xbr19msabu":"decor","28rl898evai":"decor","2bg0u9382nr":"decor","e3kf1k7z5o":"decor","dpdn09kr89":"decor","2f3qtcz8fg9":"decor","1b5yfqsvzb4":"decor","20dh8dyomce":"decor","144c96l2zkz":"decor","19tn7ll9nun":"decor","27quv5nrpzf":"decor","i3qkfg5q2c":"decor","180ez2arcz9":"decor","2fkjpzw7212":"decor","8kdhppbd15":"decor","29a50u2ex3t":"decor","nr42ws6kln":"decor","1vtea9gaper":"decor","qi3ltoswex":"decor","267itxml986":"decor","lc32j48x7r":"decor","154mg11fxf1":"decor"}
};
