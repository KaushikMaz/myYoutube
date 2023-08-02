import React from 'react'


const commentsData=[
  {
      name:"Kaushik Mazumdar",
      text:"Its been such a nice way to understand recursion in such comments",
      replies:[
        {
          name:"Kaushik Mazumdar",
          text:"Its been such a nice way to understand recursion in such comments",
          replies:[
            
          ]
      },{
        name:"Kaushik Mazumdar",
        text:"Its been such a nice way to understand recursion in such comments",
        replies:[
          {
            name:"Kaushik Mazumdar",
            text:"Its been such a nice way to understand recursion in such comments",
            replies:[
              {
                name:"Kaushik Mazumdar",
                text:"Its been such a nice way to understand recursion in such comments",
                replies:[
                  {
                    name:"Kaushik Mazumdar",
                    text:"Its been such a nice way to understand recursion in such comments",
                    replies:[
                      
                    ]
                },
                  
                ]
            },
              
            ]
        },
          
        ]
    },

      ]
  },
  {
    name:"Kaushik Mazumdar",
    text:"Its been such a nice way to understand recursion in such comments",
    replies:[
      
    ]
},
{
  name:"Kaushik Mazumdar",
  text:"Its been such a nice way to understand recursion in such comments",
  replies:[
    
  ]
},
  
]
const Comment=({data})=>{
  const {name,text,replies}=data
  return(
    <div>
      <div className="flex">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 rounded-full border border-black mt-1 mr-2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
        <div>
          <h3 className="font-semibold m-0">{name}</h3>
          <p className="m-0">{text}</p>
        </div>
      </div>
    </div>
  )
  
}

export const CommentsContainer = () => {
  return (
    <div className="ml-4 px-20">
      <h1 className="text-2xl font-bold">Comments</h1>
      <Comment data={commentsData[0]}/>
    </div>
  )
}
