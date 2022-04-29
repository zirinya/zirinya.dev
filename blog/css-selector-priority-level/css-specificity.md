---
title: "CSS Specificity"
desc: "หลังจากที่เขียน selector วันก่อนก็นึกขึ้นมาได้ว่าระดับของ selector มันมีต่างกันและมีวิธีการคำนวนยังไงกันนะ?"
tags: ["css"]
date: 2022-04-29
---

**จงตอบคำถามต่อไปนี้**

```html
<div id="test">
  <span>what is this color?</span>
</div>
```

```css
div#test span {
  color: green;
}
div span {
  color: blue;
}
span {
  color: red;
}
```

`span` จะกลายเป็นสีอะไร ?
เราเคยเจอ quize เล่น ๆ กับเจอ code จริงที่ใช้ class ซ้อน ๆ กันถึงในใจจะรู้สึกว่าเขียนให้ยากทำไมนะ ฮ่าๆ

ก่อนจะตอบคำถามเราเข้าใจเรื่อง [selector](https://zirinya0.dev/css-selector/) ไปแล้วและก่อนจะตอบคำนวนเราต้องมากำหนดค่าให้กับ selector ก่อน
เริ่มจาก

0. inline style `style=""` กำหนดค่าให้เป็น 1000
1. `id` กำหนดค่าให้เป็น 100
2. class, attribute, pseudo-class กำหนดค่าเป็น 10
3. element, psuedo-element กำหนดค่าเป็น 1

พอกำหนดค่าให้เสร็จแล้วก็แทนค่าเข้าไปเช่นจากโจทย์ `div#test span `จะได้เป็น (102) 

`div span`(2)

`span`(1)

เท่านี้ก็ตอบคำถามในตอนแรกแล้วว่า `span` จะกลายเป็นสีอะไร

มาถึงตอนนี้แล้วก็สงสัยว่า แล้ว `!important` ล่ะอยู่ตรงไหนของการแทนค่า

`!important` เป็นตัวที่ important มากเพราะมันอยู่เหนือทุกอย่างเราสามารถ override มันได้เลย แต่ควรจะใช้ด้วยความระมัดระวังเพราะมันอาจดีกันมั่วเละเทะก็ได้

แล้ว `*` หรือ universal selector พวก combinators อย่าง `+`, `>` , `~` , `:not` พวกนี้ไม่ได้นับรวมอยู่ในตารางเลยไม่ต้องเอามาคำนวณ

แล้วถ้าเป็นการเลือก id ใน attribute `[id='text']` ค่ามันยังเป็น 100 อยู่รึเปล่า?

ถ้าเลือก id แบบนี้ค่าของมันจะอยู่ที่ 10 เพราะ มันเป็นการเลือก attribute ที่เลือก id เฉย ๆ ไม่ใช่การเลือก id ตรง ๆ แต่ก็เลือกได้เหมือนกัน 

จบ


[fact-checks and read more (0)](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#understanding_the_cascade)

[fact-checks and read more (1)](https://www.w3.org/TR/selectors-3/#simple-selectors)



