    // var elements=[

    // {
    //     title:1,
    //     body:"this is title 1"

    // },
    // {
    //     title:2,
    //     body:"this is title 2"

    // }
    // ,
    // {
    //     title:3,
    //     body:"this is title 1"

    // }
    // ,
    // {
    //     title:4,
    //     body:"this is title 4"

    // },
    // {
    //     title:5,
    //     body:"this is title 5"

    // }
    // ,
    // {
    //     title:6,
    //     body:"this is title 6"

    // },
    // {
    //     title:7,
    //     body:"this is title 7"

    // }
    // ,
    // {
    //     title:8,
    //     body:"this is title 8"

    // }];

    const fetchdata= async (config)=>{
        try{
            var data= await axios(config);
           return data.data;
           
        }catch(err){
            throw Error("there is a Error");
        }
    
    };
    





var posts=document.querySelector(".posts");

const loadData= async()=>{
    var elements= await fetchdata("https://jsonplaceholder.typicode.com/posts");
    elements.map((element)=>{
    var post=document.createElement("div");
    post.classList.add("post");
   post.innerHTML=` <h2 class="head">${element.id}</h2>
            <p class="part">${element.title}</p>`;
            posts.appendChild(post);
});
};

loadData();


