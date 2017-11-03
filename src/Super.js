class Super {
    constructor(name) {
        if (name) {
            this.name = name;
        } else {
            this.name = 'default';
        }
    }

    print() {
        console.log(this.name);
    }
}

export default Super;
