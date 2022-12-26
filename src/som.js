const manReq = false
const aniReq = false

function somethingcallback(callback,errorcallback){
    if(manReq){
        errorcallback({
            name : 'Man is Required there!',
            message : "You've dissappinted meh"
        })
    }
    else if(aniReq){
        errorcallback({
            name: 'Animal is Required there!',
            message : 'this animal has survived bruhh!'
        })
    }
    else {
        callback('Yey bruh yu won the game at last!!')
    }
}

somethingcallback((message) =>{
    console.log("Success:" + message);
},(error) => {
    console.log(error.name + " " + error.message)
})

