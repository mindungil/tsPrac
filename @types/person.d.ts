// 다음과 같은 모양을 갖는 객체 인터페이스

export interface Person {
    name: string;
    age: number;
}

export interface Student extends Person {
    semester: number;
}