const Memory = require('./Memory');
let mem = new Memory();

class Array {
    constructor() {
        this.length = 0;
        this._capacity = 0;
        this.ptr = mem.allocate(this.length);
    }
    //creates block
    //pushes value into block
    //O(n)
    push(value) {
        if(this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }
        mem.set(this.ptr + this.length, value);
        this.length++;
    }

    //gives extra space
    _resize(size) {
        const oldPtr = this.ptr;

        this.ptr = mem.allocate(size);
        if(this.ptr === null) {
            throw new Error('Out of memory');
        }
        mem.copy(this.ptr, oldPtr, this.length);
        mem.free(oldPtr);
        this._capacity = size;
    }

    //Retrieving values from the provided index
    get(index) {
        if(index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        return mem.get(this.ptr + index);
    }

    //Removes the value at the end of the array
    pop(){
        if(this.length == 0) {
            throw new Error('Index error');
        }
        const value = mem.get(this.ptr + this.length);
        this.length--;
        return value;
    }

    //Inserting values
    insert(index, value) {
        if(index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        if(this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }
        mem.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
        mem.set(this.ptr + index, value);
        this.length++;
    }

    //Removing Values from specific point in an array
    remove(index) {
        if(index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        mem.copy(this.ptr + this.ptr + index + 1,  this.length - index - 1);
        this.length--;
    }
}

function main(){

    Array.SIZE_RATIO = 3;

    // Create an instance of the Array class
    let arr = new Array();

    // Add an item to the array
    arr.push(3);
    arr.push(5);
    arr.push(15);
    arr.push(19); //where the pointer = 3 and capacity increases 3*4
    arr.push(45);
    arr.push(10);
    arr.push(10);
    arr.push(3);
    arr.push(5);
    arr.push(15);
    arr.push(45);
    arr.push(10);
    arr.push(3); //where the pointer = 14 and capacity increase 13*3 and point = 15
    arr.pop();
    arr.pop();
    arr.pop();
    console.log(arr);

    //#4
    console.log(arr.get(0));
    
    let arrLength = arr.length;
    for(let i = 0; i < arrLength; i++) { 
        arr.pop();
    }

    arr.push('tauhida');
    console.log(arr.get(arr.length-1)); //It will return NaN because the memory we allocated only accepts Float64Array
}

main();

module.exports = Array;