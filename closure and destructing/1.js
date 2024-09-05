function counter(){
    let count=0
    return{
        increment(){
            count++
        },
        getCount(){
            return count
        }
    }
}

object=counter()
object.increment();
object.increment();
object.increment();
object.increment();
console.log(object.getCount());