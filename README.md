<div align="center">
  <h1>mg-js</h1>
  <a href="https://www.npmjs.com/package/mg-js">
     <img src="https://img.shields.io/npm/v/mg-js.svg" alt="npm package" />
  </a>
</div>


- [React hooks](#react-hooks)
  - [useLazyLoading](#uselazyloading)
    - [you can keep the previous data whene you switch the page](#you-can-keep-the-previous-data-whene-you-switch-the-page)
  - [useObjectState](#useobjectstate)
- [React components](#react-components)
  - [If](#if)
  - [Media query](#media-query)
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

### you can keep the previous data whene you switch the page
add uuidKeeper inside useLazyLoading({uuidKeeper:"unique key"})


## useObjectState

Management of object state

```js
const [object, setObject, reset] = useObjectState({name:"johndoe",isProfession:true})
    setObject("isProfession",false) 
    // updating one value
    
    setObject({name:"johnny",isProfession:false}) 
    // updating many values

    reset(null) 
    // put null in all the values

    // alternative way for forms 👇
    useObjectState(["name","email","password"])
    // adds the string values to the object and updates them with empty string

    useObjectState(["name","email","password",{isFriendly:true,gender:null}])
    // use the alternative way and and set specific values👇
```



# React components

## If

```js
<If condition={true}>
    <Menu>
</If>
```

## Media query

```js
  <MediaQuery minWidth={500} maxWidth={800} >
      <Menu>
  </MediaQuery>
```




# Utils

## timeAgo

Time ago function

```js
timeAgo(Date.now(), "En") //At this moment
timeAgo(Date.now()-(1000*60), "En") //One minute ago
timeAgo(Date.now()-(2000*60), "En") //Before two minutes
```
