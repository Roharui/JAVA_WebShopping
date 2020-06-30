
function DIV(ct, X){
    Object.keys(ct).forEach(x => {
        let h = ct[x]
        h = typeof(h) == 'function'?h():[h]

        h.forEach((y, i) =>{
            let t = x
            if(h.length > 1) t += i
            if(y['id'] == undefined) y.setId(t)

            X.append(
                DIV(y.getTag(), $(`<${x.tag()}>`, y.getAttr()))
            )
        })
    })

    return X
}

let Loader = {
    body_loder(){
        DIV(content, $('body'))
    },

    style_loader(){
        $('head').append($('<style>', {text : h_style}))
    }
}

$(document).ready(x => {
    Object.keys(Loader).forEach(x => {
        Loader[x]()
    })
})