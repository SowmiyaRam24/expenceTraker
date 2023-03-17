/*function createpost(c){
    setTimeout(()=>{
        console.log("sowmiya1");
        if(c){

            c()
        }
       },3000)
    
}

function createpost1(c){
    setTimeout(()=>{
        console.log("sowmoiya2")
        if(c){

            c();
        }
    },1000)
    
}
function createpost2(){
    setTimeout(()=>{
        console.log("sowmiya3")
    })
}
// createpost(createpost1,createpost2)
//createpost(()=>createpost1(createpost2))
const firstCode=new Promise((resolve,reject)=>{
    let sowmiya= true
    if(sowmiya)
        resolve()
    else
        reject()
})
// firstCode.then(console.log("sowmiyagood"))
// .catch(console.log("sowmiya"))
firstCode.then( function success(){
    consolen.log("thanks")
})
.catch( function failure(){
    console.log("not thanks")
// } 
 
const post =[{title:"post",body:"this is body"},{title:"post2"}]
function printPost1(){
    posts.forEach((posts)=>{
        console.log(posts.title)
    })
 }

function printPost(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            posts.push({title:"post3"})
            resolve()
        },1000);
    })
}
function printPost3(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          posts.pop(posts)
          resolve()
        })
    })
}*/
/*let  posts = [{title: 'POST1'}];
//Do not touch this function
function create2ndPost() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push({title: 'POST2'});
            posts.forEach((posts)=>{
                console.log(posts.title)
            })
            resolve()
        }, 3000)
    }) 
}
//Do not touch this function
function create3rdPost() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push({title: 'POST3'});
            
            resolve();
        }, 2000)
    }) 
}
Promise.all([create2ndPost,create3rdPost]).then()
//create2ndPost().then(create3rdPost)
//Do not touch this function
/*function deletePost(){
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            if(posts.length > 0){
                const poppedElement  = posts.pop();
                resolve(poppedElement);
            } else {
                reject("ERROR: ARRAY IS EMPTY")
            }
        }, 1000)
    })
}

create2ndPost().then(()=>{deletePost ()
    .then(()=>{
        create3rdPost().then(()=>{
            deletePost().then((deletePost1)=>{
                console.log(deletePost1.title)
                create3rdPost().then(()=>{
                    console.log(posts.title)
                    deletePost().then((deletePost2)=>{
                        console.log(deletePost2.title)
                        deletePost().catch((msg)=>{
                            console.log(msg)
                        })
                    })
                })

            })
        })
    })
}
//Modify the lines below and use .then and .catch smartly t// /printPost().then((printPost3))
// .then((printPost1)).then((printPost*/
//async await
console.log('person1:shows ticket');
console.log('person2:shows ticket');

const promiseWife = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("ticket");
    },3000)
})
const getPopcorn = promiseWife.then((t)=>{
    console.log('husband:we should go in');
    console.log('wife:no i am hungry')
    return new Promise((resolve,reject)=>{
        resolve(`${t} popcorn`);
    })
})
const getButter=getPopcorn.then((t)=>{
    console.log('husband:we should go in');
    console.log('wife:i need better')
    return new Promise((resolve,reject)=>{
        resolve(`${t} popcorn`);
    })
})

console.log('person4:shows ticket');
console.log('person5:shows ticket');



