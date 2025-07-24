import {Node} from "./Node.js"

export {LinkedList}

class LinkedList{

    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    
    append(value){

        const newNode = new Node(value);

        if (this.head === null){
            this.head = newNode;
            this.tail = newNode;
        } else{
            this.tail.nextNode = newNode;
            this.tail = newNode;
        }

        this.size++;
    }

    prepend(value){
        const newNode = new Node(value);

        if(this.head === null){
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.nextNode = this.head;
            this.head = newNode;
        }
        
        this.size ++;
    }

    size(){
        return this.size;
    }

    head(){
        return this.head;
    }

    tail(){
        return this.tail;
    }

    at(index){

        if (index > this.size || index < 0){
            console.log("Linked List index doesn't exist!")
        }

        let count = 0
        let currentNode = this.head;
        while(index > count){
            currentNode = currentNode.nextNode;
            count--;
        }

        return currentNode;
    }

    pop(){

        if (this.head === null){
            console.log("Linked List is already empty!");
            return;
        } else if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
            this.size = 0;
            return;
        } else {
            const secLastNodeIndex = (this.size - 2);
            this.at(secLastNodeIndex).nextNode = null;
            this.tail = this.at(secLastNodeIndex);
            this.size --;
        }
        return
    }

    contains(value){

        let currentNode = this.head;
        while (currentNode){
            if (currentNode.val === value){
                return true
            }
            currentNode = currentNode.nextNode;
        }
        return false
    }
    

    find(value){

        let currentNode = this.head;
        let index = 0;
        while (currentNode){
            if (currentNode.value === value){
                return index;
            }
            currentNode = currentNode.nextNode;
            index++;
        }
        return index;
    }

    toString(){
        let currentNode = this.head;
        let LinkedListString = "";

        while (currentNode){
            LinkedListString += `( ${currentNode.value} ) -> `;
            currentNode = currentNode.nextNode;
        }
        LinkedListString += " null";
        return LinkedListString;
    }
}