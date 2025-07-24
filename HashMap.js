export {HashMap}

class HashMap{

    constructor(){
        this.load_factor = 0.75;
        this.capacity = 16;
        this.buckets = new Array(this.capacity).fill(null).map(() => []);
    }

    hash(key){
        let hashCode = 0;
      
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }

        return hashCode;
    }

    set(key, value){

        const bucketIndex = this.hash(key) % this.capacity;
        const bucketArray = this.buckets[bucketIndex];

        bucketValue.push({key, value});

    }

    get(key){

        const bucketIndex = this.hash(key) % this.capacity;
        const bucketArray = this.buckets[bucketIndex];

        for (let i = 0; i < bucketArray; i++){
            if (bucketArray[i].key === key){
                return bucketValue[i].value;
            }
        }
        return null
    }

    has(key){

        const bucketIndex = this.hash(key) % this.capacity;
        const bucketArray = this.buckets[bucketIndex];
        for (let i = 0; i < bucketArray; i++){
            if (bucketArray[i].key === key){
                return true
            }
        return false
        }
    }

    remove(key){
        const bucketIndex = this.hash(key) % this.capacity;
        const bucketArray = this.buckets[bucketIndex];
        for (let i = 0; i < bucketArray; i++){
            if (bucketArray[i].key === key){
                bucketArray.splice(i, 1)
                return true
            }
        return false
        }
    }

    length(){
        const bucketIndex = this.hash(key) % this.capacity;
        const bucketArray = this.buckets[bucketIndex];
        let keyNumber;
        for (let i = 0; i < bucketArray; i++){
            if (bucketArray.key){
                keyNumber++;
                
            }
        }
        return keyNumber;
    }

    clear(){
        this.buckets = new Array(this.capacity).fill(null).map(() => []);
    }

    keys(){
        const keyArray = [];
        const bucketIndex = this.hash(key) % this.capacity;
        const bucketArray = this.buckets[bucketIndex];
        for (let i = 0; i < bucketArray.length; i++){
            keyArray.push(bucketArray[i].key);
        }
        return keyArray;
    }

    values(){
        const valueArray = [];
        const bucketIndex = this.hash(key) % this.capacity;
        const bucketArray = this.buckets[bucketIndex];
        for (let i = 0; i < bucketArray.length; i++){
            valueArray.push(bucketArray[i].value);
        }
        return valueArray;

    }

    entries(){
        const entriesArray = [];
        for (let i = 0; i < this.buckets.length; i++){
            entriesArray.push(this.buckets[i]);
        }
        return entriesArray;
    }
}
