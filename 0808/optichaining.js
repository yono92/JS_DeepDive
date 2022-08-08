let elem = null;

// elem 이 null or undefined이면 undefiend를 반환하고, 그렇지 않으면 우항의 프로퍼티 참조를 이어간다.
let value = elem?.value;

console.log(value);

// elemdl Falsy 값이면 elem으로 평가되고 elem이 Truthy 값이면 elem.value로 평가된다.
let value2 = elem && elem.value;

console.log(value2);