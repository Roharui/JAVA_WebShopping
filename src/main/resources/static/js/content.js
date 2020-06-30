
const nav = {
    class : "nav_container",

    li_() {
        let _class = "nav_item"
        let _text = [1,2,3,4]
        let _href = ["#", "", ""]
        return _text.map((x, i) => {
             return {class : _class, a_ : {text:x, href:_href[i]}}
        })
    }
}

const content = {
    h1_ : {
        text : "IM FLOW",
        id : "title"
    },

    nav_ : nav,

    div_2 : {
        div_login : {
            width : '300px',
            style : `
                    background-color:white;
                    position:absolute;
                    left:30%;
                    top:20%`,
            p_1 : {text : "id"},
            input_id : {
                type : "text"
            },
            p_2 : {text : "pwd"},
            input_pwd : {
                type : "password"
            },
            input_submit : {
                type : "submit"
            }
        }
    }
}