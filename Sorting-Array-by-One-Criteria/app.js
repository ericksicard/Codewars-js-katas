// Sorting the array by popularity and price

const sortedArr = input => {
    let arr = input
    .map( elm => elm.split(',') )
    .sort( (a, b) => {
    if ( b[1] !== a[1] ) return b[1] - a[1]
    return b[2] - a[2]
    })
    return arr;
}


console.log(sortedArr(
    [
        [ 'Item M', ' 100', ' 1' ],
        [ 'Item B', ' 98', ' 22' ],
        [ 'Item A', ' 98', ' 20' ],
        [ 'Item E', ' 98', ' 5' ],
        [ 'Item I', ' 92', ' 95' ],
        [ 'Item B', ' 92', ' 18' ],
        [ 'Item D', ' 91', ' 21' ],
        [ 'Item H', ' 90', ' 45' ],
        [ 'Item C', ' 90', ' 16' ],
        [ 'Item L', ' 75', ' 32' ],
        [ 'Item F', ' 75', ' 12' ],
        [ 'Item G', ' 50', ' 7' ],
        [ 'Item K', ' 23', ' 11' ],
        [ 'Item J', ' 15', ' 17' ]
        ]
))