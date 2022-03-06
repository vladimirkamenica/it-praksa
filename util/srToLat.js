export default function(path){
        var word = [
            {
                sign : 'š',
                change : 's'
            },{
                sign : 'đ',
                change : 'dj'
            },{
                sign : 'ž',
                change : 'z'
            },{
                sign : 'č',
                change : 'c'
            },{
                sign : 'ć',
                change : 'c'
            }

        ]
        let arr = ['š','đ','ž','č','ć']
        var re = new RegExp(arr.join("|"), "gi");
        return path.replace(re,(w)=>{
           var find =  word.find(x=> x.sign == w);
           return find.change;
        });
        
        
}