# Prop Drilling Issue

## So basically in order to pass the data from parent to child we need to pass it using props . But in somecases what happens is we pass props through multiple components just to pass it to child component even when the props are not needed in that component so this issue is prop drilling

# Context

It allows us to share the data betweeen components without passing props through every component

Using Context api is simple :

1: First create context using createContext hook : const UserContext = createContext(undefined); so UserContext should start with capital letter we have to pass either null or undefined in createContext at the moment also we have to add the type its going to return

2: Wrap the components where you want to use that <UserContext.Provider values={"john"}>

3:Consume where you need it using useContext(UserContext)

## For advanced pattern look in the example how we have used.

Component rerenders basically on three conditions :
1 : State updates
2 : Context Updates if the component is subscribed to it
3 : Parent re renders

So if a child component is a heavy component , and renders frequently and usually have same value of props , we can use React.memo to optimize it .

# React Memo

React Memo is a higher order component that can be used to wrap components that we donot want to re render when parent component re renders when prop stays same
