# Grid  [гайд ](https://doka.guide/css/grid-guide/)

```javascript
grid-template-columns: repeat(4, 1fr); fr - столбцы будут тянуться на всю ширину
grid-template-rows: repeat(3, 1fr); fr - строки будут по размеру контента (если не указана высота контейнера)
```

[![2024-03-19-11-49-05.png](https://i.postimg.cc/90BktpBQ/2024-03-19-11-49-05.png)](https://postimg.cc/q6zQp2YP)

```javascript
const GridContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(4, 265px);
  grid-template-rows: repeat(3, 200px);
  gap: 16px;

  grid-template-areas: 
  "one two three four"
  "five five six eigth"
  "five five seven eigth"
`;
Расположение элементов пример №1

const GridItem = styled.div`
  background-color: rgba(14, 74, 226, 0.8);

  &:first-child {
    grid-area: one;
  }

  &:nth-child(2) {
    grid-area: two;
  }

  &:nth-child(3) {
    grid-area: three;
  }

  &:nth-child(4) {
    grid-area: four;
  }
  
  &:nth-child(5) {
    grid-area: five;
  }

  &:nth-child(6) {
    grid-area: six;
  }

  &:nth-child(7) {
    grid-area: seven;
  }

  &:last-child {
    grid-area: eigth;
  }
`;

Расположение элементов пример №2
----------------------------------------------------------------
grid-area row-start / column-start / row-end / column-end


const GridItem = styled.div`
  background-color: rgba(14, 74, 226, 0.8);

  
  &:nth-child(5) {
    color: #13bf25;
    font-weight: 700;
    font-size: 60px;
    grid-area: 2/1/4/3;              // через span можно указать сколько ячеек будет 
    // grid-area: 2/1/span 2/span 2; // занимать элемент
  }

 &:nth-child(6) {
    grid-area: 2/2/3/4;
    color: #bf1397;
    font-weight: 500;
    font-size: 30px;
    background-color: rgba(14, 74, 226, 0.309);
    z-index: -5;
  }


  &:last-child {
    grid-area: 2/4/4/4;
  }
`;






const GridContainer = styled.div`
  display: grid;
  /* grid-template-columns: repeat(auto-fill, minmax(200px, auto)); */
  grid-template-columns: repeat(auto-fit, minmax(200px, auto));
  gap: 30px;
  /* grid-auto-rows: minmax(150px, auto);
  grid-template-columns: repeat(4, 165px);
  gap: 16px;
  justify-content: center;
  align-content: center;


  @media screen and (max-width: 860px) {
  & {
    grid-template-columns: repeat(4, 1fr);
   
  }
}

@media screen and (max-width: 576px) {
  & {
    grid-template-columns: repeat(2, 1fr);
    align-content: start;
  }

  &:nth-child(5) {
    grid-area: 3/1/5/3;
  }

} */
`;


const GridItem = styled.div`
  background-color: rgba(14, 74, 226, 0.8);

  /* grid-area row-start / column-start / row-end / column-end */


  /* &:nth-child(5) {
    grid-area: 2/1/4/3;
  }

 

  &:last-child {
    grid-area: 2/4/4/4;
  }


  @media screen and (max-width: 576px) {

  &:nth-child(5) {
    grid-area: 3/1/5/3;
  }

  &:last-child {
    grid-area: 5/2/7/3;
  }
} */
`;

```




