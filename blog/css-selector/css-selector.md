---
title: "CSS selector(1)"
desc: "เนื่องจากตอนนี้ว่างงาน หลายวันมานี้เลยศึกษาเรื่องที่รู้อยู่แล้วและใช้มันบ่อยมาลองศึกษาให้ลึกขึ้นพบว่าตัวเองไม่รู้อะไรเลย ฮาฮ่า"
tags: ["css"]
date: 2022-03-15
---

**CSS selector**
ประเภทของ selector ได้แก่

1. Type
2. Class
3. ID
4. selectors

เริ่มจาก type selector คือ การเลือก tag name หรือ element
เช่น

```html
<p>Paragraph</p>
<h1>Heading</h1>
<span> Span </span>
```

the universal selector `*` การเลือกโดยใช้เครื่องหมายดอกจัทร์ คือการเลือกทั้งหมดแม้ว่าจะเป็น tag child ที่อยู่ใน tag parentก็ตาม ส่วนมากจะเอาไว้ใช้ลบ defualt ของ `h1` , `p` เพื่อ reset ค่าที่เป็น defualt ของ brower

```css
* {
  margin: 0;
}
```

ประโยชน์ของ universal selector ช่วยให้ selector ของเรา อ่านง่ายขึ้น

```css
article :first-child {
  font-weight: bold;
}
```

```css
article *:first-child {
  font-weight: bold;
}
```

ทั้งสองทำงานเหมือนกันแต่สามามารถอ่านง่ายขึ้น?

---

**ID selector**

การใช้ ID มีความยุ่งยากในการจัดการเพราะมีความ Specificity ที่สูงกว่า class
เช่น id สามารถกำหนดได้แค่ id เดียว ใน tag ส่วนคลาส จะใส่ยาวถึงดาวอังคารก็ยังได้
การใช้ id หลายครั้งในหน้าเดียวกันด้วยกรารอยากที่จะ styling เป็นเรื่องที่ควรระวังเป็นอย่างยิ่งทางที่ดีใช้ class จะดีกว่า

**Attribute selectors**

HTML attributes สามารถใช้ CSS selector เลือก html atributes มาใช้ได้และมีประโยชน์อย่างมากในกหารใช้งาน โดยการ select attribute นั้นมีวิธีการเลือกหลายแบบได้แก่

- **Pseudo-classes and pseudo-elements**

  Pseudo-classes ถูกสร้างขึ้นมาเพื่อเข้าถึง state ของ elecment ที่ถูกเลือก เช่น :hover ที่เราสามารถเปลี่ยนสีหรือขนาดด้วยการเอาเมาส์ไปชี้ตรงสิ่งนั้น Pseudo-classes มีไว้ Dom tree ที่ selectors อื่นๆไม่สามารถเข้าถึงได้และ Pseudo-classes ยังมีชื่อเรียกและวิธีการใช้หลายแบบมาก ๆ ไม่เคยจำเลยใช้อย่างเดียววันนี้เลยจะมากเรียกชื่อให้ถูกและอธิบายตัวอย่างคร่าวๆ

เริ่มจาก

1. Linguistic pseudo-classes (/liNGˈɡwistik/) ตามชื่อเลยเราสามรถใช้มันเพื่อเรียก attribute ที่กำหนดค่า lang
   syntax `:lang( <language-code> )`

ตัวอย่างเช่น

```html
<p lang="it">hi</p>
```

```css
p:lang(it) {
  background: yellow;
}
```

เลือกเฉพาะ ค่าที่เป็นภาษาอิตาเลี่ยนเท่านั้น

2. location pseudo-clases พวก link ต่าง ๆ `:link :tarket`
3. user action pseudo-clases พวกที่เป็น user action ต่างๆ เช่น `:hover:focus` etc
4. Time-dimensional pseudo-classes อันนี้เหมือนจะไม่ค่อยได้ใช้เท่าไหร่ แต่มันใช่สำหรับ tag ที่มีจังหวะเวลาอย่างพวก caption บนวิดิโอ(WebVTT)
   ตัวอย่าง pseudo-classes เช่น `:current :past :future`

5. The input pseudo-classes ใช้เลือกพวก form element based o HTML attributes

เช่น `input` , `: check`

6. Tree-structural pseudo-classes คือ pseudo class เราสามารถเข้าถึง document tree ได้พวกที่เรียกว่า Tree-structural pseudo-classes

จะยกตัวอย่างเช่น
`ul > li`
หากเราจะเข้าถึง li ตัวแรก

```css
li:first-child {
  color: orange;
}
```

**Pseudo-elements**

_“A CSS **pseudo-element** is a keyword added to a selector that lets you style a specific part of the selected element(s). ”_

```css
selector::pseudo-element {
  property: value;
}
```

ตัวอย่าง psudo element เช่น`::before ::after`
มาถึงตรงนี้ก็สงสัยยว่า element กับ class ต่างสกันยังไงเริ่มจาก
syntax ของ element จะใช้ `::` ในขณะที่ class จะใช้ `:`แต่จริงๆแล้วจะให้อันเดียวหรือสองอัน browser ส่วนมากก็สามารถรองรับได้ทั้งสสองแบบ

**Combinators**

Combinators มาจาก คำว่า combine คือการรวมกันนั่นเองโดย combinators มีทั้งหมด 4 ประเภทได้แก่

1. Descendant Selector
2. Child Selector
3. Adjacent Sibling Selector
4. General Sibling Selector

**Descendant Selector** คือการเลือก element ทั้งหมดที่อยู่ข้างใน
ตัวอย่าง
`div p` คือ `p` ทั้งหมดที่อยู่ใน `div`

**Child combinator** คือการเลือก element ที่อยู่ข้างในelement
`div > p`

แต่ ต่างกับ Descendant คือมันจะเลือกแค่ `p` ที่อยู่ใน div แต่ไม่เลือก `p` ที่อยู่ข้างในอีกทีนึง

```css
h1 > p {
  font-weight: bold;
  background-color: #333;
  color: #fff;
  padding: 0.5em;
}
```

**Adjacent Sibling Selector**
คือการเลือก element ที่ อยู่ติดกัน(adjacent) โดยใช้เครื่องหมาย `+`

ตัวอย่าง

```css
h1 + p {
  font-weight: bold;
  background-color: #333;
  color: #fff;
  padding: 0.5em;
}
```

**General Sibling Selector** คือการเลือก element ที่เป็น siblings ทั้งหมดไม่ใช่แค่ตัวที่อยู่ติดกัน
โดยใช้เครื่องหมาย `~`

```css
h1 ~ p {
  font-weight: bold;
  background-color: #333;
  color: #fff;
  padding: 0.5em;
}
```

การใช้ selector จะเห็นได้ว่าเราสามารถใช้ selector ได้เยอะมากนอกจาก class กับ ID
จบ

[Read more from documents](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Combinators#descendant_combinator "notesLink")
