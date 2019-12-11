const Memory = require('./Memory');
let memory = new Memory();

class Array {
    constructor() {
        this.length = 0;
        this._capacity = 0;
        this.ptr = memory.allocate(this.length);
    }
    //creates block
    //pushes value into block
    //O(n)
    push(value) {
        if(this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }
        memory.set(this.ptr + this.length, value);
        this.length++;
    }

    //gives extra space
    _resize(size) {
        const oldPtr = this.ptr;

        this.ptr = memory.allocate(size);
        if(this.ptr === null) {
            throw new Error('Out of memory');
        }
        memory.copy(this.ptr, oldPtr, this.length);
        memory.free(oldPtr);
        this._capacity = size;
    }

    //Retrieving values from the provided index
    get(index) {
        if(index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        return memory.get(this.ptr + index);
    }

    //Removes the value at the end of the array
    pop(){
        if(this.length == 0) {
            throw new Error('Index error');
        }
        const value = memory.get(this.ptr + this.length);
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
        memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
        memory.set(this.ptr + index, value);
        this.length++;
    }

    //Removing Values from specific point in an array
    remove(index) {
        if(index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        memory.copy(this.ptr + this.ptr + index + 1,  this.length - index - 1);
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
    arr.push(19); //where the values changes (pointer = 3 and capacity = 12)
    arr.push(45);
    arr.push(10);
    arr.push(10);
    arr.push(3);
    arr.push(5);
    arr.push(15);
    arr.push(45);
    arr.push(10);
    arr.push(3); //where the values changes (pointer = 15 and capacity = 39)
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
    console.log(arr.get(arr.length-1)); //It will return NaN because the memory allocated only accepts Float64Array
}

main();

module.exports = Array;