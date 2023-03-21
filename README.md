<div align="center">
  <h1>mg-js</h1>
  <a href="https://www.npmjs.com/package/mg-js">
     <img src="https://img.shields.io/npm/v/mg-js.svg" alt="npm package" />
  </a>
</div>


- [React hooks](#react-hooks)
  - [useLazyLoading](#uselazyloading)
  - [useObjectState](#useobjectstate)
- [React components](#react-components)
  - [If](#if)
- [Utils](#utils)
  - [timeAgo](#timeago)
# React hooks


## useLazyLoading

Lazy loading images

```js
const [Intersector, data, setData] = useLazyLoading({ initPage: 0, distance: "50px", targetPercent: 0.5 }, (page) => {
    // do your api request using page parameter and update the data state 
  })
  return (
    <div>
      {/* rendering the data */}
      {data.map(item => {
        return <img src={item.link} />
      })}
      {/* put the intersector at the end */}
      <Intersector />
    </div>
  )
```

## useObjectState

Management of object state

```js
const [object, setObject, reset] = useObjectState({name:"johndoe",isProfession:true})
      // object -> {name:"johndoe",isProfession:true}
      setObject("isProfession",false) //{name: "johndoe",isProfession:false}
      reset() //{name:'',isProfession:''}
      // alternative way for forms 👇
      const [object, setObject, reset] = useObjectState(["name","email","password"])
      // object -> {name:'',email:'',password:''}
```



# React components

## If

if component

```js
<If condition={true}>
    <Menu>
</If>
```



# Utils

## timeAgo

Time ago function

```js
timeAgo(Date.now(), "En") //At this moment
timeAgo(Date.now()-(1000*60), "En") //one minute ago
timeAgo(Date.now()-(2000*60), "En") //Before two minutes
```
