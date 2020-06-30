
String.prototype.tag = function(){
    return this.split('_')[0]
}

Object.prototype.getAttr = function(){
    let result = $.extend(true, {}, this);
    Object.keys(result).forEach(x => {
        if (x.includes('_')) { delete result[x]}
    })
    return result
}

Object.prototype.getTag = function(){
    let result = $.extend(true, {}, this);
    Object.keys(result).forEach(x => {
        if (!x.includes('_') || x.charAt(0) == '_') { delete result[x]}
    })
    return result
}

Object.prototype.setId = function(id){
    this.id = id
}