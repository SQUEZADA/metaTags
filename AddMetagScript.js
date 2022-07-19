var metaTagList = [
    {name:"og:url",content:""},
    {name:"og:title",content:""},
    {name:"og:description",content:""},
    {name:"og:image",content:""},
    {name:"fb:app_id",content:""},
    {name:"og:type",content:""},
    {name:"og:locale",content:""},
    {name:"twitter:card",content:""},
    {name:"twitter:site",content:""},
    {name:"twitter:title",content:""}, 
    {name:"twitter:description",content:""},
    {name:"twitter:image",content:""},
    {name:"twitter:image:alt",content:""},
];

metaTagList.map( (tag)=>{
    var tagFound = Array.from(document.querySelectorAll(`meta[name='${tag.name}']`));
    if(tagFound.length > 0){
        console.log("tag found",tagFound);
        return tagFound[0];
    }else{
        console.log("tag not found")
        var newMeta = document.createElement("meta");
        newMeta.setAttribute("name",tag.name);
        newMeta.setAttribute("content",tag.content);
        var header = document.querySelector("head")
        header.appendChild(newMeta)
        return {}
    }
})
