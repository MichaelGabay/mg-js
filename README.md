<div align="center">
  <h1>mg-js</h1>
  <a href="https://www.npmjs.com/package/mg-js">
     <img src="https://img.shields.io/npm/v/mg-js.svg" alt="npm package" />
  </a>
</div>


- [React hooks](#react-hooks)
  - [useLazyLoading](#uselazyloading)


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

