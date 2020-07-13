// import React, { useEffect } from 'react'
import React from 'react'
// import { connect } from 'react-redux'

import Home from './components/Home'

// import { showAllData } from './modules/actions/AllData__Action'

// const App = ({showAllData, list}) => {
const App = () => {

  // useEffect(() => {
  //   showAllData(["haris"])
  // },[])

  // console.log(list.data)

  return (
    <>
      <Home />
    </>
  )
}

// const mapStateToProps = ( state ) => ({
//   list: state.AllData
// })

// const mapDispatchToProps = dispatch => ({
//   showDataAll: (value) => {
//     dispatch(showAllData(value))
//   }
// })

// const mapDispatchToProps = {
//   showAllData
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App)
export default App