import React from 'react'
import { toggleInteraction } from './utils/appSlice'
import { useDispatch, useSelector } from 'react-redux'


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
},]

const Comment=({data})=>{
  const {name,text,replies}=data
  return(
    <div>
      <div className="flex my-1">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 rounded-full border border-black mt-1 mr-2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
        <div>
          <h3 className="font-semibold">{name}</h3>
          <p >{text}</p>
        </div>
      </div>
    </div>
  )
  
}

const CommentsList=({comments})=>{
  return comments.map((comment,index)=>(
  <div>
    <Comment key={index} data={comment}/>
    <div className="ml-5 pl-5 border border-l-black border-dotted">
      <CommentsList key={index} comments={comment.replies}/>
        
    </div>
  </div>
))}

export const CommentsContainer = () => {
  const dispatch=useDispatch()
  const interactionState = useSelector(store => store.app.isInteractionOpen)
  const handleToggleClick = () => {
    dispatch(toggleInteraction());
  };

  return (
    <div className="ml-4 px-20">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold">Comments</h1>
        <svg
          onClick={handleToggleClick}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-6 h-6 cursor-pointer ${
            interactionState ? 'text-blue-500' : 'text-gray-400'
          }`}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
        <svg
          onClick={handleToggleClick}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-6 h-6 cursor-pointer ${
            interactionState ? 'text-gray-400' : 'text-blue-500'
          }`}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
      </div>

      {/* Render CommentsList based on interactionState */}
      {interactionState && <CommentsList comments={commentsData} />}
    </div>
  );
};

