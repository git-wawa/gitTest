# hi hello

* git config --global user.email "you@example.com"
* git config --global user.name "Your Name"
* 레포지토리 초기화 (폴더선택)
* 초기화한 폴더에 들어간 후
* git remote add origin 리모트URL
* 다음으로 푸시


# css flex
```
Parent Element (Container)
display: flex;
flex-direction: column | column-reverse | row(default) | row-reverse
flex-wrap : wrap | nowrap(default) | wrap-reverse
flex-flow: <‘flex-direction’> || <‘flex-wrap’>
justify-content: center | flex-start(default) | flex-end | space-around | space-between | space-evenly
align-items: center | flex-start | flex-end | stretch(default) | baseline
align-content: center | flex-start | flex-end | stretch(default) | space-around | space-between 

Child Elements (Items)
order: n
flex-grow: n (default 0)
flex-shrink : n (default 1)
flex-basis: <length> | auto(default)
flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
align-self: auto | flex-start | flex-end | center | baseline | stretch
```