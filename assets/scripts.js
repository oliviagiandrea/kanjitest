jQuery(document).ready(function() {
  let kanjiList = [
    {
      kanji: "円",
      reading: "えん",
    },
    {
      kanji: "会社",
      reading: "かいしゃ",
    },
    {
      kanji: "行く",
      reading: "いく",
    },
    {
      kanji: "安い",
      reading: "やすい",
    },
    {
      kanji: "電車",
      reading: "でんしゃ",
    },
    {
      kanji: "古い",
      reading: "ふるい",
    },
    {
      kanji: "駅",
      reading: "えき",
    },
    {
      kanji: "先週",
      reading: "せんしゅう",
    },
    {
      kanji: "会う",
      reading: "あう",
    },
    {
      kanji: "生活",
      reading: "せいかつ",
    },
    {
      kanji: "川",
      reading: "かわ",
    },
    {
      kanji: "多い",
      reading: "おおい",
    },
    {
      kanji: "明るい",
      reading: "あかるい",
    },
    {
      kanji: "食事",
      reading: "しょくじ",
    },
    {
      kanji: "飲む",
      reading: "のむ",
    },
    {
      kanji: "毎日",
      reading: "まいにち",
    },
    {
      kanji: "読む",
      reading: "よむ",
    },
    {
      kanji: "悪い",
      reading: "わるい",
    },
    {
      kanji: "入る",
      reading: "はいる",
    },
    {
      kanji: "始める",
      reading: "はじめる",
    },
    {
      kanji: "歌う",
      reading: "うたう",
    },
    {
      kanji: "病院",
      reading: "びょうき",
    },
    {
      kanji: "思う",
      reading: "おもう",
    },
    {
      kanji: "料理",
      reading: "りょうり",
    },
    {
      kanji: "親切",
      reading: "しんせつ",
    },
    {
      kanji: "出発",
      reading: "しゅっぱつ",
    },
    {
      kanji: "注意",
      reading: "ちゅうい",
    },
    {
      kanji: "仕事",
      reading: "しごと",
    },
    {
      kanji: "映画",
      reading: "えいが",
    },
    {
      kanji: "質問",
      reading: "しつもん",
    },
    {
      kanji: "楽しい",
      reading: "たのしい",
    },
    {
      kanji: "楽な",
      reading: "らくな",
    },
    {
      kanji: "家族",
      reading: "かぞく",
    },
    {
      kanji: "味",
      reading: "あじ",
    },
    {
      kanji: "工場",
      reading: "こうじょう",
    },
    {
      kanji: "図書館",
      reading: "としょかん",
    },
    {
      kanji: "同じ",
      reading: "おんなじ",
    },
    {
      kanji: "間違い",
      reading: "まちがい",
    },
    {
      kanji: "賛成",
      reading: "さんせい",
    },
    {
      kanji: "簡単",
      reading: "かんたん",
    },
    {
      kanji: "正しい",
      reading: "ただしい",
    },
    {
      kanji: "海",
      reading: "うみ",
    },
    {
      kanji: "必ず",
      reading: "かならず",
    },
    {
      kanji: "必要",
      reading: "ひつよう",
    },
    {
      kanji: "原因",
      reading: "げんいん",
    },
    {
      kanji: "普通",
      reading: "ふつう",
    },
    {
      kanji: "感じる",
      reading: "かんじる",
    },
    {
      kanji: "最初",
      reading: "さいしょ",
    },
    {
      kanji: "関係",
      reading: "かんけい",
    },
    {
      kanji: "警察",
      reading: "けいさつ",
    },
    {
      kanji: "漢字",
      reading: "かんじ",
    },
    {
      kanji: "比較",
      reading: "ひかく",
    },
    {
      kanji: "経済",
      reading: "けいざい",
    },
    {
      kanji: "就職",
      reading: "しゅうしょく",
    },
    {
      kanji: "勧める",
      reading: "すすめる",
    },
    {
      kanji: "通勤する",
      reading: "つうきんする",
    },
    {
      kanji: "政治",
      reading: "せいじ",
    },
    {
      kanji: "欧州",
      reading: "おうしゅう",
    },
    {
      kanji: "望む",
      reading: "のぞむ",
    },
    {
      kanji: "要望",
      reading: "ようぼう",
    },
    {
      kanji: "階段",
      reading: "かいだん",
    },
    {
      kanji: "準備",
      reading: "じゅんび",
    },
    {
      kanji: "休暇",
      reading: "きゅうか",
    },
    {
      kanji: "豊かな",
      reading: "ゆたかな",
    },
    {
      kanji: "豊富",
      reading: "ほうふ",
    },
    {
      kanji: "興味",
      reading: "きょうみ",
    },
    {
      kanji: "責任",
      reading: "せきにん",
    },
    {
      kanji: "得意",
      reading: "とくい",
    },
    {
      kanji: "習慣",
      reading: "しゅうかん",
    },
    {
      kanji: "認める",
      reading: "みとめる",
    },
    {
      kanji: "危険",
      reading: "きけん",
    },
    {
      kanji: "日常生活",
      reading: "にちじょうせいかつ",
    },
    {
      kanji: "心配",
      reading: "しんぱい",
    },
    {
      kanji: "配る",
      reading: "くばる",
    },
    {
      kanji: "酔う",
      reading: "よう",
    },
    {
      kanji: "絶対に",
      reading: "ぜったいに",
    },
    {
      kanji: "条件",
      reading: "じょうけん",
    },
    {
      kanji: "危ない",
      reading: "あぶない",
    },
    {
      kanji: "騒ぐ",
      reading: "さわぐ",
    },
    {
      kanji: "騒音",
      reading: "そうおん",
    },
    {
      kanji: "確かめる",
      reading: "たしかめる",
    },
    {
      kanji: "正確な",
      reading: "せいかくな",
    },
    {
      kanji: "規則",
      reading: "きそく",
    },
    {
      kanji: "情報",
      reading: "じょうほう",
    },
    {
      kanji: "励ます",
      reading: "はげます",
    },
    {
      kanji: "努力",
      reading: "とりょく",
    },
    {
      kanji: "混ぜる",
      reading: "まぜる",
    },
    {
      kanji: "混乱",
      reading: "こんらん",
    },
    {
      kanji: "地震",
      reading: "じしん",
    },
    {
      kanji: "貧富",
      reading: "ひんぷ",
    },
    {
      kanji: "継続",
      reading: "けいぞく",
    },
    {
      kanji: "繰り返す",
      reading: "くりかえす",
    },
    {
      kanji: "眠い",
      reading: "ねむい",
    },
    {
      kanji: "監督",
      reading: "かんとく",
    },
    {
      kanji: "犠牲者",
      reading: "ぎせいしゃ",
    },
    {
      kanji: "想像",
      reading: "そうぞう",
    },
    {
      kanji: "免許",
      reading: "めんきょ",
    },
    {
      kanji: "誤る",
      reading: "あやまる",
    },
    {
      kanji: "誤解",
      reading: "ごかい",
    },
    {
      kanji: "迫力",
      reading: "はくりょく",
    },
    {
      kanji: "雰囲気",
      reading: "ふんいき",
    },
    {
      kanji: "距離",
      reading: "きょり",
    },
    {
      kanji: "影響",
      reading: "えいきょう",
    },
    {
      kanji: "競う",
      reading: "きそう",
    },
    {
      kanji: "競争",
      reading: "きょうそう",
    },
    {
      kanji: "故障",
      reading: "こしょう",
    },
    {
      kanji: "暴力",
      reading: "ぼうりょく",
    },
    {
      kanji: "爆発",
      reading: "ばくはつ",
    },
    {
      kanji: "批判する",
      reading: "ひはんする",
    },
    {
      kanji: "範囲",
      reading: "はんい",
    },
    {
      kanji: "緊張",
      reading: "きんちょう",
    },
    {
      kanji: "悩む",
      reading: "なやむ",
    },
    {
      kanji: "突然",
      reading: "とつぜん",
    },
    {
      kanji: "食欲",
      reading: "しょくよく",
    },
    {
      kanji: "被害者",
      reading: "ひがいしゃ",
    },
    {
      kanji: "勇気",
      reading: "ゆうき",
    },
    {
      kanji: "傾向",
      reading: "けいこう",
    },
    {
      kanji: "傾く",
      reading: "かたむく",
    },
    {
      kanji: "厳しい",
      reading: "きびしい",
    },
    {
      kanji: "選挙",
      reading: "せんきょ",
    },
    {
      kanji: "戻る",
      reading: "もどる",
    },
    {
      kanji: "証拠",
      reading: "しょうこ",
    },
    {
      kanji: "後悔",
      reading: "こうかい",
    },
    {
      kanji: "穏やか",
      reading: "おだやか",
    },
    {
      kanji: "偶然",
      reading: "ぐうぜん",
    },
    {
      kanji: "握る",
      reading: "にぎる",
    },
    {
      kanji: "撮る",
      reading: "とる",
    },
    {
      kanji: "撮影",
      reading: "さつえい",
    },
    {
      kanji: "援助",
      reading: "えんじょ",
    },
    {
      kanji: "臭い",
      reading: "くさい",
    },
    {
      kanji: "柔軟な",
      reading: "じゅうなんな",
    },
    {
      kanji: "活躍",
      reading: "かつやく",
    },
    {
      kanji: "妥協",
      reading: "だきょう",
    },
    {
      kanji: "飢餓",
      reading: "きが",
    },
    {
      kanji: "膨らむ",
      reading: "ふくらむ",
    },
    {
      kanji: "膨張",
      reading: "ぼうちょう",
    },
    {
      kanji: "珍しい",
      reading: "めずらしい",
    },
    {
      kanji: "癖",
      reading: "くせ",
    },
    {
      kanji: "恥ずかしい",
      reading: "はずかしい",
    },
    {
      kanji: "遠慮",
      reading: "えんりょ",
    },
    {
      kanji: "渋滞",
      reading: "じゅうたい",
    },
    {
      kanji: "興奮",
      reading: "こうふん",
    },
    {
      kanji: "魅力",
      reading: "みりょく",
    },
    {
      kanji: "悲惨",
      reading: "ひさん",
    },
    {
      kanji: "把握",
      reading: "はあく",
    },
    {
      kanji: "操作",
      reading: "そうさ",
    },
    {
      kanji: "捜査",
      reading: "そうさ",
    },
    {
      kanji: "怖い",
      reading: "こわい",
    },
    {
      kanji: "恐怖",
      reading: "きょうふ",
    },
    {
      kanji: "偽物",
      reading: "にせもの",
    },
    {
      kanji: "濁る",
      reading: "にごる",
    },
    {
      kanji: "狂う",
      reading: "くるう",
    },
    {
      kanji: "素朴",
      reading: "そぼく",
    },
    {
      kanji: "絞る",
      reading: "しぼる",
    },
    {
      kanji: "縛る",
      reading: "しばる",
    },
    {
      kanji: "束縛",
      reading: "そくばく",
    },
    {
      kanji: "粗大ゴミ",
      reading: "そだいごみ",
    },
    {
      kanji: "空欄",
      reading: "くうらん",
    },
    {
      kanji: "残酷",
      reading: "ざんこく",
    },
    {
      kanji: "阻止",
      reading: "そし",
    },
    {
      kanji: "錯覚",
      reading: "さっかく",
    },
    {
      kanji: "無駄",
      reading: "むだ",
    },
    {
      kanji: "耐用年数",
      reading: "たいようねんすう",
    },
    {
      kanji: "勧誘",
      reading: "かんゆう",
    },
    {
      kanji: "誘う",
      reading: "さそう",
    },
    {
      kanji: "飽きる",
      reading: "あきる",
    },
    {
      kanji: "放棄",
      reading: "ほうき",
    },
    {
      kanji: "崩す",
      reading: "くずす",
    },
    {
      kanji: "崩壊",
      reading: "ほうかい",
    },
    {
      kanji: "怠け者",
      reading: "なまけもの",
    },
    {
      kanji: "愚かな",
      reading: "おろかな",
    },
    {
      kanji: "一貫性",
      reading: "いっかんせい",
    },
    {
      kanji: "腐る",
      reading: "くさる",
    },
    {
      kanji: "醜い",
      reading: "みにくい",
    },
    {
      kanji: "遭難",
      reading: "そうなん",
    },
    {
      kanji: "卑劣な",
      reading: "ひれつな",
    },
    {
      kanji: "一斉に",
      reading: "いっせいに",
    },
    {
      kanji: "屈辱",
      reading: "くつじょく",
    },
    {
      kanji: "揺れる",
      reading: "ゆれる",
    },
    {
      kanji: "動揺",
      reading: "どうよう",
    },
    {
      kanji: "敏感",
      reading: "びんかん",
    },
    {
      kanji: "自由奔放",
      reading: "じゆうほんぽう",
    },
    {
      kanji: "疎遠",
      reading: "そえん",
    },
    {
      kanji: "海藻",
      reading: "かいそう",
    },
    {
      kanji: "捕虜",
      reading: "ほりょ",
    },
    {
      kanji: "奴隷",
      reading: "どれい",
    },
    {
      kanji: "ご覧の～",
      reading: "ごらんの～",
    },
    {
      kanji: "幻想",
      reading: "げんそう",
    },
    {
      kanji: "衰える",
      reading: "おとろえる",
    },
    {
      kanji: "衰退",
      reading: "すいたい",
    },
    {
      kanji: "吟味",
      reading: "ぎんみ",
    },
    {
      kanji: "甲乙",
      reading: "こうおつ",
    },
    {
      kanji: "坪数",
      reading: "つぼすう",
    },
    {
      kanji: "但し",
      reading: "ただし",
    },
    {
      kanji: "且つ",
      reading: "かつ",
    },
    {
      kanji: "膨張剤",
      reading: "ぼうちょうさい",
    },
    {
      kanji: "褒める",
      reading: "ほめる",
    },
    {
      kanji: "戯れる",
      reading: "たわむれる",
    },
    {
      kanji: "威嚇",
      reading: "いかく",
    },
    {
      kanji: "謄本",
      reading: "とうほん",
    },
  ]
  let kanjiForm = jQuery('#kanjiForm');
  
  for (let i = 0; i < kanjiList.length; i++) {
    // add each kanji in our 'master list' to form
    kanjiForm.append('<div class="formWrapper" id="kanjiWrapper' + i.toString() + '"><div class="col leftCol"><label for="kanji' + (i+1).toString() + '" class="sr-only">' + kanjiList[i].kanji + '</label></div><div class="col midCol"><input type="text" name="kanji" id="kanji' + (i+1).toString() + '"></div><div class="col rightCol" id="kanjiReading' + (i+1).toString() + '"></div></div>');
  }
  kanjiForm.append('<div class="formWrapper btnRow"><input type="reset" value="Reset" name="Reset"><input type="submit" value="Submit" id="submit" name="Submit"></div>');  

  // when form is submitted
  jQuery('#submit').click(function(event) {
    // prevent page from reloading and clearing all answers
    event.preventDefault();
    const kanjis = document.getElementsByName("kanji"); 
    let numCorrectKanjis = 0;
    // iterate over each kanji form input
    for (let i = 0; i < kanjiList.length; i++) {
      let k = kanjis[i];
      // if reading is correct, outline in green
      if (k.value == kanjiList[i].reading) {
        k.style.borderColor = "#3b8136";
        jQuery('#kanjiReading' + (i+1).toString()).css('display', 'inline-block');
        numCorrectKanjis += 1;
      // if reading is incorrect, highlight in red and display correct reading after text input
      } else {
        k.style.borderColor = "#ad2c2c";
        k.style.backgroundColor = "#f6bdbd";
        jQuery('#kanjiReading' + (i+1).toString()).append(kanjiList[i].reading);
        jQuery('#kanjiReading' + (i+1).toString()).css('display', 'inline-block');
      }
    }
    // return message containing number of correct kanjis to user
    kanjiReport(numCorrectKanjis);
  });
});

function kanjiReport(numKanji) {
	var msg = "";

	if (numKanji <= 0) {
		msg = "Kanji no benkyou o hajimemashou!";
	} else if (numKanji < 21) {
    let range = 10 * numKanji;
    msg = "About " + range + " kanji characters";
  } else if (numKanji < 60) {
    let bottomRange = numKanji - 10;
    let topRange = numKanji + 10;
    msg = "About " + bottomRange + "-" + topRange + " kanji characters";
  } else if (numKanji < 100) {
    let bottomRange = numKanji - 20;
    let topRange = numKanji + 20;
    msg = "About " + bottomRange + "-" + topRange + " kanji characters";
  } else if (numKanji >= 100 && k <= 110) {
		msg = "About 1000-1100 kanji characters";
  } else if (numKanji >= 111 && k <= 120) {
		msg = "About 1100-1200 kanji characters";
  } else if (numKanji >= 121 && k <= 130) {
		msg = "About 1200-1300 kanji characters";
  } else if (numKanji >= 131 && k <= 140) {
		msg = "About 1300-1400 kanji characters";
  } else if (numKanji >= 141 && k <= 150) {
		msg = "About 1400-1500 kanji characters";
  } else if (numKanji >= 151 && k <= 160) {
		msg = "About 1500-1600 kanji characters";
  } else if (numKanji >= 161 && k <= 170) {
		msg = "About 1600-1700 kanji characters";
  } else if (numKanji >= 171 && k <= 180) {
		msg = "About 1700-1800 kanji characters";
  } else if (numKanji >= 181 && k <= 190) {
		msg = "About 1800-1900 kanji characters";
  } else if (numKanji >= 191 && k <= 200) {
		msg = "About 1900-2000 kanji characters";
	}
	alert(msg);
}