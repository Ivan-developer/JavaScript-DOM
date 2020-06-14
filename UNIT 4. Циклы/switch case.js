let num = 20;
switch (true) { // Постоянное значение true вместо num
    case num >= 10 && num <= 20:
        console.log('Yes')
        break;
    default:
        console.log('no')
}

var foo = 1;
switch (true) { // Постоянное значение true вместо foo
    case foo >= 0 && foo <= 3:
        alert('yes');
        break;
    default:
        alert('not');
}

let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Маловато' );
    break;
  case 4:
    alert( 'В точку!' );
    break;
  case 5:
    alert( 'Перебор' );
    break;
  default:
    alert( "Нет таких значений" );
}