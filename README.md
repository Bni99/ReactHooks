Component rerenders basically on three conditions :
1 : State updates
2 : Context Updates if the component is subscribed to it
3 : Parent re renders

So if a child component is a heavy component , and renders frequently and usually have same value of props , we can use React.memo to optimize it .

React Memo is a higher order component that can be used to wrap components that we donot want to re render when parent component re renders when prop stays same
