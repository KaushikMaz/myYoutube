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

export const CommentsContainer = () => {
  return (
    <div className="mt-4">
      <h1>CommentsContainer</h1>
    </div>
  )
}
