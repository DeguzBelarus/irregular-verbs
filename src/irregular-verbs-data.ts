import { verbsArraySorting } from './utils/verbsArraySorting';
import { IIrregularVerbData } from './types';

export const IRREGULAR_VERBS_DATA: Array<IIrregularVerbData> = [
  {
    infinitive: 'be',
    pastSimple: ['was', 'were'],
    pastParticiple: ['been'],
    translation: ['быть'],
    isPastSimpleAndParticipleEqual: false,
  },
  {
    infinitive: 'bear',
    pastSimple: ['bore'],
    pastParticiple: ['born'],
    translation: ['нести', 'родить'],
    isPastSimpleAndParticipleEqual: false,
  },
  {
    infinitive: 'beat',
    pastSimple: ['beat'],
    pastParticiple: ['beaten'],
    translation: ['бить'],
    isPastSimpleAndParticipleEqual: false,
  },
  {
    infinitive: 'become',
    pastSimple: ['became'],
    pastParticiple: ['become'],
    translation: ['стать', 'сделаться'],
    isPastSimpleAndParticipleEqual: false,
  },
  {
    infinitive: 'begin',
    pastSimple: ['began'],
    pastParticiple: ['begun'],
    translation: ['начать'],
    isPastSimpleAndParticipleEqual: false,
  },
  {
    infinitive: 'bet',
    pastSimple: ['bet'],
    pastParticiple: ['bet'],
    translation: ['держать пари'],
    isPastSimpleAndParticipleEqual: true,
  },
  {
    infinitive: 'bite',
    pastSimple: ['bit'],
    pastParticiple: ['bitten'],
    translation: ['кусать'],
    isPastSimpleAndParticipleEqual: false,
  },
  {
    infinitive: 'blow',
    pastSimple: ['blew'],
    pastParticiple: ['blown'],
    translation: ['дуть'],
    isPastSimpleAndParticipleEqual: false,
  },
  {
    infinitive: 'break',
    pastSimple: ['broke'],
    pastParticiple: ['broken'],
    translation: ['ломать'],
    isPastSimpleAndParticipleEqual: false,
  },
  {
    infinitive: 'breed',
    pastSimple: ['bred'],
    pastParticiple: ['bred'],
    translation: ['выращивать', 'разводить'],
    isPastSimpleAndParticipleEqual: true,
  },
  {
    infinitive: 'bring',
    pastSimple: ['brought'],
    pastParticiple: ['brought'],
    translation: ['принести'],
    isPastSimpleAndParticipleEqual: true,
  },
  {
    infinitive: 'build',
    pastSimple: ['built'],
    pastParticiple: ['built'],
    translation: ['строить'],
    isPastSimpleAndParticipleEqual: true,
  },
  {
    infinitive: 'burn',
    pastSimple: ['burnt', 'burned'],
    pastParticiple: ['burnt', 'burned'],
    translation: ['жечь', 'гореть'],
    isPastSimpleAndParticipleEqual: true,
  },
  {
    infinitive: 'burst',
    pastSimple: ['burst'],
    pastParticiple: ['burst'],
    translation: ['разразиться', 'взорваться'],
    isPastSimpleAndParticipleEqual: true,
  },
  {
    infinitive: 'buy',
    pastSimple: ['bought'],
    pastParticiple: ['bought'],
    translation: ['купить'],
    isPastSimpleAndParticipleEqual: true,
  },
  {
    infinitive: 'catch',
    pastSimple: ['caught'],
    pastParticiple: ['caught'],
    translation: ['ловить', 'поймать'],
    isPastSimpleAndParticipleEqual: true,
  },
  {
    infinitive: 'choose',
    pastSimple: ['chose'],
    pastParticiple: ['chosen'],
    translation: ['выбрать'],
    isPastSimpleAndParticipleEqual: false,
  },
  {
    infinitive: 'come',
    pastSimple: ['came'],
    pastParticiple: ['come'],
    translation: ['прийти'],
    isPastSimpleAndParticipleEqual: false,
  },
  {
    infinitive: 'cost',
    pastSimple: ['cost'],
    pastParticiple: ['cost'],
    translation: ['стоить'],
    isPastSimpleAndParticipleEqual: true,
  },
  {
    infinitive: 'cut',
    pastSimple: ['cut'],
    pastParticiple: ['cut'],
    translation: ['резать'],
    isPastSimpleAndParticipleEqual: true,
  },
  {
    infinitive: 'deal',
    pastSimple: ['dealt'],
    pastParticiple: ['dealt'],
    translation: ['иметь дело'],
    isPastSimpleAndParticipleEqual: true,
  },
  {
    infinitive: 'dig',
    pastSimple: ['dug'],
    pastParticiple: ['dug'],
    translation: ['копать'],
    isPastSimpleAndParticipleEqual: true,
  },
  {
    infinitive: 'do',
    pastSimple: ['did'],
    pastParticiple: ['done'],
    translation: ['делать'],
    isPastSimpleAndParticipleEqual: false,
  },
  {
    infinitive: 'draw',
    pastSimple: ['drew'],
    pastParticiple: ['drawn'],
    translation: ['тащить', 'рисовать'],
    isPastSimpleAndParticipleEqual: false,
  },
  {
    infinitive: 'dream',
    pastSimple: ['dreamt', 'dreamed'],
    pastParticiple: ['dreamt', 'dreamed'],
    translation: ['грезить', 'мечтать'],
    isPastSimpleAndParticipleEqual: true,
  },
  {
    infinitive: 'drink',
    pastSimple: ['drank'],
    pastParticiple: ['drunk'],
    translation: ['пить', 'выпить'],
    isPastSimpleAndParticipleEqual: false,
  },
  {
    infinitive: 'drive',
    pastSimple: ['drove'],
    pastParticiple: ['driven'],
    translation: ['гнать', 'ехать'],
    isPastSimpleAndParticipleEqual: false,
  },
  {
    infinitive: 'eat',
    pastSimple: ['ate'],
    pastParticiple: ['eaten'],
    translation: ['кушать', 'есть'],
    isPastSimpleAndParticipleEqual: false,
  },
  {
    infinitive: 'fall',
    pastSimple: ['fell'],
    pastParticiple: ['fallen'],
    translation: ['падать'],
    isPastSimpleAndParticipleEqual: false,
  },
  {
    infinitive: 'feed',
    pastSimple: ['fed'],
    pastParticiple: ['fed'],
    translation: ['кормить'],
    isPastSimpleAndParticipleEqual: true,
  },
  {
    infinitive: 'feel',
    pastSimple: ['felt'],
    pastParticiple: ['felt'],
    translation: ['чувствовать'],
    isPastSimpleAndParticipleEqual: true,
  },
  {
    infinitive: 'fight',
    pastSimple: ['fought'],
    pastParticiple: ['fought'],
    translation: ['сражаться', 'драться'],
    isPastSimpleAndParticipleEqual: true,
  },
  {
    infinitive: 'find',
    pastSimple: ['found'],
    pastParticiple: ['found'],
    translation: ['находить'],
    isPastSimpleAndParticipleEqual: true,
  },
  {
    infinitive: 'fly',
    pastSimple: ['flew'],
    pastParticiple: ['flown'],
    translation: ['летать'],
    isPastSimpleAndParticipleEqual: false,
  },
  {
    infinitive: 'flee',
    pastSimple: ['fled'],
    pastParticiple: ['fled'],
    translation: ['бежать', 'спасаться бегством'],
    isPastSimpleAndParticipleEqual: true,
  },
  {
    infinitive: 'forbid',
    pastSimple: ['forbad', 'forbade'],
    pastParticiple: ['forbidden'],
    translation: ['запретить'],
    isPastSimpleAndParticipleEqual: false,
  },
  {
    infinitive: 'forsee',
    pastSimple: ['foresaw'],
    pastParticiple: ['forseen'],
    translation: ['предвидеть'],
    isPastSimpleAndParticipleEqual: false,
  },
  {
    infinitive: 'forget',
    pastSimple: ['forgot'],
    pastParticiple: ['forgotten'],
    translation: ['забыть'],
    isPastSimpleAndParticipleEqual: false,
  },
  {
    infinitive: 'forgive',
    pastSimple: ['forgave'],
    pastParticiple: ['forgiven'],
    translation: ['простить'],
    isPastSimpleAndParticipleEqual: false,
  },
  {
    infinitive: 'freeze',
    pastSimple: ['froze'],
    pastParticiple: ['frozen'],
    translation: ['замёрзнуть', 'замораживать'],
    isPastSimpleAndParticipleEqual: false,
  },
  {
    infinitive: 'get',
    pastSimple: ['got'],
    pastParticiple: ['got'],
    translation: ['получить'],
    isPastSimpleAndParticipleEqual: true,
  },
  {
    infinitive: 'give',
    pastSimple: ['gave'],
    pastParticiple: ['given'],
    translation: ['дать'],
    isPastSimpleAndParticipleEqual: false,
  },
  {
    infinitive: 'go',
    pastSimple: ['went'],
    pastParticiple: ['gone'],
    translation: ['идти', 'уходить'],
    isPastSimpleAndParticipleEqual: false,
  },
  {
    infinitive: 'grow',
    pastSimple: ['grew'],
    pastParticiple: ['grown'],
    translation: ['расти'],
    isPastSimpleAndParticipleEqual: false,
  },
  {
    infinitive: 'hang',
    pastSimple: ['hung'],
    pastParticiple: ['hung'],
    translation: ['висеть', 'повесить'],
    isPastSimpleAndParticipleEqual: true,
  },
  {
    infinitive: 'have',
    pastSimple: ['had'],
    pastParticiple: ['had'],
    translation: ['иметь'],
    isPastSimpleAndParticipleEqual: true,
  },
  {
    infinitive: 'hear',
    pastSimple: ['heard'],
    pastParticiple: ['heard'],
    translation: ['слушать'],
    isPastSimpleAndParticipleEqual: true,
  },
  {
    infinitive: 'hide',
    pastSimple: ['hid'],
    pastParticiple: ['hidden'],
    translation: ['прятать', 'прятаться'],
    isPastSimpleAndParticipleEqual: false,
  },
  {
    infinitive: 'hit',
    pastSimple: ['hit'],
    pastParticiple: ['hit'],
    translation: ['ударить', 'попасть'],
    isPastSimpleAndParticipleEqual: true,
  },
  {
    infinitive: 'hold',
    pastSimple: ['held'],
    pastParticiple: ['held'],
    translation: ['держать'],
    isPastSimpleAndParticipleEqual: true,
  },
  {
    infinitive: 'hurt',
    pastSimple: ['hurt'],
    pastParticiple: ['hurt'],
    translation: ['причинить боль'],
    isPastSimpleAndParticipleEqual: true,
  },
  {
    infinitive: 'keep',
    pastSimple: ['kept'],
    pastParticiple: ['kept'],
    translation: ['хранить'],
    isPastSimpleAndParticipleEqual: true,
  },
  {
    infinitive: 'know',
    pastSimple: ['knew'],
    pastParticiple: ['known'],
    translation: ['знать'],
    isPastSimpleAndParticipleEqual: false,
  },
  {
    infinitive: 'lay',
    pastSimple: ['laid'],
    pastParticiple: ['laid'],
    translation: ['класть', 'положить'],
    isPastSimpleAndParticipleEqual: true,
  },
  {
    infinitive: 'lead',
    pastSimple: ['led'],
    pastParticiple: ['led'],
    translation: ['вести'],
    isPastSimpleAndParticipleEqual: true,
  },
  {
    infinitive: 'learn',
    pastSimple: ['learnt', 'learned'],
    pastParticiple: ['learnt', 'learned'],
    translation: ['учить'],
    isPastSimpleAndParticipleEqual: true,
  },
  {
    infinitive: 'leave',
    pastSimple: ['left'],
    pastParticiple: ['left'],
    translation: ['оставить'],
    isPastSimpleAndParticipleEqual: true,
  },
  {
    infinitive: 'lend',
    pastSimple: ['lent'],
    pastParticiple: ['lent'],
    translation: ['одолжить'],
    isPastSimpleAndParticipleEqual: true,
  },
  {
    infinitive: 'let',
    pastSimple: ['let'],
    pastParticiple: ['let'],
    translation: ['пустить', 'дать'],
    isPastSimpleAndParticipleEqual: true,
  },
  {
    infinitive: 'lie',
    pastSimple: ['lay'],
    pastParticiple: ['lain'],
    translation: ['лежать'],
    isPastSimpleAndParticipleEqual: false,
  },
  {
    infinitive: 'light',
    pastSimple: ['lit', 'lighted'],
    pastParticiple: ['lit', 'lighted'],
    translation: ['осветить'],
    isPastSimpleAndParticipleEqual: true,
  },
  {
    infinitive: 'lose',
    pastSimple: ['lost'],
    pastParticiple: ['lost'],
    translation: ['терять'],
    isPastSimpleAndParticipleEqual: true,
  },
  {
    infinitive: 'make',
    pastSimple: ['made'],
    pastParticiple: ['made'],
    translation: ['делать'],
    isPastSimpleAndParticipleEqual: true,
  },
  {
    infinitive: 'mean',
    pastSimple: ['meant'],
    pastParticiple: ['meant'],
    translation: ['подразумевать'],
    isPastSimpleAndParticipleEqual: true,
  },
  {
    infinitive: 'meet',
    pastSimple: ['met'],
    pastParticiple: ['met'],
    translation: ['встретить'],
    isPastSimpleAndParticipleEqual: true,
  },
  {
    infinitive: 'mistake',
    pastSimple: ['mistook'],
    pastParticiple: ['mistaken'],
    translation: ['ошибаться'],
    isPastSimpleAndParticipleEqual: false,
  },
  {
    infinitive: 'misunderstand',
    pastSimple: ['misunderstood'],
    pastParticiple: ['misunderstood'],
    translation: ['неправильно понимать'],
    isPastSimpleAndParticipleEqual: true,
  },
  {
    infinitive: 'overcome',
    pastSimple: ['overcame'],
    pastParticiple: ['overcome'],
    translation: ['преодолевать'],
    isPastSimpleAndParticipleEqual: false,
  },
  {
    infinitive: 'pay',
    pastSimple: ['paid'],
    pastParticiple: ['paid'],
    translation: ['платить'],
    isPastSimpleAndParticipleEqual: true,
  },
  {
    infinitive: 'put',
    pastSimple: ['put'],
    pastParticiple: ['put'],
    translation: ['класть'],
    isPastSimpleAndParticipleEqual: true,
  },
  {
    infinitive: 'read',
    pastSimple: ['read'],
    pastParticiple: ['read'],
    translation: ['читать'],
    isPastSimpleAndParticipleEqual: true,
  },
  {
    infinitive: 'ride',
    pastSimple: ['rode'],
    pastParticiple: ['ridden'],
    translation: ['ездить верхом'],
    isPastSimpleAndParticipleEqual: false,
  },
  {
    infinitive: 'rid',
    pastSimple: ['rid', 'ridded'],
    pastParticiple: ['rid', 'ridded'],
    translation: ['избавляться', 'освобождаться'],
    isPastSimpleAndParticipleEqual: true,
  },
  {
    infinitive: 'ring',
    pastSimple: ['rang'],
    pastParticiple: ['rung'],
    translation: ['звонить'],
    isPastSimpleAndParticipleEqual: false,
  },
  {
    infinitive: 'rise',
    pastSimple: ['rose'],
    pastParticiple: ['risen'],
    translation: ['подняться'],
    isPastSimpleAndParticipleEqual: false,
  },
  {
    infinitive: 'run',
    pastSimple: ['ran'],
    pastParticiple: ['run'],
    translation: ['бежать', 'течь'],
    isPastSimpleAndParticipleEqual: false,
  },
  {
    infinitive: 'say',
    pastSimple: ['said'],
    pastParticiple: ['said'],
    translation: ['говорить', 'сказать'],
    isPastSimpleAndParticipleEqual: true,
  },
  {
    infinitive: 'see',
    pastSimple: ['saw'],
    pastParticiple: ['seen'],
    translation: ['видеть'],
    isPastSimpleAndParticipleEqual: false,
  },
  {
    infinitive: 'seek',
    pastSimple: ['sought'],
    pastParticiple: ['sought'],
    translation: ['искать'],
    isPastSimpleAndParticipleEqual: true,
  },
  {
    infinitive: 'sell',
    pastSimple: ['sold'],
    pastParticiple: ['sold'],
    translation: ['продавать'],
    isPastSimpleAndParticipleEqual: true,
  },
  {
    infinitive: 'send',
    pastSimple: ['sent'],
    pastParticiple: ['sent'],
    translation: ['послать'],
    isPastSimpleAndParticipleEqual: true,
  },
  {
    infinitive: 'set',
    pastSimple: ['set'],
    pastParticiple: ['set'],
    translation: ['устанавливать'],
    isPastSimpleAndParticipleEqual: true,
  },
  {
    infinitive: 'shake',
    pastSimple: ['shook'],
    pastParticiple: ['shaken'],
    translation: ['трясти'],
    isPastSimpleAndParticipleEqual: false,
  },
  {
    infinitive: 'shine',
    pastSimple: ['shone'],
    pastParticiple: ['shone'],
    translation: ['светить', 'сиять'],
    isPastSimpleAndParticipleEqual: true,
  },
  {
    infinitive: 'shoot',
    pastSimple: ['shot'],
    pastParticiple: ['shot'],
    translation: ['стрелять', 'давать побеги'],
    isPastSimpleAndParticipleEqual: true,
  },
  {
    infinitive: 'show',
    pastSimple: ['showed'],
    pastParticiple: ['showed', 'shown'],
    translation: ['показывать'],
    isPastSimpleAndParticipleEqual: false,
  },
  {
    infinitive: 'quit',
    pastSimple: ['quit, quitted'],
    pastParticiple: ['quit, quitted'],
    translation: ['уходить', 'уволиться'],
    isPastSimpleAndParticipleEqual: true,
  },
  {
    infinitive: 'forsake',
    pastSimple: ['forsook'],
    pastParticiple: ['forsaken'],
    translation: ['оставлять'],
    isPastSimpleAndParticipleEqual: false,
  },
  {
    infinitive: 'shrink',
    pastSimple: ['shrank'],
    pastParticiple: ['shrunk'],
    translation: ['сокращаться', 'сжиматься'],
    isPastSimpleAndParticipleEqual: false,
  },
  {
    infinitive: 'shut',
    pastSimple: ['shut'],
    pastParticiple: ['shut'],
    translation: ['закрывать', 'захлопнуть'],
    isPastSimpleAndParticipleEqual: true,
  },
  {
    infinitive: 'sing',
    pastSimple: ['sang'],
    pastParticiple: ['sung'],
    translation: ['петь'],
    isPastSimpleAndParticipleEqual: false,
  },
  {
    infinitive: 'sink',
    pastSimple: ['sank'],
    pastParticiple: ['sunk'],
    translation: ['тонуть'],
    isPastSimpleAndParticipleEqual: false,
  },
  {
    infinitive: 'sit',
    pastSimple: ['sat'],
    pastParticiple: ['sat'],
    translation: ['сидеть'],
    isPastSimpleAndParticipleEqual: true,
  },
  {
    infinitive: 'sleep',
    pastSimple: ['slept'],
    pastParticiple: ['slept'],
    translation: ['спать'],
    isPastSimpleAndParticipleEqual: true,
  },
  {
    infinitive: 'smell',
    pastSimple: ['smelt'],
    pastParticiple: ['smelt'],
    translation: ['пахнуть', 'нюхать'],
    isPastSimpleAndParticipleEqual: true,
  },
  {
    infinitive: 'speak',
    pastSimple: ['spoke'],
    pastParticiple: ['spoken'],
    translation: ['говорить'],
    isPastSimpleAndParticipleEqual: false,
  },
  {
    infinitive: 'spend',
    pastSimple: ['spent'],
    pastParticiple: ['spent'],
    translation: ['тратить', 'проводить'],
    isPastSimpleAndParticipleEqual: true,
  },
  {
    infinitive: 'split',
    pastSimple: ['split'],
    pastParticiple: ['split'],
    translation: ['расщепить'],
    isPastSimpleAndParticipleEqual: true,
  },
  {
    infinitive: 'spread',
    pastSimple: ['spread'],
    pastParticiple: ['spread'],
    translation: ['распространяться'],
    isPastSimpleAndParticipleEqual: true,
  },
  {
    infinitive: 'spring',
    pastSimple: ['sprang'],
    pastParticiple: ['sprung'],
    translation: ['скакать', 'пружинить'],
    isPastSimpleAndParticipleEqual: false,
  },
  {
    infinitive: 'stand',
    pastSimple: ['stood'],
    pastParticiple: ['stood'],
    translation: ['стоять'],
    isPastSimpleAndParticipleEqual: true,
  },
  {
    infinitive: 'steal',
    pastSimple: ['stole'],
    pastParticiple: ['stolen'],
    translation: ['украсть'],
    isPastSimpleAndParticipleEqual: false,
  },
  {
    infinitive: 'stick',
    pastSimple: ['stuck'],
    pastParticiple: ['stuck'],
    translation: ['уколоть', 'приклеить'],
    isPastSimpleAndParticipleEqual: true,
  },
  {
    infinitive: 'strike',
    pastSimple: ['struck'],
    pastParticiple: ['struck'],
    translation: ['бить', 'бастовать'],
    isPastSimpleAndParticipleEqual: true,
  },
  {
    infinitive: 'strive',
    pastSimple: ['strove'],
    pastParticiple: ['striven'],
    translation: ['стараться'],
    isPastSimpleAndParticipleEqual: false,
  },
  {
    infinitive: 'swear',
    pastSimple: ['swore'],
    pastParticiple: ['sworn'],
    translation: ['клясться', 'браниться'],
    isPastSimpleAndParticipleEqual: false,
  },
  {
    infinitive: 'sweep',
    pastSimple: ['swept'],
    pastParticiple: ['swept'],
    translation: ['мести', 'промчаться'],
    isPastSimpleAndParticipleEqual: true,
  },
  {
    infinitive: 'swim',
    pastSimple: ['swam'],
    pastParticiple: ['swum'],
    translation: ['плыть'],
    isPastSimpleAndParticipleEqual: false,
  },
  {
    infinitive: 'take',
    pastSimple: ['took'],
    pastParticiple: ['taken'],
    translation: ['взять', 'брать'],
    isPastSimpleAndParticipleEqual: false,
  },
  {
    infinitive: 'teach',
    pastSimple: ['taught'],
    pastParticiple: ['taught'],
    translation: ['учить'],
    isPastSimpleAndParticipleEqual: true,
  },
  {
    infinitive: 'tell',
    pastSimple: ['told'],
    pastParticiple: ['told'],
    translation: ['рассказывать', 'сказать'],
    isPastSimpleAndParticipleEqual: true,
  },
  {
    infinitive: 'think',
    pastSimple: ['thought'],
    pastParticiple: ['thought'],
    translation: ['думать'],
    isPastSimpleAndParticipleEqual: true,
  },
  {
    infinitive: 'throw',
    pastSimple: ['threw'],
    pastParticiple: ['thrown'],
    translation: ['бросить'],
    isPastSimpleAndParticipleEqual: false,
  },
  {
    infinitive: 'understand',
    pastSimple: ['understood'],
    pastParticiple: ['understood'],
    translation: ['понимать'],
    isPastSimpleAndParticipleEqual: true,
  },
  {
    infinitive: 'wake',
    pastSimple: ['woke'],
    pastParticiple: ['woken'],
    translation: ['просыпаться', 'будить'],
    isPastSimpleAndParticipleEqual: false,
  },
  {
    infinitive: 'awake',
    pastSimple: ['awoke'],
    pastParticiple: ['awoken'],
    translation: ['просыпаться', 'будить'],
    isPastSimpleAndParticipleEqual: false,
  },
  {
    infinitive: 'cling ',
    pastSimple: ['clung'],
    pastParticiple: ['clung'],
    translation: ['цепляться', 'виснуть'],
    isPastSimpleAndParticipleEqual: true,
  },
  {
    infinitive: 'bend ',
    pastSimple: ['bent'],
    pastParticiple: ['bent'],
    translation: ['гнуть', 'сгибаться'],
    isPastSimpleAndParticipleEqual: true,
  },
  {
    infinitive: 'bleed',
    pastSimple: ['bled'],
    pastParticiple: ['bled'],
    translation: ['кровоточить', 'истекать кровью'],
    isPastSimpleAndParticipleEqual: true,
  },
  {
    infinitive: 'bind',
    pastSimple: ['bound'],
    pastParticiple: ['bound'],
    translation: ['связывать', 'объединять'],
    isPastSimpleAndParticipleEqual: true,
  },
  {
    infinitive: 'wear',
    pastSimple: ['wore'],
    pastParticiple: ['worn'],
    translation: ['носить, надевать (одежду)'],
    isPastSimpleAndParticipleEqual: false,
  },
  {
    infinitive: 'win',
    pastSimple: ['won'],
    pastParticiple: ['won'],
    translation: ['выйграть'],
    isPastSimpleAndParticipleEqual: true,
  },
  {
    infinitive: 'write',
    pastSimple: ['wrote'],
    pastParticiple: ['written'],
    translation: ['писать'],
    isPastSimpleAndParticipleEqual: false,
  },
].sort(verbsArraySorting);
