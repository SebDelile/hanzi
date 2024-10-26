# ChatGPT prompts

## Feed database with new hanzis

Hi, I would like you to build a json file for all the following chinese chars (hanzis) : XXXXX
Please use the following structure :

```js
{
  "code": "6CA1", // the unicode of the char
  "examplePinyin": "wo3 mei2 you3 mao1", // a short sentence (max 4 chars) to use the char, in pinyin with the word and the tone
  "exampleSino": "我没有猫", // the same example in chinse char
  "key": "氵", // the main key of the chinese char
  "pinyin": "mei", // the pinyin corresponding to the char
  "sinogram": "没", // the chinse char
  "strokes": "丶丶一ノフフ丶", // the stroke to draw the chinese char, in the correct order
  "tone": 2 // the tone corresponding to the char (main one if there are several possible)
}
```

## Generate a text

Hi, in a context of learning chinese, can you please write a short text with a length of about 50 chinese characters (hanzi). Then please write the translation of this text in chinese pinyin with the word and tone seperatly (example "我爱你" leads to "wo3 ai4 ni3")
You have to use only (with no exception please) this list of chinese characters :
