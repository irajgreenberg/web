class Vec2 {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    addV(v: Vec2) {
        this.x += v.x;
        this.y += v.y;
    }

    subV(v: Vec2) {
        this.x -= v.x;
        this.y -= v.y;
    }

    multV(v: Vec2) {
        this.x *= v.x;
        this.y *= v.y;
    }

    divV(v: Vec2) {
        this.x /= v.x;
        this.y /= v.y;
    }

    addS(s: number) {
        this.x /= s;
        this.y /= s;
    }

    subS(s: number) {
        this.x /= s;
        this.y /= s;
    }

    multS(s: number) {
        this.x /= s;
        this.y /= s;
    }

    divS(s: number) {
        this.x /= s;
        this.y /= s;
    }

}

    class Greeter {
    element: HTMLElement;
    span: HTMLElement;
    timerToken: number;

    constructor(element: HTMLElement) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }

    start() {
        this.timerToken = setInterval(() => this.span.innerHTML = new Date().toUTCString(), 500);

    }

    stop() {
        clearTimeout(this.timerToken);
    }

}

window.onload = () => {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start();
};