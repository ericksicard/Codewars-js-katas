function score( dice ) {
    let arr = [...dice];
    let res = [0,0,0,0,0,0];
    let total = 0;
      
    arr.map( el => res[el-1] ++ );
    res.map( (el,id) => {
      if ( el >= 3 && id == 0 ) total += ( 1000 + (el%3)*100 );
      if ( el == 1 && id == 0 ) total += (el%3)*100 ;
      if ( el >= 3 && id == 1 ) total += 200 ;
      if ( el >= 3 && id == 2 ) total += 300 ;
      if ( el >= 3 && id == 3 ) total += 400 ;
      if ( el >= 3 && id == 4 ) total += ( 500 + (el%3)*50 );
      if ( el == 1 && id == 4 ) total += (el%3)*50 ;
      if ( el >= 3 && id == 5 ) total += 600 ;  
    } );
    
    return total;
  }