var testObject = {
  image: 'http://unsplash.it/400?image=234',
  title: 'Vintage Board Game',
  seller: 'franz66',
  price: 15.00
}
var testObject2 = {
  image: 'http://unsplash.it/400?image=663',
  title: 'Monopoly',
  seller: 'Jamie Foxx',
  price: 20
}
var testObject3 = {
  image: 'http://unsplash.it/400?image=22',
  title: 'Sorry',
  seller: 'Harrison Ford',
  price: 5
}
var testObject4 = {
  image: 'http://unsplash.it/400?image=55',
  title: 'Trouble',
  seller: 'Royce Clayton',
  price: 9
}
var testObject5 = {
  image: 'http://unsplash.it/400?image=54',
  title: 'Hungry Hippos',
  seller: 'Tom Hanks',
  price: 25.00
}
var testObject6 = {
  image: 'http://unsplash.it/400?image=85',
  title: 'Life',
  seller: 'Sigfried and Roy',
  price: 95.00
}
var testObject7 = {
  image: 'http://unsplash.it/400?image=21',
  title: 'Sequence',
  seller: 'Paul Simon',
  price: 85.00
}
var testObject8 = {
  image: 'http://unsplash.it/400?image=99',
  title: 'Chutes and Ladders',
  seller: 'Peter Frampton',
  price: 5.00
}
var testObject9 = {
  image: 'http://unsplash.it/400?image=64',
  title: 'Mouse Trap',
  seller: 'Donald Trump',
  price: 999.00
}
var testObject10 = {
  image: 'http://unsplash.it/400?image=39',
  title: 'Risk',
  seller: 'Bob Newhart',
  price: 25.00
}
var testObject11 = {
  image: 'http://unsplash.it/400?image=900',
  title: 'Dominos',
  seller: 'Domino Fats',
  price: 35.00
}
var testObject12 = {
  image: 'http://unsplash.it/400?image=63',
  title: 'Operation',
  seller: 'Gregory House',
  price: 100.00
}

var rowResults = document.createElement('div')
rowResults.classList.add('row')
rowResults.style.marginRight = '25px'
rowResults.style.marginLeft = '10px'
document.getElementById('searchResults').appendChild(rowResults)

function createCardResults(object){
  var col = document.createElement('div')
  col.style.marginBottom = '7px'
  col.style.marginTop = '7px'
  col.style.boxShadow = '1px 1px 5px #888888'
  col.className = 'col-sm-3 card img-rounded'
  col.setAttribute('title','Wow, what a nice listing')
  rowResults.appendChild(col)

  var cardRow1 = document.createElement('div')
  cardRow1.classList.add('cardPicture')
  cardRow1.classList.add('img-responsive')
  cardRow1.setAttribute('src', object.image)
  cardRow1.innerHTML = '<img src="'+object.image+'" />'
  col.appendChild(cardRow1)
  console.dir(cardRow1)

  var cardRow2 = document.createElement('div')
  cardRow2.classList.add('cardTitle')
  cardRow2.innerHTML = object.title
  cardRow2.style.backgroundColor = 'white'
  col.appendChild(cardRow2)
  console.dir(cardRow2)

  var cardRow3 = document.createElement('div')
  cardRow3.classList.add('cardPriceAndBrand')
  col.appendChild(cardRow3)

  var cardRow3Brand = document.createElement('div')
  cardRow3Brand.classList.add('brandText')
  cardRow3Brand.classList.add('col-sm-6')
  cardRow3Brand.style.padding = 0
  cardRow3Brand.style.backgroundColor = 'white'
  cardRow3Brand.classList.add('text-muted')
  cardRow3Brand.innerHTML = object.seller
  cardRow3.appendChild(cardRow3Brand)

  var cardRow3Price = document.createElement('div')
  cardRow3Price.classList.add('priceText')
  cardRow3Price.classList.add('col-sm-6')
  cardRow3Price.style.backgroundColor = 'white'
  cardRow3Price.classList.add('text-success')
  cardRow3Price.classList.add('text-right')
  cardRow3Price.innerHTML = '$' + object.price + '.00'
  cardRow3.appendChild(cardRow3Price)
}

createCardResults(testObject)
createCardResults(testObject2)
createCardResults(testObject3)
createCardResults(testObject4)
createCardResults(testObject5)
createCardResults(testObject6)
createCardResults(testObject7)
createCardResults(testObject8)
createCardResults(testObject9)
createCardResults(testObject10)
createCardResults(testObject11)
createCardResults(testObject12)






// var col2 = col.cloneNode(true)
// var col3 = col.cloneNode(true)
// var col4 = col.cloneNode(true)
// var col5 = col.cloneNode(true)
// var col6 = col.cloneNode(true)
// var col7 = col.cloneNode(true)
// var col8 = col.cloneNode(true)
// var col9 = col.cloneNode(true)
// var col10 = col.cloneNode(true)
// var col11 = col.cloneNode(true)
// var col12 = col.cloneNode(true)
//
// rowResults.appendChild(col2)
// rowResults.appendChild(col3)
// rowResults.appendChild(col4)
// rowResults.appendChild(col5)
// rowResults.appendChild(col6)
// rowResults.appendChild(col7)
// rowResults.appendChild(col8)
// rowResults.appendChild(col9)
// rowResults.appendChild(col10)
// rowResults.appendChild(col11)
// rowResults.appendChild(col12)
