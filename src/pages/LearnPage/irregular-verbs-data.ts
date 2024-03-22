import { IIrregularVerbData } from '../MainPage/types';

function irregularVerbsDataSortMethod(prevVerb: IIrregularVerbData, nextVerb: IIrregularVerbData) {
  if (prevVerb.infinitive > nextVerb.infinitive) return 1;
  return -1;
}

export const IRREGULAR_VERBS_DATA: Array<IIrregularVerbData> = [
  {
    infinitive: 'be',
    pastSimple: ['was', 'were'],
    pastParticiple: ['been'],
    translation: ['быть'],
  },
  {
    infinitive: 'bear',
    pastSimple: ['bore'],
    pastParticiple: ['born'],
    translation: ['нести', 'родить'],
  },
  {
    infinitive: 'beat',
    pastSimple: ['beat'],
    pastParticiple: ['beaten'],
    translation: ['бить'],
  },
  {
    infinitive: 'become',
    pastSimple: ['became'],
    pastParticiple: ['become'],
    translation: ['стать', 'сделаться'],
  },
  {
    infinitive: 'begin',
    pastSimple: ['began'],
    pastParticiple: ['begun'],
    translation: ['начать'],
  },
  {
    infinitive: 'bet',
    pastSimple: ['bet'],
    pastParticiple: ['bet'],
    translation: ['держать пари'],
  },
  {
    infinitive: 'bite',
    pastSimple: ['bit'],
    pastParticiple: ['bitten'],
    translation: ['кусать'],
  },
  {
    infinitive: 'blow',
    pastSimple: ['blew'],
    pastParticiple: ['blown'],
    translation: ['дуть'],
  },
  {
    infinitive: 'break',
    pastSimple: ['broke'],
    pastParticiple: ['broken'],
    translation: ['ломать'],
  },
  {
    infinitive: 'breed',
    pastSimple: ['bred'],
    pastParticiple: ['bred'],
    translation: ['выращивать', 'разводить'],
  },
  {
    infinitive: 'bring',
    pastSimple: ['brought'],
    pastParticiple: ['brought'],
    translation: ['принести'],
  },
  {
    infinitive: 'build',
    pastSimple: ['built'],
    pastParticiple: ['built'],
    translation: ['строить'],
  },
  {
    infinitive: 'burn',
    pastSimple: ['burnt', 'burned'],
    pastParticiple: ['burnt', 'burned'],
    translation: ['жечь', 'гореть'],
  },
  {
    infinitive: 'burst',
    pastSimple: ['burst'],
    pastParticiple: ['burst'],
    translation: ['разразиться', 'взорваться'],
  },
  {
    infinitive: 'buy',
    pastSimple: ['bought'],
    pastParticiple: ['bought'],
    translation: ['купить'],
  },
  {
    infinitive: 'catch',
    pastSimple: ['caught'],
    pastParticiple: ['caught'],
    translation: ['ловить', 'поймать'],
  },
  {
    infinitive: 'choose',
    pastSimple: ['chose'],
    pastParticiple: ['chosen'],
    translation: ['выбрать'],
  },
  {
    infinitive: 'come',
    pastSimple: ['came'],
    pastParticiple: ['come'],
    translation: ['прийти'],
  },
  {
    infinitive: 'cost',
    pastSimple: ['cost'],
    pastParticiple: ['cost'],
    translation: ['стоить'],
  },
  {
    infinitive: 'cut',
    pastSimple: ['cut'],
    pastParticiple: ['cut'],
    translation: ['резать'],
  },
  {
    infinitive: 'deal',
    pastSimple: ['dealt'],
    pastParticiple: ['dealt'],
    translation: ['иметь дело'],
  },
  {
    infinitive: 'dig',
    pastSimple: ['dug'],
    pastParticiple: ['dug'],
    translation: ['копать'],
  },
  {
    infinitive: 'do',
    pastSimple: ['did'],
    pastParticiple: ['done'],
    translation: ['делать'],
  },
  {
    infinitive: 'draw',
    pastSimple: ['drew'],
    pastParticiple: ['drawn'],
    translation: ['тащить', 'рисовать'],
  },
  {
    infinitive: 'dream',
    pastSimple: ['dreamt', 'dreamed'],
    pastParticiple: ['dreamt', 'dreamed'],
    translation: ['грезить', 'мечтать'],
  },
  {
    infinitive: 'drink',
    pastSimple: ['drank'],
    pastParticiple: ['drunk'],
    translation: ['пить', 'выпить'],
  },
  {
    infinitive: 'drive',
    pastSimple: ['drove'],
    pastParticiple: ['driven'],
    translation: ['гнать', 'ехать'],
  },
  {
    infinitive: 'eat',
    pastSimple: ['ate'],
    pastParticiple: ['eaten'],
    translation: ['кушать', 'есть'],
  },
  {
    infinitive: 'fall',
    pastSimple: ['fell'],
    pastParticiple: ['fallen'],
    translation: ['падать'],
  },
  {
    infinitive: 'feed',
    pastSimple: ['fed'],
    pastParticiple: ['fed'],
    translation: ['кормить'],
  },
  {
    infinitive: 'feel',
    pastSimple: ['felt'],
    pastParticiple: ['felt'],
    translation: ['чувствовать'],
  },
  {
    infinitive: 'fight',
    pastSimple: ['fought'],
    pastParticiple: ['fought'],
    translation: ['сражаться', 'драться'],
  },
  {
    infinitive: 'find',
    pastSimple: ['found'],
    pastParticiple: ['found'],
    translation: ['находить'],
  },
  {
    infinitive: 'fly',
    pastSimple: ['flew'],
    pastParticiple: ['flown'],
    translation: ['летать'],
  },
  {
    infinitive: 'forbid',
    pastSimple: ['forbad', 'forbade'],
    pastParticiple: ['forbidden'],
    translation: ['запретить'],
  },
  {
    infinitive: 'forsee',
    pastSimple: ['foresaw'],
    pastParticiple: ['forseen'],
    translation: ['предвидеть'],
  },
  {
    infinitive: 'forget',
    pastSimple: ['forgot'],
    pastParticiple: ['forgotten'],
    translation: ['забыть'],
  },
  {
    infinitive: 'forgive',
    pastSimple: ['forgave'],
    pastParticiple: ['forgiven'],
    translation: ['простить'],
  },
  {
    infinitive: 'freeze',
    pastSimple: ['froze'],
    pastParticiple: ['frozen'],
    translation: ['замёрзнуть', 'замораживать'],
  },
  {
    infinitive: 'get',
    pastSimple: ['got'],
    pastParticiple: ['got'],
    translation: ['получить'],
  },
  {
    infinitive: 'give',
    pastSimple: ['gave'],
    pastParticiple: ['given'],
    translation: ['дать'],
  },
  {
    infinitive: 'go',
    pastSimple: ['went'],
    pastParticiple: ['gone'],
    translation: ['идти', 'уходить'],
  },
  {
    infinitive: 'grow',
    pastSimple: ['grew'],
    pastParticiple: ['grown'],
    translation: ['расти'],
  },
  {
    infinitive: 'hang',
    pastSimple: ['hung'],
    pastParticiple: ['hung'],
    translation: ['висеть', 'повесить'],
  },
  {
    infinitive: 'have',
    pastSimple: ['had'],
    pastParticiple: ['had'],
    translation: ['иметь'],
  },
  {
    infinitive: 'hear',
    pastSimple: ['heard'],
    pastParticiple: ['heard'],
    translation: ['слушать'],
  },
  {
    infinitive: 'hide',
    pastSimple: ['hid'],
    pastParticiple: ['hidden'],
    translation: ['прятать', 'прятаться'],
  },
  {
    infinitive: 'hit',
    pastSimple: ['hit'],
    pastParticiple: ['hit'],
    translation: ['ударить', 'попасть'],
  },
  {
    infinitive: 'hold',
    pastSimple: ['held'],
    pastParticiple: ['held'],
    translation: ['держать'],
  },
  {
    infinitive: 'hurt',
    pastSimple: ['hurt'],
    pastParticiple: ['hurt'],
    translation: ['причинить боль'],
  },
  {
    infinitive: 'keep',
    pastSimple: ['kept'],
    pastParticiple: ['kept'],
    translation: ['хранить'],
  },
  {
    infinitive: 'know',
    pastSimple: ['knew'],
    pastParticiple: ['known'],
    translation: ['знать'],
  },
  {
    infinitive: 'lay',
    pastSimple: ['laid'],
    pastParticiple: ['laid'],
    translation: ['класть', 'положить'],
  },
  {
    infinitive: 'lead',
    pastSimple: ['led'],
    pastParticiple: ['led'],
    translation: ['вести'],
  },
  {
    infinitive: 'learn',
    pastSimple: ['learnt', 'learned'],
    pastParticiple: ['learnt', 'learned'],
    translation: ['учить'],
  },
  {
    infinitive: 'leave',
    pastSimple: ['left'],
    pastParticiple: ['left'],
    translation: ['оставить'],
  },
  {
    infinitive: 'lend',
    pastSimple: ['lent'],
    pastParticiple: ['lent'],
    translation: ['одолжить'],
  },
  {
    infinitive: 'let',
    pastSimple: ['let'],
    pastParticiple: ['let'],
    translation: ['пустить', 'дать'],
  },
  {
    infinitive: 'lie',
    pastSimple: ['lay'],
    pastParticiple: ['lain'],
    translation: ['лежать'],
  },
  {
    infinitive: 'light',
    pastSimple: ['lit', 'lighted'],
    pastParticiple: ['lit', 'lighted'],
    translation: ['осветить'],
  },
  {
    infinitive: 'lose',
    pastSimple: ['lost'],
    pastParticiple: ['lost'],
    translation: ['терять'],
  },
  {
    infinitive: 'make',
    pastSimple: ['made'],
    pastParticiple: ['made'],
    translation: ['делать'],
  },
  {
    infinitive: 'mean',
    pastSimple: ['meant'],
    pastParticiple: ['meant'],
    translation: ['подразумевать'],
  },
  {
    infinitive: 'meet',
    pastSimple: ['met'],
    pastParticiple: ['met'],
    translation: ['встретить'],
  },
  {
    infinitive: 'mistake',
    pastSimple: ['mistook'],
    pastParticiple: ['mistaken'],
    translation: ['ошибаться'],
  },
  {
    infinitive: 'misunderstand',
    pastSimple: ['misunderstood'],
    pastParticiple: ['misunderstood'],
    translation: ['неправильно понимать'],
  },
  {
    infinitive: 'overcome',
    pastSimple: ['overcame'],
    pastParticiple: ['overcome'],
    translation: ['преодолевать'],
  },
  {
    infinitive: 'pay',
    pastSimple: ['paid'],
    pastParticiple: ['paid'],
    translation: ['платить'],
  },
  {
    infinitive: 'put',
    pastSimple: ['put'],
    pastParticiple: ['put'],
    translation: ['класть'],
  },
  {
    infinitive: 'read',
    pastSimple: ['read'],
    pastParticiple: ['read'],
    translation: ['читать'],
  },
  {
    infinitive: 'ride',
    pastSimple: ['rode'],
    pastParticiple: ['ridden'],
    translation: ['ездить верхом'],
  },
  {
    infinitive: 'ring',
    pastSimple: ['rang'],
    pastParticiple: ['rung'],
    translation: ['звонить'],
  },
  {
    infinitive: 'rise',
    pastSimple: ['rose'],
    pastParticiple: ['risen'],
    translation: ['подняться'],
  },
  {
    infinitive: 'run',
    pastSimple: ['ran'],
    pastParticiple: ['run'],
    translation: ['бежать', 'течь'],
  },
  {
    infinitive: 'say',
    pastSimple: ['said'],
    pastParticiple: ['said'],
    translation: ['говорить', 'сказать'],
  },
  {
    infinitive: 'see',
    pastSimple: ['saw'],
    pastParticiple: ['seen'],
    translation: ['видеть'],
  },
  {
    infinitive: 'seek',
    pastSimple: ['sought'],
    pastParticiple: ['sought'],
    translation: ['искать'],
  },
  {
    infinitive: 'sell',
    pastSimple: ['sold'],
    pastParticiple: ['sold'],
    translation: ['продавать'],
  },
  {
    infinitive: 'send',
    pastSimple: ['sent'],
    pastParticiple: ['sent'],
    translation: ['послать'],
  },
  {
    infinitive: 'set',
    pastSimple: ['set'],
    pastParticiple: ['set'],
    translation: ['устанавливать'],
  },
  {
    infinitive: 'shake',
    pastSimple: ['shook'],
    pastParticiple: ['shaken'],
    translation: ['трясти'],
  },
  {
    infinitive: 'shine',
    pastSimple: ['shone'],
    pastParticiple: ['shone'],
    translation: ['светить', 'сиять'],
  },
  {
    infinitive: 'shoot',
    pastSimple: ['shot'],
    pastParticiple: ['shot'],
    translation: ['стрелять', 'давать побеги'],
  },
  {
    infinitive: 'show',
    pastSimple: ['showed'],
    pastParticiple: ['shown', 'showed'],
    translation: ['показывать'],
  },
  {
    infinitive: 'shrink',
    pastSimple: ['shrank'],
    pastParticiple: ['shrunk'],
    translation: ['сокращаться', 'сжиматься'],
  },
  {
    infinitive: 'shut',
    pastSimple: ['shut'],
    pastParticiple: ['shut'],
    translation: ['закрывать', 'захлопнуть'],
  },
  {
    infinitive: 'sing',
    pastSimple: ['sang'],
    pastParticiple: ['sung'],
    translation: ['петь'],
  },
  {
    infinitive: 'sink',
    pastSimple: ['sank'],
    pastParticiple: ['sunk'],
    translation: ['тонуть'],
  },
  {
    infinitive: 'sit',
    pastSimple: ['sat'],
    pastParticiple: ['sat'],
    translation: ['сидеть'],
  },
  {
    infinitive: 'sleep',
    pastSimple: ['slept'],
    pastParticiple: ['slept'],
    translation: ['спать'],
  },
  {
    infinitive: 'smell',
    pastSimple: ['smelt'],
    pastParticiple: ['smelt'],
    translation: ['пахнуть', 'нюхать'],
  },
  {
    infinitive: 'speak',
    pastSimple: ['spoke'],
    pastParticiple: ['spoken'],
    translation: ['говорить'],
  },
  {
    infinitive: 'spend',
    pastSimple: ['spent'],
    pastParticiple: ['spent'],
    translation: ['тратить', 'проводить'],
  },
  {
    infinitive: 'split',
    pastSimple: ['split'],
    pastParticiple: ['split'],
    translation: ['расщепить'],
  },
  {
    infinitive: 'spread',
    pastSimple: ['spread'],
    pastParticiple: ['spread'],
    translation: ['распространяться'],
  },
  {
    infinitive: 'spring',
    pastSimple: ['sprang'],
    pastParticiple: ['sprung'],
    translation: ['скакать', 'пружинить'],
  },
  {
    infinitive: 'stand',
    pastSimple: ['stood'],
    pastParticiple: ['stood'],
    translation: ['стоять'],
  },
  {
    infinitive: 'steal',
    pastSimple: ['stole'],
    pastParticiple: ['stolen'],
    translation: ['украсть'],
  },
  {
    infinitive: 'stick',
    pastSimple: ['stuck'],
    pastParticiple: ['stuck'],
    translation: ['уколоть', 'приклеить'],
  },
  {
    infinitive: 'strike',
    pastSimple: ['struck'],
    pastParticiple: ['struck'],
    translation: ['бить', 'бастовать'],
  },
  {
    infinitive: 'strive',
    pastSimple: ['strove'],
    pastParticiple: ['striven'],
    translation: ['стараться'],
  },
  {
    infinitive: 'swear',
    pastSimple: ['swore'],
    pastParticiple: ['sworn'],
    translation: ['клясться', 'браниться'],
  },
  {
    infinitive: 'sweep',
    pastSimple: ['swept'],
    pastParticiple: ['swept'],
    translation: ['мести', 'промчаться'],
  },
  {
    infinitive: 'swim',
    pastSimple: ['swam'],
    pastParticiple: ['swum'],
    translation: ['плыть'],
  },
  {
    infinitive: 'take',
    pastSimple: ['took'],
    pastParticiple: ['taken'],
    translation: ['взять', 'брать'],
  },
  {
    infinitive: 'teach',
    pastSimple: ['taught'],
    pastParticiple: ['taught'],
    translation: ['учить'],
  },
  {
    infinitive: 'tell',
    pastSimple: ['told'],
    pastParticiple: ['told'],
    translation: ['рассказывать', 'сказать'],
  },
  {
    infinitive: 'think',
    pastSimple: ['thought'],
    pastParticiple: ['thought'],
    translation: ['думать'],
  },
  {
    infinitive: 'throw',
    pastSimple: ['threw'],
    pastParticiple: ['thrown'],
    translation: ['бросить'],
  },
  {
    infinitive: 'understand',
    pastSimple: ['understood'],
    pastParticiple: ['understood'],
    translation: ['понимать'],
  },
  {
    infinitive: 'wake',
    pastSimple: ['woke'],
    pastParticiple: ['woken'],
    translation: ['просыпаться', 'будить'],
  },
  {
    infinitive: 'wear',
    pastSimple: ['wore'],
    pastParticiple: ['worn'],
    translation: ['носить, надевать (одежду)'],
  },
  {
    infinitive: 'win',
    pastSimple: ['won'],
    pastParticiple: ['won'],
    translation: ['выйграть'],
  },
  {
    infinitive: 'write',
    pastSimple: ['wrote'],
    pastParticiple: ['written'],
    translation: ['писать'],
  },
].sort(irregularVerbsDataSortMethod);
